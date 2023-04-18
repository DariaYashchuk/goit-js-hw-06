const inputValue = document.querySelector("#validation-input");

inputValue.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (inputValue.value.length !== Number(inputValue.dataset.length)) {
    inputValue.classList.add("invalid");
  } else {
    inputValue.classList.remove("invalid");
    inputValue.classList.add("valid");
  }
}
