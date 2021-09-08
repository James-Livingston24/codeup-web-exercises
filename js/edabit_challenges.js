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
// I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.
// n is the number of square meters I can paint.
// w and h are the widths and heights of a single wall in meters.

// Why pay a fortune teller when you can just program your fortune yourself?
//
//     Write a function named tellFortune that:
//     takes 4 arguments: number of children, partner's name, geographic location, job title.
//
//
// Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

// function tellFortune(career, locate, spouse, kids) {
//     return "You will be a " + career + " in " + locate + " , and married to " + spouse + " with " + kids + " kids."
// }
// console.log(tellFortune("developer", "Texas", "Sharonda", 4));


// Write a function named calculateDogAge that:
//     * takes 1 argument: your puppy’s age.
// * calculates your dog’s age based on the conversion rate of 1 human year to 7 dog years.
// * outputs the result to the screen like so: “Your doggie is NN years old in dog years!”
//     Call the function three times with different sets of values.
//     Bonus: Add an additional parameter to the function that takes the conversion rate of human to dog years.

// function calculateDogAge(age) {
//     return age = age * 7;
// }
// console.log(calculateDogAge(14));

// Kenneth's solution:
//function calculateDogAge
// 2 parameters: my puppy's age and conversion rate to human years
// output : return a formatted string

// function calculateDogAge(puppyAge, conversionNum) {
//         var ageInHumanYears = puppyAge * conversionNum;
//         return "Hello there! Your little dog is " + ageInHumanYears + " years old. Nice!"
//
//
// }
// alert(calculateDogAge(5,7));

// Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.
// timesFour(0) //0
// timesFour("5") //20
// timesFour(-5) //-20
// timesFour('Texas') //false
// timesFour([2,1,0]) //false
// timesFour(true) //false
// timesFour(null) //false

// define function named timesFour
// takes in one input
// multiply input by four if it is numeric
// if not numeric, return false;
//
// function timesFour(input) {
//     if (!isNaN(parseInt(input))) {
//         return input * 4;
//     } else {
//         return false;
//     }
// }
// console.log(timesFour([2, 1, 0]));

// multiplies input by 4 if it is a number
// if not numeric, then return false
//
function timesFour(input) {
    if (Array.isArray(input) || isNaN(parseInt(input))) {
            return false;
    } else {
        return input * 4;
    }

}
console.log(timesFour(14));

// Define a function named convertDaystoHours that takes in one input Days. Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaystoHours, should return false.

// convertDaystoHours(0) //0
// convertDaystoHours('5') // 120
// convertDaystoHours('Texas') //false
// convertDaystoHours([2, 1, 0]) //false
// convertDaystoHours(true) //false
// convertDaystoHours(false) //false

// define function named convertDaystoHours takes in one input
// return convert numbers days into total hours
// if input not numeric or numeric string, return false

function convertDaystoHours(input) {
    if (Array.isArray(input) || isNaN(parseInt(input))) {
        return false;
    } else {
        return input * 24;
    }

}
console.log(convertDaystoHours([2, 1, 0]));

// function convertDaystoHours(days) {
//     if (typeof parseFloat(days) === !isNaN) {
//         return days * 24;
//     } else {
//         return false;
//     }
// }
// console.log(convertDaystoHours("Texas"));

// Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: “$XX.XX”. If either or both inputs are not numeric or numeric strings, calculateTax should return false.
// calculateTax(25, 8)				 // “$27.00"
// calculateTax(10, 12)             // “$11.20”
// calculateTax(120, 15.5)			 //	“$138.60"
// calculateTax(10, true)           // false
// calculateTax([1, 2, 3], 10)      // false
// calculateTax(“Codeup”, 100)      // false
// calculateTax()                   // false

// write a function named calculateTax
// takes in two inputs totalPaid and taxPercent
// if both are numeric or numeric strings, calaculateTx should return total with tax added
// should look like "$XX.XX"
// if either or both are not numeric/strings, return false;

function calculateTax(totalPaid, taxPercent) {
    if (!isNaN(parseInt(totalPaid)) && !isNaN(parseInt(taxPercent))) {
        return  "$" + ((totalPaid / 100) * taxPercent + totalPaid).toFixed(2);
    } else {
        return false;
    }
}
console.log(calculateTax(25, 8));

// function calculateTax(totalPaid, taxPercent) {
//     if (typeof parseFloat(totalPaid) === "number" && typeof parseFloat(taxPercent) === "number") {
//         var equals = totalPaid * taxPercent;
//         return equals + totalPaid;
//     } else {
//         return false;
//     }
// }
// console.log(calculateTax(30, .10));
//
// function helloBye(str, num) {
//     var strCap = str.charAt(0).toUpperCase() + str.slice(1);
//     if (num === 1) {
//         return "Hello " + strCap;
//     } else {
//         return "Bye " + strCap;
//     }
//
// }
// console.log(helloBye("sharonda", 1));