import { Component, OnInit } from '@angular/core';
import {Stationboard} from "../../models/stationboard.model";

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.scss']
})
export class DeparturesComponent implements OnInit {
  public stationboard: Stationboard;

  ngOnInit(): void {
  }

    setDepartures(departures: Stationboard) {
        this.stationboard = departures;
    }
}
