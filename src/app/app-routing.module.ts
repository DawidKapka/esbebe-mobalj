import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnectionsComponent} from "./components/connections/connections.component";
import {DeparturesComponent} from "./components/departures/departures.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'connections'},
  {path: 'connections', component: ConnectionsComponent},
  {path: 'departures', component: DeparturesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
