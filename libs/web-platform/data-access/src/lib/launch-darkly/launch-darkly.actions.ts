import { createAction, props } from '@ngrx/store';
import { LDFlagSet } from 'launchdarkly-js-client-sdk';


export const loadLaunchDarklyFeatureFlags = createAction(
  '[Launch Darkly/API] load feature flags'
)

export const addLaunchDarklyFeatureFlags = createAction(
  '[Launch Darkly/API] add feature flags', props<{ flags: LDFlagSet }>()
)

