import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SampleScoresRequest } from "../models/sample-scores-request";
import { SampleScore } from "../models/sample-score";

@Injectable()
export class NumberCrunchService {
    apiUrl = 'https://localhost:5001/'

    constructor(private _http: HttpClient) {}

    formSampleScores(request: SampleScoresRequest): Observable<SampleScore[]> {
        return this._http.post<SampleScore[]>(this.apiUrl + 'api/numbercrunch', request);
    }
}