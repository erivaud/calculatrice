import { Component, OnInit, Input } from '@angular/core';
import Calcul from '../historiquecalc/calcul.model';

@Component({
  selector: 'app-historiquecalc',
  templateUrl: './historiquecalc.component.html',
  styleUrls: ['./historiquecalc.component.css']
})
export class HistoriquecalcComponent implements OnInit {

  @Input()
  calculInput: Calcul;

  constructor() { }

  ngOnInit(): void {
  }

}
