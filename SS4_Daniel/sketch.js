//DANIEL IRALA SS4_Daniel 
//Lovebird

let img;
let myFont;
let x;
let y;

let fontX;
let fontY;
let ms;
let seconds;

//Have a picture of a Lovebird move across the canvas with some text appear 
function preload() {
  img = loadImage('images/bird.jpeg');
  //myFont = loadFont (myfont)
}


function setup() {
  createCanvas(600, 600);
  x = 0;
  y = 0;
  fontX = 0;
  fontY = 0;
}

function draw() {
  background(200);
  imageMode (CENTER);
  ms = millis ();  

  //Bottom floor is grass
  noStroke();
  fill("green")
  rect (0, 500, 600, 100);

  //Tree
  fill ("brown");
  rect (450, 390, 25, 110);

  //Leaves
  fill ("darkgreen");
  circle (460, 350, 80);
  circle (430, 370, 60);
  circle (490, 370, 60);
  

  // image() draws the img with x, y coordinate, & width + height
  textSize (30);
  textFont ("Impact");
  fill ("black");
  
  if (ms / 1000 > 3) {
    image(img, x, y, 200, 200);
  }

  text("Check this bird out", 300, 300, 150, 150);
  fontX++;
  fontY++;
  
  x++
  y++
}
