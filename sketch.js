var player1, player2;
var form, player, players;
var playerCount = 0;
var game, gameState = 0;
var bullet, allplayers;
var ball, position;

function setup(){
    createCanvas(800, 800);

    database = firebase.database();
    game = new Game();
    game.getstate();
    game.gamestart();


}

function draw() {
  background(0,0,0);

     if (playerCount === 2) {
       game.gameStateUpdate(1);
     }
     if (gameState === 1) {
       clear(); 
       game.play();


/*
       edges = creatEdgeSprites();
       ball.bounceOff(edges[0]);
       ball.bounceOff(edges[3]);
       ball.bounceOff(edges[2]);
       ball.bounceOff(edges[1]);
*/
       
     }
     if (gameState === 2) {
      
       game.end();
     }



drawSprites();
  }