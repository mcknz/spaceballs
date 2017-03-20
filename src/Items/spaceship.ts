import Item from './Item';
import * as Assets from '../assets';
export default class Spaceship extends Item {
    /**
     *
     */
    constructor() {
        super();

    }
    private _spaceshipImage: Phaser.Image;
    private _width: Number = 64;
    private _height: Number = 64;
    GetImage(game) {
        let x = game.world.centerX - (this._width / 2);
        this._spaceshipImage = game.add.image(, game.world.centerY, Assets.Images.ImagesSpaceship.getName());
        return this._spaceshipImage;
    }
    RotateClockwise(direction) {
        this._spaceshipImage.angle += 1;
    }
    RotateCounterClockwise() {
        this._spaceshipImage.angle -= 1;
    }
    Fire(game){

    }

}