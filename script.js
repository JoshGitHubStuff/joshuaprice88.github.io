var finalCountDown = new Date("March 24, 2019 23:59:00").getTime();

var count = setInterval(function () {
    
    var today = new Date().getTime();

    var difference = finalCountDown - today;

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    //Show output of finalCountDown
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (difference < 0) {
        clearInterval(count);
        document.getElementById("timer").innerHTML = "You Are Late!";
    }
}, 1000);