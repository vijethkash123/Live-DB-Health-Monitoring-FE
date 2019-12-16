import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html'

})

export class DashboardComponent implements OnInit {
  public counter: any;
  public x: any;
  Dindex= ['Matheson : 2.03','SAP : 2.15','Trader Joes : 1.72','Coats : 2.32','Walmart : 2.71','Lineage: 2.04'];
  project_data: any[];
  codex_data: any;
  isCodex: boolean;
  isCustomer: boolean;
  isDi: boolean;
  isWelcome: boolean;
  constructor(private http: HttpClient) {
      
    this.counter=0;
    setInterval(() =>{
    this.x=this.Dindex[this.counter]
    //console.log(this.Dindex[2]);
    this.counter++;
    if (this.counter > 6) { this.counter = 0 };
    },2000);

  }


  ngOnInit() {
    this.project({ "cmd_id": "project_data" });
    this.codex({ "cmd_id": "codex_data" })
    this.isWelcome=true;
 
  }




  project(rData) {
    //this.showSpinner = true;
    this.getData(rData).subscribe((data: any) => {
      //this.showSpinner = false;
      // this.resp.push(data);
      console.log("Success", data);
      this.project_data = data;
    },
      error => {
        // this.showSpinner = false;
      });

  }

  codex(rData) {
    //this.showSpinner = true;
    this.getData(rData).subscribe((data: any) => {
      //this.showSpinner = false;
      // this.resp.push(data);
      console.log("Success", data);
      this.codex_data = data;
    },
      error => {
        // this.showSpinner = false;
      });

  }
  getData(rData) {
    return this.http.post('http://13.126.189.69:80/dev-api/BP', rData);
  }

  codex_call() {
    this.isCodex = true;
    this.isCustomer = false;
    this.isDi = false;
    this.isWelcome=false;
  }
  customer_call() {
    this.isCodex = false;
    this.isCustomer = true;
    this.isDi = false;
    this.isWelcome=false;
  }
  di_call() {
    this.isDi = true;
    this.isCodex = false;
    this.isCustomer = false;
    this.isWelcome=false;
  }
}