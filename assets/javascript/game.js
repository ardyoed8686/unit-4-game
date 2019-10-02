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

var scoreCheck = function(){
    // collect player score and display it

// if user score matches computer guess player wins

    if (compScore === userScore) {
        $("#results").prepend("You win!");
        wins++;
        $("#wins").text(wins);
        
    
    } else if (compScore < userScore) {
        $("#results").prepend("You lose!");
        losses++;
        $("#losses").text(losses);
    
    }
}
//if red-crystal is clicked  take points and add to userScore

$("#red-crystal").on("click", function() {

   // add crystal points to userScore
   
   userScore += redCrystal;
   console.log(userScore);
  
   $("#player-score").text(userScore);
scoreCheck();
});



$("#blue-crystal").on("click", function() {

    // add crystal points to userScore
    userScore += blueCrystal;
    console.log(userScore);
   
    $("#player-score").text(userScore);
    scoreCheck();
 });

 $("#yellow-crystal").on("click", function() {

    // add crystal points to userScore
    userScore += yellowCrystal;
    console.log(userScore);
   
    $("#player-score").text(userScore);
    scoreCheck();
 });

 $("#green-crystal").on("click", function() {

    // add crystal points to userScore  
    userScore += greenCrystal;
    console.log(userScore);
   
    $("#player-score").text(userScore);
    scoreCheck();
 });


// if user score is greater than computer guess player loss
// after win/loss reset computer guess and crystal values to new variables

});
