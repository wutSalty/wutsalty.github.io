function loadContent() {
    var contentDiv = this.document.getElementById("app");
    var contentID = location.hash.substring(1);
    contentDiv.innerHTML = contentID;
}

if (!location.hash){
    location.hash = "#home";
}

loadContent();

window.addEventListener("hashchange", loadContent)