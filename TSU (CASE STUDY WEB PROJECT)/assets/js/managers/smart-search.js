document.addEventListener("DOMContentLoaded", () => {
    console.log("smart-search.js: Loaded");

    // ===============================================
    // 1. SMART ALGORITHM HELPER (Stateless)
    // ===============================================
    const normalize = (str) => {
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();
    };

    const getSmartResults = (query) => {
        if (!window.MovieDB) return [];
        const allMovies = window.MovieDB.getAll();
        const cleanQuery = normalize(query);

        if (!cleanQuery) return [];

        const scoredMovies = allMovies.map(movie => {
            let score = 0;
            const cleanTitle = normalize(movie.title);
            const cleanKeywords = (movie.keywords || []).map(k => normalize(k));
            const cleanGenres = (movie.tags.genres || []).map(g => normalize(g));

            // --- SCORING LOGIC ---
            if (cleanTitle === cleanQuery) score += 100;
            else if (cleanTitle.startsWith(cleanQuery)) score += 50;
            else if (cleanTitle.includes(cleanQuery)) score += 20;

            if (cleanKeywords.some(k => k.includes(cleanQuery))) score += 5;
            if (cleanGenres.some(g => g.includes(cleanQuery))) score += 3;

            return { ...movie, score };
        });

        return scoredMovies
            .filter(m => m.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 5);
    };

    // ===============================================
    // 2. INITIALIZATION FUNCTION (Per Input)
    // ===============================================
    const initSmartSearch = (searchInput) => {
        if (!searchInput) return;

        // Create a dedicated suggestions box for THIS input
        const suggestionsBox = document.createElement("div");
        suggestionsBox.className = "search-suggestions-box";
        
        // Inject the dropdown box dynamically right after the input
        if (searchInput.parentNode) {
            searchInput.parentNode.insertBefore(suggestionsBox, searchInput.nextSibling);
        }

        // --- RENDER FUNCTION ---
        const renderSuggestions = (matches) => {
            suggestionsBox.innerHTML = "";

            if (matches.length === 0) {
                suggestionsBox.classList.remove("active");
                return;
            }

            matches.forEach(movie => {
                const item = document.createElement("div");
                item.className = "suggestion-item";
                
                item.innerHTML = `
                    <img src="${movie.posterUrl}" alt="${movie.title}" class="suggestion-thumb">
                    <div class="suggestion-info">
                        <h4 class="suggestion-title">${movie.title}</h4>
                        <div class="suggestion-meta">
                            <span>${movie.meta.release || 'N/A'}</span>
                            <span class="meta-dot"></span>
                            <span>${movie.tags.type || 'Movie'}</span>
                            <span class="meta-dot"></span>
                            <span>${movie.meta.duration || '--'}</span>
                        </div>
                    </div>
                `;

                // Click Event -> Open Preview
                item.addEventListener("click", () => {
                    suggestionsBox.classList.remove("active");
                    searchInput.value = ""; // Clear input after click
                    if (typeof window.openMoviePreview === 'function') {
                        window.openMoviePreview(movie);
                    }
                });

                suggestionsBox.appendChild(item);
            });

            suggestionsBox.classList.add("active");
        };

        // --- EVENT LISTENERS ---
        let debounceTimer;
        
        searchInput.addEventListener("input", (e) => {
            clearTimeout(debounceTimer);
            const query = e.target.value;

            if (query.length < 2) {
                suggestionsBox.classList.remove("active");
                return;
            }

            debounceTimer = setTimeout(() => {
                const results = getSmartResults(query);
                renderSuggestions(results);
            }, 200);
        });

        // Hide suggestions when clicking outside
        document.addEventListener("click", (e) => {
            if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
                suggestionsBox.classList.remove("active");
            }
        });

        // Show suggestions again if clicking back into input
        searchInput.addEventListener("focus", () => {
            if (searchInput.value.length >= 2) {
                const results = getSmartResults(searchInput.value);
                renderSuggestions(results);
            }
        });
    };

    // ===============================================
    // 3. APPLY TO ALL INPUTS
    // ===============================================
    // Select ALL elements with class .search-input (Mobile AND Desktop)
    const allSearchInputs = document.querySelectorAll(".search-input");
    
    // Initialize each one individually
    allSearchInputs.forEach(input => {
        initSmartSearch(input);
    });
});