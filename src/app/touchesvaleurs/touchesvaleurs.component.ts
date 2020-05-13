import { Component, OnInit } from '@angular/core';
import { VALEURS } from '../mock/touchesvaleurs';

@Component({
  selector: 'app-touchesvaleurs',
  templateUrl: './touchesvaleurs.component.html',
  styleUrls: ['./touchesvaleurs.component.css']
})
export class TouchesvaleursComponent implements OnInit {

  valeurs = VALEURS.reverse();

  valeur1: number;
  valeur2: number;

  constructor() { }

  ngOnInit(): void {
  }
valeurClique($event, valeur) {
  this.valeur1 = valeur;
  console.log(this.valeur1);
}
}
