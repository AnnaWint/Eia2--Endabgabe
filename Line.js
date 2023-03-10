var Firework;
(function (Firework) {
    /*
      Aufgabe: <Endabgabe_Firework>
      Name: <Anna Wintermantel>
      Matrikel: <271140>
      Datum: <>
      Quellen:<>
      */
    class Line extends Firework.Particle {
        actualDraw() {
            this.xPosition += this.xVector;
            this.yPosition += this.yVector;
            this.crc2.beginPath();
            this.crc2.moveTo(this.xPosition + 10, this.yPosition + 10);
            this.crc2.lineTo(this.xPosition + 3, this.yPosition + 3);
            this.crc2.closePath();
            this.crc2.strokeStyle = this.gradient;
            this.crc2.lineWidth = 3;
            this.crc2.stroke();
        }
    }
    Firework.Line = Line;
})(Firework || (Firework = {}));
//# sourceMappingURL=Line.js.map