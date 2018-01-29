import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//APP Root
import { AppComponent } from './app.component';

//Modules
import { HomeModule } from './home/home.module';
import { OrdersModule } from './orders/orders.module';
import { ThanksModule } from './thanks/thanks.module';

//Componentes
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';

//Routing
import { AppRoutingModule } from './app.routing';

//Services
import { OrdersService } from './_services/orders/orders.service';
import { PagseguroService } from './_services/pagseguro/pagseguro.service';
import { ParametersService } from './_services/parameters/parameters.service';
import { ProductsService } from './_services/products/products.service';
import { UsersService } from './_services/users/users.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    OrdersModule,
    ThanksModule
  ],
  providers: [
    OrdersService,
    PagseguroService,
    ParametersService,
    ProductsService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
