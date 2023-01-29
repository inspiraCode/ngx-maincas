import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticExitComponent } from './logistic-exit.component';

describe('LogisticExitComponent', () => {
  let component: LogisticExitComponent;
  let fixture: ComponentFixture<LogisticExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticExitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogisticExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
