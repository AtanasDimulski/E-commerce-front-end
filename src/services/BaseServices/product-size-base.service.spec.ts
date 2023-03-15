import { TestBed } from '@angular/core/testing';

import { ProductSizeBaseService } from './product-size-base.service';

describe('ProductSizeBaseService', () => {
  let service: ProductSizeBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSizeBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
