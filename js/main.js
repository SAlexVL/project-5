const modalWindow = document.querySelector('.modal');
const buttonModals = document.querySelectorAll('.modal__button');
const body = document.querySelector('body');

buttonModals.forEach((item) => {
  item.addEventListener('click', () => {
    modalWindow.classList.add('active');
    body.classList.add('noscroll');
  });
});

modalWindow.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal__inner');
  if (!isModal) {
    modalWindow.classList.remove('active');
    body.classList.remove('noscroll');
  }
});