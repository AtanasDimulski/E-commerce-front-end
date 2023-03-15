import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneOrderComponent } from './phone-order.component';

describe('PhoneOrderComponent', () => {
  let component: PhoneOrderComponent;
  let fixture: ComponentFixture<PhoneOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
