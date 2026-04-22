document.addEventListener("DOMContentLoaded", () => {
    console.log("login-modal.js is loaded and running");
  
    // ============================================================
    // 1. SELECT DOM ELEMENTS
    // ============================================================
    
    const loginModalOverlay = document.getElementById("login-modal-overlay");
    const signupModalOverlay = document.getElementById("signup-modal-overlay");
    const forgotModalOverlay = document.getElementById("forgot-modal-overlay");
    const logoutModalOverlay = document.getElementById("logout-modal-overlay");
    
    const loginTriggerBtn = document.getElementById("login-trigger-btn");
    const logoutBtn = document.getElementById("logout-btn");
    
    const loginCloseBtn = document.getElementById("login-close-btn");
    const signupCloseBtn = document.getElementById("signup-close-btn");
    const forgotCloseBtn = document.getElementById("forgot-close-btn");
    const logoutCloseBtn = document.getElementById("logout-close-btn");
    
    const switchToSignupBtn = document.getElementById("switch-to-signup-btn");
    const switchToLoginBtn = document.getElementById("switch-to-login-btn");
    const switchToForgotBtn = document.getElementById("switch-to-forgot-btn");
    const switchToLoginFromForgotBtn = document.getElementById("switch-to-login-from-forgot-btn");
    
    const logoutCancelBtn = document.getElementById("logout-cancel-btn");
    const logoutConfirmBtn = document.getElementById("logout-confirm-btn");
  
    // ============================================================
    // 2. MODAL FUNCTIONS
    // ============================================================
  
    const openModal = (overlay) => {
      if (!overlay) return;
      overlay.style.display = "flex";
      setTimeout(() => {
        overlay.classList.add("is-visible");
      }, 10);
    };
  
    const closeModal = (overlay) => {
      if (!overlay) return;
      overlay.classList.remove("is-visible");
      setTimeout(() => {
        overlay.style.display = "none";
        resetErrors();
      }, 300);
    };
  
    const resetErrors = () => {
        document.querySelectorAll(".login-error-box").forEach(el => el.style.display = 'none');
        document.querySelectorAll(".input-error").forEach(el => el.classList.remove("input-error"));
        document.querySelectorAll(".login-modal").forEach(el => el.classList.remove("shake-animation"));
    };
  
    // ============================================================
    // 3. EVENT LISTENERS
    // ============================================================
  
    if (loginTriggerBtn) {
        loginTriggerBtn.addEventListener("click", (e) => {
            e.preventDefault();
            openModal(loginModalOverlay);
        });
    }
  
    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault(); 
            openModal(logoutModalOverlay);
        });
    }
  
    if (loginCloseBtn) loginCloseBtn.addEventListener("click", () => closeModal(loginModalOverlay));
    if (signupCloseBtn) signupCloseBtn.addEventListener("click", () => closeModal(signupModalOverlay));
    if (forgotCloseBtn) forgotCloseBtn.addEventListener("click", () => closeModal(forgotModalOverlay));
    if (logoutCloseBtn) logoutCloseBtn.addEventListener("click", () => closeModal(logoutModalOverlay));
  
    if (logoutModalOverlay) {
        if (logoutCancelBtn) {
            logoutCancelBtn.addEventListener("click", (e) => {
                e.preventDefault();
                closeModal(logoutModalOverlay);
            });
        }
        if (logoutConfirmBtn) {
            logoutConfirmBtn.addEventListener("click", (e) => {
                e.preventDefault();
                
                // --- DYNAMIC PATH FIX ---
                // Detect if we are in a sub-folder (like pages/preview/) to set the correct path
                const isSubPage = window.location.pathname.includes("/pages/");
                // If sub-page, go up two levels to root; otherwise assume root
                const logoutPath = isSubPage ? "../../logout.php" : "logout.php";
                
                window.location.href = logoutPath;
            });
        }
    }
  
    if (switchToSignupBtn) {
        switchToSignupBtn.addEventListener("click", (e) => {
            e.preventDefault();
            closeModal(loginModalOverlay);
            openModal(signupModalOverlay);
        });
    }
    
    if (switchToLoginBtn) {
        switchToLoginBtn.addEventListener("click", (e) => {
            e.preventDefault();
            closeModal(signupModalOverlay);
            openModal(loginModalOverlay);
        });
    }
  
    if (switchToForgotBtn) {
        switchToForgotBtn.addEventListener("click", (e) => {
            e.preventDefault();
            closeModal(loginModalOverlay);
            openModal(forgotModalOverlay);
        });
    }
  
    if (switchToLoginFromForgotBtn) {
        switchToLoginFromForgotBtn.addEventListener("click", (e) => {
            e.preventDefault();
            closeModal(forgotModalOverlay);
            openModal(loginModalOverlay);
        });
    }
  
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            [loginModalOverlay, signupModalOverlay, forgotModalOverlay, logoutModalOverlay].forEach(modal => {
                if (modal && modal.classList.contains("is-visible")) {
                    closeModal(modal);
                }
            });
        }
    });
  
    // ============================================================
    // 4. URL PARAMETER HANDLING
    // ============================================================
    
    const urlParams = new URLSearchParams(window.location.search);
    
    // A. Signup Success
    if (urlParams.get('signup') === 'success') {
        const successBox = document.querySelector(".signup-success-box");
        if (signupModalOverlay && successBox) {
            openModal(signupModalOverlay);
            successBox.style.display = "flex";
            const newUrl = window.location.pathname;
            window.history.replaceState({}, document.title, newUrl);
        }
    }
  
    // B. Login Error Handling
    const loginError = urlParams.get('login_error');
    if (loginError && loginModalOverlay) {
        openModal(loginModalOverlay);
        const errorBox = document.querySelector(".login-error-box");
        const errorText = document.querySelector(".login-error-text");
        const modalBody = loginModalOverlay.querySelector(".login-modal");
        const userInput = document.getElementById("username");
        const passInput = document.getElementById("password");
  
        const previousUser = urlParams.get('u');
        if (previousUser && userInput) userInput.value = decodeURIComponent(previousUser);
  
        if (errorBox && errorText) {
            errorBox.style.display = "flex";
            if (loginError === 'password') {
                errorText.textContent = "Incorrect password. Please try again.";
                if(passInput) passInput.focus();
            } else if (loginError === 'user') {
                errorText.textContent = "We couldn't find an account with that username.";
                if(userInput) {
                    userInput.classList.add("input-error");
                    userInput.focus();
                }
            } else if (loginError === 'no_users') {
                errorText.textContent = "No accounts exist. Please sign up first.";
            }
        }
        if (modalBody) {
            modalBody.classList.add("shake-animation");
            setTimeout(() => modalBody.classList.remove("shake-animation"), 500);
        }
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
    }
  
    // ============================================================
    // 5. SIGNUP ERROR HANDLING (PHP Feedback)
    // ============================================================
    const signupError = urlParams.get('signup_error');
    
    if (signupError && signupModalOverlay) {
        openModal(signupModalOverlay);
        
        const signupErrorBox = document.getElementById("signup-error-box");
        const signupErrorText = signupErrorBox ? signupErrorBox.querySelector(".signup-error-text") : null;
        
        if (signupErrorBox && signupErrorText) {
            signupErrorBox.style.display = "flex";
            
            switch(signupError) {
                case 'empty':
                    signupErrorText.textContent = "Please fill in all fields.";
                    break;
                case 'mismatch':
                    signupErrorText.textContent = "Passwords do not match.";
                    break;
                case 'weak_pass':
                    signupErrorText.textContent = "Password must be at least 6 characters.";
                    break;
                case 'common_pass':
                    signupErrorText.textContent = "Password is too common. Choose a stronger one.";
                    break;
                case 'pass_has_user':
                    signupErrorText.textContent = "Password cannot contain your username.";
                    break;
                case 'invalid_email':
                    signupErrorText.textContent = "Please enter a valid email address.";
                    break;
                case 'not_gmail':
                    signupErrorText.textContent = "Registration is limited to @gmail.com addresses only.";
                    break;
                case 'exists':
                    signupErrorText.textContent = "Username or Email already exists.";
                    break;
                default:
                    signupErrorText.textContent = "An error occurred. Please try again.";
            }
        }
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
    }
  
    // ============================================================
    // 6. CLIENT-SIDE VALIDATION (Instant Feedback)
    // ============================================================
    const signupForm = document.getElementById("signup-form") || document.querySelector(".signup-modal .login-form");
    
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            const user = document.getElementById("signup-username").value.trim();
            const email = document.getElementById("signup-email").value.trim();
            const pass = document.getElementById("signup-password").value;
            const confirm = document.getElementById("signup-password-confirm").value;
            
            const signupErrorBox = document.getElementById("signup-error-box");
            const signupErrorText = signupErrorBox ? signupErrorBox.querySelector(".signup-error-text") : null;
  
            let error = "";
  
            // Simple Client Validation
            if (!user || !email || !pass || !confirm) {
                error = "All fields are required.";
            } else if (pass !== confirm) {
                error = "Passwords do not match.";
            } else if (pass.length < 6) {
                error = "Password is too short (min 6 chars).";
            } else if (pass.toLowerCase() === "password" || pass === "123456") {
                error = "Password is too easy to guess.";
            } else if (user.length > 0 && pass.includes(user)) {
                error = "Password cannot contain your username.";
            } else if (!email.toLowerCase().endsWith("@gmail.com")) {
                error = "Please use a @gmail.com address.";
            }
  
            if (error && signupErrorBox && signupErrorText) {
                e.preventDefault(); // Stop PHP submission
                signupErrorBox.style.display = "flex";
                signupErrorText.textContent = error;
                
                const modal = signupModalOverlay.querySelector(".login-modal");
                if (modal) {
                    modal.classList.add("shake-animation");
                    setTimeout(() => modal.classList.remove("shake-animation"), 500);
                }
            }
        });
    }
});