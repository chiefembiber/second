import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
//import { Http } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
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
  

  /*
  register() {
   

    this.loading = true;
    this.buttonText = "Sending...";
    let user = {
      Name: this.formControlName.value,
      Email: this.formControlName.value
    }




    this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      data => {
        let res: any = data;
        console.log(
          '${user.name} is successfully registered.');
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttonText = "Send";
      }, () => {
        this.loading = false;
        this.buttonText = "Send";
      }
    );


  }
  */
  













}
