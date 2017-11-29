$(function () {
    new WOW().init();

    $('.section4').parallax({imageSrc: '../img/bg.png'});
    $('.section8').parallax({imageSrc: '../img/bg2.png'});

    $(".owl-carousel").owlCarousel({
        nav: true,
        navText: [$('.carousel-left'), $('.carousel-right')],
        items: 2,
        margin: 30,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            426: {
                items: 2
            }
        }
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


    //скролл с фиксированной шапкой

    $(".navbar").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top - 90;
        if (id=='#how-to-earn') top+=120;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 800);
    });

    // $('a').on('click', function () {
    //     if (this.hash) $(document).data('h', 1);
    // });
    // $(document).scroll(function () {
    //     if ($(this).data('h')) $(this).data('h', 0).scrollTop($(this).scrollTop() - 90);
    // });
});