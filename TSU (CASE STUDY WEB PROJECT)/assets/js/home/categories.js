document.addEventListener("DOMContentLoaded", () => {
  console.log("categories.js: Fetching from Central DB...");

  // Define which categories to show and how they map to DB categories
  const categorySections = [
      {
          title: "FOR KIDS",
          dbCategory: "kids", // Matches 'kids' in Database.js categories
          viewAllLink: "#kids"
      },
      {
          title: "JAPANESE ANIME",
          dbCategory: "anime", // Matches 'anime' in Database.js categories
          viewAllLink: "#anime"
      }
  ];

  const categoryTemplate = document.getElementById("category-section-template");
  const cardTemplate = document.getElementById("latest-update-card-template"); // Reusing card template for consistent style
  const mainContainer = document.getElementById("category-sections-container");

  if (!categoryTemplate || !cardTemplate || !mainContainer) {
      console.error("Missing templates or main container for categories!");
      return;
  }

  // =======================================================
  // 1. POPULATE CATEGORY ROW
  // =======================================================
  function populateCategory(categorySection, dbCategory) {
      // Fetch movies from Central DB
      if (!window.MovieDB) {
          console.error("MovieDB not found!");
          return;
      }

      const movies = window.MovieDB.getByCategory(dbCategory);

      if (!movies || movies.length === 0) {
          console.warn(`No movies found for category: ${dbCategory}`);
          return;
      }

      const categoryRow = categorySection.querySelector(".category-row");
      if (!categoryRow) return;

      movies.forEach(movie => {
          // Use existing card template but strip out complex elements if needed
          const cardClone = cardTemplate.content.cloneNode(true);
          const movieCard = cardClone.querySelector(".movie-card");

          // For categories, we might want a simpler card (just image), 
          // or the full card. Based on your previous code, it seems you want just the image.
          // Let's customize the clone:
          
          // Set Image
          const cardImage = movieCard.querySelector(".card-image");
          if (cardImage) {
              cardImage.src = movie.posterUrl;
              cardImage.alt = movie.title;
          }

          // Optional: Remove popup/content if you want pure image carousel
          // (Your previous code removed .card-content and .movie-popup)
          const cardContent = movieCard.querySelector(".card-content");
          if (cardContent) cardContent.remove();
          
          const popup = movieCard.querySelector(".movie-popup");
          if (popup) popup.remove();

          // Add Click Event to open preview
          movieCard.addEventListener("click", () => {
              if(typeof window.openMoviePreview === 'function') {
                  window.openMoviePreview({ ...movie, previewId: movie.id });
              }
          });

          categoryRow.appendChild(movieCard);
      });

      // Initialize slider logic for this specific row
      initCategorySlider(categorySection);
  }

  // =======================================================
  // 2. SLIDER LOGIC (Arrows & Scroll)
  // =======================================================
  function initCategorySlider(categorySection) {
      const row = categorySection.querySelector(".category-row");
      const prevBtn = categorySection.querySelector(".prev-arrow");
      const nextBtn = categorySection.querySelector(".next-arrow");
      const wrapper = categorySection.querySelector(".category-row-wrapper");

      if (!row || !prevBtn || !nextBtn || !wrapper) return;

      const updateArrows = () => {
          const scrollLeft = Math.ceil(row.scrollLeft);
          const maxScroll = row.scrollWidth - row.clientWidth;
          
          // Simple check with tolerance
          const hasPrev = scrollLeft > 10;
          const hasNext = scrollLeft < (maxScroll - 10);

          prevBtn.style.display = hasPrev ? "flex" : "none";
          nextBtn.style.display = hasNext ? "flex" : "none";
          
          wrapper.classList.toggle("has-prev-scroll", hasPrev);
          wrapper.classList.toggle("has-next-scroll", hasNext);
      };

      nextBtn.addEventListener("click", () => {
          const scrollAmount = row.clientWidth * 0.8;
          row.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });

      prevBtn.addEventListener("click", () => {
          const scrollAmount = row.clientWidth * 0.8;
          row.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });

      row.addEventListener("scroll", updateArrows);
      
      // Init check
      setTimeout(updateArrows, 100); 
      // Resize observer handles window resizing
      new ResizeObserver(updateArrows).observe(row);
  }

  // =======================================================
  // 3. LOAD ALL SECTIONS
  // =======================================================
  function loadAllCategories() {
      mainContainer.innerHTML = "";
      
      categorySections.forEach(catInfo => {
          const categoryClone = categoryTemplate.content.cloneNode(true);
          const categorySection = categoryClone.querySelector(".category-section");
          
          // Set Title
          const titleEl = categorySection.querySelector(".section-title");
          if(titleEl) titleEl.textContent = catInfo.title;

          // Append to DOM
          mainContainer.appendChild(categoryClone);

          // Populate with Data
          populateCategory(categorySection, catInfo.dbCategory);
      });
  }
  
  loadAllCategories();
});