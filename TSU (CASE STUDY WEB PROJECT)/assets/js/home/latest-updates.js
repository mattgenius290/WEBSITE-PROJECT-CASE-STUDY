/**
 * LATEST UPDATES - GRID & PAGINATION MANAGER
 * Responsibility: Renders the grid cards and handles pagination clicks.
 * It exposes a global method 'window.updateLatestGrid()' so the filter script can use it.
 */

document.addEventListener("DOMContentLoaded", () => {
    // --- STATE ---
    const ITEMS_PER_PAGE = 20;
    let currentPage = 1;
    let currentDataset = []; // The movies currently being shown (could be all, or filtered)
    let totalPages = 1;

    // --- DOM ELEMENTS ---
    const gridContainer = document.getElementById("latest-updates-grid");
    const template = document.getElementById("latest-update-card-template");
    const navContainers = document.querySelectorAll(".nav-arrows");

    // =========================================================
    // NEW: RATING COLOR HELPER
    // =========================================================
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


    // =========================================================
    // 1. PUBLIC API (Allows Filter Script to Update Grid)
    // =========================================================
    window.updateLatestGrid = function(newMovieList, isFilterActive = false) {
        currentDataset = newMovieList;
        currentPage = 1; // Reset to page 1 on new filter
        calculatePages();
        renderPage(currentPage);
        updatePaginationControls();

        // --- NEW LOGIC: Update Header Text ---
        const titleEl = document.querySelector(".latest-updates .section-title");
        if (titleEl) {
            if (isFilterActive) {
                // Change text to "Search Results" with count
                titleEl.innerHTML = `Search Results <span style="font-size: 0.7em; color: #a0a0a0; margin-left: 10px; font-weight: 400;">(${newMovieList.length} Matches)</span>`;
            } else {
                // Revert to default
                titleEl.textContent = "LATEST UPDATES";
            }
        }
    };

    // =========================================================
    // 2. INITIALIZATION (Default View)
    // =========================================================
    function init() {
        if (!window.MovieDB) {
            console.error("MovieDB not found!");
            return;
        }

        // Default: Load Latest Updates
        // We use getAll() so pagination works for the whole DB, sorted by date
        const allMovies = window.MovieDB.getAll(); 
        
        // Default sort: Latest date first
        currentDataset = allMovies.sort((a, b) => {
            const dateA = new Date(a.meta.releaseDate || '2000-01-01');
            const dateB = new Date(b.meta.releaseDate || '2000-01-01');
            return dateB - dateA;
        });

        calculatePages();
        renderPage(currentPage);
        setupPaginationEvents();
        updatePaginationControls();
        
        // Initialize the new Quick Filters (All | Movies | Series)
        setupQuickFilters();
    }

    // =========================================================
    // 3. QUICK FILTERS LOGIC (UPDATED)
    // =========================================================
    function setupQuickFilters() {
        // Changed selector to button since we will update HTML to use <button>
        const filterBtns = document.querySelectorAll("#quick-filters button");
        
        filterBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const target = e.currentTarget; // Ensure we get the button even if icon is clicked

                // 1. Handle Visual Active State
                filterBtns.forEach(b => b.classList.remove("active"));
                target.classList.add("active");

                // 2. Get Filter Value
                const type = target.getAttribute("data-filter");

                // 3. Filter Data
                if (!window.MovieDB) return;
                const allData = window.MovieDB.getAll();
                
                let filtered = [];

                switch (type) {
                    case "all":
                        filtered = allData;
                        break;
                    
                    case "Movie":
                        filtered = allData.filter(m => m.tags?.type.includes("Movie"));
                        break;
                    
                    case "Series":
                        filtered = allData.filter(m => m.tags?.type.includes("TV") || m.tags?.type.includes("Series"));
                        break;

                    case "Kids":
                        // Filter by Genre 'Kids' OR Category 'kids'
                        filtered = allData.filter(m => 
                            (m.tags?.genres || []).some(g => g.includes("Kids")) || 
                            (m.categories || []).includes("kids")
                        );
                        break;

                    case "New":
                        // Filter by Release Year (2024 and up)
                        filtered = allData.filter(m => parseInt(m.meta?.release) >= 2024);
                        break;

                    case "Ongoing":
                        // Filter by Status
                        filtered = allData.filter(m => m.tags?.status === "Ongoing");
                        break;

                    default:
                        filtered = allData;
                }

                // 4. Sort by Date (Always keep Latest Updates sorted by date)
                filtered.sort((a, b) => {
                    const dateA = new Date(a.meta.releaseDate || '2000-01-01');
                    const dateB = new Date(b.meta.releaseDate || '2000-01-01');
                    return dateB - dateA;
                });

                // 5. Update Grid
                window.updateLatestGrid(filtered, true); // true = shows "Search Results (N)" in header
            });
        });
    }

    // =========================================================
    // 4. PAGINATION LOGIC
    // =========================================================
    function calculatePages() {
        totalPages = Math.ceil(currentDataset.length / ITEMS_PER_PAGE);
        // Handle empty results
        if (totalPages === 0) totalPages = 1;
    }

    function setupPaginationEvents() {
        navContainers.forEach(navGroup => {
            const prevBtn = navGroup.querySelector(".arrow-btn:first-child");
            const nextBtn = navGroup.querySelector(".arrow-btn:last-child");
            const isBottomNav = navGroup.closest('.latest-updates-footer') !== null;

            if (prevBtn) {
                prevBtn.addEventListener("click", () => {
                    if (currentPage > 1) {
                        currentPage--;
                        renderPage(currentPage);
                        updatePaginationControls();
                        if (isBottomNav) handleMobileScroll();
                    }
                });
            }

            if (nextBtn) {
                nextBtn.addEventListener("click", () => {
                    if (currentPage < totalPages) {
                        currentPage++;
                        renderPage(currentPage);
                        updatePaginationControls();
                        if (isBottomNav) handleMobileScroll();
                    }
                });
            }
        });
    }

    function updatePaginationControls() {
        navContainers.forEach(navGroup => {
            const prevBtn = navGroup.querySelector(".arrow-btn:first-child");
            const nextBtn = navGroup.querySelector(".arrow-btn:last-child");

            if (prevBtn) prevBtn.disabled = (currentPage === 1);
            if (nextBtn) nextBtn.disabled = (currentPage >= totalPages || currentDataset.length === 0);
            
            // Update "Page X" tooltip
            navGroup.setAttribute("data-page", `Page ${currentPage} of ${totalPages}`);
        });
    }

    function handleMobileScroll() {
        if (window.innerWidth <= 768) {
            const section = document.querySelector('.latest-updates');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // =========================================================
    // 5. RENDER LOGIC
    // =========================================================
    function renderPage(page) {
        if (!template || !gridContainer) return;

        gridContainer.innerHTML = "";

        // Check for empty results from filter
        if (currentDataset.length === 0) {
            gridContainer.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #a0a0a0;">
                    <h3>No results found</h3>
                    <p>Try adjusting your filters.</p>
                </div>
            `;
            return;
        }

        const start = (page - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const pageData = currentDataset.slice(start, end);

        pageData.forEach(movie => {
            const clone = template.content.cloneNode(true);
            populateCard(clone, movie);
            gridContainer.appendChild(clone);
        });
    }

    function populateCard(clone, movie) {
        
        const ratedClass = getRatingClass(movie.tags.rated);

        // Image
        const img = clone.querySelector(".card-image");
        if (img) {
            img.src = movie.posterUrl;
            img.alt = movie.title;
            img.loading = "lazy";
        }

        // Rated Tag Overlay (The small tag on the poster image)
        const ratedTagOverlay = clone.querySelector(".overlay-tag");
        if (ratedTagOverlay) {
            ratedTagOverlay.textContent = movie.tags.rated;
            ratedTagOverlay.classList.remove("age-rating"); // Remove old static class
            ratedTagOverlay.classList.add("tag-rated-color", ratedClass); 
        }

        // Title
        clone.querySelector(".card-title").textContent = movie.title;

        // Popup Data
        const pTitle = clone.querySelector(".popup-title");
        if(pTitle) pTitle.textContent = movie.title;
        
        const pSummary = clone.querySelector(".popup-summary");
        if(pSummary) pSummary.textContent = movie.description;

        // Helper to safely set text
        const setText = (sel, txt) => {
            const el = clone.querySelector(sel);
            if(el) el.textContent = txt;
        };

        // Apply color class to popup rated tag
        const pRatedTag = clone.querySelector(".popup-tag-rated");
        if(pRatedTag) {
            pRatedTag.textContent = movie.tags.rated;
            pRatedTag.classList.add(ratedClass);
        }

        setText(".popup-tag-type", movie.tags.type);
        setText(".popup-tag-released", movie.meta.release);
        setText(".imdb-score-value", movie.stats.imdb);
        setText(".popularity-score-value", movie.stats.popularity);
        
        setText(".detail-type", movie.tags.type);
        setText(".detail-released", movie.meta.release);
        setText(".detail-status", movie.tags.status);
        setText(".detail-rated", movie.tags.rated);
        setText(".detail-genre", movie.tags.genres.join(", "));
        setText(".detail-duration", movie.meta.duration);

        // --- CLICK LOGIC (UPDATED) ---

        // 1. POPUP CONTAINER: Stop clicks inside the popup (text) from triggering redirect
        const popup = clone.querySelector(".movie-popup");
        if (popup) {
            popup.addEventListener("click", (e) => {
                e.stopPropagation();
            });
        }

        // 2. WATCH BUTTON (Inside Popup): Redirects
        const watchBtn = clone.querySelector(".popup-watch-btn");
        if (watchBtn) {
            watchBtn.addEventListener("click", (e) => {
                e.stopPropagation(); 
                if (typeof openMoviePreview === 'function') {
                    openMoviePreview({ ...movie, previewId: movie.id });
                }
            });
        }

        // 3. CARD CLICK (Poster/Background): Always Redirects
        const card = clone.querySelector(".movie-card");
        if (card) {
            card.addEventListener("click", () => {
                // Width check removed: this now works on both Desktop and Mobile
                if (typeof openMoviePreview === 'function') {
                    openMoviePreview({ ...movie, previewId: movie.id });
                }
            });

            // Hover logic (Kept intact)
            if (popup) {
                card.addEventListener("mouseenter", () => {
                    card.classList.add("is-hovered");
                    const rect = card.getBoundingClientRect();
                    // Simple boundary check to flip popup left if too close to right edge
                    if (window.innerWidth - rect.right < 340) {
                        popup.classList.add("popup-position-left");
                    } else {
                        popup.classList.remove("popup-position-left");
                    }
                });
                card.addEventListener("mouseleave", () => card.classList.remove("is-hovered"));
            }
        }
    }

    // Start
    init();
});