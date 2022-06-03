import {Station} from "./station.model";

export interface Checkpoint {
    station: Station,
    arrival: string,
    departure: string,
    delay: number,
    platform: string,
}
