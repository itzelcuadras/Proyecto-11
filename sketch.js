var sea, seaImg
var ship,shipImg

function preload(){
seaImg = loadImage("sea.png")
shipImg = loadAnimation("ship-1.png","ship-2.png")
}

function setup(){
  createCanvas(400,400) 
  sea = createSprite(0,0,400,400)
  sea.addImage(seaImg)

  ship = createSprite(150,180,20,50)
  ship.addAnimation(shipImg)
  ship.scale = 0.5
}

function draw(){
background(0)
   sea.velocityX = -3

   if (sea.x <0){
        sea.x=sea.width/2
    }

    drawSprites()
}