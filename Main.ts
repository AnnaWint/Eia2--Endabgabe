namespace Firework {


    window.addEventListener("load", handleLoade);


    let positionNewCanvas: PositionCanvas = new PositionCanvas();
    let saveButton: HTMLElement;

    function handleLoade(): void {
        console.log("Hallo");
        positionNewCanvas.handlePosition();
        saveButton = document.getElementById("save");
        saveButton.addEventListener("click", saveInformation);

    }



    function saveInformation(): void {

        console.log("Bin hier");
        let informationFormData: FormData = new FormData();





    }

}