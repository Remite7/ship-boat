
var sea;
var seaImg;
var ship;
var shipImg1;

function preload(){
  seaImg = loadImage("sea.png")
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-1.png", "ship-2.png")

}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,200,400,400);
  sea.addImage("sea" , seaImg);
  sea.velocityX = -2;
  sea.scale = 0.3 ;

  ship = createSprite(120,160,100,100)
  ship.addAnimation("boating" , shipImg1);
  ship.scale = 0.3;
}


function draw() {
  background("blue");
  if (sea.x < 0) {
    sea.x = sea.width/10 ; 
  }
  drawSprites();
}
