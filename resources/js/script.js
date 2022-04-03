$(document).ready(function() {
    /*-----SCROLL ON BUTTONS----------------*/
    $('.js-scroll-to-sign-up').click(function() {
        
        $('html, body').animate({scrollTop: $('.js--sign-up').offset().top}, 1000);
        
    });
    
    $('.js-scroll-to-numbers').click(function() {
        
        $('html, body').animate({scrollTop: $('.js--numbers').offset().top}, 1000);
        
    });
    
    /*----NAVIGATION SCROLL*/
    
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
    
    
    /*-------- MOBILE NAVIGATION----------*/
    $('.js--nav-icon').click(function() {
        let nav = $('.js--main-nav');
        let icon = $('.js--nav-icon i');
        
        
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
    });
    
});