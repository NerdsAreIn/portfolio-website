import headersImport from "./dropdown.js";

const arrows = document.querySelectorAll(".arrow");
const nav = document.querySelector("nav");

arrows.forEach(arrow => {
    arrow.addEventListener("animationend", () => {
        setTimeout(() => {
            arrow.style.translate = "0px"; 
            arrow.style.animation = "none";
        }, 100);    
    });
});

arrows.forEach(arrow => {
    arrow.addEventListener("mouseenter", () => {
        arrow.style.animation = "arrow-pulse 0.6s linear 0s 1 normal forwards";
        });
});

setTimeout(() => {
    nav.classList.add("visible");
    nav.lastElementChild.classList.add("visible");
    headersImport.forEach(header => {
        header.classList.add("visible");       
    });    
}, 3200);