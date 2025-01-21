import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoveringJobPage } from './covering-job.page';

describe('CoveringJobPage', () => {
  let component: CoveringJobPage;
  let fixture: ComponentFixture<CoveringJobPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CoveringJobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
