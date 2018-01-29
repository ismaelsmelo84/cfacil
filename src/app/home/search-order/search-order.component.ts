import { Component } from '@angular/core';
import { searchOrder } from '../data';

@Component({
  selector: 'app-home-search-order',
  templateUrl: 'search-order.component.html'
})

export class SearchOrderComponent {

  searchOrder: any;

  constructor() {
    Object.assign(this, {
      searchOrder
    });
  }
}
