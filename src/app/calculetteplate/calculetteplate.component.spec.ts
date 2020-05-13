import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculetteplateComponent } from './calculetteplate.component';

describe('CalculetteplateComponent', () => {
  let component: CalculetteplateComponent;
  let fixture: ComponentFixture<CalculetteplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculetteplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculetteplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
