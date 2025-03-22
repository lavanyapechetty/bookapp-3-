import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthoruserComponent } from './authoruser.component';

describe('AuthorComponent', () => {
  let component: AuthoruserComponent;
  let fixture: ComponentFixture<AuthoruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthoruserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthoruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
