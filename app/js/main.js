'use strict'

let loginPage = document.getElementById('login'),
    modal = document.querySelector('.overlay'),
    modalClose = document.querySelector('.modal__close'),
    hamburger = document.querySelector('.hamburger'),
    menuList = document.querySelector('.header__menu-list');
   
    
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    menuList.classList.toggle('header__menu-list-active');
});

loginPage.addEventListener('click', () => {
    hamburger.classList.remove('open');
    menuList.classList.remove('header__menu-list-active');
});

loginPage.addEventListener('click', () => {
    modal.style.display = 'block';
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});    




