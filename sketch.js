var canvas, backgroundImage;
var RedPlayer, BluePlayer, YellowPlayer, GreenPlayer, TrexPlayers;

var gameState = 0;
var contestantCount;
var allContestants;
var name;
var database;

var game, player, form;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score;

var gameOverImg,restartImg
var jumpSound , checkPointSound, dieSound;

var redRunning, blueRunning, yellowRunning, greenRunning;
var redDies, blueDies, yellowDies, greenDies;

function preload()
{

  redRunning = loadAnimation("RedTrex1.png", "RedTrex2.png", "RedTrex3.png");
  redDies = loadAnimation("RedDied.png");

  blueRunning = loadAnimation("BlueTrex1.png", "BlueTrex2.png", "BlueTrex3.png");
  blueDies = loadAnimation("BlueDied.png");

  yellowRunning = loadAnimation("YellowTrex1.png", "YellowTrex2.png", "YellowTrex3.png");
  yellowDies = loadAnimation("YellowDied.png");

  greenRunning = loadAnimation("GreenTrex1.png", "GreenTrex2.png", "GreenTrex3.png");
  greenDies = loadAnimation("GreenDied.png");

  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  
   restartImg = loadImage("restart.png");
  gameOverImg = loadImage("gameOver.png");
  
  jumpSound = loadSound("jump.mp3");
  dieSound = loadSound("die.mp3");
  checkPointSound = loadSound("checkPoint.mp3");


}

function setup()
{
  canvas = createCanvas(displayWidth, displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

 
  
  
}


function draw()
{
  background("lightblue");

  if(contestantCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  drawSprites();

}
