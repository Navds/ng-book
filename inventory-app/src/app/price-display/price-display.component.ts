import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'price-display',
  template: `
  <div class="price-display">\${{ price }}</div>
  `,
  // templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.scss']
})
export class PriceDisplayComponent implements OnInit {
  @Input() price : number;

  constructor() { }

  ngOnInit() {
  }

}
