/* Recursos nativos e de terceiros */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/* Recursos customizados */
import { RetornoComponent } from './retorno-pagamento.component';

/* Tabela de Rotas do Módulo */
const ROUTES: Routes = [
  {path: 'retorno-pagamento', component: RetornoComponent }
];

/* Declarações do Módulo */
@NgModule({
  declarations: [ RetornoComponent ],
  imports: [
             BrowserModule,
             FormsModule,
             CommonModule,
             HttpClientModule,
             RouterModule.forChild( ROUTES ) ],
  exports: [ RetornoComponent, RouterModule ]
})

export class RetornoModule { }
