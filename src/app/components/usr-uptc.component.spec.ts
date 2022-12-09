import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrUptcComponent } from './usr-uptc.component';

describe('UsrUptcComponent', () => {
  let component: UsrUptcComponent;
  let fixture: ComponentFixture<UsrUptcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsrUptcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsrUptcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
