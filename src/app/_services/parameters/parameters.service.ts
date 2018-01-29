import { Injectable } from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {configAPI} from '../config_api'

@Injectable()
export class ParametersService {

  constructor() {

  }

  //Consultar Parâmetros Gerais
  public searchGeneralParameters(){

  }

  //Consultar Parâmetros de Frete
  public searchShippingParameters(){

  }
}
