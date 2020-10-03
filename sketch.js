var frect, mrect;

function setup() {
  createCanvas(800,400);
  mrect = createSprite(200, 200, 50, 50);
  mrect.shapeColor = "black";

  frect = createSprite(600, 200, 50, 50)
  frect.shapeColor = "black";
}

function draw() {
  background(255,255,255); 
  
  mrect.x = mouseX;
  mrect.y = mouseY;

  if (mrect.x - frect.x < mrect.width/2 + frect.width/2 && frect.x - mrect.x < mrect.width/2 + frect.width/2 &&
      mrect.y - frect.y < mrect.height/2 + frect.height/2 && frect.y - mrect.y < mrect.height/2 + frect.height/2 ){
     
    mrect.shapeColor = "red";
    frect.shapeColor = "red";

  }  else {
    mrect.shapeColor = "black";
    frect.shapeColor = "black";
  }
  
  drawSprites();

  
}