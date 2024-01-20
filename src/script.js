// const { Container } = require("react-bootstrap");

// let switchTheme = document.querySelector("#switch-wrapper");
// let switchToggle = document.querySelector("#switch-toggle");
// let switchLayerColor = document.querySelector("#layer1");
// let switchBackgroundColor = document.querySelector("body")
// let buttonBorderRemove = document.querySelectorAll("#app-store, #google-play")
// let introImageReplace = document.querySelector("#hands")
// let switchLogoColor = document.querySelectorAll(".logo-container, .logo-container span")

// switchTheme.addEventListener("click", switchPosition);
// function switchPosition () {
//     switchToggle.classList.toggle("switch-off");
//     switchLayerColor.classList.toggle("layer-theme");
//     switchBackgroundColor.classList.toggle("background-theme");
//         for (let element of buttonBorderRemove) {
//         element.classList.toggle("border-remove");
//         }
//     introImageReplace.classList.toggle("avatar");
//         for (let element of switchLogoColor) {
//         element.classList.toggle("logo-color");
//         }
// }

let emailAddress = document.getElementById('email-field'),
  subButton = document.getElementById('subscribe-button');

function validateEmail(emailAddress) {
    var ex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return ex.test(emailAddress);
}

emailAddress.addEventListener('keydown', function() {
  var emailAddress = this.value;
  
  if(validateEmail(emailAddress)) {
    subButton.classList.add('is-active');
  }
});

subButton.addEventListener('click', function(e){
  e.preventDefault();
  this.classList.add('is-done','is-active');
  
  setTimeout(function(){ 
    subButton.innerHTML = "Thanks! Check Your Email."
  }, 500);
});


const observerOne = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      return;
    }

    entry.target.classList.remove('reveal');
  });
});

// Get multiple elements instead of a single one using "querySelectorAll"
const revealOne = document.querySelectorAll('.observer-1');

// Loop over the elements and add each one to the observer
revealOne.forEach((element) => observerOne.observe(element));


const observerSecond = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-second');
      return;
    }

    entry.target.classList.remove('reveal-second');
  });
});

// Get multiple elements instead of a single one using "querySelectorAll"
const revealSecond = document.querySelectorAll(".observer-2");

// Loop over the elements and add each one to the observer
revealSecond.forEach((element) => observerSecond.observe(element));

let primaryNav = document.querySelector("#primary-navigation");
let navToggle = document.querySelector(".mobile-nav-toggle");
let backgroundBlur = document.querySelector(".background-layer");
let backgroundColor = document.querySelector(".background-layer-on");

navToggle.addEventListener("click", togglePosition);
function togglePosition () {
  let visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    document.body.style.overflowY = "hidden";
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    setTimeout(function(){ backgroundBlur.classList.add('background-layer-on') }, 100);
    setTimeout(function(){ document.querySelector(".background-layer-on").style.opacity = '1'; }, 300);
  }
  else if (visibility === "true") {
    document.body.style.overflowY = "unset";
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    setTimeout(function(){ backgroundBlur.classList.remove('background-layer-on') }, 2400);
    setTimeout(function(){ document.querySelector(".background-layer-on").style.opacity = '0'; }, 400);
  }
};



document.addEventListener('mouseup', function(event) {
  if (event.target.parentNod != primaryNav && event.target != navToggle) {
    document.body.style.overflowY = "unset";
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    setTimeout(function(){ backgroundBlur.classList.remove('background-layer-on') }, 500); 
    setTimeout(function(){ backgroundBlur.style.cssText = 'opacity: unset'; }, 400);
  }
});


// backgroundBlur.addEventListener('click', function(event) {
//   document.body.style.overflowY = "unset";
//   primaryNav.setAttribute("data-visible", false);
//   navToggle.setAttribute("aria-expanded", false);
//   setTimeout(function(){ backgroundBlur.classList.remove('background-layer-on') }, 2400);
//   setTimeout(function(){ document.querySelector(".background-layer-on").style.opacity = '0'; }, 400);
//   console.log(event.target);
// });

// backgroundBlur.addEventListener("click", closeNav);
// function closeNav () {
//   document.body.style.overflowY = "unset";
//   primaryNav.setAttribute("data-visible", false);
//   navToggle.setAttribute("aria-expanded", false);
//   setTimeout(function(){ backgroundBlur.classList.remove('background-layer-on') }, 2400);
//   setTimeout(function(){ document.querySelector(".background-layer-on").style.opacity = '0'; }, 400);
// }

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

  
