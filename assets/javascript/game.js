let currentScore = 0;
let randomNumber;
let wins = 0;
let losses = 0;


$(document).ready(function(){
    function shotsFired(){
        currentScore = -currentScore - -currentScore;
        $("#currentScore").html(currentScore);
        randomNumber = Math.floor(Math.random() * 120) + 19;
        $("#randomNumber").html(randomNumber);
    };
    shotsFired();

    
    $("button").click(function(){
        let buttonValue = $(this).val();
        console.log(buttonValue);
        currentScore = +currentScore + +buttonValue;
        $("#currentScore").html(currentScore);
        if (randomNumber === currentScore){
            alert("Party On!");
            wins++;
            $("#wins").html(wins);
            shotsFired();
        }
        else if (randomNumber < currentScore){
            alert("You've had a few too many!");
            losses++;
            $("#losses").html(losses);
            shotsFired();
        };
        
    });
});

// player will guess numbers
// player will be shown a random number at the start of the game
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score


// Your game will hide this amount until the player clicks a crystal
// When they do click one, update the player's score counter

// The player wins if their total score matches the random number from the beginning of the game

// The player loses if their score goes above the random number

// The game restarts whenever the player wins or loses
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero

// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


// ##### Option 1 Game design notes

// * The random number shown at the start of the game should be between 19 - 120.

// * Each crystal should have a random hidden value between 1 - 12.