const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
const smallNav = document.querySelector("._smallNav");

hamburger.addEventListener("click", () => {
  smallNav.classList.toggle("open");
   
  nav.classList.toggle("fixed");

});