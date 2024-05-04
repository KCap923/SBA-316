// alert("Cool Chicks Rise Up!!!")

// Form Validation *************************************************

const form = document.getElementById ('form');
const name = form.elements['name'];
const email = form.elements['email'];
const number = form.elements['number'];

form.addEventListener('submit', validate)