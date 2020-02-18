import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
result;
key:Array<any>=[];
  constructor(private http:HttpClient) { }
    ngOnInit(): void {
      this.http.get('http://localhost:2000/userDetails')
      .subscribe((res)=>{
        
        this.result=res;
        console.log(res,this.result);
      })
    }

}
