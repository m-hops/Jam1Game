//Explanation of how to play the game//
class howToMenu extends Phaser.Scene {
  constructor() {
    super({
      key: "howToMenu"
    });
  }

  preload() {
    this.load.image('testImage', 'assets/testImage.png')
  }

  create() {
    this.add.image(450, 100, 'testImage');
  }
}
