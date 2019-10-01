var wins = 0;
var losses = 0;
var userScore = [];


$(document).ready(function() {

 var compScore = Math.floor(Math.random() * 101) + 19;

$("comp-guess").text(compScore);



// computer guessed score between 19 - 120 points
// var randomScore = Math.floor(Math.random() * 101) + 19;
$("#click-me").on("click", function() {
    alert("I've been clicked!");

// $(".guessed-score").text(randomScore);
console.log("guessed-score");

// random value assigned to each crystal between 1 - 12

// collect player score and displa it
// if user score matches computer guess player wins
// if user score is greater than computer guess player loss
// after win/loss reset computer guess and crystal values to new variables
}

// $(document).ready(function(){
    // $("button").click(function(){
    //   $("p").text("Hello world!");
    // });