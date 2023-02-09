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
        name = document.getElementById("name").value;
        color1 = document.getElementById("color1").value;
        color2 = document.getElementById("color2").value;
        formParticle = document.getElementById("formParticle").value;
        amountParticle = document.getElementById("amountParticle").value;
        lifetimeParticle = document.getElementById("lifetimeParticle").value;
        drone = document.getElementById("medium").value;
    }
    Firework.FormData = FormData;
})(Firework || (Firework = {}));
//# sourceMappingURL=FormData.js.map