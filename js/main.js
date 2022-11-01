/* ----------------------------------------------- */
/* ------------ Call classes functions ----------- */
/* ----------------------------------------------- */

/*const game      = new Game();*/
const points      = new Points();
const player      = new Player(0, 0, points);
const background  = new Background();

//const bolts       = new Bolts();
const obstacles   = new Obstacles();
const exit        = new Exit();

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
}

function preload() {
  background.preload();
  player.preload();
  points.preload();
  //bolts.preload();
  obstacles.preload();
  exit.preload();
  points.positionChips.forEach((chip) => {
    chip.chip   = loadImage("../img/points/chip.png");
  })
  points.positionBytes.forEach((byte) => {
    byte.byte   = loadImage("../img/points/byte-front.png");
  })
  obstacles.positionBolts.forEach((bolt) => {
    bolt.bolt   = loadImage("../img/obstacles/bolt.png");
  })
}

function draw() {
    background.drawMap();
    player.draw();
    points.draw();
    //bolts.draw();
    obstacles.draw();
    exit.draw();
  }

function keyPressed() {
  player.keyPressed();
  player.collision();
}
