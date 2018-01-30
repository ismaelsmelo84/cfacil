/* Recursos nativos e de terceiros */
import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS } from '@angular/common/http'

/* Recursos de campos */
import { InputComponent } from './input/input.component'
import { RadioComponent } from './radio/radio.component'
import { RatingComponent } from './rating/rating.component'

/* Recursos de mensagem */
import { SnackbarComponent } from './messages/snackbar/snackbar.component'
import { NotificationService } from './messages/notification.service'

/* Recursos de segurança */
import { LoginService } from '../_security/login/login.service'
import { LoggedInGuard } from '../_security/loggedin.guard'
import { AuthInterceptor } from '../_security/auth.interceptor'

/* Serviços */
import { OrdersService } from '../_services/orders/orders.service';
import { PagseguroService } from '../_services/pagseguro/pagseguro.service';
import { ParametersService } from '../_services/parameters/parameters.service';
import { ProductsService } from '../_services/products/products.service';
import { UsersService } from '../_services/users/users.service';

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent ],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
  exports: [ InputComponent, RadioComponent, SnackbarComponent, RatingComponent, 
             CommonModule, FormsModule, ReactiveFormsModule ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ NotificationService,
                   LoginService,
                   LoggedInGuard,
                   OrdersService,
                   PagseguroService,
                   ParametersService,
                   ProductsService,
                   UsersService,
                   {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
    }
  }
}
