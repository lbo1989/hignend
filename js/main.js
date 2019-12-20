$(document).ready(function () {
    var visual = $('#brandVisual > ul > li');
    var button = $('#buttonList > li');

    var current = 0;
    var setIntervalId;

    button.on({
        click: function () {
            var tg = $(this);
            var i = tg.index();

            button.removeClass('on');
            tg.addClass('on');
            move(i);
        }
    });

    /**/
    $('#wrap').on({
        mouseover: function () {
            clearInterval(setIntervalId);
        },
        mouseout: function () {
            timer();
        }
    });

    timer();

    function timer() {
        setIntervalId = setInterval(function () {
            var n = current + 1;

            if (n == visual.length) {
                n = 0;
            }
            button.eq(n).trigger('click');
        }, 3000);

    }

    function move(i) {
        if (current == i) return;

        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);

        currentEl.css({
            left: 0
        }).stop().animate({
            left: '-100%'
        });
        nextEl.css({
            left: '100%'
        }).stop().animate({
            left: 0
        });
        current = i;
    }

    $('#ear').click(function () {
        $.ajax({
            url: 'main_pro_ear.html',
            success: function (data) {
                $('#main_imgbox').html(data);
            }
        });
        $('.main_pro_titli').css('background-color', 'white');
        $(this).css('background-color', '#ececec');
    });
    $('#neck').click(function () {
        $.ajax({
            url: 'main_pro_neck.html',
            success: function (data) {
                $('#main_imgbox').html(data);
            }
        });

        $('.main_pro_titli').css('background-color', 'white');
        $(this).css('background-color', '#ececec');
    });
    $('#ring').click(function () {
        $.ajax({
            url: 'main_pro_ring.html',
            success: function (data) {
                $('#main_imgbox').html(data);
            }
        });

        $('.main_pro_titli').css('background-color', 'white');
        $(this).css('background-color', '#ececec');
    });

});
