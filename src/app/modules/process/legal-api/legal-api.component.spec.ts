import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalApiComponent } from './legal-api.component';

describe('LegalApiComponent', () => {
  let component: LegalApiComponent;
  let fixture: ComponentFixture<LegalApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
