import { Component } from '@angular/core';
import { termosEsq, termosDir } from '../data';

@Component({
  selector: 'app-home-terms',
  templateUrl: 'terms.component.html'
})

export class TermsComponent {

 termosEsq: any;
 termosDir: any;

 constructor() {
   Object.assign(this, {
     termosEsq, termosDir
   });
 }
}
