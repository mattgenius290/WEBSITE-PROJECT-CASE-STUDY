document.addEventListener("DOMContentLoaded", () => {
    console.log("SystemManager.js is loaded");

    const slugify = (value = "") =>
        value
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "")
            .trim() || "untitled";

    const buildFrontendUrl = (relativePath = "") => {
        const cleanRelative = relativePath.replace(/^\/+/, "");
        const segments = window.location.pathname.split("/").filter(Boolean);
        const frontendIdx = segments.indexOf("frontend");

        if (frontendIdx !== -1) {
            const baseSegments = segments.slice(0, frontendIdx + 1);
            const basePath = `/${baseSegments.join("/")}/`;
            return new URL(cleanRelative, `${window.location.origin}${basePath}`).href;
        }

        return new URL(cleanRelative, window.location.href).href;
    };

    const buildPreviewPayload = (movieData = {}) => {
        // --- FIX: Use the actual ID if it exists, otherwise fallback to slugifying the title ---
        const previewId = movieData.id || movieData.previewId || slugify(movieData.cardTitle || movieData.popupTitle || movieData.title || "");
        
        return {
            previewId,
            snapshot: movieData,
            selectedAt: Date.now()
        };
    };

    // GLOBAL FUNCTION: Redirect to Preview Tab
    window.openMoviePreview = function(movieData) {
        const payload = buildPreviewPayload(movieData);
        localStorage.setItem('selectedMovie', JSON.stringify(payload));
        
        // UPDATED: Point to the PHP file instead of HTML
        const previewUrl = buildFrontendUrl('pages/preview/movie-preview.php');
        window.open(previewUrl, '_blank');
    };
});