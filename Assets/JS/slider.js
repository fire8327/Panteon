const swiper = new Swiper('.galery-1', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        // when window width is >= 320px
        1024: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
  });