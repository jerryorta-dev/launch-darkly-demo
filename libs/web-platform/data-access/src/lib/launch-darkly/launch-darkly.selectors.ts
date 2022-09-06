import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LDFlagSet } from 'launchdarkly-js-client-sdk';
import {
  BooleanFeatureFlag,
  JSONFeatureFlag,
  launchDarklyFeatureKey,
  NumberFeatureFlag,
  StringFeatureFlag,
} from './launch-darkly.models';

export const selectLaunchDarklyState = createFeatureSelector<LDFlagSet>(
  launchDarklyFeatureKey
);

export const selectBooleanFeatureFlag = (featureFlag: string) =>
  createSelector(
    selectLaunchDarklyState,
    (state: LDFlagSet): BooleanFeatureFlag => {
      if (
        (state && state[featureFlag] !== null) ||
        state[featureFlag] !== undefined
      ) {
        return state[featureFlag];
      }
      return false;
    }
  );

export const selectStringFeatureFlag = (featureFlag: string) =>
  createSelector(
    selectLaunchDarklyState,
    (state: LDFlagSet): StringFeatureFlag => {
      if (
        (state && state[featureFlag] !== null) ||
        state[featureFlag] !== undefined
      ) {
        return state[featureFlag];
      }
      return null;
    }
  );

export const selectNumberFeatureFlag = (featureFlag: string) =>
  createSelector(
    selectLaunchDarklyState,
    (state: LDFlagSet): NumberFeatureFlag => {
      if (
        (state && state[featureFlag] !== null) ||
        state[featureFlag] !== undefined
      ) {
        return state[featureFlag];
      }
      return null;
    }
  );

export const selectJSONFeatureFlag = (featureFlag: string) =>
  createSelector(
    selectLaunchDarklyState,
    (state: LDFlagSet): JSONFeatureFlag | null => {
      if (
        (state && state[featureFlag] !== null) ||
        state[featureFlag] !== undefined
      ) {
        return state[featureFlag];
      }
      return null;
    }
  );
