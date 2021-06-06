'use strict'

let loginPage = document.getElementById('login'),
    modal = document.querySelector('.overlay'),
    modalClose = document.querySelector('.modal__close'),
    hamburger = document.querySelector('.hamburger'),
    menuList = document.querySelector('.header__menu-list'),
    bodyElem = document.getElementById('body');

   
    
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    menuList.classList.toggle('header__menu-list-active');
    bodyElem.classList.toggle('stop-scrolling'); 
});

loginPage.addEventListener('click', () => {
    hamburger.classList.remove('open');
    menuList.classList.remove('header__menu-list-active');
    bodyElem.classList.remove('stop-scrolling'); 
});

loginPage.addEventListener('click', () => {
    modal.style.display = 'block';
    bodyElem.classList.add('stop-scrolling');
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    bodyElem.classList.remove('stop-scrolling'); 
});    




