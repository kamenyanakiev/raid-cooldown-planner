import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RaidTableComponent } from './components/raid-table/raid-table.component';
import { RaidTablePlayerComponent } from './components/raid-table-player/raid-table-player.component';
import { NewPlayerComponent } from './components/new-player/new-player.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from  '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
      RaidTableComponent,
      RaidTablePlayerComponent,
      NewPlayerComponent
   ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NoopAnimationsModule,
    DropdownModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
