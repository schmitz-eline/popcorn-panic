import {iFrame} from "./types/iFrame";

export class DrawFrame {
    private ctx: CanvasRenderingContext2D;
    private sprite: HTMLImageElement;
    public frame: iFrame;
    public rotation: number = 0;

    constructor(ctx: CanvasRenderingContext2D, sprite: HTMLImageElement, frame: iFrame, rotation: number = 0) {
        this.ctx = ctx;
        this.sprite = sprite;
        this.frame = frame;
        this.rotation = rotation;
    }

    draw() {
        // TODO : fix this
        if (this.rotation === 0) {
            this.ctx.drawImage(
                this.sprite,
                this.frame.sx,
                this.frame.sy,
                this.frame.sw,
                this.frame.sh,
                this.frame.dx,
                this.frame.dy,
                this.frame.dw,
                this.frame.dh,
            );
        } else {
            this.ctx.save();
            this.ctx.translate(this.frame.dx, this.frame.dy);
            this.ctx.rotate(this.rotation);

            this.ctx.drawImage(
                this.sprite,
                this.frame.sx,
                this.frame.sy,
                this.frame.sw,
                this.frame.sh,
                -this.frame.dw / 2,
                -this.frame.dh / 2,
                this.frame.dw,
                this.frame.dh,
            );

            this.ctx.restore();
        }
    }

}