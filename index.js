import "./animations.js";
import "./dropdown.js";
import "./mobile.js";
import "./portfolio.js";

const controlsContainer = document.querySelector("section#controls-container");

controlsContainer.addEventListener("animationend", e => {
    setTimeout(() => {
        controlsContainer.style.opacity = "1";
        controlsContainer.style.transform = "scale(1)";
        //controlsContainer.style.animation = "none";       
    }, 100);
}, false);



