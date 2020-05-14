import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Calcul from '../historiquecalc/calcul.model';

@Component({
  selector: 'app-historiquecalc',
  templateUrl: './historiquecalc.component.html',
  styleUrls: ['./historiquecalc.component.css']
})
export class HistoriquecalcComponent implements OnInit {

  @Input()
  calculInput: Calcul;

  @Output()
  delAction: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  delHistoAction() {
    this.delAction.emit(['del histo', this.calculInput]);
  }

}
