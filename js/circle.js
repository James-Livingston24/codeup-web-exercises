(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 5,

        getArea: function () {
            // TODO: complete this method
            var area = Math.PI * this.radius ** 2;
            // hint: area = pi * radius^2
            return area; // TODO: return the proper value
        },
           logInfo: function (doRounding) {
               // TODO: complete this method.

               if (doRounding === true) {
                   return (Math.round(doRounding));
               } else {
                   console.log("Area of a circle with radius: " + circle.radius + ", is: " + circle.getArea());
               }

               // If doRounding is true, round the result to the nearest integer.
               // Otherwise, output the complete value

           }

    };
    console.log(circle.getArea());
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();