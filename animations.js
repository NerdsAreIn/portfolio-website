import headersImport from "./dropdown.js";

const arrows = document.querySelectorAll(".arrow");
const nav = document.querySelector("nav");
const links = document.querySelectorAll(".header a");

arrows.forEach(arrow => {
    arrow.addEventListener("animationend", () => {
        setTimeout(() => {
            arrow.style.translate = "0px"; 
            arrow.style.animation = "none";
        }, 100);    
    });
});

links.forEach(link => {
    setTimeout(() => {
        link.classList.add("visible");        
    }, 100);    
});

arrows.forEach(arrow => {
    arrow.addEventListener("mouseenter", () => {
        arrow.style.animation = "arrow-pulse 0.6s linear 0s 1 normal forwards";
        });
});

setTimeout(() => {
    nav.classList.add("visible");
    headersImport.forEach(header => {
        header.classList.add("visible");
        //header.children[0].children[0].classList.add("visible");
        header.children[0].children[0].style.opacity = "1";
        // header.children[0].children[0].style.animation = "none";
    });
}, 3000);