import { TestBed } from '@angular/core/testing';

import { ProductSizeRelationshipService } from './product-size-relationship.service';

describe('ProductSizeRelationshipService', () => {
  let service: ProductSizeRelationshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSizeRelationshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
