/*$(function () {

    $.ajax({
         url: 'header.html',
         success: function (data) {
            $('#header').html(data);


    console.log("header------------");
    var gnbLi = $("#gnb>li");
    var ul = $("#gnb>li>ul");
    var headerMin = $("#headerWrap").height();
    var headerMax = ul.innerHeight() + headerMin;
    var state = false;
    var speed = 150;
    console.log(gnbLi,"test");
    $('body').on("mouseenter keyup", gnbLi, function () {

        if (!state) {
            $("#headerWrap").stop().animate({
                height: headerMax
            }, speed, function () {
                ul.stop().fadeIn(speed);
            });
            state = true;
        }
        ul.removeClass("on");
        $(this).find("ul").addClass("on");
    });
    $('#header').on(gnbLi, function () {
        $(this).find("ul").removeClass("on");
    });
    $("#headerBox").mouseleave(function () {
        ul.stop().fadeOut(speed, function () {
            $("#headerWrap").stop().animate({
                height: headerMin
            }, speed);
        });
        state = false;
    });*/
   /* $("#header .close").focus(function () {
        ul.stop().fadeOut(speed, function () {
            $("#headerWrap").stop().animate({
                height: headerMin
            }, speed);
        });
        state = false;
    });*/

/*
         }
     });


});*/
