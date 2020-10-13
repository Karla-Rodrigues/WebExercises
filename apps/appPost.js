/*  
    <!--
      Karla Rodrigues #300997958
      Final Exame
      Winter 2019
   -->
*/

"use strict";

// global variables
var httpRequest = false;
var countrySel;

function getRequestObject() {
   try {
      httpRequest = new XMLHttpRequest();
   }
   catch (requestError) {
      // display city & state fields and labels for manual input
      document.getElementById("zipset").style.visibility = "visible";
       document.getElementById("csset").style.visibility = "visible";

      // remove event listeners so additional input is ignored
      var de = document.getElementById("de");
      var us = document.getElementById("us");
      var fi = document.getElementById("fi");
      var it = document.getElementById("it");
      var zip = document.getElementById("zip").value;

      if (zip.addEventListener) {
         de.removeEventListener("click", checkButtons, false);
         us.removeEventListener("click", checkButtons, false);
         fi.removeEventListener("click", checkButtons, false);
         it.removeEventListener("click", checkButtons, false);
         zip.removeEventListener("keyup", checkInput, false);
      } else if (zip.attachEvent) {
         de.detachEvent("onclick", checkButtons);
         us.detachEvent("onclick", checkButtons);
         fi.detachEvent("onclick", checkButtons);
         it.detachEvent("onclick", checkButtons);
         zip.detachEvent("onkeyup", checkInput);
      }
      return false;
   }
   return httpRequest;
}

function checkButtons() {
   var de = document.getElementById("de");
   var us = document.getElementById("us");
   var fi = document.getElementById("fi");
   var it = document.getElementById("it");
   if (de.checked || us.checked || fi.checked || it.checked) {
      document.getElementById("zipset").style.visibility = "visible";
      
      if (de.checked)
         { countrySel = "de"; }
      if (us.checked)
         { countrySel = "us"; }
      if (fi.checked)
         { countrySel = "fi"; }
      if (it.checked)
         { countrySel = "it"; }
    }
}

function checkInput() {
   var zip = document.getElementById("zip").value;
   if (zip.length === 5) {
      getLocation();
   } else {
      document.getElementById("city").value = "";
      document.getElementById("state").value = "";
   }
}

function getLocation() {
   var zip = document.getElementById("zip").value;
   if (!httpRequest) {
      httpRequest = getRequestObject();
   }
   httpRequest.abort();
   httpRequest.open("get","http://api.zippopotam.us/" + countrySel + "/" + zip, true);
   httpRequest.send();
   httpRequest.onreadystatechange = displayData;
}

function displayData() {
   if(httpRequest.readyState === 4 && httpRequest.status === 200) {
      var resultData = JSON.parse(httpRequest.responseText);
      var city = document.getElementById("city");
      var state = document.getElementById("state");
      city.value = resultData.places[0]["place name"];
      state.value = resultData.places[0]["state abbreviation"];
      document.getElementById("zip").blur();
      document.getElementById("csset").style.visibility = "visible";
   } 
}

var de = document.getElementById("de");
var us = document.getElementById("us");
var fi = document.getElementById("fi");
var it = document.getElementById("it");

if (us.addEventListener) {
   us.addEventListener("click", checkButtons, false);
} else if (us.attachEvent) {
   us.attachEvent("onclick", checkButtons);
}
if (de.addEventListener) {
   de.addEventListener("click", checkButtons, false);
} else if (de.attachEvent) {
   de.attachEvent("onclick", checkButtons);
}
if (fi.addEventListener) {
   fi.addEventListener("click", checkButtons, false);
} else if (fi.attachEvent) {
   fi.attachEvent("onclick", checkButtons);
}
if (it.addEventListener) {
    it.addEventListener("click", checkButtons, false);
} else if (it.attachEvent) {
    it.attachEvent("onclick", checkButtons);
}




var zip = document.getElementById("zip");
if (zip.addEventListener) {
   zip.addEventListener("keyup", checkInput, false);
} else if (zip.attachEvent) {
   zip.attachEvent("onkeyup", checkInput);
}

