import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LeafletComponent } from './leaflet/leaflet.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LeafletComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
