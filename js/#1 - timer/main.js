function time_counter(){

    var today = new Date();

    var day = today.getDate();
    var month = today.getMonth()+1;
    var year = today.getFullYear();
    
    var hour = today.getHours();
    if(hour<10)
        godzina = "0" + hour;

    var minutes = today.getMinutes();
    if(minutes<10)
        minutes = "0" + minutes;

    var seconds = today.getSeconds();
    if(seconds<10)
        seconds = "0" + seconds;

    document.getElementById("timer").innerHTML = hour + ":" + minutes + ":" + seconds + " " + day + "/" + month + "/" + year;
    setTimeout("time_counter()", 1000);
}