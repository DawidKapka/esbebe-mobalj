import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {Connection} from "../../models/connection.model";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Input('type') public formType: 'connections' | 'departures' = null;
  @Output('connection-search') connectionSearch: EventEmitter<Connection[]> = new EventEmitter<Connection[]>();
  tab: 'connections' | 'departures' = 'connections';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.tab = this.formType;
  }

  navigateTo(page: 'connections' | 'departures') {
    this.router.navigate([page]);
    this.tab = page;
  }

  emitConnections(connections: Connection[]) {
    this.connectionSearch.emit(connections);
  }
}
