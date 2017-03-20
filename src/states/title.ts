import * as Assets from '../assets';

export default class Title extends Phaser.State {
    private projectileSpritesheet: Phaser.Sprite = null;

    public preload(): void {
        this.projectileSpritesheet = this.game.add.sprite(
            this.game.world.centerX,
            this.game.world.centerY,
            Assets.Spritesheets.SpritesheetsProjectileSprites.getName()
        );
        this.projectileSpritesheet.animations.add('projectile', [56]);
        this.projectileSpritesheet.animations.play('projectile', 30, true);
    }

    public create(): void {
        // this.game.camera.flash(0x000000, 1000);
    }
}
