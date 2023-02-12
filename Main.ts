namespace Firework {


    window.addEventListener("load", handleLoade);


    let positionNewCanvas: PositionCanvas = new PositionCanvas();
    let saveButton: HTMLElement;

    function handleLoade(): void {
        console.log("Hallo"); // raus?
        positionNewCanvas.handlePosition();
        saveButton = document.getElementById("save");
        saveButton.addEventListener("click", saveInformation);

        let query: URLSearchParams = new URLSearchParams();
        query.set("command", "create");
        query.set("collection", "Rockets");
        fetch(url + query.toString()).then(response => {
            console.log(response);
            refreshList();
        });
    }

    const url: string = "https://webuser.hs-furtwangen.de/~winterma/Database/index.php?";



    function saveInformation(): void {

        console.log("Saved Information");
        FormData.information = new FormData();
        let query: URLSearchParams = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "Rockets");
        query.set("data", JSON.stringify(FormData.information));
        fetch(url + query.toString()).then(res => {
            console.log(res);
            refreshList();
        });
    }

    function refreshList(): void {
        let listHTML: HTMLLIElement = document.getElementById("list") as HTMLLIElement;
        listHTML.innerHTML = "";

        let query: URLSearchParams = new URLSearchParams();
        query.set("command", "find");
        query.set("collection", "Rockets");
        fetch(url + query.toString()).then(res =>
            res.json().then(json =>
                Object.entries(json.data).forEach(([key, value]) => {
                    let valueProperties = new Map(Object.entries(value));
                    valueProperties.forEach((v, k) => console.log(k + " " + v));
                    console.log("Adding Value " + value.toString() + " with name " + valueProperties.get("name"));
                    let listItem: HTMLLIElement = document.createElement("li");
                    listItem.innerHTML = valueProperties.get("name") ? valueProperties.get("name") : key;
                    listItem.addEventListener("click", () => {
                        FormData.information = new FormData(valueProperties.get("name"), valueProperties.get("color1"), valueProperties.get("color2"), valueProperties.get("formParticle"), valueProperties.get("amountParticle"), valueProperties.get("lifetimeParticle"), valueProperties.get("drone"));
                    });
                    listHTML.appendChild(listItem);

                    let deleteButton: HTMLButtonElement = document.createElement("button") as HTMLButtonElement; //delete Button wird erstellt als HTMLButtonElement
                    deleteButton.innerHTML = "delete"; //inneres des Buttons
                    deleteButton.addEventListener("click", () => { //click auf Button
                        let queryDelete: URLSearchParams = new URLSearchParams();
                        queryDelete.set("command", "delete");
                        queryDelete.set("collection", "Rockets"); //delete settings Collection
                        queryDelete.set("id", key); // sucht Id
                        fetch(url + queryDelete.toString()).then(res => {
                            console.log(res); //Raus?
                            refreshList(); //update Liste
                        });
                    });
                    listHTML.appendChild(deleteButton);
                })
            )
        )
    }

}