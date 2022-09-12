//Starting Page//
class startMenu extends Phaser.Scene {
  constructor() {
    super({key:"startMenu"});
  }

  preload() {
    this.load.image('testImage', 'assets/testImage.png')
    this.load.image('howToTestButton', 'assets/placeHolderHowToOverlay.png')
    this.load.image('startTestButton', 'assets/placeHolderStartOverlay.png')
    this.load.image('titleTestOverlay', 'assets/placeHolderTitleOverlay.png')
  }

  create() {
    let titleOverlay = this.add.image(450, 100, 'titleTestOverlay');
    let startButtonOverlay = this.add.image(450, 280, 'startTestButton').setInteractive();
    let howToButtonOverlay = this.add.image(450, 380, 'howToTestButton').setInteractive();

    //Transitions to how to menu on click of how to button//
    howToButtonOverlay.on("pointerup", () => {
      this.scene.start('howToMenu');
    });

    //Transition to gameplay//
    startButtonOverlay.on("pointerup", () => {
      this.scene.start('timerTest');
    });
  }
}
