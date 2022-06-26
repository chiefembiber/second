import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
//import { Http } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { MatFormFieldModule } from '@angular/material/form-field';

export interface User {
  user: string;
  password: string;
}


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
  }

  //user$: Observable<User>;

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private httpClient: HttpClient,
    private userService: UserService,
   
  ) {
  }

  onSubmit() {
    this.userService.fetchUser(this.form.value).subscribe();
       

  }
 

    /*
   



  formControlName: any;
    http: any;
  err: any;
  

  

  

  
  form: any;
  submitted = false;
  constructor(private fb: FormBuilder) {


    this.form = fb.group({
      "Name": ['', Validators.required],
      "Email": ['', Validators.required],
      "Subject": ['', Validators.required],
      "Message": ['', Validators.required]
    })
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);

    

  }
  */
   
 
}
