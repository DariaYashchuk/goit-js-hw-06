function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorTextName = document.querySelector(".color");

buttonChangeColor.addEventListener("click", forChangingColor);

function forChangingColor() {
  colorTextName.textContent = getRandomHexColor();
  body.style.backgroundColor = colorTextName.textContent;
}
