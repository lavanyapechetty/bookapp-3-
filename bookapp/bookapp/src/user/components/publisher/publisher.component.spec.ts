import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisheruserComponent } from './publisheruser.component';

describe('PublisherComponent', () => {
  let component: PublisheruserComponent;
  let fixture: ComponentFixture<PublisheruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublisheruserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisheruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
