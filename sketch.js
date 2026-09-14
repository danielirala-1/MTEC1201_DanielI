function setup() {
  // createCanvas () -- two arguments (width, height)
  createCanvas(400, 400);

}

function draw() {
  //background - setting your background color
  background("orange");
  fill ("red")

  //strokeweight -- thickness
  strokeWeight(10);

  // line - two sets of coordinates
  line(50, 50, 100, 200);

  line(300, 10, 40, 100);

  line(600, 600, 810, 700) 

  fill("teal")
  rect(200, 150, 50, 200);

  strokeWeight(3)
  fill("green")
  circle(40, 40, 50);


}
