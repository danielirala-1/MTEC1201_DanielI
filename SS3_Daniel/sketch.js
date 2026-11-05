//DanielI
//Random color generator
// When the circle reaches the end, have the color of the circle change to a random color
// When the mouse is pressed have the background change into a completely random color


let x = 0;
let y= 300;

let speed = 3;

let r;
let g;
let b;

let backgroundR;
let backgroundG;
let backgroundB;

function setup() {
  createCanvas (600, 600);
  r = 10;
  g = 50;
  b = 150;
  backgroundR, backgroundG, backgroundB = 220;
}


function draw() {
  background(backgroundR, backgroundG, backgroundB);
  fill (r, g, b);

  // if x is hitting either edge, swap its direction
  // || = OR operator; && AND operator
  if (x > 600 || x < 0) {
    speed = - 1 * random(0.5, 5.5);

    if (speed > 10 || x < 0) {
      speed = 1;
    }

    print("X: " + x);
    print ("speed: " + speed);
  }
  x = x + speed;

  if (x > 600 || x < 0) {
  
    r = random (255);
    g = random (255);
    b = random (255);

    fill (r, g, b);

    
  }
if (x > 200){

}
else if(){

}

else {

}

  ellipse (x, y, 100);
}

function mousePressed() {
    
    backgroundR = random(255)
    backgroundG = random(255)
    backgroundB = random(255)
}

function keyPressed() {
    if (key === 'r') {
      r = random(255);
      g = random(255);
      b = random(255);
    }
}


  
