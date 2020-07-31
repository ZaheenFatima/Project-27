
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Roof1;
var bobObject1, bobObject2,bobObject3,bobObject4,bobObject5;
var rope1, rope2, rope3, rope4, ropet5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Roof1 = new roof(300,100,400,20);

	bobObject1 = new bob(200,500,50);
	bobObject2 = new bob(250,500,50);
	bobObject3 = new bob(300,500,50);
	bobObject4 = new bob(350,500,50);
	bobObject5 = new bob(400,500,50);

	var rope1 = new rope(bobObject1.body,Roof1.body,-50,0);
	var rope2 = new rope(bobObject2.body,Roof1.body,-50,0);
	var rope3 = new rope(bobObject3.body,Roof1.body,-50,0);
	var rope4 = new rope(bobObject4.body,Roof1.body,-50,10);
	var rope5 = new rope(bobObject5.body,Roof1.body,-50,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	Roof1.display();
	keyPressed();
  drawSprites();
 
}
function keyPressed (){
if (keyCode === UP_ARROW){
   Matter.Body.applyForce(bobObject1,400,450);
}
}



