$('.sliderbox').slick({
    dots: true,
    infinite: false,
    speed: 300,
    nextArrow: ".next",
    prevArrow: ".prev",
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0%',
    autoplay: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // autoplay: true,
                autoplaySpeed: 2000,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

let navitem = document.querySelector(".navitems");
let menuicon = document.querySelector(".menubox");

menuicon.addEventListener("click", function () {
    navitem.classList.toggle("show")
})