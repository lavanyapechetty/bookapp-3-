import { ComponentFixture, TestBed } from '@angular/core/testing';
 
import { BookreviewuserComponent } from './bookreviewuser.component';
 
describe('BookreviewComponent', () => {
  let component: BookreviewuserComponent;
  let fixture: ComponentFixture<BookreviewuserComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookreviewuserComponent]
    })
    .compileComponents();
 
    fixture = TestBed.createComponent(BookreviewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});