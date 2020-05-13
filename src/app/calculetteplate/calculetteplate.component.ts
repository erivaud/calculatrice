import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculetteplate',
  templateUrl: './calculetteplate.component.html',
  styleUrls: ['./calculetteplate.component.css']
})
export class CalculetteplateComponent implements OnInit {
  calculAffichage = '';

  nombre1 = '0';
  nombre2 = '0';
  operande: string;

  operandeSaisie = false;

  constructor() { }

  ngOnInit(): void {
  }

  pressButton($event, touche: string) {

    if (touche === '+' || touche === '-' || touche === '*' || touche === '/') {
      this.operandeSaisie = true;
      this.operande = touche;
    }
    else {
      if (!this.operandeSaisie) {
        this.nombre1 += touche;
      }
      else if (this.operandeSaisie) {
        this.nombre2 += touche;
      }
      this.calculAffichage += touche;
      console.log('Touche : ' + touche);
      console.log('num1 : ' + touche);
      console.log('num2 : ' + touche);
      console.log('operande : ' + touche);
      console.log('ligne : ' + this.calculAffichage);
    }



  }


  clearAffichage() {
    this.calculAffichage = '';
    console.log('cleared');
  }

  afficherResultat($event, calculAffichage) {
    console.log(calculAffichage);
    console.log('tu calcules');
  }

}
