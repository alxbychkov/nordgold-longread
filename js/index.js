const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 100,
    autoplay: {
        delay: 6000
    },
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
            spaceBetween: 100
        },
        561: {
            spaceBetween: 0
        }
    }
  });