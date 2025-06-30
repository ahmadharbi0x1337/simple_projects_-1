const colors = ["red", "green", "blue", "rgba(133, 122, 200)", "#f15025"];

const BUTTON = document.getElementById("btn");
const SPAN = document.querySelector(".color");

BUTTON.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  SPAN.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
