import { Component, OnInit, Input } from '@angular/core';
// import { CalculetteComponent } from '../calculette';

@Component({
  selector: 'app-lignesdetouches',
  templateUrl: './lignesdetouches.component.html',
  styleUrls: ['./lignesdetouches.component.css']
})
export class LignesdetouchesComponent implements OnInit {

  @Input() calculAffichage: string;


  constructor() {
  }

  ngOnInit(): void {
  }
  giveResult($event, phraseCalcul){
    console.log(phraseCalcul);
  }

  clearAffichage() {
    this.calculAffichage = '';
    console.log(this.calculAffichage);
  }
}
