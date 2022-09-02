import { clientSideIDProd } from '@secrets';
import { EnvironmentModel } from './environment.model';

export const environment: EnvironmentModel = {
  production: true,
  launchDarklyClientID: clientSideIDProd
};
