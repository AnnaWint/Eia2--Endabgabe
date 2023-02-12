namespace Firework {

    /*
      Aufgabe: <Endabgabe_Firework>
      Name: <Anna Wintermantel>
      Matrikel: <271140>
      Datum: <>
      Quellen:<>
      */

    export abstract class Particle {
        color1: string;
        color2: string;
        form: string;
        xPosition: number;
        yPosition: number;
        xVector: number;
        yVector: number;
        crc2: CanvasRenderingContext2D;
        gradient: CanvasGradient;

        constructor(_color1: string, _color2: string, _form: string, _crc2: CanvasRenderingContext2D, xStartPosition: number, yStartPosition: number, radius: string) {
            this.color1 = _color1;
            this.color2 = _color2;
            this.crc2 = _crc2;
            this.form = _form;

            this.xPosition = xStartPosition;
            this.yPosition = yStartPosition;

            console.log(radius)
            let radiusFactor: number = 1;
            if (radius == "small") {
                radiusFactor = 0.5;
            }
            else if (radius == "large") {
                radiusFactor = 2;
            }

            this.xVector = this.normalVerteilungY() * (30 / Explosion.FramesPerSecond) * radiusFactor;
            this.yVector = this.normalVerteilungY() * (30 / Explosion.FramesPerSecond) * radiusFactor;

            this.gradient = this.crc2.createLinearGradient(100, 200, 250, 500);
            this.gradient.addColorStop(0, this.color1);
            this.gradient.addColorStop(1, this.color2);
        }

        normalVerteilungY(): number {
            let res = Math.random();
            console.log(res);
            res *= Math.round(Math.random()) ? 1 : -1;
            return res;
        }

        draw(): void {
            this.xPosition += this.xVector;
            this.yPosition += this.yVector;

            this.actualDraw();
        }

        abstract actualDraw(): void;
    }
}