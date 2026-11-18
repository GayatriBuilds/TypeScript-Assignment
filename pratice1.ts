let NameInput = document.querySelector("#Name")as HTMLInputElement;
let EmailInput = document.querySelector("#Email")as HTMLInputElement;
let PhoneInput = document.querySelector("#Phone")as HTMLInputElement;
let PasswordInput = document.querySelector("#Password")as HTMLInputElement;
const registrationform = document.getElementById("registrationForm")as HTMLFormElement;
const successMessage = document.getElementById("successMessage")as HTMLParagraphElement;
const nameError = document.getElementById("nameError") as HTMLSpanElement;
const emailError = document.getElementById("emailError") as HTMLSpanElement;
const phoneError = document.getElementById("phoneError") as HTMLSpanElement;
const passwordError = document.getElementById("passwordError") as HTMLSpanElement;

registrationform.addEventListener("submit",(event)=>{
    event.preventDefault();
    nameError.innerHTML="";
    emailError.innerHTML="";
    phoneError.innerHTML="";
    passwordError.innerHTML="";
    let isvalid = true;
    if(NameInput.value.trim()===""){
        nameError
    }

})

