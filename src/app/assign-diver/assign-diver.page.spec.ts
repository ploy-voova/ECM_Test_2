import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssignDiverPage } from './assign-diver.page';

describe('AssignDiverPage', () => {
  let component: AssignDiverPage;
  let fixture: ComponentFixture<AssignDiverPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignDiverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
