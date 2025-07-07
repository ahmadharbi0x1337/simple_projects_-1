const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

// The NavBar Toggler Functionality
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// The children Property Does Not Returns An Actual Array Object That's Why You Need Either To Build it.
// Array.from(navLinks.children).forEach((e) => {
//   e.addEventListener("click", () => {
//     navLinks.classList.remove("open");
//     menuBtnIcon.setAttribute("class", "ri-menu-line");
//   });
// });
// Or To Spread The HTML Collection
// [...navLinks.children].forEach((e) => {
//   e.addEventListener("click", () => {
//     navLinks.classList.remove("open");
//     menuBtnIcon.setAttribute("class", "ri-menu-line");
//   });
// });

// MoreOver The childNodes does return a NodeList Object You Can Iterate Over Using forEach
// Ensuring That The Navbar Close After A Link Is Clicked.
// Only Links And Not The Overall Body Of The Nav
navLinks.childNodes.forEach((e) => {
  e.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
});

// The Items Scroll Functionality At The Beginning Of The Load Off-course
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header__content .socials", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".header__bar", {
  ...scrollRevealOption,
  delay: 3000,
});
