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
        themeColor.content = "#222222";
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

function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}

function replaceTime() {
    timeText.innerHTML = convertTZ(new Date(), "Australia/Sydney");
}

setInterval(replaceTime, 1000);