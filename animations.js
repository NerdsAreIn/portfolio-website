import headersImport from "./dropdown.js";

const arrows = document.querySelectorAll(".arrow");
const nav = document.querySelector("nav");
const introBars = Array.from(document.getElementsByClassName("intro-text"));
console.log({introBars});


let time = 1800;
// --TODO: make time shorter for full page intro
for (let i = 0; i < introBars.length; i++) {
    setTimeout(() => {
        introBars[i].classList.add("visible");
    }, time);
    time += 1100;
}

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
    // bottom border:
    nav.lastElementChild.classList.add("visible");
    headersImport.forEach(header => {
        header.classList.add("visible");       
    });    
}, 3200);