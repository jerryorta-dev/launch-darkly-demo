import { InjectionToken } from '@angular/core';

export const LaunchDarklyClientIDToken = new InjectionToken(
  'LaunchDarklyClientIDToken'
);

export const launchDarklyFeatureKey = 'launchDarkly';

export type BooleanFeatureFlag = boolean;
export type StringFeatureFlag = string | null;
export type NumberFeatureFlag = number | null;
export interface JSONFeatureFlag {
  [key: string]: never;
}

export type FeatureFlagType =
  | BooleanFeatureFlag
  | StringFeatureFlag
  | NumberFeatureFlag
  | JSONFeatureFlag;
