import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateuserComponent } from './stateuser.component';

describe('StateComponent', () => {
  let component: StateuserComponent;
  let fixture: ComponentFixture<StateuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
