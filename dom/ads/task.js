const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));

let i = 0;
function active(el) {
    if (i >= el.length) {
        i = 0;
       }
    el[i].classList.remove('rotator__case_active');
    i++;
    el[i].classList.add('rotator__case_active');
    
}

setInterval(() => {
    active(rotatorCase)
}, 1000);