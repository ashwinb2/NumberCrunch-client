import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BsDropdownModule, BsDropdownConfig  } from 'ngx-bootstrap/dropdown';
import { ScoreEntryComponent } from './number-crunch/components/score-entry/score-entry.component';
import { NavBarComponent } from './number-crunch/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { NumberCrunchService } from './number-crunch/services/number-crunch.service';
import { ScoreResultsComponent } from './number-crunch/components/score-results/score-results.component';
import { NumberCrunchSharedDataService } from './number-crunch/services/number-crunch-shared-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ScoreResultsComponent,
    ScoreEntryComponent,
    NavBarComponent,
  ],
  imports: [
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [ BsDropdownConfig, NumberCrunchService, NumberCrunchSharedDataService ],
  bootstrap: [AppComponent],
})
export class AppModule { }
