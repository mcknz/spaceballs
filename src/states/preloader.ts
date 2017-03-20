import * as Assets from '../assets';
import * as AssetUtils from '../utils/assetUtils';

export default class Preloader extends Phaser.State {
    private preloadBarSprite: Phaser.Sprite = null;
    private preloadFrameSprite: Phaser.Sprite = null;

    public preload(): void {

        let gameX = this.game.world.centerX;
        let gameY = this.game.world.centerY;
        let preloadSpritesArrayName = Assets.Atlases.AtlasesPreloadSpritesArray.getName();

        this.loadBarSprite(gameX, gameY, preloadSpritesArrayName);
        this.loadFrameSprite(gameX, gameY, preloadSpritesArrayName);
        
        this.game.load.setPreloadSprite(this.preloadBarSprite);

        AssetUtils.Loader.loadAllAssets(this.game, this.startGame, this);
    }

    private loadBarSprite(x, y, arrayName): void {
        this.preloadBarSprite = this.game.add.sprite(
            x,
            y,
            arrayName,
            Assets.Atlases.AtlasesPreloadSpritesArray.Frames.PreloadBar
        );
        this.preloadBarSprite.anchor.setTo(0, 0.5);
        this.preloadBarSprite.x -= this.preloadBarSprite.width * 0.5;
    }

    private loadFrameSprite(x, y, arrayName): void {
        this.preloadFrameSprite = this.game.add.sprite(
            x,
            y,
            arrayName,
            Assets.Atlases.AtlasesPreloadSpritesArray.Frames.PreloadFrame);
        this.preloadFrameSprite.anchor.setTo(0.5);
    }

    private startGame(): void {
        this.game.camera.onFadeComplete.addOnce(this.loadTitle, this);
        this.game.camera.fade(0x000000, 1000);
    }

    private loadTitle(): void {
        this.game.state.start('title');
    }
}
