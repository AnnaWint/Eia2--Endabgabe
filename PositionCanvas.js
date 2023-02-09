var Firework;
(function (Firework) {
    /*
        Aufgabe: <Endabgabe_Firework>
        Name: <Anna Wintermantel>
        Matrikel: <271140>
        Datum: <>
        Quellen:<>
        */
    class PositionCanvas {
        static position;
        canvas;
        xPosition;
        yPosition;
        handlePosition() {
            this.canvas = document.querySelector("canvas");
            this.canvas.addEventListener("mousedown", this.getPosition);
        }
        getPosition(_event) {
            if (document.querySelector("canvas") == null) { }
            else {
                let oldPosition = document.querySelector("canvas");
                oldPosition.remove();
            }
            this.xPosition = _event.clientX;
            this.yPosition = _event.clientY;
            console.log("x " + this.xPosition);
            console.log("y " + this.yPosition);
        }
    }
    Firework.PositionCanvas = PositionCanvas;
})(Firework || (Firework = {}));
//# sourceMappingURL=PositionCanvas.js.map