const nav = document.querySelector("nav");
import headers from "./dropdown.js";
import {mobileWidth} from "./mobile.js";

window.onload = () => {      
    nav.classList.add("visible");
    headers.forEach(header => header.classList.add("visible"));
    console.log("classes added");    
};