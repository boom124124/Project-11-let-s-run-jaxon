
function preload(){
  //pre-load images
  path_image = loadImage("path.png")
  runner_animation = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  edges = createEdgeSprites();

  path = createSprite(200,200);
  path.addImage(path_image);
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(320,300,30,30);
  runner.addAnimation("runner_animation", runner_animation);
  runner.scale = 0.1;

}

function draw() {
  background(0);

  if(keyDown("A")) {
    runner.x = runner.x - 25;
  }

  if(keyDown("D")){
    runner.x = runner.x + 25;
  }

  if(path.y > 400) {
    path.y = height/2;
  }

  runner.x = mouseX

  runner.collide(edges[1]);
  runner.collide(edges[0]);
  
  drawSprites();
}
