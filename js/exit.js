class Exit {

    constructor() {
        this.imageExit;
    }

    preload() {
        this.imageExit = loadImage("../img/exit/exit.png");
    }

    draw() {
        image(this.imageExit, WIDTH - (SQUARE_SIDE * 2), HEIGHT - (SQUARE_SIDE * 2), SQUARE_SIDE, SQUARE_SIDE);
    }

}