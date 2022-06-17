import {Stop} from "./stop.model";
import {Departure} from "./departure.model";

export interface Section {
    journey: Departure;
    walk: string;
    departure: Stop;
    arrival: Stop;
}
