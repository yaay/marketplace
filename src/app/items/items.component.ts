import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Input() itemProd !: Product
  @Output() sendtItemId = new EventEmitter();

  constructor(private router: Router){}

  redirectToDetails(id: number) {
    console.log(id)
    this.router.navigate(['item-details', id])
  }
}
