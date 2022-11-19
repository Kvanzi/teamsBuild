function toggleMenu() {
    document.documentElement.classList.toggle('menu-open');
    document.documentElement.classList.toggle('lock');
}
document.querySelector('.header__menu').addEventListener('click', () => {
    toggleMenu();
});
const menuItems = document.querySelectorAll('.header__item');
for (const i of menuItems) {
    i.addEventListener('click', () => {
        if (document.documentElement.classList.contains('menu-open')) {
            toggleMenu();
        }
    });
}

const clientsSlider = new Swiper('.clients__slider', {
    speed: 600,
    watchOverflow: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            navigation: {
                enabled: false,
            },
        },
        768: {
            navigation: {
                enabled: true,
            },
            slidesPerGroup: 1,
            slidesPerView: 1,
        },
        1024: {
            slidesPerGroup: 2,
            slidesPerView: 2,
        },
    },
});