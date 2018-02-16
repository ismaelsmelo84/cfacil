import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { URL_API } from '../config_api';
import { GeneralParameters, ShippingParameters, Promocao, Frase } from './parameters.model';

@Injectable()
export class ParametersService {

  generalParameters: GeneralParameters;
  shippingParameters: ShippingParameters;
  promocao: Promocao;
  frase: Frase;

  constructor() {

  }

  // Consultar Parâmetros Gerais
  public searchGeneralParameters() {

  }

  // Consultar Parâmetros de Frete
  public searchShippingParameters() {

  }
}
