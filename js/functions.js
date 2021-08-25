// //
// // /**
// //  * TODO:
// //  * Create a function called 'sayHello' that takes a parameter 'name'.
// //  * When called, the function should return a message that says hello to the passed in name.
// //  *
// //  * Example
// //  * > sayHello("codeup") // returns "Hello, codeup!"
// //  */
// //
// // function sayHello(name) {
// //     return "Hello, " + name;
// // }
// // console.log(sayHello("James"));
// //
// // /** function sayHello(name) {
// //     console.log("Hello, " + name + "!")
// // }
// // sayHello("James")  */
// //
// //
// //
// // /**
// //  * TODO:
// //  * Call the function 'sayHello' and pass your name as a string literal argument.
// //  * Store the result of the function call in a variable named 'helloMessage'.
// //  *
// //  *
// //  *
// //  * console.log 'helloMessage' to check your work
// //  */
// //
// // var helloMessage = sayHello("James");
// // console.log(helloMessage);
// //
// // /** var helloMessage = "James";
// // sayHello(helloMessage); */
// //
// // /**
// //  * TODO:
// //  * Store your name as a string in a variable named 'myName', and pass that
// //  * variable to the 'sayHello' function. You should see the same output in the
// //  * console.
// //  */
// // // got this one right!
// // var myName = "James";
// // console.log(sayHello(myName));
// //
// //
// // // Don't modify the following line, it generates a random number between 1 and 3
// // // and stores it in a variable named random
// // var random = Math.floor((Math.random() * 3) + 1);
// //
// // /**
// //  * TODO:
// //  * Create a function called 'isTwo' that takes a number as a parameter.
// //  * The function should return a boolean value based on whether or not the passed
// //  * number is the number 2.
// //  *
// //  * Example
// //  * > isTwo(1) // returns false
// //  * > isTwo(2) // returns true
// //  * > isTwo(3) // returns false
// //  *
// //  * Call the function 'isTwo' passing the variable 'random' as a argument.
// //  *
// //  * console.log *outside of the function* to check your work (you should see a
// //  * different result everytime you refresh the page if you are using the random
// //  * number)
// //  */
// //
// // function isTwo(number) {
// //     console.log("Our number is: " + number);
// //     return number === 2;
// // }
// // console.log(isTwo(random));
// //
// // /** console.log("Random Number is: " + random.toString());
// // function isTwo(number) {
// //     (number % 2 === 1) ? console.log("False"): console.log("True");
// // }
// // isTwo(random); */
// //
// //
// // /**
// //  * TODO:
// //  * Create a function named 'calculateTip' to calculate a tip on a bill at a
// //  * restaurant. The function should accept a tip percentage and the total of the
// //  * bill, and return the amount to tip
// //  *
// //  * Examples:
// //  * > calculateTip(0.20, 20) // returns 4
// //  * > calculateTip(0.25, 25.50) // returns 6.375
// //  * > calculateTip(0.15, 33.42) // returns 5.013
// //  */
// // /**
// //  * TODO:
// //  * Use prompt and alert in combination with your calculateTip function to
// //  * prompt the user for the bill total and a percentage they would like to tip,
// //  * then display the dollar amount they should tip
// //  */
// //
// // function calculateTip(tipPercentage, total) {
// //     return tipPercentage * total;
// // }
// //
// // console.log(calculateTip(.2, 20));
// // console.log(calculateTip(.25, 25.50));
// // console.log(calculateTip(.15, 33.42));
// //
// // var userBill = prompt("How much was your bill?");
// // var userTip = prompt("How much would you like to tip in a whole number?") / 100;
// //
// // alert("Thank you for your service ~ You will be tipping : $" + calculateTip(userTip, userBill));
// //
// //
// //
// // /**
// //  * TODO:
// //  * Create a function named `applyDiscount`. This function should accept a price
// //  * (before a discount is applied), and a discount percentage (a number between 0
// //  * and 1). It should return the result of applying the discount to the original
// //  * price.
// //  *
// //  * Example:
// //  * > var originalPrice = 100;
// //  * > var dicountPercent = .2; // 20%
// //  * > applyDiscount(originalPrice, dicountPercent) // 80
// //  *
// //  * > applyDiscount(45.99, 0.12) // 40.4712
// //  */
// //
// // function applyDiscount(originalPrice, discountPercent) {
// //     return originalPrice - (originalPrice * discountPercent)
// // }
// //
// // // the below works but did more than was being asked...however, you are actually on point.
// // /**
// // var originalPrice = prompt("How much is the price before the discount?");
// // var discountPercent = prompt("What percentage is the discount?");
// // function applyDiscount(a, b) {
// //     return a - (a * b);
// // }
// // alert("Your total after the discount is $" + applyDiscount(originalPrice, discountPercent) + "!");
// // */
// //
// //  var myName = "James";
// //
// //      function sayHello(name) {
// //      return "Hello, " + name + "!";
// //  }
// //  console.log(sayHello(myName));
// //
// //  var random = Math.floor((Math.random() * 3) + 1);
// //
// //  console.log("The random number is: " + random)
// //
// //  function isTwo(number) {
// //      if (random === 2) {
// //          return true;
// //      } else {
// //          return false;
// //
// //      }
// //
// //  }
// //  console.log(isTwo(random));
// //
// //  var billAmount = prompt("How much was your bill?");
// //  var tipRequest = prompt("What percentage would you like to tip (i.e. .20, .25, etc.) ?");
// //
// //  function calculateTip() {
// //      return billAmount * tipRequest;
// //  }
// //  var totalTip = alert("Your tip total is: " + billAmount * tipRequest);
//
// //  var originalPrice = prompt("What is the price of your purchase?");
// //  var discountPercent = .2;
// // function applyDiscount() {
// //     return originalPrice * discountPercent;
// // }
// // alert("Your discount based on your purchase is: $" + originalPrice * discountPercent);
// // console.log(applyDiscount(originalPrice, discountPercent));
// //
// // function calculateTip(tip, bill){
// //     return tip * bill;
// }
//  // console.log(calculateTip(.2, 20));
//
//



// Create a function named rollSixSided that takes in a number as a parameter.
// Write code within your function that would generate the number between 1 and 6 [the dice] and then console.log the result to the user. Your loop should run the number of times as specified by the argument provided.Example:
// rollSixSided(10)
// Result:
//     You rolled a 1
// You rolled a 5
// You rolled a 2
// You rolled a 3
// You rolled a 6
// You rolled a 6
// You rolled a 3
// You rolled a 1
// You rolled a 6
// You rolled a 4

function rollSixSided(num){
    for(var i = 0; i < num; i++){
        var random = Math.floor((Math.random() * (6 - 1 + 1) + 1));
        console.log("You rolled a " + random);
    }




}