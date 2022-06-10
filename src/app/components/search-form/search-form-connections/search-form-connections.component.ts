import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Connection} from "../../../models/connection.model";
import {ConnectionsService} from "../../../services/connections.service";

@Component({
  selector: 'app-search-form-connections',
  templateUrl: './search-form-connections.component.html',
  styleUrls: ['./search-form-connections.component.scss']
})
export class SearchFormConnectionsComponent implements OnInit {
  public departureStationValue: string;
  public arrivalStationValue: string;
  public connectionDate: string;
  public connectionTime: string;

  @Output('connection-search') connectionSearch: EventEmitter<Connection[]> = new EventEmitter<Connection[]>();

  constructor(private connectionsService: ConnectionsService) {
  }

  ngOnInit(): void {
  }

  switchInputs() {
    const departure = this.departureStationValue;
    this.departureStationValue = this.arrivalStationValue;
    this.arrivalStationValue = departure;
  }

  searchConnections() {
    this.connectionsService.getConnections({
      departure: this.departureStationValue,
      arrival: this.arrivalStationValue,
      date: this.connectionDate,
      time: this.connectionTime
    }).forEach(res => {
      this.connectionSearch.emit((res as any).connections);
    })
  }
}
