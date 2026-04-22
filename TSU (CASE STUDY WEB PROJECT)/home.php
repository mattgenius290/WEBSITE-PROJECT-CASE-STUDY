<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    // Security Check: Redirect to index.php if not logged in
    header("Location: index.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MovieZone</title>
    <link rel="icon" type="image/png" href="https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417767/clapperboard_ykj9ek.png">
    
    <link rel="stylesheet" href="./assets/css/global/base.css">

    <link rel="stylesheet" href="./assets/css/layout/header.css">
    <link rel="stylesheet" href="./assets/css/layout/footer.css">

    <link rel="stylesheet" href="./assets/css/components/search-bar.css">
    <link rel="stylesheet" href="./assets/css/components/smart-search.css">
    <link rel="stylesheet" href="./assets/css/components/filter-panel.css">
    <link rel="stylesheet" href="./assets/css/components/card-popups.css">
    <link rel="stylesheet" href="./assets/css/components/auth-modals.css">
    <link rel="stylesheet" href="./assets/css/components/preview-overlay.css">

    <link rel="stylesheet" href="./assets/css/sections/hero-slider.css">
    <link rel="stylesheet" href="./assets/css/sections/trending.css">
    <link rel="stylesheet" href="./assets/css/sections/latest-updates.css">
    <link rel="stylesheet" href="./assets/css/sections/categories.css">

    <link rel="stylesheet" href="./assets/css/global/responsive.css">
</head>
<body>
    <header class="site-header">
        <div class="header-main-content">
            <div class="header-left">
                <div class="menu-wrapper">
                    <input type="checkbox" id="menu-toggle" class="menu-checkbox" />
                    <label for="menu-toggle" class="menu-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </label>
                    <div class="dropdown-menu">
                        <ul>
                            <li><a href="#">GENRES</a></li>
                            <li><a href="./pages/watchlist/watchlist.html" target="_blank">WATCHLIST</a></li>
                            <li><a href="#">NEW RELEASES</a></li>
                            <li><a href="#">UPDATES</a></li>
                            <li><a href="#">ONGOING</a></li>
                            <li><a href="#">RECENT</a></li>
                        </ul>
                    </div>
                </div>
                <a href="index.php" class="logo" style="text-decoration: none;">
                    ൬ovie<span class="highlight">Ⱬone</span>
                </a>
            </div>
    
            <div class="header-right">
                <a href="./pages/watchlist/watchlist.html" class="header-icon-btn desktop-watchlist-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                    <span>Watchlist</span>
                </a>
                <a role="button" id="logout-btn" class="header-icon-btn" href="#" title="Logout">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" 
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                        <polyline points="16 17 21 12 16 7"/>
                        <line x1="21" y1="12" x2="9" y2="12"/>
                    </svg>
                    <span>Log Out</span>
                </a>
                <a href="#" class="header-icon-btn mobile-search-btn" id="mobile-search-trigger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </a>
            </div>
        </div>
    </header> 
    <div class="mobile-search-dropdown" id="mobile-search-dropdown">
        <div class="search-pill-container">
            <svg class="pill-search-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            
            <input type="text" class="search-input mobile-pill-input" placeholder="Search anime...">
            
            <button class="pill-filter-btn" id="mobile-filter-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                FILTER
            </button>
        </div>
    </div>
    
    <section class="featured">
        <div class="slider">
            <div class="slides" id="featured-slides-container"></div>
            <template id="featured-slide-template"><div class="slide"></div></template>
            <template id="featured-content-template">
                <div class="content">
                    <h1 class="featured-title"></h1>
                    <div class="featured-tags">
                        <span class="tag-rated featured-tag-rated"></span>
                        <span class="tag-type featured-tag-type"></span>
                        <span class="tag genre featured-tag-genres"></span>
                    </div>
                    <p class="desc featured-description"></p>
                    <div class="details">
                        <div><p class="label">Rating</p><p class="value featured-detail-rated"></p></div>
                        <div><p class="label">Release</p><p class="value featured-detail-release"></p></div>
                        <div><p class="label">Quality</p><p class="value featured-detail-quality"></p></div>
                    </div>
                    <div class="actions">
                        <button class="watch-btn">WATCH NOW</button>
                        <button class="bookmark-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                        </button>
                        <button class="detail-btn">Detail &gt;</button>
                    </div>
                </div>
            </template>
            <div class="slider-controls">
                <button class="prev-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
                <span class="slide-indicator"><span class="current-slide">1</span><span class="divider">/</span><span class="total-slides">10</span></span>
                <button class="next-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
            </div>
            <div class="slider-dots-container"></div>
        </div>
    </section>

    <section class="discover-section">
        <div class="main-container">
            <div class="main-column">
                <div class="search-bar">
                    <button class="search-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="20" height="20"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    </button>
                    
                    <div class="search-wrapper-relative">
                        <input type="text" placeholder="Search..." class="search-input" />
                        </div>
                
                    <button class="filter-btn" id="filter-toggle-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="20" height="20"><path d="M3 4h18l-7 8v6l-4 2v-8L3 4z"/></svg>
                        <span>FILTER</span>
                    </button>
                </div>

                <div class="filter-toolbar" id="filter-panel">
                    
                    <div class="filter-row-main">
                        <div class="filter-dropdown" id="dd-genre">
                            <button class="dropdown-btn">
                                <span class="btn-label">Genre</span>
                                <span class="btn-value">All</span>
                                <svg class="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 1L5 5L9 1"/></svg>
                            </button>
                            <div class="dropdown-menu menu-wide">
                                <div class="dropdown-add-group">
                                    <input type="text" class="add-input" placeholder="Add custom genre...">
                                    <button class="btn-add-tag" type="button">+</button>
                                </div>
                                <div class="checkbox-grid" data-group="genre">
                                    <label><input type="checkbox" name="genre" value="Action"> Action</label>
                                    <label><input type="checkbox" name="genre" value="Adventure"> Adventure</label>
                                    <label><input type="checkbox" name="genre" value="Comedy"> Comedy</label>
                                    <label><input type="checkbox" name="genre" value="Drama"> Drama</label>
                                    <label><input type="checkbox" name="genre" value="Fantasy"> Fantasy</label>
                                    <label><input type="checkbox" name="genre" value="Horror"> Horror</label>
                                    <label><input type="checkbox" name="genre" value="Mystery"> Mystery</label>
                                    <label><input type="checkbox" name="genre" value="Romance"> Romance</label>
                                    <label><input type="checkbox" name="genre" value="Sci-Fi"> Sci-Fi</label>
                                    <label><input type="checkbox" name="genre" value="Thriller"> Thriller</label>
                                    <label><input type="checkbox" name="genre" value="Animation"> Animation</label>
                                    <label><input type="checkbox" name="genre" value="Family"> Family</label>
                                    <label><input type="checkbox" name="genre" value="Sports"> Sports</label>
                                    <label><input type="checkbox" name="genre" value="Music"> Music</label>
                                    <label><input type="checkbox" name="genre" value="History"> History</label>
                                    <label><input type="checkbox" name="genre" value="Documentary"> Documentary</label>
                                </div>
                            </div>
                        </div>

                        <div class="filter-dropdown" id="dd-country">
                            <button class="dropdown-btn">
                                <span class="btn-label">Country</span>
                                <span class="btn-value">All</span>
                                <svg class="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 1L5 5L9 1"/></svg>
                            </button>
                            <div class="dropdown-menu">
                                <div class="dropdown-add-group">
                                    <input type="text" class="add-input" placeholder="Add country...">
                                    <button class="btn-add-tag" type="button">+</button>
                                </div>
                                <div class="checkbox-list" data-group="country">
                                    <label><input type="checkbox" name="country" value="Japan"> Japan</label>
                                    <label><input type="checkbox" name="country" value="China"> China</label>
                                    <label><input type="checkbox" name="country" value="Korea"> Korea</label>
                                    <label><input type="checkbox" name="country" value="USA"> USA</label>
                                    <label><input type="checkbox" name="country" value="UK"> United Kingdom</label>
                                    <label><input type="checkbox" name="country" value="France"> France</label>
                                </div>
                            </div>
                        </div>

                        <div class="filter-dropdown" id="dd-year">
                            <button class="dropdown-btn">
                                <span class="btn-label">Year</span>
                                <span class="btn-value">All</span>
                                <svg class="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 1L5 5L9 1"/></svg>
                            </button>
                            <div class="dropdown-menu">
                                <div class="dropdown-add-group">
                                    <input type="text" class="add-input" placeholder="Add year...">
                                    <button class="btn-add-tag" type="button">+</button>
                                </div>
                                <div class="checkbox-list scrollable-list" data-group="year">
                                    <label><input type="checkbox" name="year" value="2026"> 2026</label>
                                    <label><input type="checkbox" name="year" value="2025"> 2025</label>
                                    <label><input type="checkbox" name="year" value="2024"> 2024</label>
                                    <label><input type="checkbox" name="year" value="2023"> 2023</label>
                                    <label><input type="checkbox" name="year" value="2022"> 2022</label>
                                    <label><input type="checkbox" name="year" value="2021"> 2021</label>
                                    <label><input type="checkbox" name="year" value="2020"> 2020</label>
                                    <label><input type="checkbox" name="year" value="older"> Older</label>
                                </div>
                            </div>
                        </div>

                        <div class="filter-dropdown" id="dd-type">
                            <button class="dropdown-btn">
                                <span class="btn-label">Type</span>
                                <span class="btn-value">All</span>
                                <svg class="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 1L5 5L9 1"/></svg>
                            </button>
                            <div class="dropdown-menu">
                                <div class="checkbox-list" data-group="type">
                                    <label><input type="checkbox" name="type" value="Movie"> Movie</label>
                                    <label><input type="checkbox" name="type" value="Series"> TV Series</label>
                                    <label><input type="checkbox" name="type" value="OVA"> OVA</label>
                                    <label><input type="checkbox" name="type" value="Special"> Special</label>
                                </div>
                            </div>
                        </div>

                        <div class="filter-dropdown" id="dd-status">
                            <button class="dropdown-btn">
                                <span class="btn-label">Status</span>
                                <span class="btn-value">All</span>
                                <svg class="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 1L5 5L9 1"/></svg>
                            </button>
                            <div class="dropdown-menu">
                                <div class="checkbox-list" data-group="status">
                                    <label><input type="checkbox" name="status" value="Released"> Finished Airing</label>
                                    <label><input type="checkbox" name="status" value="Ongoing"> Currently Airing</label>
                                    <label><input type="checkbox" name="status" value="Upcoming"> Not yet aired</label>
                                </div>
                            </div>
                        </div>

                        <div class="filter-actions-group">
                            <button class="btn-reset-action" id="btn-reset-filter">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                                Reset
                            </button>
                        </div>
                    </div>
                
                    <div class="filter-row-main">
                        
                        <div class="filter-dropdown" id="dd-lang">
                            <button class="dropdown-btn">
                                <span class="btn-label">Language</span>
                                <span class="btn-value">All</span>
                                <svg class="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 1L5 5L9 1"/></svg>
                            </button>
                            <div class="dropdown-menu">
                                <div class="dropdown-add-group">
                                    <input type="text" class="add-input" placeholder="Add language...">
                                    <button class="btn-add-tag" type="button">+</button>
                                </div>
                                <div class="checkbox-list" data-group="lang">
                                    <label><input type="checkbox" name="lang" value="Sub"> English</label>
                                    <label><input type="checkbox" name="lang" value="Dub"> Japanese</label>
                                    <label><input type="checkbox" name="lang" value="Raw"> Chinese (Simplified)</label>
                                    <label><input type="checkbox" name="lang" value="Raw"> Hindi</label>
                                </div>
                            </div>
                        </div>

                        <div class="filter-dropdown" id="dd-audio">
                            <button class="dropdown-btn">
                                <span class="btn-label">Audio</span>
                                <span class="btn-value">All</span>
                                <svg class="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 1L5 5L9 1"/></svg>
                            </button>
                            <div class="dropdown-menu">
                                <div class="dropdown-add-group">
                                    <input type="text" class="add-input" placeholder="Add audio...">
                                    <button class="btn-add-tag" type="button">+</button>
                                </div>
                                <div class="checkbox-list" data-group="audio">
                                    <label><input type="checkbox" name="audio" value="English"> English</label>
                                    <label><input type="checkbox" name="audio" value="Japanese"> Japanese</label>
                                    <label><input type="checkbox" name="audio" value="Spanish"> Spanish</label>
                                    <label><input type="checkbox" name="audio" value="French"> French</label>
                                    <label><input type="checkbox" name="audio" value="Mandarin"> Mandarin</label>
                                    <label><input type="checkbox" name="audio" value="Korean"> Korean</label>
                                </div>
                            </div>
                        </div>

                        <div class="filter-dropdown" id="dd-sort">
                            <button class="dropdown-btn">
                                <span class="btn-label">Sort</span>
                                <span class="btn-value">Default</span>
                                <svg class="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 1L5 5L9 1"/></svg>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right">
                                <div class="radio-list">
                                    <label><input type="radio" name="sort" value="latest" checked> Default</label>
                                    <label><input type="radio" name="sort" value="popular"> Most Watched</label>
                                    <label><input type="radio" name="sort" value="rating"> Score</label>
                                    <label><input type="radio" name="sort" value="release"> Released Date</label>
                                    <label><input type="radio" name="sort" value="az"> Name A-Z</label>
                                </div>
                            </div>
                        </div>

                        <div class="filter-dropdown" id="dd-rated">
                            <button class="dropdown-btn">
                                <span class="btn-label">Rated</span>
                                <span class="btn-value">All</span>
                                <svg class="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 1L5 5L9 1"/></svg>
                            </button>
                            <div class="dropdown-menu">
                                <div class="dropdown-add-group">
                                    <input type="text" class="add-input" placeholder="Add rating...">
                                    <button class="btn-add-tag" type="button">+</button>
                                </div>
                                <div class="checkbox-list scrollable-list" data-group="rated">
                                    <label><input type="checkbox" name="rated" value="G"> G</label>
                                    <label><input type="checkbox" name="rated" value="PG"> PG</label>
                                    <label><input type="checkbox" name="rated" value="PG-13"> PG-13</label>
                                    <label><input type="checkbox" name="rated" value="R"> R</label>
                                    <label><input type="checkbox" name="rated" value="TV-Y"> TV-Y</label>
                                    <label><input type="checkbox" name="rated" value="TV-Y7"> TV-Y7</label>
                                    <label><input type="checkbox" name="rated" value="TV-G"> TV-G</label>
                                    <label><input type="checkbox" name="rated" value="TV-PG"> TV-PG</label>
                                    <label><input type="checkbox" name="rated" value="TV-14"> TV-14</label>
                                    <label><input type="checkbox" name="rated" value="TV-MA"> TV-MA</label>
                                    <label><input type="checkbox" name="rated" value="13+"> 13+</label>
                                    <label><input type="checkbox" name="rated" value="16+"> 16+</label>
                                </div>
                            </div>
                        </div>

                        <div class="filter-dropdown" id="dd-custom">
                            <button class="dropdown-btn">
                                <span class="btn-label">Custom</span>
                                <span class="btn-value">All</span>
                                <svg class="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 1L5 5L9 1"/></svg>
                            </button>
                            <div class="dropdown-menu menu-wide">
                                <div class="dropdown-add-group">
                                    <input type="text" class="add-input" placeholder="Add Cast, Mood, or Keyword...">
                                    <button class="btn-add-tag" type="button">+</button>
                                </div>
                                <div class="checkbox-grid" data-group="custom">
                                    <label><input type="checkbox" name="custom" value="Exciting"> Exciting</label>
                                    <label><input type="checkbox" name="custom" value="Feel-good"> Feel-good</label>
                                    <label><input type="checkbox" name="custom" value="Dark"> Dark</label>
                                    <label><input type="checkbox" name="custom" value="Emotional"> Emotional</label>
                                    <label><input type="checkbox" name="custom" value="Funny"> Funny</label>
                                    <label><input type="checkbox" name="custom" value="Scary"> Scary</label>
                                    <label><input type="checkbox" name="custom" value="Epic"> Epic</label>
                                    <label><input type="checkbox" name="custom" value="Survival"> Survival</label>
                                </div>
                            </div>
                        </div>
                
                        <div class="filter-actions-group">
                            <button class="btn-filter-action" id="btn-apply-filter">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                                Filter
                            </button>
                        </div>
                
                    </div>
                </div>
                <section class="latest-updates">
                    <header class="section-header">
                        <h2 class="section-title">LATEST UPDATES</h2>
                        <div class="header-nav">
                            <ul class="filters" id="quick-filters">
                                <li>
                                    <button class="filter-pill active" data-filter="all">All</button>
                                </li>
                                <li>
                                    <button class="filter-pill" data-filter="New">
                                        New
                                    </button>
                                </li>
                                <li>
                                    <button class="filter-pill" data-filter="Movie">Movies</button>
                                </li>
                                <li>
                                    <button class="filter-pill" data-filter="Series">TV Series</button>
                                </li>
                                <li>
                                    <button class="filter-pill" data-filter="Kids">For Kids</button>
                                </li>
                                <li>
                                    <button class="filter-pill" data-filter="Ongoing">Ongoing</button>
                                </li>
                            </ul>
                            <div class="nav-arrows">
                                <button class="arrow-btn">&lt;</button>
                                <button class="arrow-btn">&gt;</button>
                            </div>
                        </div>
                    </header>
                    
                    <div>
                        <template id="latest-update-card-template">
                            <div class="movie-card">
                                <div class="card-image-container">
                                    <img src="" alt="" class="card-image">
                                </div>
                                <div class="card-content">
                                    <h3 class="card-title"></h3>
                                </div>
                                <div class="movie-popup">
                                    <div class="popup-header">
                                        <h3 class="popup-title"></h3>
                                        <button class="popup-add-btn" title="Add to Watchlist">
                                            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="popup-tags-row">
                                        <span class="popup-tag tag-rated popup-tag-rated"></span>
                                        <span class="popup-tag tag-type popup-tag-type"></span>
                                        <span class="popup-tag tag-released popup-tag-released"></span>
                                    </div>
                                    <p class="popup-summary"></p>
                                    <div class="popup-scores-row">
                                        <span class="score-item imdb-score">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FFC107" stroke="none">
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <span class="score-value imdb-score-value"></span>
                                        </span>
                                        <button class="score-item user-rate-btn" title="Rate this content">
                                            <svg class="rate-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3f51b5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            <span class="rate-label">Rate</span>
                                        </button>
                                        <span class="score-item popularity-score">
                                            <svg class="popularity-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#28A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                            </svg>
                                            <span class="score-value popularity-score-value"></span>
                                            <span class="popularity-change-icon"></span>
                                        </span>
                                    </div>
                                    <div class="popup-details">
                                        <p><strong>Type:</strong> <span class="detail-value detail-type"></span></p>
                                        <p><strong>Released:</strong> <span class="detail-value detail-released"></span></p>
                                        <p><strong>Status:</strong> <span class="detail-value detail-status"></span></p>
                                        <p><strong>Rated:</strong> <span class="detail-value detail-rated"></span></p>
                                        <p><strong>Genre:</strong> <span class="detail-value detail-genre"></span></p>
                                        <p><strong>Duration:</strong> <span class="detail-value detail-duration"></span></p>
                                    </div>
                                    <button class="popup-watch-btn full-width">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                        WATCH NOW!
                                    </button>
                                </div>
                            </div>
                        </template>
                        
                        <div class="movie-grid" id="latest-updates-grid">
        
                        </div>
                        <div class="latest-updates-footer">
                            <div class="nav-arrows">
                                <button class="arrow-btn">&lt;</button>
                                <button class="arrow-btn">&gt;</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div> 
            
            <aside class="trending-board">
                <div class="trending-header">
                    <h2 class="trending-title">
                    <span class="title-icon">
                        <img src="https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417767/fire_en9aky.avif" alt="Trending icon" width="16" height="16">
                    </span>
                    Top Trending </h2>
                    <div class="trending-filter-dropdown">
                        <button class="filter-dropdown-trigger" type="button">
                            <span class="selected-filter-value">TODAY</span>
                            <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <ul class="filter-dropdown-options">
                            <li><a href="#" data-value="Today" class="active">TODAY</a></li>
                            <li><a href="#" data-value="Week">WEEK</a></li>
                            <li><a href="#" data-value="Month">MONTH</a></li>
                        </ul>
                    </div>
                </div>
                
                <template id="trending-item-template">
                    <li class="trending-item">
                        <div class="item-rank">
                            <span class="rank-number"></span>
                        </div>
                        <img class="item-thumbnail" src="" alt="">
                        <div class="item-content">
                            <h3 class="item-title"></h3>
                            <div class="trending-tags-row">
                                </div>
                        </div>
                        <div class="movie-popup">
                            <div class="popup-header">
                                <h3 class="popup-title"></h3>
                                <button class="popup-add-btn" title="Add to Watchlist">
                                    <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="popup-tags-row">
                                <span class="popup-tag tag-rated popup-tag-rated"></span>
                                <span class="popup-tag tag-type popup-tag-type"></span>
                                <span class="popup-tag tag-released popup-tag-released"></span>
                            </div>
                            <p class="popup-summary"></p>
                            <div class="popup-scores-row">
                                <span class="score-item imdb-score">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FFC107" stroke="none">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                    <span class="score-value"></span>
                                </span>
                                <button class="score-item user-rate-btn" title="Rate this content">
                                    <svg class="rate-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3f51b5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    
                                    </svg>
                                    <span class="rate-label">Rate</span>
                                </button>
                                <span class="score-item popularity-score">
                                    <svg class="popularity-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#28A745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                    </svg>
                                    <span class="score-value"></span>
                                    <span class="popularity-change-icon"></span>
                                </span>
                            </div>
                            <div class="popup-details">
                                <p><strong>Type:</strong> <span class="detail-value detail-type"></span></p>
                                <p><strong>Released:</strong> <span class="detail-value detail-released"></span></p>
                                <p><strong>Status:</strong> <span class="detail-value detail-status"></span></p>
                                <p><strong>Rated:</strong> <span class="detail-value detail-rated"></span></p>
                                <p><strong>Genre:</strong> <span class="detail-value detail-genre"></span></p>
                                <p><strong>Duration:</strong> <span class="detail-value detail-duration"></span></p>
                            </div>
                            <button class="popup-watch-btn full-width">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                WATCH NOW!
                            </button>
                        </div>
                        </li>
                </template>
                <ul class="trending-list" id="trending-list-container"></ul>
            </aside> 


        </div> 

        <div class="categories-container">
            <template id="category-section-template">
                <section class="category-section">
                  <header class="section-header">
                    <h2 class="section-title"></h2>
                  </header>
              
                  <div class="category-row-wrapper">
                    <button class="slider-arrow prev-arrow" style="display: none;">&lt;</button>
                    <div class="category-row"></div>
                    <button class="slider-arrow next-arrow">&gt;</button>
                  </div>
                </section>
            </template>
              
            <div id="category-sections-container">
            </div>
        </div>
    </section> 

    <div class="modal-overlay" id="login-modal-overlay">
    <div class="login-modal">
        
        <div class="login-header">
            <button class="login-close-btn" id="login-close-btn" title="Close">&times;</button>
        </div>

        <div class="login-body">
            <h2>Sign in to your account</h2>
            
            <form action="login.php" method="POST" class="login-form">
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
                <form action="signup.php"  method="POST" class="login-form">
                    <input type="text" id="signup-username" name="username" placeholder="Username">
                    <input type="email" id="signup-email" name="email" placeholder="Email">
                    <input type="password" id="signup-password" name="password" placeholder="Password">
                    <input type="password" id="signup-password-confirm" name="password-confirm" placeholder="Password confirmation">

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

                    <button type="submit" class="login-submit-btn">Sign Up</button>
                </form>
                <div class="login-footer">
                    <p>Already have an account? <a href="#" id="switch-to-login-btn">Sign in</a></p>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-overlay" id="forgot-modal-overlay">
        <div class="login-modal">
            
            <div classs="login-header">
                <button class="login-close-btn" id="forgot-close-btn" title="Close">&times;</button>
            </div>

            <div class="login-body">
                <h2>Forgot Password</h2>
                <form action="forgotpass.php" method="POST" class="login-form">
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
                
                <div class="footer-requests">
                    <a href="#" class="request-link">REQUEST</a>
                    <a href="#" class="request-link">CONTACT US</a>
                </div>
            </div>

            <div class="footer-info">
                <div class="copyright-text">
                    <p class="disclaimer">MovieZone is a school case study project developed as one of the requirements for the WEBPROG <br>
                        subject under Professor Kwinno Pineda, by a student from Tarlac State University.</p>
                </div>
            </div>
        </div>
    </footer>


    <div id="preview-modal-overlay" class="preview-overlay hidden">
        <div class="preview-container">
            
            <button class="preview-close-btn" onclick="closeMoviePreview()">
                <svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"></path></svg>
            </button>
    
            <div class="preview-hero">
                <img id="preview-hero-img" src="" alt="Movie Cover">
                
                <div class="preview-hero-bg">
                    <video id="hero-video" autoplay muted loop playsinline poster="">
                        <source id="hero-video-source" src="" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    
                    <img id="hero-image" src="" alt="Movie Background">
                </div>  
    
                <div class="preview-hero-content">
                    <h1 id="preview-title">Movie Title</h1>
                    <div class="preview-buttons">
                        <button class="btn-play">
                            <svg viewBox="0 0 24 24" width="24" height="24"><path d="M8 5v14l11-7z" fill="currentColor"></path></svg> 
                            Play
                        </button>
                        <button class="btn-list">
                            <svg viewBox="0 0 24 24" width="24" height="24"><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path></svg>
                            My List
                        </button>
                    </div>
                </div>
            </div>
    
            <div class="preview-details-body">
                <div class="preview-left-col">
                    <div class="preview-meta-row">
                        <span class="match-score">98% Match</span>
                        <span id="preview-year" class="meta-year">2024</span>
                        <span id="preview-age" class="meta-age">TV-MA</span>
                        <span id="preview-duration" class="meta-duration">2h 15m</span>
                    </div>
                    <p id="preview-description" class="preview-desc">
                        Description text will appear here...
                    </p>
                </div>
                <div class="preview-right-col">
                    <div class="preview-info-line">
                        <span class="label">Genres:</span> <span id="preview-genres">Action</span>
                    </div>
                    <div class="preview-info-line">
                        <span class="label">Type:</span> <span id="preview-type">Movie</span>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <script src="./assets/js/managers/system-manager.js"></script>
    <script src="./data/database.js"></script>
    <script src="./assets/js/preview/recommendation-system.js"></script>
    <script src="./assets/js/home/header-navigation.js"></script>
    <script src="./assets/js/home/featured-slider.js"></script>
    <script src="./assets/js/home/trending.js"></script>
    
    <script src="./assets/js/utils/input-validator.js"></script> 
    <script src="./assets/js/managers/smart-search.js"></script>
    
    <script src="./assets/js/home/latest-updates.js"></script>
    <script src="./assets/js/managers/filter-search.js"></script>
    
    <script src="./assets/js/home/login-modal.js"></script>
    <script src="./assets/js/home/categories.js"></script>
</body>
</html>