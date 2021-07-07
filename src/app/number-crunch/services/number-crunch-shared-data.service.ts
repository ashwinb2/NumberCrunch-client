import { Injectable } from "@angular/core";
import { SampleScoresRequest } from "../models/sample-scores-request";

@Injectable()
export class NumberCrunchSharedDataService {
    sampleScoreRequest: SampleScoresRequest = new SampleScoresRequest();
}