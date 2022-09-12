//Initial canvas configuration and physics settings//
var config = {
  type: Phaser.AUTO,
  width: 900,
  height: 480,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 200
      }
    }
  },
  scene: [startMenu, howToMenu, timerTest]
};

let text;
let timedEvent;

//Calls config and starts game//
var game = new Phaser.Game(config);
