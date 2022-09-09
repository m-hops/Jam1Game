//Test scene: Created only for testing purposes only//
class test1 extends Phaser.Scene {
  constructor() {
    super({key:"test1"});
  }

  preload() {
    this.load.image('testImage', 'assets/testImage.png')
  }

  create() {
    this.image = this.add.image(400, 300, 'testImage');
  }
}
