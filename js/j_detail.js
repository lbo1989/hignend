$(document).ready(function () {
    let width = $('body').width();
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

    $('input[type=button]').click(function(){
        alert('로그인이 필요합니다');
    });
});
