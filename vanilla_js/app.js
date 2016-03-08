document.addEventListener("DOMContentLoaded", function() {

    //1. Add a class of special to all of the <li> elements at the second level of the nested list.

    var secondLevels = document
        .querySelectorAll("#selected-plays > li > ul > li");

    for (var i = 0; i < secondLevels.length; i++) {
        secondLevels[i]
            .classList
            .add("special");
    }

    //2. Add a class of year to all of the table cells in the third column of a table.

    var tdS = document
        .querySelectorAll("td:nth-child(3)");

    for (var i = 0; i < tdS.length; i++) {
        tdS[i]
            .classList
            .add("year");
    }

    //3. Make every other table row in both tables have a gray background.

    var trS = document
        .querySelectorAll("tr:nth-child(odd)");

    for (var i = 0; i < trS.length; i++) {
        trS[i]
            .setAttribute("style", "background-color: #CCC;");
    }

    //4. Select an anchor tag that has a link to a pdf file. Change the color to blue and increase the font size.

    document
        .querySelector("a[href$='.pdf']")
        .setAttribute("style", "font-size:1.5em; color: blue;");

    //5. Select an anchor tag that has an href attribute containing the substring "asyoulikeit" and change the font color to orange.

    document
        .querySelector("a[href*='asyoulikeit']")
        .setAttribute("style", "color:orange;");

});
