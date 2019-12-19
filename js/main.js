$(document).ready(function(){
	var visual = $('#brandVisual > ul > li');
	var button = $('#buttonList > li');

	var current = 0;
	var setIntervalId ;

	button.on({click:function(){
				var tg = $(this);
				var i = tg.index();

				button.removeClass('on');
				tg.addClass('on');
				move(i);
				}
			});

/**/	$('#wrap').on({
					mouseover:function(){
						clearInterval(setIntervalId);
				    },
					mouseout:function(){
						timer();
					}
			   });

	timer();

	function timer(){
		setIntervalId = setInterval(function(){
			var n = current + 1 ;
			if ( n == visual.size()){
					n = 0;
			}
			button.eq(n).trigger('click');
		}, 3000);

	}

	function move(i){
		if(current == i) return ;

		var currentEl = visual.eq(current);
		var nextEl = visual.eq(i);

		currentEl.css({left:0}).stop().animate({left:'-100%'});
		nextEl.css({left:'100%'}).stop().animate({left:0});
		current = i ;
	}
    /*now*/
    // Fadeing out displayed paragraphs
    /*$(".newEvent_img").hover(function(){
        $("p").fadeOut();
    });

    // Fading in hidden paragraphs
    $(".in-btn").hover(function(){
        $("p").fadeIn();
    });*/

    /*new부분*/
/*     $("#now_mouseOne").on('click', function(){
        $("#now_mouse_copyOne").slideToggle();
     });
    $("#now_mouseTwo").on('click', function(){
        $("#now_mouse_copyTwo").slideToggle();
     });*/

   /* $("#now_mouse").on('mouseenter', function(){
        $("#now_mouse_copy").slideToggle("slow").delay(200);
    });*/
    /*$("#now_mouse").hover(function(){
        $("#now_mouse_copy").slideToggle();
    });*/


   /* $("#now_mouse").on('mouseout', function(){
        $("#now_mouse_copy").slideDown();
    });*/
    /*$("#now_mouse").on('mouseleave', function(){
        $("#now_mouse_copy").slideUp("slow");
    });*/
    /*$("#now_mouse").hover(function () {
    $("#now_mouse_copy").slideToggle("slow");*/

});

















