var Firework;
(function (Firework) {
    /*
     Aufgabe: <Endabgabe_Firework>
     Name: <Anna Wintermantel>
     Matrikel: <271140>
     Datum: <>
     Quellen:<>
     */
    class FormData {
        static information;
        constructor(_name, _color1, _color2, _formParticle, _amountParticle, _lifetimeParticle, _drone) {
            this.name = _name ?? document.getElementById("name").value;
            this.color1 = _color1 ?? document.getElementById("color1").value;
            this.color2 = _color2 ?? document.getElementById("color2").value;
            this.formParticle = _formParticle ?? document.getElementById("formParticle").value;
            this.amountParticle = _amountParticle ?? parseInt(document.getElementById("amountParticle").value);
            this.lifetimeParticle = _lifetimeParticle ?? parseInt(document.getElementById("lifetimeParticle").value);
            this.drone = _drone ?? document.querySelector("input[name=drone]:checked").value;
        }
        settings = document.querySelector("#settings");
        name;
        color1;
        color2;
        formParticle;
        amountParticle;
        lifetimeParticle;
        drone;
    }
    Firework.FormData = FormData;
})(Firework || (Firework = {}));
//# sourceMappingURL=FormData.js.map