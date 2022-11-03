/* ----------------------------------------------- */
/* ----------- Call classes & functions ---------- */
/* ----------------------------------------------- */


const points      = new Points();
const obstacles   = new Obstacles();
const player      = new Player(0, 0, points, obstacles);
const background  = new Background();
const exit        = new Exit();

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
}

function preload() {
  background.preload();
  player.preload();
  points.preload();
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
    bolt.sprite = loadImage("../img/field/map-sprite-rose.png");
  })
}

function draw() {
    background.drawMap();
    player.draw();
    points.draw();
    obstacles.draw();
    exit.draw()
}

function keyPressed() {
  player.keyPressed();
  player.collision();
}
