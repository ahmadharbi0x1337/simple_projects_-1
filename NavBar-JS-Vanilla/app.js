const burgerTogglerBtn = document.querySelector(".nav-toggle");
const linksToggle = document.querySelector(".links");
burgerTogglerBtn.addEventListener("click", () => {
  //   if (linksToggle.classList.contains("show-links")) {
  //     linksToggle.classList.remove("show-links");
  //   } else {
  //     linksToggle.classList.add("show-links");
  //   }
  linksToggle.classList.toggle("show-links");
});
