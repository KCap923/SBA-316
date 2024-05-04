// alert("Cool Chicks Rise Up!!!")

// Form Validation *************************************************

const form = document.getElementById ('form');
const name = form.elements['name'];
const email = form.elements['email'];
const number = form.elements['number'];

form.addEventListener('submit', validate);


function validate(e) {
const nameVal = validateName();
if (nameVal === false) {
e.returnValue = false;
return false;
}

const emailVal = validateEmail();
if (emailVal === false) {
e.returnValue = false;
return false;
}

const numberVal = validateNumber();
if (numberVal === false) {
e.returnValue = false;
return false;
}




}