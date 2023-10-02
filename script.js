
/*MENU*/

function setup() {
  console.log("dom carico");
  let menuButton = document.querySelector('#menu-button');
  let menu = document.querySelector('#menu');


  menuButton.onclick = function () {
    menu.classList.toggle('open');
    menuButton.classList.toggle('is-active');
  }
}
document.addEventListener('DOMContentLoaded', setup)



/*PRE-LOADER*/
const loading = document.querySelector("#loading");
let hamburger = document.querySelector("#menu-button")
let sectionO = document.querySelector(".section-1");
let sectionT = document.querySelector(".section-2");
let footer = document.querySelector(".footer");


setTimeout(function () {
  loading.style.display = "none";
  hamburger.style.display = "block";
  sectionO.style.display = "block";
  sectionT.style.display = "block";
  footer.style.display = "block";
}
  ,2000);