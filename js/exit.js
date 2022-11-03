class Exit {

    constructor(player) {
        this.player = player;
        this.exitImageLocked;
        this.exitImageUnlocked;
        this.gameOverImage;
        this.x = WIDTH  - (SQUARE_SIDE * 2);
        this.y = HEIGHT - (SQUARE_SIDE * 2);
    }

    preload() {
        this.exitImageLocked    = loadImage("../img/exit/exit-locked.png");
        this.exitImageUnlocked  = loadImage("../img/exit/exit-unlocked.png");
        this.gameOverImage      = loadImage("../img/field/map-sprite.png");
    }

    draw() {
        image(this.exitImageLocked, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE);
        if (player.score === POINTSMAX) {
            image(this.exitImageUnlocked, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE);
        }
    }

    collisionExit() {
        for (let position of this.player.usedPath) {
            if (position[0] === this.x && position[1] === this.y) { //If player goes through exit
                for (let x = SQUARE_SIDE; x < WIDTH; x += SQUARE_SIDE) {
                    for (let y = SQUARE_SIDE; y < HEIGHT; y+= SQUARE_SIDE) {
                        image(this.gameOverImage, x, y, SQUARE_SIDE, SQUARE_SIDE);
                    }
                }
            document.getElementById('game-over').classList.remove('hidden');
            }
        }

    }

}