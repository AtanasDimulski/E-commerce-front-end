import { Component, OnInit } from '@angular/core';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  faHeart=faHeart;
  constructor() { }

  ngOnInit(): void {
  }
  categories= [
    { name:'Liquid Gold', description: 'парфюми', url: '../../assets/prod.jpg', category: 'perfumes', price:  42.00},
    {name: 'Liquid Gold', description: 'парфюми', url: '../../assets/prod.jpg', category: 'perfumes', price:  42.00},
    { name:'Liquid Gold', description: 'парфюми', url: '../../assets/prod.jpg', category: 'perfumes', price:  42.00},
    {name: 'Liquid Gold', description: 'парфюми', url: '../../assets/prod.jpg', category: 'perfumes', price:  42.00}


 ]
}
