import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReklamaciqComponent } from './reklamaciq.component';

describe('ReklamaciqComponent', () => {
  let component: ReklamaciqComponent;
  let fixture: ComponentFixture<ReklamaciqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReklamaciqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReklamaciqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
