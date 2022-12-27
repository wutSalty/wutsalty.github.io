//function loadContent() {
    //var contentDiv = this.document.getElementById("app");
    //var contentID = location.hash.substring(1);
    //contentDiv.innerHTML = contentID;
//}

//if (!location.hash){
    //location.hash = "#home";
//}

//loadContent();

//window.addEventListener("hashchange", loadContent)

//Theme manager
var theme = "empty";
var themeElement = document.getElementById("the-body");
var themeButton = document.getElementById("theme-toggle-btn");
var themeColor = document.getElementById("safari-theme-color");

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches){
    var theme = "dark";
} 
else {
    var theme = "light";
}

if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", theme);
}
else {
    theme = localStorage.getItem("theme");
}

function setTheme() {
    if (localStorage.getItem("theme") == "light"){
        themeElement.setAttribute("data-bs-theme", "light");
        themeButton.innerHTML = "🌙 Dark";
        themeColor.content = "#FFFFFF";
    } else {
        themeElement.setAttribute("data-bs-theme", "dark");
        themeButton.innerHTML = "☀ Light";
        themeColor.content = "#212529";
    }
}

setTheme();

function toggleTheme() {
    if (theme == "light") {
        theme = "dark";
    }
    else {
        theme = "light";
    }
    localStorage.setItem("theme", theme);
    setTheme();
}

//Time ticker
const timeText = document.getElementById("current-time");

function replaceTime() {
    options = {
        weekday: "short", day: "numeric", month: "short", hour: "numeric", minute: "numeric", second: "numeric", timeZone: "Australia/Sydney", timeZoneName: 'short'
    }
    const finalDate = new Intl.DateTimeFormat('default', options).format(new Date());
    timeText.innerHTML = finalDate;
}

setInterval(replaceTime, 1000);

//Tooltip intialise
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))