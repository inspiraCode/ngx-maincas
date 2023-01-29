import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTariffComponent } from './new-tariff.component';

describe('NewTariffComponent', () => {
  let component: NewTariffComponent;
  let fixture: ComponentFixture<NewTariffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTariffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
