$(document).ready(function () {
    var main = $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true, //자동으로 슬라이드
        controls: true, //좌우 화살표
        autoControls: true, //stop,play
        pager: true, //페이징
        pause: 3000,
        autoDelay: 0,
        slideWidth: 800,
        speed: 500,
        stopAutoOnclick: true
    });

    $(".bx-stop").click(function () { // 중지버튼 눌렀을때
        main.stopAuto();
        $(".bx-stop").hide();
        $(".bx-start").show();
        return false;
    });

    $(".bx-start").click(function () { //시작버튼 눌렀을때
        main.startAuto();
        $(".bx-start").hide();
        $(".bx-stop").show();
        return false;
    });

    $(".bx-start").hide(); //onload시 시작버튼 숨김.


    //배경 픽스 시작
    $('#backpg').on('click', function () {
        $('.csjoin').hide();
    });

    $('.bgtitle').on('mouseover', function () {
        $(this).css('color', 'pink');
    });
    $('.bgtitle').on('mouseout', function () {
        $(this).css('color', 'black');
    });
});
