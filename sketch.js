
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options,ground,dustbin1,dustbin2,distbin3,ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(400,600,800,15);	//Create the Bodies Here.
	dustbin1=new Dustbin(700,590,100,10);
	dustbin2=new Dustbin(650,570,10,50);
	dustbin3=new Dustbin(750,570,10,50);
	ball=new paper(20,100,23);


	if(keyCode===UP_ARROW){
		Body.applyForce(ball.body,ball.body.position,{x:4,y:-5});
		console.log("done");
}
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyCode===UP_ARROW){
Body.applyForce(ball.body,ball.body.position,{x:46,y:-44});
keyCode=0;
}

  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){

		Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});

	}
	ground.display();

	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
  
	ball.display();
	drawSprites();


}

