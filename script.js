const burger = document.querySelector('.arrow');

const iconArrow = document.querySelector('.fas');
const menuNav = document.querySelector('nav');

burger.addEventListener('click', function () {
    iconArrow.classList.toggle("on");
    menuNav.classList.toggle('on');
})