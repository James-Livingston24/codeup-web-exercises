"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


// function analyzeColor(color) {
//     if ("red") {
//         alert("Strawberries are red");
//     } else if ("blue") {
//         alert("The sky is blue");
//     } else if ("cyan") {
//         alert("That reminds me of pepper");
//     } else {
//         alert("I don't know anything by that color");
//     }
// }
// analyzeColor("red");



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

    // commenting out randomColor for user choosing color exercise below **
//
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// console.log("Your random color is " + randomColor + "!");

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// Below is commented out answer to randomColor exercise **

// function analyzeColor(color) {
//     if (randomColor === "red") {
//         console.log("Strawberries are red");
//     } else if (randomColor === "blue") {
//         console.log("The sky is blue");
//     } else if (randomColor === "cyan") {
//         console.log("That reminds me of pepper");
//     } else {
//         console.log("I don't know anything by that color");
//     }
// }
// analyzeColor(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// Below is the commented out answer to converting to switch statement **

// function analyzeColor(color) {
//     switch (randomColor) {
//         case "red":
//             console.log("Roses are red");
//             break;
//         case "blue":
//             console.log("The sky is blue");
//             break;
//         case "cyan":
//             console.log("That reminds me of pepper");
//             break;
//         default :
//             console.log("I don't need anything by that color");
//             break;
//     }
// }
// analyzeColor(randomColor);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var userColor = prompt("Choose a color and enter below")
// function analyzeColor(color) {
//     switch (userColor) {
//         case "red":
//             alert ("Roses are red");
//             break;
//         case "blue":
//             alert ("The sky is blue");
//             break;
//         case "cyan":
//             alert ("That reminds me of pepper");
//             break;
//         default :
//             alert ("I don't know anything by that color");
//             break;
//     }
// }
// analyzeColor(userColor);
//

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// ShanShan review **

// function calculateTotal(luckyNumber, totalAmount) {
//     var price;
//
//     switch(luckyNumber) {
//         case 0:
//             price = totalAmount;
//             break;
//         case 1:
//             price = totalAmount - totalAmount * .1;
//             break;
//         case 2:
//             price = totalAmount - totalAmount * .25;
//             break;
//         case 3:
//             price = totalAmount - totalAmount * .35;
//             break;
//         case 4:
//             price = totalAmount - totalAmount * .50;
//             break;
//         case 5:
//             price = 0;
//             break;
//     }
//
//     return price;
// }
// console.log(calculateTotal(0, 100));
// console.log(calculateTotal(4, 100));
// console.log(calculateTotal(5, 100));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */


// Generate a random number between 0 and 6
// exercise review **
// var luckyNumber = Math.floor(Math.random() * 6);
//
// var totalBill = prompt("What is your total bill?");
// var pay = calculateTotal(luckyNumber, totalBill);
//
// alert("Hello, your lucky number is " + luckyNumber);
// alert("The price before the discount was $" + totalBill);
// alert("Congrats, your price after disount is $" + pay);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

//ShanShan review
//
// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// function addHundred(number) {
//     return number + 100;
// }
//
// function isPositive(number) {
//     if (number > 0){
//         return true;
//     } else if (number = 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// function isString(number) {
//     if (isNaN(number) === true) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// if (isEnter) {
//     var userNumber = prompt("Great, please enter a number.");
//     if (isString(userNumber)) {
//
//     } else {
//         userNumber = Number(userNumber);
//         if (isEven(userNumber)) {
//             alert(userNumber + " is even.");
//         } else {
//             alert(userNumber + " is odd.");
//         }
//
//         alert(userNumber + " plus 100 is" + addHundred(userNumber));
//
//         if (isPositive(userNumber) === "not positive or negative") {
//             alert(userNumber + isPositive(userNumber));
//         } else if (isPositive(userNumber)) {
//             alert(userNumber + " is positive.");
//         } else {
//             alert(userNumber + " is negative.");
//         }
//     }
// }