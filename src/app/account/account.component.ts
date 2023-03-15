import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { element } from 'protractor';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  itemName = '';
  itemEmail = '';
  itemCompany= '';
  itemPhone = '';
  itemCity = '';
  itemMessage = '';
  itemPostCode = '';
  differentAddresCheckBoxValue = false;
  companyCheckBoxValue= false;
  loginForm: FormGroup;
  contactForm: FormGroup;
  loginFormEmail = new FormControl('', [Validators.required, Validators.email]);
  loginFormName = new FormControl('', [Validators.required]);
  contactFormName = new FormControl('', [Validators.required]);
  contactFormEmail= new FormControl('', [Validators.required, Validators.email]);
  contactFormPhone = new FormControl('', [Validators.required]);
  contactFormCity = new FormControl('', [Validators.required]);
  contactFormMessage = new FormControl('', [Validators.required]);
  panelOpenState = false;

  constructor(private fb: FormBuilder, private cf: FormBuilder,private router: Router) {
    this.loginForm = fb.group({
      loginFormName: ['', Validators.required],
      loginFormEmail: ['', [Validators.required, Validators.email]],
        });
        this.contactForm = cf.group({
          contactFormName: ['', Validators.required],
          contactFormEmail: ['', [Validators.required, Validators.email]],
          contactFormPhone: ['', Validators.required],
          contactFormCity: ['', Validators.required],
          contactFormMessage: ['', Validators.required],
            });
      }

  ngOnInit(): void {
  }
  createForm() {
    this.loginForm = this.fb.group({
       name: ['', Validators.required ]
    });
  }
  onSubmit()  {

    alert('Thank you for contacting us! We will reply you within 48 hours')
    // tslint:disable-next-line: align

 }
 logout(){
   localStorage.clear();
   this.router.navigate(['/home']);
 }
 clearForm() {
  this.loginForm.reset();
}
showDifferentAddress(){
  this.differentAddresCheckBoxValue =! this.differentAddresCheckBoxValue;
}
showCompanyDetails(){
  this.companyCheckBoxValue =! this.companyCheckBoxValue;
}
}
