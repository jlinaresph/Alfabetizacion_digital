
document.addEventListener('DOMContentLoaded', (event) => {
    const themeSwitchButton = document.getElementById('theme-switch');
    
    const applyTheme = (theme) => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    };

    const getCurrentTheme = () => localStorage.getItem('theme') || 'light';
    
    if (themeSwitchButton) {
        themeSwitchButton.addEventListener('click', () => {
            const currentTheme = getCurrentTheme();
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
        });
    }

    applyTheme(getCurrentTheme());
});
