import { Component, OnInit } from '@angular/core';
import Calcul from '../historiquecalc/calcul.model';

@Component({
  selector: 'app-calculetteplate',
  templateUrl: './calculetteplate.component.html',
  styleUrls: ['./calculetteplate.component.css']
})
export class CalculetteplateComponent implements OnInit {
  calculAffichage = '0';
  histoCalculs: Array<Calcul> = [];

  constructor() { }

  ngOnInit(): void {
  }

  pressButton($event, touche) {
    if (this.calculAffichage === '0' || this.calculAffichage === 'Err') {
      this.calculAffichage = '' + touche;
    } else {
      this.calculAffichage += '' + touche;
    }
  }

  clearAffichage() {
    this.calculAffichage = '';
    console.log('cleared');
  }

  afficherResultat() {
    try {
      const result = '' + eval(this.calculAffichage);
      this.histoCalculs.push(new Calcul(this.calculAffichage, result));
      this.calculAffichage = result;
    } catch (e) {
      this.calculAffichage = 'Err';
      console.log(e);
    }
  }

}
