import { Component } from '@angular/core';
import { news } from '../data';

@Component({
  selector: 'app-home-news',
  templateUrl: 'news.component.html'
})

export class NewsComponent {

  news: any;

  constructor() {
    Object.assign(this, {
      news
    });
  }
}
