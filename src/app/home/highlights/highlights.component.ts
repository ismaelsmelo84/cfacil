import { Component, OnInit } from '@angular/core';
import { destaques } from '../data';

@Component({
  selector: 'app-home-highlights',
  templateUrl: 'highlights.component.html'
})

export class HighlightsComponent {

destaques: any;

constructor() {
  Object.assign(this, {
    destaques
  });
  }
}
