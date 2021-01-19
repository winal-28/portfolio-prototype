const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", show);

function show() {
  navLinks.classList.toggle("nav-links-show");
}
