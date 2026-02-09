'use strict'

// let locks = confirm('Does Antonio have black hair?');
// console.log(locks + ', his hair is black!' );
// alert(locks + '!');

// const greeting = prompt('This here site is about Antonio and stuff he has done, is doing, or will do, Welcome.', 'What is your name there, partner?');
// const firstName = document.getElementById('greeting');

// alert('Welcome to this here site, ' + firstName + '!');
// console.log(greeting + ' has been welcomed.');


// show confirm dialog pop-up with a question

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