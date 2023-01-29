import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonetaryChargesComponent } from './monetary-charges.component';

describe('MonetaryChargesComponent', () => {
  let component: MonetaryChargesComponent;
  let fixture: ComponentFixture<MonetaryChargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonetaryChargesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonetaryChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
