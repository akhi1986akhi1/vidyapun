import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerDevehomeComponent } from './career-devehome.component';

describe('CareerDevehomeComponent', () => {
  let component: CareerDevehomeComponent;
  let fixture: ComponentFixture<CareerDevehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerDevehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerDevehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
