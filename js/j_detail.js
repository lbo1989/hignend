$(document).ready(function () {
    let width = $('body').width();
    console.log(width);
    if(width <1024){
        $('#link').html("<br>");
    }
    if (width < 768) {
        $('.slider').bxSlider({
            slideWidth: 300
        });
    } else {
        $('.slider').bxSlider({
            slideWidth: 500
        });
    }
});
