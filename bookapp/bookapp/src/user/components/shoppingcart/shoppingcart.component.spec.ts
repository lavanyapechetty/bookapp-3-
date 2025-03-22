import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartuserComponent } from './shoppingcartuser.component';

describe('ShoppingcartComponent', () => {
  let component: ShoppingCartuserComponent;
  let fixture: ComponentFixture<ShoppingCartuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
