(function(){
    "use strict";

   var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
   console.log(planetsString);


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    //
    var planetsArray = planetsString.split('|');
    //console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var planetsJoinString = planetsArray.join("<br>");

    console.log(planetsJoinString);


    //Bonus // from the review please fix in your own work
    var stringAsUl = "<ul>" + planetsArray.map((planet) => { return "<li>" + planet + "</li>"}).join("") + "</ul>"

    var planetsHTML = '<ul></ul>' + planetsArray.join('</li></li>') + '</li></ul>';
    console.log(planetsHTML)


})();


