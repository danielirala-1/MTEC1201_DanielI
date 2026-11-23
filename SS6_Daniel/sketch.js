// DANIEL IRALA
// SS6_DANIELI
// SOLAR SYSTEM
// CLICK ANYWHERE TO ADD A PLANET UNLIMITED AMOUNT
// PRESS R TO RESTART

// ARRAYS
let planetsX = [];
let planetsY = [];
let planetColors = [];
let img;
let planetSizes = [];

function preload(){
img = loadImage('image/space.jpg')
}

function setup() {
  createCanvas(800, 800);
  planetColors = ["pink", "teal", "orange", "red", "blue", "green", "purple", "indigo"];
}
function draw(){

  //Planet colors is stored in an 
  background (img);
  //Draw every planet in the array
  for (let i = 0; i < planetsX.length; i++) {

    fill(planetColors[i% planetColors.length])
    noStroke();
    

    // Draw each planet using its position and size.
    circle(planetsX [i], planetsY[i], planetSizes [i])

  }
}
function mousePressed(){
  planetsX.push(mouseX);
  planetsY.push(mouseY);
  planetSizes.push (random(30,150));
}
/*


 // Draw every planet in the array
  for (let i = 0; i < planets.length; i++) {

    fill(planets[i].c);
    noStroke();

    // Draw each planet using its position and size.
    circle(planets[i].x, planets[i].y, planets[i].size);





let x1 = 200
let x2 = 300 
let x3 = 400 

let xPositions = [200, 300, 400, 500, 600, 700, 430, 150];
let yPositions = [10, 40, 70, 80, 200, 400, 430, 150];
let colors = ["blue", "purple", "green", "teal", "indigo", "orange", "pink"] 
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  fill ("white");
  
  for (let i = 0; i < xPositions. length; i++) {
    fill (colors[i]);
    circle (xPositions [i], yPositions [i], 50);
    yPositions [i]+= 2;
    xPositions [i]+= 2;
  }
}
*/