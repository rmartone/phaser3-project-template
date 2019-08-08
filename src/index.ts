import Phaser from 'phaser';

const width = window.innerWidth;
const height = window.innerHeight;

class Scene extends Phaser.Scene {
  public preload(): void {
    this.load.image('logo', 'logo.png');
  }

  public create(): void {
    this.tweens.add({
      targets: this.add.image(width / 2, height / 4, 'logo'),
      y: height * 0.75,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1,
    });
  }
}

export const game = new Phaser.Game({
  title: 'phaser-example',
  type: Phaser.AUTO,
  width,
  height,
  scene: Scene,
});
