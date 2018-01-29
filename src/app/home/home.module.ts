import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home.routing';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
﻿import { OrderComponent } from './order/order.component';
﻿import { ContactComponent } from './contact/contact.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { NewsComponent } from './news/news.component';
import { ProductsComponent } from './products/products.component';
import { PromotionComponent } from './promotion/promotion.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { TermsComponent } from './terms/terms.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SearchOrderComponent } from './search-order/search-order.component';
import { SearchResultsComponent } from './search-results/search-results.component';

import { ControlMessagesComponent } from '../_components/validator/control-messages.component';

import { ValidationService } from '../_components/validator/validation.service';

//Services
import { OrdersService } from '../_services/orders/orders.service';
import { PagseguroService } from '../_services/pagseguro/pagseguro.service';
import { ParametersService } from '../_services/parameters/parameters.service';
import { ProductsService } from '../_services/products/products.service';
import { UsersService } from '../_services/users/users.service';

@NgModule({
  imports: [
             BrowserModule,
             FormsModule, ReactiveFormsModule,
             CommonModule,
             HttpClientModule,
             HomeRoutingModule
  ],
  declarations: [
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
             ControlMessagesComponent
  ],
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
             SearchResultsComponent
  ],
  providers: [
             ValidationService,
             OrdersService,
             PagseguroService,
             ParametersService,
             ProductsService,
             UsersService
  ]
})

export class HomeModule { }
