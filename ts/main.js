"use strict";
const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");
const navtext = document.querySelectorAll(".nav-link");
const navbar = document.querySelectorAll(".navbar");
const icon = document.querySelectorAll("i");
// Altera o tema
function changeTheme(event) {
    if (event.matches) {
        themeDark();
    }
    else {
        themeLight();
    }
}
;
// Escuta a mudança de tema no sistema
prefersColorScheme.addListener(changeTheme);
// Altera o tema conforme o tema do usuário
changeTheme(prefersColorScheme);
function themeLight() {
    navbar[0].classList.add("bg-light");
    icon[0].style.color = "Black";
    icon[1].style.color = "Black";
    navtext.forEach(e => {
        e.classList.add("text-dark");
    });
}
function themeDark() {
    navbar[0].classList.add("bg-dark");
    icon[0].style.color = "White";
    icon[1].style.color = "White";
    navtext.forEach(e => {
        e.classList.add("text-light");
    });
}
function addImage(array) {
    var carouselImage = document.querySelectorAll("img");
    for (let i = 0; i < 3; i++) {
        carouselImage[i].src = array[i].src;
    }
    addInfo(array);
}
function addInfo(array) {
    const localName = document.querySelectorAll("h1");
    for (let i = 0; i < 3; i++) {
        localName[i].classList.add("text-dark");
        localName[i].textContent = array[i].city;
    }
}
