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

  constructor() { }

  ngOnInit(): void {
  }

  formatTime(time: string) {
    return FormatService.formatTime(time);
  }

  formatPlatform(platform: string) {
    return FormatService.formatPlatform(platform);
  }

  formatDelay(delay: string) {
    return FormatService.formatDelay(delay);
  }
}
