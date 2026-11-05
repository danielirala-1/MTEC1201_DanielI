// DanielI 

let x = 0;
let y= 300;

let speed = 3;

let r;
let g;
let b;

function setup() {
  createCanvas (600, 600);
  r = 10;
  g = 50;
  b = 150;
}

function draw () {
  background(220);
  fill (r, g, b);

  // if x is hitting either edge, swap its direction
  // || = OR operator; && AND operator
  if (x > 600 || x < 0) {
    speed = - 1 * random(0.5, 5.5);

    if (speed > 10 || x < 0 {
      speed = 1;
    }

    print("X: " + x);
    print ("speed: " + speed);
  }
  x = x + speed;
  ellipse (x, y, 100;

  function mousePressed() {
    x = 0;
  }

  function keyPressed() {
    if (key === 'r') {
      r = random(255);
      g = random(255);
      b = random(255);
    }
  }