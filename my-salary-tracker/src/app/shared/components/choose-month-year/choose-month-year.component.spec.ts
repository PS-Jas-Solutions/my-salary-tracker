import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMonthYearComponent } from './choose-month-year.component';

describe('ChooseMonthYearComponent', () => {
  let component: ChooseMonthYearComponent;
  let fixture: ComponentFixture<ChooseMonthYearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseMonthYearComponent]
    });
    fixture = TestBed.createComponent(ChooseMonthYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
