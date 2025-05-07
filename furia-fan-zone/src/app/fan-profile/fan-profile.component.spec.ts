import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanProfileComponent } from './fan-profile.component';

describe('FanProfileComponent', () => {
  let component: FanProfileComponent;
  let fixture: ComponentFixture<FanProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FanProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FanProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
