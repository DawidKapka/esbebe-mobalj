import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ConnectionsComponent } from './components/connections/connections.component';
import { DeparturesComponent } from './components/departures/departures.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchFormConnectionsComponent } from './components/search-form/search-form-connections/search-form-connections.component';
import { SearchFormDeparturesComponent } from './components/search-form/search-form-departures/search-form-departures.component';
import { InputStationTypeaheadComponent } from './components/input/input-station-typeahead/input-station-typeahead.component';
import {StationsService} from "./services/stations.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { InputDatetimeComponent } from './components/input/input-datetime/input-datetime.component';
import { ConnectionComponent } from './components/connection/connection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConnectionsComponent,
    DeparturesComponent,
    SearchFormComponent,
    SearchFormConnectionsComponent,
    SearchFormDeparturesComponent,
    InputStationTypeaheadComponent,
    InputDatetimeComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
