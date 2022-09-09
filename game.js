//Initial canvas configuration and physics settings//
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 200
      }
    }
  },
  scene: [test1]
};

//Calls config and starts game//
var game = new Phaser.Game(config);
