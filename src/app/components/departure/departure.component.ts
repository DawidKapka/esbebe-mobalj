import { Component, OnInit } from '@angular/core';
import {Connection} from "../../models/connection.model";

@Component({
  selector: 'app-departure',
  templateUrl: './departure.component.html',
  styleUrls: ['./departure.component.scss']
})
export class DepartureComponent implements OnInit {

  @Input() connection: Connection;
  constructor() { }

  ngOnInit(): void {
  }

}
