import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TouchesvaleursComponent } from './touchesvaleurs/touchesvaleurs.component';
import { TouchesoperationsComponent } from './touchesoperations/touchesoperations.component';
import { LignesdetouchesComponent } from './lignesdetouches/lignesdetouches.component';
import { CalculetteComponent } from './calculette/calculette.component';
import { CalculetteplateComponent } from './calculetteplate/calculetteplate.component';
import { HistoriquecalcComponent } from './historiquecalc/historiquecalc.component';

@NgModule({
  declarations: [
    AppComponent,
    TouchesvaleursComponent,
    TouchesoperationsComponent,
    LignesdetouchesComponent,
    CalculetteComponent,
    CalculetteplateComponent,
    HistoriquecalcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
