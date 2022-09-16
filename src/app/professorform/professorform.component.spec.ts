import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorFormComponent } from './professorform.component';

describe('ProfessorFormComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfessorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
