import { Component } from '@angular/core';
import { ordersList } from '../data';

@Component({
  selector: 'app-home-search-results',
  templateUrl: 'search-results.component.html'
})

export class SearchResultsComponent {

 ordersList: any;

 constructor() {
   Object.assign(this, {
     ordersList
   });
 }
}
