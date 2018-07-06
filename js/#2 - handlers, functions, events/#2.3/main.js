var number=Math.floor(Math.random()*5)+1;

var timer1 = 0;
var timer2 = 0;
function hide(){
    $("#slider").fadeOut(500);
}

function change_photo(){
    number+=1;
    if(number>5)
        number=1;
    
    var file="<img src=\"img/slide" + number + ".jpg\"/>"

    document.getElementById("slider").innerHTML=file;
    $("#slider").fadeIn(500);

    timer1=setTimeout("change_photo()", 5000);
    timer2=setTimeout("hide()", 4500);
}

function set_slide(slide_number){
    clearTimeout(timer1);
    clearTimeout(timer2);

    hide();
    number=slide_number-1;
    setTimeout("change_photo()", 500);
}