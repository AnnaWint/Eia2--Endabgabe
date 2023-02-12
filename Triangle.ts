namespace Firework{

    export class Triangle extends Particle {
        actualDraw(): void {
            this.xPosition += this.xVector;
            this.yPosition += this.yVector;
            this.crc2.beginPath();
            this.crc2.moveTo(this.xPosition, this.yPosition);
            this.crc2.lineTo(this.xPosition, this.yPosition + 10);
            this.crc2.lineTo(this.xPosition + 20, this.yPosition + 2);
            this.crc2.closePath();
            this.crc2.fillStyle = this.gradient;
            this.crc2.fill();
        }

    }
}