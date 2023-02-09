var Firework;
(function (Firework) {
    /*
      Aufgabe: <Endabgabe_Firework>
      Name: <Anna Wintermantel>
      Matrikel: <271140>
      Datum: <>
      Quellen:<>
      */
    class Particle {
        color1;
        color2;
        canvas;
        crc2;
        gradient;
        constructor(_color1, _color2, _crc2) {
            this.color1 = _color1;
            this.color2 = _color2;
            this.crc2 = _crc2;
            this.crc2.createLinearGradient(100, 200, 250, 500);
            this.gradient.addColorStop(0, this.color1);
            this.gradient.addColorStop(1, this.color2);
        }
        drawDots(_crc2) {
            let radius = 2;
            this.crc2.beginPath();
            this.crc2.arc(Firework.PositionCanvas.position.xPosition, Firework.PositionCanvas.position.yPosition, radius, 0, Math.PI * 2); //die ersten Zahlen sind später click
            this.crc2.fillStyle = this.gradient;
            this.crc2.fill();
            this.crc2.closePath();
        }
        drawStar(_crc2) {
            this.crc2.beginPath();
            this.crc2.moveTo(Firework.PositionCanvas.position.xPosition / 2, Firework.PositionCanvas.position.yPosition / 2);
            this.crc2.lineTo(Firework.PositionCanvas.position.xPosition + 35, Firework.PositionCanvas.position.yPosition + 50);
            this.crc2.lineTo(Firework.PositionCanvas.position.xPosition - 25, Firework.PositionCanvas.position.yPosition + 65);
            this.crc2.lineTo(Firework.PositionCanvas.position.xPosition + 35, Firework.PositionCanvas.position.yPosition + 80);
            this.crc2.lineTo(Firework.PositionCanvas.position.xPosition / 2, Firework.PositionCanvas.position.yPosition + 130);
            this.crc2.lineTo(Firework.PositionCanvas.position.xPosition + 55, Firework.PositionCanvas.position.yPosition + 100);
            this.crc2.lineTo(Firework.PositionCanvas.position.xPosition + 70, Firework.PositionCanvas.position.yPosition + 160);
            this.crc2.lineTo(Firework.PositionCanvas.position.xPosition + 85, Firework.PositionCanvas.position.yPosition + 100);
            this.crc2.lineTo(Firework.PositionCanvas.position.xPosition + 140, Firework.PositionCanvas.position.yPosition + 130);
            this.crc2.lineTo(Firework.PositionCanvas.position.xPosition + 105, Firework.PositionCanvas.position.yPosition + 80);
            this.crc2.lineTo(Firework.PositionCanvas.position.xPosition + 165, Firework.PositionCanvas.position.yPosition + 65);
            this.crc2.closePath();
            this.crc2.fillStyle = this.gradient;
            this.crc2.fill();
        }
        drawTriangle(_crc2) {
            this.crc2.beginPath();
            this.crc2.moveTo(Firework.PositionCanvas.position.xPosition, Firework.PositionCanvas.position.yPosition);
            this.crc2.lineTo(Firework.PositionCanvas.position.xPosition, Firework.PositionCanvas.position.yPosition + 70);
            this.crc2.lineTo(Firework.PositionCanvas.position.xPosition + 120, Firework.PositionCanvas.position.yPosition + 15);
            this.crc2.closePath();
            this.crc2.fillStyle = this.gradient;
            this.crc2.fill();
        }
        drawCurve(_crc2) {
            this.crc2.beginPath();
            this.crc2.bezierCurveTo(20, 100, 200, 100, 200, 20);
            this.crc2.strokeStyle = this.gradient;
            this.crc2.lineWidth = 3;
            this.crc2.stroke();
        }
        drawLine(_crc2) {
            this.crc2.beginPath();
            this.crc2.moveTo(100, 100);
            this.crc2.lineTo(70, 70);
            this.crc2.closePath();
            this.crc2.strokeStyle = this.gradient;
            this.crc2.lineWidth = 3;
            this.crc2.stroke();
        }
    }
    Firework.Particle = Particle;
})(Firework || (Firework = {}));
//# sourceMappingURL=Particle.js.map