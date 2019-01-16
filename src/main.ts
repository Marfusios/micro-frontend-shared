import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { EntryModule } from './entry/entry.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(EntryModule)
  .catch(err => console.error(err));
