import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent implements OnInit {

   calculAffichage = '0';

  constructor() { }

  ngOnInit(): void {
  }
  public clearthis(){
    return this.calculAffichage = '';
  }

  getCalculAffichage() {
    return this.calculAffichage;
  }
}
