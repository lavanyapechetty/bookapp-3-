import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermroleuserComponent } from './permroleuser.component';

describe('PermroleComponent', () => {
  let component: PermroleuserComponent;
  let fixture: ComponentFixture<PermroleuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermroleuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermroleuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
