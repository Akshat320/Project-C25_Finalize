
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;


	box1 = new Dustbin(950,625,250,20);
	box2 = new Dustbin(1065,485,20,310);	
	box3 = new Dustbin(835,485,20,310);
	ball = new PaperBall(150,150,80)
	ground = new Ground(600,645,1200,20);
	
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  ground.display();

  
keyPressed();
  drawSprites();
 
}

function keyPressed()
	{
		if (keyCode === UP_ARROW)
		{
			Matter.Body.applyForce(ball.body, ball.body.position,{x:140,y:-195})
		}
	}




