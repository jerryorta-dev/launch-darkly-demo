import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDarklyUiComponent } from './launch-darkly-ui.component';

describe('HomeComponent', () => {
  let component: LaunchDarklyUiComponent;
  let fixture: ComponentFixture<LaunchDarklyUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaunchDarklyUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LaunchDarklyUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
