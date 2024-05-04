alert("Cool Chicks Rise Up!!!")

// Form Validation *************************************************

const waitlistForm = document.getElementById('waitlistForm');

waitlistForm.addEventListener('submit', (e) => {

  alert(`You submitted this: ${waitlistForm.querySelector('input').value}`);
});

const nameInput = waitlistForm.querySelector('input[type="text"]');

nameInput.addEventListener('change', (e) => {
  console.log(nameInput.value);
});


const form = document.getElementById ('form');
const name = form.elements['name'];
const email = form.elements['email'];
const number = form.elements['number'];

form.addEventListener('submit', validate);

// Functions *************************************************
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

alert (`Name: ${nameVal}
Email: ${emailVal}
Number: ${numberVal}`)

return true;
}

// Name Validation *************************************************
function validateName(){
if(name.value === '') {
  alert("Please provide a name.");
  name.focus();
  return false;
}
return name.value;
}

// Email Validation *************************************************
// atpos - at position
// dotpos - dot position

function validateEmail() {
let emailVal = email.value;

const atpos = emailVal.indexOf('@');
const dotpos = emailVal.lastIndexOf('.');

if (email.value === '') {
alert("Please provide an email");
email.focus();
return false;
}

if (atpos < 1) {
  alert(
    'Your email must include an @ symbol, which must not be at the beginning of the email.'
  );
  email.focus();
  return false;
}

if (dotpos - atpos < 2) {
  alert(
    'Invalid structure: @.\nYou must include a domain name after the @ symbol.'
  );
  email.focus();
  return false;
}

return emailVal;
}


// Number Validation *************************************************
function validateNumber() {
if (number.value === '') {
  alert("Phone numbers must be in the format ###-###-####.")
  number.focus();
  return false;
}
return number.value;
}



// function alert(message) {
//   const errorEl = document.getElementById('form-error');
//   errorEl.style.display = 'block';
//   errorEl.textContent = message;

//   setTimeout(() => {
//     errorEl.style.display = 'none';
//   }, 3000);
// }


