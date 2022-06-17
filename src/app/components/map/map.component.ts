import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Station} from "../../models/station.model";
import * as mapStyles from './mapStyles.json'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() station: Station;
  @Output() hide: EventEmitter<void> = new EventEmitter<void>();
  public center: google.maps.LatLngLiteral;
  public zoom: number = 17;
  options: google.maps.MapOptions;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  emitHide() {
    this.hide.emit();
  }

  private initMap() {
    this.options = {
      disableDefaultUI: true,
      styles: mapStyles
    }
    this.center = {
      lat: this.station.coordinate.x,
      lng: this.station.coordinate.y
    }
  }
}
