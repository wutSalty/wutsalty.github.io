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

var theme = "empty";
var themeElement = document.getElementById("theme-sheet");
var themeButton = document.getElementById("theme-toggle-btn");
var themeColor = document.getElementById("theme-color");

var lightSheet = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
var darkSheet = "https://cdn.jsdelivr.net/npm/bootstrap-dark-5@1.1.3/dist/css/bootstrap-night.min.css";

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
        themeElement.href = lightSheet;
        themeButton.innerHTML = "🌙 Dark";
        themeColor.content = "#FFFFFF";
    } else {
        themeElement.href = darkSheet;
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