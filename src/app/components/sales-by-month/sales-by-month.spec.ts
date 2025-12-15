import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByMonth } from './sales-by-month';

describe('SalesByMonth', () => {
  let component: SalesByMonth;
  let fixture: ComponentFixture<SalesByMonth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesByMonth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesByMonth);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
