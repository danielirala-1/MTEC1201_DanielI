// DANIEL IRALA MIDTERM_DanielI
// Lovebird
// Press SPACEBAR to see a fun fact.
// Press X to change the background color randomly

let fact;
let img;
let myFont;
let x;
let y;

let fontX;
let fontY;
let ms;
let seconds;
let images;
let bckimage;
let state;

//Have a picture of a Lovebird move across the canvas with some text appear 
function preload() {
  img = loadImage('Image/lovebird.png');
  //img2 = loadImage ('Image/')
  //img3 = loadImage
  //img4 = loadImage
  //myFont = loadFont (myfont)
}


function setup() {
  createCanvas(600, 600);
  x = 0;
  y = 0;
  fontX = 0;
  fontY = 0;
  fact = '';
  //images = [img1, img2, img3]; //Placeholder for background images 
  state = 1 
}

function draw() {
  if (state === 1){
    stage1();
  }
  if (state === 2){
    stage2();

  }
  if (state === 3){
    stage3();
  }
}
function stage2(){
  background ("red");
}
function stage3(){
  background ("blue")
}
function stage1(){
  //background(background);
  background (220);
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

  text("Press Spacebar to learn a bird fact", 300, 300, 150, 150);
   text(fact, 200, 150);

  fontX++;
  fontY++;
  
  x++
  y++
}


function keyPressed(){
  if (key ===' '){
    print("Spacebar pressed")
    fact= "lovebird fact work in progress"
    textSize (30);
  textFont ("Impact");
  fill ("black");
    text (" lovebird fact work in progress",200, 150);
    //x,y, width, height
  }
  if (key === 'x'){
    //background = images [random(2)]
  }
}
function mousePressed(){
  state= state+1
}

  //Press X to change background to a random
