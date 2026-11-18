"use strict";
let NameInput = document.querySelector("#Name");
let EmailInput = document.querySelector("#Email");
let PhoneInput = document.querySelector("#Phone");
let PasswordInput = document.querySelector("#Password");
const registrationform = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
registrationform.addEventListener("submit", (event) => {
    event.preventDefault();
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    phoneError.innerHTML = "";
    passwordError.innerHTML = "";
    let isvalid = true;
    if (NameInput.value.trim() === "") {
        nameError;
    }
});
//# sourceMappingURL=pratice1.js.map