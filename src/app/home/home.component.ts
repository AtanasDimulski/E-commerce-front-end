import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'ngx-useful-swiper';
import { SwiperOptions } from 'swiper';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faHeart as farHeart} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faHeart=faHeart;
  farHeart=farHeart;
  constructor() { }
  ngOnInit(): void {
  }
  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 10,
    loop:true,
    breakpoints: {
    420:{
        slidesPerView: 8,
      },
      2000:{
        slidesPerView: 4,
        spaceBetween: 10,
      }
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
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
    }

  };

  config3: SwiperOptions = {
    loop:true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },

  };
  public goToProject(a:number){
    console.log(a);
  }
}
