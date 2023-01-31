const menu = document.querySelector('#mobileMenu');
const hambuger = document.querySelector('#hambuger');
const x = document.querySelector('#x');
const navitem = document.querySelectorAll('.nav-item');

hambuger.addEventListener('click', () => {
  menu.classList.add('show');
});

x.addEventListener('click', () => {
  menu.classList.remove('show');
});

navitem.forEach((n) => n.addEventListener('click', () => menu.classList.remove('show')));