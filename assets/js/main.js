$(document).ready(function () {

    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
    
    //Typed
var options = {
    strings: ['Problem.','Wants','Issue.'],
    typeSpeed: 100,
    backSpeed:100,
    loop: true,
};
var typed = new Typed('#banner-typed', options);

});


//Counter 
$(document).ready(function () {
    $('.counter').countUp();
});


$(document).ready(function () {
    $('.portfolio-carousel').owlCarousel({
        loop:true,
        margin:20,
        dots: false,
        nav:true,
        navText: ["<div class='fas fa-angle-left'></div>","<div class='fas fa-angle-right'></div>"],

        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            768:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
});





$(document).ready(function () {
    $('.team-carousel').owlCarousel({
        loop:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })
});


$(document).ready(function(){
    
    $('.carousel').carousel({
        interval: 2000
    })

    $('.carousel').on('slid.bs.carousel', function() {
        $(".carousel-indicators2 li").removeClass("active");
        indicators = $(".carousel-indicators li.active").data("slide-to");
        a = $(".carousel-indicators2").find("[data-slide-to='" + indicators + "']").addClass("active");
        console.log(indicators);
      
      })


});


$(function () {
    var anchorScroll = $(document).AnchorScroll({
        center: 1,
        speed: 5000,
        offset: 20,
        easing:"linear",
        target:'a[href^="#"]'
    });
  });

