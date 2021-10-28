var dot
function setup() {
  createCanvas(800,600);
  dot = createSprite(400,300,15,15)
  dot.shapeColor = "lightgreen"
}


function draw() 
{
  background(30);
  if(keyDown("w")){
    dot.y = dot.y-3
  }
  if(keyDown("s")){
    dot.y = dot.y+3
  }
  if(keyDown("a")){
    dot.x = dot.x-3
  }
  if(keyDown("d")){
    dot.x = dot.x+3
  }
  drawSprites()

}




