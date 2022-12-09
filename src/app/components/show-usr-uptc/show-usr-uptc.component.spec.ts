import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUsrUptcComponent } from './show-usr-uptc.component';

describe('ShowUsrUptcComponent', () => {
  let component: ShowUsrUptcComponent;
  let fixture: ComponentFixture<ShowUsrUptcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUsrUptcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowUsrUptcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
