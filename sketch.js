var track,trackimg
var boy,boyimg
function preload(){
  //pre-load images
  trackimg=loadImage("path.png")
  boyimg=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track=createSprite(200,200)
  track.velocityY=4
  track.addImage(trackimg)


  boy=createSprite(180,340,30,30)
  boy.addAnimation("Runner",boyimg)
  boy.scale=0.08
}

function draw() {
  background(0);
  boy.x=World.mouseX
if(track.y>400){
  track.y=height/2
}
drawSprites()

}
