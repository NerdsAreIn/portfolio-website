import headers from "./dropdown.js";
const nav = document.querySelector("nav");
const links = document.querySelectorAll(".header a");

const path = window.location.pathname;
const page = path.split("/").pop();
console.log(path.split("/"));
console.log({path});
console.log({page});

import {mobileWidth} from "./mobile.js";

window.addEventListener("load", loadPage, {once: true});

function loadPage() {
    if (document.title === "Home") {
        nav.style.opacity = "1";
        nav.style.height = "90px";
        headers.forEach(header => {
            header.style.height = "90px";
            header.style.opacity = "1";
        });
        links.forEach(link => {
            link.style.opacity = "1";
        });
        console.log("classes added");  
       // window.removeEventListener("load", loadPage);
    }   
}