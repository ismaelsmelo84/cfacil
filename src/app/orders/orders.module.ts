/* Recursos nativos e de terceiros */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

/* Recursos customizados */
import { OrdersComponent } from './orders.component';

/* Tabela de Rotas do Módulo */
const ROUTES: Routes = [
  { path: 'pedidos', component: OrdersComponent }
];

/* Declaraçãoes do Módulo */
@NgModule({
  declarations: [ OrdersComponent ],
  imports: [
             BrowserModule,
             FormsModule,
             CommonModule,
             HttpClientModule,
             RouterModule.forChild( ROUTES )
  ],
  exports: [ OrdersComponent, RouterModule ]
})

export class OrdersModule {}
