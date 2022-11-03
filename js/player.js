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
        this.subObstacles       = [];
    }

    preload() {
        this.dexterStart    = loadImage("img/player/dexter-start-position.png");
        this.dexterPush     = loadImage("img/player/dexter-push.png");
        this.dexterPushStop = loadImage("img/player/dexter-push-stop.png");
        this.dexterPath     = loadImage("img/player/dexter-path.png");
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
        this.moveObstacles();
    }

    collision() {
        /* Remove chips objects from coordinates array */
        this.points.positionChips = this.points.positionChips.filter(chip => {
            if (dist(this.row, this.col, chip.x, chip.y) < SQUARE_SIDE) {
                this.score += 100;
                document.querySelector("#score span").innerText = this.score;
                return false;
            } else return true;
        })
        /* Remove bytes objects from coordinates array */
        this.points.positionBytes = this.points.positionBytes.filter(byte => {
            if (dist(this.row, this.col, byte.x, byte.y) < SQUARE_SIDE) {
                this.score += 100;
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

    moveObstacles() {
        let xCollision;
        let yCollision;
        for (let obstacle of this.obstacles.positionBolts) {
            for (let position of this.usedPath) {
                if (obstacle.x === position[0] && obstacle.y + SQUARE_SIDE === position[1]) {
                    xCollision = obstacle.x;
                    yCollision = obstacle.y + SQUARE_SIDE;
                    console.log(xCollision, yCollision);
                }
            }
        }
        if (xCollision && yCollision && this.row === xCollision + SQUARE_SIDE && this.col === yCollision) { 
            
            // Define y-coordinate where subarray selection should stop   
            /*let yObstacleStop = yCollision;
            console.log(this.obstacles.positionBolts);
            for (let obstacle of this.obstacles.positionBolts) {
                if (yObstacleStop - SQUARE_SIDE === obstacle.y) {
                    yObstacleStop = obstacle.y;
                }
                else {
                    yObstacleStop = yCollision - SQUARE_SIDE; 
                }
                console.log(yObstacleStop);
            }
            console.log(yObstacleStop);
            */
            // Select only obstacles in x-coordinate of and that stops in last obstacle of y-coordinate 
            this.subObstacles = this.obstacles.positionBolts.filter(element => {
                if (element.x === xCollision && element.y < yCollision /*&& element.y >= yObstacleStop*/) { //Add if-condition above to filter only obstacles that are continuos in the y-cordinates
                    return true;
                } else return false;
            })
            for (let element of this.subObstacles) {
                element.y = element.y + SQUARE_SIDE;
            }
            xCollision = null;
            yCollision = null;
        }
        // Update players path 
        for (let obstacle of this.subObstacles) {
            this.usedPath = this.usedPath.filter(element => {
               if (element[0] === obstacle.x && element[1] === obstacle.y) return false;
               else return true;
            })
        }

    }

}