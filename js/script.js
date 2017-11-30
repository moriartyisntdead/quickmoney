$(function () {
    new WOW().init();

    $('.section4').parallax({imageSrc: '../img/bg.png'});
    $('.section8').parallax({imageSrc: '../img/bg2.png'});

    var countCarouselItem = $(".owl-carousel .item").length;
    //var longLineWidth = parseInt($(".section5 .long-line").css('width'));
    //var shortLineWidth = longLineWidth/Math.round(countCarouselItem/2);
    //var $shortLine = $(".section5 .short-line");
    //$shortLine.css('width', shortLineWidth+'px');
    $(".owl-carousel").owlCarousel({
        nav: true,
        navText: [$('.carousel-left'), $('.carousel-right')],
        items: 2,
        margin: 30,
        dots: true,
        slideBy: 2,
        startPosition: Math.round(countCarouselItem / 2) - 1,
        responsive: {
            0: {
                items: 1
            },
            426: {
                items: 2
            }
        },
        //onTranslate: function(e){
        //    var ml = 300+(longLineWidth/countCarouselItem*(e.item.index));
        //    $shortLine.animate({
        //        'margin-left': ml+'px'
        //    }, 300);
        //}
    });


    $('#sliderSum').slider({
        orientation: "horizontal",
        range: "min",
        max: 1000,
        min: 0,
        step: 50,
        value: 500,
        change: function (event, ui) {
            $('#sliderSum-input').val(ui.value);
        },
        slide: function (event, ui) {
            $('#sliderSum-input').html(ui.value);
        }
    });

    $('#sliderSum').draggable();

    $('#sliderSum-input').change(function () {
        var sliderName = $(this).prop('id');
        sliderName = sliderName.substr(0, sliderName.length - 6);
        $('#' + sliderName).slider({
            value: $(this).val()
        });
    });

    $('.sliderControlButton').click(function () {
        var type = $(this).data('type');
        var sliderId = $(this).data('slider');
        var slider = $('#' + sliderId);
        var current = slider.slider("option", "value");
        var step = slider.slider("option", "step");
        slider.find('.ui-slider-handle').css('transition', 'all 1s');
        if (type == "minus") slider.slider("value", current - step);
        else if (type == "plus") slider.slider("value", current + step);
        setTimeout(function () {
            slider.find('.ui-slider-handle').css('transition', 'none');
        }, 600);
    });


    //Скролл с фиксированной шапкой
    $(".navbar").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 90;
        if (id == '#how-to-earn') top += 120;
        $('body,html').animate({scrollTop: top}, 800);
    });

    // $('a').on('click', function () {
    //     if (this.hash) $(document).data('h', 1);
    // });
    // $(document).scroll(function () {
    //     if ($(this).data('h')) $(this).data('h', 0).scrollTop($(this).scrollTop() - 90);
    // });


    //Кнопка «Вверх»
    var offset = 450;
    var duration = 500;
    var upToTop = $("#up-to-top");
    upToTop.hide();
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            upToTop.fadeIn(duration);
        } else {
            upToTop.fadeOut(duration);
        }
    });

    upToTop.on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });

    var docElem = document.documentElement, didScroll = false, changeHeaderOn = 300;
    function headerScroll() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout(function () {
                    var sy = scrollY();
                    var $NAV = $('nav');
                    if ( sy >= changeHeaderOn ) {
                        $NAV.addClass('scrolling');
                        $NAV.find('.logo').attr('src', 'img/favicon_only_logo.png');
                    }
                    else {
                        $NAV.removeClass('scrolling');
                        $NAV.find('.logo').attr('src', 'img/favicon.png');
                    }
                    didScroll = false;
                    }, 250 );
            }
        }, false );
    }
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    headerScroll();
});