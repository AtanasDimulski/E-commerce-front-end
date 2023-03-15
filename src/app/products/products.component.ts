import { Component, OnInit } from '@angular/core';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faHeart as farHeart} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  faHeart=faHeart;
  farHeart=farHeart;
  constructor() { }

  ngOnInit(): void {
  }
 categories= [
   { name:'Liquid Gold', description: 'парфюми', url: '../../assets/prod.jpg', category: 'perfumes', price:  42.51},
   {name: 'Liquid Gold', description: 'парфюми', url: '../../assets/prod.jpg', category: 'perfumes', price:  150.59},
   {name: 'Liquid Gold', description: 'парфюми', url: '../../assets/prod.jpg', category: 'perfumes', price:  150.59},
   {name: 'Liquid Gold', description: 'парфюми', url: '../../assets/prod.jpg', category: 'perfumes', price:  150.59},
   { name:'Liquid Gold', description: 'парфюми', url: '../../assets/prod.jpg', category: 'perfumes', price:  150.59},
   {name: 'Liquid Gold', description: 'парфюми', url: '../../assets/prod.jpg', category: 'perfumes', price:  150.59},
   {name: 'Liquid Gold', description: 'парфюми', url: '../../assets/prod.jpg', category: 'perfumes', price:  150.59},
   {name: 'Liquid Gold', description: 'парфюми', url: '../../assets/prod.jpg', category: 'perfumes', price:  42.00}

]
sorts=[

  {sort:'Цена (От ниска към висока)'},
  {sort:'Цена (От висока към ниска)'},
  {sort:'С намаление'},
  {sort:'Рейтинг (От нисък към висок)'},
  {sort:'Рейтинг (От висок към нисък)'}

]
}
