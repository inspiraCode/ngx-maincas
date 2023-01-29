import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTariffDialogComponent } from './delete-tariff-dialog.component';

describe('DeleteTariffDialogComponent', () => {
  let component: DeleteTariffDialogComponent;
  let fixture: ComponentFixture<DeleteTariffDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTariffDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTariffDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
