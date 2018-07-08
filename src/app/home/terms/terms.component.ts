import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home-terms',
  templateUrl: 'terms.component.html'
})

export class TermsComponent implements OnInit {

 termosEsq: Observable<any[]>;
 termosDir: Observable<any[]>;

 constructor(private db: AngularFireDatabase) { }

  ngOnInit() {

    this.termosEsq = this.getEsquerda('/termosEsq');
    this.termosDir = this.getDireita('/termosDir');
  }

  getEsquerda(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getDireita(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}
