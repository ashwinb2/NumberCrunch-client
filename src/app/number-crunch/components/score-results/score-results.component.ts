import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Views } from 'src/app/utilities/constants';
import { SampleScoresRequest } from '../../models/sample-scores-request';
import { SampleScore } from '../../models/sample-score';
import { NumberCrunchSharedDataService } from '../../services/number-crunch-shared-data.service';
import { NumberCrunchService } from '../../services/number-crunch.service';

@Component({
  selector: 'score-results',
  templateUrl: './score-results.component.html',
  styleUrls: ['./score-results.component.css']
})
export class ScoreResultsComponent implements OnInit {

  sampleScoresRequest: SampleScoresRequest = new SampleScoresRequest();
  sampleScores: SampleScore[] = []; 
  viewsAsConstant = Views;
  views: string[] = [ Views.Default, Views.Simple, Views.Bordered ];
  selectedView: string = this.viewsAsConstant.Default;
  fileOutput: any;
  pageSize: number = 8;
  pageNumber: number = 1;
  totalRecords: number = 0;
  constructor(private _router: Router, private _numberCrunchService: NumberCrunchService,
      private _sharedDataService: NumberCrunchSharedDataService) {

  }

  ngOnInit(): void {
    this.sampleScoresRequest = this._sharedDataService.sampleScoreRequest;
    this.totalRecords = this.sampleScoresRequest.SampleMaxCount;
    this.loadData();
    this.readFileContent();
  }

  loadData() {
    this.sampleScoresRequest.PageSize = this.pageSize;
    this.sampleScoresRequest.PageNumber = this.pageNumber;

    this._numberCrunchService.formSampleScores(this.sampleScoresRequest).subscribe((response: SampleScore[]) => {
      this.sampleScores = response;
    });
  }

  onViewClicked(view: string) {
    this.selectedView = view;
  }

  onBackClicked() {
    this._router.navigateByUrl('scoreentry');
  }

  readFileContent() {
    var file = this.sampleScoresRequest.TextFile;
    if (file) {
      var reader = new FileReader();
      reader.onload = (e: any) => {
        this.fileOutput = e.target.result;
      };
      reader.readAsText(file);
    }
  }

}
