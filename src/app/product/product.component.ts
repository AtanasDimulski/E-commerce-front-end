import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from 'ngx-useful-swiper';
import { SwiperOptions } from 'swiper';
import {FormControl, Validators, FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  itemName = '';
  itemMessage = '';
  loginForm: FormGroup;
  loginFormMessage = new FormControl('', [Validators.required]);
  loginFormName = new FormControl('', [Validators.required]);
  panelOpenState = false;
  faCheck=faCheck;
  faStar=faStar;
  faPlus=faPlus;
  faMinus=faMinus;
  faTimes=faTimes;
  faHeart=faHeart;
  popUpDisplay = false;
  popUpNotLoggedDisplay = false;
  reviewContainerOpen= false;
  firstStarClicked = false;
  secondStarClicked = false;
  thirdStarClicked = false;
  fourthStarClicked = false;
  fifthStarClicked = false;
  price:string;
  count=1;
  ratingValue = 1;
  lessThanZero = true;
  quantity=[
    1,2,3,4,5
  ]
  sizes: Size[] = [
    {value: '200', viewValue: '200мл',fakeprice: '500лв',price:'200лв' },
    {value: '300', viewValue: '300мл',fakeprice: '500лв',price:'200лв' },
    {value: '200', viewValue: '200мл',fakeprice: '500лв',price:'200лв' },
    {value: '200', viewValue: '200мл',fakeprice: '500лв',price:'200лв' },
    {value: '500', viewValue: '500мл',fakeprice: '500лв',price:'200лв' }
  ];

  constructor(private fb: FormBuilder, private cf: FormBuilder) {
    this.loginForm = fb.group({
      loginFormName: ['', Validators.required],
      loginFormMessage: ['', [Validators.required, Validators.email]],
        });
      }

  ngOnInit(): void {
    this.price = "Изберете размер/цена";
  }
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    loop:true,
    grabCursor: true,
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

  config1: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 0,
    loop:true,
    breakpoints: {
      420:{
        slidesPerView: 4,
      },
      2000:{
        slidesPerView: 2,
        spaceBetween: 0,
      }
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },

  };

  toggle = true;

choose() {
    this.toggle = !this.toggle;
}
change(data){
  console.log(this.sizes[data].viewValue);
  this.price = this.sizes[data].viewValue;
}
increaseCount(){
  this.count = this.count+1;
  if(this.count >= 1){
    this.lessThanZero = false;
  }
}
decreaseCount(){
  this.count = this.count-1;
  if(this.count <= 1){
    this.lessThanZero = true;
  }
}
showPopUp(){
  this.popUpDisplay =! this.popUpDisplay;
}
showPopUpNotLogged(){
  this.popUpNotLoggedDisplay =! this.popUpNotLoggedDisplay;
}
showReviewContainer(){
  this.reviewContainerOpen =! this.reviewContainerOpen;
}
clickFirstStar(){
  this.firstStarClicked = true;
  this.secondStarClicked = false;
  this.thirdStarClicked = false;
  this.fourthStarClicked = false;
  this.fifthStarClicked = false;
  this.ratingValue = 1;
}
clickSecondStar(){
  this.firstStarClicked =true;
  this.secondStarClicked = true;
  this.thirdStarClicked = false;
  this.fourthStarClicked = false;
  this.fifthStarClicked = false;
  this.ratingValue = 2;
}
clickThirdStar(){
  this.firstStarClicked =true;
  this.secondStarClicked = true;
  this.thirdStarClicked = true;
  this.fourthStarClicked = false;
  this.fifthStarClicked = false;
  this.ratingValue = 3;
}
clickFourthStar(){
  this.firstStarClicked =true;
  this.secondStarClicked = true;
  this.thirdStarClicked = true;
  this.fourthStarClicked = true;
  this.fifthStarClicked = false;
  this.ratingValue = 4;
}
clickFifthStar(){
  this.firstStarClicked =true;
  this.secondStarClicked = true;
  this.thirdStarClicked = true;
  this.fourthStarClicked = true;
  this.fifthStarClicked = true;
  this.ratingValue = 5;
}
onSubmit()  {

  alert('Thank you for contacting us! We will reply you within 48 hours')
  // tslint:disable-next-line: align

}
clearForm() {
this.loginForm.reset();
}
public goToProject(a:number){
  console.log(a);
}
users =[
  {name: "hasan", reviewCountStars: 5, reviewText: "mnogo priqten aromat preporuchvan go silno na vsichki koito tursqt aromat koito e traen i silen"},
  {name: "hasan", reviewCountStars: 2,  reviewText: "mnogo priqten aromat preporuchvan go silno na vsichki koito tursqt aromat koito e traen i silen"},
  {name: "hasan", reviewCountStars: 3,  reviewText: "mnogo priqten aromat preporuchvan go silno na vsichki koito tursqt aromat koito e traen i silen"},
]

}
interface Size {
  value: string;
  viewValue: string;
  fakeprice:string;
  price:string;
}
interface Comment{
  rate: string;
  viewValue: string;
  fakeprice:string;
  price:string;
}
