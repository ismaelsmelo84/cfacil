/* Recursos nativos e de terceiros */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';

/* Recursos customizados */
import { ThanksComponent } from './thanks.component';

/* Tabela de Rotas do Módulo */
const ROUTES: Routes = [
  {path: '', component: ThanksComponent }
]

/* Declarações do Módulo */
@NgModule({
  declarations: [ ThanksComponent ],
  imports: [
             BrowserModule,
             FormsModule,
             CommonModule,
             HttpClientModule,
             RouterModule.forChild(ROUTES)
  ]
})

export class ThanksModule { }