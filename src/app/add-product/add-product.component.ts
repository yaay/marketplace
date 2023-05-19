import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  movieForm: FormGroup;

  constructor() {
    this.movieForm = new FormGroup({
      productName: new FormControl(null, [Validators.required, Validators.min(3)]),
      description: new FormControl(null, [Validators.required, Validators.min(10)])
    })
  }

}
