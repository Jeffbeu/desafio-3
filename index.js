
$(window).on('load', function(){
"use strict";

$(window).on('scroll', function() {
    if($(this).scrollTop() > 450) {
        $('.navbar-fixed-top').addClass('opaque');
    } else {
        $('.navbar-fixed-top').removeClass('opaque');
    }
});

// Navigation Background Color 

$(".navbar-nav li a").on('click', function(event) {
    $(".navbar-collapse").collapse('hide');
  });
  $('.navbar-nav').onePageNav({
    filter: ':not(.external)'
});
$('.popup-gallery').find('a.popup1').magnificPopup({
    type: 'image',
    gallery: {
      enabled:true
    }
}); 

$('.popup-gallery').find('a.popup2').magnificPopup({
    type: 'image',
    gallery: {
      enabled:true
    }
}); 

$('.popup-gallery').find('a.popup3').magnificPopup({
    type: 'image',
    gallery: {
      enabled:true
    }
}); 

$('.popup-gallery').find('a.popup4').magnificPopup({
    type: 'iframe',
    gallery: {
      enabled:false
    }
});  

});
