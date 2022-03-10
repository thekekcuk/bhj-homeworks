const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
const item = Array.from(document.querySelectorAll('.slider__item'));
let count = 0;

next.onclick = () => {
    item[count].className = 'slider__item';

    if (count < item.length - 1) {
        count++;
    } else {
        count = 0;
    }

    item[count].classList.add('slider__item_active');
}

prev.onclick = () => {
    item[count].className = 'slider__item';

    if (count > 0) {
        count--;
    } else {
        count = item.length - 1;
    }

    item[count].classList.add('slider__item_active');
}