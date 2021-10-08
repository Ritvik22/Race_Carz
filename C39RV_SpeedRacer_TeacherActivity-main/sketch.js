var canvas;
var backgroundImage, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;

var pc, pcImg;
var fuel, fuelImg;
var fuels, pcs;

var o1, obstacle1Image;
var o2, obstacle2Image;
var obstacles;

var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
  pcImg = loadImage("../assets/goldCoin.png");
  fuelImg = loadImage("../assets/fuel.png");
  obstacle1Image = loadImage("../assets/obstacle1.png");
  obstacle2Image = loadImage("../assets/obstacle2.png");
  lifeImage = loadImage("../assets/life.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  

}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
