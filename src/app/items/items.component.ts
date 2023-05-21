import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service'


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Input() itemProd !: Product
  @Output() sendtItemId = new EventEmitter();

  counter: number = 0;

  constructor(private router: Router, private cartService:CartService){}

  redirectToDetails(id: number) {
    this.router.navigate(['item-details', id])
  }

  ngOnInit(){
    this.cartService.counterVal.subscribe((res) => this.counter = res)
  };

  
  addToCart(){
    this.cartService.changeCounter(++this.counter)
    console.log(++this.counter)
  };


}
