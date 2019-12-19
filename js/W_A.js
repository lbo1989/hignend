        $(document).ready(function(){
            $('.mv_g img').on('mouseenter',function(){
                $('.mv_l').css({
                    'transform':'scale(0.7)'
                    ,'transition-duration':'0.6s'
                });
            });
            $('.mv_g').on('mouseout',function(){
                $('.mv_l').css('transform','scale(1.0)')
            });

            $('.mv_l img').on('mouseenter',function(){
                $('.mv_g').css({
                    'transform':'scale(0.7)'
                    ,'transition-duration':'0.6s'
                });
            });
            $('.mv_l').on('mouseout',function(){
                $('.mv_g').css('transform','scale(1.0)')
            });
        });
