import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { InternshipComponent } from "./internship/internship.component";
import { AdmissionsComponent } from "./admissions/admissions.component";
import { IndexComponent } from "./index/index.component";
import { CollegeListComponent } from "./college-list/college-list.component";
import { ExamsComponent } from "./exams/exams.component";
import { CollegeDetailsComponent } from "./college-details/college-details.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CollegeInfoComponent } from "./college-details/college-info/college-info.component";
import { ResultComponent } from "./college-details/result/result.component";
import { UserHomeComponent } from "./user-home/user-home.component";
import { ProfessorFormComponent } from "./professorform/professorform.component";
import { NonTeachingFormComponent } from './nonteachingform/nonteachingform.component';
import { ExamFormComponent } from './examform/examform.component';
import { ExamListComponent } from './examlist/examlist.component';
import { JobPostingFormComponent } from './jobposting/jobposting.component';
import { DashboardProfessorComponent } from "./dashboardprofessor/dashboardprofessor.component";
import { ProfessorResearchDashboardComponent } from "./professorresearchdashboard/professorresearchdashboard.component";
import { AboutComponent } from "./about/about.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactComponent } from "./contact/contact.component";
import { CareerDevehomeComponent } from "./career-devehome/career-devehome.component";
import { CareerInfoComponent } from "./career-info/career-info.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { TermsandconditionComponent } from "./termsandcondition/termsandcondition.component";


const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
  },
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "footer",
    component: FooterComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "careerDevelopment",
    component: CareerDevehomeComponent,
  },
  {
    path: "careerInfo/:id",
    component: CareerInfoComponent,
  },
  {
    path: "professorform",
    component: ProfessorFormComponent,
  },
  {
    path: "jobposting",
    component: JobPostingFormComponent,
  },
  {
    path: "nonteaching",
    component: NonTeachingFormComponent,
  },
  {
    path: "exam",
    component: ExamFormComponent,
  },
  {
    path: "examlist",
    component: ExamListComponent,
  },
  {
    path: "internship",
    component: InternshipComponent,
  },
  {
    path: "colleges",
    component: CollegeListComponent,
  },
  {
    path: "colleges/:id",
    component: CollegeListComponent,
  },
  {
    path: "exams",
    component: ExamsComponent,
  },
  {
    path: "collegedetail/:id",
    component: CollegeDetailsComponent,
    children: [
      {
        path: "",
        redirectTo: "info",
        pathMatch: "full",
      },
      {
        path: "info",
        component: CollegeInfoComponent,
      },
      {
        path: "result",
        component: ResultComponent,
      },
    ],
  },

  {
    path: "user-home",
    component: UserHomeComponent,
    children: [
      {
        path: "profile",
        component: ProfileComponent,
      },
      {
        path: "professorform",
        component: ProfessorFormComponent,
      },
      {
        path: "nonteaching",
        component: NonTeachingFormComponent,
      },
      {
        path: "jobposting",
        component: JobPostingFormComponent,
      },
      {
        path: "internship",
        component: InternshipComponent,
      },
      {
        path: "exam",
        component: ExamFormComponent,
      },
      {
        path: "examlist",
        component: ExamListComponent,
      },
      {
        path: "admissions",
        component: AdmissionsComponent,
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "dashboard-professor",
        component: DashboardProfessorComponent,
      },
      {
        path: "dashboard-professorresearch",
        component: ProfessorResearchDashboardComponent,
      },
      {
        path: "careerDevelopment",
        component: CareerDevehomeComponent,
      },
    ],
  },
  {
    path: "privacy",
    component: PrivacyComponent,
  },
  {
    path: "terms&condition",
    component: TermsandconditionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
