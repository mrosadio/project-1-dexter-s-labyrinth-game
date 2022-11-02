class Background {

    constructor() {
        this.imageBlock;
        this.imageSprite;
        //this.imageSpriteRose;
        this.imageMicrochip;
        this.imageBlock;
    }
    
    preload() {
        this.imageBlock       = loadImage("../img/field/map-block.png");
        this.imageSprite      = loadImage("../img/field/map-sprite.png");
        //this.imageSpriteRose  = loadImage("../img/field/map-sprite-rose.png");
        this.imageMicrochip   = loadImage("../img/field/microchip.jpg");
    }

    drawMap() {
        for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
            image(this.imageSprite, i, 0, SQUARE_SIDE, SQUARE_SIDE);
            image(this.imageSprite, i, HEIGHT-SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);
        }
        for (let i = 0; i <= HEIGHT; i += SQUARE_SIDE) {
            image(this.imageSprite, 0, i, SQUARE_SIDE, SQUARE_SIDE);
            image(this.imageSprite, 0 + WIDTH-SQUARE_SIDE, i, SQUARE_SIDE, SQUARE_SIDE);
        }
        for (let i = SQUARE_SIDE; i <= WIDTH - (SQUARE_SIDE * 2); i += SQUARE_SIDE) {
            for (let j = 0; j <= HEIGHT - (SQUARE_SIDE * 3); j += SQUARE_SIDE) {
                image(this.imageBlock, i, SQUARE_SIDE + j, SQUARE_SIDE, SQUARE_SIDE);
            }
        }
        /*for (let i = SQUARE_SIDE; i <= (SQUARE_SIDE * 3); i += SQUARE_SIDE) {
            image(this.imageSpriteRose, i, 900, SQUARE_SIDE, SQUARE_SIDE);
        }*/
    }
}