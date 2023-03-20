const email = document.querySelector("#email");
const faExclamation = document.querySelector(".fa-exclamation");
const faCheck = document.querySelector(".fa-check");
const errorText = document.querySelector(".error-text");
const button = document.querySelector("button");
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function check() {
    if(email.value.match(regExp)){
        email.style.borderColor = "#27ae60";
        faExclamation.style.display = "none";
        faCheck.style.display = "block";
        errorText.style.display = "none";
        button.style.display = "block";
    }else{
        email.style.borderColor = "#e74c3c";
        faExclamation.style.display = "block";
        faCheck.style.display = "none";
        errorText.style.display = "block";
        button.style.display = "none";
    }

    if(email.value == "") {
        email.style.borderColor = "lightgray";
        faExclamation.style.display = "none";
        faCheck.style.display = "none";
        errorText.style.display = "none";
        button.style.display = "none"
    }
}