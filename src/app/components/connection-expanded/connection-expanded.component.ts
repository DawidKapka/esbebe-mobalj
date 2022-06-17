import {Component, Input, OnInit} from '@angular/core';
import {Connection} from "../../models/connection.model";
import {FormatService} from "../../services/static/format.service";

@Component({
  selector: 'app-connection-expanded',
  templateUrl: './connection-expanded.component.html',
  styleUrls: ['./connection-expanded.component.scss']
})
export class ConnectionExpandedComponent implements OnInit {
  @Input() connection: Connection;
  showDepartureMap: boolean = false;
  showArrivalMap: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public formatTime(time: string) {
    return FormatService.formatTime(time);
  }

  public formatPlatform(platform: string) {
    return FormatService.formatPlatform(platform);
  }

  public formatDelay(delay: string) {
    return FormatService.formatDelay(delay);
  }

  public shareConnection() {
    window.open(`mailto:?subject=${this.getMailSubject()}&body=${this.getMailBody()}`, '_blank').focus();
  }

  private getMailSubject(): string {
    return `ESBEBE MOBAJL: ${this.connection.from.station.name} (${this.formatTime(this.connection.from.departure)}) --- ${this.connection.to.station.name} (${this.formatTime(this.connection.to.arrival)})`
  }

  private getMailBody(): string {
    let body = '';
    for (let section of this.connection.sections) {
      if (!section.walk) {
        body += `(${this.formatTime(section.departure.departure)}) ${section.departure.station.name}`;
        body += section.departure.platform ? ` - ${this.formatPlatform(section.departure.platform)}` : '';
        body += '  ---->  ';
        body += `(${this.formatTime(section.arrival.arrival)}) ${section.arrival.station.name}`;
        body += section.arrival.platform ? ` - ${this.formatPlatform(section.arrival.platform)}` : '';
        body += '%0D%0A%0D%0A'; // Line breaks
      }
    }

    return body;
  }

  showMap(station: 'arrival' | 'departure') {
    if (station === 'arrival') {
      this.showArrivalMap = true;
    } else {
      this.showDepartureMap = true;
    }
  }
}
