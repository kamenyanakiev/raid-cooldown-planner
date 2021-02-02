import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RaidTableComponent } from './components/raid-table/raid-table.component';
import { RaidTablePlayerComponent } from './components/raid-table-player/raid-table-player.component';

@NgModule({
  declarations: [	
    AppComponent,
      RaidTableComponent,
      RaidTablePlayerComponent
   ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
