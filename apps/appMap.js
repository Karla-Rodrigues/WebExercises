//
//    Karla Rodrigues #300997958
//    Final Exame
//    Winter 2019
//   
//

"use strict";
// global variables
var waitForUser;
function setUpPage() {
    var buttons = document.querySelectorAll("#cities div");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", createMap, false);
    }
}
function geoTest() {
    waitForUser = setTimeout(fail, 10000);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(createMap, fail, { timeout: 10000 });
    } else {
        fail();
    }
}

function createMap(position) {
    var Lat;
    var Lng;
    clearTimeout(waitForUser);
    if (position.coords) {
        Lat = position.coords.latitude;
        Lng = position.coords.longitude;
        var mapOptions = {
            center: new google.maps.LatLng(Lat, Lng),
            zoom: 16
        };
    } else {
        var city = this.innerHTML;
          if (city === "Beijing") {
            Lat = "39.912729";
            Lng = "116.395985";
        } else if (city === "Paris") {
            Lat = "48.8564826";
            Lng = "2.3524135";
        } else if (city === "Rio") {
            Lat = "-22.9133954";
            Lng = "-43.2007101";
        } else if (city === "Kabul") {
            Lat = "34.543773";
            Lng = "69.202501";
        } else if (city === "NY") {
            Lat = "40.712567";
              Lng = "-74.000324";
          } else if (city === "Dublin") {
              Lat = "53.350140";
              Lng = "-6.266155";
          } else if (city === "Amsterdam") {
              Lat = "52.379189";
              Lng = "4.899431";
        }

        document.getElementById("caption").innerHTML = city;
        var mapOptions = {
            center: new google.maps.LatLng(Lat, Lng),
            zoom: 11
        };
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    console.log(Lat);
    console.log(Lng);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(Lat, Lng),
        map: map
    });
}
function fail() {
    document.getElementById("map").innerHTML = "Unable to access your current location.";
}
// run setUpPage() function when page finishes loading
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
}