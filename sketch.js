var roof;
var  bob1,bob2,bob3,bob4,bob5;
var rope1, rope2,rope3,rope4,rope5;

var bobDiameter = -50;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2-50,270,width/2-100,20);
	
	
	bob1 = new Bob(220+10,485,50);
	bob2 = new Bob(280+10,485,50);
	bob3 = new Bob(340+10,485,50);
	bob4 = new Bob(400+10,485,50);
	bob5 = new Bob(460+10,485,50);
	
	
	
	rope1 = new Rope(bob1.body,roof.body,-120,0);
	rope2 = new Rope(bob2.body,roof.body,-60,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,60,0);
	rope5 = new Rope(bob5.body,roof.body,120,0);




Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
	roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();



if(keyDown("up")){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-65, y: 85});
	
	}

	/*if( bob1.isTouching(bob2)){
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x:85, y: -85});
	}*/

}



