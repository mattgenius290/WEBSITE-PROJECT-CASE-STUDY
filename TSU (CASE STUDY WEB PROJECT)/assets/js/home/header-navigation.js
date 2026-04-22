/**
 * header-navigation.js
 * Handles Hamburger Menu toggling/closing and Header Scroll effects.
 */
document.addEventListener("DOMContentLoaded", () => {
  // ================================================
  // #region HEADER DROPDOWN MENU LOGIC
  // ================================================
  const menuToggle = document.getElementById("menu-toggle");
  const menuWrapper = document.querySelector(".menu-wrapper");

  if (menuToggle && menuWrapper) {
    
    // 1. Prevent clicks INSIDE the menu (button or links) from triggering the window closer
    menuWrapper.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    // 2. Listen for clicks ANYWHERE else on the page
    window.addEventListener("click", () => {
      // If the menu is open, close it (because the click was outside the wrapper)
      if (menuToggle.checked) {
        menuToggle.checked = false;
      }
    });

    // 3. Optional: Close menu when a link inside it is clicked (for better UX)
    const menuLinks = menuWrapper.querySelectorAll("a");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.checked = false;
        });
    });
  }
  // #endregion

  // ================================================
  // #region HEADER SCROLL LOGIC (Auto-Hide)
  // ================================================
  const header = document.querySelector(".site-header");
  
  // SELECT THE PANELS WE WANT TO AUTO-CLOSE
  const mobileSearchDropdown = document.getElementById("mobile-search-dropdown");
  const filterPanel = document.getElementById("filter-panel");

  const FIXED_SCROLL_THRESHOLD = 350; // Threshold (pixels) before hiding starts

  if (header) {
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // FIX: Don't hide the header if the Hamburger Menu is currently OPEN
      if (menuToggle && menuToggle.checked) {
          header.classList.remove("header-hidden");
          lastScrollTop = Math.max(scrollTop, 0);
          return; 
      }

      // Only trigger logic if we are past the top threshold
      if (scrollTop > FIXED_SCROLL_THRESHOLD) {
        
        if (scrollTop > lastScrollTop) {
          // SCROLLING DOWN -> HIDE EVERYTHING
          header.classList.add("header-hidden");
          
          // Collapse Mobile Search (Always hide on scroll down)
          if (mobileSearchDropdown) mobileSearchDropdown.classList.remove("active");
          
          // UPDATED: Only hide Filter Panel if we are on MOBILE (<= 768px)
          if (filterPanel && window.innerWidth <= 768) {
              filterPanel.classList.remove("active");
              // FIX: Ensure dots reappear if auto-hidden
              document.body.classList.remove("mobile-filter-active");
          }
          
        } else {
          // SCROLLING UP -> SHOW HEADER
          header.classList.remove("header-hidden");
        }

      } else {
        // AT THE VERY TOP -> RESET
        header.classList.remove("header-hidden");
      }

      lastScrollTop = Math.max(scrollTop, 0);
    });
  }
  // #endregion
});