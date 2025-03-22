import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseLoguserComponent } from './purchaseloguser.component';

describe('PurchaselogComponent', () => {
  let component: PurchaseLoguserComponent;
  let fixture: ComponentFixture<PurchaseLoguserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseLoguserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseLoguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
