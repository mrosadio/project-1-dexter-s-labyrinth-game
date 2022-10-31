/* ----------------------------------------------- */
/* ------------ Call classes functions ----------- */
/* ----------------------------------------------- */

/*const game      = new Game();*/
const player    = new Player(0, 0);
const background = new Background();

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
   //canvas.parent("canvas");
}

function preload() {
  background.preload();
  player.preload();
}

function draw() {
    background.drawMap();
    player.draw();
  }

function keyPressed() {
  player.keyPressed();
}