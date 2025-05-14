import {settings} from "./settings";
import {Projectile} from "./Projectile";
import {Animation} from "../framework25/Animation";
import {Collision} from "../framework25/helpers/Collision";

export class Game {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly sprite: HTMLImageElement;
    private animation: Animation;

    constructor() {
        this.canvas = document.getElementById(settings.canvas.id) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.animation = new Animation(this.canvas, this.ctx);
        this.sprite = new Image();
        this.sprite.src = settings.sprite;
        this.sprite.addEventListener('load', () => {
            this.animation.start();
        });
        this.canvas.addEventListener('click', (evt: MouseEvent) => {
            const correctedX = evt.clientX - this.canvas.getBoundingClientRect().x;
            const correctedY = evt.clientY - this.canvas.getBoundingClientRect().y;
            this.animation.iAnimatables.forEach((projectile: Projectile) => {
                if (Collision.isPointInRotatedRectangle(
                    projectile.frame.dw,
                    projectile.frame.dh,
                    projectile.position,
                    projectile.rotation,
                    {
                        x: correctedX,
                        y: correctedY,
                    }
                )) {

                    if (projectile.hiddenNumber < 0) {
                        this.animation.stop();
                    } else {
                        console.log("À vous de jouer !! ")
                    }

                }
            })
        })
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