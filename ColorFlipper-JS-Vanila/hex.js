const HEX = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const spanTag = document.querySelector(".color");
btn.addEventListener("click", function () {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += HEX[getRandome()];
  }
  document.body.style.backgroundColor = hex;
  spanTag.textContent = hex;
});
function getRandome() {
  return Math.floor(Math.random() * HEX.length);
}
