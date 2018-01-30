import { CanLoad, CanActivate, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
//Para quando pretendemos injetar algo na classe
import { Injectable } from '@angular/core'
import { LoginService } from './login/login.service'

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

  constructor(private loginService: LoginService) {}

  checkAuthentication(path: string): boolean {
    const loggedIn = this.loginService.isLoggedIn()
    if(!loggedIn) {
      this.loginService.handleLogin(`/${path}`)
    }
    return loggedIn
  }

  canLoad(route: Route): boolean {
    return this.checkAuthentication(route.path)
  }

  //captura uma foto da rota (uma cópia) no momento que o método é chamado
  canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
    return this.checkAuthentication(activatedRoute.routeConfig.path)
  }
}
