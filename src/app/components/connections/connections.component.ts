import { Component, OnInit } from '@angular/core';
import {Connection} from "../../models/connection.model";

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {
    connections: Connection[] = []

    ngOnInit(): void {
    }

    setConnections(connections: Connection[]) {
        this.connections = connections;
    }
}
