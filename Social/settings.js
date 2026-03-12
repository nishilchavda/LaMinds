document.addEventListener('DOMContentLoaded', () => {
    
    // Select the theme cards
    const themeCards = {
        light: document.getElementById('theme-light'),
        dark: document.getElementById('theme-dark'),
        system: document.getElementById('theme-system')
    };

    // Initialize Theme on Page Load
    function initializeTheme() {
        // Read preference from localStorage, default to 'system'
        const currentTheme = localStorage.getItem('theme') || 'system';
        applyTheme(currentTheme);
    }

    // Apply the Theme Logic
    function applyTheme(theme) {
        const htmlElement = document.documentElement; // This targets the <html> tag

        // 1. Reset active states on all UI cards
        Object.values(themeCards).forEach(card => {
            card.classList.remove('border-blue-500', 'bg-blue-50', 'dark:border-blue-400', 'dark:bg-blue-900/20');
            card.classList.add('border-gray-200', 'dark:border-gray-600');
        });

        // 2. Highlight the newly selected card
        const activeCard = themeCards[theme];
        if (activeCard) {
            activeCard.classList.remove('border-gray-200', 'dark:border-gray-600');
            activeCard.classList.add('border-blue-500', 'bg-blue-50', 'dark:border-blue-400', 'dark:bg-blue-900/20');
        }

        // 3. Actually change the theme
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else if (theme === 'light') {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else if (theme === 'system') {
            // Check the operating system's preference
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                htmlElement.classList.add('dark');
            } else {
                htmlElement.classList.remove('dark');
            }
            localStorage.setItem('theme', 'system');
        }
    }

    // Event Listeners for clicks
    themeCards.light.addEventListener('click', () => applyTheme('light'));
    themeCards.dark.addEventListener('click', () => applyTheme('dark'));
    themeCards.system.addEventListener('click', () => applyTheme('system'));

    // Listen for OS-level theme changes (if user has 'system' selected and changes their Mac/Windows settings)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem('theme') === 'system') {
            applyTheme('system');
        }
    });

    // Run on startup
    initializeTheme();
});