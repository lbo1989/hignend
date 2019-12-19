$(document).ready(function () {
    let width = $('body').width();
    console.log(width);
    if (width < 768) {
        $('.slider').bxSlider({
            slideWidth: 300
        });
        $('#link').html("<br>");
    } else {
        $('.slider').bxSlider({
            slideWidth: 500
        });
    }
});
