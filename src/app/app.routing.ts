// Recursos nativos e de terceiros
import { Routes } from '@angular/router';

// Recursos customizados
import { HomeComponent } from './home/home.component';
import { ThanksComponent } from './thanks/thanks.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './_security/login/login.component'
import { LoggedInGuard } from './_security/loggedin.guard'

/* Tabela de Rotas do APP (PRINCIPAL) */
export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login/:to', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'obrigado', loadChildren: './thanks/thanks.module#ThanksModule' },
  { path: 'pedidos',  loadChildren: './orders/orders.module#OrderModule',
      canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
  { path: '**', redirectTo: '/' }];
