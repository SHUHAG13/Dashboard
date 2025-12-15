import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFewTransactions } from './last-few-transactions';

describe('LastFewTransactions', () => {
  let component: LastFewTransactions;
  let fixture: ComponentFixture<LastFewTransactions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastFewTransactions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastFewTransactions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
