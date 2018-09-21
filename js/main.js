// Free code from jqueryscript.net
//A dead simple jQuery hamburger menu plugin for both mobile and desktop that reveals a dropdown menu with a fullscreen background overlay as you click/tap on the toggle icon.

(function() {
  'use strict';
  $('.hamburger-menu').click(function (e) {
      e.preventDefault();
      if ($(this).hasClass('active')){
          $(this).removeClass('active');
          $('.menu-overlay').fadeToggle( 'fast', 'linear' );
          $('.menu .menu-list').slideToggle( 'slow', 'swing' );
          // $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
      } else {
          $(this).addClass('active');
          $('.menu-overlay').fadeToggle( 'fast', 'linear' );
          $('.menu .menu-list').slideToggle( 'slow', 'swing' );
          // $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
      }
  })
})();
