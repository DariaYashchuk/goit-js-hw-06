function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const forCreatedBoxes = document.querySelector("#boxes");

const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const pxInitialValue = 20;

const input = document.querySelector("input");

// console.log(destroyBtn);

createBtn.addEventListener("click", () => {
  createBoxes(input.value);
});

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    let divEl = document.createElement("div");

    divEl.style.backgroundColor = getRandomHexColor();

    divEl.style.width = pxInitialValue + i * 10 + "px";
    divEl.style.height = pxInitialValue + i * 10 + "px";

    forCreatedBoxes.appendChild(divEl);
    // console.log(divEl.style.width);
  }
}

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

function destroyBoxes() {
  document.querySelector("#boxes").innerHTML = "";
}
