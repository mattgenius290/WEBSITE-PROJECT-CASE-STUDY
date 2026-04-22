/**
 * COMPACT FILTER & SEARCH CONTROLLER
 * Handles Dropdowns, Multi-Selects, "Add Custom Tag", and Mobile Search Toggle
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // --- DOM ELEMENTS ---
    const searchInputs = document.querySelectorAll(".search-input"); 
    const searchBtns = document.querySelectorAll(".search-btn");
    
    const filterPanel = document.getElementById("filter-panel");
    const mainFilterToggle = document.getElementById("filter-toggle-btn");
    const applyBtn = document.getElementById("btn-apply-filter");
    const resetBtn = document.getElementById("btn-reset-filter");

    // ============================================================
    // MOBILE SEARCH UI LOGIC
    // ============================================================
    const mobileTrigger = document.getElementById("mobile-search-trigger");
    const mobileDropdown = document.getElementById("mobile-search-dropdown");
    const mobileFilterBtn = document.getElementById("mobile-filter-toggle");

    // 1. TOGGLE SEARCH BAR
    if (mobileTrigger && mobileDropdown) {
        mobileTrigger.addEventListener("click", (e) => {
            e.preventDefault();
            const isActive = mobileDropdown.classList.contains("active");
            
            if (isActive) {
                // CLOSING SEARCH BAR
                mobileDropdown.classList.remove("active");

                // Auto-close Filter Panel if search closes
                if (filterPanel && filterPanel.classList.contains("active")) {
                    filterPanel.classList.remove("active");
                    document.body.classList.remove("mobile-filter-active");
                }

            } else {
                // OPENING SEARCH BAR
                mobileDropdown.classList.add("active");
                const input = mobileDropdown.querySelector("input");
                if(input) setTimeout(() => input.focus(), 100);
            }
        });
    }

    // 2. TOGGLE FILTER PANEL (Mobile)
    if (mobileFilterBtn && filterPanel) {
        mobileFilterBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle Panel
            filterPanel.classList.toggle("active");
            const isActive = filterPanel.classList.contains("active");

            // Toggle Body Class
            if (isActive) {
                document.body.classList.add("mobile-filter-active");
            } else {
                document.body.classList.remove("mobile-filter-active");
            }
            
            // Desktop Scroll Logic
            const isMobile = window.innerWidth <= 768;
            if (!isMobile && isActive) {
                setTimeout(() => {
                    filterPanel.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            }
        });
    }

    // 3. DESKTOP FILTER TOGGLE
    if (mainFilterToggle && filterPanel) {
        mainFilterToggle.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            filterPanel.classList.toggle("active");
        });
    }

    // ============================================
    //  DROPDOWN LOGIC (Event Delegation)
    // ============================================
    
    // Helper to close all dropdowns
    function closeAllDropdowns() {
        document.querySelectorAll(".filter-dropdown").forEach(dd => dd.classList.remove("active"));
    }

    // Handle clicks inside the Filter Panel
    if (filterPanel) {
        filterPanel.addEventListener("click", (e) => {
            // A. Handle Dropdown Toggle Buttons
            const btn = e.target.closest(".dropdown-btn");
            if (btn) {
                e.preventDefault();
                e.stopPropagation();
                
                const parentDropdown = btn.closest(".filter-dropdown");
                
                // --- FIX: Prevent accidental switching ---
                // Check if ANY dropdown is already open
                const activeDropdown = document.querySelector(".filter-dropdown.active");
                
                // If one is open, and we clicked a DIFFERENT button (e.g., clicked "Status" while "Genre" was open)
                if (activeDropdown && activeDropdown !== parentDropdown) {
                    closeAllDropdowns(); // Close the open one
                    return; // STOP HERE. Do not open the new one.
                }

                // Normal Toggle Behavior (only if no conflict)
                const wasActive = parentDropdown.classList.contains("active");
                closeAllDropdowns();
                
                if (!wasActive) {
                    parentDropdown.classList.add("active");
                }
                return;
            }

            // B. Handle "Add Tag" Buttons
            const addBtn = e.target.closest(".btn-add-tag");
            if (addBtn) {
                e.preventDefault();
                e.stopPropagation();
                const groupDiv = addBtn.closest(".dropdown-add-group");
                handleAddTag(groupDiv);
                return;
            }

            // C. Prevent closing when clicking inside the menu (inputs, labels)
            if (e.target.closest(".dropdown-menu")) {
                // e.stopPropagation(); // Optional: uncomment if document listener closes it too aggressively
            }
        });
        
        // Handle "Enter" key in Add Tag inputs
        filterPanel.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && e.target.classList.contains("add-input")) {
                e.preventDefault();
                const groupDiv = e.target.closest(".dropdown-add-group");
                handleAddTag(groupDiv);
            }
        });
        
        // Handle Checkbox/Radio Changes (Update Labels)
        filterPanel.addEventListener("change", (e) => {
            if (e.target.tagName === 'INPUT') {
                updateDropdownLabels();
            }
        });
    }

    // ============================================
    //  CLICK OUTSIDE LOGIC (Includes Mobile Touch)
    // ============================================
    
    function handleOutsideInteraction(e) {
        // If the interaction target is NOT inside a filter dropdown, close all open dropdowns.
        if (!e.target.closest(".filter-dropdown")) {
            closeAllDropdowns();
        }
    }

    // Standard Click (Desktop)
    document.addEventListener("click", handleOutsideInteraction);
    
    // Mobile Touch (Ensures responsive closing on phones/tablets)
    // 'passive: true' improves scrolling performance
    document.addEventListener("touchstart", handleOutsideInteraction, { passive: true });


    // ============================================
    //  HELPER FUNCTIONS
    // ============================================

    function updateDropdownLabels() {
        const dropdowns = document.querySelectorAll(".filter-dropdown");
        dropdowns.forEach(dd => {
            const labelSpan = dd.querySelector(".btn-value");
            const checkboxes = dd.querySelectorAll("input[type='checkbox']:checked");
            
            // Checkbox Logic
            if (checkboxes.length > 0) {
                if (checkboxes.length === 1) {
                    labelSpan.textContent = checkboxes[0].parentElement.textContent.trim();
                } else {
                    labelSpan.textContent = `${checkboxes.length} selected`;
                }
                labelSpan.style.color = "#fff";
            } 
            
            // Radio Logic
            const radio = dd.querySelector("input[type='radio']:checked");
            if (radio) {
                labelSpan.textContent = radio.parentElement.textContent.trim();
                if(radio.value !== 'all' && radio.value !== 'latest') {
                    labelSpan.style.color = "#fff";
                } else if(checkboxes.length === 0) {
                     labelSpan.style.color = "";
                }
            }
            
            // Default "All"
            if (checkboxes.length === 0 && !radio && dd.id !== 'dd-sort') {
                labelSpan.textContent = "All";
                labelSpan.style.color = "";
            }
        });
    }

    function handleAddTag(groupDiv) {
        if (!groupDiv) return;
        const input = groupDiv.querySelector("input");
        const listContainer = groupDiv.nextElementSibling; // The checkbox list/grid
        
        const rawVal = input.value;
        if (!rawVal.trim()) return;
        
        const groupName = listContainer.getAttribute('data-group') || 'custom';
        
        // Validation
        let val = rawVal.trim();
        if (window.InputValidator) {
            const check = window.InputValidator.validate(groupName, rawVal);
            if (!check.isValid) { 
                showError(input, check.message); 
                return; 
            }
            val = check.value;
        }

        // Check Duplicates
        const existing = Array.from(listContainer.querySelectorAll("input")).map(i => i.value.toLowerCase());
        if (existing.includes(val.toLowerCase())) {
            const match = Array.from(listContainer.querySelectorAll("input")).find(i => i.value.toLowerCase() === val.toLowerCase());
            if(match) match.checked = true;
        } else {
            // Create New Tag
            const label = document.createElement("label");
            label.classList.add("dynamic-tag"); 
            label.innerHTML = `<input type="checkbox" name="${groupName}" value="${val}" checked> ${val}`;
            // No need to attach listener here, event delegation handles it
            listContainer.prepend(label);
        }
        input.value = ""; 
        updateDropdownLabels();
    }

    function showError(input, message) {
        input.classList.add("input-error");
        const originalPlaceholder = input.placeholder;
        input.value = "";
        input.placeholder = message;
        setTimeout(() => {
            input.classList.remove("input-error");
            input.placeholder = originalPlaceholder;
        }, 2000);
    }
    
    // ============================================
    //  MAIN FILTER EXECUTION
    // ============================================
    const normalize = (str) => {
        if(!str) return "";
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
    };

    function executeFilter(triggerInput) {
        if (!window.MovieDB || !window.updateLatestGrid) return;

        const allMovies = window.MovieDB.getAll();
        const rawQuery = triggerInput ? normalize(triggerInput.value) : "";

        // Sync inputs
        searchInputs.forEach(input => {
            if (input !== triggerInput) input.value = triggerInput ? triggerInput.value : "";
        });

        // Helper to get checked values from checkboxes
        const getCheckedValues = (name) => Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(cb => cb.value);
        
        // Gather all selected filters
        const selectedGenres = getCheckedValues("genre");
        const selectedCountries = getCheckedValues("country");
        const selectedYears = getCheckedValues("year");
        const selectedTypes = getCheckedValues("type");
        const selectedStatus = getCheckedValues("status");
        const selectedLangs = getCheckedValues("lang");
        const selectedAudio = getCheckedValues("audio");
        const selectedRated = getCheckedValues("rated");
        const selectedCustom = getCheckedValues("custom");
        const selectedSort = document.querySelector('input[name="sort"]:checked')?.value || "latest";

        // ============================================================
        // 🟢 NEW: STRICT MATCHING HELPERS
        // ============================================================

        // 1. Strict Match for Single Values (Rated, Type, Status)
        // Ensures "G" does NOT match "PG", and "Movie" does NOT match "TV Movie" unless exact.
        const matchesStrict = (movieValue, filterValues) => {
            if (filterValues.length === 0) return true;
            if (!movieValue) return false;
            return filterValues.some(val => val.toLowerCase() === movieValue.toLowerCase());
        };

        // 2. Strict Match for Arrays (Country, Audio, Genres)
        // Ensures that if you select "Japan", it looks for "Japan" in the list, not just "Jap".
        const matchesArrayStrict = (movieList, filterValues) => {
            if (filterValues.length === 0) return true;
            if (!movieList || !Array.isArray(movieList)) return false;
            
            // Returns TRUE if the movie has AT LEAST ONE of the selected filters
            return filterValues.some(fVal => 
                movieList.some(mVal => mVal.toLowerCase() === fVal.toLowerCase())
            );
        };

        // ============================================================
        // 🟢 FILTER EXECUTION
        // ============================================================
        let filtered = allMovies.filter(movie => {
            
            // A. Text Search (Keep partial match for search bar)
            if (rawQuery) {
                const cleanTitle = normalize(movie.title);
                const cleanKeywords = (movie.keywords || []).map(k => normalize(k));
                const cleanGenres = (movie.tags.genres || []).map(g => normalize(g));
                const isMatch = cleanTitle.includes(rawQuery) || cleanKeywords.some(k => k.includes(rawQuery)) || cleanGenres.some(g => g.includes(rawQuery));
                if (!isMatch) return false;
            }
            
            // B. Strict Category Filters
            if (!matchesArrayStrict(movie.tags.genres, selectedGenres)) return false; // Fixed Genres
            if (!matchesStrict(movie.tags.type, selectedTypes)) return false;         // Fixed Type
            if (!matchesStrict(movie.tags.status, selectedStatus)) return false;      // Fixed Status
            if (!matchesStrict(movie.tags.rated, selectedRated)) return false;        // Fixed Rated
            if (!matchesArrayStrict(movie.country, selectedCountries)) return false;  // Fixed Country
            if (!matchesArrayStrict(movie.details?.audio, selectedAudio)) return false; // Fixed Audio

            // C. Year Filter (Special Logic)
            if (selectedYears.length > 0) {
                const rYear = parseInt(movie.meta.release || 0);
                const hasYearMatch = selectedYears.some(y => (y === "older") ? rYear < 2020 : rYear === parseInt(y));
                if (!hasYearMatch) return false;
            }

            // D. Custom Tags (Keep partial match for flexibility)
            if (selectedCustom.length > 0) {
                const clean = str => str.toLowerCase();
                const hasCustomMatch = selectedCustom.some(tag => {
                    const t = clean(tag);
                    return (movie.details?.cast || []).some(c => clean(c).includes(t)) || 
                           (movie.moods || []).some(m => clean(m).includes(t)) || 
                           (movie.keywords || []).some(k => clean(k).includes(t));
                });
                if (!hasCustomMatch) return false;
            }

            return true;
        });

        // Sorting Logic (Unchanged)
        if (selectedSort === 'latest' || selectedSort === 'release') {
            filtered.sort((a, b) => new Date(b.meta.releaseDate || 0) - new Date(a.meta.releaseDate || 0));
        } else if (selectedSort === 'popular') {
            filtered.sort((a, b) => (b.stats.popularity || 0) - (a.stats.popularity || 0));
        } else if (selectedSort === 'rating') {
            filtered.sort((a, b) => {
                const rateA = parseFloat((a.stats.imdb || "0").split('/')[0]);
                const rateB = parseFloat((b.stats.imdb || "0").split('/')[0]);
                return rateB - rateA;
            });
        } else if (selectedSort === 'az') {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        }

        // Send results to grid (handles "No results found" automatically)
        window.updateLatestGrid(filtered, true);
    }

    // --- BUTTON EVENT LISTENERS ---

    // 1. Search Inputs (Enter Key)
    searchInputs.forEach(input => {
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                executeFilter(e.target);
                closeAllDropdowns();
            }
        });
    });

    // 2. Search Buttons (Click)
    searchBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const parentBar = btn.closest('.search-bar') || document.querySelector('.mobile-search-dropdown');
            const input = parentBar ? parentBar.querySelector('input') : null;
            executeFilter(input);
            closeAllDropdowns();
        });
    });

    // 3. Apply Filter Button
    if (applyBtn) {
        applyBtn.addEventListener("click", (e) => {
            e.preventDefault();
            executeFilter();
            closeAllDropdowns();
            
            // Mobile: Close panel and restore slider dots
            if (window.innerWidth <= 768) {
                if (filterPanel) filterPanel.classList.remove("active");
                document.body.classList.remove("mobile-filter-active");
            }

            // Scroll to results
            const resultsSection = document.querySelector(".latest-updates");
            if(resultsSection) resultsSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // 4. Reset Button
    if (resetBtn) {
        resetBtn.addEventListener("click", (e) => {
            e.preventDefault();
            searchInputs.forEach(i => i.value = ""); 
            document.querySelectorAll(".filter-dropdown input[type='checkbox']").forEach(cb => cb.checked = false);
            document.querySelectorAll(".dynamic-tag").forEach(el => el.remove());
            const sortDefault = document.querySelector("input[name='sort'][value='latest']");
            if (sortDefault) sortDefault.checked = true;
            document.querySelectorAll(".add-input").forEach(i => i.value = "");
            updateDropdownLabels();
            window.updateLatestGrid(window.MovieDB.getAll(), false); 
        });
    }
    
    // Auto-Close on Resize (Desktop to Mobile switch)
    let lastWindowWidth = window.innerWidth;
    window.addEventListener("resize", () => {
        const currentWidth = window.innerWidth;
        if (lastWindowWidth > 768 && currentWidth <= 768) {
            if (filterPanel && filterPanel.classList.contains("active")) {
                filterPanel.classList.remove("active");
                document.body.classList.remove("mobile-filter-active");
            }
        }
        lastWindowWidth = currentWidth;
    });
});