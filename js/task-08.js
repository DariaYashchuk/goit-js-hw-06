const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  //   const formElements = event.currentTarget.elements;
  //   const email = formElements.email.value;
  //   const password = formElements.password.value;

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const details = {
    email: email.value,
    password: password.value,
  };

  console.log(details);

  event.currentTarget.reset();
}
