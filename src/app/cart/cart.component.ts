import { Component, OnInit } from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faMinus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  faTimes=faTimes;
  faPlus=faPlus;
  faMinus=faMinus;
  count=1;
  lessThanZero = true;
  price=50;
  total=this.price;
  constructor() { }

  ngOnInit(): void {
  }
  increaseCount(){
    this.count = this.count+1;
    this.total = this.count*this.price;
    if(this.count >= 1){
      this.lessThanZero = false;
    }
  }
  decreaseCount(){
    this.count = this.count-1;
    this.total = this.count*this.price;
    if(this.count <= 1){
      this.lessThanZero = true;
    }
  }

  categories= [
    { name:'Liquid Gold', description: 'парфюми', url: '../../assets/prod.jpg', category: 'perfumes', price:  42.51},
    {name: 'Liquid Gold', description: 'парфюми', url: '../../assets/prod.jpg', category: 'perfumes', price:  150.59},


 ]
}
