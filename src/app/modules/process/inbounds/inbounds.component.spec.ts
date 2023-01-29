import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundsComponent } from './inbounds.component';

describe('InboundsComponent', () => {
  let component: InboundsComponent;
  let fixture: ComponentFixture<InboundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboundsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
