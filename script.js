
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
});



$(document).ready(function () {
  $('.contact-form').submit(function (event) {
    event.preventDefault();
    let name = $('#usr').val();
    let email = $('#email').val();
    let message = $('#message').val();
    let isValid = true;
    if (name === '') {
      $('.error-name').text('Please enter your name.');
      isValid = false;
    } else {
      $('.error-name').text('');
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      $('.error-email').text('Please enter  your email address.');
      isValid = false;
    } else if (!emailPattern.test(email)) {
      $('.error-email').text('Please enter a valid email address');
      isValid = false;
    } else {
      $('.error-email').text('');
    }
    if (message === '') {
      $('.error-message').text('Ops, you forgot to write something.');
      isValid = false;
    } else {
      $('.error-message').text('');
    }

    if (isValid) {
      $('.sent-ok').show();
      setTimeout(() => {
      $('.sent-ok').hide();
        },5000);      
      $('.contact-form')[0].reset();
    }
 
  });

});

function submitFunction() {
let button = document.getElementById('submit').formAction;

}

const apiUrl = "https://api.quotable.io/random"
async function getQuote(url){
const response = fetch(url);
let data = (await response).json;
console.log(data);
}
getQuote(api_url);