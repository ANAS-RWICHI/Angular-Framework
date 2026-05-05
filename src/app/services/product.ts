import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Product {
  products = [
    { id: 1, name: 'Computer', price: 100, selected: true },
    { id: 2, name: 'Printer', price: 200, selected: false },
    { id: 3, name: 'Phone', price: 300, selected: true },
  ];
  constructor() {}

  getAllProducts() {
    return this.products;
  }
  deleteProduct(id: number) {
    this.products = this.products.filter((item) => item.id !== id);
  }
}
