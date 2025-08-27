export class Score {
    private scoreElement: HTMLParagraphElement;
    private score: number = 0;
    constructor() {
        this.scoreElement = document.getElementById('score') as HTMLParagraphElement;
    }

    public display() {
        this.scoreElement.textContent = `Score : ${this.score}`;
    }

    public addPoint() {
        this.score++;
        if (this.score === 5) {
            this.scoreElement.textContent = 'Bravo !';
        }
        this.display();
    }

    public loose() {
        this.score = 0;
        this.scoreElement.textContent = 'Perdu !';
    }
}