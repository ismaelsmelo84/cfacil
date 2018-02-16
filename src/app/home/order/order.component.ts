/* Recursos nativos ou de terceiros */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

/* Recursos customizados */
import { ValidationService } from '../../_components/validator/validation.service';

/* Tipos de dados */
import { Item,
         OrderCheckout } from './order.model';

/* Conjuntos de dados */
import { tecidoPrincipal,
         tecidoBlackout,
         tipoSuporte,
         tableShipping,
         parGerais } from '../data';

@Component({
  selector: 'app-home-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

 pagseguroURL = 'https://ws.sandbox.pagseguro.uol.com.br/v2/checkout/?' +
                'email=cortinafacil2017@gmail.com&token=A28A32CA37EF45A68551827A7414085F';
 urlPagamento = 'https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=';

 tecidoPrincipal: any;
 tecidoBlackout: any;
 tipoSuporte: any;
 tableShipping: any;
 parGerais: any;

 orderForm: FormGroup;
 items: Item[] = [];
 orderCheckout: OrderCheckout;

 constructor( private formBuilder: FormBuilder,
              private http: HttpClient ) {}

 /* Inicializa os objetos da classe */
 ngOnInit() {

    this.createOrderForm();

    // tslint:disable-next-line:prefer-const
    let orderFormGroups = this.items.map( item => this.formBuilder.group( item ) );
    // tslint:disable-next-line:prefer-const
    let orderFormArray = this.formBuilder.array( orderFormGroups );

    this.orderForm.setControl('items', orderFormArray);

    /* Inicialização dos objetos externos */
    Object.assign(this, {
      tecidoPrincipal,
      tecidoBlackout,
      tipoSuporte,
      tableShipping,
      parGerais
    });

    // Cria primeiro item do pedido
    this.onAddItem();
 }

 /* Inicializa o formulário de pedido */
 private createOrderForm() {
    this.orderForm = this.formBuilder.group({
      items: this.formBuilder.array([]),
      no_cliente: [ '', [ Validators.required, Validators.minLength(3) ] ],
      nu_telefone: [ '', [ Validators.required, Validators.minLength(9) ] ],
      no_email: [ '', [ Validators.required, ValidationService.emailValidator ] ],
      no_logradouro: [ '', [ Validators.required, Validators.minLength(3) ] ],
      nu_numero: [ '', Validators.required ],
      no_bairro: [ '', [ Validators.required, Validators.minLength(3) ] ],
      no_municipio: [ '', [ Validators.required, Validators.minLength(3) ] ],
      sg_uf: [ 'RS', Validators.required],
      nu_cep: [ '', [ Validators.required, Validators.minLength(2) ] ],
      qt_itens: 0,
      vr_frete: 0,
      vr_total: 0
    });
  }

 /* Cálculo para averiguar o custo de 1 unidade de cortina, por tipo */
 public getCalculoCortinaGenerico( i: number,
                                   tp: string ) {

   /* Define variáveis */
   let prod = 0;                                                             // Numero ID do produto
   let pmt = 0;                                                              // Preço do metro
   // tslint:disable-next-line:prefer-const
   let l: number = this.orderForm.controls.items.value[i].width;             // Largura
   // tslint:disable-next-line:prefer-const
   let a: number = this.orderForm.controls.items.value[i].height;            // Altura
   let price = 0;                                                            // Preço

   /* Identifica o tipo de cortina */
   if ( tp === 'Principal' )  {

     prod = this.orderForm.controls.items.value[i].tpPrincipal;
     pmt = this.obterPrecoTecidoPrincipal( prod );

     if ( prod > 0 ) {
       if ( a <= 280 ) {
         price = l * 2.5 * ( pmt / 100 );
       } else if ( a > 280 ) {
         price = a * ( l / 120 ) * ( pmt / 100 );
       }
     }

   } else if ( tp === 'Blackout' )  {

     prod = this.orderForm.controls.items.value[i].tpBlackout;
     pmt = this.obterPrecoTecidoBlackout( prod );

     if ( prod > 0 ) {
       if ( a <= 280 ) {
         price = l * 2 * ( pmt / 100 );
       } else if ( a > 280 ) {
         price = a * ( l / 150 ) * ( pmt / 100 );
       }
     }
   }

   /* Retorna o preço correspondente */
   return price;
 }

 /* Calcular o preço total de um item do pedido */
 public getCalculoCortina( i: number ) {

   /* Define variáveis */
   // tslint:disable-next-line:prefer-const
   let p: number = this.orderForm.controls.items.value[i].tpPrincipal;
   // tslint:disable-next-line:prefer-const
   let b: number = this.orderForm.controls.items.value[i].tpBlackout;
   // tslint:disable-next-line:prefer-const
   let qt: number = this.orderForm.controls.items.value[i].qt;
   let total = 0;

   /* Calcula a cortina principal, se adicionada pelo usuário */
   if ( p > 0 ) {
     total = this.getCalculoCortinaGenerico( i, 'Principal' );
   }

   /* Soma o blackout, se adicionado pelo usuário */
   if ( b > 0 ) {
     total = total + this.getCalculoCortinaGenerico( i, 'Blackout' );
   }

   /* Calcula totais do item */
   this.orderForm.controls.items.value[i].priceUnit = total;
   total = total * qt;
   this.orderForm.controls.items.value[i].totalItem = total;

   /* Retorna o total do item */
   return total;
 }

 /* Obtem preço do tecido da cortina principal */
 private obterPrecoTecidoPrincipal( i: number ) {

   return this.tecidoPrincipal[i]['price'];
 }

 /* Obtem preço do tecido da cortina blackout */
 private obterPrecoTecidoBlackout( i: number ) {

   return this.tecidoBlackout[i]['price'];
 }

 /* Obtem a quantidade de itens no pedido */
 public getQtItens() {

   this.orderForm.controls.qt_itens = this.orderForm.controls.items.value.reduce( function( prevVal, elem ) {
        return prevVal + (elem.qt);
      }, 0 );

   return this.orderForm.controls.qt_itens;
 }

 /* Calcula o valor do frete com base na UF */
 public getFrete(): number {

   let i: number;

   if (this.orderForm.controls.sg_uf.value) {
     i = Number(this.orderForm.controls.qt_itens) * this.getTarifaFrete(this.orderForm.controls.sg_uf.value);
   } else {
     i = 0;
   }

   this.orderForm.controls.vr_frete.setValue(i);

   return i;
 }

 /* Pega tarifa de frete aplicável à UF */
 private getTarifaFrete(uf: string): number {

  // tslint:disable-next-line:prefer-const
  let i = this.tableShipping.filter(item => item.uf === uf);
   return i[0].price;
 }

 /* Calcula o total do pedido, já com frete */
 public getSomaTotal(): number {

   this.orderForm.controls.vr_total = this.orderForm.controls.items.value.reduce( function( prevVal, elem ) {
        return prevVal + (elem.priceUnit * elem.qt);
      }, 0 );

      // tslint:disable-next-line:prefer-const
      let total = Number(this.orderForm.controls.vr_total);

   return total;
 }

 /* Inclui um item do pedido na tabela */
 public onAddItem () {

  // tslint:disable-next-line:prefer-const
  let fg = this.formBuilder.group(new Item());
  this.itemFormArray.push(fg);
 }

 /* Retorna itens como FormArray */
 public get itemFormArray(): FormArray{
  return this.orderForm.get('items') as FormArray;
 }

 /* Exclui um item do pedido da tabela */
 public onRemoveItem (index) {

  // tslint:disable-next-line:prefer-const
  let it: any = this.orderForm.controls['items'];
  it.removeAt(index);
 }

 /* Valida preenchiemnto de campos, exceto da tabela de items, já validados */
 getValidation(): boolean {

   if (this.orderForm.controls.no_cliente.invalid ||
       this.orderForm.controls.nu_telefone.invalid ||
       this.orderForm.controls.no_email.invalid ||
       this.orderForm.controls.no_logradouro.invalid ||
       this.orderForm.controls.nu_numero.invalid ||
       this.orderForm.controls.no_bairro.invalid ||
       this.orderForm.controls.no_municipio.invalid ||
       this.orderForm.controls.sg_uf.invalid ||
       this.orderForm.controls.nu_cep.invalid ) {

       return true;
   } else {
       return false; }
 }

 /* Submete pedido e realiza integração com o PagSeguro  */
 public onOrderFormSubmit() {

      /* Definir variáveis */
      // tslint:disable-next-line:prefer-const
      let item: Item[] = this.orderForm.controls.items.value;

      /* Preencher objeto do pedido */
      this.orderCheckout = new OrderCheckout(
        item,
        this.orderForm.controls.no_cliente.value,
        this.orderForm.controls.nu_telefone.value,
        this.orderForm.controls.no_email.value,
        this.orderForm.controls.no_logradouro.value,
        this.orderForm.controls.nu_numero.value,
        this.orderForm.controls.no_bairro.value,
        this.orderForm.controls.no_municipio.value,
        this.orderForm.controls.sg_uf.value,
        this.orderForm.controls.nu_cep.value,
        this.orderForm.controls.qt_itens.value,
        this.orderForm.controls.vr_frete.value,
        this.orderForm.controls.vr_total.value
      );

      /* Criar JSON a partir do objeto  */
      // tslint:disable-next-line:prefer-const
      let data = JSON.stringify(this.orderCheckout);
      console.log('-----PEDIDO em formato JSON-----');
      console.log( data );

      /* Enviar para o backend (CHAMAR SERVICE) */

      /* Definir variáveis para onstruir XML de integração com o PagSeguro */
      // tslint:disable-next-line:prefer-const
      let emp = '<<credentials to the webservice>>';
      // tslint:disable-next-line:prefer-const
      let login = '<<credentials to the webservice>>';
      // tslint:disable-next-line:prefer-const
      let pass = '<<credentials to the webservice>>';
      // tslint:disable-next-line:prefer-const
      let id = '<<credentials to the webservice>>';

      /* Definir template e conteúdo do XML  */
      // tslint:disable-next-line:prefer-const
      let body: string = '<?xml version=\"1.0\"?><checkout>\r\n' +
        '<sender>\r\n' +
          '<name>\"Jose Comprador\"</name>\r\n' +
          '<email>\"comprador@uol.com.br\"</email>\r\n' +
          '<phone>\r\n' +
            '<areaCode>\"99\"</areaCode>\r\n' +
            '<number>\"99999999\"</number>\r\n' +
          '</phone>\r\n' +
          '<ip>\"1.1.1.1\"</ip>\r\n' +
          '<documents>\r\n' +
            '<document>\r\n' +
              '<type>\"CPF\"</type>\r\n' +
              '<value>\"11475714734\"</value>\r\n' +
            '</document>\r\n' +
          '</documents>\r\n' +
        '</sender>\r\n' +
        '<currency>\"BRL\"</currency>\r\n' +
        '<items>\r\n' +
          '<item>\r\n' +
            '<id>\"0001\"</id>\r\n' +
            '<description>\"Produto PagSeguroI\"</description>\r\n' +
            '<amount>\"99999.99\"</amount>\r\n' +
            '<quantity>\"1\"</quantity>\r\n' +
            '<weight>\"10\"</weight>\r\n' +
            '<shippingCost>\"1.00\"</shippingCost>\r\n' +
          '</item>\r\n' +
        '</items>\r\n' +
        '<redirectURL>\"http://lojamodelo.com.br/return.html\"</redirectURL>\r\n' +
        '<extraAmount>\"10.00\"</extraAmount>\r\n' +
        '<reference>\"REF1234\"</reference>\r\n' +
        '<shipping>\r\n' +
          '<address>\r\n' +
            '<street>\"Av. PagSeguro\"</street>\r\n' +
            '<number>\"9999\"</number>\r\n' +
            '<complement>\"99o andar\"</complement>\r\n' +
            '<district>\"Jardim Internet\"</district>\r\n' +
            '<city>\"Cidade Exemplo\"</city>\r\n' +
            '<state>\"SP\"</state>\r\n' +
            '<country>\"BRA\"</country>\r\n' +
            '<postalCode>\"99999999\"</postalCode>\r\n' +
          '</address>\r\n' +
          '<type>\"1\"</type>\r\n' +
          '<cost>\"1.00\"</cost>\r\n' +
          '<addressRequired>\"true\"</addressRequired>\r\n' +
        '</shipping>\r\n' +
        '<maxAge>\"999999999\"</maxAge>\r\n' +
        '<maxUses>\"999</maxUses>\r\n' +
        '<receiver>\r\n' +
          '<email>\"suporte@lojamodelo.com.br\"</email>\r\n' +
        '</receiver>\r\n' +
      '</checkout>';

      console.log( body );

      const urltest = 'https://ws.sandbox.pagseguro.uol.com.br/v2/checkout/?' +
                      'email=suporte@lojamodelo.com.br&token=57BE455F4EC148E5A54D9BB91C5AC12C';
      const url = this.pagseguroURL;

      /* Enviar XML ao PagSeguro, retornando possíveis erros */
      this.http.post( urltest, body, {
        headers: new HttpHeaders()
        .set('Content-Type', 'text/xml')
        .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Headers',
                'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method'), responseType: 'text'})
        // tslint:disable-next-line:no-shadowed-variable
        .subscribe( data => {
        console.log( data );
      },
      (err: HttpErrorResponse) => {
        if ( err.error instanceof Error ) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Ocorreu um erro na integração:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Retornado o código ${ err.status }, cujo conteúdo relacionado é: ${ err.error }`);
        }
      }
    );
  }
}
