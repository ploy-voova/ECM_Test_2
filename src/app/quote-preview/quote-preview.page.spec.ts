import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuotePreviewPage } from './quote-preview.page';

describe('QuotePreviewPage', () => {
  let component: QuotePreviewPage;
  let fixture: ComponentFixture<QuotePreviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotePreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
