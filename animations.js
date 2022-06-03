import headersImport from "./dropdown.js";
import {mobileWidth} from "./mobile.js";

const smallerWidth = window.matchMedia("(max-width: 1000px)");
// const smallerHeight = window.matchMedia("(max-height: 450px)");
const arrows = document.querySelectorAll("button.arrow");
const nav = document.querySelector("nav");
const introBars = Array.from(document.getElementsByClassName("intro-text"));

let time;

if (mobileWidth.matches) {
    time = 300;
    // console.log("mobile");
}
else if (smallerWidth.matches) {
    time = 1200;
    // console.log("smaller width");
}
else {
    // console.log("regular");
    time = 1700;
}

// landing page animation:
for (let i = 0; i < introBars.length; i++) {
    setTimeout(() => {
        introBars[i].classList.add("visible");
    }, time);
    time += 800;
}

// ensures that the dropdown animation plays only after the homepage loads,
// instead of after page resizing: 
setTimeout(() => {
    nav.classList.add("visible");
    // bottom border:
    nav.lastElementChild.classList.add("visible");
    headersImport.forEach(header => {
        header.classList.add("visible");       
    });    
}, 3200);

// removes falling animation from arrow buttons after
// page loads:
arrows.forEach(arrow => {
    arrow.addEventListener("animationend", () => {
        setTimeout(() => {
            arrow.style.translate = "0px"; 
            arrow.style.animation = "none";
        }, 100);    
    });
});

// adds arrow jiggling animation upon hovering:
arrows.forEach(arrow => {
    arrow.addEventListener("mouseenter", () => {
        arrow.style.animation = "arrow-pulse 0.6s linear 0s 1 normal forwards";
        });
});