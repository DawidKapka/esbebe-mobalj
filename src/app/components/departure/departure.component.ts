import {Component, Input, OnInit} from '@angular/core';
import {Connection} from "../../models/connection.model";
import {Departure} from "../../models/departure.model";
import {FormatService} from "../../services/static/format.service";

@Component({
  selector: 'app-departure',
  templateUrl: './departure.component.html',
  styleUrls: ['./departure.component.scss']
})
export class DepartureComponent implements OnInit {
  public isExpanded: boolean = false;
  @Input() connection: Departure;
  constructor() { }

  ngOnInit(): void {
    console.log(this.connection);
  }



  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  formatTime(time: string): string {
    return FormatService.formatTime(time);
  }

  formatPlatform(platform: string): string {
    return FormatService.formatPlatform(platform);
  }
}
