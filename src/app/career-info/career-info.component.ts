import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CareerService } from '../careerService/career.service';

@Component({
  selector: 'app-career-info',
  templateUrl: './career-info.component.html',
  styleUrls: ['./career-info.component.scss']
})
export class CareerInfoComponent implements OnInit {
  data:any;
  bg:any="linear-gradient(to right,#afb0b0,#edeff0)";
  careerOpotunity :any =[];
  spec:any;
  id:any;
  oportunityDetails:[];
  constructor(private route:ActivatedRoute,private careerservice:CareerService) { }

  ngOnInit() {
    // this.getAllCareerOportunity();
    this.route.params.subscribe((data)=>{
      console.log("received data is",data);
      console.log(data.rating);
      // this.data = JSON.stringify(data);
      this.data = data;
      // this.bg = data.headerBg
      this.id = data.id;
      this.spec = data.spec;
      console.log("this is background url",this.bg);
      console.log("spec and id is:", this.id, this.spec)
      this.careerOpotunity = this.careerservice.getCareerOportunity();
      console.log("all career oportunity by service",this.careerOpotunity[0][this.spec][this.id]);
      this.oportunityDetails = this.careerOpotunity[0][this.spec][this.id];
      console.log("oportunity details is here",this.oportunityDetails)
      this.bg = this.careerOpotunity[0][this.spec][this.id].headerBg;
    })
  }
  getAllCareerOportunity(){
    this.careerOpotunity = this.careerservice.getCareerOportunity();
    console.log("all career oportunity by service",this.careerOpotunity);
    console.log("all career oportunity by service",this.careerOpotunity[0][this.spec]);
    console.log("spec and id is:", this.id, this.spec)


  }
}
