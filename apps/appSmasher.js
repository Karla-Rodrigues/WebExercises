// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 980;
canvas.height = 420;
document.getElementById("theCanvas").appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "images/kitchen.png";

// Bug image
var bugReady = false;
var bugImage = new Image();
bugImage.onload = function () {
    bugReady = true;
};
bugImage.src = "images/ant.png";

// initialize score to 0
var score = 0;
// initialize hop interval to 2 seconds
var hopInterval = 2000;
//set hopping 
var hop = setInterval(function () {
    resetLocation();
}, hopInterval);

var bug = {
    speed: 256 // movement in pixels per second
};

// Handle mouse click events to check if the user clicked
// on the bug
canvas.addEventListener("mousedown", clicked, false);
function clicked(e) {
    e.preventDefault();
    // Get the location of the mouse click
    var x = e.clientX;
    var y = e.clientY; 

    console.log("x " + x);
    console.log("y " + y);
    console.log("bug x " + bug.x);
    console.log("bug y " + bug.y);
	
    // check if the player clicked on the bug
    if (x > bug.x && x < bug.x + 37 && y > bug.y && y < bug.y + 185) {
        // increment score by 10
        score += 10;
        resetLocation();
        // reduce hop interval, but should not be less than 0
        if (hopInterval - 100 >= 50) {
            clearInterval(hop);
            hopInterval -= 100;
            hop = setInterval(function () {
                resetLocation();
            }, hopInterval);

        }
    }
}

// Reset the bug location when the player restarts or catches a bug
var resetLocation = function () {
    // Throw the bug somewhere on the screen randomly
    bug.x = 32 + (Math.random() * (canvas.width - 64));
    bug.y = 32 + (Math.random() * (canvas.height - 64));
};

// Reset hopping interval
var resetSpeed = function () {
    clearInterval(hop);
    hopInterval = 2000;
    hop = setInterval(function () {
        resetLocation();
    }, hopInterval);
};
var resetScore = function () {
    score = 0;
    // reset the speed
    resetSpeed();
};

// Draw everything
var render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    if (bugReady) {
        ctx.drawImage(bugImage, bug.x, bug.y);
    }

    // Score
    document.getElementById("score").innerHTML = "Score : " +score;
};

// The main game loop
var main = function () {
    render();

    // Request to do this again ASAP
    requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame
        || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Play this game!
main();
