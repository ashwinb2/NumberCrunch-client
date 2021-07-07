import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SampleScoresRequest } from '../../models/sample-scores-request';
import { NumberCrunchSharedDataService } from '../../services/number-crunch-shared-data.service';

@Component({
  selector: 'score-entry',
  templateUrl: './score-entry.component.html',
  styleUrls: ['./score-entry.component.css']
})
export class ScoreEntryComponent implements OnInit {

  constructor(private _fb: FormBuilder, private _router: Router, private _sharedDataService: NumberCrunchSharedDataService) { }
  submitted: boolean = false;
  selectedFile!: File;
  sampleEntryFormGroup: FormGroup = this._fb.group({
    SampleMaxCount: [, [Validators.required]],
    PatientScore: [, [Validators.required]],
    DoctorScore: [, [Validators.required]],
    UploadFile: [null],
  });

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    let request = <SampleScoresRequest> {
      SampleMaxCount: this.sampleEntryFormGroup.get('SampleMaxCount')?.value,
      PatientScore: this.sampleEntryFormGroup.get('PatientScore')?.value,
      DoctorScore: this.sampleEntryFormGroup.get('DoctorScore')?.value,
      TextFile: this.selectedFile
    }
    this._sharedDataService.sampleScoreRequest = request;
    if (this.sampleEntryFormGroup.valid) {
      this._router.navigate(['/scoreresults']);
      this.submitted = false;
    }
  }

  onSelectFile(fileInput: any) {
    const file = fileInput.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

}
