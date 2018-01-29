import { Injectable } from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {configAPI} from '../config_api'

@Injectable()
export class UsersService {

  login: string
  password: string

  constructor() {

  }

  //Validar usuário
  public getUserValidator(login, password){

  }
}
