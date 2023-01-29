import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingListsComponent } from './packing-lists.component';

describe('PackingListsComponent', () => {
  let component: PackingListsComponent;
  let fixture: ComponentFixture<PackingListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackingListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackingListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
