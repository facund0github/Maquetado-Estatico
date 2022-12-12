"use strict";

window.addEventListener("scroll", function() {
    let skills = document.getElementById("skills");
    let posicionSkills = skills.getBoundingClientRect().top;
    let screenSize = window.innerHeight/3.5;

    if (posicionSkills < screenSize) {
        document.querySelector(".barra-progreso1").style.animation = "progreso1 2s forwards";
        document.querySelector(".barra-progreso2").style.animation = "progreso2 2s forwards";
        document.querySelector(".barra-progreso3").style.animation = "progreso3 2s forwards";
        document.querySelector(".barra-progreso4").style.animation = "progreso4 2s forwards";
        
    }
});

const btnMenu = document.querySelector(".btn-menu");
const menuMobile = document.querySelector(".header-menu");
const teclaMenu1 = document.querySelector('.tecla-menu1');
const teclaMenu2 = document.querySelector('.tecla-menu2');
const teclaMenu3 = document.querySelector('.tecla-menu3');
const teclaMenu4 = document.querySelector('.tecla-menu4');
const teclaMenu5 = document.querySelector('.tecla-menu5');
const teclaMenu6 = document.querySelector('.tecla-menu6');


btnMenu.addEventListener("click", () => {
   if (menuMobile.style.display != 'flex') {
    menuMobile.style.display = 'flex';
   }else {
    menuMobile.style.display = 'none';
   }
});

teclaMenu1.addEventListener("click", () => {
    menuMobile.style.display = 'none';
});
teclaMenu2.addEventListener("click", () => {
    menuMobile.style.display = 'none';
});
teclaMenu3.addEventListener("click", () => {
    menuMobile.style.display = 'none';
});
teclaMenu4.addEventListener("click", () => {
    menuMobile.style.display = 'none';
});
teclaMenu5.addEventListener("click", () => {
    menuMobile.style.display = 'none';
});
teclaMenu6.addEventListener("click", () => {
    menuMobile.style.display = 'none';
});
