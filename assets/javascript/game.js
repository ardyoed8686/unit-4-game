var wins = 0;
var losses = 0;
var userScore = 0;




$(document).ready(function() {
// computer guessed score between 19 - 120 points
// var randomScore = Math.floor(Math.random() * 101) + 19;
 var compScore = Math.floor(Math.random() * 101) + 19;

$("#comp-guess").text(compScore);
console.log(compScore);

// random value assigned to each crystal between 1 - 12
var redCrystal = Math.floor(Math.random() * 11) + 1;
console.log(redCrystal);

var blueCrystal = Math.floor(Math.random() * 11) + 1;
console.log(blueCrystal);

var yellowCrystal = Math.floor(Math.random() * 11) + 1;
console.log(yellowCrystal);

var greenCrystal = Math.floor(Math.random() * 11) + 1;
console.log(greenCrystal);

//if red-crystal is clicked  take points and add to userScore

$(".crystal").on("click", function() {
    if (redCrystal) {
   // add crystal points to userScore
   userScore += (this.value);
   $("player-score").text(userScore);

    } else if (blueCrystal) {
     // add crystal points to userScore
     userScore += (this.value);
     $("player-score").text(userScore);
    } else if (yellowCrystal) {
     // add crystal points to userScore
    userScore += (this.value);
    $("player-score").text(userScore);
    } else if (greenCrystal) {
    // add crystal points to userScore
    userScore += (this.value);
    $("player-score").text(userScore);
    }    

             
 

});



// collect player score and display it
var yourPick = $(this).value;
// if user score matches computer guess player wins
// if user score is greater than computer guess player loss
// after win/loss reset computer guess and crystal values to new variables
});

// $(document).ready(function(){
    // $("button").click(function(){
    //   $("p").text("Hello world!");
    // });