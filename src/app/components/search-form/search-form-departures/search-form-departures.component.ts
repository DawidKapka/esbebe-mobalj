import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form-departures',
  templateUrl: './search-form-departures.component.html',
  styleUrls: ['./search-form-departures.component.scss']
})
export class SearchFormDeparturesComponent implements OnInit {
  public departureStationValue: string;

  constructor() { }

  ngOnInit(): void {
  }

}
