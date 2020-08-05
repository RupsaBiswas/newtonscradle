
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob,bob1,bob2,bob3,bob4;
var ground;
var rope,rope1,rope2,rope3,rope4;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob= new Bob(200,650,50,50);
	bob1=new Bob(212,650,50,50);
	bob2=new Bob(224,650,50,50);
	bob3= new Bob(236,650,50,50);
	bob4= new Bob(248,650,50,50);
	roof= new Roof(800,0,800,10);


	Engine.run(engine);
  
	rope = new Rope(bob.body,roof.body,bobDiamter*2,0);
	rope1= new Rope(bob1.body,roof.body,bobDiamter*2,0);
	rope2= new Rope(bob2.body,roof.body,bobDiamter*2,0);
	rope3= new Rope(bob3.body,roof.body,bobDiamter*2,0);
	rope4= new Rope(bob4.body,roof.body,bobDiamter*2,0);





}


function draw() {
  rectMode(CENTER);
  background(0);

  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  roof.display();
  rope.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display()
  
  drawSprites();
 
}




function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob.body,bob.body.position,{x:185});
	}
	 }
 

