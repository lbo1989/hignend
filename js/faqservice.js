$(document).ready(function () {
    $('#accordion .subject').on('click', function () {
        var content = $(this).siblings('.content');
        if (content.css('display') == 'none') {
            $('#accordion .content').slideUp();
            content.slideDown();
        } else {
            content.slideUp();
        }
    });

    $('#wrap>div').mouseover(function () {
        $(this).children().children().css('opacity', '1');
        $('.j').not(this).children().children().css('opacity', '0.4');
    });
        $('#wrap>div').mouseout(function () {
        $('.j').children().children().css('opacity', '1');
        });
});
