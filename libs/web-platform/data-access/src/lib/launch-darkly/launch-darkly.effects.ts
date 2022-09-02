import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import * as LDClient from 'launchdarkly-js-client-sdk';
import { LDFlagSet } from 'launchdarkly-js-client-sdk';

import { tap } from 'rxjs/operators';
import {
  addLaunchDarklyFeatureFlags,
  loadLaunchDarklyFeatureFlags,
} from './launch-darkly.actions';
import { LaunchDarklyClientIDToken } from './launch-darkly.models';

@Injectable()
export class LaunchDarklyEffects implements OnInitEffects {
  loadLaunchDarkly$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadLaunchDarklyFeatureFlags),
        tap(() => {
          this._initFeatureFlags();
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private _store: Store,
    @Inject(LaunchDarklyClientIDToken) private _clientID: string
  ) {}

  ngrxOnInitEffects(): Action {
    return loadLaunchDarklyFeatureFlags();
  }

  private _loadFeatureFlags(allFlags: LDFlagSet) {
    // initialization succeeded, flag values are now available
    // const boolFlagValue = client.variation('demoflag', false) as boolean;
    // const numberFlagValue = client.variation('YOUR_FEATURE_KEY', 2) as number;
    // const stringFlagValue = client.variation('YOUR_FEATURE_KEY', 'default') as string;

    let flags: LDFlagSet;

    try {
      flags = JSON.parse(JSON.stringify(allFlags));
    } catch (e: any) {
      flags = {};
    }

    this._store.dispatch(
      addLaunchDarklyFeatureFlags({
        flags,
      })
    );
    // etc.
  }

  private _initFeatureFlags() {
    const that = this;
    /**
     * See https://docs.launchdarkly.com/sdk/client-side/javascript#getting-started
     *
     * Feature flag targeting and rollouts are determined by the user viewing the page.
     * You must pass a user context to the SDK during initialization before requesting
     * any feature flags with variation. If you fail to pass a valid user context to the
     * SDK during initialization, you will receive a 400 error.
     */
    const user: LDClient.LDUser = {
      key: 'aa0ceb',
    };

    const client = LDClient.initialize(this._clientID, user);

    // Get flags on load
    client.on('ready', () => {
      that._loadFeatureFlags.call(that, client.allFlags());
    });

    // Listen for changes
    client.on('change', () => {
      that._loadFeatureFlags.call(that, client.allFlags());
    });
  }
}
