import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatSort, MatChipInputEvent} from '@angular/material';
import { HttpClientModule,HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';
@Component({
  selector: 'app-newdeal',
  templateUrl: './newdeal.component.html',
  styleUrls: ['./newdeal.component.scss']
})
export class NewdealComponent implements OnInit {

  dealsform: FormGroup;
  OppID:string='';
  OppName:string='';
  OppOwner:string='';
  AccName:string='';
  AccRegion:string='';
  CreDate:string='';
  CloDate:string='';
  Amount:string='';
  PSD:string='';
  PED:string='';


  dataSource: any;
  displayedColumns = [];

  public update_table_data:any =[];
  public current_tab:any = [];
  update_header:any[];
  
  constructor(private http:HttpClient,private fb: FormBuilder) { 
    this.dealsform = fb.group({  
      'cmd_id' : ['update_deals'],
      'OppID' : [null, Validators.required],
      'OppName' : [null, Validators.required],
      'OppOwner' : [null, Validators.required],
      'AccName' : [null, Validators.required],
      'AccRegion' : [null, Validators.required],
      'CreDate' : [null, Validators.required],
      'CloDate' : [null, Validators.required],
      'Amount' : [null, Validators.required],
      'PSD' : [null, Validators.required],
      'PED' : [null, Validators.required]
  })
}

  ngOnInit() {
    this.get_deals_data({'cmd_id':'get_data'});
  }

  get_deals_data(rData){
    
      this.getData(rData).subscribe((data:any) => {
 
        
       // this.resp.push(data);
       this.dataSource=new MatTableDataSource(data.data);
        console.log("Success",this.dataSource);
        //LogData:this.table_data    = data.data;
       this.displayedColumns  = data.headers.map(function(elm){return elm.name});
  
    },
    error => { 
      console.log("Error");
    });
  
  }

  data_update(deals, row_json, hour){
    this.update_table_data     = row_json;
    this.update_header = hour;
    this.current_tab   = deals;
    console.log(row_json,hour,deals)
}

  getData(rData){
    return this.http.post('http://13.126.189.69:80/dev-api/BP', JSON.stringify(rData), {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
   }



   onSubmit (form:NgForm){
   
console.log(form);
   }

}
