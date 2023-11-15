(function($) {
"use strict"; // Start of use strict

// Toggle .header-scrolled class to #header when page is scrolled
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  } else {
    $('#header').removeClass('header-scrolled');
  }
});

if ($(window).scrollTop() > 100) {
  $('#header').addClass('header-scrolled');
}


// Mobile Navigation
if ($('.nav-menu').length) {
  var $mobile_nav = $('.nav-menu').clone().prop({
    class: 'mobile-nav d-lg-none'
  });
  $('body').append($mobile_nav);
  $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="bx bx-menu"></i></button>');
  $('body').append('<div class="mobile-nav-overly"></div>');

  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
    $('.mobile-nav-overly').toggle();
  });

  $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
    e.preventDefault();
    $(this).next().slideToggle(300);
    $(this).parent().toggleClass('active');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav, .mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
        $('.mobile-nav-overly').fadeOut();
      }
    }
  });
} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
  $(".mobile-nav, .mobile-nav-toggle").hide();
}

// Real view height for mobile devices
if (window.matchMedia("(max-width: 767px)").matches) {
  $('#hero').css({
    height: $(window).height()
  });
}


// Smooth scroll for the navigation menu and links with .scrollto classes
$(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    e.preventDefault();
    var target = $(this.hash);
    if (target.length) {

      var scrollto = target.offset().top;
      var scrolled = 20;

      if ($('#header').length) {
        scrollto -= $('#header').outerHeight()

        if (!$('#header').hasClass('header-scrolled')) {
          scrollto += scrolled;
        }
      }

      if ($(this).attr("href") == '#header') {
        scrollto = 0;
      }

      $('html, body').animate({
        scrollTop: scrollto
      }, 1500, 'easeInOutExpo');

      if ($(this).parents('.nav-menu, .mobile-nav').length) {
        $('.nav-menu .active, .mobile-nav .active').removeClass('active');
        $(this).closest('li').addClass('active');
      }

      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
        $('.mobile-nav-overly').fadeOut();
      }
      return false;
    }
  }
});


// Smooth scrolling using jQuery easing with other links
$('.smooth-scroll.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - 54)
            }, 1000, "easeInOutExpo");
            return false;
        }
    }
});


//  Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
  target: '#mainNav',
  offset: 56
});


// Intro carousel
var heroCarousel = $("#heroCarousel");

heroCarousel.on('slid.bs.carousel', function(e) {
  $(this).find('h2').addClass('animated fadeInDown');
  $(this).find('p').addClass('animated fadeInUp');
  $(this).find('.btn-get-started').addClass('animated fadeInUp');
});

// Init AOS animation
AOS.init();
    
// Counter up 
function counter_up(){
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });
}
// triger the counter up function it has nothing to do with fixed top 
counter_up();

// Partners Carousel 
$(".partners-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    900: {
      items: 5
    }
  }
});

// Back to top button
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});

$('.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 1500, 'easeInOutExpo');
  return false;
});


})(jQuery); // End of use strict