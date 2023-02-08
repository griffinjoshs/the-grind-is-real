// toggle color modes
// window.onload = () => { 
const toggleBgColor = document.querySelector('#toggle-bgColor');

const storedTheme = localStorage.getItem('theme');

const setTheme = (theme) => {
document.documentElement.setAttribute('data-bs-theme', theme);
localStorage.setItem('theme', theme);
}

toggleBgColor.addEventListener('change', () => {
if (toggleBgColor.checked) {
setTheme('dark');
} else {
setTheme('light');
}
});

if (storedTheme) {
document.documentElement.setAttribute('data-bs-theme', storedTheme);
toggleBgColor.checked = storedTheme === 'dark';
}
// }