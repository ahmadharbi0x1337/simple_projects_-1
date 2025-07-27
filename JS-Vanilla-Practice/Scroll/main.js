// Set Date
const date = document.getElementById("date");
date.textContent = new Date().getFullYear();
// close links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
navToggle.addEventListener("click", () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = `0`;
  }
});
//  fixed NavBar with topLink.
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
  const navHeight = navbar.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;
  if (navHeight < scrollHeight) {
    navbar.classList.add("fixed-nav");
    topLink.classList.add("show-link");
  } else {
    navbar.classList.remove("fixed-nav");
    topLink.classList.remove("show-link");
  }
});
// smooth scrolling
const scrolLinks = document.querySelectorAll(".scroll-link");
scrolLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // preventing default behaviour
    e.preventDefault();
    // navigate to specific spot
    console.log(e.currentTarget);
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const navFixed = navbar.classList.contains("fixed-nav");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;
    if (!navFixed) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
