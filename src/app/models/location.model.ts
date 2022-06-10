import {Coordinate} from "./coordinate.model";

export interface Location {
    id: string;
    name: string;
    coordinate: Coordinate,
    distance: string;
}
