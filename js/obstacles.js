class Bolts {
    
    constructor(bolt, x, y) {
        this.bolt   = bolt;
        this.x      = x;
        this.y      = y;
    }

    preload() {
        this.bolt   = loadImage("../img/obstacles/bolt.png");
    }

    draw() {
        image(this.bolt, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE);
    }

}


class Obstacles {

    constructor() {
        this.bolt;
        this.xBolts          = [ 400,  400, 400, 400, 400, 400, 400, 400, 400, 900, 900, 1200, 1200, 1600, 1600];
        this.yBolts          = [1000, 1100, 100, 200, 300, 400, 500, 600, 700, 200, 700,  300,  800,  200,  600];
        this.positionBolts   = [];
    }

    preload() {
        this.bolt = loadImage("../img/obstacles/bolt.png");
    }

    draw() {
        for (let i = 0; i < this.xBolts.length; i++) {
            this.positionBolts.push(new Bolts(this.bolt, this.xBolts[i], this.yBolts[i]));
        }
        this.positionBolts.forEach(function(bolt) {
            bolt.draw();
        })
    }

}