class Points {

    constructor() {
        this.byte;
        this.chip;
        this.diskette;
        this.power;
    }

    preload() {
        this.byte       = loadImage("../img/points/byte-front.png");
        this.chip       = loadImage("../img/points/chip.png");
        this.diskette   = loadImage("../img/points/diskette.png");
        this.power      = loadImage("../img/points/power.png");
    }

    draw() {
        // Draw chips
        image(this.chip, SQUARE_SIDE * 4, SQUARE_SIDE * 8, SQUARE_SIDE, SQUARE_SIDE);
        image(this.chip, SQUARE_SIDE * 9, SQUARE_SIDE * 8, SQUARE_SIDE, SQUARE_SIDE);
        image(this.chip, SQUARE_SIDE * 9, SQUARE_SIDE * 3, SQUARE_SIDE, SQUARE_SIDE);
        image(this.chip, SQUARE_SIDE * 13, SQUARE_SIDE * 9, SQUARE_SIDE, SQUARE_SIDE);
        image(this.chip, SQUARE_SIDE * 16, SQUARE_SIDE * 7, SQUARE_SIDE, SQUARE_SIDE);
        image(this.chip, SQUARE_SIDE * 18, SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);

        // Draw bytes
        for (let i = SQUARE_SIDE; i <= (SQUARE_SIDE * 3); i += SQUARE_SIDE) {
            for (let j = 0; j <= SQUARE_SIDE; j += SQUARE_SIDE) {
                image(this.byte, i, HEIGHT - (SQUARE_SIDE * 3) + j, SQUARE_SIDE, SQUARE_SIDE);
           }
        }
        image(this.byte, SQUARE_SIDE * 16, SQUARE_SIDE * 3, SQUARE_SIDE, SQUARE_SIDE);
        image(this.byte, SQUARE_SIDE * 12, SQUARE_SIDE * 4, SQUARE_SIDE, SQUARE_SIDE);
    }
}