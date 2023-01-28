import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCompanyDialogComponent } from './block-company-dialog.component';

describe('BlockCompanyDialogComponent', () => {
  let component: BlockCompanyDialogComponent;
  let fixture: ComponentFixture<BlockCompanyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockCompanyDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockCompanyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
