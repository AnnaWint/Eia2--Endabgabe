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
          name: string;
          color1: string;
          color2: string;
          formParticle: string;
          amountParticle: number;
          lifetimeParticle: number;
          radiusActive: string;


          constructor(_name?: string, _color1?: string, _color2?: string, _formParticle?: string, _amountParticle?: number, _lifetimeParticle?: number, _radiusActive?: string) {
               this.name = _name ?? (document.getElementById("name") as HTMLInputElement).value;
               this.color1 = _color1 ?? (document.getElementById("color1") as HTMLInputElement).value;
               this.color2 = _color2 ?? (document.getElementById("color2") as HTMLInputElement).value;
               this.formParticle = _formParticle ?? (document.getElementById("formParticle") as HTMLInputElement).value;
               this.amountParticle = _amountParticle ?? parseInt((document.getElementById("amountParticle") as HTMLInputElement).value);
               this.lifetimeParticle = _lifetimeParticle ?? parseInt((document.getElementById("lifetimeParticle") as HTMLInputElement).value);
               this.radiusActive = _radiusActive ?? (document.querySelector("input[name=radius]:checked") as HTMLInputElement).value;
          }


     }
}