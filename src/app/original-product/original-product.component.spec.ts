import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalProductComponent } from './original-product.component';

describe('OriginalProductComponent', () => {
  let component: OriginalProductComponent;
  let fixture: ComponentFixture<OriginalProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriginalProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
