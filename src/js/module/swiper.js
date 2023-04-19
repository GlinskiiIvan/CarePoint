export default () => {
    const swiperEl = document.querySelector('.swiper');
    if (swiperEl) {
        const swiper = new Swiper(swiperEl, {
            // Optional parameters
            loop: true,
            spaceBetween: 10,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                // when window width is >= 320px
                1024: {
                    slidesPerView: 4,
                },
                768: {
                    spaceBetween: 30,
                    slidesPerView: 3,

                },
                425: {
                    spaceBetween: 10,
                    slidesPerView: 2,
                },
            }
        });
    }
}