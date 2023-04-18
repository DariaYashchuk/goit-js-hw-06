const nameLabel = document.querySelector("#name-output");
const inputValue = document.querySelector("#name-input");

inputValue.addEventListener("input", onInputChange);

function onInputChange(event) {
  nameLabel.textContent = event.currentTarget.value;
  console.log(event.currentTarget.value);
  if (nameLabel.textContent === "") {
    nameLabel.textContent = "Anonymous";
  }
}
