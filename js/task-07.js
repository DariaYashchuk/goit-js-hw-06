const inputValue = document.querySelector("#font-size-control");
const textContent = document.querySelector("#text");

textContent.style.fontSize = inputValue.value + "px";
inputValue.addEventListener("input", onInputChange);

function onInputChange(event) {
  textContent.style.fontSize = event.currentTarget.value + "px";
}
