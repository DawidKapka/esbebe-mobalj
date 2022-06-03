import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {StationsService} from "../../../services/stations.service";
import {Stations} from "../../../models/stations.model";
import {Station} from "../../../models/station.model";

@Component({
  selector: 'app-input-station-typeahead',
  templateUrl: './input-station-typeahead.component.html',
  styleUrls: ['./input-station-typeahead.component.scss']
})
export class InputStationTypeaheadComponent implements OnInit {
  public suggestions: string[] = [];
  public typeaheadOpen: boolean = false;

  @Input() placeholder: string = '';
  @Input('value') public value: string = '';
  @Output('valueChange') private valueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private stationsService: StationsService) { }

  ngOnInit(): void {
  }

  public findSuggestions() {
    this.valueChange.emit(this.value)
    this.typeaheadOpen = true;
    this.suggestions = [];
    if (this.value) this.stationsService.findAllStations(this.value).forEach(res => {
      (res as Stations).stations.forEach((station: Station) => {
        if (this.value.toLowerCase() !== station.name.toLowerCase() && this.suggestions.length <= 10) {
          this.suggestions.push(station.name)
        }
      })
    })
  }

  closeTypeahead() {
    setTimeout(() => this.typeaheadOpen = false, 200)
  }

  copySuggestion(event: MouseEvent) {
    this.value = (event.target as HTMLElement).innerText;
    this.valueChange.emit(this.value)
  }
}
