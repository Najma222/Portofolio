// Function to toggle between light and dark mode
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerText = "🌞";  // Change to Light mode
    } else {
        themeToggle.innerText = "🌙";  // Change to Dark mode
    }
}
