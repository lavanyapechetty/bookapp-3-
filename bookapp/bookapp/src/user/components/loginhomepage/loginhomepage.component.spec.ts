import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginhomepageComponent } from './loginhomepage.component';

describe('LoginhomepageComponent', () => {
  let component: LoginhomepageComponent;
  let fixture: ComponentFixture<LoginhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginhomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
