import { Injectable } from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {configAPI} from '../config_api'

@Injectable()
export class OrdersService {

  no_email: string

  constructor(tpService, no_email) {

  }

  //Enviar e-mail
  public sendEmail(no_email){

  }

  //Cadastrar e-mail na base de news
  public subscribeNews(no_email){

  }

  //Validar se e-mail possui pedidos cadastrados
  public emailValidadorOrder(no_email): boolean {

    return true
  }

  //Validar se e-mail já consta na base de News
  public emailValidatorNews(no_email): boolean {

    return true
  }
}
