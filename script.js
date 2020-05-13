let countdownTime = 1500000;

function upTime() {
    countdownTime += 60000;

    var minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);

    seconds = seconds.toString().padStart(2, '0');

    document.getElementById("timer").innerHTML = minutes + ":" + seconds;
}

function downTime() {
    countdownTime -= 60000;
    
    var minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);

    seconds = seconds.toString().padStart(2, '0');

    document.getElementById("timer").innerHTML = minutes + ":" + seconds;
}

function myFunc() {
    var minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);

    seconds = seconds.toString().padStart(2, '0');

    document.getElementById("timer").innerHTML = minutes + ":" + seconds;

    countdownTime -= 1000;

    if (countdownTime < 0) {
        clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
    }
}