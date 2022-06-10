import {Station} from './station.model';
import {Departure} from "./departure.model";

export interface Stationboard {
    stations: Station,
    stationboard: Departure[]
}
