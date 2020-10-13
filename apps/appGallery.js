/* put the information from the HTML to Java variables */
var principalImage = document.getElementById("BigImage");
var thumbnailImage = document.getElementById("SmallImage");

/* these functions open the big image on click in a new window */
function view() {
    imgsrc = BigImage.src;
    viewwin = window.open(imgsrc, 'viewwin', 'width=440,height=330');
}

function openWin() {
    window.open('zoom.html', ' ', 'width=420,height=400');
}

function closeWin() {
    window.close();
}

function imgFunc() { 
/* verify the thumbnail image was clicked */
    
    thumbnailImage.addEventListener("click", function (event) {
    
/* if the event was in a image, move the information from the variable to HTML variable */
    
        if (event.target.tagName == "IMG") {
            BigImage.src = event.target.src;
        }
        
    }, false);
}
window.addEventListener("load", imgFunc, false);