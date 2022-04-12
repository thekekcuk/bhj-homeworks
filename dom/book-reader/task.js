const book = document.getElementById('book');
const size = Array.from(document.querySelectorAll('.font-size'));
const active = document.querySelector('.font-size_active');


for(i in size) {
    console.log(size[i].classList.contains('font-size_active'))
    
    size[0].addEventListener('click', (event) => {
        book.classList.add('book_fs-small');
        book.classList.remove('book_fs-big');
        size[0].classList.add('font-size_active');
        event.preventDefault();
    })
    
    size[2].addEventListener('click', (event) => {
        book.classList.add('book_fs-big');
        book.classList.remove('book_fs-small');
        size[2].classList.add('font-size_active');
        event.preventDefault();
    })
}