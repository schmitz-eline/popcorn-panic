export class Timer {
    private timer: HTMLParagraphElement;
    private timeLeft: number = 10;
    private timerId: number = null;
    constructor() {
        this.timer = document.getElementById('timer') as HTMLParagraphElement;
    }

    public display() {
        this.timer.textContent = `Temps restant : ${this.timeLeft}s`;
    }

    public start() {
        this.timerId = setInterval(() => {
            this.timeLeft--;
            this.display();
            if (this.timeLeft === 0) {
                clearInterval(this.timerId);
                this.timer.textContent = 'Temps écoulé !';
            }
        }, 1000);
    }
}