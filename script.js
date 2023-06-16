
/*MENU*/

function setup() {
  console.log("dom carico");
  let menuButton = document.querySelector('#menu-button');
  let menu = document.querySelector('#menu');


  menuButton.onclick = function () {
    menu.classList.toggle('open');
    menuButton.classList.toggle('is-active')
  }
}
document.addEventListener('DOMContentLoaded', setup)



/*PRE-LOADER*/
const loading = document.querySelector("#loading");
let section = document.querySelector(".section");

setTimeout(function () {
  console.log("loaded!");
  loading.style.display = "none";
  section.style.display = "block";
  section = document.querySelector(".section-2");
  section.style.display = "block";
}
  ,2000);


/* GSAP REVEAL FER PROFILE */
gsap.registerPlugin("ScrollTrigger");

let image = document.querySelector(".fer");
let bio = document.querySelector(".bio");

// Set the initial position of the image to be outside the viewport on the left side
gsap.set(image, { x: "-100vw" });
gsap.set(bio, { x: "100vw" });

// Create a timeline animation
const tl = gsap.timeline();
const tl2 = gsap.timeline();

// Add the animation to reveal the image
tl.to(image, { x: "0vw", duration: 1, ease: "power2.out" });
tl2.to(bio, { x: "0vw", duration: 1, ease: "power2.out" });

// Create a ScrollTrigger to trigger the animation when the div is in view
ScrollTrigger.create({
  trigger: ".section-1",
  start: "top 350", // Adjust the position as needed
  onEnter: () => {
    // Start the timeline animation
    tl.play();
    tl2.play();

  },
  onLeaveBack: () => {
    // Reverse the timeline animation when scrolling back
    tl.reverse();
    tl2.reverse();
  }
});


