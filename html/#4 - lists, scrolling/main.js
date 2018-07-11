$(function(){ 

    function my_scroll(id){
        $('html, body').animate({scrollTop: $(''+id).offset().top});
    };

    $('#link1').click(function(){
        my_scroll("#para1");
    });

    $('#up').click(function(e){
        e.preventDefault();
        my_scroll("#logo");
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>300)
            $('#scrollUp').fadeIn();
        else
            $('#scrollUp').fadeOut();   
    });

});

