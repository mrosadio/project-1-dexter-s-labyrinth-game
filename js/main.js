/* ----------------------------------------------- */
/* ------------ Call classes functions ----------- */
/* ----------------------------------------------- */

/*const game      = new Game();*/
const points      = new Points();
const player      = new Player(0, 0, points);
const background  = new Background();

const bolts       = new Bolts();
const obstacles   = new Obstacles();
const exit        = new Exit();

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
   //canvas.parent("canvas");
}

function preload() {
  background.preload();
  player.preload();
  points.preload();
  bolts.preload();
  obstacles.preload();
  exit.preload();
  points.positionChips.forEach((chip) => {
    chip.chip   = loadImage("../img/points/chip.png");
  })
}

function draw() {
    background.drawMap();
    player.draw();
    //bytes.draw();
    //chips.draw();
    points.draw();
    bolts.draw();
    obstacles.draw();
    exit.draw();
  }

/*function collision() {
  player.collision();
}*/


function keyPressed() {
  player.keyPressed();
  player.collision();
}
