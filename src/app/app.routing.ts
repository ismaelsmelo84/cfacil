import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Rota para "Home"
import { HomeComponent } from './home/home.component';

//Rota para "Retorno do Pagamento"
import { ThanksComponent } from './thanks/thanks.component';

//Rota para "Orders"
import { OrdersComponent } from './orders/orders.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'obrigado',
    loadChildren: './thanks/thanks.module#ThanksModule'
  }, {
    path: 'pedidos',
    loadChildren: './orders/orders.module#OrdersModule'
  }, {
    path: 'main',
    component: HomeComponent
  }, {
    path: '**',
    redirectTo: 'error/404'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
