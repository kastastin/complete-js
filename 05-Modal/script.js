'use strict';

const btnsOpenModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const changeModalVisibility = function () {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

btnsOpenModal.forEach((btn) =>
  btn.addEventListener('click', changeModalVisibility)
);

btnCloseModal.addEventListener('click', changeModalVisibility);
overlay.addEventListener('click', changeModalVisibility);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden'))
    changeModalVisibility();
});
