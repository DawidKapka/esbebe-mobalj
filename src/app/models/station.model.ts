import {Coordinate} from "./coordinate.model";

export interface Station {
    id: string,
    name: string,
    icon: string,
    distance: string,
    coordinate: Coordinate
}
