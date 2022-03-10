let menuLink = Array.from(document.querySelectorAll('.menu__link'));
menuLink.forEach(i => {
    i.onclick = () => {
        let hide = i.parentElement.querySelector('.menu_sub');
        //console.log(hide)
        if (hide != null) {
            if (hide.className.includes('menu_active')) {
                hide.classList.remove('menu_active');
                return false;
            } else {
                hide.classList.add('menu_active');
                return false;
            }
        }
    }
})