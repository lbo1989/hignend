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

    $('.j_body>div').mouseover(function () {
        $(this).children().children().css('opacity', '1');
        $('.j').not(this).children().children().css('opacity', '0.4');
    });
        $('.j_body>div').mouseout(function () {
        $('.j').children().children().css('opacity', '1');
        });
});
