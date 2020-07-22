$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right'),
    dotsClass: 'slider__dots',
    initialSlide: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
  });
      $('.menu-button').on('click', function(){
      $('.menu__nav').toggleClass('menu__nav-active');
      $('.menu-button').toggleClass('menu-button-active');
    });
    $('input[type="tel"]').mask("+ 999 99 999 99 99");
  });