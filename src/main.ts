import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// See components in AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err))