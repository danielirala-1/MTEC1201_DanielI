// DANIEL IRALA MIDTERM_DanielI
// Lovebird
// Press SPACEBAR to see a fun fact.
// Press X to change the background randomly

let fact;
let img;
let img2;
let img3;
let img4;
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
  img = loadImage('Image/lovebird1.png');
  img2 = loadImage ('Image/habitat.jpg');
  img3 = loadImage ('Image/tree.jpg');
  img4 = loadImage ('Image/sky.jpg');
  //myFont = loadFont (myfont)
}


function setup() {
  createCanvas(1000, 1000);
  x = 0;
  y = 0;
  fontX = 0;
  fontY = 0;
  fact = '';
  images = [img, img2, img3, img4]; //Placeholder for background images 
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
  background (img2);
  textSize (30);
  textFont ("Impact");
  fill ("black");
  text("Press Spacebar to learn a bird fact", 600, 300, 150, 150);
  textFont ("Times New Roman")
  fill ("white")
   text(fact, 50, 150);
}
function stage3(){
  background (img3);
  textSize (30);
  textFont ("Impact");
  fill ("black");
  text("Press Spacebar to learn a bird fact", 600, 300, 150, 150);
  textFont ("Times New Roman")
  fill ("white")
   text(fact, 50, 150);
}
function stage1(){
  //background(background);
  background (220);
  //imageMode (CENTER);
  ms = millis ();  


  //Bottom floor is grass
  noStroke();
  fill("green")
  rect (0, 500, 1000, 100);

  //Tree
  fill ("brown");
  rect (750, 390, 25, 110);

  //Leaves
  fill ("darkgreen");
  circle (760, 350, 80);
  circle (730, 370, 60);
  circle (790, 370, 60);
  

  // image() draws the img with x, y coordinate, & width + height
  textSize (30);
  textFont ("Impact");
  fill ("black");
  
  //if (ms / 1000 > 3) {
    image(img, x, y, 200, 200);
  //}

  text("Press Spacebar to learn a bird fact", 600, 300, 150, 150);
  textFont ("Times New Roman")
   text(fact, 50, 150);

  fontX++;
  fontY++;
  
  x++
  y++
}


function keyPressed(){
  if (key ===' '){
    print("Spacebar pressed")
    if (state === 1)
      fact= " Lovebirds are native to mainland Africa and the island of Madagascar "
    if (state === 2)
      fact= " Lovebirds fact 2 insert later"
    if (state === 3)
      fact= "Lovebirds fact 3 insert later"
    textSize (30);
  textFont ("Impact");
  fill ("black");
    text (fact,50, 150);
    //x,y, width, height
  }
  if (key === 'r'){
    state = 1
    fact = ""
  }
}
function mousePressed(){
  state= state+1
  fact = ""
}

  //Press X to change background to a random background
