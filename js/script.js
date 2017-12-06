$(function () {
    // 360/375
    if($(window).width() <= '425'){
        $('.our-advantages div.col-md-5').removeClass('wow zoomInLeft zoomInRight');
        $('.our-advantages .advantage-block').addClass('wow bounceIn');
        // $('header').removeClass('navbar-fixed-top');
    }

    $('.requisites').magnificPopup({
        type: 'inline'
    });

    new WOW().init();

    $('.how-to-return').parallax({imageSrc: '../images/landing/bg.png'});
    $('.section8').parallax({imageSrc: '../images/landing/bg2.png'});

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
            768: {
                items: 2
            }
        }
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
        max: 3000,
        min: 0,
        step: 50,
        value: 1500,
        change: function (event, ui) {
            $('#sliderSum-input').val(ui.value);
        },
        slide: function (event, ui) {
            $('#sliderSum-input').val(ui.value);
        }
    });

    $('#sliderSum').draggable();

    $('#sliderSum-input').change(function () {
        // $('#sliderSum-input').change(function () {
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
        var id = $(this).attr('href'),
            top = $(id).offset().top - 70;
        if (id == '#how-to-earn') top += 120;
        $('body,html').animate({scrollTop: top}, 800);
    });

    //Кнопка «Вверх»
    var offset = 450;
    var duration = 500;
    var upToTop = $("#up-to-top");
    var $HEADER = $('header');
    upToTop.hide();
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            upToTop.fadeIn(duration);
            $HEADER.addClass('scrolling');
            $HEADER.find('.logo').attr('src', 'images/landing/favicon_only_logo.png');
        } else {
            upToTop.fadeOut(duration);
            $HEADER.removeClass('scrolling');
            $HEADER.find('.logo').attr('src', 'images/landing/favicon.png');
        }
    });

    upToTop.on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
});