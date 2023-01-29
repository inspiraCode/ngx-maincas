import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomsClearenceComponent } from './customs-clearence.component';

describe('CustomsClearenceComponent', () => {
  let component: CustomsClearenceComponent;
  let fixture: ComponentFixture<CustomsClearenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomsClearenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomsClearenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
