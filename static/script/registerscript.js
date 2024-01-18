function validateForm() {
    // Reset  les borders
    resetBorders();

    // Check First Name and Last Name
    checkField("nom");
    checkField("prenom");

    // Checker l'Email
    checkEmail();

    // Check Password
    checkPassword();

    // Check Confirm Password
    checkConfirmPassword();

    // Check Quality 1
    checkField("quality1");

    // Check if all fields are correct
    if (areAllFieldsValid()) {
        enableSubmitButton();
    } else {
        disableSubmitButton();
    }
}

function resetBorders() {
    var elements = document.querySelectorAll('.input');
    elements.forEach(function (element) {
        element.style.border = "";
    });
}

function checkField(fieldName) {
    var field = document.getElementById(fieldName);
    if (field.value.trim() === "") {
        setInvalid(field);
    } else {
        setValid(field);
    }
}

function checkEmail() {
    var emailField = document.getElementById("email");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
        setInvalid(emailField);
    } else {
        setValid(emailField);
    }
}

function checkPassword() {
    var passwordField = document.getElementById("password");
    var passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!+$?#&]).{8,}$/;
    if (!passwordRegex.test(passwordField.value)) {
        setInvalid(passwordField);
    } else {
        setValid(passwordField);
    }
}

function checkConfirmPassword() {
    var passwordField = document.getElementById("password");
    var confirmPasswordField = document.getElementById("confirmPassword");
    if (confirmPasswordField.value !== passwordField.value) {
        setInvalid(confirmPasswordField);
    } else {
        setValid(confirmPasswordField);
    }
}

function setInvalid(element) {
    element.classList.remove('valid');
    element.classList.add('invalid');
}

function setValid(element) {
    element.classList.remove('invalid');
    element.classList.add('valid');
}


function areAllFieldsValid() {
    var elements = document.querySelectorAll('.input');
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].style.border === "2px solid red" || elements[i].value.trim() === "") {
            return false;
        }
    }
    return true;
}

function enableSubmitButton() {
    var submitButton = document.getElementById("submitButton");
    submitButton.disabled = false;
}

function disableSubmitButton() {
    var submitButton = document.getElementById("submitButton");
    submitButton.disabled = true;
}

