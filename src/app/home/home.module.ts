/* Recursos nativos e de terceiros */
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/* Recursos customizados */
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { NewsComponent } from './news/news.component';
import { ProductsComponent } from './products/products.component';
import { PromotionComponent } from './promotion/promotion.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { TermsComponent } from './terms/terms.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SearchOrderComponent } from './search-order/search-order.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AppControlMessagesComponent } from '../_components/validator/app-control-messages.component';
import { ValidationService } from '../_components/validator/validation.service';

/*Recursos de cabeçalho e rodapé */
import { HeaderComponent } from '../_components/header/header.component';
import { FooterComponent } from '../_components/footer/footer.component';

/* Serviços */
import { OrdersService } from '../_services/orders/orders.service';
import { PagseguroService } from '../_services/pagseguro/pagseguro.service';
import { ParametersService } from '../_services/parameters/parameters.service';
import { ProductsService } from '../_services/products/products.service';
import { UsersService } from '../_services/users/users.service';

/* Tabela de Rotas do Módulo */
const ROUTES: Routes = [ { path: '', component: HomeComponent } ];

/* Declarações do Módulo */
@NgModule({
  imports: [
             BrowserModule,
             FormsModule, ReactiveFormsModule,
             CommonModule,
             HttpClientModule,
             RouterModule.forChild( ROUTES ) ],
  declarations: [
             HeaderComponent,
             FooterComponent,
             HomeComponent,
             TermsComponent,
             SlideshowComponent,
             AboutComponent,
             ProductsComponent,
             PromotionComponent,
             TestimonialComponent,
             NewsComponent,
             ContactComponent,
             OrderComponent,
             HighlightsComponent,
             SearchOrderComponent,
             SearchResultsComponent,
             AppControlMessagesComponent ],
  exports: [
             HomeComponent,
             TermsComponent,
             SlideshowComponent,
             AboutComponent,
             ProductsComponent,
             PromotionComponent,
             TestimonialComponent,
             NewsComponent,
             ContactComponent,
             OrderComponent,
             HighlightsComponent,
             SearchOrderComponent,
             SearchResultsComponent,
             RouterModule ],
  providers: [
             ValidationService,
             OrdersService,
             PagseguroService,
             ParametersService,
             ProductsService,
             UsersService ]
})

export class HomeModule { }
