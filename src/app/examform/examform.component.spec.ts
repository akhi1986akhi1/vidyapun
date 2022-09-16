import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamFormComponent } from './examform.component';

describe('ExamFormComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ExamFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
