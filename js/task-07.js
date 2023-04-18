const inputValue = document.querySelector("#font-size-control");
const textContent = document.querySelector("#text");

inputValue.addEventListener("input", onInputChange);

function onInputChange(event) {
  textContent.style.fontSize = event.currentTarget.value + "px";
}
