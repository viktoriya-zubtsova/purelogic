const burgerItem = document.querySelectorAll('.burger__item');
const asideMenu = document.querySelector('.aside-menu');
const burgerBox = document.querySelector('.burger__box');
const wrapper = document.querySelector('.wrapper');
const burgerBack = document.querySelector('.burger__back');
const burger = document.querySelector('.burger');

function createTitle(value) {
	let title = document.createElement('p');
	title.classList.add('burger__title');
	title.innerHTML = `<span class="burger__title-text"> ${value} </span>`;
  burger.append(title);
}

function goBack() {
  document.querySelectorAll('.active').forEach (item => item.classList.remove('active'));
  burgerBox.classList.remove('hidden');
  wrapper.classList.remove('hidden');
  burger.removeChild(document.querySelector('.burger__title'));
  burgerBack.classList.add('hidden');
}

burgerItem[0].onclick = () => {
  asideMenu.classList.add('active');
  burgerBox.classList.add('hidden');
  wrapper.classList.add('hidden');
  burgerBack.classList.remove('hidden');
  createTitle('Каталог');
}

burgerItem[2].onclick = () => {
  document.querySelector('.about').classList.add('active');
  burgerBox.classList.add('hidden');
  wrapper.classList.add('hidden');
  burgerBack.classList.remove('hidden');
  createTitle('О компании');
}

document.querySelectorAll('.aside-menu__item')[4].onclick = () => {
  asideMenu.classList.remove('active');
  document.querySelector('.section-5').classList.add('active');
  burger.removeChild(document.querySelector('.burger__title'));
  createTitle('Электроника ЧПУ');
}

burgerBack.onclick = () => {
  goBack();
}

document.querySelector('.burger__button').onclick = () => {
  goBack();
}
