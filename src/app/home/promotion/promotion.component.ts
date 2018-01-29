import { Component } from '@angular/core';
import { promocao } from '../data';

@Component({
  selector: 'app-home-promotion',
  templateUrl: 'promotion.component.html'
})

export class PromotionComponent {
  promocao: any;

  constructor() {
    Object.assign(this, {
      promocao
    });
  }
}
