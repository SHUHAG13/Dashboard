import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThreeProducts } from './top-three-products';

describe('TopThreeProducts', () => {
  let component: TopThreeProducts;
  let fixture: ComponentFixture<TopThreeProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopThreeProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopThreeProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
