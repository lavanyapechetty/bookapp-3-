import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminhomepageComponent } from './adminhomepage.component';


describe('CardComponent', () => {
  let component: AdminhomepageComponent;
  let fixture: ComponentFixture<AdminhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminhomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
