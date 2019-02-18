import { 
  Component, 
  OnInit,
  Input,
  Output,
  HostBinding,
} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {

  /**
   * @input product - The `Product` to display
   */
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() { }

  ngOnInit() {
  }

}
