const form = document.querySelector("form");

const user = {
  email: "",
  text: "",
};

// localStorage.getItem("feedback-form-state", )

// form.addEventListener("input", e => {

//   localStorage.setItem("feedback-form-state", )
// })

form.addEventListener("submit", event => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const text = form.elements.text.value;

  if (email === "" || text === "") {
    alert("All form fields must be filled in")
  } else {
    user.email = email.trim();
    user.password = text.trim();
    console.log(user);
    form.reset();
  };
})