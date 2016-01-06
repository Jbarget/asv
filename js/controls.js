$(document).ready(function(){
      $('.testimonials').slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHOver: false,
        arrows: false
      });
    });

$(document).ready(function(){
      $('.images').slick({
        // autoplay: true,
        dots: true,
        infinite: true,
        pauseOnHOver: false,
        speed: 500,
        arrows: true,
        cssEase: 'linear',
        mobileFirst: true
      });
    });
