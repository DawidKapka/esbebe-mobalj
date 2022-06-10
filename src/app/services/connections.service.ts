import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ConnectionSearchInfo} from "../models/connection-search-info.model";

@Injectable({
    providedIn: 'root'
})
export class ConnectionsService {
    private API_BASE_URL: string = 'http://transport.opendata.ch/v1'

    constructor(private http: HttpClient) {
    }


    public getConnections(searchInfo: ConnectionSearchInfo) {
        return this.http.get(
            `${this.API_BASE_URL}/connections`
            + `?from=${searchInfo.departure.replace(' ', '%20')}`
            + `&to=${searchInfo.arrival.replace(' ', '%20')}`
            + `${searchInfo.date ? '&date=' + searchInfo.date : ''}`
            + `${searchInfo.time ? '&time=' + searchInfo.time : ''}`
        );
    }
}
