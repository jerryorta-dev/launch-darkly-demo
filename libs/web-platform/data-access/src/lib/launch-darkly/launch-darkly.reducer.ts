import { createReducer, on } from '@ngrx/store';
import { addLaunchDarklyFeatureFlags } from './launch-darkly.actions';

export const launchDarklyReducer = createReducer(
  {},
  on(addLaunchDarklyFeatureFlags, (state, action) => {
    return {
      ...state,
      ...action.flags,
    };
  })
);
