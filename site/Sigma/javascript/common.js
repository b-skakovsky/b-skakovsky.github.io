$('.carousel-room').owlCarousel({
    slideBy: 1,
    margin:20,
    dots: false,
    navText: ["<img src='img/slider-btn.png'>", "<img src='img/slider-btn-right.png'>"],
    nav:true,
    checkVisible: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items: 2
        },
        992:{
            items:3
        },
        1200:{
            items:3
        },
        1200:{
            items:4   
        }
    }
})
$('.carousel-coment').owlCarousel({
    slideBy: 1,
    margin:30,
    dots: false,
    navText: ["<img src='img/slider-btn.png'>", "<img src='img/slider-btn-right.png'>"],
    nav:true,
    checkVisible: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items: 2
        },
        992:{
            items:3
        },
        1200:{
            items:3
        },
        1200:{
            items:4   
        }
    }
})