import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-image',
  template: '<img class="product-image" [src]="product.imageUrl">',
  // templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent implements OnInit {
  @Input() product : Product;
  @HostBinding('attr.class') cssClass = 'ui small image';

  constructor() { }

  ngOnInit() {
  }

}
