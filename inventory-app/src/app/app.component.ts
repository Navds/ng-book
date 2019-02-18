import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Array<Product>;

  constructor() {
    this.products = [
      new Product (
        'MYSHOES',
        'Black Running shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Accessories', 'Running Shoes'],
        109.99
      ),
      new Product (
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Men', 'Accessories', 'Jackets & Vests'],
        328.99
      ),
      new Product (
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      ),

    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
