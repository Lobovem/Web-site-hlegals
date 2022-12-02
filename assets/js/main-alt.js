// управление меню
// управление меню
const menuBtn = document.querySelector('.navbar__burger');
const menuList = document.querySelector('.navbar__list');
const header = document.querySelector('header');
const body = document.querySelector('body');


menuBtn.addEventListener('click', (e) => {
  menuBtn.classList.toggle('active');
  header.classList.toggle('active');
  body.classList.toggle('active');

  if (menuList.classList.contains('active')) {
    setTimeout(() => menuList.classList.toggle('active'), 500);
  } else {
    menuList.classList.toggle('active');
  }
});

// Горизонтальный слайдер. Считали DOM элементы
const headersLis = document.querySelectorAll('.slider-alt');
const indicatorsLis = document.querySelectorAll('.slider-alt__indicator-alt');

let index = 0;
let interval = 5000;
let heightsArr = [];
let heightMax = null;

setInterval(() => {
  // снимаем классы active для первых элементов
  headersLis[index].classList.toggle('active');
  indicatorsLis[index].classList.toggle('active');
  // увеличиваем индекс, пока не превышено количество элементов
  index = (index + 1) % headersLis.length;
  // ставим классы active следующим элементам
  headersLis[index].classList.toggle('active');
  indicatorsLis[index].classList.toggle('active');
}, interval);

// вычисление и изменение высоты блока описания под максимальный текст
descriptionsList.forEach(el => heightsArr.push(el.clientHeight));
heightMax = Math.max(...heightsArr);
descriptionsList.forEach(el => el.style.height = `${heightMax}px`);