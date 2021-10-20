$(document).ready(function(){
    
    //gotop
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $('.gotop').fadeIn();
        } else {
            $('.gotop').fadeOut();
        }
    });
    
    $('.gotop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });

    //scroll trigger
    $(window).scroll(function(){
        $('.ani-stop').each(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * 0.3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('ani-stop');
             }
            if (bottom_of_window < bottom_of_object) {
                $(this).addClass('ani-stop');
            }
        });
    });
      
});