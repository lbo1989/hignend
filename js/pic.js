$(document).ready(function(){
  /*$('.mainvideo').offset({top : 0, left:30});*/

        var b = $('body').width();
        console.log(b);
       if(b<768){
           $('.mainvideo>video').offset({top : 100 ,left : -470});
       }

});
