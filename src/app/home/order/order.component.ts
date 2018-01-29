import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Item } from './order.model'
import { tecidoPrincipal, tecidoBlackout, tipoSuporte, tableShipping, parGerais } from '../data';

import { ValidationService } from '../../_components/validator/validation.service';

import { OrdersService } from '../../_services/orders/orders.service'

@Component({
  selector: 'app-home-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

 //Cadastros
 tecidoPrincipal: any;
 tecidoBlackout: any;
 tipoSuporte: any;
 tableShipping: any;
 parGerais: any;

 orderForm: FormGroup
 items: any[] = []

 orders: any; //caputura do serviço TESTE - REVISAR

 constructor(private ordersService: OrdersService,
             private formBuilder: FormBuilder) {

   Object.assign(this, {
     tecidoPrincipal, tecidoBlackout, tipoSuporte, tableShipping, parGerais
   });
 }

 ngOnInit() {
   this.orders = this.ordersService.searchOrder() //caputura do serviço TESTE - REVISAR
   this.orderForm = this.formBuilder.group({

     //Form Array
     items: this.formBuilder.array([ this.createItem() ]),

     //Resumo do Pedido
     qt_itens: 0,
     vr_frete: 0,
     vr_total: 0,

     //Dados Pessoais
     no_cliente: ['', [Validators.required, Validators.minLength(3)]],
     nu_telefone: ['', [Validators.required, Validators.minLength(9)]],
     no_email: ['', [Validators.required, ValidationService.emailValidator]],

     //Endereço
     no_logradouro: ['', [Validators.required, Validators.minLength(3)]],
     nu_numero: ['', Validators.required],
     no_bairro: ['', [Validators.required, Validators.minLength(3)]],
     no_municipio: ['', [Validators.required, Validators.minLength(3)]],
     sg_uf: ['RS', Validators.required],
     nu_cep: ['', [Validators.required, Validators.minLength(2)]]

   });
 }

 public createItem(): FormGroup {
   return this.formBuilder.group({
     tpPrincipal: [0],
     tpBlackout: [0],
     height: [120],
     width: [200],
     tpSupport: [0],
     qt: [1],
     priceUnit: [0],
     totalItem: [0]
   });
 }

 //Possibilita incluir itens no pedido
 public addItem(): void {
   var it = this.orderForm.get('items') as FormArray
   it.push(this.createItem())
 }

 //Possibilita excluir itens no pedido
 public removeRow(i: number): void {
   let it = <FormArray>this.orderForm.get('items')
   it.removeAt(i)
 }

 //Possibilita o cálculo de uma cortina em específico, conforme o seu tipo
 public getCalculoCortinaGenerico(i: number, tp: string) {

   var prod: number = 0 //Numero ID do produto
   var pmt: number = 0 //Preço do metro
   var l: number = this.orderForm.controls.items.value[i].width //Largura
   var a: number = this.orderForm.controls.items.value[i].height //Altura
   var price: number = 0 //Preço

   //Identifica o tipo de cortina informado e calcula o preço
   if ( tp === 'Principal' )  {

     prod = this.orderForm.controls.items.value[i].tpPrincipal
     pmt = this.obterPrecoTecidoPrincipal(prod)

     if(prod > 0) {
       if(a <= 280) {
         price = l * 2.5 * (pmt / 100)
       } else if(a > 280) {
         price = a * (l / 120) * (pmt / 100)
       }
     }

   } else if ( tp === 'Blackout' )  {

     prod = this.orderForm.controls.items.value[i].tpBlackout
     pmt = this.obterPrecoTecidoBlackout(prod)

     if(prod > 0) {
       if(a <= 280) {
         price = l * 2 * (pmt / 100)
       } else if(a > 280) {
         price = a * (l / 150) * (pmt / 100)
       }
     }
   }

   return price
 }

 //Possibilita calcular o preço total de um item do pedido
 public getCalculoCortina(i: number) {

   var p: number = this.orderForm.controls.items.value[i].tpPrincipal
   var b: number = this.orderForm.controls.items.value[i].tpBlackout
   var qt: number = this.orderForm.controls.items.value[i].qt
   var total: number = 0

   //Calcular a cortina principal, se houver
   if(p > 0) {
     total = this.getCalculoCortinaGenerico(i,'Principal')
   }

   //Somar o blackout, se existir
   if(b > 0) {
     total = total + this.getCalculoCortinaGenerico(i,'Blackout')
   }

   //Total unitário
   this.orderForm.controls.items.value[i].priceUnit = total

   //Total de cada linha de item
   total = total * qt
   this.orderForm.controls.items.value[i].totalItem = total

   //Retorna total
   return total
 }

 //Obtem preço do tecido para a cortina principal
 private obterPrecoTecidoPrincipal(i: number) {
   return this.tecidoPrincipal[i]['price']
 }

 //Obtem preço do tecido para a cortina blackout
 private obterPrecoTecidoBlackout(i: number) {
   return this.tecidoBlackout[i]['price']
 }

 //Obtem a quantidade de itens do pedido
 public getQtItens() {
   this.orderForm.controls.qt_itens = this.orderForm.controls.items.value.reduce( function( prevVal, elem ) {
        return prevVal + (elem.qt);
      }, 0 );

   return this.orderForm.controls.qt_itens
 }

 //Calcula o valor do frete com base na UF e num valor fixo por UF
 public getFrete(): number {

   var i: number

   if (this.orderForm.controls.sg_uf.value) {
     i = Number(this.orderForm.controls.qt_itens) * this.getTarifaFrete(this.orderForm.controls.sg_uf.value)
   } else {
     i = 0;
   }

   this.orderForm.controls.vr_frete.setValue(i)

   return i;
 }

 private getTarifaFrete(uf: string): number {
     var i = this.tableShipping.filter(item => item.uf == uf)
     return i[0].price
 }

 //Calcula o total do pedido, incluindo frete
 public getSomaTotal(): number {
   this.orderForm.controls.vr_total = this.orderForm.controls.items.value.reduce( function( prevVal, elem ) {
        return prevVal + (elem.priceUnit * elem.qt);
      }, 0 );

   var total = Number(this.orderForm.controls.vr_total)

   return total
}

 //Salvar pedido
 public saveOrder() {
   console.log(this.orderForm.controls)
 }
}
