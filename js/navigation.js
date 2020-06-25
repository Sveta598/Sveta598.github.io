var nav = document.querySelector(".navigation");
nav.addEventListener("mouseenter", showNav, false);
nav.addEventListener("mouseleave", hideNav, false);
function showNav() {
    this.children[0].style.display = "block";
    this.children[0].style.background = "#A2DD21";
    this.children[0].style.marginTop = "5%";
    this.children[0].style.marginBottom = "0";
}
function hideNav() {
    this.children[0].style.display = "none";
}

