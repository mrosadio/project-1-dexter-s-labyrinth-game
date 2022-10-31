class Player {

    constructor() {
        this.dexterStart;
        this.dexterPush;
        this.dexterPushStop;
        this.image;
        this.row = SQUARE_SIDE;
        this.col = SQUARE_SIDE;
    }

    preload() {
        this.dexterStart    = loadImage("../img/player/dexter-start-position.png");
        this.dexterPush     = loadImage("../img/player/dexter-push.png");
        this.dexterPushStop = loadImage("../img/player/dexter-push-stop.png");
        this.image = this.dexterStart;
    }

    draw() {
        image(this.image, this.row, this.col, SQUARE_SIDE, SQUARE_SIDE);
    }

    moveUp() {
        if (this.col > SQUARE_SIDE) {
          this.col  -= SQUARE_SIDE;
          this.image = this.dexterStart;
        }
      }
    
    moveDown() {
        if (this.col < HEIGHT - (SQUARE_SIDE * 2)) {
          this.col  += SQUARE_SIDE;
          this.image = this.dexterStart;
        }
    }
    
    moveLeft() {
        if (this.row > SQUARE_SIDE) {
          this.row  -= SQUARE_SIDE;
          this.image = this.dexterStart;
        }
    }
    
    moveRight() {
        if (this.row < WIDTH - (SQUARE_SIDE * 2)) {
          this.row  += SQUARE_SIDE;
          this.image = this.dexterPush;
        }
    }
      
    keyPressed() {
        if (keyCode === 37) {
            this.moveLeft();
        } if (keyCode === 39) {
            this.moveRight();
        } if (keyCode === 38) {
            this.moveUp();
        } if (keyCode === 40) {
            this.moveDown();
        }
    }
}