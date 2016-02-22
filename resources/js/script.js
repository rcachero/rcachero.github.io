$(document).ready(function() {
  $('.js--section-about').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });
  
  /* Scroll to animation */
  $('.js--scroll-to-about').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
  })
  
  $('.js--scroll-to-portfolio').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-portfolio').offset().top}, 1000);
  })
  
  $('.js--scroll-to-form').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 1000);
  })
  
  /* Mobile Navigation */
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    
    nav.slideToggle(200)
    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });
  
});