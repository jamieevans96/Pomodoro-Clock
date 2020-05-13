var countdownTime = 1500000

function myFunc() {
    var minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";

    countdownTime -= 1000;

    if (countdownTime < 0) {
        clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
    }
}