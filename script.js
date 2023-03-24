var idError = document.getElementById('id-error');
var passwordError = document.getElementById('password-error');
var nameError = document.getElementById('name-error');
var surnameError = document.getElementById('surname-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var submitError = document.getElementById('submit-error');
function kontrolID(){
    var id = document.getElementById('username').value;

    if (id.length == 0) {
        idError.innerHTML = 'id is required';
        return false;
    }
    if (id.length <8 || id.length >12) {
        idError.innerHTML = 'id must be 8-12 characters';
        return false;
    }
    if (!id.match(/^[0-9a-zA-Z]*$/)) {
        idError.innerHTML = 'id must be alphanumeric characters';
        return false;
    }
    idError.innerHTML = 'valid';
    return true;
}

function kontrolPassword(){
    var password = document.getElementById('password').value;

   if (password.length == 0) {
       passwordError.innerHTML = 'password is required';
       return false;
   } 
   if (password.length <8 || password.length >10) {
       passwordError.innerHTML = 'password must be 8-10 characters';
       return false;
   }
   passwordError.innerHTML = 'valid';
   return true;
}


function kontrolName(){
    var name = document.getElementById('name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'name is required';
        return false;
    }
    if (!name.match(/^[a-zA-Z]*$/)) {
        nameError.innerHTML = 'name must be alphabetic characters';
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;
}


function kontrolSurname(){
    var surname = document.getElementById('surname').value;

    if (surname.length == 0) {
        surnameError.innerHTML = 'surname is required';
        return false;
    }
    if (!surname.match(/^[a-zA-Z]*$/)) {
        surnameError.innerHTML = 'surname must be alphabetic characters';
        return false;
    }
    surnameError.innerHTML = 'valid';
    return true;
}


function kontrolPhone(){
    var phone = document.getElementById('number').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'phone number is required';
        return false;
    }
    if (phone.length != 10) {
        phoneError.innerHTML = 'phone number must be 10 numeric characters';
        return false;
    }
    if (!phone.match(/^[0-9]*$/)) {
        phoneError.innerHTML = 'phone number must be numeric characters';
        return false;
    }
    phoneError.innerHTML = 'valid';
    return true;
}


function kontrolEmail(){
    var email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'email is required';
        return false;
    }
    if (!email.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        emailError.innerHTML = 'email invalid';
        return false;
    }
    emailError.innerHTML = 'valid';
    return true;
}


function kontrolForm(){
    if (!kontrolID() || !kontrolPassword() || !kontrolName() || !kontrolSurname() || !kontrolPhone() || !kontrolEmail()) {
        submitError.innerHTML = 'Please fill all sections to submit';
        return false;
    }

}