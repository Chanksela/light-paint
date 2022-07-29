const header = document.getElementById("header");
const container = document.getElementById("container");
const SQUARES = 500;
const colors = [
  "#A8006D",
  "#E43F47",
  "#FF822F",
  "#F8CE18",
  "#6BAA2C",
  "#6C4821",
];

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);

  square.addEventListener("mouseover", () => paintOnHover(square, header));
  square.addEventListener("mouseout", () => paintRemove(square, header));
}
function paintOnHover(element, element1) {
  const color = getRandomColor();

  element.style.backgroundColor = color;
  element1.style.color = color;
}
function paintRemove(element, element1) {
  element.style.backgroundColor = "";
  element1.style.color = "white";
  console.log("Element removed");
}
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
