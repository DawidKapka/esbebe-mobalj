import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form-connections',
  templateUrl: './search-form-connections.component.html',
  styleUrls: ['./search-form-connections.component.scss']
})
export class SearchFormConnectionsComponent implements OnInit {
  public departureStationValue: string;
  public arrivalStationValue: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  switchInputs() {
    const departure = this.departureStationValue;
    this.departureStationValue = this.arrivalStationValue;
    this.arrivalStationValue = departure;
  }
}
