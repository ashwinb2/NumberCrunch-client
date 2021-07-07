import { Routes } from "@angular/router";
import { ScoreEntryComponent } from "./number-crunch/components/score-entry/score-entry.component";
import { ScoreResultsComponent } from "./number-crunch/components/score-results/score-results.component";

export const routes: Routes = [
    {
        path: '',
        component: ScoreEntryComponent
    },
    {
        path: 'scoreentry',
        component: ScoreEntryComponent
    },
    {
        path: 'scoreresults',
        component: ScoreResultsComponent,
    }
];