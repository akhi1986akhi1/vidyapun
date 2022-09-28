import { BrowserModule } from "@angular/platform-browser";
import { NgModule, HostBinding } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Router } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule, MatCardModule } from "@angular/material";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AuthModule } from "./auth/auth.module";
import { IndexComponent } from "./index/index.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from "./footer/footer.component";
import { CollegeListComponent } from "./college-list/college-list.component";
import { CollegeDetailsComponent } from "./college-details/college-details.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./profile/profile.component";
import { CardComponent } from "./app-common/card/card.component";
import { ExamCardComponent } from "./app-common/examcard/examcard.component";
import { CollegeInfoComponent } from './college-details/college-info/college-info.component';
import { ResultComponent } from './college-details/result/result.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { MatTabsModule } from '@angular/material';
import { AdmissionsComponent } from "./admissions/admissions.component";
import { InternshipComponent } from "./internship/internship.component";
import { ExamsComponent } from "./exams/exams.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { ProfessorFormComponent } from "./professorform/professorform.component";
import { NonTeachingFormComponent } from './nonteachingform/nonteachingform.component';
import { ExamFormComponent } from './examform/examform.component';
import { ExamListComponent } from './examlist/examlist.component';
import { JobPostingFormComponent } from './jobposting/jobposting.component';
import { DashboardProfessorComponent } from "./dashboardprofessor/dashboardprofessor.component";
import { ProfessorResearchDashboardComponent } from "./professorresearchdashboard/professorresearchdashboard.component";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CareerDevehomeComponent } from './career-devehome/career-devehome.component';
import { CareerInfoComponent } from './career-info/career-info.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavigationComponent,
    FooterComponent,
    CollegeListComponent,
    CollegeDetailsComponent,
    ProfileComponent,
    InternshipComponent,
    DashboardComponent,
    DashboardProfessorComponent,
    ProfessorResearchDashboardComponent,
    CardComponent,
    CollegeInfoComponent,
    ResultComponent,
    UserHomeComponent,
	AdmissionsComponent,
	ExamsComponent,
	ExamCardComponent,
	ProfessorFormComponent,
	NonTeachingFormComponent,
	ExamFormComponent,
	ExamListComponent,
	JobPostingFormComponent,
	AboutComponent,
	ContactComponent,
	CareerDevehomeComponent,
	CareerInfoComponent,
	PrivacyComponent,
	TermsandconditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    MatCardModule,
    HttpClientModule,
	MatTabsModule,
	NgxSpinnerModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}
