import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUsrUptcComponent } from './add-edit-usr-uptc.component';

describe('AddEditUsrUptcComponent', () => {
  let component: AddEditUsrUptcComponent;
  let fixture: ComponentFixture<AddEditUsrUptcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditUsrUptcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditUsrUptcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
