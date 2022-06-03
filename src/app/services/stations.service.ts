import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class StationsService {
    private API_ROOT_URL = 'http://transport.opendata.ch/v1'

    constructor(private http: HttpClient) {
    }

    public findAllStations(query: string) {
        return this.http.get(`${this.API_ROOT_URL}/locations?query=${query}`)
    }
}
