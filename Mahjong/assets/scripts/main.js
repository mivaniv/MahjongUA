let config ={
    type:Phaser.AUTO,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width:1920,
    height:1080,
    rows:4,
    cols:4,
    cards:[1,2,3,4,5,6,7,8],
    timeout:40,
    scene: new GameScene()
};
let game =new Phaser.Game(config)