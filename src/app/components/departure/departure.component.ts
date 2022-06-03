import {Component, Input, OnInit} from '@angular/core';
import {Connection} from "../../models/connection.model";
import {Stop} from "../../models/stop.model";

@Component({
  selector: 'app-departure',
  templateUrl: './departure.component.html',
  styleUrls: ['./departure.component.scss']
})
export class DepartureComponent implements OnInit {

  @Input() connection: Stop;
  constructor() { }

  ngOnInit(): void {
  }

}
