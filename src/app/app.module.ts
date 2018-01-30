/* Recursos nativos e de terceiros */
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common'

/* Recursos da raíz do APP */
import { AppComponent } from './app.component';
import { ApplicationErrorHandler } from './app.error-handler'
import { ROUTES } from './app.routing';

/* Recursos customizados */
import { HomeModule } from './home/home.module';
import { OrdersModule } from './orders/orders.module';
import { ThanksModule } from './thanks/thanks.module';
import { LoginComponent } from './_security/login/login.component';
import { SharedModule} from './_shared/shared.module';

/* Declarações do módulo */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    HomeModule,
    OrdersModule,
    ThanksModule
  ],
  providers: [

    {provide: ErrorHandler, useClass: ApplicationErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
