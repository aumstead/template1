// Mobile nav JS
const hamburger = document.getElementById("hamburger-menu");
const xIcon = document.getElementById("x-icon-id");
const drawer = document.getElementById("drawer");

hamburger.addEventListener("click", () => {
  drawer.classList.add("show-mobile-drawer");
});
xIcon.addEventListener("click", () => {
  drawer.classList.remove("show-mobile-drawer");
});
// window.addEventListener("resize", handleWindowResize);

// function handleWindowResize() {
//   let width = window.innerWidth;
//   if (width > 990) {
//     sideNavEl.classList.remove("show-mobile-nav");
//   }
// }

// two-col-panel slideshow
let slides = document.getElementsByClassName("slide");
let slidesIdx = 0;
slideshow();

function slideshow() {
  if (slidesIdx >= slides.length) {
    slidesIdx = 0;
  }
  slides[slidesIdx].classList.remove("hide-slide");
  slides[slidesIdx].classList.add("show-slide");
  setTimeout(hideSlide, 6000);

  function hideSlide() {
    slides[slidesIdx].classList.remove("show-slide");
    slides[slidesIdx].classList.add("hide-slide");
    slidesIdx++;
    slideshow();
  }
}
