 $(document).ready(function () {

     $.ajax({
         url: 'footer.html',
         success: function (data) {
             $('#footer').html(data);
         }
     });
     $.ajax({
         url: 'header.html',
         success: function (data) {
             $('#header').html(data);

             $(function () {
                 var gnbLi = $("#gnb");
                 var ul = $("#gnb>li>ul");
                 var headerMin = $("#headerWrap").height();
                 var headerMax = ul.innerHeight() + headerMin * 1.5;
                 var state = false;
                 var speed = 200;
                 gnbLi.on("mouseenter keyup", function () {
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
                 gnbLi.mouseleave(function () {
                     $(this).find("ul").removeClass("on");
                 });
                 $("#headerBox").mouseleave(function () {
                     ul.stop().fadeOut(speed, function () {
                         $("#headerWrap").stop().animate({
                             height: headerMin
                         }, speed);
                     });
                     state = false;
                 });
                 $("#headerBox .close").focus(function () {
                     ul.stop().fadeOut(speed, function () {
                         $("#headerWrap").stop().animate({
                             height: headerMin
                         }, speed);
                     });
                     state = false;
                 });
             });

             /*테블릿모바일*/
                //메뉴
             $('#menuIcon').click(function(){
                 $('.menuT').slideToggle({
                   'duration':1000
                   ,'essing':'easeInOutOuart'
                   ,'complete':function(){
                   }
               });
             });

             $('.menuT_tt').on('click', function () {
                var content = $(this).siblings('.menuT_tt_sub');
                if (content.css('display') == 'none') {
                    $('.menuT_tt_sub').slideUp();
                    content.slideDown();
                } else {
                    content.slideUp();
                }
            });



         }
     });

 });
