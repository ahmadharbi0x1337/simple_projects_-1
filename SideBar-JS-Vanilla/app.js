const sideBarTogglerBtn = document.querySelector(".sidebar-toggle");
const sideBar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

sideBarTogglerBtn.addEventListener("click", () => {
  sideBar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("show-sidebar");
});
