//Theme manager
let theme = "empty";
const themeButton = document.getElementById("theme-toggle-btn");

const firstLoad = () => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches){
        theme = "dark";
    } 
    else {
        theme = "light";
    }
    
    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", theme);
    }
    else {
        theme = localStorage.getItem("theme");
    }
}

const setTheme = () => {
    if (localStorage.getItem("theme") == "light"){
        themeElement.setAttribute("data-bs-theme", "light");
        themeButton.innerHTML = "🌙 Dark";
        themeColor.content = "#FFFFFF";
    } else {
        themeElement.setAttribute("data-bs-theme", "dark");
        themeButton.innerHTML = "☀ Light";
        themeColor.content = "#212529";
    };
}

firstLoad();
setTheme();

const toggleTheme = () => {
    if (theme == "light") {
        theme = "dark";
    } else {
        theme = "light";
    }
    localStorage.setItem("theme", theme);
    setTheme();
}

//Time ticker
const timeText = document.getElementById("current-time");
const replaceTime = (element) => {
    options = {
        weekday: "short", day: "numeric", month: "short", hour: "numeric", minute: "numeric", second: "numeric", timeZone: "Australia/Sydney", timeZoneName: 'short'
    }
    const finalDate = new Intl.DateTimeFormat('default', options).format(new Date());
    element.innerHTML = finalDate;
}
setInterval(replaceTime, 1000, timeText);

//Tooltip intialise
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))