import * as Assets from '../assets';
import Spaceship from '../Items/spaceship';

export default class Title extends Phaser.State {
    private projectileSpritesheet: Phaser.Sprite = null;
    private weapon: Phaser.Weapon = null;

    public preload(): void {

        let gameX: number = this.game.world.centerX;
        let gameY: number = this.game.world.centerY;

        this.addProjectiles(gameX, gameY);
        this.projectileSpritesheet = this.game.add.sprite(
            gameX,
            gameY,
            Assets.Spritesheets.SpritesheetsProjectileSprites.getName()
        );
        this.projectileSpritesheet.animations.add('projectile', [56]);
        this.projectileSpritesheet.animations.play('projectile', 30, true);
    }

    public create(): void {
        // this.game.camera.flash(0x000000, 1000);
    }

    private addProjectiles(x: number, y: number): void {
        this.weapon = this.add.weapon(10, 'bullet'); 
        this.weapon.fireFrom.setTo(x, y, 1,1);
    }
}