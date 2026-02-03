'use strict'

// let locks = confirm('Does Antonio have black hair?');
// console.log(locks + ', his hair is black!' );
// alert(locks + '!');

// show confirm dialog pop-up with a question
let locks = confirm("Does Antonio have dark hair?");
  if(locks) {// user clicked OK (Yes)
    alert(locks + "! dark colored hair and quite long as well; needs a cut...");
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