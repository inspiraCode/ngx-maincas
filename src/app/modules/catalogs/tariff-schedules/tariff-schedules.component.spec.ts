import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffSchedulesComponent } from './tariff-schedules.component';

describe('TariffSchedulesComponent', () => {
  let component: TariffSchedulesComponent;
  let fixture: ComponentFixture<TariffSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariffSchedulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariffSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
