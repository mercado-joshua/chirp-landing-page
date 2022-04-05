document.addEventListener('readystatechange', function (event) {
    if (event.target.readyState === 'complete') {
        init();
    }
});

// initialize swiper instance
function init() {
    const swiper = new Swiper('[data-js-customerbox]', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }
    });
}