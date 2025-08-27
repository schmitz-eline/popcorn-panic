import {settings} from "./settings";
import {Animation} from "../framework25/Animation";
import {Projectile} from "./Projectile";
import {Collision} from "../framework25/helpers/Collision";

export class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private animation: Animation;
    private sprite: HTMLImageElement;

    constructor() {
        this.canvas = document.getElementById(settings.canvas.id) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.animation = new Animation(this.canvas, this.ctx);
        this.sprite = new Image();
        this.sprite.src = settings.sprite;
        this.sprite.addEventListener('load', () => {
            this.animation.start();
        });
        this.canvas.addEventListener('click', (event: MouseEvent) => {
            const correctedX = event.clientX - this.canvas.getBoundingClientRect().x;
            const correctedY = event.clientY - this.canvas.getBoundingClientRect().y;
            this.animation.iAnimatables.forEach((projectile: Projectile) => {
                if (Collision.isPointInRotatedRectangle(
                    projectile.frame.dw,
                    projectile.frame.dh,
                    projectile.position,
                    projectile.rotation,
                    {
                        x: correctedX,
                        y: correctedY
                    }
                )) {
                    if (projectile.hiddenNumber < 0) {
                        this.animation.stop();
                    } else {
                        console.log('...');
                    }
                }
            });
        });
        this.generatePopcorns();
        this.generateCorns();
    }

    private generatePopcorns() {
        for (let i = 0; i < settings.popcorns.length; i++) {
            this.animation.registeriAnimatable(new Projectile(this.ctx, this.canvas, this.sprite, settings.popcorns[i], 0, i));
        }
    }

    private generateCorns() {
        for (let i = 0; i < settings.corns.length; i++) {
            this.animation.registeriAnimatable(new Projectile(this.ctx, this.canvas, this.sprite, settings.corns[i], 0, -1));
        }
    }
}