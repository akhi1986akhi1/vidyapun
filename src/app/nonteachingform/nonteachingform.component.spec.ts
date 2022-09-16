import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonTeachingFormComponent } from './nonteachingform.component';

describe('NonTeachingFormComponent', () => {
  let component: NonTeachingFormComponent;
  let fixture: ComponentFixture<NonTeachingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonTeachingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonTeachingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
