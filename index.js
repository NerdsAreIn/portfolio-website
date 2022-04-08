//import "./animations.js";
import "./dropdown.js";
import "./mobile.js";
import "./portfolio.js";

const controlsContainer = document.querySelector("section#controls-container");

setTimeout(() => {
    controlsContainer.style.animation = "none";
    controlsContainer.style.opacity = "1";
    controlsContainer.style.transform = "scale(1)";
}, 5000);



