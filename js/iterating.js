
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["James", "Jason", "Chad", "Melvin"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
// console.log("There are " + names.length + " names in the array.");

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
// console.log("The first name is:" [0]);
// console.log("The first name is:" [1]);
// console.log("The first name is:" [2]);
// console.log("The first name is:" [3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
// for (var i = 0; i < names.length; i++) {
//     console.log('The name at index ' + i + ' is ' + names[i]);
// }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function (element, index) {
        console.log('The name at index ' + index + ' is: ' + element);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
var sports = ['Basketball', 'Football', "Boxing", "Tennis", "Volleyball"];

function intakeSports() {
    console.log("The first sport is: " + sports[0]);
}
intakeSports ()


function intakeSports1(sport) {
    console.log("The first sport is: " + sports[1]);
}
intakeSports1()


function intakeSports2(sport) {
    console.log("The first sport is: " + sports[4]);
}
intakeSports2()
