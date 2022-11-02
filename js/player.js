class Player {

    constructor(row, col, points, obstacles) {
        this.dexterStart;
        this.dexterPush;
        this.dexterPushStop;
        this.dexterPath;
        this.image;
        this.score              = 0;
        this.row                = SQUARE_SIDE;
        this.col                = SQUARE_SIDE;
        this.points             = points;
        this.obstacles          = obstacles;
        this.usedPath           = [[this.row, this.col]];
    }

    preload() {
        this.dexterStart    = loadImage("../img/player/dexter-start-position.png");
        this.dexterPush     = loadImage("../img/player/dexter-push.png");
        this.dexterPushStop = loadImage("../img/player/dexter-push-stop.png");
        this.dexterPath     = loadImage("../img/player/dexter-path.png");
        this.image          = this.dexterStart;
    }

    draw() {
        image(this.image, this.row, this.col, SQUARE_SIDE, SQUARE_SIDE);
        /* Draw player path. Last item of array should draw Dexter */        
        for (let coordinates of this.usedPath) {
            image(this.dexterPath, coordinates[0], coordinates[1], SQUARE_SIDE, SQUARE_SIDE)
            if (coordinates === this.usedPath[this.usedPath.length - 1]) {
                image(this.image, coordinates[0], coordinates[1], SQUARE_SIDE, SQUARE_SIDE);
            }
        }  
    }

    moveUp() {
        this.checkPossibleMoves();
        if (this.moveUpPossible) {
            if (this.col > SQUARE_SIDE) {
                this.col  -= SQUARE_SIDE;
                this.image = this.dexterStart;
            }
            this.checkPossibleMoves();
        }
    }
    
    moveDown() {
        this.checkPossibleMoves();
        if (this.moveDownPossible) {
            if (this.col < HEIGHT - (SQUARE_SIDE * 2)) {
                this.col  += SQUARE_SIDE;
                this.image = this.dexterStart;
            }
            this.checkPossibleMoves();
        }
    }
    
    moveLeft() {
        this.checkPossibleMoves();
        if (this.moveLeftPossible) {
            if (this.row > SQUARE_SIDE) {
                this.row  -= SQUARE_SIDE;
                this.image = this.dexterStart;
            }
            this.checkPossibleMoves();
        }
    }
    
    moveRight() {
        this.checkPossibleMoves();
        if (this.moveRightPossible) {
            if (this.row < WIDTH - (SQUARE_SIDE * 2)) {
                this.row  += SQUARE_SIDE;
                this.image = this.dexterPush;
            }
            this.checkPossibleMoves();
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

        this.usedPath.push([this.row, this.col]);
        console.log(this.usedPath);
    }

    collision() {
        /* Remove chips objects from coordinates array */
        this.points.positionChips = this.points.positionChips.filter(chip => {
            if (dist(this.row, this.col, chip.x, chip.y) < SQUARE_SIDE) {
                this.score++
                document.querySelector("#score span").innerText = this.score;
                return false;
            } else return true;
        })
        /* Remove bytes objects from coordinates array */
        this.points.positionBytes = this.points.positionBytes.filter(byte => {
            if (dist(this.row, this.col, byte.x, byte.y) < SQUARE_SIDE) {
                this.score++
                document.querySelector("#score span").innerText = this.score;
                return false;
            } else return true;
        })
    }

    checkPossibleMoves() {
        this.moveUpPossible     = true;
        this.moveDownPossible   = true;
        this.moveLeftPossible   = true;
        this.moveRightPossible  = true;
        this.obstacles.positionBolts.forEach(position => {
            if (position.x === this.row && position.y === this.col - SQUARE_SIDE) {
                this.moveUpPossible = false;
            }
        });
        this.obstacles.positionBolts.forEach(position => {
            if (position.x === this.row && position.y === this.col + SQUARE_SIDE) {
                this.moveDownPossible = false;
            }
        });
        this.obstacles.positionBolts.forEach(position => {
            if (position.x === this.row - SQUARE_SIDE && position.y === this.col) {
                this.moveLeftPossible = false;
            }
        });
        this.obstacles.positionBolts.forEach(position => {
            if (position.x === this.row + SQUARE_SIDE && position.y === this.col) {
                this.moveRightPossible = false;
            }
        });
    }

}