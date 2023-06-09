let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);
// Control vars
let keyF, keyR, keyLEFT, keyRIGHT;
// UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;