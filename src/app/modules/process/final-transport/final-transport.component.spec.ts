import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalTransportComponent } from './final-transport.component';

describe('FinalTransportComponent', () => {
  let component: FinalTransportComponent;
  let fixture: ComponentFixture<FinalTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalTransportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
