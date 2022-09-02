import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LaunchDarklyEffects } from './launch-darkly.effects';
import { launchDarklyFeatureKey, launchDarklyReducer } from './launch-darkly.reducer';


@NgModule({
            declarations: [],
            imports: [
              CommonModule,
              StoreModule.forFeature(launchDarklyFeatureKey, launchDarklyReducer, ),
              EffectsModule.forFeature([LaunchDarklyEffects]),
            ],
          })
export class LaunchDarklyModule {
}
