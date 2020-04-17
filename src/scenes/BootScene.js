class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
    this.levels = {
      title: { key: 'TitleScene', path: 'assets/levels/title_screen.json' },
      east: { key: 'HudScene', path: 'assets/levels/hud.json' },
      east: { key: 'WorldScene', path: 'assets/levels/east.json' },
      // east: { key: 'WorldScene', path: 'assets/levels/east.json' }, //menuScene, SelectCharacterScene
      // town: { key: 'WorldScene', path: 'assets/levels/town.json' },
      // cave: { key: 'WorldScene', path: 'assets/levels/cave.json' },
    };
  }

  init(data) {
    console.trace();
    debugger;
    this.data = data;
  }

  preload() {
    for (let level_name in this.levels) {
      let level = this.levels[level_name];
      this.load.json(level_name, level.path);
    }
  }

  create(data) {
    debugger;

    let level_data = this.cache.json.get(this.data.scene);
    this.scene.start('LoadingScene', {
      level_data: level_data,
      scene: this.levels[this.data.scene].key,
    });
  }
}

export default BootScene;
