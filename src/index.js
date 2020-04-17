import Phaser from 'phaser';
import TitleScene from './scenes/TitleScene';
import WorldScene from './scenes/WorldScene';
import BootScene from './scenes/BootScene';
import LoadingScene from './scenes/LoadingScene';

let titleScene = new TitleScene();
let worldScene = new WorldScene();
let bootScene = new BootScene();
let loadingScene = new LoadingScene();
// let CreditsScene = new CreditsScene();

let config = {
  type: Phaser.AUTO,
  parent: 'cup-game',
  width: 640,
  height: 480,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
    },
  },
};

let game = new Phaser.Game(config);
game.scene.add('TitleScene', titleScene);
game.scene.add('WorldScene', worldScene);
game.scene.add('BootScene', bootScene);
game.scene.add('LoadingScene', loadingScene);
game.scene.start('BootScene', { scene: 'title' });

// const config = {
//   type: Phaser.AUTO,
//   width: 800,
//   height: 600,
//   scene: {
//     preload: preload,
//     create: create
//   }
// };

// const game = new Phaser.Game(config);

// function preload() {
//   this.load.image("logo", logoImg);
// }

// function create() {
//   const logo = this.add.image(400, 150, "logo");

//   this.tweens.add({
//     targets: logo,
//     y: 450,
//     duration: 2000,
//     ease: "Power2",
//     yoyo: true,
//     loop: -1
//   });
// }
