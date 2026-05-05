import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products: any;

  constructor(private productService :Product) {
  }
  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts() {
   this.productService.getAllProducts().subscribe({
     next : response => {
       this.products = response;
     },
     error: error => {
       console.log(error);
     }
   })
  }

  handelDelete(id: number) {
    let confirmation = confirm('Are you sure you want to delete this product?');
    if (confirmation) {
      this.productService.deleteProduct(id).subscribe({
        next: response => {this.getAllProducts()},
        error : error => {
          console.log(error);
        }
      })
    }
  }
}
