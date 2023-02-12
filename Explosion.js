var Firework;
(function (Firework) {
    /*
      Aufgabe: <Endabgabe_Firework>
      Name: <Anna Wintermantel>
      Matrikel: <271140>
      Datum: <>
      Quellen:<>
      */
    class Explosion {
        static framesPerSecond = 10;
        initLifetime;
        allParticles;
        crc;
        static draw(thisRef, lifetime) {
            if (document.getElementById("canvas").firstElementChild == thisRef.crc.canvas) {
                thisRef.crc.fillStyle = "rgba(0, 0, 0, 0.5)";
                thisRef.crc.fillRect(0, 0, thisRef.crc.canvas.width, thisRef.crc.canvas.height);
            }
            else {
                thisRef.crc.clearRect(0, 0, thisRef.crc.canvas.width, thisRef.crc.canvas.height);
            }
            thisRef.crc.filter = "brightness(" + (((lifetime / thisRef.initLifetime) * 100) + 50) + "%)";
            lifetime--;
            if (lifetime >= 0) {
                thisRef.allParticles.forEach(element => {
                    element.draw();
                });
                setTimeout(() => Explosion.draw(thisRef, lifetime), 1 / Explosion.framesPerSecond);
            }
            else {
                document.getElementById("canvas").removeChild(thisRef.crc.canvas);
            }
        }
        explode(sendFormData, x, y) {
            if (!Firework.FormData.information) {
                return;
            }
            let newCanvas = document.createElement("canvas");
            newCanvas.width = 740;
            newCanvas.height = 740;
            newCanvas.style.position = "absolute";
            newCanvas.style.left = "0";
            newCanvas.style.top = "0";
            newCanvas.style.zIndex = (document.getElementById("canvas").childElementCount + 1).toString();
            document.getElementById("canvas").appendChild(newCanvas);
            this.allParticles = [];
            this.crc = newCanvas.getContext("2d");
            for (let index = 0; index < sendFormData.amountParticle; index++) {
                let newElement;
                switch (sendFormData.formParticle) {
                    case "dots": {
                        newElement = new Firework.Dots(sendFormData.color1, sendFormData.color2, sendFormData.formParticle, this.crc, x, y, sendFormData.radiusActive);
                        break;
                    }
                    case "triangle": {
                        newElement = new Firework.Triangle(sendFormData.color1, sendFormData.color2, sendFormData.formParticle, this.crc, x, y, sendFormData.radiusActive);
                        break;
                    }
                    case "line": {
                        newElement = new Firework.Line(sendFormData.color1, sendFormData.color2, sendFormData.formParticle, this.crc, x, y, sendFormData.radiusActive);
                        break;
                    }
                    default: {
                        console.log("unknown formtype " + sendFormData.formParticle);
                    }
                }
                this.allParticles[index] = newElement;
            }
            let lifetime = sendFormData.lifetimeParticle * Explosion.framesPerSecond;
            this.initLifetime = lifetime;
            Explosion.draw(this, lifetime);
        }
    }
    Firework.Explosion = Explosion;
})(Firework || (Firework = {}));
//# sourceMappingURL=Explosion.js.map