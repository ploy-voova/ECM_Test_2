import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewJobPage } from './new-job.page';

describe('NewJobPage', () => {
  let component: NewJobPage;
  let fixture: ComponentFixture<NewJobPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
