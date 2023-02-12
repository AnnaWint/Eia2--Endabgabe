namespace Firework{

   export class Dots extends Particle  {

       actualDraw(): void {
            let radius: number = 2;

            this.crc2.beginPath();
            this.crc2.arc(this.xPosition, this.yPosition, radius, 0, Math.PI * 2); //die ersten Zahlen sind später click
            this.crc2.fillStyle = this.gradient;
            this.crc2.fill();
            this.crc2.closePath();
       }
}

}

