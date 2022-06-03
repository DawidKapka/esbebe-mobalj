import {Connection} from "./connection.model";

export interface Stop {
    capacity1st: number,
    capacity2nd: number,
    category: string,
    categoryName: string,
    name: string,
    number: string,
    operator: string,
    passList: Connection[],
    stop: Connection,
    subcategory: string,
    to: string
}
