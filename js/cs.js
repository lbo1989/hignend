$(document).ready(function(){
   $('#csbtn').on('click',function(){
       $('.csjoin').show();
   });
   $('#backpg').on('click',function(){
       $('.csjoin').hide();
   });

   $('.bgtitle').on('mouseover',function(){
       $(this).css('color','pink');
   });
    $('.bgtitle').on('mouseout',function(){
        $(this).css('color','black');
    });
});
