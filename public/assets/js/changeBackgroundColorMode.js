// toggle color modes
// window.onload = () => { 
const toggleBgColor = document.querySelector('#toggle-bgColor');

const storedTheme = localStorage.getItem('theme');

const setTheme = (theme) => {
document.documentElement.setAttribute('data-bs-theme', theme);
localStorage.setItem('theme', theme);
}


    const themeChanger = () => {
        if (toggleBgColor.checked) {
            setTheme('dark');
            document.documentElement.style.setProperty('--main-color', 'black');
          } else {
            setTheme('light');
            document.documentElement.style.setProperty('--main-color', 'white');
          }
    }

    toggleBgColor.addEventListener('change', themeChanger)
  

if (storedTheme) {
document.documentElement.setAttribute('data-bs-theme', storedTheme);
toggleBgColor.checked = storedTheme === 'dark';
}
// }

themeChanger()
