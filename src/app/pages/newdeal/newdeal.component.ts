import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatSort, MatChipInputEvent} from '@angular/material';
import { HttpClientModule,HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-newdeal',
  templateUrl: './newdeal.component.html',
  styleUrls: ['./newdeal.component.scss']
})
export class NewdealComponent implements OnInit {


  dataSource: any;
  displayedColumns = [];
  
  constructor(private http:HttpClient) { }

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

  getData(rData){
    return this.http.post('http://13.126.189.69:80/dev-api/BP', JSON.stringify(rData), {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
   }

}
