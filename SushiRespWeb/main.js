//=============================== Show menu ========================================
const navMenu = document.querySelector('#nav-menu'),
    navToggle = document.querySelector('#nav-toggle'),
    navClose = document.querySelector('#nav-close')

//=============================== Menu Show ========================================
// Validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


//=============================== Menu Hide ========================================
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


//=============================== Remove Menu Mobile========================================

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.querySelector('#nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


//=============================== Change Background Header ========================================

const scrollHeader = () => {
    const header = document.getElementById('header');
    //when the scroll is greater or = with 50 vp height, add the scroll header class
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');

}
window.addEventListener('scroll', scrollHeader);

