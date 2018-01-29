import { Injectable } from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {configAPI} from '../config_api'

@Injectable()
export class ProductsService {

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
