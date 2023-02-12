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
        form;
        xPosition;
        yPosition;
        xVector;
        yVector;
        crc2;
        gradient;
        constructor(_color1, _color2, _form, _crc2, xStartPosition, yStartPosition, radius) {
            this.color1 = _color1;
            this.color2 = _color2;
            this.crc2 = _crc2;
            this.form = _form;
            this.xPosition = xStartPosition;
            this.yPosition = yStartPosition;
            let radiusFactor = 1;
            if (radius == "small") {
                radiusFactor = 0.5;
            }
            else if (radius == "large") {
                radiusFactor = 2;
            }
            this.xVector = this.getRandomNummber() * (30 / Firework.Explosion.framesPerSecond) * radiusFactor;
            this.yVector = this.getRandomNummber() * (30 / Firework.Explosion.framesPerSecond) * radiusFactor;
            this.gradient = this.crc2.createLinearGradient(100, 200, 250, 500);
            this.gradient.addColorStop(0, this.color1);
            this.gradient.addColorStop(1, this.color2);
        }
        getRandomNummber() {
            let res = Math.random();
            res *= Math.round(Math.random()) ? 1 : -1;
            return res;
        }
        draw() {
            this.xPosition += this.xVector;
            this.yPosition += this.yVector;
            this.actualDraw();
        }
    }
    Firework.Particle = Particle;
})(Firework || (Firework = {}));
//# sourceMappingURL=Particle.js.map