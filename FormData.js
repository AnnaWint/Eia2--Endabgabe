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
        settings = document.querySelector("#settings");
        name;
        color1;
        color2;
        formParticle;
        amountParticle;
        lifetimeParticle;
        radiusActive;
        constructor(_name, _color1, _color2, _formParticle, _amountParticle, _lifetimeParticle, _radiusActive) {
            this.name = _name ?? document.getElementById("name").value;
            this.color1 = _color1 ?? document.getElementById("color1").value;
            this.color2 = _color2 ?? document.getElementById("color2").value;
            this.formParticle = _formParticle ?? document.getElementById("formParticle").value;
            this.amountParticle = _amountParticle ?? parseInt(document.getElementById("amountParticle").value);
            this.lifetimeParticle = _lifetimeParticle ?? parseInt(document.getElementById("lifetimeParticle").value);
            this.radiusActive = _radiusActive ?? document.querySelector("input[name=radius]:checked").value;
        }
    }
    Firework.FormData = FormData;
})(Firework || (Firework = {}));
//# sourceMappingURL=FormData.js.map