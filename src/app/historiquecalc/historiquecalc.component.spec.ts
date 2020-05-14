import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquecalcComponent } from './historiquecalc.component';

describe('HistoriquecalcComponent', () => {
  let component: HistoriquecalcComponent;
  let fixture: ComponentFixture<HistoriquecalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriquecalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquecalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
