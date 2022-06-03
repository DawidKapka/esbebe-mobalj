import {Station} from './station.model';
import {Stop} from "./stop.model";

export interface Stationboard {
    stations: Station,
    stationboard: Stop[]
}
