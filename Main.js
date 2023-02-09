var Firework;
(function (Firework) {
    window.addEventListener("load", handleLoade);
    let positionNewCanvas = new Firework.PositionCanvas();
    let saveButton;
    function handleLoade() {
        console.log("Hallo");
        positionNewCanvas.handlePosition();
        saveButton = document.getElementById("save");
        saveButton.addEventListener("click", saveInformation);
    }
    function saveInformation() {
        console.log("Bin hier");
        let informationFormData = new Firework.FormData();
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=Main.js.map