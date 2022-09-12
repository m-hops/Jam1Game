class timerTest extends Phaser.Scene {
  constructor() {
    super({
      key: "timerTest"
    });
  }

  create() {
    text = this.add.text(32, 32);

    timedEvent = this.time.delayedCall(300000, this.switchScene);
  }

  update() {
    text.setText('Event.progress: ' + timedEvent.getProgress().toString().substr(0, 4));
  }

  switchScene() {
    console.log("hit");
  }
}
