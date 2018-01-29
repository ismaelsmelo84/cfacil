import { Component } from '@angular/core';
import { galerias } from '../data';

@Component({
  selector: 'app-home-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

 galerias: any;

 constructor() {
   Object.assign(this, {
     galerias
   });
 }
}
