import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  LaunchDarklyClientIDToken,
  LaunchDarklyModule,
} from '@web-platform/data-access';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    LaunchDarklyModule,
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
  ],
  providers: [
    {
      provide: LaunchDarklyClientIDToken,
      useValue: environment.launchDarklyClientID,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
