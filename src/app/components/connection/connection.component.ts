import {Component, Input, OnInit} from '@angular/core';
import {Connection} from "../../models/connection.model";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
  @Input() connection: Connection;

  constructor() { }

  ngOnInit(): void {
    console.log(this.connection);
  }

  formatTime(time: string): string {
    return time.substring(11, 16)
  }

  formatPlatform(platform: string): string {
    if (!platform) return '';
    if (!isNaN(Number(platform[0]))) {
      return `Pl. ${platform}`
    } else {
      return `Kante ${platform}`;
    }
  }
}
