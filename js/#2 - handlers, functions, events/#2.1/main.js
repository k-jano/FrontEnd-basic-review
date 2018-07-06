function check_sign(){ 
    var number=document.getElementById("input").value;

    if(number<0){
        document.getElementById("result").innerHTML="Lower than 0";
    }
    else if(number=="0"){
        document.getElementById("result").innerHTML="Equal to 0";
    }
    else if(number>0){
        document.getElementById("result").innerHTML="Greater than 0";
    }
    else{
        document.getElementById("result").innerHTML="Bad input value";
    }
}