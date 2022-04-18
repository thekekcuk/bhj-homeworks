const reveal = Array.from(document.querySelectorAll('.reveal'))

function active(el) {
    for (let i = 0; i < el.length; i++) {
        const {top, bottom} = el[i].getBoundingClientRect();
        if (bottom > 0 && top < window.innerHeight) {
            el[i].classList.add('reveal_active');
        }
        else {
            el[i].classList.remove('reveal_active');
        }
    }
}
setInterval(() => {
    active(reveal)
}, 1000);