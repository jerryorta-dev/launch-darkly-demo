import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LaunchDarklyEffects } from './launch-darkly.effects';

describe('LaunchDarklyEffects', () => {
  let actions$: Observable<any>;
  let effects: LaunchDarklyEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LaunchDarklyEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(LaunchDarklyEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
