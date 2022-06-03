import { Component, OnInit } from '@angular/core';
import {Connection} from "../../models/connection.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {
    connections: Connection[] = [
    ]

  constructor(private http: HttpClient) {
        this.http.get('http://transport.opendata.ch/v1/connections?from=Luzern&to=BaselSBB').forEach(res => {
            this.connections = (res as any).connections;
        })
  }

  ngOnInit(): void {
  }

}
