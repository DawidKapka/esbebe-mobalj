import {Station} from './station.model';
import {Connection} from './connection.model';

export interface Stationboard {
    stations: Station,
    stationboard: Connection[]
}
