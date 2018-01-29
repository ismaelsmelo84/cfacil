import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';

import { OrdersRoutingModule } from './orders.routing';
import { OrdersComponent } from './orders.component';

@NgModule({
  imports: [
             BrowserModule,
             FormsModule,
             CommonModule,
             HttpClientModule,
             OrdersRoutingModule
  ],
  declarations: [
             OrdersComponent
  ],
  exports: [
             OrdersComponent
  ]
})

export class OrdersModule { }
