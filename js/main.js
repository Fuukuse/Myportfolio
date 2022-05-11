$('.owl-carousel').owlCarousel({
    center:true,
    items:2,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
var typed = new Typed('.element', {
    strings: ["Portfolio!"],
 typeSpeed:50,
 backSpeed:50,
 loop:true,
 });
