// // In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// //
// // chickens = 2 legs
// // cows = 4 legs
// // pigs = 4 legs
// // The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
//
// function animals(chickens, cows, pigs) {
//     return chickens * 2 + cows * 4 + pigs * 4;
// }
// console.log(animals(25, 16, 8));
//
// // Create a function that takes a number as an argument, increments the number by +1 and returns the result.
//
// function addition(num) {
//     return ++num;
// }
// console.log(addition(1));
//
// // James created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.
//
// function printArray(number) {
//     var newArray = [];
//
//     for(var i = 1; i <= number; ++i) {
//         newArray.push(i);
//     }
//
//     return newArray;
// }
// console.log(printArray(10000));
//
// //The "++1" was missing on the original line of code.  Therefore, on the way the code read, var i + 1; i <= number) would have infinitely compared it to 1 and be deemed an infinite loop.  by adding the ++i (iterating integer) it would compare it to different integers every loop...you place 14 it will iterate up to 14 and then stop.  You place 1,000,000 it will iterate up to that and then stop...etc.
//
// //** New Question
//
// // Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
//
// function lessThan100(a, b) {
//     if(a + b < 100) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(lessThan100(99, 9));
//
// //Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
//
// function convert(hours, minutes) {
//     return ((hours*60) + minutes) * 60
// }
// console.log(convert(3,0));
//
// // Problems like this at face value seem to be confusing. By breaking down what exactly is being asked, however, really all we need to do is convert hours to minutes (hours * 60) then then follow through with minutes to seconds.
//
// // New Question
//
// // There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
//
//  function remainder(x, y) {
//      return x % y;
//  }
// console.log(remainder(10, 8));
//
//  // Create a function that takes a boolean variable flag and returns it as a string.
// function boolToString(flag) {
//     return flag.toString();
// }
// // gave up too soon on this one.  when first attempting this code output was: flag.toString without the ().  Still working on when to add or not.
//
// // Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.
//
// function profitableGamble(prob, prize, pay) {
//     if (prob * prize > pay) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// //Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
// //
// // wins get 3 points
// // draws get 1 point
// // losses get 0 points
//
// function footballPoints(wins, draws, losses) {
//     return (wins * 3 + draws * 1 + losses * 0);
// }
//
// // Much better way to simplify this one is to simply: return wins * 3 + draws;
//
// //Create a function that takes an array containing only numbers and return the first element.
//
// function getFirstValue(arr) {
//     return arr[0];
//
// }
// console.log(getFirstValue([4, 5, 6, 5]));

// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

// function points(twoPointers, threePointers) {
//     return twoPointers * 2 + threePointers * 3;
//
// }
// console.log(points(16, 7));

// JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.
//
// Consider a && b:
//
// a is checked if it is true or false.
// If a is false, false is returned.
// b is checked if it is true or false.
// If b is false, false is returned.
// Otherwise, true is returned (as both a and b are therefore true ).
// The && operator will only return true for true && true.
//
// Make a function using the && operator.
//
// function and(a, b) {
//     if (a && b === true) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// //Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
//
// function nextEdge(side1, side2) {
//     return side1 + side2 - 1;
// }
//
// //in javaScript the maximum length of a triangle is found using side1 + side2 - 1
//
// //Mubashir wants to swap two given numbers!
// //
// // It is not returning the right values. Can you help him fix it?
//
// //Mubashir's original code:
//
// function swap(a, b) {
//     a = b
//     b = a
//     return [a, b]
// }
//
// //^^ why didn't this one work?
//
// // Possible answer 1
// function swap(a, b) {
//     t = a
//     a = b
//     b = t
//     return [a, b]
// }
//
// //Possible answer 2
//
// function swap(a, b) {
//     return [b, a];
// }

