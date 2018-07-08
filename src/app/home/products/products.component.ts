import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  galeria1: any;
  galeria2: any;
  galeria3: any;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.getGalerias('/galerias').subscribe(
      data => {
        this.galeria1 = data[0];
        this.galeria2 = data[1];
        this.galeria3 = data[2];
      },
        error => {
        console.error('Erro na captura de dados do serviço de Slides!');
        return Observable.throw(error);
      });
  }

  getGalerias(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}


