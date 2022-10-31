class Obstacles {

    constructor() {
        this.bolt;
    }

    preload() {
        this.bolt = loadImage("../img/obstacles/bolt.png");
    }

    draw() {
        for (let i = SQUARE_SIDE; i <= (SQUARE_SIDE * 7); i += SQUARE_SIDE) {
            image(this.bolt, SQUARE_SIDE * 4, i, SQUARE_SIDE, SQUARE_SIDE);
        }
        image(this.bolt, SQUARE_SIDE * 4, SQUARE_SIDE * 10, SQUARE_SIDE, SQUARE_SIDE);
        image(this.bolt, SQUARE_SIDE * 4, SQUARE_SIDE * 11, SQUARE_SIDE, SQUARE_SIDE);
        image(this.bolt, SQUARE_SIDE * 9, SQUARE_SIDE * 2, SQUARE_SIDE, SQUARE_SIDE);
        image(this.bolt, SQUARE_SIDE * 9, SQUARE_SIDE * 7, SQUARE_SIDE, SQUARE_SIDE);
        image(this.bolt, SQUARE_SIDE * 12, SQUARE_SIDE * 3, SQUARE_SIDE, SQUARE_SIDE);
        image(this.bolt, SQUARE_SIDE * 12, SQUARE_SIDE * 8, SQUARE_SIDE, SQUARE_SIDE);
        image(this.bolt, SQUARE_SIDE * 16, SQUARE_SIDE * 2, SQUARE_SIDE, SQUARE_SIDE);
        image(this.bolt, SQUARE_SIDE * 16, SQUARE_SIDE * 6, SQUARE_SIDE, SQUARE_SIDE);
        
    }
}