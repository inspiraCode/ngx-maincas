import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkOrderComponent } from './new-work-order.component';

describe('NewWorkOrderComponent', () => {
  let component: NewWorkOrderComponent;
  let fixture: ComponentFixture<NewWorkOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWorkOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewWorkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
