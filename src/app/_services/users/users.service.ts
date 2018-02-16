import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { URL_API } from '../config_api';
import { User } from './users.model';

@Injectable()
export class UsersService {

  user: User;

  constructor() {

  }

  // Validar usuário
  public getUserValidator( login, password ) {

  }
}
