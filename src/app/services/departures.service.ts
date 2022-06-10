import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {DeparturesSearchInfo} from "../models/departures-search-info.model";

@Injectable({
    providedIn: 'root'
})
export class DeparturesService {
    private API_BASE_URL: string = 'http://transport.opendata.ch/v1'

    constructor(private http: HttpClient) {
    }

    public getDepartures(searchInfo: DeparturesSearchInfo) {
        return this.http.get(
            `${this.API_BASE_URL}/stationboard`
            + `?station=${searchInfo.departure.replace(' ', '%20')}`
            + `${searchInfo.date && searchInfo.time ? '&datetime=' + searchInfo.date + '%20' + searchInfo.time : ''}`
        )
    }

}
