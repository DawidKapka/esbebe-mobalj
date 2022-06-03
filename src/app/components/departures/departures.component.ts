import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Stationboard} from "../../models/stationboard.model";

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.scss']
})
export class DeparturesComponent implements OnInit {
  stationboard: Stationboard;

  constructor(private http: HttpClient) {
    this.http.get('http://transport.opendata.ch/v1/stationboard?station=Luzern').forEach(res => {
      this.stationboard = res as Stationboard;
    })
  }

  ngOnInit(): void {
  }

}
