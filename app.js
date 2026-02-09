'use strict'

// let locks = confirm('Does Antonio have black hair?');
// console.log(locks + ', his hair is black!' );
// alert(locks + '!');

// const greeting = prompt('This here site is about Antonio and stuff he has done, is doing, or will do, Welcome.', 'What is your name there, partner?');
// const firstName = document.getElementById('greeting');

// alert('Welcome to this here site, ' + firstName + '!');
// console.log(greeting + ' has been welcomed.');


// show confirm dialog pop-up with a question; 1-5

let locks = confirm("Does Antonio have dark hair?");
  if(locks) {// user clicked OK (Yes)
    alert(locks + "! long, shaggy, dark colored hair.");
  } else {// user clicked Cancel (No)
    alert(locks + "... hmmm.. let's have another gander at him.");
  };
console.log(locks + '! Antonio has dark colored hair.');


let speaks = confirm("Does Antonio speak english?");
  if(speaks) {// user clicked OK (Yes)
    alert(speaks + "! He does speak english.");
  } else {// user clicked Cancel (No)
    alert(speaks + "... let's try speaking with him again...");
  };
console.log(speaks + '! Antonio does speak english.');


let seat = confirm("Does Antonio sit in the back of class?");
  if(seat) {// user clicked OK (Yes)
    alert(seat + "! he does sit in the back.");
  } else {// user clicked Cancel (No)
    alert(seat + ", let's look around the classroom.");
  };
console.log(seat + '! Antonio sits in the back-right corner.');


let hungry = confirm("Does Antonio love to eat?");
  if(hungry) {// user clicked OK (Yes)
    alert(hungry + "! He loves to manger!");
  } else {// user clicked Cancel (No)
    alert(hungry + "... keyword in the question; he doesn't just like it, he _____ it.");
  };
console.log(hungry + '! Antonio can throwdown against a plate!');


let books = confirm("Does Antonio like to read?");
  if(books) {// user clicked OK (Yes)
    alert(books + "! Antonio seems to like reading, as he has been going through more books recently.");
  } else {// user clicked Cancel (No)
    alert(books + ", hmmm... he does sometimes slack in concistency, but I think he does like to read; otherwise he woluldn't keep doing it.");
  };
console.log(books + '! Antonio does like to read.');

// Guessing number game; question 6
// Random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1; //.random gens a decimal number which is then mult by 10, .floor rounds down to closest whole number, plus 1 makes range valid 1 to 10
let attempts = 4; // valid tries to guess
let guessedCorrectly = false; // baseline, starts off as "no correct answer yet", refferenced at the end as a "double negative"

for (let i = 0; i < attempts; i++) {
  let guess = parseInt(prompt(`Guess a number between 1 and 10. You have ${attempts - i} guess(es) left:`));

  if (guess === secretNumber) {
    alert(`🎉 Correct! The number was ${secretNumber}.`);
    guessedCorrectly = true;
    break;
  } else if (guess < secretNumber) {
    alert("Too low! Try again.");
  } else if (guess > secretNumber) {
    alert("Too high! Try again.");
  } else {
    alert("Please enter a valid number.");
    i--; // invalid input doesn’t count as an attempt
  }
}

if (!guessedCorrectly) { // conditional that runs if guessedCorrectly is NOT true, 
  alert(`😞 Sorry, you’re out of guesses! The correct number was ${secretNumber}.`);
}