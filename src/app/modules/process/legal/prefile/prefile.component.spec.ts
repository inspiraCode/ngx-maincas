import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefileComponent } from './prefile.component';

describe('PrefileComponent', () => {
  let component: PrefileComponent;
  let fixture: ComponentFixture<PrefileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrefileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
