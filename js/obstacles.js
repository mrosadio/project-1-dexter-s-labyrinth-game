class Bolts {
    
    constructor(x, y, image) {
        this.image  = image;
        this.bolt;
        this.sprite;
        this.x      = x;
        this.y      = y;
    }

    draw() {
        if (this.image === `bolt`) {
            image(this.bolt, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE);
        } else image(this.sprite, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE);
    }

}


class Obstacles {

    constructor() {
        this.bolt;
        this.sprite;
        this.positionBolts   = [];
        this.xBolts          = [/* 400,*/  400, 400, 400, 400, 400, 400, 400, 400, 900, 900, 1200, 1200, 1600, 1600, 100, 200, 300];
        this.yBolts          = [/*1000,*/ 1100, 100, 200, 300, 400, 500, 600, 700, 200, 700,  300,  800,  200,  600, 900, 900, 900];
        this.createPositions();
    }

    createPositions() {
        for (let i = 0; i < this.xBolts.length; i++) {
            if (i >= this.xBolts.length - 3) {
                this.positionBolts.push(new Bolts(this.xBolts[i], this.yBolts[i], `sprite`));
            } else this.positionBolts.push(new Bolts(this.xBolts[i], this.yBolts[i], `bolt`));
        }
    }

   preload() {
        this.bolt   = loadImage("../img/obstacles/bolt.png");
        this.sprite = loadImage("../img/field/map-sprite-rose.png");
    }

    draw() {
        this.positionBolts.forEach(function(bolt) {
            bolt.draw();
        })
    }

}