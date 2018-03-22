// Generate a random number
var rand=Math.floor(Math.random() *121 )+1;
// Set win & lose score
var wins = 0;
var losses = 0;

$("#random_number").text(rand);
  
  var crystals = $("img");

  for (var i = 0; i < crystals.length; i++) {
      console.log(crystals[i]);
    $(crystals[i]).attr("points", Math.floor(Math.random()*12) +1);
 
  }
$("img").on("click", function(){
console.log($(this).attr('points'));
})
// Create 4 crystals that generate a number (1-12) on click. They change numbers after each game.

// Create total score box to tally score