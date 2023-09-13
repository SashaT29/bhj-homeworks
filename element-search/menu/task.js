const links = Array.from(document.querySelectorAll('.menu__link'));
const menuSub = Array.from(document.querySelectorAll('.menu_sub'));

<<<<<<< HEAD

=======
>>>>>>> c12602c200a5e6d514ec703f7dd67568b875e51e
links.forEach((link) => {
    link.onclick = () => {
        if (link.parentElement.querySelector('.menu_sub') !== null) {
            link.parentElement.querySelector('.menu_sub').classList.toggle('menu_active');
            return false;
        }
    }
})