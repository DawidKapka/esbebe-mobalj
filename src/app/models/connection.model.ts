import {Station} from "./station.model";
import {Checkpoint} from "./checkpoint.model";

export interface Connection {
    from: Checkpoint,
    to: Checkpoint,
    duration: string,
    service: string,
    products: string[],
    capacity1st: number,
    capacity2nd: number,
}
