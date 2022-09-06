import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PushModule } from '@ngrx/component';
import { LaunchDarklyUiComponent } from './launch-darkly-ui.component';

@NgModule({
  declarations: [LaunchDarklyUiComponent],
  imports: [CommonModule, MatCardModule, PushModule],
  exports: [LaunchDarklyUiComponent],
})
export class LaunchDarklyUiModule {}
