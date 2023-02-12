var Firework;
(function (Firework) {
    class Explosion {
        initLifetime;
        allParticles;
        crc;
        static draw(ThisRef, lifetime) {
            if (document.getElementById("canvas").firstElementChild == ThisRef.crc.canvas) {
                ThisRef.crc.fillStyle = "rgba(0, 0, 0, 0.5)";
                ThisRef.crc.fillRect(0, 0, ThisRef.crc.canvas.width, ThisRef.crc.canvas.height);
            }
            else {
                ThisRef.crc.clearRect(0, 0, ThisRef.crc.canvas.width, ThisRef.crc.canvas.height);
            }
            ThisRef.crc.filter = "brightness(" + (((lifetime / ThisRef.initLifetime) * 100) + 50) + "%)";
            console.log("Lifetime left" + lifetime);
            lifetime--;
            if (lifetime >= 0) {
                ThisRef.allParticles.forEach(element => {
                    element.draw();
                });
                setTimeout(() => Explosion.draw(ThisRef, lifetime), 1 / Explosion.FramesPerSecond);
            }
            else {
                document.getElementById("canvas").removeChild(ThisRef.crc.canvas);
            }
        }
        static FramesPerSecond = 10;
        explode(SendFormData, x, y) {
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
            for (let index = 0; index < SendFormData.amountParticle; index++) {
                let newElement;
                switch (SendFormData.formParticle) {
                    case "dots": {
                        newElement = new Firework.Dots(SendFormData.color1, SendFormData.color2, SendFormData.formParticle, this.crc, x, y, SendFormData.drone);
                        break;
                    }
                    case "triangle": {
                        newElement = new Firework.Triangle(SendFormData.color1, SendFormData.color2, SendFormData.formParticle, this.crc, x, y, SendFormData.drone);
                        break;
                    }
                    case "line": {
                        newElement = new Firework.Line(SendFormData.color1, SendFormData.color2, SendFormData.formParticle, this.crc, x, y, SendFormData.drone);
                        break;
                    }
                    default: {
                        console.log("unknown formtype " + SendFormData.formParticle);
                    }
                }
                this.allParticles[index] = newElement;
            }
            console.log("Amount" + SendFormData.amountParticle);
            let lifetime = SendFormData.lifetimeParticle * Explosion.FramesPerSecond;
            this.initLifetime = lifetime;
            Explosion.draw(this, lifetime);
        }
    }
    Firework.Explosion = Explosion;
})(Firework || (Firework = {}));
//# sourceMappingURL=Explosion.js.map