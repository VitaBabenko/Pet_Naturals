const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { username, phone },
  } = event.currentTarget;
  console.log(username.value, phone.value);

  form.reset();
});
