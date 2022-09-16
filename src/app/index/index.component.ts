import { Component, OnInit, HostBinding } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";
import {environment} from "@environment";

@Component({
  selector: "app-home-page",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  public imageBasePath = environment.imageBasePath;
  @HostBinding("class") HomePageComponentClass = "app-home-page";
  selUniversity="";  
  explore = [
    {
      img: "assets/images/Best colleges.png",
      name: "Best Colleges",
      subtitle: `Lorem ipsum dolor sit amet,
  consectetur adipiscing.gravida`,
    },
    {
      img: "assets/images/Explore Exams.png",
      name: "Explore Exams",
      subtitle: `Lorem ipsum dolor sit amet,
  consectetur adipiscing.gravida`,
    },
    {
      img: "assets/images/Latest News.png",
      name: "Latest News",
      subtitle: `Lorem ipsum dolor sit amet,
  consectetur adipiscing.gravida`,
    },
    {
      img: "assets/images/RankIng.png",
      name: "Ranking",
      subtitle: `Lorem ipsum dolor sit amet,
  consectetur adipiscing.gravida`,
    },
    {
      img: "assets/images/Courses.png",
      name: "Courses",
      subtitle: `Lorem ipsum dolor sit amet,
  consectetur adipiscing.gravida`,
    },
    {
      img: "assets/images/Admissions.png",
      name: "Admissions",
      subtitle: `Lorem ipsum dolor sit amet,
  consectetur adipiscing.gravida`,
    },
  ];

  // career = [];

  career = [];

  exams = [
    {
      title: "Exam Title",
      subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing
  gravida. Lorem ipsum dolor sit amet, consectetur adipiscing gravida.`,
    },
    {
      title: "Exam Title",
      subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing
  gravida. Lorem ipsum dolor sit amet, consectetur adipiscing gravida.`,
    },
    {
      title: "Exam Title",
      subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing
  gravida. Lorem ipsum dolor sit amet, consectetur adipiscing gravida.`,
    },
    {
      title: "Exam Title",
      subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing
  gravida. Lorem ipsum dolor sit amet, consectetur adipiscing gravida.`,
    },
    {
      title: "Exam Title",
      subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing
  gravida. Lorem ipsum dolor sit amet, consectetur adipiscing gravida.`,
    },
    {
      title: "Exam Title",
      subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing
  gravida. Lorem ipsum dolor sit amet, consectetur adipiscing gravida.`,
    },
    {
      title: "Exam Title",
      subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing
  gravida. Lorem ipsum dolor sit amet, consectetur adipiscing gravida.`,
    },
    {
      title: "Exam Title",
      subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing
  gravida. Lorem ipsum dolor sit amet, consectetur adipiscing gravida.`,
    },
    {
      title: "Exam Title",
      subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing
  gravida. Lorem ipsum dolor sit amet, consectetur adipiscing gravida.`,
    },
  ];

  colleges = [];
  constructor(private _authService: AuthService, public router: Router) {}

  ngOnInit() {
    this.userHome();
  }

  userHome() {
    this._authService.getHomePage().subscribe((res: any) => {
      this.colleges = res.FeaturedCollegeList;
      this.career = res.StreamList;
    });
  }
  
  changeNameFilter(searchValue: string)
  {
	  this.selUniversity=searchValue;
  }
  
  searchByName(searchValue: string)
  {
	  localStorage.setItem('filterUniversity', this.selUniversity);
	  this.router.navigate(['/colleges']);   
  }
}
