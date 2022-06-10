import {Station} from "./station.model";

export interface Stop {
    arrival: string;
    arrivalTimestamp: string;
    delay: string;
    departure: string;
    departureTimestamp: string;
    location: Location;
    platform: string;
    realtimeAvailability: string;
    station: Station;
}
