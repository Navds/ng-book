import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <div *ngFor(let product in products) class="inventory-app">
  //     <h1>{{ product.name }}</h1>
  //     <span>{{ product.sku }}</span>
  //   </div>
  // `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Array<Product>;

  constructor() {
    this.products = [
      new Product (
        'MYSHOES',
        'Black Running shoes',
        '/resources/images/products/black-shoes.jpg',
        ['Men', 'Accessories', 'Running Shoes'],
        109.99
      ),
      new Product (
        'NEATOJACKET',
        'Blue Jacket',
        '/resources/images/products/blue-jacket.jpg',
        ['Men', 'Accessories', 'Jackets & Vests'],
        328.99
      ),
      new Product (
        'NICEHAT',
        'A Nice Black Hat',
        '/resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      ),

    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
