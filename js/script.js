$(function () {
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