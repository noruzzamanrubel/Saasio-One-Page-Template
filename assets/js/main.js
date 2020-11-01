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
        margin:20,
        dots: false,
        nav: true,
        loop:true,
        center:true,
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
                items:3
            }
        }
    })
});


$(document).ready(function(){
    
    $('.carousel').carousel()

});

