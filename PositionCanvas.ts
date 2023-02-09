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
            this.canvas = document.querySelector("canvas");
            this.canvas.addEventListener("mousedown", this.getPosition);





        }



        getPosition(_event: MouseEvent): void {
            if (document.querySelector("canvas") == null) { }
            else {
                let oldPosition: HTMLElement = document.querySelector("canvas");
                oldPosition.remove();
            }


            this.xPosition = _event.clientX;
            this.yPosition = _event.clientY;

            console.log("x " + this.xPosition);
            console.log("y " + this.yPosition);



        }


    }

}