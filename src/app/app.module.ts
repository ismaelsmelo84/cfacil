/* Recursos nativos e de terceiros */
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

/* Recursos da raíz do APP */
import { AppComponent } from './app.component';
import { ApplicationErrorHandler } from './app.error-handler';

import { ROUTES } from './app.routing';

/* Recursos customizados */
import { HomeModule } from './home/home.module';
import { OrdersModule } from './orders/orders.module';
import { ThanksModule } from './thanks/thanks.module';
import { RetornoModule } from './retorno-pagamento/retorno-pagamento.module';

import { SharedModule } from './_shared/shared.module';
import { LoginComponent } from './_security/login/login.component';

/* Recursos do Firebase*/
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

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
    HomeModule,
    OrdersModule,
    ThanksModule,
    RetornoModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot( ROUTES, { preloadingStrategy: PreloadAllModules } )
  ],
  exports: [ RouterModule ],
  providers: [ { provide: ErrorHandler, useClass: ApplicationErrorHandler }, { provide: LOCALE_ID, useValue: 'pt-BR' } ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
