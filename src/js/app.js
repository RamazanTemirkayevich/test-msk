import sayHello from './lib/sayHello';

sayHello();

if (window.innerWidth < 1360) {
    $(document).on('click', '.parent-sub', function () {
        const subMenu = document.querySelector('.nav-wrap__menu-sub__list');
        const arrow = document.querySelector('.arrow-icon')
    
        subMenu.classList.toggle('active')
        arrow.classList.toggle('active')
    })
} else {
    $(document).off('click', '.parent-sub', function () {
        const subMenu = document.querySelector('.nav-wrap__menu-sub__list');
        const arrow = document.querySelector('.arrow-icon')
    
        subMenu.classList.remove('active')
        arrow.classList.remove('active')
    })
}

function burgerMenu() {
    const burger = document.querySelector(".header-wrap__menu");
    const nav = document.querySelector(".nav");
    const {body} = document;
    
    if (burger && nav) {
        burger.addEventListener("click", () => {
            burger.classList.toggle("active");
            nav.classList.toggle("active");
            body.classList.toggle("lock");
        });
    }
};

$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
        $('.header').addClass('header--scroll');
    } else {
        $('.header').removeClass('header--scroll');
    }
});

const searchHandle = document.querySelectorAll('.search, .search-icon')
const searchInput = document.querySelector('.nav-wrap__upper-search')

searchHandle.forEach((e) => {
    e.addEventListener('click', () => {
        searchInput.classList.toggle('active')
    })
})

burgerMenu();