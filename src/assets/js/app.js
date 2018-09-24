$(document).foundation();
const newsSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    accessibility: false,
    draggable: false,
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
    nextArrow: "<button type=\"button\" class=\"slick-next\"><img class=\"slider_arrow-img\" src=\"assets/img/slick/arrow-next.png\"><img class=\"slider_arrow-img slider_arrow-img--hover\" src=\"assets/img/slick/arrow-next--hover.png\"></button>",
    prevArrow: "<button type=\"button\" class=\"slick-prev\"><img class=\"slider_arrow-img\" src=\"assets/img/slick/arrow-prev.png\"><img class=\"slider_arrow-img slider_arrow-img--hover\" src=\"assets/img/slick/arrow-prev--hover.png\"></button>"
};

const mainSliderSettings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    accessibility: false,
    draggable: false,
};

const productsSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    accessibility: false,
    draggable: false,
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
    nextArrow: "<button type=\"button\" class=\"slick-next\"><img class=\"slider_arrow-img\" src=\"assets/img/slick/arrow-next.png\"><img class=\"slider_arrow-img slider_arrow-img--hover\" src=\"assets/img/slick/arrow-next--hover.png\"></button>",
    prevArrow: "<button type=\"button\" class=\"slick-prev\"><img class=\"slider_arrow-img\" src=\"assets/img/slick/arrow-prev.png\"><img class=\"slider_arrow-img slider_arrow-img--hover\" src=\"assets/img/slick/arrow-prev--hover.png\"></button>"
};

const partnersSlider = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    accessibility: false,
    draggable: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ],
    nextArrow: "<button type=\"button\" class=\"slick-next\"><img class=\"slider_arrow-img\" src=\"assets/img/slick/right-arrow.png\"><img class=\"slider_arrow-img slider_arrow-img--hover\" src=\"assets/img/slick/right-arrow--hover.png\"></button>",
    prevArrow: "<button type=\"button\" class=\"slick-prev\"><img class=\"slider_arrow-img\" src=\"assets/img/slick/left-arrow.png\"><img class=\"slider_arrow-img slider_arrow-img--hover\" src=\"assets/img/slick/left-arrow--hover.png\"></button>"
};

const productColorsSlider = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  accessibility: false,
  draggable: false,
  nextArrow: "<button type=\"button\" class=\"slick-next\"><img class=\"slider_arrow-img\" src=\"assets/img/slick/right-arrow--sm.png\"><img class=\"slider_arrow-img slider_arrow-img--hover\" src=\"assets/img/slick/right-arrow-hover--sm.png\"></button>",
  prevArrow: "<button type=\"button\" class=\"slick-prev\"><img class=\"slider_arrow-img\" src=\"assets/img/slick/left-arrow--sm.png\"><img class=\"slider_arrow-img slider_arrow-img--hover\" src=\"assets/img/slick/left-arrow-hover--sm.png\"></button>"
};

(function ($) {
    $(function () {
        // News slider
        const newsSlider = function () {
            $('#news-label').addClass('isActive').siblings().removeClass('isActive');
            $('#publications').hide();
            $('#news').show();
            $('.my-slider_news').slick(newsSettings);
        };

        const publicationsSlider = function () {
            $('#publications-label').addClass('isActive').siblings().removeClass('isActive');
            $('#news').hide();
            $('#publications').show();
            $('.my-slider_publication').slick(newsSettings);
        };

        newsSlider();

        // Publications
        $('#publications-label').on('click', function () {
            publicationsSlider();
        });

        $('#news-label').on('click', function () {
            newsSlider();
        });


        // Main slider
        $('.my-slider_main').slick(mainSliderSettings);

        // Product slider
        $('.my-slider_product').slick(productsSettings);

        // Partners slider
        $('.my-slider_partners').slick(partnersSlider);

        // Product colors slider
        $('.my-slider_product-colors').slick(productColorsSlider);
    });

    let dataFstPrice,
        dataSecPrice,
        textFstPrice = $('#fstVal'),
        textSecPrice = $('#secVal');
    function setText() {
        dataFstPrice = ($('#sliderOutput1').attr('aria-valuenow'));
        dataSecPrice = ($('#sliderOutput2').attr('aria-valuenow'));
        textFstPrice.text(dataFstPrice);
        textSecPrice.text(dataSecPrice);
    }
    setText();
    //$('#sliderOutput1, #sliderOutput2').on('mousemove', setText);

    $('#sliderOutput1, #sliderOutput2').on("mousedown", _ =>
        $(document)
            .on("mousemove", setText)
            .one("mouseup", () => $(document).off("mousemove", setText))
    );

})(jQuery);

(function() {
  const popupCloseBtn = document.querySelector('.closeCallPopup');
  const callbackBtns = document.querySelectorAll('.callback-btn');
  const popupElem = document.querySelector('.callbackPopupWrapper');

  function togglePopup() {
    popupElem.classList.toggle('hide');
  }
  callbackBtns.forEach((item) => {
    item.addEventListener('click', togglePopup);
  });
  popupCloseBtn.addEventListener('click', togglePopup);

})();

(function () {
  const popupCloseBtn = document.querySelector('.closeFeedback');
  const feedbackPopup = document.querySelector('.feedbackPopupWrapper');
  const feedbackBtn = document.querySelector('.feedBack');
  if(!feedbackPopup) return;

  function togglePopup() {
    feedbackPopup.classList.toggle('hide');
  }

  feedbackBtn.addEventListener('click', togglePopup);
  popupCloseBtn.addEventListener('click', togglePopup);
})();

