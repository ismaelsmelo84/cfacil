import { Component } from '@angular/core';
import { slides } from '../data';

@Component({
  selector: 'app-home-slideshow',
  templateUrl: 'slideshow.component.html'
})

export class SlideshowComponent {

  slides: any;

  constructor() {
    Object.assign(this, {
      slides
    });
  }
}
