$(document).foundation();
$(document).ready(function(){
    // News slider
    $('.my-slider_news').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: "<button type=\"button\" class=\"slick-next\"><img class=\"slider_arrow-img\" src=\"../../assets/img/slick/arrow-next.png\"><img class=\"slider_arrow-img slider_arrow-img--hover\" src=\"../../assets/img/slick/arrow-next--hover.png\"></button>",
        prevArrow: "<button type=\"button\" class=\"slick-prev\"><img class=\"slider_arrow-img\" src=\"../../assets/img/slick/arrow-prev.png\"><img class=\"slider_arrow-img slider_arrow-img--hover\" src=\"../../assets/img/slick/arrow-prev--hover.png\"></button>"
    });

    // Publications
    $('#publications-label').on('click', function() {
        $('.my-slider_publication').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
            nextArrow: "<button type=\"button\" class=\"slick-next\"><img class=\"slider_arrow-img\" src=\"../../assets/img/slick/arrow-next.png\"><img class=\"slider_arrow-img slider_arrow-img--hover\" src=\"../../assets/img/slick/arrow-next--hover.png\"></button>",
            prevArrow: "<button type=\"button\" class=\"slick-prev\"><img class=\"slider_arrow-img\" src=\"../../assets/img/slick/arrow-prev.png\"><img class=\"slider_arrow-img slider_arrow-img--hover\" src=\"../../assets/img/slick/arrow-prev--hover.png\"></button>"
        });
    });


    // Product slider
    $('.my-slider_product').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ],
        nextArrow: "<button type=\"button\" class=\"slick-next\"><img class=\"slider_arrow-img\" src=\"../../assets/img/slick/arrow-next.png\"><img class=\"slider_arrow-img slider_arrow-img--hover\" src=\"../../assets/img/slick/arrow-next--hover.png\"></button>",
        prevArrow: "<button type=\"button\" class=\"slick-prev\"><img class=\"slider_arrow-img\" src=\"../../assets/img/slick/arrow-prev.png\"><img class=\"slider_arrow-img slider_arrow-img--hover\" src=\"../../assets/img/slick/arrow-prev--hover.png\"></button>"
    });

    // Partners slider
    $('.my-slider_partners').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: "<button type=\"button\" class=\"slick-next\"><img class=\"slider_arrow-img\" src=\"../../assets/img/slick/right-arrow.png\"><img class=\"slider_arrow-img slider_arrow-img--hover\" src=\"../../assets/img/slick/right-arrow--hover.png\"></button>",
        prevArrow: "<button type=\"button\" class=\"slick-prev\"><img class=\"slider_arrow-img\" src=\"../../assets/img/slick/left-arrow.png\"><img class=\"slider_arrow-img slider_arrow-img--hover\" src=\"../../assets/img/slick/left-arrow--hover.png\"></button>"
    });
});