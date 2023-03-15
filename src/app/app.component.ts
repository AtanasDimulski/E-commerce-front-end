import { Component, HostListener } from '@angular/core';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faBars, faTshirt} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hiddenMenuDesktop =false;
  hiddenMenuDesktopGrim = false;
  hiddenMenuDesktopHair = false;
  hiddenMenuDesktopFace =false;
  hiddenMenuDesktopBody=false;
  hiddenMenuDesktopMen=false;
  hiddenMenuDesktopOther = false;
  hiddenMenuDesktopPromo=false;
  title = 'GrimoFrontEnd';
  panelOpenState = false;
  faChevronLeft=faChevronLeft;

  underrCategoryMenuClicked = false;
  underrCategoryMenuMakeUpClicked = false;
  underrCategoryMenuHairClicked = false;
  underrCategoryMenuFaceClicked = false;
  underrCategoryMenuBodyClicked = false;
  underrCategoryMenuMenClicked = false;
  underrCategoryMenuOtherClicked = false;
  underrCategoryMenuPromotionsClicked = false;

  showAdvertismentBanner = false;
  faHeart=faHeart;
  faBars=faBars;
  faUser=faUser;
  faShoppingBag=faShoppingBag;
  faSearch=faSearch;
  faTimes=faTimes;
  faFacebook=faFacebook;
  faInstagram=faInstagram;
  faAngleRight=faAngleRight;
  scroll:boolean=false;
  scrollmobile:boolean=false;
  doc = document.documentElement;
   w = window;
   prevScroll = this.w.scrollY || this.doc.scrollTop;
  ngOnInit(){
    window.addEventListener('scroll', this.scrolling, true)

  }
  scrolling=(s)=>{
    let curScroll = this.w.scrollY || this.doc.scrollTop;
    let sc = s.target.scrollingElement.scrollTop;
    if(sc >=50){
      this.showAdvertismentBanner = true;
    }
    if(sc <=50){
      this.showAdvertismentBanner = false;
    }
    if(sc >=400){
        if(curScroll>this.prevScroll)
        {
          this.scrollmobile=true;
          this.prevScroll=curScroll;
        }
        if(curScroll<this.prevScroll)
        {
          this.scrollmobile=false
          this.prevScroll=curScroll;
        }
    }
  }
  openHiddenMenuInnerCategories(){
    this.underrCategoryMenuClicked =! this.underrCategoryMenuClicked;
  }
  openHiddenMenuInnerCategoriesMakeUp(){
    this.underrCategoryMenuMakeUpClicked =! this.underrCategoryMenuMakeUpClicked;
  }
  openHiddenMenuInnerCategoriesHair(){
    this.underrCategoryMenuHairClicked =! this.underrCategoryMenuHairClicked;
  }
  openHiddenMenuInnerCategoriesFace(){
    this.underrCategoryMenuFaceClicked =! this.underrCategoryMenuFaceClicked;
  }
  openHiddenMenuInnerCategoriesBody(){
    this.underrCategoryMenuBodyClicked =! this.underrCategoryMenuBodyClicked;
  }
  openHiddenMenuInnerCategoriesMen(){
    this.underrCategoryMenuMenClicked =! this.underrCategoryMenuMenClicked;
  }
  openHiddenMenuInnerCategoriesOther(){
    this.underrCategoryMenuOtherClicked =! this.underrCategoryMenuOtherClicked;
  }
  openHiddenMenuInnerCategoriesPromotions(){
    this.underrCategoryMenuPromotionsClicked =! this.underrCategoryMenuPromotionsClicked;
  }

  /*HIDE MENU WHNE OTHER ELEMENT IS HOOVERED DESKTOP*/
  hiddeDesktopMenuHoover(){
    this.hiddenMenuDesktop = false;
    this.hiddenMenuDesktopGrim = false;
    this.hiddenMenuDesktopHair = false;
    this.hiddenMenuDesktopFace =false;
    this.hiddenMenuDesktopBody=false;
    this.hiddenMenuDesktopMen=false;
    this.hiddenMenuDesktopOther = false;
    this.hiddenMenuDesktopPromo=false;
  }
  /*PERFUME MENU FUCNTIONS DESKTOP*/
  /*DISPLAY ON HOOVER*/
 showHiddenDesktopMenuHoover(){
   this.hiddenMenuDesktop = true;
   this.hiddenMenuDesktopGrim = false;
   this.hiddenMenuDesktopHair = false;
   this.hiddenMenuDesktopFace =false;
   this.hiddenMenuDesktopBody=false;
   this.hiddenMenuDesktopMen=false;
   this.hiddenMenuDesktopOther = false;
   this.hiddenMenuDesktopPromo=false;
 }
 /*HIDE ON CLICK*/
  showHiddenDesktopMenu(){
    this.hiddenMenuDesktop =! this.hiddenMenuDesktop;
  }
  /*PROMOTION MENU FUCNTIONS DESKTOP*/
  /*DISPLAY ON HOOVER*/
  showHiddenDesktopMenuPromoHoover(){
    this.hiddenMenuDesktopGrim = false;
    this.hiddenMenuDesktop = false;
    this.hiddenMenuDesktopHair = false;
    this.hiddenMenuDesktopFace =false;
    this.hiddenMenuDesktopBody=false;
    this.hiddenMenuDesktopMen=false;
    this.hiddenMenuDesktopOther = false;
    this.hiddenMenuDesktopPromo=true;
  }
   /*HIDE ON CLICK*/
   showHiddenDesktopMenuPromo(){
    this.hiddenMenuDesktopPromo =! this.hiddenMenuDesktopPromo;
  }
  /*MAKE UP MENU FUCNTIONS DESKTOP*/
  /*DISPLAY ON HOOVER*/
  showHiddenDesktopMenuGrimHoover(){
    this.hiddenMenuDesktopGrim = true;
    this.hiddenMenuDesktop = false;
    this.hiddenMenuDesktopHair = false;
    this.hiddenMenuDesktopFace =false;
    this.hiddenMenuDesktopBody=false;
    this.hiddenMenuDesktopMen=false;
    this.hiddenMenuDesktopOther = false;
    this.hiddenMenuDesktopPromo=false;
  }
  /*HIDE ON CLICK*/
  showHiddenDesktopMenuGrim(){
    this.hiddenMenuDesktopGrim = false;
  }
  /*HAIR MENU FUCNTIONS DESKTOP*/
  /*DISPLAY ON HOOVER*/
  showHiddenDesktopMenuHairHoover(){
    this.hiddenMenuDesktopHair = true;
    this.hiddenMenuDesktop = false;
    this.hiddenMenuDesktopGrim = false;
    this.hiddenMenuDesktopFace =false;
    this.hiddenMenuDesktopBody=false;
    this.hiddenMenuDesktopMen=false;
    this.hiddenMenuDesktopOther = false;
    this.hiddenMenuDesktopPromo=false;
  }
  /*HIDE ON CLICK*/
  hiddeDesktopMenuHairHoover(){
    this.hiddenMenuDesktopHair = false;
  }
  /*FACE MENU FUCNTIONS DESKTOP*/
  showHiddenDesktopMenuFaceHoover(){
    this.hiddenMenuDesktopFace =true;
    this.hiddenMenuDesktop = false;
    this.hiddenMenuDesktopGrim = false;
    this.hiddenMenuDesktopHair = false;
    this.hiddenMenuDesktopBody=false;
    this.hiddenMenuDesktopMen=false;
    this.hiddenMenuDesktopOther = false;
    this.hiddenMenuDesktopPromo=false;
  }
  /*BODY MENU FUCNTIONS DESKTOP*/
  showHiddenDesktopMenuBodyHoover(){
    this.hiddenMenuDesktopBody=true;
    this.hiddenMenuDesktop = false;
    this.hiddenMenuDesktopGrim = false;
    this.hiddenMenuDesktopHair = false;
    this.hiddenMenuDesktopFace=false;
    this.hiddenMenuDesktopMen=false;
    this.hiddenMenuDesktopOther = false;
    this.hiddenMenuDesktopPromo=false;
  }
  /*MEN MENU FUCNTIONS DESKTOP*/
  showHiddenDesktopMenuMenHoover(){
    this.hiddenMenuDesktopMen=true;
    this.hiddenMenuDesktop = false;
    this.hiddenMenuDesktopGrim = false;
    this.hiddenMenuDesktopHair = false;
    this.hiddenMenuDesktopFace=false;
    this.hiddenMenuDesktopBody=false;
    this.hiddenMenuDesktopOther = false;
    this.hiddenMenuDesktopPromo=false;
  }
  /*OTHER MENU FUCNTIONS DESKTOP*/
  /*DISPLAY ON HOOVER*/
  showHiddenDesktopMenuOtherHoover(){
    this.hiddenMenuDesktopOther=true;
    this.hiddenMenuDesktop = false;
    this.hiddenMenuDesktopGrim = false;
    this.hiddenMenuDesktopHair = false;
    this.hiddenMenuDesktopFace=false;
    this.hiddenMenuDesktopBody=false;
    this.hiddenMenuDesktopMen = false;
    this.hiddenMenuDesktopPromo=false;
  }
  
}
