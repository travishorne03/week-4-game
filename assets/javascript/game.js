var matchNum = 0;
var wins = 0;
var loses = 0;
var gem1;
var gem2;
var gem3;
var gem4;
var yourScore = 0;
$(document).ready(function() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /*RUNING THE ACTUAL FUNCTION*/
    function updateNum() {
        matchNum = getRandomInt(19, 120);
        $("#randomNumId").html(matchNum);
        gem1 = getRandomInt(1, 12);
        gem2 = getRandomInt(1, 12);
        gem3 = getRandomInt(1, 12);
        gem4 = getRandomInt(1, 12);
    }

    function rocks() {
        $("#rock1").on("click", function() {
            yourScore += gem1;
            $("#endScore").html(yourScore);
        })
        $("#rock2").on("click", function() {
            yourScore += gem2;
            $("#endScore").html(yourScore);
        }) //End 2 Click Function
        $("#rock3").on("click", function() {
            yourScore += gem3;
            $("#endScore").html(yourScore);
        }) //End 3 Click Function
        $("#rock4").on("click", function() {
            yourScore += gem4;
            $("#endScore").html(yourScore);
        }) //End 4 Click Function
    } //End FUNCTION ROCKS
    function winLose() {
        $("img").on('click', function() {
            if (matchNum === yourScore) {
                alert("YOU WIN");
                wins++; 
                $("#wins").html(wins);
            } else if (yourScore > matchNum) {
                alert("YOU LOSE");
                loses++; 
                $("#loses").html(loses);
            }
        })
    }

    function gamePlay() {
        updateNum();
        rocks();
        winLose();
    }
    gamePlay();


});