var database;
var position;
var form,game;
var player;
var PlayerCount;

gameState=0;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game();
  game.getState();
  game.start();

}

function draw(){
  
  
  
  
}

