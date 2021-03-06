(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {};
    person.firstName = "James";
    person.lastName = "Livingston";

    //shan shan review
    // var person = {
    //     firstName: 'James',
    //     lastName: 'Livingston'
    // };
    //
    // console.log(person.firstName)


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        console.log("Hello from " + this.firstName + " " + this.lastName);
    }
    person.sayHello();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


    for (var i = 0; i < shoppers.length; i++) {
        console.log("The amount : " + shoppers[i].amount);
        if (shoppers[i].amount >= 200) {
            console.log(shoppers[i].name + ", You receive the following discount: " + shoppers[i].amount * .12);

        } else {
            console.log("Sorry, " + shoppers[i].name + " you do not receive any discount");
        }
    }
})

//Shan Shan review
//     function getAmountAfterDiscount(shopper) {
//         return shopper.amount - shopper.amount * .12;
//     }
//     shoppers.forEach(function(shopper){
//         if (shopper.amount >= 200) {
//             var pay = shopper.amount - shopper.amount * .12;
//             console.log("Name: " + shopper.name + ", Original amount: " + shopper.amount + ", Discount: 12%, Amount after discount: " + pay + ".");
//
//         } else {
//             console.log("Name: " + shopper.name + ", Original amount: " + shopper.amount + ", No discount.");
//         }
//     });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
// var books = [
//         {title: "The Gospel of Matthew", author: "Apostle Matthew"},
//         {title: "The Gospel of Mark", author: "John Mark"},
//         {title: "The Gospel of Luke", author: "Saint Luke"},
//         {title: "The Gospel of John", author: "Apostle John"},
//         {title: "The Book of Acts", author: "Saint Luke"}
//     ];
// console.log(books[0].title, books[0].author);
// console.log(books[1].title, books[1].author);
// console.log(books[2].title, books[2].author);



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // books.forEach(function(element, index, array){
    //     console.log('The book at index ' + books.index + 'is:' + books[i].title + ", written by " + books[i].author );
    // });

    //shan shan review
    // for (var i = 0; i < books.length; i++) {
    //     console.log("The book at index " + i + ", titled: " + books[i].title + ", authored by: " + books[i].author);
    // }
    //
    // books.forEach(function(book, index){
    //    console.log("Book # " + (index + 1));
    //    console.log("Title: " + book.title);
    //    console.log("Author: " + book.author);
    //    console.log("---");
    // })
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    // var books = [
    //     {title: "The Gospel of Matthew", author: "Apostle Matthew"},
    //     {title: "The Gospel of Mark", author: "John Mark"},
    //     {title: "The Gospel of Luke", author: "Saint Luke"},
    //     {title: "The Gospel of John", author: "Apostle John"},
    //     {title: "The Book of Acts", author: "Saint Luke"}

//     function createBook(title, name) {
//         //get name array
//         var nameArr = name.split(" ");
//         var firstName = nameArr[0];
//         var lastName = nameArr[1];
//         return {
//             title: title,
//             author: name
//         };
//         function
//
// })();