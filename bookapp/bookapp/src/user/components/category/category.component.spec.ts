import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryuserComponent } from './categoryuser.component';

describe('CategoryComponent', () => {
  let component: CategoryuserComponent;
  let fixture: ComponentFixture<CategoryuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
