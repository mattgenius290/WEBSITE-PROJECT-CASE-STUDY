document.addEventListener("DOMContentLoaded", () => {
    console.log("featured-slider.js: Fetching from Central DB...");
  
    // ================================================
    // NEW: RATING COLOR HELPER
    // ================================================
    function getRatingClass(ratedValue) {
        if (!ratedValue) return "";
        const rating = ratedValue.toUpperCase().trim();

        // GREEN: General Audience (Safe for all)
        if (["G", "TV-Y", "TV-G"].includes(rating)) {
            return "rating-G";
        }
        
        // ORANGE: Parental Guidance (Caution)
        if (["PG", "TV-Y7", "TV-PG", "7+"].includes(rating) || rating.includes("PG-")) {
            return "rating-PG";
        }
        
        // RED: Mature/Restrictive (Adult/Teen)
        if (["R", "TV-14", "TV-MA", "13+", "16+"].includes(rating) || rating.includes("R-")) {
            return "rating-MA";
        }

        return "rating-PG"; // Defaulting unknown/unlisted to PG/Orange as a precaution
    }

    function loadFeaturedSlider() {
        // 1. CHECK DATABASE
        if (!window.MovieDB) {
            console.error("MovieDB not found. Ensure Database.js is loaded first.");
            return;
        }
  
        // 2. FETCH DATA (Only items marked as 'featured')
        const movies = window.MovieDB.getFeatured();
  
        // Safety check: Ensure we only take the top 10 if there are more
        const sliderMovies = movies.slice(0, 10);
  
        try {
            const slider = document.querySelector(".slider");
            const slidesContainer = document.getElementById("featured-slides-container");
            const slideTemplate = document.getElementById("featured-slide-template");
            const contentTemplate = document.getElementById("featured-content-template");
  
            if (!slider || !slidesContainer || !slideTemplate || !contentTemplate) {
                console.error("Slider containers or templates not found!");
                return;
            }
  
            // Clear existing injected content to prevent duplicates
            slidesContainer.innerHTML = "";
            slider.querySelectorAll(".content").forEach(el => el.remove());
  
            // 3. GENERATE SLIDES
            sliderMovies.forEach((movie, index) => {
                // --- A. Background Slide ---
                const slideClone = slideTemplate.content.cloneNode(true);
                const slideDiv = slideClone.querySelector(".slide");
                
                // Use backdropUrl from Database
                slideDiv.style.backgroundImage = `url(${movie.backdropUrl})`;
                
                if (index === 0) {
                    slideDiv.classList.add("active");
                }
                slidesContainer.appendChild(slideClone);
  
                // --- B. Content Overlay ---
                const contentClone = contentTemplate.content.cloneNode(true);
  
                // Map Text
                contentClone.querySelector(".featured-title").textContent = movie.title;
                contentClone.querySelector(".featured-description").textContent = movie.description;
  
                // Map Tags
                const ratedTag = contentClone.querySelector(".featured-tag-rated");
                if (ratedTag) {
                    ratedTag.textContent = movie.tags.rated;
                    // Apply Dynamic Color Class
                    ratedTag.classList.add(getRatingClass(movie.tags.rated));
                }

                contentClone.querySelector(".featured-tag-type").textContent = movie.tags.type;
                
                // ============================================================
                // IMPROVED GENRE LOGIC (Handles any data format)
                // ============================================================
                const rawGenres = movie.tags.genres || [];
                
                // 1. Flatten: Split ANY string containing commas into separate items
                // Example: ["Action, Comedy", "Drama"] -> ["Action", "Comedy", "Drama"]
                let cleanGenres = [];
                rawGenres.forEach(g => {
                    if (typeof g === 'string') {
                        // Split by comma and trim whitespace
                        const split = g.split(',').map(s => s.trim());
                        cleanGenres.push(...split);
                    }
                });
  
                // 2. Slice: Take only the first 2 genres
                const limitedGenres = cleanGenres.slice(0, 1);
  
                // 3. Join: Create the final string
                const displayGenres = limitedGenres.join(", ");
  
                // 4. Render
                contentClone.querySelector(".featured-tag-genres").textContent = displayGenres;
                // ============================================================
                
                // Map Details Box
                const detRated = contentClone.querySelector(".featured-detail-rated");
                if(detRated) detRated.textContent = movie.tags.rated;
  
                const detRelease = contentClone.querySelector(".featured-detail-release");
                if(detRelease) detRelease.textContent = movie.meta.release;
  
                const detQuality = contentClone.querySelector(".featured-detail-quality");
                if(detQuality) detQuality.textContent = movie.meta.quality || "HD";
  
                // Set active class for first item
                if (index === 0) {
                    contentClone.querySelector(".content").classList.add("active-content");
                }
  
                // --- C. Interaction (Click to Preview) ---
                const watchBtn = contentClone.querySelector(".watch-btn");
                const detailBtn = contentClone.querySelector(".detail-btn");
  
                const openPreview = () => {
                    if(typeof window.openMoviePreview === 'function') {
                        // Pass the full movie object + ensure previewId is set
                        window.openMoviePreview({ ...movie, previewId: movie.id });
                    } else {
                        console.error("openMoviePreview function not found in SystemManager.js");
                    }
                };
  
                if (watchBtn) watchBtn.addEventListener("click", openPreview);
                if (detailBtn) detailBtn.addEventListener("click", openPreview);
                
                slider.appendChild(contentClone);
            });
  
            // 4. INIT SLIDER LOGIC
            initSlider(sliderMovies.length);
  
        } catch (error) {
            console.error("Failed to load featured slider:", error);
        }
    }
  
    /**
     * Initializes the visual slider functionality (Transitions, Auto-play, Dots).
     */
    function initSlider(slideCount) {
        const slides = document.querySelectorAll(".slide");
        const allContent = document.querySelectorAll(".content");
        const prevBtn = document.querySelector(".prev-btn");
        const nextBtn = document.querySelector(".next-btn");
        const currentSlideEl = document.querySelector(".current-slide");
        const totalSlidesEl = document.querySelector(".total-slides");
        const dotsContainer = document.querySelector(".slider-dots-container");
        let dots = [];
  
        let index = 0;
        const autoPlayTime = 6000;
        let autoPlayInterval;
  
        function showSlide(newIndex, direction = "next") {
            // Toggle Backgrounds
            slides.forEach((slide, i) => slide.classList.toggle("active", i === newIndex));
  
            // Toggle Content Overlay with Animation
            allContent.forEach((content, i) => {
                content.classList.remove("active-content", "zoom-in", "zoom-out");
                if (i === newIndex) {
                    content.classList.add("active-content");
                    // Trigger reflow to restart animation
                    void content.offsetWidth;
                    content.classList.add(direction === "next" ? "zoom-in" : "zoom-out");
                }
            });
  
            // Update Counter
            if (currentSlideEl) currentSlideEl.textContent = newIndex + 1;
            
            // Update Dots
            if (dots.length > 0) {
                dots.forEach((dot, i) => dot.classList.toggle("active", i === newIndex));
            }
            
            index = newIndex; 
        }
  
        function playNext() {
            let newIndex = (index + 1) % slides.length;
            showSlide(newIndex, "next");
        }
  
        function playPrev() {
            let newIndex = (index - 1 + slides.length) % slides.length;
            showSlide(newIndex, "prev");
        }
  
        function resetAutoPlay() {
            clearInterval(autoPlayInterval);
            autoPlayInterval = setInterval(playNext, autoPlayTime);
        }
  
        // Generate Dots
        if (dotsContainer) {
            dotsContainer.innerHTML = "";
            for (let i = 0; i < slideCount; i++) {
                const dot = document.createElement("div");
                dot.classList.add("dot");
                if (i === 0) dot.classList.add("active");
                
                dot.addEventListener("click", () => {
                    showSlide(i, i > index ? "next" : "prev");
                    resetAutoPlay();
                });
                
                dotsContainer.appendChild(dot);
                dots.push(dot);
            }
        }
  
        // Update Total Count Label
        if (totalSlidesEl) {
            totalSlidesEl.textContent = slideCount;
        }
        
        // Bind Controls
        if (nextBtn) nextBtn.onclick = () => { playNext(); resetAutoPlay(); };
        if (prevBtn) prevBtn.onclick = () => { playPrev(); resetAutoPlay(); };
  
        // Start Autoplay
        if (slides.length > 0) {
            autoPlayInterval = setInterval(playNext, autoPlayTime);
        }
    }
  
    loadFeaturedSlider();
  });