import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { URL_API } from '../config_api'
import { ProdutoPrincipal, ProdutoBlackout, ProdutoSupport } from './products.model'

@Injectable()
export class ProductsService {

  produtoPrincipal: ProdutoPrincipal
  produtoBlackout: ProdutoBlackout
  produtoSupport: ProdutoSupport

  constructor() {

  }

  //Consutar produtos "Tecido de Cortina Principal"
  public searchTpPrincipal(){

  }

  public getTpPrincipal(id: number){

  }

  //Consutar produtos "Tecido de Blackout"
  public searchTpBlackout(){

  }

  public getTpBlackout(id: number){

  }

  //Consutar produtos "Suporte"
  public searchTpSupport(){

  }

  public getTpSupport(id: number){

  }
}
