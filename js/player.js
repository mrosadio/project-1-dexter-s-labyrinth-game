class Player {

    constructor(row, col, points) {
        this.dexterStart;
        this.dexterPush;
        this.dexterPushStop;
        this.image;
        this.row    = SQUARE_SIDE;
        this.col    = SQUARE_SIDE;
        this.points = points;
        this.score  = 0;
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

    collision() {
        this.points.positionChips = this.points.positionChips.filter(chip => {
            if (dist(this.row, this.col, chip.x, chip.y) < SQUARE_SIDE) {
                this.score++
                document.querySelector("#score span").innerText = this.score;
                return false;
            } else {
                return true;
            }
        })
    }

    /*
    collisionObstacle() {
        if (dist(this.row, this.col, ))
    }
    */

}