
/*
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
});
*/


document.addEventListener("DOMContentLoaded", function() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  mobileMenu.addEventListener("click", function() {
    if (navLinks.classList.contains('active')) {
      navLinks.style.maxHeight = navLinks.scrollHeight + "px";
      setTimeout(() => {
        navLinks.classList.remove('active');
        navLinks.style.maxHeight = "0";
      }, 0);
    } else {
      navLinks.classList.add('active');
      navLinks.style.maxHeight = navLinks.scrollHeight + "px";
      setTimeout(() => {
        navLinks.style.maxHeight = navLinks.scrollHeight + 'px';
      }, 400);
    }
    mobileMenu.classList.toggle("active");
  });
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

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('nav ul li a');
  let currentURL = window.location.pathname.split('/').pop();
  links.forEach(function(link){
    if (link.getAttribute('href') === currentURL) {
      link.classList.add('active');
    }
  });
});
