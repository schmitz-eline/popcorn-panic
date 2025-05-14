import {DrawFrame} from "../framework25/DrawFrame";
import {iAnimatable} from "../framework25/types/iAnimatable";
import {iFrame} from "../framework25/types/iFrame";
import {Vector} from "../framework25/Vector";
import {randomFloat, randomInt} from "../framework25/helpers/random";
import {settings} from "./settings";

export class Projectile extends DrawFrame implements iAnimatable {
    shouldBeRemoved: boolean = false;
    public position: Vector;
    private speed: Vector;
    private acceleration: Vector;
    private canvas: HTMLCanvasElement;
    private clockwise: boolean;
    public hiddenNumber: number;


    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: HTMLImageElement, frame: iFrame, rotation: number, hiddenNumber:number) {
        super(ctx, sprite, frame, rotation);
        this.canvas = canvas;
        this.hiddenNumber = hiddenNumber;
        this.initValues();

    }

    private initValues() {
        this.clockwise = Math.random() > 0.5;

        this.speed = Vector.fromAngle(
            randomFloat(settings.projectiles.angle.min, settings.projectiles.angle.max),
            randomInt(settings.projectiles.magnitude.min, settings.projectiles.magnitude.max),
        );

        this.position = new Vector({
            y: this.canvas.height + this.frame.sh / 2,
            x: randomInt(this.frame.sw / 2, this.canvas.width - this.frame.sw / 2)
        });

        this.acceleration = new Vector({
            x: 0,
            y: randomFloat(settings.projectiles.acceleration.min, settings.projectiles.acceleration.max),
        });
    }

    animate(): void {
        this.update();
        this.draw();
    }

    private checkEdges(): boolean {
        return this.position.y > this.canvas.height + this.frame.sh;
    }



    private update() {
        if (this.checkEdges()) {
            this.initValues();
        }

        this.speed.add(this.acceleration);
        this.position.add(this.speed);

        if (this.clockwise) {
            this.rotation += settings.projectiles.rotation;
        } else {
            this.rotation -= settings.projectiles.rotation;
        }

        this.frame.dx = this.position.x;
        this.frame.dy = this.position.y;

    }
}