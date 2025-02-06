$(function () {
  
  $('.menu__btn').on('click', function(){
    $('.menu__btn').toggleClass('menu__btn--open');
    $('.menu__list').toggleClass('menu__list--active');
  })

  $('.tickets__input-num').styler();

  $('.number-of-day').on('click', function(){
    $('.number-of-day').removeClass('number-of-day--active');
    $(this).addClass('number-of-day--active')
  })


  $('.animals-slider__inner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button type="button" class="slick-prev"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6205 0.9925C10.1305 0.5025 9.34055 0.5025 8.85055 0.9925L0.540547 9.3025C0.150547 9.6925 0.150547 10.3225 0.540547 10.7125L8.85055 19.0225C9.34055 19.5125 10.1305 19.5125 10.6205 19.0225C11.1105 18.5325 11.1105 17.7425 10.6205 17.2525L3.38055 10.0025L10.6305 2.7525C11.1105 2.2725 11.1105 1.4725 10.6205 0.9925Z" fill="#808080"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.379453 19.0075C0.869452 19.4975 1.65945 19.4975 2.14945 19.0075L10.4595 10.6975C10.8495 10.3075 10.8495 9.6775 10.4595 9.2875L2.14945 0.977499C1.65945 0.487499 0.869452 0.487499 0.379453 0.977499C-0.110547 1.4675 -0.110547 2.2575 0.379453 2.7475L7.61945 9.9975L0.369454 17.2475C-0.110545 17.7275 -0.110547 18.5275 0.379453 19.0075Z" fill="#808080"/></svg></button>',
    dots: true,
    infinite: false,
    responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            infinite: true
          }
        },
  ]
  });


})