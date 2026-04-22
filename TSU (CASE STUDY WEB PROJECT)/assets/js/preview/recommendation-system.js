document.addEventListener("DOMContentLoaded", () => {
    console.log("RecommendationSystem.js: Loaded.");

    const RecommendationSystem = {
        // Get similar movies based on weighted scoring
        getSuggestions: (currentMovieId, limit = 10) => {
            const db = window.MovieDB.getAll();
            const currentMovie = db.find(m => m.id === currentMovieId);

            if (!currentMovie) return [];

            const suggestions = db
                .filter(m => m.id !== currentMovieId) // Don't recommend itself
                .map(movie => {
                    let score = 0;

                    // 1. Genre Match (+2 points each)
                    // Checks if they share any genre
                    if (movie.tags.genres && currentMovie.tags.genres) {
                        const sharedGenres = movie.tags.genres.filter(g => currentMovie.tags.genres.includes(g));
                        score += sharedGenres.length * 2;
                    }

                    // 2. Keyword Match (+3 points each)
                    // High value because keywords are specific plot points
                    if (movie.keywords && currentMovie.keywords) {
                        const sharedKeywords = movie.keywords.filter(k => currentMovie.keywords.includes(k));
                        score += sharedKeywords.length * 3;
                    }

                    // 3. Mood Match (+1 point each)
                    // Helps keep the "vibe" consistent
                    if (movie.moods && currentMovie.moods) {
                        const sharedMoods = movie.moods.filter(m => currentMovie.moods.includes(m));
                        score += sharedMoods.length * 1;
                    }

                    // 4. Category Boost (+1 point)
                    // Slight boost if they are in the same main section (e.g. both 'kids')
                    const sharedCategories = movie.categories.filter(c => currentMovie.categories.includes(c));
                    if (sharedCategories.length > 0) score += 1;

                    return { ...movie, matchScore: score };
                })
                .sort((a, b) => b.matchScore - a.matchScore) // Sort by highest score
                .slice(0, limit); // Take top N

            return suggestions;
        }
    };

    // Expose to window
    window.RecommendationSystem = RecommendationSystem;
});