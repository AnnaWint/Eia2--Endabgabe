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
            this.canvas = document.getElementById("canvas");
            this.canvas.addEventListener("mousedown", this.getPosition);
        }
        getPosition(_event) {
            this.xPosition = _event.offsetX;
            this.yPosition = _event.offsetY;
            new Firework.Explosion().explode(Firework.FormData.information, this.xPosition, this.yPosition);
        }
    }
    Firework.PositionCanvas = PositionCanvas;
})(Firework || (Firework = {}));
//# sourceMappingURL=PositionCanvas.js.map