
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide;
var rightSide;
var keyCode;


function preload()
{
	
}

function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(width/2,570,width,20);
	leftSide=new Ground(1100,500,20,120);
	rightSide=new Ground(900,500,20,120);


	//crear los cuerpos aquí.
     var ball_option={
		 isStatic:false,
		 restitution:0.3,
		 friction:0,
		 density:1.2
	 }
	 ball=Bodies.circle(200,80,25,ball_option);
     World.add(world,ball);

	Engine.run(engine);
  
  
	rectMode(CENTER);
  ellipseMode(RADIUS);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("blue");
  ellipse(ball.position.x,ball.position.y,25);
  ground.show();
  leftSide.show();
  rightSide.show();
  keyPressed();
  Engine.update(engine);

  

  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode ===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.8,y:-0.8});
	}
}





