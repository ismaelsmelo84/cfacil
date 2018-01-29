import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';

import { ThanksRoutingModule } from './thanks.routing';
import { ThanksComponent } from './thanks.component';

@NgModule({
  imports: [
             BrowserModule,
             FormsModule,
             CommonModule,
             HttpClientModule,
             ThanksRoutingModule
  ],
  declarations: [
             ThanksComponent
  ],
  exports: [
             ThanksComponent
  ]
})

export class ThanksModule { }
