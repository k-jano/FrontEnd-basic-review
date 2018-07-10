$(function(){ 

    function my_scroll(id){
        $('html, body').animate({scrollTop: $(''+id).offset().top});
    };

    $('#link1').click(function(){
        my_scroll("#para1");
    });
});