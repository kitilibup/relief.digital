let switchTheme = document.querySelector("#switch-wrapper");
let switchToggle = document.querySelector("#switch-toggle");
let switchLayerColor = document.querySelector("#layer1");
let switchBackgroundColor = document.querySelector("body")
let buttonBorderRemove = document.querySelectorAll("#app-store, #google-play")
let introImageReplace = document.querySelector("#hands")
let switchLogoColor = document.querySelectorAll(".logo-container, .logo-container span")

switchTheme.addEventListener("click", switchPosition);
function switchPosition () {
    switchToggle.classList.toggle("switch-off");
    switchLayerColor.classList.toggle("layer-theme");
    switchBackgroundColor.classList.toggle("background-theme");
        for (let element of buttonBorderRemove) {
        element.classList.toggle("border-remove");
        }
    introImageReplace.classList.toggle("avatar");
        for (let element of switchLogoColor) {
        element.classList.toggle("logo-color");
        }
}