var rpsOptions= ["r", "p", "s"];

var wins = 0;
var losses = 0;
var ties = 0;

for(var i = 0; i < 10; i++) {

    var compGuess = rpsOptions[Math.floor(Math.random() * rpsOptions.length)];

    console.log(compGuess)

    var userGuess = prompt("Enter r, p or s to play!") ;
    userGuess = userGuess.toLowerCase();
    
    
    if (userGuess === "r" || userGuess === "p" || userGuess === "s") {

        alert("Computer chose " + compGuess) ; 
    
        if((userGuess === "r" && compGuess === "s") ||
        (userGuess === "s" && compGuess === "p") ||
        (userGuess === "p" && compGuess === "r")){
        
        wins++;
        alert("You've won " + wins +  " time(s)!") ; 
         } else if (userGuess === compGuess) {
            ties++
            alert("You've tied "  + ties + " time(s)." ); 
        } else
        losses++;
        alert("You've lost " + losses + " time(s).") ;
        }
      }
     alert("Total wins: " + wins + "\nTotal ties: " + ties + "\nTotal losses: " + losses) ;
      var playAgain = prompt("Do you wanna try again?!");