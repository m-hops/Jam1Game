class videoTest extends Phaser.Scene {
  constructor() {
    super({
      key: "videoTest"
    });
  }

  preload() {
    this.load.video('testVideo', 'assets/testVideo.mp4', 'loadedData', false, false);
  }

  create() {
    let testVid = this.add.video(400,300,'testVideo');

    testVid.play(true);

  }
}
