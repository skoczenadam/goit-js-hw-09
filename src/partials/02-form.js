const form = document.querySelector("form");

const user = {
  email: "",
  message: "",
};

const savedUser = localStorage.getItem("feedback-form-state");
const parsedUser = JSON.parse(savedUser);

if (parsedUser) {
  form.email.value = parsedUser.email;
  form.message.value = parsedUser.message;
}

form.addEventListener("input", e => {
  const email = e.currentTarget.email.value;
  const message = e.currentTarget.message.value;
  user.email = email.trim();
  user.message = message.trim();
  localStorage.setItem("feedback-form-state", JSON.stringify(user));
})

form.addEventListener("submit", e => {
  e.preventDefault();
  const form = e.target;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  if (email === "" || message === "") {
    alert("All form fields must be filled in")
  } else {
  user.email = email.trim();
  user.message = message.trim();
  form.reset();
  localStorage.removeItem("feedback-form-state");
  console.log(user);
  }
})