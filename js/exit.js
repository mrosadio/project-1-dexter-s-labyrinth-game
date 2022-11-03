class Exit {

    constructor() {
        //this.player;
        this.exitImageLocked;
        this.exitImageUnlocked;
        this.x = WIDTH  - (SQUARE_SIDE * 2);
        this.y = HEIGHT - (SQUARE_SIDE * 2);
    }

    preload() {
        this.exitImageLocked    = loadImage("../img/exit/exit-locked.png");
        this.exitImageUnlocked  = loadImage("../img/exit/exit-unlocked.png");
    }

    draw() {
        image(this.exitImageLocked, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE);
        if (player.score === POINTSMAX) {
            image(this.exitImageUnlocked, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE);
        }
    }

    /* Add collision function 
    1. When exit portal turned green and player collides with exit
    2. Background should disappear 
    3. Insert text for Next level
    */

}