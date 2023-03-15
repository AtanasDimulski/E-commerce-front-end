import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-return-product',
  templateUrl: './return-product.component.html',
  styleUrls: ['./return-product.component.css']
})
export class ReturnProductComponent implements OnInit {

  itemName = '';
  itemEmail = '';
  itemPhone = '';
  itemMessage = '';
  itemOrderNumber='';
  contactForm: FormGroup;
  contactFormEmail = new FormControl('', [Validators.required, Validators.email]);
  contactFormPhone = new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]);
  contactFormName = new FormControl('', [Validators.required]);
  contactFormOrderNumber= new FormControl('', [Validators.required]);

  constructor(private fb: FormBuilder) {
    this.contactForm = fb.group({
    contactFormName: ['', Validators.required],
    contactFormEmail: ['', [Validators.required, Validators.email]],
    contactFormPhone: ['', [Validators.required, Validators.pattern('[- +()0-9]+')]],
    contactFormOrderNumber: ['', Validators.required],
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
