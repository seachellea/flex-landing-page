const menuToggle = document.getElementById('menuToggle');
const menu = document.querySelector('.menu');
const menuBars = document.querySelectorAll('.bar');

let isMenuOpen = false;

menuToggle.addEventListener('click', () => {
    if (!isMenuOpen) {
        openMenu();
    } else {
        closeMenu();
    }
});

// const revealContent = () => {
//     if (menu.classList.contains('bar')) {
//         hiddenContent.classList.remove('bar');
//     }
//     else {
//         hiddenContent.classList.add('bar');
//     }
// }

function openMenu() {
    menu.classList.add('show');
    menuBars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
    menuBars[1].style.opacity = '0';
    menuBars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    isMenuOpen = true;
}

function closeMenu() {
    menu.classList.remove('show');
    menuBars[0].style.transform = 'none';
    menuBars[1].style.opacity = '1';
    menuBars[2].style.transform = 'none';
    isMenuOpen = false;
}
