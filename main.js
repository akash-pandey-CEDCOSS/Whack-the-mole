var t_left = 20;
var temp;
var x = 0;
var c = 0;
var arr = document.getElementsByClassName('image');
const moles = document.querySelectorAll('.mole');
var highscore = "";
var stp = 0;
function myfunction() {
    if (t_left > 0) {
        if (temp != undefined) {
            arr[temp].innerHTML = "";
        }
        var x = Math.floor(Math.random() * 6);
        arr[x].innerHTML = "<img class='mole' src='images/mole.png' onclick='tawp()'>";
        temp = x;
        t_left = t_left - 1;
        document.getElementById("Time_left").innerHTML = t_left;



    }
    else {
        // debugger;
        highscore = document.cookie.split("=")[1];
        highscore = parseInt(highscore);

        if (highscore > c) {
            document.getElementById("hi_score").innerHTML = "Highscore=" + highscore;
        }
        document.getElementById("row1").style.display = "none";
        document.getElementById("row2").style.display = "none";
        document.getElementById("scr_card").innerHTML = "Your Score is: " + c;
        document.getElementById("g_over").style.display = "block";
        clearInterval(stp);
    }
}
function max_min(max, min) {
    return Math.round(Math.random() * (max - min) + min);


}

function startgame() {
    const time = max_min(500, 1000);
    stp = setInterval(myfunction, time);
}
function tawp() {
    c = c + 10;
    console.log(c)
    document.getElementById("score").innerHTML = c;
    // highscore=document.cookie.split("=")[1];
  
    c = parseInt(c);
    if (highscore <= c) {
        highscore = c;
        highscore = parseInt(highscore);
        document.cookie = "highscore=" + highscore;
        
    }
}




