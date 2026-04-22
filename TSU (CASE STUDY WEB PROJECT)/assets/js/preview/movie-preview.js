// =============================================================
// 1. DOM SELECTORS
// =============================================================
const ui = {
    hero: {
        video: document.getElementById('heroVideo'),
        videoSource: document.querySelector('#heroVideo source'),
        bgVideo: document.querySelector('.hero-background-video'),
        bgVideoSource: document.querySelector('.hero-background-video source'),
        
        logo: document.getElementById('hero-logo'),
        title: document.querySelector('[data-hero-title]'),
        desc: document.querySelector('[data-hero-description]'), 
        meta: document.querySelector('[data-hero-meta]'), 
    },
    cinema: {
        overlay: document.getElementById('cinema-player-overlay'),
        wrapper: document.querySelector('.cinema-video-wrapper'),
        closeBtn: document.getElementById('btn-close-cinema')
    },
    synopsis: {
        title: document.querySelector('[data-synopsis-title]'),
        meta: document.querySelector('[data-synopsis-meta]'),
        text: document.querySelector('[data-synopsis-text]'),
        cast: document.querySelector('[data-synopsis-cast]')
    },
    details: {
        offline: document.querySelector('[data-detail="offline"]'),
        genres: document.querySelector('[data-detail="genres"]'),
        moods: document.querySelector('[data-detail="moods"]'),
        audio: document.querySelector('[data-detail="audio"]'),
        subtitles: document.querySelector('[data-detail="subtitles"]'),
        cast: document.querySelector('[data-detail="cast"]')
    },
    trailersList: document.querySelector('.trailer-list'),
    carouselLike: document.querySelector('[data-carousel-track="like"]'),
    carouselTrending: document.querySelector('[data-carousel-track="trending"]'),
    contentBackdrop: document.querySelector('[data-content-backdrop]')
};

// =============================================================
// 2. DATA LOADING LOGIC
// =============================================================

function getCurrentMovieData() {
    const storedJson = localStorage.getItem('selectedMovie');
    if (!storedJson) return null;
    try {
        const storedData = JSON.parse(storedJson);
        const movieId = storedData.previewId || storedData.snapshot?.id;
        if (window.MovieDB) {
            const dbMatch = window.MovieDB.getById(movieId);
            if (dbMatch) return dbMatch;
        }
        return storedData.snapshot || null;
    } catch (e) {
        console.error("Error parsing selectedMovie:", e);
        return null;
    }
}

// =============================================================
// 3. NETWORK & QUALITY LOGIC
// =============================================================

function getYouTubeQualityParam() {
    let qualityParam = "&vq=hd1080"; // Default to Best Quality

    if ('connection' in navigator) {
        const conn = navigator.connection;
        if (conn.saveData === true || 
            conn.effectiveType === '2g' || 
            conn.effectiveType === '3g' || 
            conn.downlink < 1.5) {
            
            console.log("Slow connection detected. Switching video to Auto quality.");
            qualityParam = ""; 
        }
    }
    return qualityParam;
}

// =============================================================
// 4. UI UPDATES
// =============================================================

function extractCastText(movie) {
    if (movie.details?.cast && Array.isArray(movie.details.cast)) {
        return movie.details.cast.join(', ');
    }
    return 'Cast details unavailable';
}

function updateUI(movie) {
    if (!movie) return;
    document.title = `${movie.title} | MovieZone`;

    // --- HERO VIDEO LOGIC ---
    const existingCardIframe = document.querySelector('.hero-video-bg iframe');
    if (existingCardIframe) existingCardIframe.remove();
    
    const existingBgIframe = document.getElementById('youtube-forced-bg');
    if (existingBgIframe) existingBgIframe.remove();

    const cardContainer = document.querySelector('.hero-video-bg');
    const heroContainer = document.querySelector('.hero-container');

    if (movie.videoUrl) {
        const isYoutube = movie.videoUrl.includes('youtube') || movie.videoUrl.includes('youtu.be');

        if (isYoutube) {
            // HIDE MP4
            if (ui.hero.video) ui.hero.video.style.display = 'none';
            
            // Show Image Placeholder first
            if (ui.hero.bgVideo) {
                ui.hero.bgVideo.style.display = 'block';
                ui.hero.bgVideo.removeAttribute('src'); 
                ui.hero.bgVideo.poster = movie.backdropUrl; 
                ui.hero.bgVideo.style.opacity = "1"; 
                ui.hero.bgVideo.style.transition = "none"; 
            }

            let videoId = "";
            if (movie.videoUrl.includes('youtu.be/')) {
                videoId = movie.videoUrl.split('youtu.be/')[1].split('?')[0];
            } else if (movie.videoUrl.includes('v=')) {
                videoId = movie.videoUrl.split('v=')[1].split('&')[0];
            }

            if (videoId) {
                const qualityParam = getYouTubeQualityParam();

                // FOREGROUND PLAYER
                if (cardContainer) {
                    cardContainer.style.backgroundImage = `url('${movie.backdropUrl}')`;
                    cardContainer.style.backgroundSize = "cover";
                    cardContainer.style.backgroundPosition = "center";

                    const cardIframe = document.createElement('iframe');
                    cardIframe.id = "youtube-bg-iframe"; 
                    cardIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1${qualityParam}`;
                    
                    Object.assign(cardIframe.style, {
                        position: "absolute", top: "50%", left: "50%", width: "100%", height: "100%",
                        transform: "translate(-50%, -50%) scale(1.35)", border: "none", pointerEvents: "none",
                        opacity: "0", transition: "none"
                    });
                    cardIframe.allow = "autoplay; encrypted-media";
                    
                    cardIframe.onload = () => setTimeout(() => cardIframe.style.opacity = "1", 500);
                    cardContainer.appendChild(cardIframe);
                }

                // BACKGROUND BLUR PLAYER
                if (heroContainer) {
                    const bgIframe = document.createElement('iframe');
                    bgIframe.id = "youtube-forced-bg";
                    bgIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1${qualityParam}`;
                    
                    Object.assign(bgIframe.style, {
                        position: "absolute", top: "50%", left: "50%", width: "100vw", height: "100vh",
                        transform: "translate(-50%, -50%) scale(1.5)", pointerEvents: "none", zIndex: "-2",
                        filter: "blur(20px) brightness(0.4) saturate(1)", opacity: "0", transition: "opacity 1s ease"
                    });
                    bgIframe.allow = "autoplay; encrypted-media";
                    
                    bgIframe.onload = () => {
                        setTimeout(() => {
                            bgIframe.style.opacity = "1";
                            if (ui.hero.bgVideo) ui.hero.bgVideo.style.display = 'none';
                        }, 500);
                    };
                    heroContainer.prepend(bgIframe);
                }
            }

        } else {
            // MP4 LOGIC
            if (cardContainer) cardContainer.style.backgroundImage = 'none';

            if (ui.hero.video) {
                ui.hero.video.style.display = 'block';
                ui.hero.video.src = movie.videoUrl;
                ui.hero.video.muted = true; 
                ui.hero.video.poster = movie.backdropUrl;
                ui.hero.video.load();
                ui.hero.video.play().catch(e => console.log("Card Autoplay blocked:", e));
            }
            
            if (ui.hero.bgVideo) {
                ui.hero.bgVideo.style.display = 'block';
                ui.hero.bgVideo.style.opacity = "1"; 
                ui.hero.bgVideo.src = movie.videoUrl;
                ui.hero.bgVideo.poster = movie.backdropUrl;
                ui.hero.bgVideo.load();
                ui.hero.bgVideo.play().catch(e => console.log("Bg Autoplay blocked:", e));
            }
        }
    } else if (ui.hero.video) {
        ui.hero.video.poster = movie.backdropUrl;
    }

    // TEXT & LOGO UPDATES
    if (ui.hero.logo) {
        ui.hero.logo.style.display = 'none';
        ui.hero.logo.removeAttribute('src'); 
    }
    if (ui.hero.title) {
        ui.hero.title.style.display = 'block';
        ui.hero.title.textContent = movie.title;
    }

    if (movie.titleImage && ui.hero.logo) {
        ui.hero.logo.src = movie.titleImage;
        ui.hero.logo.alt = movie.title;
        ui.hero.logo.onload = function() {
            ui.hero.logo.style.display = 'block';
            if (ui.hero.title) ui.hero.title.style.display = 'none';
        };
        ui.hero.logo.onerror = function() {
            ui.hero.logo.style.display = 'none';
            if (ui.hero.title) ui.hero.title.style.display = 'block';
        };
    } 
    
    const metaParts = [];
    if (movie.meta?.release) metaParts.push(movie.meta.release);
    if (movie.meta?.duration) metaParts.push(movie.meta.duration.toUpperCase());
    if (movie.tags?.rated) metaParts.push(movie.tags.rated);
    const combinedMeta = metaParts.join(" • ");
    
    if (ui.hero.meta) ui.hero.meta.textContent = combinedMeta;

    if (ui.synopsis.title) ui.synopsis.title.textContent = movie.title;
    if (ui.synopsis.meta) ui.synopsis.meta.textContent = combinedMeta;
    if (ui.synopsis.text) ui.synopsis.text.textContent = movie.description;
    if (ui.synopsis.cast) ui.synopsis.cast.textContent = extractCastText(movie);

    if (ui.details.offline) ui.details.offline.textContent = movie.details?.watchOffline || "Available to download";
    if (ui.details.genres) ui.details.genres.textContent = movie.tags?.genres?.join(', ') || "N/A";
    if (ui.details.moods) ui.details.moods.textContent = movie.moods?.join(', ') || "Exciting";
    if (ui.details.audio) ui.details.audio.textContent = movie.details?.audio?.join(', ') || "English [Original]";
    if (ui.details.subtitles) ui.details.subtitles.textContent = movie.details?.subtitles?.join(', ') || "English";
    if (ui.details.cast) ui.details.cast.textContent = extractCastText(movie);

    if (ui.contentBackdrop) {
        ui.contentBackdrop.style.backgroundImage = `radial-gradient(circle at top, rgba(11, 22, 22, 0.65), rgba(4, 9, 9, 0.85)), url('${movie.backdropUrl}')`;
    }

    updateTrailers(movie);
}

// =============================================================
// 5. TRAILERS & CAROUSELS (Updated to Switch Movie In-Page)
// =============================================================

/**
 * DYNAMIC SWITCHER: Changes the movie without reloading the page.
 */
function switchMovie(movie) {
    if(!movie) return;

    // 1. Update Storage (so refreshes work)
    const payload = { previewId: movie.id, snapshot: movie, selectedAt: Date.now() };
    localStorage.setItem('selectedMovie', JSON.stringify(payload));

    // 2. Update UI
    updateUI(movie);
    populateCarousels(movie);

    // 3. Reset Scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 4. Close Cinema if open
    const overlay = ui.cinema.overlay;
    if(overlay.classList.contains('active')) {
        closeCinema();
    }
}

// OVERRIDE: Hook into the global System Manager function for Search results
window.openMoviePreview = function(movie) {
    switchMovie(movie);
};

function updateTrailers(movie) {
    if (!ui.trailersList) return;
    ui.trailersList.innerHTML = '';
    if (!movie.trailers || movie.trailers.length === 0) return;

    movie.trailers.forEach(trailer => {
        const li = document.createElement('li');
        li.className = 'trailer-item';
        li.innerHTML = `
            <button class="trailer-card-btn" type="button">
                <div class="trailer-image-box">
                    <img src="${trailer.thumbnail}" alt="${trailer.title}" class="trailer-img" loading="lazy">
                    <div class="trailer-icon-overlay">
                        <div class="icon-circle">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M8 5v14l11-7z"></path></svg>
                        </div>
                    </div>
                    <span class="trailer-duration">${trailer.duration}</span>
                </div>
                <p class="trailer-type-heading"><span>TRAILER</span></p>
                <div class="trailer-title-wrapper"><p class="trailer-title">${trailer.title}</p></div>
            </button>
        `;
        const btn = li.querySelector('.trailer-card-btn');
        btn.addEventListener('click', () => {
            openCinemaPlayer(trailer.videoUrl);
        });
        ui.trailersList.appendChild(li);
    });
}

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'carousel-card';
    const img = document.createElement('img');
    img.src = movie.posterUrl;
    img.alt = movie.title;
    img.loading = "lazy";
    card.appendChild(img);

    // UPDATED: Use switchMovie instead of reload
    card.addEventListener('click', () => {
        switchMovie(movie);
    });
    return card;
}

function populateCarousels(currentMovie) {
    if (ui.carouselLike && window.RecommendationSystem) {
        ui.carouselLike.innerHTML = '';
        const similarMovies = window.RecommendationSystem.getSuggestions(currentMovie.id, 15);
        if (similarMovies.length > 0) {
            similarMovies.forEach(movie => ui.carouselLike.appendChild(createMovieCard(movie)));
        } else {
            ui.carouselLike.innerHTML = '<p style="color:#777; padding:20px;">No similar titles found.</p>';
        }
    }

    if (ui.carouselTrending && window.MovieDB) {
        ui.carouselTrending.innerHTML = '';
        const trendingMovies = window.MovieDB.getTrending(15).filter(m => m.id !== currentMovie.id);
        trendingMovies.forEach(movie => ui.carouselTrending.appendChild(createMovieCard(movie)));
    }
}

function setupNavigation() {
    const carouselWrappers = document.querySelectorAll('.carousel-wrapper');
    carouselWrappers.forEach(wrapper => {
        const leftBtn = wrapper.querySelector('.nav-btn.left');
        const rightBtn = wrapper.querySelector('.nav-btn.right');
        const track = wrapper.querySelector('.carousel-track');
        if (!track || !leftBtn || !rightBtn) return;

        const scrollAmount = () => track.clientWidth * 0.8; 
        leftBtn.addEventListener('click', () => track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }));
        rightBtn.addEventListener('click', () => track.scrollBy({ left: scrollAmount(), behavior: 'smooth' }));
        
        const updateButtons = () => {
            const tolerance = 2; 
            leftBtn.classList.toggle('hidden', track.scrollLeft <= 0);
            const maxScrollLeft = track.scrollWidth - track.clientWidth;
            rightBtn.classList.toggle('hidden', track.scrollLeft >= maxScrollLeft - tolerance);
        };
        track.addEventListener('scroll', updateButtons);
        window.addEventListener('resize', updateButtons);
        setTimeout(updateButtons, 100); 
    });
}

// =============================================================
// 6. VIDEO PLAYER & CONTROLS
// =============================================================

function openCinemaPlayer(url) {
    if (!url) return;
    const overlay = ui.cinema.overlay;
    const wrapper = ui.cinema.wrapper;
    
    // Pause Main & BG videos
    if (ui.hero.video) ui.hero.video.pause();
    if (ui.hero.bgVideo) ui.hero.bgVideo.pause();

    const bgIframe = document.getElementById('youtube-forced-bg');
    if (bgIframe) bgIframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }), '*');
    
    const cardIframe = document.getElementById('youtube-bg-iframe');
    if (cardIframe) cardIframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }), '*');

    const existingMedia = wrapper.querySelectorAll('video, iframe');
    existingMedia.forEach(el => el.remove());

    const isYoutube = url.includes('youtube.com') || url.includes('youtu.be');

    if (isYoutube) {
        let videoId = "";
        if (url.includes('youtu.be/')) videoId = url.split('youtu.be/')[1].split('?')[0];
        else if (url.includes('v=')) videoId = url.split('v=')[1].split('&')[0];
        else if (url.includes('/embed/')) videoId = url.split('/embed/')[1].split('?')[0];

        if (videoId) {
            const qualityParam = getYouTubeQualityParam();
            const isLocalFile = window.location.protocol === 'file:';
            const originParam = isLocalFile ? '' : `&origin=${window.location.origin}`;
            
            const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0${originParam}${qualityParam}`;
            const iframe = document.createElement('iframe');
            iframe.src = embedUrl;
            iframe.style.width = "100%"; iframe.style.height = "100%"; iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            iframe.allowFullscreen = true;
            wrapper.appendChild(iframe);
        }
    } else {
        const video = document.createElement('video');
        video.controls = true; video.autoplay = true;
        video.style.width = "100%"; video.style.height = "100%";
        const source = document.createElement('source');
        source.src = url; source.type = "video/mp4";
        video.appendChild(source);
        wrapper.appendChild(video);
        video.play().catch(()=>{});
    }
    overlay.classList.remove('hidden');
    overlay.classList.add('active');
}

function closeCinema() {
    const overlay = ui.cinema.overlay;
    const wrapper = ui.cinema.wrapper;
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.classList.add('hidden');
        wrapper.querySelectorAll('video, iframe').forEach(el => el.remove());
    }, 300);
    
    // Resume Hero Video
    if (ui.hero.video && ui.hero.video.style.display !== 'none') {
        ui.hero.video.muted = true;
        ui.hero.video.play().catch(()=>{});
    }
    
    const cardIframe = document.getElementById('youtube-bg-iframe');
    if (cardIframe) cardIframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'playVideo', args: [] }), '*');
    
    const bgIframe = document.getElementById('youtube-forced-bg');
    if (bgIframe) bgIframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'playVideo', args: [] }), '*');
}

function setupVideoControls() {
    const previewVideo = ui.hero.video;
    const bgVideo = ui.hero.bgVideo;
    const cinemaCloseBtn = ui.cinema.closeBtn;

    const btnMute = document.querySelector('[data-action="toggle-audio"]');
    const btnPlay = document.querySelector('[data-action="toggle-play"]');
    const btnExpand = document.querySelector('[data-action="expand"]');
    const btnWatchNow = document.querySelector('.btn-watch-now');

    if (bgVideo) bgVideo.muted = true;

    let isYouTubeMuted = true;
    let isYouTubePaused = false;

    // 1. MUTE TOGGLE
    if (btnMute) {
        btnMute.addEventListener('click', () => {
            const ytIframe = document.getElementById('youtube-bg-iframe');
            
            if (ytIframe) {
                isYouTubeMuted = !isYouTubeMuted;
                const command = isYouTubeMuted ? 'mute' : 'unMute';
                ytIframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: command, args: [] }), '*');
                
                const iconMuted = "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z";
                const iconUnmuted = "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z";
                
                const svgPath = btnMute.querySelector('path');
                if(svgPath) svgPath.setAttribute('d', isYouTubeMuted ? iconMuted : iconUnmuted);

            } else if (previewVideo && previewVideo.style.display !== 'none') {
                previewVideo.muted = !previewVideo.muted;
                if (bgVideo) bgVideo.muted = true; 
                
                const iconMuted = "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z";
                const iconUnmuted = "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z";
                const svgPath = btnMute.querySelector('path');
                if(svgPath) svgPath.setAttribute('d', previewVideo.muted ? iconMuted : iconUnmuted);
            }
        });
    }

    // 2. PLAY/PAUSE TOGGLE
    if (btnPlay) {
        btnPlay.addEventListener('click', () => {
            const ytIframe = document.getElementById('youtube-bg-iframe');
            const bgIframe = document.getElementById('youtube-forced-bg');

            if (ytIframe) {
                isYouTubePaused = !isYouTubePaused;
                const command = isYouTubePaused ? 'pauseVideo' : 'playVideo';
                ytIframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: command, args: [] }), '*');
                
                if (bgIframe) {
                    bgIframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: command, args: [] }), '*');
                }
                
                const svgPath = btnPlay.querySelector('path');
                if (isYouTubePaused) {
                    if(svgPath) svgPath.setAttribute('d', "M8 5v14l11-7z"); // Play Icon
                } else {
                    if(svgPath) svgPath.setAttribute('d', "M6 19h4V5H6v14zm8-14v14h4V5h-4z"); // Pause Icon
                }

            } else if (previewVideo && previewVideo.style.display !== 'none') {
                if (previewVideo.paused) {
                    previewVideo.play();
                    if (bgVideo) bgVideo.play();
                    const svgPath = btnPlay.querySelector('path');
                    if(svgPath) svgPath.setAttribute('d', "M6 19h4V5H6v14zm8-14v14h4V5h-4z"); 
                } else {
                    previewVideo.pause();
                    if (bgVideo) bgVideo.pause();
                    const svgPath = btnPlay.querySelector('path');
                    if(svgPath) svgPath.setAttribute('d', "M8 5v14l11-7z"); 
                }
            }
        });
    }

    if (btnExpand) {
        btnExpand.addEventListener('click', () => {
            const currentData = getCurrentMovieData();
            if(currentData) openCinemaPlayer(currentData.videoUrl);
        });
    }

    if (btnWatchNow) btnWatchNow.style.cursor = "default";
    if (cinemaCloseBtn) cinemaCloseBtn.addEventListener('click', closeCinema);

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && ui.cinema.overlay.classList.contains('active')) {
            closeCinema();
        }
    });
}

function init() {
    const activeMovie = getCurrentMovieData();
    if (activeMovie) {
        updateUI(activeMovie);
        populateCarousels(activeMovie);
    } else {
        console.error("No movie selected in localStorage.");
    }
    setupVideoControls();
    setupNavigation();
}

setTimeout(init, 50);