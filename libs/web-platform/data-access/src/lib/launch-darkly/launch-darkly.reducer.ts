import { ActionReducerMap, createReducer, MetaReducer, on } from '@ngrx/store';
import { LDFlagSet } from 'launchdarkly-js-client-sdk';
import { addLaunchDarklyFeatureFlags } from './launch-darkly.actions';


export const launchDarklyFeatureKey = 'launchDarkly';


export const launchDarklyReducer = createReducer(
  {},
  on(addLaunchDarklyFeatureFlags, (state, action) => {
    return {
      ...state,
      ...action.flags
    }
  })
)


