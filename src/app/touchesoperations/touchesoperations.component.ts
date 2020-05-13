import { Component, OnInit } from '@angular/core';
import { OPERATEURS } from '../mock/touchesoperations';

@Component({
  selector: 'app-touchesoperations',
  templateUrl: './touchesoperations.component.html',
  styleUrls: ['./touchesoperations.component.css']
})
export class TouchesoperationsComponent implements OnInit {

  operateurs = OPERATEURS;

  operateur: string;

  constructor() { }

  ngOnInit(): void {
  }

  operateurClique($event, operateur){
    this.operateur = operateur;
    console.log(this.operateur);
  }

}
