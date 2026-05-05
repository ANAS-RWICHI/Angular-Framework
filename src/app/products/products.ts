import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [NgForOf],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products :Array<any>
  constructor() {
    this.products = []
  }
  ngOnInit() {
    this.products = [
      { id: 1, name: 'Computer', price: 100, selected: true },
      { id: 2, name: 'Printer', price: 200, selected: false },
      { id: 3, name: 'Phone', price: 300, selected: true },
    ];
  }

  handelDelete(id: number) {
    let confirmation = confirm('Are you sure you want to delete this product?');
    if (confirmation) {
      this.products = this.products.filter((item) => item.id !== id);
    }

  }
}
