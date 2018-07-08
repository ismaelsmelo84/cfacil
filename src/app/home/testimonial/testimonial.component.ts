import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Frase } from './testimonial.model';

@Component({
  selector: 'app-home-testimonial',
  templateUrl: 'testimonial.component.html'
})

export class TestimonialComponent implements OnInit {
  frases: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {

    this.frases = this.getFrases('/frases');
  }

  getFrases(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}


