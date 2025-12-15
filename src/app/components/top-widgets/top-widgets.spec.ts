import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWidgets } from './top-widgets';

describe('TopWidgets', () => {
  let component: TopWidgets;
  let fixture: ComponentFixture<TopWidgets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopWidgets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopWidgets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
