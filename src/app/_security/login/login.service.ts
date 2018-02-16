import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

import { URL_API } from '../../_services/config_api';
import { User } from './user.model';

@Injectable()
export class LoginService {

  // Guardar a propriedade do usuário localmente
  user: User;
  lastUrl: string;

  constructor( private http: HttpClient, private router: Router ) {
    this.router.events.filter( e => e instanceof NavigationEnd )
                      .subscribe( ( e: NavigationEnd ) => this.lastUrl = e.url );
  }

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  login( email: string, password: string ): Observable<User> {
    return this.http.post<User>( `${URL_API}/login`,
                                { email: email, password: password })
                    .do( user => this.user = user );
  }

  logout() {
    this.user = undefined;
  }

  handleLogin( path: string = this.lastUrl ) {
    // Ao tentar acessar uma página que necessita de login, o guard irá perceber e encaminhar para a página de login
    this.router.navigate( [ '/login', btoa( path ) ] );
  }

}
