This document provides a summary of the key files used to build the MovieZone homepage. 
The site is built using static HTML, CSS, and JavaScript, with content being dynamically injected 
into the page from data stored within the JS files.



"index.html" Summary

A key feature of this file is its use of "<template>" tags (e.g., "#featured-slide-template", "#trending-item-template", "#latest-update-card-template"). 
These templates act as blueprints for dynamic content. JavaScript files 
read data (structured as JSON arrays) and clone these templates to populate the page, injecting the data to build the sliders, grids, and lists.



"HomePage.css" File Structure

This file contains all styles for the homepage, organized into the following sections:

1. GLOBAL SETTINGS
2. POPUP CARD STYLING (Base)
3. HEADER NAVIGATION
4. LOGIN MODAL
5. SIGN UP MODAL
6. FORGOT PASSWORD MODAL
7. FEATURED SECTION
8. SEARCH BAR STYLING
9. TRENDING BOARD.
10. LATEST UPDATES POPUP BOARDS (Grid)
11. LATEST UPDATES SECTION
12. TOP TRENDING POPUP BOARDS.
13. CATEGORY SECTIONS (Image-only Carousel)
14. FOOTER SECTION
15. TABLET RESPONSIVE STYLES
16. MOBILE RESPONSIVE STYLES


Movie Preview Page Notes

- The preview screen (`movie-preview.html` + `js/movie-preview.js`) now includes a dedicated `<video id="hero-video">` element layered above the blurred poster background.
- To display motion previews, provide a `videoUrl` property for each entry in the temporary data arrays (e.g., in `Home/js/latest-updates.js`). Omitting `videoUrl` will gracefully fall back to the poster-only experience.