document.addEventListener("DOMContentLoaded", () => {
    console.log("trending.js: Fetching from Central DB...");
  
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


    // ================================================
    // 1. HELPER: PARSE STATS & CALCULATE SCORE
    // ================================================
    function getTrendingScore(movie, period) {
        const popularity = movie.stats.popularity || 0;
        
        // Parse IMDB (e.g., "6.2/10" -> 6.2)
        const imdbStr = movie.stats.imdb || "0";
        const imdb = parseFloat(imdbStr.split("/")[0]) || 0;
  
        // Parse Popularity Change (e.g., "▲ 15" -> 15, "▼ 5" -> -5)
        let change = 0;
        if (movie.stats.popularityChange) {
            const cleanStr = movie.stats.popularityChange.replace(/,/g, '');
            const val = parseInt(cleanStr.replace(/[^\d]/g, ''), 10) || 0;
            if (cleanStr.includes('▲')) change = val;
            if (cleanStr.includes('▼')) change = -val;
        }
  
        // --- SCORING LOGIC ---
        switch (period) {
            case 'Week':
                // Week = Popularity + Momentum (Amplify the change)
                return popularity + (change * 20); 
            
            case 'Month':
                // Month = Popularity + Quality (Sustained value)
                return popularity + (imdb * 100);
            
            case 'Today':
            default:
                // Today = Raw Popularity
                return popularity;
        }
    }
  
    // ================================================
    // 2. POPULATE TRENDING LIST
    // ================================================
    function loadTrendingItems(period = 'Today') {
        const container = document.getElementById("trending-list-container");
        const template = document.getElementById("trending-item-template");
  
        if (!container || !template) return;
  
        // Clear current list with a small fade effect
        container.style.opacity = '0.5';
        
        // 1. Fetch a larger pool of movies to sort from
        let rawData = window.MovieDB.getTrending(50); 
  
        // 2. Sort based on the selected Period
        const sortedData = rawData.sort((a, b) => {
            return getTrendingScore(b, period) - getTrendingScore(a, period);
        });
  
        // 3. Slice the top 10 after sorting
        const trendingData = sortedData.slice(0, 10);
  
        // 4. Render
        setTimeout(() => {
            container.innerHTML = "";
  
            trendingData.forEach((movie, index) => {
                const clone = template.content.cloneNode(true);
                const ratedClass = getRatingClass(movie.tags.rated); // <-- New: Get the class
                
                // Selectors
                const listItem = clone.querySelector(".trending-item");
                const thumb = clone.querySelector(".item-thumbnail");
                const popup = clone.querySelector(".movie-popup");

                // --- 1. RANK & BASIC INFO ---
                const rankStr = (index + 1).toString().padStart(2, '0');
                clone.querySelector(".rank-number").textContent = rankStr;
                
                if(thumb) {
                    thumb.src = movie.posterUrl;
                    thumb.alt = movie.title;
                    thumb.loading = "lazy";
                }
                clone.querySelector(".item-title").textContent = movie.title;
  
                // --- 2. LIST TAGS ---
                const tagsContainer = clone.querySelector(".trending-tags-row");
                if(tagsContainer) {
                    tagsContainer.innerHTML = `
                        <span class="trending-tag tag-rated ${ratedClass}">${movie.tags.rated}</span>
                        <span class="trending-tag tag-type">${movie.tags.type}</span>
                    `;
                }
  
                // --- 3. POPUP CONTENT ---
                if (popup) {
                    clone.querySelector(".popup-title").textContent = movie.title;
                    clone.querySelector(".popup-summary").textContent = movie.description;
                    
                    // Helper for popup tags
                    const setPopupText = (sel, val) => {
                        const el = clone.querySelector(sel);
                        if(el) { el.textContent = val; el.style.display = "inline-flex"; }
                    };
                    
                    // Set text and apply color class to popup tag
                    const popupRatedTag = clone.querySelector(".popup-tag-rated");
                    if (popupRatedTag) {
                        popupRatedTag.textContent = movie.tags.rated;
                        popupRatedTag.classList.add(ratedClass);
                    }
                    
                    setPopupText(".popup-tag-type", movie.tags.type);
                    setPopupText(".popup-tag-released", movie.meta.release);
    
                    // Scores
                    clone.querySelector(".imdb-score .score-value").textContent = movie.stats.imdb;
                    clone.querySelector(".popularity-score .score-value").textContent = movie.stats.popularity;
                    
                    // Popularity Change
                    const popChange = clone.querySelector(".popularity-change-icon");
                    if (popChange) {
                        popChange.textContent = movie.stats.popularityChange || "";
                        popChange.style.display = movie.stats.popularityChange ? "inline" : "none";
                        
                        // Color code the change
                        if(movie.stats.popularityChange?.includes('▲')) popChange.style.color = '#46d369';
                        if(movie.stats.popularityChange?.includes('▼')) popChange.style.color = '#ff4a4a';
                    }
    
                    // Details List
                    const setDetailText = (sel, val) => {
                        const el = clone.querySelector(sel);
                        if(el) el.textContent = val;
                    };
                    setDetailText(".detail-status", movie.tags.status || "Released");
                    setDetailText(".detail-genre", movie.tags.genres.join(", "));
                    setDetailText(".detail-duration", movie.meta.duration);
                    setDetailText(".detail-type", movie.tags.type);
                    setDetailText(".detail-released", movie.meta.release);
                    setDetailText(".detail-rated", movie.tags.rated);
                }
  
                // --- 4. INTERACTION LOGIC (UPDATED) ---
                if (listItem) {
                    
                    // A. HOVER LOGIC: Restrict trigger to Thumbnail Only
                    if (thumb && popup) {
                        
                        // 1. Enter Thumbnail -> Show Popup
                        thumb.addEventListener("mouseenter", () => {
                            listItem.classList.add("is-hovered");
                        });

                        // 2. Leave Thumbnail -> Hide Popup (UNLESS moving to the popup itself)
                        thumb.addEventListener("mouseleave", (e) => {
                            // Check if the mouse moved into the popup
                            if (e.relatedTarget && popup.contains(e.relatedTarget)) {
                                return; // Keep it open
                            }
                            listItem.classList.remove("is-hovered");
                        });

                        // 3. Leave Popup -> Hide Popup (UNLESS moving back to the thumbnail)
                        popup.addEventListener("mouseleave", (e) => {
                            if (e.relatedTarget && thumb.contains(e.relatedTarget)) {
                                return; // Keep it open
                            }
                            listItem.classList.remove("is-hovered");
                        });
                    }

                    // B. CLICK LOGIC:
                    
                    // 1. Popup Container: Stop clicks inside text from redirecting
                    if (popup) {
                        popup.addEventListener("click", (e) => {
                            e.stopPropagation();
                        });
                    }

                    // 2. Watch Button (Inside Popup): Explicitly Redirects
                    const watchBtn = clone.querySelector(".popup-watch-btn");
                    if (watchBtn) {
                        watchBtn.addEventListener("click", (e) => {
                            e.stopPropagation(); 
                            if(typeof openMoviePreview === 'function') {
                                openMoviePreview({ ...movie, previewId: movie.id });
                            }
                        });
                    }
  
                    // 3. Row Click: Redirects (This still works even if hover is off!)
                    listItem.addEventListener("click", () => {
                        if(typeof openMoviePreview === 'function') {
                            openMoviePreview({ ...movie, previewId: movie.id });
                        }
                    });
                }
  
                container.appendChild(clone);
            });
            
            // Restore opacity
            container.style.opacity = '1';
        }, 150);
    }
  
    // ================================================
    // 3. DROPDOWN FILTER LOGIC (Day/Week/Month)
    // ================================================
    function initDropdown() {
        const dropdown = document.querySelector(".trending-filter-dropdown");
        const triggerButton = dropdown?.querySelector(".filter-dropdown-trigger");
        const optionsList = dropdown?.querySelector(".filter-dropdown-options");
        const selectedValueSpan = triggerButton?.querySelector(".selected-filter-value");
  
        if (dropdown && triggerButton && optionsList && selectedValueSpan) {
            
            // Toggle Dropdown
            triggerButton.addEventListener("click", (event) => {
                event.stopPropagation();
                dropdown.classList.toggle("open");
            });
  
            // Select Option
            optionsList.addEventListener("click", (event) => {
                if (event.target.tagName === "A") {
                    event.preventDefault();
                    
                    // 1. Update UI
                    const newValue = event.target.dataset.value;
                    selectedValueSpan.textContent = newValue.toUpperCase();
                    
                    optionsList.querySelector("a.active")?.classList.remove("active");
                    event.target.classList.add("active");
                    dropdown.classList.remove("open");
                    
                    // 2. Trigger Logic
                    loadTrendingItems(newValue);
                }
            });
  
            // Close on click outside
            window.addEventListener("click", (event) => {
                if (dropdown.classList.contains("open") && !dropdown.contains(event.target)) {
                    dropdown.classList.remove("open");
                }
            });
        }
    }
  
    // Initialize
    loadTrendingItems('Today'); 
    initDropdown();
  });