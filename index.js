const btn = document.querySelector("button"),
    html = document.documentElement,
    moon = `<ion-icon class="toggle-btn" name="moon-outline"></ion-icon>`,
    sun = `<ion-icon class="toggle-btn" name="sunny-outline"></ion-icon>`;

const darkTheme = {
    main: "#ffa",
    secondary: "#0a0a0a",
}

const lightTheme = {
    main: "#0a0a0a",
    secondary: "#ffa",
}

function isDark() {
    return getComputedStyle(html).getPropertyValue("--main-clr") === lightTheme.main &&
           getComputedStyle(html).getPropertyValue("--secondary-clr") === lightTheme.secondary;
}

function changeTheme(themeObject, icon) {
    html.style.setProperty("--main-clr", themeObject.main);
    html.style.setProperty("--secondary-clr", themeObject.secondary);
    btn.innerHTML = icon;
}

btn.addEventListener('click', () => {
    if (isDark()) changeTheme(darkTheme, sun);
    else changeTheme(lightTheme, moon);
});