
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof,b1,b2,b3,b4,b5,r1,r2,r3,r4,r5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,700,50);
	b1=new Bob(250,600);
	r1=new Rope(b1.body,roof.body,-150,0);
	b2=new Bob(329,600);
	r2=new Rope(b2.body,roof.body,-(150-2*b2.radius),0);
	b3=new Bob(409,600);
	r3=new Rope(b3.body,roof.body,-(150-4*b3.radius),0);
	b4=new Bob(489,600);
	r4=new Rope(b4.body,roof.body,-(150-6*b2.radius),0);
	b5=new Bob(569,600);
	r5=new Rope(b5.body,roof.body,-(150-8*b2.radius),0)
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("lemonchiffon");
  roof.display();
  b1.display();
  r1.display();
  b2.display();
  r2.display();
  b3.display();
  r3.display();
  b4.display();
  r4.display();
  b5.display();
  r5.display();
  drawSprites();
 fill("black")
  //text(mouseX+","+mouseY,mouseX,mouseY)
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-500,y:0})
	}
}



