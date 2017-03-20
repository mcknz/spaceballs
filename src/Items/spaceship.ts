import Item  from './Item';
import * as Assets from '../assets';
export default class Spaceship extends Item {
    /**
     *
     */
    constructor() {
        super();
    }
    GetImage(game) {
        return game.add.image(game.world.centerX, game.world.centerY, Assets.Images.ImagesSpaceship.getName());
    }
    Rotate(){
        
    }
}