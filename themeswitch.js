const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Function to toggle between light and dark mode
function toggleTheme() {
  const lightThemeLink = document.getElementById('lighttheme');
  const darkThemeLink = document.getElementById('darktheme');

  if (prefersDarkMode) {
    lightThemeLink.disabled = true; // Disable the light theme
    darkThemeLink.disabled = false; // Enable the dark theme
  } else {
    lightThemeLink.disabled = false; // Enable the light theme
    darkThemeLink.disabled = true; // Disable the dark theme
  }
}

// Call the toggleTheme function to set the initial theme
toggleTheme();

// Listen for changes in the user's color scheme preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', toggleTheme);