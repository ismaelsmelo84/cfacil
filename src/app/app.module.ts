/* Recursos nativos e de terceiros */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

/* Recursos da raíz do APP */
import { AppComponent } from './app.component';
import { ROUTES } from './app.routing';

/* Recursos customizados */
import { HomeModule } from './home/home.module';
import { OrdersModule } from './orders/orders.module';
import { ThanksModule } from './thanks/thanks.module';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { NotFoundComponent } from './_not-found/not-found.component';

/* Serviços */
import { OrdersService } from './_services/orders/orders.service';
import { PagseguroService } from './_services/pagseguro/pagseguro.service';
import { ParametersService } from './_services/parameters/parameters.service';
import { ProductsService } from './_services/products/products.service';
import { UsersService } from './_services/users/users.service';

/* Declarações do módulo */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}), 
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
