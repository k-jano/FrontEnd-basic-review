var password = "This is the end";
password=password.toUpperCase();

var copy_length = password.length;
var password_copy = "";

var wrong_letters=0;

var yes= new Audio("audio/yes.wav");
var no= new Audio("audio/no.wav");

for(i=0; i<copy_length; i++){
    if(password.charAt(i)==" ")
        password_copy=password_copy+" "
    else
        password_copy=password_copy+"-";
}

function password_update(){
    document.getElementById("password").innerHTML= password_copy;
}

function keyboard_show(){
    var content = "";

    var tmp = 'A';

    for(i=0; i<26; i++){
        var local_div= '<div onclick="check_value(' + i + ')" id="let' + i + '" class="letter">' + tmp + '</div>';
        tmp=String.fromCharCode(tmp.charCodeAt(0)+1);
        content= content+ local_div;
        if((i+1)%6==0)
            content=content + '<div style="clear:both"></div>';
    }

    document.getElementById("keyboard_in").innerHTML= content;

    password_update();
}

String.prototype.changeSign = function(position, sign){
    if(position < this.length && position > -1){
        return this.substr(0, position) + sign + this.substr(position+1);
    }
    return this.toString();
}

function check_value(nr){
    var flag=0;
    var tmp='A';
    for(i=0; i<nr; i++)
        tmp=String.fromCharCode(tmp.charCodeAt(0)+1);
    
    for(i=0; i<copy_length; i++){
        if(password.charAt(i)==tmp){
            password_copy = password_copy.changeSign(i, tmp);
            flag=1;
        }
    }

    var tmp2="let"+nr;
    if(flag==1){
        document.getElementById(tmp2).style.border="2px solid greenyellow";
        document.getElementById(tmp2).style.cursor="default";
        document.getElementById(tmp2).style.color="greenyellow";
        document.getElementById(tmp2).setAttribute("onclick",";");
        password_update();
        yes.play();
    }
    
    else{
        document.getElementById(tmp2).style.border="2px solid red";
        document.getElementById(tmp2).style.cursor="default";
        document.getElementById(tmp2).style.color="red";
        document.getElementById(tmp2).setAttribute("onclick",";");
        wrong_letters++;
        
        var my_draw="img/s"+wrong_letters+".jpg";
        document.getElementById("draw").innerHTML='<img src="' + my_draw + '" />';
        no.play();
    }

    if(password_copy==password)
        document.getElementById("keyboard").innerHTML='You won! </br></br><span class="reset" onclick="location.reload()">Once again?</span>';

    if(wrong_letters>=9)
        document.getElementById("keyboard").innerHTML='You lost! </br></br><span class="reset2" onclick="location.reload()">Once again?</span>';

}

window.onload=keyboard_show;