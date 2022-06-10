import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Stationboard} from "../../../models/stationboard.model";
import {DeparturesService} from "../../../services/departures.service";

@Component({
  selector: 'app-search-form-departures',
  templateUrl: './search-form-departures.component.html',
  styleUrls: ['./search-form-departures.component.scss']
})
export class SearchFormDeparturesComponent implements OnInit {
  public departureStationValue: string;
  public departureDate: string;
  public departureTime: string;

  @Output('departure-search') departureSearch: EventEmitter<Stationboard> = new EventEmitter<Stationboard>();

  constructor(private departuresService: DeparturesService) { }

  ngOnInit(): void {
  }

  searchDepartures() {
    this.departuresService.getDepartures({
      departure: this.departureStationValue,
      date: this.departureDate,
      time: this.departureTime
    }).forEach(res => {
      console.log(res);
      this.departureSearch.emit(res as Stationboard);
    })
  }
}
