(function () {
    console.log("Welcome to functions!");

// Define named function
    function sayHello() {
        console.log("Hello!");
    }

    sayHello();

// Define anonymous function
    var sayHowdy = function () {
        console.log("Howdy!");
    }
    sayHowdy();

// Arguments and Parameters
    function add(x, y) {
        return x + y;
    }

    add(2, 3);

//to console to prove it you would: console.log(add(2, 3);

    function subtract(x, y) {
        return x - y;
    }

    subtract(5, 2);

// Scope
    var instructor = "Douglas";
    var day = "Friday";

    function tellTheDay() {
        return "Tell " + instructor + " It's " + day + "!";
    }

    console.log(tellTheDay());

// username below is in the local scope of the function and not the global
// scope where you can call on it outside the function.
    function greeting() {
        var username = "Kenneth";
        return "Hi, " + username;
    }

    console.log(greeting());

// Local scope overrides the global scope.  Above Friday was already
// declared a var but through Global; inside the function Monday was
// declared.

    function checkday() {
        var day = "Monday";
        return day;
    }

    console.log("It's " + checkday());
})

// to call function since anonymous just place parens ()


// Immediately-Invoked Function Expression (IIFE)
// in order to make your code hard to run use this. place a anonymous
// function at beginning and wrap around the entire script.




























