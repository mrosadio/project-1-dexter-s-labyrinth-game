class Chips {

    constructor(x, y) {
        this.chip
        this.x      = x;
        this.y      = y;
    }

    draw() {
        image(this.chip, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE);
    }

}

class Bytes {

    constructor(x, y) {
        this.byte;
        this.x      = x;
        this.y      = y;
    }

    draw() {
        image(this.byte, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE);
    }

}


class Points {

    constructor() {
        this.chip;
        this.byte;
        this.positionChips  = [];
        this.xChips         = [400, 900, 900, 1200, 1200, 1600, 1600, 1800];
        this.yChips         = [800, 800, 300,  400,  900,  300, 700,  100];
        this.positionBytes  = [];
        this.xBytes         = [100, 200, 300, 100, 200, 300, 500];
        this.yBytes         = [1000, 1000, 1000, 1100, 1100, 1100, 800];
        this.createPositions();
    }

    createPositions() {
        for (let i = 0; i < this.xChips.length; i++) {
            this.positionChips.push(new Chips(this.xChips[i], this.yChips[i]));
        }
        for (let i = 0; i < this.xBytes.length; i++) {
            this.positionBytes.push(new Bytes(this.xBytes[i], this.yBytes[i]));
        }
    }

    preload() {
        this.chip           = loadImage("../img/points/chip.png");
        this.byte           = loadImage("../img/points/byte-front.png");
    }

    draw() {
        this.positionChips.forEach(function(chip) {
            chip.draw();
        })
        this.positionBytes.forEach(function(byte) {
            byte.draw();
        })
    }
    
}