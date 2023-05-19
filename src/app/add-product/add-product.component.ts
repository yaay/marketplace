import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(private fb :FormBuilder) {

    // this.productForm = new FormGroup({
    //   productName: new FormControl('iPhone', [Validators.required, Validators.min(3)]),
    //   description: new FormControl(null, [Validators.required, Validators.min(10)])
    // })

    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.min(10)]]
    })
  }

  submitForm(){
    console.log(this.productForm)
  }

}

