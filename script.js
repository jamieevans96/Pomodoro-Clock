let countdownTime = 1500000;
let countdownBreak = 300000;
let countdownTemp;
let countdownTemp2;

function upTime() {
    if (countdownTime >= 3540000) {
        return;
      }
    else {
        countdownTime += 60000;
        var minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);
        seconds = seconds.toString().padStart(2, '0');
        document.getElementById("timer").innerHTML = minutes + ":" + seconds;
    }
    countdownTemp = countdownTime;
}

function downTime() {
    if (countdownTime <= 60000) {
        return;
    }
    else {
        countdownTime -= 60000;
        var minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);
        seconds = seconds.toString().padStart(2, '0');
        document.getElementById("timer").innerHTML = minutes + ":" + seconds;
    }
    countdownTemp = countdownTime;
}

function upBreak() {
    if (countdownBreak >= 900000) {
        return;
    }
    else {
        countdownBreak += 60000;
        var minutes = Math.floor((countdownBreak % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((countdownBreak % (1000 * 60)) / 1000);
        seconds = seconds.toString().padStart(2, '0');
        document.getElementById("break").innerHTML = minutes + ":" + seconds;
    }
    countdownTemp2 = countdownBreak;
}

function downBreak() {
    if (countdownBreak <= 60000) {
        return;
    }
    else {
        countdownBreak -= 60000;
        var minutes = Math.floor((countdownBreak % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((countdownBreak % (1000 * 60)) / 1000);
        seconds = seconds.toString().padStart(2, '0');
        document.getElementById("break").innerHTML = minutes + ":" + seconds;
    }
    countdownTemp2 = countdownBreak;
}

var x;

let y = 0;

let c = 0;

let w = 0;

function myFunc() {

    if (y == 0) {

        if (c % 2 == 0) {
            x = setInterval(myTimer, 1000);
        }
        else if (c % 2 != 0) {
            x = setInterval(myBreak, 1000);
        }

        function myTimer() {
            var minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);
            seconds = seconds.toString().padStart(2, '0');
            document.getElementById("timer").innerHTML = minutes + ":" + seconds;
            countdownTime -= 1000;

            if (countdownTime < 0) {
                clearInterval(x);
                countdownTime = countdownTemp;

                var minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);
                seconds = seconds.toString().padStart(2, '0');
                document.getElementById("timer").innerHTML = minutes + ":" + seconds;

                x = setInterval(myBreak, 1000);

                c++
            }
        }

        function myBreak() {
            var minutes = Math.floor((countdownBreak % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((countdownBreak % (1000 * 60)) / 1000);
            seconds = seconds.toString().padStart(2, '0');
            document.getElementById("break").innerHTML = minutes + ":" + seconds;
            countdownBreak -= 1000;

            if (countdownBreak < 0) {
                clearInterval(x);
                countdownBreak = countdownTemp2;

                var minutes = Math.floor((countdownBreak % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((countdownBreak % (1000 * 60)) / 1000);
                seconds = seconds.toString().padStart(2, '0');
                document.getElementById("break").innerHTML = minutes + ":" + seconds;

                x = setInterval(myTimer, 1000);

                w++;
                wNum = document.getElementsByClassName("num")[w - 1];
                wNum.style.backgroundColor = "rgb(199, 255, 199)";

                if (w == 4) {
                    clearInterval(x);
                }

                c++;
            }
        }

        document.getElementById('playPause').innerHTML = "⏸️"

        y++;
        console.log(y);
    }

    else if (y == 1) {
        document.getElementById('playPause').innerHTML = "▶️"

        clearInterval(x);
        y--;
        console.log(y);
    }
}

function myRestart() {
    clearInterval(x);
    countdownTime = 1500000;
    var minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);
    seconds = seconds.toString().padStart(2, '0');
    document.getElementById("timer").innerHTML = minutes + ":" + seconds;

    countdownBreak = 300000;
    var minutes = Math.floor((countdownBreak % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((countdownBreak % (1000 * 60)) / 1000);
    seconds = seconds.toString().padStart(2, '0');
    document.getElementById("break").innerHTML = minutes + ":" + seconds;

    for (i = 0; i < 4; i++) {
        wNum = document.getElementsByClassName("num")[i];
        wNum.style.backgroundColor = "";
    }

    c = 0;
    w = 0;
    y = 0;

    document.getElementById('playPause').innerHTML = "⏯️"
}