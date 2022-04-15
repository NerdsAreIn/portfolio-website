import {mobileWidth} from "./mobile.js";

const backButton = document.getElementById("back-arrow");
const forwardButton = document.getElementById("forward-arrow");
const slidesReel = document.getElementById("slides-reel");
const circles = Array.from(document.getElementsByClassName("circle"));
const pauseButton = document.getElementById("pause");
const playButton = document.getElementById("start");
const slides = [...document.getElementsByClassName("segment")];
const image1 = slides[0];
const controlButtons = document.querySelectorAll("#controls-inner button");
let reelDeclarationBlock = window.getComputedStyle(slidesReel);;
let leftValue;
let leftNumber; 
let imageDeclarationBlock = window.getComputedStyle(image1);
let imageWidth;
let slideshowAnimation;

mobileWidth.addEventListener("change", setSlidePositions);
window.addEventListener("load", setSlidePositions);

function setSlidePositions() {
    imageWidth = parseInt(imageDeclarationBlock.getPropertyValue("width"));
    for (let i = 0; i < slides.length; i++) {
        slides[i].setAttribute("data-position", -(imageWidth * i) + "px");    
    }
    getSlide();
}

function stopAnimation() {
    clearInterval(slideshowAnimation);
}

function getSlide() {
    let selectedCircle;
    circles.map(circle => {
        if (circle.className === "circle selected") {
            selectedCircle = circle;
        }
    });
    let circleNo = selectedCircle.getAttribute(["data-correspondingImg"]);
    let visibleSlide;
    slides.forEach(slide => {
        if (slide.id === circleNo) {             
            visibleSlide = slide;                     
        }        
    });    
    slidesReel.style.left = visibleSlide.dataset.position;
}

function findVisibleSlide() {
    leftValue = reelDeclarationBlock.getPropertyValue("left");
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].dataset.position === leftValue) {
            slides[i].classList.add("visible");
            return slides[i];
        }
        else slides[i].classList.remove("visible");
    }    
}

function selectCircle() {
    leftValue = reelDeclarationBlock.getPropertyValue("left");
    for (let i = 0; i < circles.length; i++) {
        if (leftValue === -(imageWidth * i) + "px") {
            circles[i].classList.add("selected");
        }
        else circles[i].classList.remove("selected");
    }          
}

function moveSlides() {
    let widthValue = reelDeclarationBlock.getPropertyValue("width");
    let widthNumber = Number("-" + parseInt(widthValue));    
    leftValue = reelDeclarationBlock.getPropertyValue("left");
    leftNumber = parseInt(leftValue);
    imageWidth = parseInt(imageDeclarationBlock.getPropertyValue("width"));
    let finalNumber = widthNumber + imageWidth;// -4480 + 640 = -3840, which is the leftmost position
    if (finalNumber < leftNumber) {  
        leftNumber -= imageWidth;    
        slidesReel.style.left = leftNumber + "px";     
    }   
    else if (finalNumber === leftNumber) {
        slidesReel.style.left = "-0px";
    }
}

playButton.addEventListener("click", () => {
    let visibleSlide = findVisibleSlide();
    slidesReel.style.left = visibleSlide.dataset.position;
    setInterval(selectCircle, 10);
    setInterval(findVisibleSlide, 10);
    slideshowAnimation = setInterval(moveSlides, 3000);
    slideshowAnimation();
    //slidesReel.classList.add("animated");
    //slidesReel.classList.remove("paused");      
});

pauseButton.addEventListener("click", () => {
    //slidesReel.classList.add("paused");
    //slidesReel.classList.remove("animated");
    stopAnimation();    
});

backButton.addEventListener("click", () => {
    leftValue = reelDeclarationBlock.getPropertyValue("left");
    leftNumber = parseInt(leftValue);
    imageWidth = parseInt(imageDeclarationBlock.getPropertyValue("width"));
    if (leftNumber < -0) {  
        leftNumber += imageWidth;  
    }
    slidesReel.style.left = leftNumber + "px";
    selectCircle();
    findVisibleSlide();
});

forwardButton.addEventListener("click", () => {   
    let widthValue = reelDeclarationBlock.getPropertyValue("width");
    let widthNumber = Number("-" + parseInt(widthValue));
    leftValue = reelDeclarationBlock.getPropertyValue("left");
    leftNumber = parseInt(leftValue);
    imageWidth = parseInt(imageDeclarationBlock.getPropertyValue("width"));
    let finalNumber = widthNumber + imageWidth;
    if (finalNumber < leftNumber) {  
        leftNumber -= imageWidth;        
    }
    slidesReel.style.left = leftNumber + "px"; 
    selectCircle();   
    findVisibleSlide();
});

controlButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        let clickedButton = e.target;
        let controlsInner = clickedButton.closest("#controls-inner");
        controlsInner.classList.toggle("clicked");          
        if (clickedButton.id == "pause") {
            controlsInner.classList.add("paused");
        }
        else controlsInner.classList.remove("paused");              
    });
});

circles.forEach(circle => {
    circle.addEventListener("click", (e) => {
        let circleNo = circle.getAttribute(["data-correspondingImg"]);
        circle.classList.add("selected");
        circles.map(circle => {
            if (circle !== e.target) {
                circle.classList.remove("selected");
            }
        });        
        let position;
        slides.forEach(slide => {
            if (slide.id === circleNo) {
                position = slide.dataset.position; 
                slide.classList.add("visible");                         
            }
            else slide.classList.remove("visible");
        });
        slidesReel.style.left = position;        
    });
});