namespace Firework {

    /*
        Aufgabe: <Endabgabe_Firework>
        Name: <Anna Wintermantel>
        Matrikel: <271140>
        Datum: <>
        Quellen:<>
        */


    export class PositionCanvas {

        static position: PositionCanvas;

        canvas: HTMLElement;
        xPosition: number;
        yPosition: number;


        handlePosition(): void {
            this.canvas = document.getElementById("canvas");
            this.canvas.addEventListener("mousedown", this.getPosition);
        }

        getPosition(_event: MouseEvent): void {

            this.xPosition = _event.offsetX;
            this.yPosition = _event.offsetY;

            console.log("x " + this.xPosition);
            console.log("y " + this.yPosition);

            new Explosion().explode(FormData.information, this.xPosition, this.yPosition);
        }
    }
}