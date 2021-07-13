const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var pBase, cBase
var play, cPlay

function preload(){
  backgroundImg = loadImage("./assets/back.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
pBase = new PlayerBase(300,random(450,height-300),180,150);
play = new Player(285,pBase.body.position.y - 95,50,80);
cBase = new ComputerBase(900,random(450,height-300),180,150);
cPlay = new Comp(885,cBase.body.position.y - 95,50,80);

}

function draw() {

  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
    pBase.display();
    play.display();
    cBase.display();
    cPlay.display();
}
