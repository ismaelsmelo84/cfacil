import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home-promotion',
  templateUrl: 'promotion.component.html'
})

export class PromotionComponent implements OnInit {
  promocao: any;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.getPromocao('/promocao').subscribe(
      data => {
        this.promocao = data[0];
      },
        error => {
        console.error('Erro na captura de dados do serviço de Slides!');
        return Observable.throw(error);
      });
  }

  getPromocao(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}
