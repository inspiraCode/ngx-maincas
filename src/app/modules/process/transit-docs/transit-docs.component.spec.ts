import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitDocsComponent } from './transit-docs.component';

describe('TransitDocsComponent', () => {
  let component: TransitDocsComponent;
  let fixture: ComponentFixture<TransitDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransitDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
