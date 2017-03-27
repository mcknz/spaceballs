export default class Item {
    constructor() {
    }
    GetImageCenter(gameX: number, gameY: number) {
        let center: { x: number, y: number } = { x: undefined, y: undefined };
        center.x = (gameX - (this._imageWidth / 2));
        center.y = (gameY - (this._imageHeight / 2));
        return center;
    };


    private _imageWidth: number;
    public get ImageWidth(): number {
        return this._imageWidth;
    }
    public set ImageWidth(v: number) {
        this._imageWidth = v;
    }


    private _imageHeight: number;
    public get ImageHeight(): number {
        return this._imageHeight;
    }
    public set ImageHeight(v: number) {
        this._imageHeight = v;
    }



}