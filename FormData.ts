namespace Firework {

     /*
      Aufgabe: <Endabgabe_Firework>
      Name: <Anna Wintermantel>
      Matrikel: <271140>
      Datum: <>
      Quellen:<>
      */

     export class FormData {
          static information: FormData;
          settings: HTMLDivElement = document.querySelector("#settings");



          name: string = (document.getElementById("name") as HTMLInputElement).value;
          color1: string = (document.getElementById("color1") as HTMLInputElement).value;
          color2: string = (document.getElementById("color2") as HTMLInputElement).value;
          formParticle: string = (document.getElementById("formParticle") as HTMLSelectElement).value;
          amountParticle: string = (document.getElementById("amountParticle") as HTMLInputElement).value;
          lifetimeParticle: string = (document.getElementById("lifetimeParticle") as HTMLInputElement).value;
          drone: string = (document.getElementById("medium") as HTMLInputElement).value;
          

         
    







     }
}