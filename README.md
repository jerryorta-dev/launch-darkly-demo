

# Launch Darkly Demo POC

- [Launch Darkly Admin](https://app.launchdarkly.com/default/test/features)

See UI hosted at https://launch-darkly-demo.web.app/


### Local Environment

Clone this repo, along with the secrets repo `https://github.com/jerryorta-dev/launch-darkly-secrets-private` as a sibling to this repo ( if you have access ). In this repo, run `npm run secrets` to copy the secrets to the nx library  
`libs/any-shared/secrets/src/lib`. Then you can run the local server ( see below ).

If you need to create a secrets repo, follow this [template repo](https://github.com/jerryorta-dev/launch-darkly-secrets-private-template)

### Run Development server to load Launch Darkly `Test` environment feature flags

Run `npx nx serve demo` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Run Production server to load Launch Darkly `Production` environment feature flags

Run `npx nx serve demo --prod` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Deploy to firebase

Only production is configured for deployment. 

Run in console: `npm run d.demo.prd`

## Architecture

This architecture uses NgRX to store all launch darkly feature flags. The Launch Darkly Client SDK  ( see `launchdarkly-js-client-sdk` in the `package.json` ) is wrapped in an Effect, and listens for constant changes. The benefits are:

- Changes are updated to the store in real time as changes are made in the Launch Darkly Admin
- Feature flags may be consumed in the UI as observables from NgRX selectors, Allowing feature flags to be used anywhere:
  - Components
  - Services
  - Route Guards
  - etc.

### UI

`APP_FEATURE_FLAGS` Enum:
The UI needs to be aware of what feature flags are available from Launch Darkly, see the enum in `apps/demo/src/app/app-feature-flags.ts`.

- See Demo Component feature consumption: `apps/demo/src/app/launch-darkly-ui`.

### NgRX Feature Store

- See Store at `libs/web-platform/data-access/src/lib/launch-darkly`.

The feature store is located in a reusable Nx library, allowing multiple angular applications to use the same architecture with minimal install - `apps/demo/src/app/app.module.ts:27` - by adding 
`LaunchDarklyStoreModule` to the app.module.ts.

### NgRX Feature Effect

- See Effect at `libs/web-platform/data-access/src/lib/launch-darkly/launch-darkly.effects.ts:62`.

The feature effect wraps the Launch Darkly Client SDK ( `launchdarkly-js-client-sdk` ). The effect self-initializes with the `ngrxOnInitEffects` hook, then initializing the Launch Darkly SDK.

