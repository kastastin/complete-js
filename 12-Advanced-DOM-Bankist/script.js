'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const section1 = document.querySelector('#section--1');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const navigationLinks = document.querySelector('.nav__links');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// <-- Modal window -->
const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModal();
});

// <-- Button scrolling -->
btnScrollTo.addEventListener('click', function (event) {
  const s1coords = section1.getBoundingClientRect();

  window.scrollTo({
    left: 0,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth'
  });
  // section1.scrollIntoView({ behavior: 'smooth' }); // modern way
});

// <-- Page Navigation -->
navigationLinks.addEventListener('click', function (event) {
  event.preventDefault();

  if (event.target.classList.contains('nav__link')) {
    const id = event.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// <-- Tabbed component -->
tabsContainer.addEventListener('click', function (event) {
  const clicked = event.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((tab) => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach((tabContent) =>
    tabContent.classList.remove('operations__content--active')
  );

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
