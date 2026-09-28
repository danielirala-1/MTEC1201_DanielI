// DanielI Title: Changing Colors
let circleColor = "red";

function setup() {
    createCanvas(500, 500);
}

// Have shapes change different colors each time a mouse is pressed.
function draw () {
    background (220);
     
    
    fill (circleColor);
    circle (150, 50, 100);

    rect (40, 30, 55, 50);

    triangle (30, 75, 55, 20, 86, 75);
}

//Change color of the shape each time the mouse is pressed.
function mousePressed() {
    circleColor = "green";
    background (220);

}
