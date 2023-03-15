import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  itemName = '';
  itemEmail = '';
  itemPhone = '';
  itemMessage = '';
  itemCity='';
  itemPostCode='';
  contactForm: FormGroup;
  contactFormEmail = new FormControl('', [Validators.required, Validators.email]);
  contactFormPhone = new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]);
  contactFormName = new FormControl('', [Validators.required]);
  contactFormCity= new FormControl('', [Validators.required]);
  contactFormPostCode= new FormControl('', [Validators.required]);

  constructor(private fb: FormBuilder) {
    this.contactForm = fb.group({
    contactFormName: ['', Validators.required],
    contactFormEmail: ['', [Validators.required, Validators.email]],
    contactFormPhone: ['', [Validators.required, Validators.pattern('[- +()0-9]+')]],
    contactFormCity: ['', Validators.required],
    contactFormPostCode: ['', Validators.required]
      }); }

  ngOnInit(): void {
  }

  onSubmit()  {

    alert('Thank you for contacting us! We will reply you within 48 hours')
    // tslint:disable-next-line: align

 }
 clearForm() {
  this.contactForm.reset();
}

}
