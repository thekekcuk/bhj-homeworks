'use strict'

let tab = Array.from(document.querySelectorAll('.tab'));
let tabContent = Array.from(document.querySelectorAll('.tab__content'));

for(let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', () => {
        let removeTab = document.querySelector('.tab_active');
        removeTab.classList.remove('tab_active');
        let removeTabContent = document.querySelector('.tab__content_active');
        removeTabContent.classList.remove('tab__content_active');
        tab[i].classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active')
    })
}