document.write(0.1*5);
document.write("</br>");
document.write(0.15*3);
document.write("</br>");
document.write(0.1+0.2);
document.write("</br>");
document.write("</br>");
document.write(Math.pow(2, 53)+1);
document.write("</br>");
document.write(Math.pow(2, 53));
document.write("</br>");
document.write(Math.pow(2, 53)+2);
document.write("</br>");
document.write(Math.pow(2, 53)*2);
document.write("</br>");
document.write("</br>");

if(0.1+0.2==0.3)
    document.write("true");
else
    document.write("false");

document.write("</br>");
var x= Math.round((0.1+0.2)*10)/10;
document.write(x);
document.write("</br>");

x=0.15*3;
x=x.toFixed(3);
document.write(x);
document.write("</br>");

x=1.005;
x=x.toFixed(2);
document.write(x);
document.write("<br/>");

Number.prototype.round= function(number){
    return + (Math.round(this+"e+"+number) + "e-"+number);
}

x=1.005;
x=x.round(2);
document.write(x);
document.write("<br/>");