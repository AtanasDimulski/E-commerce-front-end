import { TestBed } from '@angular/core/testing';

import { ProductSubsubcategoryService } from './product-subsubcategory.service';

describe('ProductSubsubcategoryService', () => {
  let service: ProductSubsubcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSubsubcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
