'use strict'

// let locks = confirm('Does Antonio have black hair?');
// console.log(locks + ', his hair is black!' );
// alert(locks + '!');

// show confirm dialog pop-up with a question
let locks = confirm("Does Antonio have dark hair?");
  if(locks) {// user clicked OK (Yes)
    alert("yes, dark colored hair and quite long as well, needs a cut...");
  } else {// user clicked Cancel (No)
    alert("hmmm.. let's have another gander");
  };
console.log(locks + '! Antonio has dark colored hair.');

