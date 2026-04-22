/**
 * SMART INPUT VALIDATOR
 * Handles validation and formatting for filter inputs.
 */

const InputValidator = {
    // --- Configuration Rules ---
    rules: {
        year: {
            // Only allows 4 digits, between 1800 and 2100
            test: (val) => /^\d{4}$/.test(val) && parseInt(val) >= 1800 && parseInt(val) <= 2100,
            format: (val) => val.trim(), 
            error: "Enter valid year (YYYY)"
        },
        rated: {
            // Alphanumeric + standard rating symbols (+, -), max 8 chars
            test: (val) => /^[A-Za-z0-9\-\+]+$/.test(val) && val.length <= 8,
            format: (val) => val.trim().toUpperCase(), // Auto-uppercase (e.g. "pg-13" -> "PG-13")
            error: "Invalid rating format"
        },
        text: { 
            // Generic text (Genre, Language, Audio, Country)
            // No numbers, no symbols (except space, hyphen, period)
            test: (val) => /^[a-zA-Z\s\-\.]+$/.test(val) && val.length >= 2 && val.length <= 30,
            format: (val) => {
                // Title Case (e.g. "sci-fi" -> "Sci-Fi")
                return val.trim().toLowerCase().replace(/(?:^|\s|-)\S/g, c => c.toUpperCase());
            },
            error: "Letters only (2-30 chars)"
        },
        custom: {
            // Custom allows numbers (e.g. "Stranger Things 4") but blocks purely special char spam
            test: (val) => /^[a-zA-Z0-9\s\-\.\']+$/.test(val) && val.length >= 2 && val.length <= 50,
            format: (val) => val.trim(),
            error: "Invalid chars or length"
        }
    },

    /**
     * Main Validate Function
     * @param {string} group - The data-group name (year, genre, etc.)
     * @param {string} value - The raw input value
     * @returns {object} { isValid: boolean, value: string, message: string }
     */
    validate(group, value) {
        if (!value) return { isValid: false, message: "Required" };

        let ruleType = 'custom'; // Default fallback

        // Map data-groups to rules
        if (group === 'year') ruleType = 'year';
        else if (group === 'rated') ruleType = 'rated';
        else if (['genre', 'country', 'lang', 'audio', 'type'].includes(group)) ruleType = 'text';

        const rule = this.rules[ruleType];

        // 1. Check Regex & Logic
        if (!rule.test(value)) {
            return { isValid: false, message: rule.error };
        }

        // 2. Return Formatted Value
        return { 
            isValid: true, 
            value: rule.format(value),
            message: ""
        };
    }
};

// Expose globally
window.InputValidator = InputValidator;