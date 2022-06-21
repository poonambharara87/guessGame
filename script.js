'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "Correct Number!";
// document.querySelector('.number').textContent = 3; //to change the content of the element by the class here
// document.querySelector('.score').textContent = 13;

// console.log(document.querySelector('.guess').value); //to get the value throught user value used

// console.log(document.querySelector('.guess').value = 1);
// document.querySelector('.message').textContent = "Correct Number!";

let secretNumber = Math.trunc(Math.random() * 20 + 1);

const displayMessage = function(message){
	document.querySelector('.message').textContent = message;
}
//Math.random to create randome number and Math.trunc is used to change decimal in number and multiplied by 20
//because no. should between 1-20 and +1 is for becase no. will in decimail 19 something so + 1 to mke 20
	
let score = 20; //let because is changeable but const doesn't
let highscore = 0;
document.querySelector('.check').addEventListener('click', function(){
	let guess = Number(document.querySelector('.guess').value);

// addEventListener will add value to the check button.
//  and function is also variable so passing function as argument to button.
//  defining function but not calling here so javascript engine will automatically call when event will fired up

		//When no number in input
	if(!guess){ //if it's boolen value
		// document.querySelector('.message').textContent = "No Number";
		displayMessage("No Number");

		//When player wins
	}else if(guess === secretNumber){
		// document.querySelector('.message').textContent = "Correct Number!";
		displayMessage("Correct Number!");
		//inline css
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';

		if(score > highscore){
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}

	}

	else if ( guess !== secretNumber){
		if(score > 1){
			// document.querySelector('.message').textContent =
			//  guess > secretNumber ? "Too High Number!" : "Too Low Number!";
			 displayMessage( guess > secretNumber ? "Too High Number!" : "Too Low Number!");
			score--;
			document.querySelector('.score').textContent = score;
		}else{
			displayMessage("You lost thie game");
			document.querySelector('.score').textContent = 0;

		}			
	}

		//When guess is too high
	// else if(guess > secretNumber){

	// 	if(score > 1){
	// 		document.querySelector('.message').textContent = "Too High Number!";
	// 		score--;
	// 		document.querySelector('.score').textContent = score;
	// 	}else{
	// 		document.querySelector('.message').textContent = "You lost the game!";
	// 		document.querySelector('.score').textContent = 0;

	// 	}
		//When player too low
		// }else if(guess < secretNumber){

		// if(score > 1){
		// 	document.querySelector('.message').textContent = "Too Low Number!";
		// 	score--;
		// 	document.querySelector('.score').textContent = score;
		// }else{
		// 	document.querySelector('.message').textContent = "You lost the game!";
		// 	document.querySelector('.score').textContent = 0;

		// 	}
		// }
		});
	
		document.querySelector('.again').addEventListener('click', function(){
		
		score = 0;

		document.querySelector('.guess').value = ' ';
		// document.querySelector('.message').textContent  = 'Start guessing...';
		displayMessage("Start guessing...");
		document.querySelector('.number').textContent = '?';
		document.querySelector('.score').textContent = score;
		document.querySelector('body').style.backgroundColor = '#222';
		document.querySelector('.number').style.width = '15rem';


});