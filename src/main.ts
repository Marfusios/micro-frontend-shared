import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { ComponentsModule } from './components/components.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ComponentsModule)
  .catch(err => console.error(err));
