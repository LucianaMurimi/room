/*
// Text Animations
let h1 = ["Discover innovative ways to decorate", "We are available all across the globe",
        "Manufactured with the best materials"]
let p = ["We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."]
        
let textAnimations = document.querySelector(".text-animations");
let animation = gsap.timeline({repeat:-1});

let counter = 0; // to keep track of the slide image
let images = []; // an array of the images (url)
let time = 5000; // 5s to change to the next image

// Images list
images[0] = './images/desktop-image-hero-1.jpg';
images[1] = './images/desktop-image-hero-2.jpg';
images[2] = './images/desktop-image-hero-3.jpg';

//slideshow function
function slideShow() {
    document.slide.src = images[counter];
    document.getElementById("hero-msg").remove();
    createTextLayers();
    animateText();
    
    if(counter < images.length - 1) {
        counter++;
    } else {
        counter = 0;
    }
    setTimeout('slideShow()', time);
}

// window.onload = slideShow();

//=============================================================================


function createTextLayers() {
    for(let i=0; i<h1.length; i++){
        let div = document.createElement("div");

        let textHeader = document.createElement("h1");
        textHeader.innerHTML = h1[i];
        div.appendChild(textHeader);

        let textPara = document.createElement("p");
        textPara.innerHTML = p[i];
        div.appendChild(textPara);

        let button = document.createElement("button");
        button.innerHTML = (`
            <button>
                Shop now <img src = "./images/icon-arrow.svg" >
            </button>
        `);
        div.appendChild(button);

        textAnimations.appendChild(div);
    }
    
}



function animateText() {
    let layers = document.querySelectorAll(".text-animations div");
    // console.log(layers);
    layers.forEach((element) => {
        // animation.fromTo(element, {opacity:0, scale:0}, {scale:1, opacity:1, repeat:1, yoyo:true, yoyoEase:true, repeatDelay:2})
        animation.fromTo(element, {opacity:0}, {opacity:1, repeat:1, yoyo:true, yoyoEase:true, repeatDelay:4})
    }); 
    gsap.set(".text-animations", {visibility:"visible"});
    
}

//=============================================================================
*/
// RESPONSIVE NAV BAR
function openMenu(x) {
    x.classList.toggle("change");
    menu(x);
  }
  function menu(x){
    let navBar = document.getElementById("navbar-id");
    let navUL = document.getElementById("nav-ul-id");
    let navLI = document.querySelectorAll("li");

    console.log(navLI);
    
    if(x.classList.contains("change")) {
      navBar.classList.remove("navbar");

      navBar.classList.add("overlay-nav");
      navUL.classList.add("nav-ul-res");

      navLI[0].classList.add("nav-ul");
      for(let i=1; i<navLI.length; i++){
          navLI[i].classList.remove("nav-ul");
      }

    } else {
      navBar.classList.remove("overlay-nav");
      
      navBar.classList.add("navbar");
      navUL.classList.remove("nav-ul-res");

      navLI[0].classList.remove("nav-ul");
      for(let i=1; i<navLI.length; i++){
          navLI[i].classList.add("nav-ul");
      }
    }
  }


//=============================================================================
// TEXT ANIMATION
let text = document.querySelector(".text-animation");
let textContent = text.textContent 
console.log(textContent);
let splitText = textContent.split("");
console.log(splitText);
text.innerHTML = "";
for(let i=0; i<splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span"; 
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char]
    span.classList.add('fade');
    char++;

    if(char === splitText.length){
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}