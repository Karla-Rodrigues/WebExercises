/*    JavaScript 6th Edition
 *    Created by Karla Rodrigues - Created on January 30, 2019-->
 *    Filename: appCalender.js
 */

// global variables
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var dish = ["Large Pizza", "Small Pizza", "Small Pizza", "Small Pizza", "Large Pizza", "Large Pizza", "Large Pizza",
"Large Pizza", "Large Pizza", "Large Pizza", "Large Pizza", "Raviolli", "Raviolli", "Raviolli",
"Raviolli", "CLOSE", "River Riders", "River Riders", "Small Pizza", "Penne con Pollo", "Penne con Pollo",
"Penne con Pollo", "CLOSE", "Raviolli", "Raviolli", "Raviolli", "Small Pizza", "Small Pizza", "Small Pizza",
"CLOSE", "CLOSE"];

var serving =    ["out", "out", "out", "out", "ins", "ins", "ins", "ins", "ins", "ins", "ins", "out", "out", "out",
"out", "", "out", "out", "out", "out", "out", "out", "", "ins", "ins", "ins", "ins", "ins","ins", "", ""];

// function to place days of week values in header row cells
function addColumnHeaders()
   { var i = 0;
     while (i < 7)
     { document.getElementsByTagName("th") [i].innerHTML = daysOfWeek[i];
       i++;
     }
   }

// function to place day of month value in first p element within each table data cell that has an id
function addCalendarDates() {
   var i = 1;
   var paragraphs = "";
   do {
      var tableCell = document.getElementById("01-" + i);
      paragraphs = tableCell.getElementsByTagName("t");
      paragraphs[0].innerHTML = i + "<br>";
      i++;
   } while (i<= 31);
}

// function to place dish and serving values in second p element within each table data cell that has an id
function addServingLocal() {
   var paragraphs = "";
   for (var i = 0; i < 31; i++) {
   
      var date = i + 1;
      var tableCell = document.getElementById("01-" + date);
      paragraphs = tableCell.getElementsByTagName("l");
      
      if (serving[i] === "out") { paragraphs[0].innerHTML = "Delivery <br>";}
      if (serving[i] === "ins") { paragraphs[0].innerHTML = "Restaurant <br>";}
      
      switch (serving[i]) {
      case"out":
         paragraphs[0].innerHTML = "Delivery <br>";
         break;
      case"ins":
         paragraphs[0].innerHTML = "Restaurant <br>";
         break;
      }
      paragraphs[1].innerHTML = dish[i];
   }
}

// function to populate calendar
function setUpPage() {
   addColumnHeaders();
   addCalendarDates();
   addServingLocal();
}

// runs setUpPage() function when page loads
// this is to if use explorer it will go like bug to the segundo
if (window.addEventListener) {
   window.addEventListener("load", setUpPage, false);
}else if (window.attachEvent) {
   window.attachEvent("onload", setUpPage);
}
setUpPage;

