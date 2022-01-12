const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var wall1, wall2, wall3, wall4;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  wall1 = new Ground(200,390,400,20);
  wall2 = new Ground(390,200,20,400);
  wall3 = new Ground(10,200,20,400);
  wall4 = new Ground(200,10,400,20);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  wall1.show();
  wall2.show();
  wall3.show();
  wall4.show();
}

