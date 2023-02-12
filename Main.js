var Firework;
(function (Firework) {
    /*
      Aufgabe: <Endabgabe_Firework>
      Name: <Anna Wintermantel>
      Matrikel: <271140>
      Datum: <>
      Quellen:<>
      */
    window.addEventListener("load", handleLoade);
    let positionNewCanvas = new Firework.PositionCanvas();
    let saveButton;
    function handleLoade() {
        positionNewCanvas.handlePosition();
        saveButton = document.getElementById("save");
        saveButton.addEventListener("click", saveInformation);
        let query = new URLSearchParams();
        query.set("command", "create");
        query.set("collection", "Rockets");
        fetch(url + query.toString()).then(response => {
            refreshList();
        });
    }
    const url = "https://webuser.hs-furtwangen.de/~winterma/Database/index.php?";
    function saveInformation() {
        Firework.FormData.information = new Firework.FormData();
        let query = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "Rockets");
        query.set("data", JSON.stringify(Firework.FormData.information));
        fetch(url + query.toString()).then(res => {
            refreshList();
        });
    }
    function refreshList() {
        let listHTML = document.getElementById("list");
        listHTML.innerHTML = "";
        let query = new URLSearchParams();
        query.set("command", "find");
        query.set("collection", "Rockets");
        fetch(url + query.toString()).then(res => res.json().then(json => Object.entries(json.data).forEach(([key, value]) => {
            let valueProperties = new Map(Object.entries(value));
            let listItem = document.createElement("li");
            listItem.innerHTML = valueProperties.get("name") ? valueProperties.get("name") : key;
            listItem.addEventListener("click", () => {
                Firework.FormData.information = new Firework.FormData(valueProperties.get("name"), valueProperties.get("color1"), valueProperties.get("color2"), valueProperties.get("formParticle"), valueProperties.get("amountParticle"), valueProperties.get("lifetimeParticle"), valueProperties.get("activRadius"));
            });
            listHTML.appendChild(listItem);
            let deleteButton = document.createElement("button");
            deleteButton.innerHTML = "delete";
            deleteButton.addEventListener("click", () => {
                let queryDelete = new URLSearchParams();
                queryDelete.set("command", "delete");
                queryDelete.set("collection", "Rockets");
                queryDelete.set("id", key);
                fetch(url + queryDelete.toString()).then(res => {
                    refreshList();
                });
            });
            listHTML.appendChild(deleteButton);
        })));
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=Main.js.map