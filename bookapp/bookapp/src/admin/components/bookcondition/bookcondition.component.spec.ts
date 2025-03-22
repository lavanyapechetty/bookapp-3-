import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookConditionComponent } from './bookcondition.component';

describe('BookconditionComponent', () => {
  let component: BookConditionComponent;
  let fixture: ComponentFixture<BookConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookConditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
