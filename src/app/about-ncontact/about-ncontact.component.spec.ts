import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNContactComponent } from './about-ncontact.component';

describe('AboutNContactComponent', () => {
  let component: AboutNContactComponent;
  let fixture: ComponentFixture<AboutNContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutNContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
