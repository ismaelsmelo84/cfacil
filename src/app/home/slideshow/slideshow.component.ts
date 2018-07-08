import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Slide } from './slideshow.model';

@Component({
  selector: 'app-home-slideshow',
  templateUrl: 'slideshow.component.html',
  styles: []
})

export class SlideshowComponent implements OnInit {
  slide1: Slide;
  slide2: Slide;
  slide3: Slide;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.getSlides('/slides').subscribe(
      data => {
        this.slide1 = data[0];
        this.slide2 = data[1];
        this.slide3 = data[2];
      },
        error => {
        console.error('Erro na captura de dados do serviço de Slides!');
        return Observable.throw(error);
      });
  }

  getSlides(listPath): Observable<Slide[]> {
    return this.db.list(listPath).valueChanges();
  }
}
