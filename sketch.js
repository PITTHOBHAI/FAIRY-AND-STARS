var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var invisible;
var invisible2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairy1.png","images/fairy2.png");
	bgImg = loadImage("images/starnight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	invisible = createSprite(720,300,10,750);
	invisible.visible = false;

	invisible2 = createSprite(400,510,800,10);
	invisible2.visible = false;
	Engine.run(engine);
}


function draw() {
  background(bgImg);
  fairy.collide(invisible);
  star.collide(invisible2);
 
 keyPressed();
  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyDown(RIGHT_ARROW)){
		fairy.velocityX = 5;
	}
  
	if(keyDown(LEFT_ARROW)){
		fairy.velocityX = -5;
	}
	if(keyDown(DOWN_ARROW)){
		star.velocityY = 5;
	}
    if(frameCount%60){
		star.velocityY=2;
	}
}

// made by prithviraj