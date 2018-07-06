function show_numbers(){
    var num1 = document.getElementById("first_input").value;
    var num2 = document.getElementById("second_input").value;

    var number1=Number(num1);
    var number2=Number(num2);
    if(Number.isInteger(number1)==false || Number.isInteger(number2)==false){
        document.getElementById("result").innerHTML="Bad input format";
    }
    else if(number1>number2){
        document.getElementById("result").innerHTML="Num2 should not be greater than num1";
    }
    else{
        var result="";
        var i;
        for(i=number1; i<=number2; i++){
            result = result + " " + i;
        }
    
        document.getElementById("result").innerHTML=result;
    }
}