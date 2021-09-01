
// Write a JavaScript function that reverses a number.
//Example - x = 32243;
//Expected output - 34223

function numberReverse(x) {
    x = x + "";
    return x.split(""). reverse().join("");
}
console.log(numberReverse(2299878765))

//Write a JavaScript function that checks whether a passed string is a palindrome or not.
// A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g. madam etc.

function palindrome(str) {
    var re = /[\W_]/g; //var re = /[^A-Za-z0-9]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
console.log(palindrome("A man, a plan, a canal. Panama"));

// palindrome w/ comments from freecodecamp:

//function palindrome(str) {
//   // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
//   var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
//
//   var lowRegStr = str.toLowerCase().replace(re, '');
//   // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
//   // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
//   // var lowRegStr = "amanaplanacanalpanama";
//
//   // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
//   var reverseStr = lowRegStr.split('').reverse().join('');
//   // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
//   // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
//   // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
//   // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
//   // And, var reverseStr = "amanaplanacanalpanama";
//
//   // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
//   return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
// }
//
// palindrome("A man, a plan, a canal. Panama");

// write a JavaScript function that generates all combinations of a string.

function combinator (s) {
    list_of_strings = new Array();
    for(i=0;i<s.length;i++) {
        for(j=i+1;j<s.length+1;j++) {
            list_of_strings.push(s.slice(i, j));
        }
    }
    return list_of_strings;
}

console.log(combinator("dog"));
