console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var userInput = prompt("What is your favorite color?");

alert("Great, " + userInput + " that is my favorite color too!");

var littleMermaid = prompt("How many days did you rent The Little Mermaid?");

alert("You owe " + (littleMermaid * 3))

var brotherBear = prompt("How many days did you rent Brother Bear?");

alert("You owe " + (brotherBear * 3));

var hercules = prompt("How many days did you rent Hercules?");

alert("You owe " + (hercules * 3));

var google = prompt("How much does Google pay you per hour?");

alert("You will be paid " + (google * 6) + " from Google");

var amazon = prompt("How much does Amazon pay you per hour?");

alert("You will be paid " + (amazon * 4) + " from Amazon");

var facebook  = prompt("How much does Facebook pay you per hour?");

alert("You will be paid " + (facebook * 10) + " from Facebook");

// productQuantity > 2 || !offerExpired
//premiumMem === true, off still needs to be valid
/**
var productQuantity = 1;

var offerValid = true;

var premiumMem = true

console.log((productQuantity > 2 || premiumMem) && offerValid);
 */

var productQuantity = prompt("How many items are in your cart?");

var offerValid = confirm("Is there an offer on these items?");

var premiumMem = confirm("Do you have your membership card?");

alert("Customer qualifies for offer? " + (productQuantity > 2 || premiumMem) && offerValid);

