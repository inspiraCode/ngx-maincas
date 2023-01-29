import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossTransportComponent } from './cross-transport.component';

describe('CrossTransportComponent', () => {
  let component: CrossTransportComponent;
  let fixture: ComponentFixture<CrossTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossTransportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrossTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
