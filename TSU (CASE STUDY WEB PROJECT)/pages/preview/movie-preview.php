<?php
session_start();
// Check if user is logged in
$isLoggedIn = isset($_SESSION['user_id']);
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Movie Preview | MovieZone</title>
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417767/clapperboard_ykj9ek.png">

        <link rel="stylesheet" href="../../assets/css/layout/header.css">
        <link rel="stylesheet" href="../../assets/css/layout/footer.css">
        
        <link rel="stylesheet" href="../../assets/css/components/auth-modals.css">
        <link rel="stylesheet" href="../../assets/css/components/preview-overlay.css">
    
        <link rel="stylesheet" href="../../assets/css/pages/movie-preview.css">
        
    </head>
<body>
    <div class="main-container">
        <section class="hero-container" aria-label="Highlighted title preview">
            <video class="hero-background-video" autoplay muted loop playsinline>
                <source src="" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="hero-backdrop" aria-hidden="true"></div>

            <header class="header-container">
                <a href="../../<?php echo $isLoggedIn ? 'home.php' : 'index.php'; ?>" class="logo" style="text-decoration: none;">
                    ൬ovie<span class="highlight">Ⱬone</span>
                </a>

                <?php if ($isLoggedIn): ?>
                    <a role="button" id="logout-btn" class="header-icon-btn" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                            <polyline points="16 17 21 12 16 7"/>
                            <line x1="21" y1="12" x2="9" y2="12"/>
                        </svg>
                        <span>Log Out</span>
                    </a>
                <?php else: ?>
                    <a role="button" id="login-trigger-btn" class="header-icon-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <span>Sign In</span>
                    </a>
                <?php endif; ?>
            </header>

            <div class="hero-content">
                <div class="hero-media">
                    <button type="button" class="btn-close-cinema" aria-label="Close Preview">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <div class="hero-video-bg">
                        <video id="heroVideo" autoplay muted loop playsinline>
                            <source src="" type="video/mp4">
                        </video>
                        <div class="hero-overlay-gradient"></div>

                        <div class="hero-controls-right" role="group" aria-label="Video controls">
                            <button type="button" data-action="toggle-play" class="control-circle" title="Pause">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                            </button>
                            <button type="button" data-action="toggle-audio" class="control-circle" title="Unmute">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                            </button>
                            <button type="button" data-action="expand" class="control-circle" title="Fullscreen">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="hero-info-overlay">
                    <img id="hero-logo" class="hero-logo" alt="" aria-hidden="true" style="display: none;">

                    <h1 class="hero-title" data-hero-title>Loading...</h1>
                    
                    <p class="hero-subtext" data-hero-meta></p>
                    <form class="hero-cta-form" novalidate>
                        <div class="input-group">
                            <input id="hero-email" type="email" placeholder="Email address" autocomplete="email">
                        </div>
                        <button type="button" class="btn-watch-now">Watch Now</button>
                    </form>
                </div>
            </div>
            <div class="hero-gradient hero-gradient--left" aria-hidden="true"></div>
            <div class="hero-gradient hero-gradient--right" aria-hidden="true"></div>
        </section>

        <section class="content-container" aria-label="Details and similar titles">
            <div class="content-backdrop" data-content-backdrop aria-hidden="true"></div>
            <div class="content-inner">
                
                <article class="synopsis-card">
                    <div class="synopsis-content">
                        <div class="synopsis-summary">
                            <h2 class="synopsis-title" data-synopsis-title></h2>
                            <p class="synopsis-meta" data-synopsis-meta></p>
                            <p class="synopsis-description" data-synopsis-text></p>
                        </div>
                        <div class="synopsis-divider" aria-hidden="true"></div>
                        <p class="synopsis-starring">
                            <span class="starring-label">Starring:</span>
                            <span data-synopsis-cast></span>
                        </p>
                    </div>
                </article>

                <section class="trailers-section" aria-label="Trailers and Extras">
                    <h2 class="details-heading">Trailers</h2>
                    
                    <div class="trailers-container">
                        <ul class="trailer-list">
                            <li class="trailer-item">
                                <button class="trailer-card-btn" data-action="play-trailer">
                                    <div class="trailer-image-box">
                                        <img id="trailer-thumbnail" src="" alt="Trailer Thumbnail" class="trailer-img" loading="lazy">
                                        
                                        <div class="trailer-icon-overlay">
                                            <div class="icon-circle">
                                                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                                    <path d="M8 5v14l11-7z"></path>
                                                </svg>
                                            </div>
                                        </div>

                                        <span class="trailer-duration" id="trailer-duration">2m 10s</span>
                                    </div>

                                    <p class="trailer-type-heading">
                                        <span>TRAILER</span>
                                    </p>

                                    <div class="trailer-title-wrapper">
                                        <p class="trailer-title" id="trailer-title-text">Loading...</p>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="details-section" aria-label="More details">
                    <h2 class="details-heading">More Details</h2>
                    <div class="details-grid" data-details-grid>
                        <article class="details-card">
                            <dl class="details-list">
                                <dt>Watch offline</dt>
                                <dd data-detail="offline">Available to download</dd>
                                <dt>Genres</dt>
                                <dd data-detail="genres">Genres</dd>
                                <dt>This show is ...</dt>
                                <dd data-detail="moods">Exciting</dd>
                            </dl>
                        </article>
                        <article class="details-card">
                            <dl class="details-list">
                                <dt>Audio</dt>
                                <dd data-detail="audio">English</dd>
                                <dt>Subtitles</dt>
                                <dd data-detail="subtitles">English</dd>
                            </dl>
                        </article>
                        <article class="details-card">
                            <dl class="details-list">
                                <dt>Cast</dt>
                                <dd data-detail="cast">Cast details</dd>
                            </dl>
                        </article>
                    </div>
                </section>

                <section class="carousel-section">
                    <div class="section-heading">
                        <h2>You Might Also Like</h2>
                    </div>
                    <div class="carousel-wrapper">
                        <button type="button" class="nav-btn left" data-carousel="like" data-direction="prev">
                            <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                        </button>
                        
                        <div class="carousel-track" data-carousel-track="like">
                            </div>

                        <button type="button" class="nav-btn right" data-carousel="like" data-direction="next">
                            <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                        </button>
                    </div>
                </section>

                <section class="carousel-section">
                    <div class="section-heading">
                        <h2>Trending Now</h2>
                    </div>
                    <div class="carousel-wrapper">
                        <button type="button" class="nav-btn left" data-carousel="trending" data-direction="prev">
                            <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                        </button>

                        <div class="carousel-track" data-carousel-track="trending">
                            </div>

                        <button type="button" class="nav-btn right" data-carousel="trending" data-direction="next">
                            <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                        </button>
                    </div>
                </section>

            </div>

        <footer class="main-footer">
            <div class="footer-content">
                
                <div class="footer-az-section">
                    <div class="az-header">
                        <h3>A-Z List</h3>
                        <p>Searching movie order by alphabet name A to Z.</p>
                    </div>
    
                    <div class="az-buttons">
                        <button class="az-btn active">All</button>
                        <button class="az-btn">0-9</button>
                        <button class="az-btn">A</button>
                        <button class="az-btn">B</button>
                        <button class="az-btn">C</button>
                        <button class="az-btn">D</button>
                        <button class="az-btn">E</button>
                        <button class="az-btn">F</button>
                        <button class="az-btn">G</button>
                        <button class="az-btn">H</button>
                        <button class="az-btn">I</button>
                        <button class="az-btn">J</button>
                        <button class="az-btn">K</button>
                        <button class="az-btn">L</button>
                        <button class="az-btn">M</button>
                        <button class="az-btn">N</button>
                        <button class="az-btn">O</button>
                        <button class="az-btn">P</button>
                        <button class="az-btn">Q</button>
                        <button class="az-btn">R</button>
                        <button class="az-btn">S</button>
                        <button class="az-btn">T</button>
                        <button class="az-btn">U</button>
                        <button class="az-btn">V</button>
                        <button class="az-btn">W</button>
                        <button class="az-btn">X</button>
                        <button class="az-btn">Y</button>
                        <button class="az-btn">Z</button>
                    </div>
                </div>
    
                <div class="footer-info">
                    <div class="copyright-text">
                        <p class="disclaimer">
                            MovieZone is a school case study project developed as one of the requirements for the WEBPROG 
                            subject under Professor Kwinno Pineda, by a students from Tarlac State University. <br><br>
                            This website uses various images and video materials owned by their respective companies. 
                            It is not intended for commercial use and will be deployed solely for educational and academic purposes 
                            as part of the project requirement. <br><br>
                            For inquiries or concerns, please contact: 
                            <a href="mailto:zuko60205@gmail.com">zuko60205@gmail.com</a>
                        </p>
                    </div>
                </div>
                
            </div>
        </footer>
        </section>
    </div>
    
    <div id="cinema-player-overlay" class="cinema-overlay hidden">
        <div class="cinema-video-wrapper">
            <button id="btn-close-cinema" class="close-cinema-btn" aria-label="Close Player">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <video id="cinema-video" controls playsinline>
                <source src="" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>

    <div class="modal-overlay" id="login-modal-overlay">
        <div class="login-modal">
            <div class="login-header">
                <button class="login-close-btn" id="login-close-btn" title="Close">&times;</button>
            </div>
            <div class="login-body">
                <h2>Sign in to your account</h2>
                <form action="../../login.php" method="POST" class="login-form">
                    <div class="login-error-box">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <span class="login-error-text"></span>
                    </div>

                    <input type="text" id="username" name="username" placeholder="Username or email">
                    <input type="password" id="password" name="password" placeholder="Password">

                    <button type="submit" class="login-submit-btn" name="create">Sign In</button>
                </form>
                <div class="login-footer">
                    <p>Don't have an account? <a href="#" id="switch-to-signup-btn">Sign up</a></p>
                    <a href="#" id="switch-to-forgot-btn">Forgot Password?</a>
                </div>
            </div>
        </div>
    </div>

    <div class="modal-overlay" id="signup-modal-overlay">
        <div class="login-modal signup-modal">
            <div class="login-header">
                <button class="login-close-btn" id="signup-close-btn" title="Close">&times;</button>
            </div>
            <div class="login-body">
                <h2>Create An Account</h2>
                <div class="login-error-box" id="signup-error-box" style="display: none;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <span class="signup-error-text" style="color: white; font-size: 0.9rem; margin-left: 8px;"></span>
                </div>
                <form action="../../signup.php" method="POST" class="login-form" id="signup-form">
                    <input type="text" id="signup-username" name="username" placeholder="Username">
                    <input type="email" id="signup-email" name="email" placeholder="Email">
                    <input type="password" id="signup-password" name="password" placeholder="Password">
                    <input type="password" id="signup-password-confirm" name="password-confirm" placeholder="Password confirmation">
                    
                    <button type="submit" class="login-submit-btn">Sign Up</button>
                </form>
            </div>
        </div>
    </div>

    <div class="modal-overlay" id="forgot-modal-overlay">
        <div class="login-modal">
            <div class="login-header">
                <button class="login-close-btn" id="forgot-close-btn" title="Close">&times;</button>
            </div>
            <div class="login-body">
                <h2>Forgot Password</h2>
                <form action="../../forgotpass.php" method="POST" class="login-form">
                    <input type="text" id="forgot-email" name="forgot-email" placeholder="Email or Username">
                    <div class="signup-success-box">
                        <div class="signup-success-left">
                            <div class="signup-success-check">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <span>Success!</span>
                        </div>
                    </div>
                    <button type="submit" class="login-submit-btn">Request</button>
                </form>
                <div class="login-footer">
                    <p>Back to <a href="#" id="switch-to-login-from-forgot-btn">Sign in</a></p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal-overlay" id="logout-modal-overlay">
        <div class="login-modal logout-modal">
            <div class="login-header logout-header">
                <button class="login-close-btn" id="logout-close-btn" title="Close">&times;</button>
            </div>
            <div class="login-body logout-body">
                <h2>Logging Out?</h2>
                <p>Are you sure you want to sign out of your account?</p>
                
                <div class="logout-btn-group">
                    <button class="login-submit-btn btn-cancel" id="logout-cancel-btn">Cancel</button>
                    <button class="login-submit-btn btn-confirm" id="logout-confirm-btn">Log Out</button>
                </div>
            </div>
        </div>
    </div>

    <script src="../../assets/js/managers/system-manager.js"></script>
    <script src="../../data/database.js"></script>
    <script src="../../assets/js/preview/recommendation-system.js"></script>
    
    <script src="../../assets/js/home/login-modal.js"></script>
    
    <script src="../../assets/js/preview/movie-preview.js" defer></script>
</body>
</html>