import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBooleanFeatureFlag } from '@web-platform/data-access';
import { Observable } from 'rxjs';
import { APP_FEATURE_FLAGS } from '../app-feature-flags';

@Component({
  selector: 'launch-darkly-ui',
  templateUrl: './launch-darkly-ui.component.html',
  styleUrls: ['./launch-darkly-ui.component.scss'],
})
export class LaunchDarklyUiComponent implements OnInit {
  showBooleanFlag$!: Observable<boolean>;
  constructor(private store: Store) {}

  ngOnInit() {
    this.showBooleanFlag$ = this.store.select(
      selectBooleanFeatureFlag(APP_FEATURE_FLAGS.DEMO_BOOLEAN_FLAG)
    );
  }
}
