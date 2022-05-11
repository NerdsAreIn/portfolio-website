let headers;
export default headers = document.querySelectorAll(".header");
const links = document.querySelectorAll(".header a");
const menus = Array.from(document.getElementsByClassName("menuDiv"));
const underlines = document.querySelectorAll(".underline");

// mouseover also applies to child elements

function respondToEvent(e) {
    let selectedLink;    
    let selectedLinkParent;
    if (e.target.matches(".header a")) {
        selectedLink = e.target;        
        selectedLink.classList.add("hovered"); 
        selectedLinkParent = selectedLink.closest(".header");
        selectedLinkParent.classList.add("active");        
        const selectedUnderline = selectedLink.nextElementSibling;
        selectedUnderline.classList.add("hovered");
        underlines.forEach(underline => {
            if (underline !== selectedUnderline) {
                underline.classList.remove("hovered");
                underline.previousElementSibling.classList.remove("hovered");
            }
        });        
    }
    let currentMenu;
    if (selectedLink) {
        if (selectedLink.closest(".header").nextElementSibling.matches(".menuDiv")) {
            currentMenu = selectedLink.closest(".header").nextElementSibling;  
            currentMenu.classList.add("active");      
        } 
        menus.forEach(menu => {
            if (menu === currentMenu) {
                const listItems = currentMenu.querySelectorAll("a");        
                const dropdownHeight = listItems.length * 50;
                currentMenu.style.height = dropdownHeight + "px";    
                listItems.forEach(item => { 
                    item.addEventListener("click", e => {   
                        //e.preventDefault();    
                        item.classList.add("active");
                        listItems.forEach(item => {
                            if (item !== e.target) item.classList.remove("active");
                        });
                    });   
                    item.addEventListener("mouseenter", e => {
                        item.classList.add("active");
                    });
                    item.addEventListener("mouseleave", e => {
                         item.classList.remove("active");
                    });
                });    
            }
            else {
                menu.style.height = 0;    
                menu.classList.remove("active");
                const inactiveListItems = menu.querySelectorAll("a");
                inactiveListItems.forEach(item => item.classList.remove("active"));                           
            }
        });           
    }    
    if (e.target.closest(".menuDiv.active") === null && e.target.closest(".header.active")
     === null) {
        if (document.querySelector(".menuDiv.active")) {
            currentMenu = document.querySelector(".menuDiv.active");
            currentMenu.style.height = 0;
        }
        headers.forEach(header => {
            header.classList.remove("active");
        });
        links.forEach(link => {
            link.className = "";
            link.nextElementSibling.classList.remove("hovered");
        });
     }
}

document.addEventListener("mouseover", respondToEvent, true);
document.addEventListener("click", respondToEvent, true);
