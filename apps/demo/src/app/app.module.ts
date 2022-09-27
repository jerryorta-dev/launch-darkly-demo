import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  LaunchDarklyClientIDToken,
  LaunchDarklyStoreModule,
} from '@web-platform/data-access';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LaunchDarklyUiModule } from './launch-darkly-ui/launch-darkly-ui.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),

    // Launch Darkly
    LaunchDarklyUiModule,
    LaunchDarklyStoreModule,

    BrowserAnimationsModule,

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      // autoPause: true,
      // features: {
      //   pause: false,
      //   lock: true,
      //   persist: true
      // }
    }),

    MatToolbarModule,
  ],
  providers: [
    {
      provide: LaunchDarklyClientIDToken,
      useValue: environment.launchDarklyClientID,
    },
    {
      provide: 'FLAGS',
      useValue: [],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
