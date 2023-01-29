import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreDepartureComponent } from './pre-departure.component';

describe('PreDepartureComponent', () => {
  let component: PreDepartureComponent;
  let fixture: ComponentFixture<PreDepartureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreDepartureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreDepartureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
