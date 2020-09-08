let navigation = document.getElementsByClassName("navigation")[0];
let header = document.getElementsByClassName("header")[0];
function checkBackground() {
    let switchHeight = header.clientHeight;
    if (document.body.scrollTop > switchHeight || document.documentElement.scrollTop > switchHeight) {
        navigation.classList.add("navigation_bg_white");
    } else {
        navigation.classList.remove("navigation_bg_white");
    }
}
window.onscroll = function() {checkBackground()};

let navMenu = document.getElementsByClassName("navigation__nav-menu")[0];
let navBurger = document.getElementsByClassName("navigation__burger")[0];
function toggleMenu() {
    if (navMenu.classList.contains("navigation__nav-menu_disabled")) {
        navMenu.classList.remove("navigation__nav-menu_disabled");
    } else {
        navMenu.classList.add("navigation__nav-menu_disabled");
    }
}
navBurger.onclick = function() {toggleMenu()};

console.log("navigation.js completed");