import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersuserComponent } from './usersuser.component';

describe('UsersComponent', () => {
  let component: UsersuserComponent;
  let fixture: ComponentFixture<UsersuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
