'use strict';

// <-- Selecting, Creating and Deleting Elements -->
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
document.getElementsByTagName('button');
document.getElementsByClassName('btn');

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookies');
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

// <-- Styles, Attributes and Classes -->
console.clear();

message.style.backgroundColor = '#37383d';
message.style.width = '50vw';
console.log(message.style.width); // 50vw (only inline styles)
console.log(getComputedStyle(message).color); // rgb(187, 187, 187)
// document.documentElement.style.setProperty('--color-primary', 'teal');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.src); // http://127.0.0.1:5500/12-Advanced-DOM-Bankist/img/logo.png
console.log(logo.getAttribute('src')); // img/logo.png
console.log(logo.getAttribute('alt')); // Bankist logo

logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('company', 'Bankist');

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // http://127.0.0.1:5500/12-Advanced-DOM-Bankist/#
console.log(link.getAttribute('href')); // #

// Data attributes
console.log(logo.dataset.versionNumber); // 3.0

// Classes
logo.classList.add('test');
logo.classList.remove('test');
logo.classList.toggle('test');
logo.classList.contains('test');

// <-- pageYOffset and clientHeight -->

console.log(`
  Current scroll (X/Y): ${window.pageXOffset}/${window.pageYOffset}\n
  Height Viewport: ${document.documentElement.clientHeight}\n
  Width Viewport${document.documentElement.clientWidth}
`);

// <-- Types of Events and Event Handlers -->
console.clear();

const h1 = document.querySelector('h1');
const alertH1 = function () {
  alert(`'mouseenter' addEventListener`);

  setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
};

h1.addEventListener('mouseenter', alertH1);

// Oldschool way
// h1.onmouseenter = alertH1;
