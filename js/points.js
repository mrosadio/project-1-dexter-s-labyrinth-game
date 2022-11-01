class Chips {

    constructor(x, y) {
        this.chip
        this.x      = x;
        this.y      = y;
    }

    preload() {
        // this.chip   = loadImage("../img/points/chip.png");
    }

    draw() {
        image(this.chip, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE);
    }

}

class Bytes {

    constructor(byte, x, y) {
        this.byte   = byte;
        this.x      = x;
        this.y      = y;
        console.log(this.byte);
    }

    preload() {
        // this.byte   = loadImage("../img/points/byte-front.png");
    }

    draw() {
        console.log(this.byte)
        console.log(this.x)
        console.log(this.y)
        image(this.byte, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE);
    }

}



class Points {

    constructor() {
        console.log("2")
        this.chip;
        this.byte;
        this.positionChips  = [];
        this.xChips         = [400, 900, 900, 1200, 1600, 1800];
        this.yChips         = [800, 800, 300,  900,  700,  100];
        this.positionBytes  = [];
        this.xBytes         = [100, 200, 300, 100, 200, 300];
        this.yBytes         = [1000, 1000, 1000, 1100, 1100, 1100];
        this.createPositions();
    }

    createPositions() {
        for (let i = 0; i < this.xChips.length; i++) {
            this.positionChips.push(new Chips(this.xChips[i], this.yChips[i]));
        }
        console.log(this.positionChips)
        // for (let i = 0; i < this.xBytes.length; i++) {
        //     this.positionBytes.push(new Bytes(this.byte, this.xBytes[i], this.yBytes[i]));
        // }
    }

    preload() {
        this.chip           = loadImage("../img/points/chip.png");
        this.byte           = loadImage("../img/points/byte-front.png");
    }

    draw() {
        /* for (let i = 0; i < this.xChips.length; i++) {
            this.positionChips.push(new Chips(this.chip, this.xChips[i], this.yChips[i]));
        } */
        this.positionChips.forEach(function(chip) {
            chip.draw();
        })
        /* for (let i = 0; i < this.xBytes.length; i++) {
            this.positionBytes.push(new Bytes(this.byte, this.xBytes[i], this.yBytes[i]));
        } */
        this.positionBytes.forEach(function(byte) {
            byte.draw();
        })
    }
}