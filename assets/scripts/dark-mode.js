function toggleDarkMode() {
    let isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('darkMode') == 'enabled') {
        document.body.classList.add('dark-mode');
    }
});