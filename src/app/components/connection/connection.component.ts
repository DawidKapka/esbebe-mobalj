import {Component, Input, OnInit} from '@angular/core';
import {Connection} from "../../models/connection.model";
import {FormatService} from "../../services/static/format.service";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
  @Input() connection: Connection;

  constructor() { }

  ngOnInit(): void {
  }

  formatTime(time: string): string {
    return FormatService.formatTime(time)
  }

  formatPlatform(platform: string): string {
    return FormatService.formatPlatform(platform);
  }
}
