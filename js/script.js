$(function () {
    new WOW().init();

    $('.section4').parallax({imageSrc: '../img/bg.png'});
    $('.section8').parallax({imageSrc: '../img/bg2.png'});

    $(".owl-carousel").owlCarousel({
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        items: 2,
        responsive: {
            0: {
                items: 1
            },
            426: {
                items: 2
            }
        }
    });

    //[$('.am-next'),$('.am-prev')]

    $('.toggle-cities, .question-title').click(function () {
        setTimeout(function () {
            $(window).trigger('resize');
        }, 500);
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
});