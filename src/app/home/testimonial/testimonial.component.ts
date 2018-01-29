import { Component } from '@angular/core';
import { Frase } from './testimonial.model';
import { frases } from '../data';

@Component({
  selector: 'app-home-testimonial',
  templateUrl: 'testimonial.component.html'
})

export class TestimonialComponent {

 frases: Frase[];

 constructor() {
   Object.assign(this, {
     frases
   });
 }
}
