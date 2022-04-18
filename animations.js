const arrows = document.querySelectorAll(".arrow");

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






