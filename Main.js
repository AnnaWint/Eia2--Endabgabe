var Firework;
(function (Firework) {
    window.addEventListener("load", handleLoade);
    let positionNewCanvas = new Firework.PositionCanvas();
    let saveButton;
    function handleLoade() {
        console.log("Hallo"); // raus?
        positionNewCanvas.handlePosition();
        saveButton = document.getElementById("save");
        saveButton.addEventListener("click", saveInformation);
        let query = new URLSearchParams();
        query.set("command", "create");
        query.set("collection", "Rockets");
        fetch(url + query.toString()).then(response => {
            console.log(response);
            refreshList();
        });
    }
    const url = "https://webuser.hs-furtwangen.de/~winterma/Database/index.php?";
    function saveInformation() {
        console.log("Saved Information");
        Firework.FormData.information = new Firework.FormData();
        let query = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "Rockets");
        query.set("data", JSON.stringify(Firework.FormData.information));
        fetch(url + query.toString()).then(res => {
            console.log(res);
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
            valueProperties.forEach((v, k) => console.log(k + " " + v));
            console.log("Adding Value " + value.toString() + " with name " + valueProperties.get("name"));
            let listItem = document.createElement("li");
            listItem.innerHTML = valueProperties.get("name") ? valueProperties.get("name") : key;
            listItem.addEventListener("click", () => {
                Firework.FormData.information = new Firework.FormData(valueProperties.get("name"), valueProperties.get("color1"), valueProperties.get("color2"), valueProperties.get("formParticle"), valueProperties.get("amountParticle"), valueProperties.get("lifetimeParticle"), valueProperties.get("drone"));
            });
            listHTML.appendChild(listItem);
            let deleteButton = document.createElement("button"); //delete Button wird erstellt als HTMLButtonElement
            deleteButton.innerHTML = "delete"; //inneres des Buttons
            deleteButton.addEventListener("click", () => {
                let queryDelete = new URLSearchParams();
                queryDelete.set("command", "delete");
                queryDelete.set("collection", "Rockets"); //delete settings Collection
                queryDelete.set("id", key); // sucht Id
                fetch(url + queryDelete.toString()).then(res => {
                    console.log(res); //Raus?
                    refreshList(); //update Liste
                });
            });
            listHTML.appendChild(deleteButton);
        })));
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=Main.js.map