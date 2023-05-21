import { Component } from '@angular/core';
import { CartService } from '../services/cart.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  counter: number = 0;
  constructor(private cartService:CartService){}

  ngOnInit(){
    this.cartService.counterVal.subscribe((res) => this.counter = res)
  };


}