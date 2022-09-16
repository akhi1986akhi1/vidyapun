import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorResearchDashboardComponent } from './dashboard.component';

describe('ProfessorResearchDashboardComponent', () => {
  let component: ProfessorResearchDashboardComponent;
  let fixture: ComponentFixture<ProfessorResearchDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorResearchDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorResearchDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
