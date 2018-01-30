// Recursos nativos e de terceiros
import { Routes } from '@angular/router';

// Recursos customizados
import { HomeComponent } from './home/home.component';
import { ThanksComponent } from './thanks/thanks.component';
import { OrdersComponent } from './orders/orders.component';
import { NotFoundComponent } from './_not-found/not-found.component';

/* Tabela de Rotas do APP (PRINCIPAL) */
export const ROUTES: Routes = [
  { path: '', component: HomeComponent, data: { context: 'home' } },
  { path: 'obrigado', component: ThanksComponent, data: { context: '-' } },
  { path: 'pedidos',  component: OrdersComponent, data: { context: 'orders' } },
  { path: '**', component: NotFoundComponent, data: { context: '-' } }];
