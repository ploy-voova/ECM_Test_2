import { TestBed } from '@angular/core/testing';

import { QuotePreviewService } from './quote-preview.service';

describe('QuotePreviewService', () => {
  let service: QuotePreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotePreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
