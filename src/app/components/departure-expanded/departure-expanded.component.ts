import {Component, Input, OnInit} from '@angular/core';
import {Departure} from "../../models/departure.model";
import {FormatService} from "../../services/static/format.service";

@Component({
  selector: 'app-departure-expanded',
  templateUrl: './departure-expanded.component.html',
  styleUrls: ['./departure-expanded.component.scss']
})
export class DepartureExpandedComponent implements OnInit {

  @Input() departure: Departure;

  constructor() { }

  ngOnInit(): void {
  }

  formatTime(time: string): string {
    return FormatService.formatTime(time);
  }

  formatDelay(delay: string): string {
    return FormatService.formatDelay(delay);
  }
}
