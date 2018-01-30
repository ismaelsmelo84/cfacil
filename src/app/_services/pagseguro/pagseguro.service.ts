import { Injectable } from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {URL_API} from '../config_api'

@Injectable()
export class PagseguroService {

  //PagSeguro
  tokenApiPagSeguro = 'A28A32CA37EF45A68551827A7414085F'
  urlCheckout = 'https://ws.sandbox.pagseguro.uol.com.br/v2/checkout'
  urlPagamento = 'https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code='

  constructor() {

  }

  public getToken(): string {
    return this.tokenApiPagSeguro
  }

  public getUrlCheckout(): string {
    return this.urlCheckout
  }

  public getUrlPagSeguro(): string {
    return this.urlPagamento
  }

  //Consultar retorno PagSeguro
  public searchPagSeguroReturn(){

  }

  //Consultar dados adicionais do PagSeguro
  public searchPagSeguroMore(){

  }
}


  /*Método POST
  Producao = 'https://ws.pagseguro.uol.com.br/v2/checkout'
  Sandbox = 'https://ws.sandbox.pagseguro.uol.com.br/v2/checkout'

  Método GET
  Producao = 'https://pagseguro.uol.com.br/v2/checkout/payment.html?code='
  Sandbox = 'https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code='
  */
