$(document).ready(function(){

    $('.LastAdedProfileCourousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },

            400:{
                items:2
            },

            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })


});





$(document).ready(function(){

    $('.LatestNews-Courousel').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

});