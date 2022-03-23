'use strict'
let valueBtn = document.querySelector('.dropdown__value');
let list = document.querySelector('.dropdown__list');
let link = Array.from(document.querySelectorAll('.dropdown__link'));


valueBtn.addEventListener('click', () => list.classList.toggle('dropdown__list_active'));

for(let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', (event) => {
        list.classList.toggle('dropdown__list_active');
        valueBtn.textContent = link[i].textContent;
        event.preventDefault();
    })
}