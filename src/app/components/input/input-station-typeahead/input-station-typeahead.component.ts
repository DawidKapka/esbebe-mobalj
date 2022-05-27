import { Component, OnInit } from '@angular/core';
import {StationsService} from "../../../services/stations.service";

@Component({
  selector: 'app-input-station-typeahead',
  templateUrl: './input-station-typeahead.component.html',
  styleUrls: ['./input-station-typeahead.component.scss']
})
export class InputStationTypeaheadComponent implements OnInit {
  public suggestions: string[] = ['Luzern', 'Luzern Kantonalbank', 'Luzern, Eisfeld'];
  searchQuery: string = '';

  constructor(private stationsService: StationsService) { }

  ngOnInit(): void {
  }

  public findSuggestions() {
    if (this.searchQuery) this.stationsService.findAllStations(this.searchQuery).forEach(res => {
      console.log(res);
    })
  }
}
