import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'

})

export class DashboardComponent implements OnInit{


  project_data: any[];
  codex_data: any;

  constructor(private http:HttpClient){
 
  }


  ngOnInit() {
 
    this.project({"cmd_id":"project_data"});
    this.codex({"cmd_id":"codex_data"})
    
    }
   

   
    
   project(rData){
    //this.showSpinner = true;
    this.getData(rData).subscribe((data:any) => {
    //this.showSpinner = false;
    // this.resp.push(data);
    console.log("Success",data);
    this.project_data = data;
    },
    error => { 
    // this.showSpinner = false;
    });
    
   }

   codex(rData){
    //this.showSpinner = true;
    this.getData(rData).subscribe((data:any) => {
    //this.showSpinner = false;
    // this.resp.push(data);
    console.log("Success",data);
    this.codex_data = data;
    },
    error => { 
    // this.showSpinner = false;
    });
    
   }
   getData(rData){
    return this.http.post('http://13.126.189.69:80/dev-api/BP',rData);
   }
}