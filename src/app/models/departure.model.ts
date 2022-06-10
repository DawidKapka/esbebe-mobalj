import {Stop} from "./stop.model";

export interface Departure {
    capacity1st: number,
    capacity2nd: number,
    category: string,
    categoryName: string,
    name: string,
    number: string,
    operator: string,
    passList: Stop[],
    stop: Stop,
    subcategory: string,
    to: string
}
