let countdownTime = 1500000;
let countdownBreak = 300000;

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
}

// var x;

// function myFunc() {

//     x = setInterval(myTimer, 1000);

//     function myTimer() {
//         var minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);

//         seconds = seconds.toString().padStart(2, '0');

//         document.getElementById("timer").innerHTML = minutes + ":" + seconds;

//         countdownTime -= 1000;

//         if (countdownTime < 0) {
//             clearInterval(x);
//         document.getElementById("timer").innerHTML = "EXPIRED";
//         }
//     }
// }

// function myPause() {
//     clearInterval(x);
// }


var x;

let y = 0;

function myFunc() {

    if (y == 0) {
        x = setInterval(myTimer, 1000);

        function myTimer() {
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
        y++;
        console.log(y);
    }

    else if (y == 1) {
        clearInterval(x);
        y--;
        console.log(y);
    }
}

