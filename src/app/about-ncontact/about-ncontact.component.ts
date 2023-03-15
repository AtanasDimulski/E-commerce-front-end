import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from 'ngx-useful-swiper';
import { SwiperOptions } from 'swiper';
import {FormControl, Validators, FormBuilder, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-about-ncontact',
  templateUrl: './about-ncontact.component.html',
  styleUrls: ['./about-ncontact.component.css']
})
export class AboutNContactComponent implements OnInit {
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
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    spaceBetween: 30
  };

  onSubmit()  {

      alert('Thank you for contacting us! We will reply you within 48 hours')
      // tslint:disable-next-line: align

   }
   clearForm() {
    this.contactForm.reset();
  }
}
