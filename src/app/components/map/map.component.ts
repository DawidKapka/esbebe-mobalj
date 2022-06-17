import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Coordinate} from "../../models/coordinate.model";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() coordinate: Coordinate;
  @Output() hide: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  emitHide() {
    this.hide.emit();
  }

  private initMap() {

  }
}
