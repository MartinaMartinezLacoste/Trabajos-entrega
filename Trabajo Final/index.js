const form = document.getElementById("formulario");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // Evita que el formulario se envíe y se recargue la página

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  const user = {
    name: nameInput.value,
    email: emailInput.value,
  };

  console.log(user);
}
