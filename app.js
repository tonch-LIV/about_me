'use strict'

// let locks = confirm('Does Antonio have black hair?');
// console.log(locks + ', his hair is black!' );
// alert(locks + '!');

// const greeting = prompt('This here site is about Antonio and stuff he has done, is doing, or will do, Welcome.', 'What is your name there, partner?');
// const firstName = document.getElementById('greeting');

// alert('Welcome to this here site, ' + firstName + '!');
// console.log(greeting + ' has been welcomed.');

//-------------------------------
// starts the total score count |
//------------------------------

let totalScore = 0; // starts at 0, will increment per correct answers

// --------------------------------------------
// show confirm dialog pop-up with a question |
//--------------------------------------------

// Question 1

let locks = confirm("Does Antonio have dark hair?");
  if(locks) {// user clicked OK (Yes) = correct
    alert(locks + "! long, shaggy, dark colored hair.");
    totalScore++; // adds one to counter for correct answer
  } else {// user clicked Cancel (No)
    alert(locks + "... hmmm.. let's have another gander at him.");
  };
console.log(locks + '! Antonio does have dark colored hair.');

// Question 2

let speaks = confirm("Does Antonio speak english?");
  if(speaks) {// user clicked OK (Yes) = correct
    alert(speaks + "! He does speak english.");
    totalScore++; // adds one to score counter for correct answer
  } else {// user clicked Cancel (No)
    alert(speaks + "... let's try speaking with him again...");
  };
console.log(speaks + '! Antonio does speak english.');

// Question 3

let seat = confirm("Does Antonio sit in the back of class?");
  if(seat) {// user clicked OK (Yes) = correct
    alert(seat + "! he does sit in the back.");
    totalScore++;
  } else {// user clicked Cancel (No)
    alert(seat + ", let's look around the classroom.");
  };
console.log(seat + '! Antonio sits in the back-right corner.');

// Question 4

let hungry = confirm("Does Antonio love to eat?");
  if(hungry) {// user clicked OK (Yes) = correct
    alert(hungry + "! He loves to manger!");
    totalScore++;
  } else {// user clicked Cancel (No)
    alert(hungry + "... keyword is in the question; he doesn't just like it, he _____ it.");
  };
console.log(hungry + '! Antonio can throwdown against a plate!');

// Question 5

let books = confirm("Does Antonio like to read?");
  if(books) {// user clicked OK (Yes) = correct
    alert(books + "! Antonio seems to like reading, as he has been going through more books recently.");
    totalScore++;
  } else {// user clicked Cancel (No)
    alert(books + ", hmmm... he does sometimes slack in concistency, but I think he does like to read; otherwise he woluldn't keep doing it.");
  };
console.log(books + '! Antonio does like to read.');

//--------------------------------------
// Guessing number game; question 6    |
//-------------------------------------

// Random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1; //.random gens a decimal number which is then mult by 10, .floor rounds down to closest whole number, plus 1 makes range valid 1 to 10

let attempts = 4; // valid tries to guess
let guessedCorrectly = false; // baseline, starts off as "no correct answer yet", refferenced at the end as a "double negative"

for (let i = 0; i < attempts; i++) { //guesses counter starts at 0, increments by one after each attempt
  let guess = parseInt(prompt(`I'm thinking of a number. Between 1 and 10, can you guess whch one am I thinking of? You've got ${attempts - i} chances to guess it:`));

  if (guess === secretNumber) {
    alert(`Right on! You got it, the number was - ${secretNumber}.`);
    guessedCorrectly = true;
    totalScore++; //adds to score for correct answer
    break; // runs if / when the correct number is guessed
  } else if (guess < secretNumber) {
    alert("flying a little low! Try again."); // alert prompt for when the guess is too low
  } else if (guess > secretNumber) {
    alert("Shooting a bit high, are we? Try again."); //alert if guess is too high
  } else {
    alert("Please enter a valid number."); // when input is not a number
    i--; // invalid input doesn’t count against attempt counter
  }
}

if (!guessedCorrectly) { // conditional that runs if guessedCorrectly is NOT true, 
  alert(`Ahh... I really thought we were on the same wavelength and you were going to get it... Looks like you're out of guesses! The correct number was - ${secretNumber}. Feel free to try again.`);
}
console.log('the number I was thinking of was - ' + secretNumber + '.' ); // prints console message with the number selected

/*
----------------------------------
Question 7 - fruit guessing game |
---------------------------------
*/

// All possible answers
const possibleAnswers = ["mamey", "oranges", "guayaba", "mango", "pear", "pineapple", "melon", "kiwi", "maracuya", "pomegranate"];

// Pick ONE random correct answer from the array
const randomIndex = Math.floor(Math.random() * possibleAnswers.length);
const secretAnswer = possibleAnswers[randomIndex];

// Let’s show all possible choices to the user
const visibleChoices = possibleAnswers.map(fruit => fruit[0].toUpperCase() + fruit.slice(1)).join(", ");

// Max number of attempts
const maxTries = 6;

let userGotIt = false;

// The guessing loop
for (let round = 1; round <= maxTries; round++) {
  const guess = prompt(
    `I'm thinking of a fruit I want to eat, can you guess which one it is from the list? \n\nChoices are: ${visibleChoices}\n\nAttempt ${round} of ${maxTries}:`
  );

  if (guess === null) {
    alert("Couldn't choose just one, huh? We'll cancel the game... for now, We'll give it another shot soon!");
    break;
  }

  const cleanedGuess = guess.trim().toLowerCase();

  if (cleanedGuess === "") {
    alert("Ahhh, I'm definitely craving something from the list. This attempt won't count, but make a real guess.");
    round--;
    continue;
  }

  if (cleanedGuess === secretAnswer) {
    alert(`Correct! The answer is "${secretAnswer}". You got it in ${round} attempt(s)!`);
    userGotIt = true;
    totalScore++; // adds a point for a correct answer
    break;
  } else {
    const remaining = maxTries - round;
    if (remaining > 0) {
      alert(`"${guess}" isn’t quite it. Give it another shot! (${remaining} attempt(s) left)`);
    } else {
      alert(`Looks like that's the end of the road and we've got no more to give... The correct answer was "${secretAnswer}".`);
    }
  }
}

// if (!userGotIt) {
  console.log(`The fruit I was thinking of was - "${secretAnswer}".`);
// }

//---------------------
// Final score tally |
//-------------------

alert(`Alright, lets count 'em up!\nYou got ${totalScore} out of 7 questions correct!`);
console.log(`Final score: ${totalScore}/7`);