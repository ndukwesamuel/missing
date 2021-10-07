// NAVBAR

// ******** SELECTING DOM ELEMENT ********
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const linksWrapper = document.querySelector(".links-wrapper");

// ******** LISTEN FOR EVENT ********
navToggle.addEventListener("click", () => {
  // get links height
  let linksWrapperHeight = linksWrapper.getBoundingClientRect().height;
  let linksHeight = links.getBoundingClientRect().height;

  if (linksWrapperHeight == 0) {
    linksWrapper.style.height = `${linksHeight}px`;
  } else {
    linksWrapper.style.height = 0;
  }
});

// FORM

// ******** SELECTING DOM ELEMENT ********
const form = document.querySelector(".form");
const alert = document.querySelector(".alert");
const firstName = document.getElementById("firstName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const pass = document.getElementById("pass");
// ******** LISTEN FOR EVENT ********
form.addEventListener("submit", (e) => {
  const emailValue = email.value;
  const firstNameValue = firstName.value;
  const phoneValue = phone.value;
  const passValue = pass.value;
  e.preventDefault();
  if (!emailValue && !firstNameValue && !phoneValue && !passValue) {
    showAlert();
  }
});

const showAlert = () => {
  alert.textContent = "please fill in the forms";
  setInterval(() => {
    alert.textContent = "";
  }, 3000);
};
