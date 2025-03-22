import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevieweruserComponent } from './revieweruser.component';

describe('ReviewerComponent', () => {
  let component: RevieweruserComponent;
  let fixture: ComponentFixture<RevieweruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevieweruserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevieweruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
