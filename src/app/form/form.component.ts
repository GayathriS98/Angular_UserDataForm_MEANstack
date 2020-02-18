import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  UserForms;

  constructor(private http:HttpClient) {
    this.UserForms=new FormGroup({
      'firstname':new FormControl('',Validators.required),
       'lastname':new FormControl('',Validators.required),
       'email':new FormControl('',[Validators.required,Validators.email]),
       'gender':new FormControl('',Validators.required),
       'address1':new FormControl('',Validators.required),
       'address2':new FormControl('',Validators.required),
       'city':new FormControl('',Validators.required),
       'state':new FormControl('',Validators.required),
       'pin':new FormControl('',Validators.required)
     })
   };
   SubmitData(){
     console.log(this.UserForms.value);
    this.http.post("http://localhost:2000/userDetails",this.UserForms.value)
    .subscribe(
      (data:any)=>{
        console.log(data);
      }
    )
  }

  ngOnInit(): void {
  }

}
