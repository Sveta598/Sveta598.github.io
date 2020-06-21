var nav = document.querySelector(".navigation");
nav.addEventListener("mouseenter", showNav, false);
nav.addEventListener("mouseleave", hideNav, false);
function showNav() {
    this.children[0].style.display = "block";
    this.children[0].style.background = "#A2DD21";
    this.children[0].style.marginTop = "0";
    this.children[0].style.marginBottom = "0";
}
function hideNav() {
    this.children[0].style.display = "none";
}

var social = document.querySelector(".footer__icons");
social.addEventListener("mouseenter", showIcons, false);
social.addEventListener("mouseleave", hideIcons, false);
function showIcons() {
    this.children[0].style.display = "flex";
    this.children[0].style.marginTop = "0";
    this.children[0].style.marginBottom = "0";
    this.children[0].style.marginLeft = "5%";
}
function hideIcons() {
    this.children[0].style.display = "none";
}