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
h1.removeEventListener('mouseenter', alertH1);

// Oldschool way
// h1.onmouseenter = alertH1;

// <-- Event Propagation: Bubbling and Capturing -->
const randomInt = (min = 0, max = 255) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`;

document
  .querySelector('.nav__link')
  .addEventListener('click', function (event) {
    this.style.backgroundColor = randomColor();
    console.log('Link', event.target, event.currentTarget);
    console.log(event.currentTarget === this); // true

    // Stop propagation
    event.stopPropagation();
  });

document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    this.style.backgroundColor = randomColor();
    console.log('Link Container', event.target, event.currentTarget);
  });

document.querySelector('.nav').addEventListener('click', function (event) {
  this.style.backgroundColor = randomColor();
  console.log('Nav', event.target, event.currentTarget);
});

// <-- Page Navigation Without Delegation -->
document.querySelectorAll('.nav__link').forEach(function (element) {
  element.addEventListener('click', function (event) {
    event.preventDefault();

    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// <-- DOM Traversing -->

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children); // [span.highlight, br, span.highlight]
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'red';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling); // null
console.log(h1.nextElementSibling);

console.log(h1.previousSibling); // #text
console.log(h1.nextSibling); // #text

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (element) {
  if (element !== h1) element.style.transform = 'scale(0.5)';
});

// <-- Sticky navigation -->
const nav = document.querySelector('.nav');
const section1 = document.querySelector('#section--1');

const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function () {
  this.window.scrollY > initialCoords.top
    ? nav.classList.add('sticky')
    : nav.classList.remove('sticky');
});

// <-- Lifecycle DOM Events -->
console.clear();

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('HTML parsed and DOM tree built!', event);
});

window.addEventListener('load', function (event) {
  console.log('Page fully loaded', event);
});

window.addEventListener('beforeunload', function (event) {
  event.preventDefault();
  // event.returnValue = '';
});
