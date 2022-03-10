let modalMain = document.querySelector('#modal_main');
let modalSuccess = document.querySelector('#modal_success');
let closeArray = Array.from(document.querySelectorAll('.modal__close'));
let successButton = document.querySelector('.show-success');
modalMain.classList.add('modal_active');

closeArray.forEach((i) => {
    i.onclick = () => {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    }
})

successButton.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}