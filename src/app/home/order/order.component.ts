/* Recursos nativos ou de terceiros */
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ValidationService } from '../../_components/validator/validation.service';
import { Item, OrderCheckout, TableShipping, Produto } from './order.model';

/* Conjuntos de dados */
import { parGerais } from '../data';

@Component({
  selector: 'app-home-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {
  parGerais: any;
  orderForm: FormGroup;
  orderCheckout: OrderCheckout;
  produtos: Observable<Produto[]>;
  tableShipping: Observable<TableShipping[]>;
  frete: TableShipping;
  items: Item[] = [];
  urlPagamento = 'https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=';
  pagseguroURL = 'https://ws.sandbox.pagseguro.uol.com.br/v2/checkout/?' +
                 'email=cortinafacil2017@gmail.com&token=A28A32CA37EF45A68551827A7414085F';

  constructor( private formBuilder: FormBuilder,
               private http: HttpClient,
               private db: AngularFireDatabase ) {}

  ngOnInit() {
    this.createOrderForm();
    this.produtos = this.getDBService('/produto');
    this.tableShipping = this.getDBService('/tableShipping');
    const orderFormGroups = this.items.map( item => this.formBuilder.group( item ) );
    const orderFormArray = this.formBuilder.array( orderFormGroups );
    this.orderForm.setControl('items', orderFormArray);
    Object.assign(this, { parGerais });
    this.onAddItem();
  }

  /*INICIALIZA FORMULÁRIO DE PEDIDO */
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
  public getCalculoCortinaGenerico( i: number ) {
    let prod = 0;                                                             // Numero ID do produto
    let pmt = 0;                                                              // Preço do metro
    let price = 0;
    const l: number = this.orderForm.controls.items.value[i].width;
    const a: number = this.orderForm.controls.items.value[i].height;                                                            // Preço

    /* Identifica o tipo de cortina */
    prod = this.orderForm.controls.items.value[i].idProduto;
    pmt = this.getPrecoTecido( prod );
    if ( prod > 0 ) {
      if ( a <= 280 ) {
        price = l * 2.5 * ( pmt / 100 );
      } else if ( a > 280 ) {
        price = a * ( l / 120 ) * ( pmt / 100 );
      }
    }

    /* Retorna o preço correspondente */
    return price;
  }

  /*CALCULAR TOTAL DO PEDIDO */
  public getTotalItem( i: number ) {
    const idProduto: number = this.orderForm.controls.items.value[i].idProduto;
    const qt: number = this.orderForm.controls.items.value[i].qt;
    let vr_unit = 0;
    let vr_totalItem = 0;

    if ( idProduto > 0 && qt > 0 ) {
      vr_unit = this.getCalculoCortinaGenerico( i );
      vr_totalItem = vr_unit * qt;
    }

    this.orderForm.controls.items.value[i].priceUnit = vr_unit;
    this.orderForm.controls.items.value[i].totalItem = vr_totalItem;
    this.orderForm.controls.qt_itens = this.orderForm.controls.items.value.reduce( function( prevVal, elem ) {
      return prevVal + Number(elem.qt);
    }, 0 );

    return vr_totalItem;
  }

  /* Obtem preço do tecido da cortina principal */
  private getPrecoTecido( i: number ) {
    /*return this.tecidoPrincipal[i]['price'];*/
    return 40;
  }

  public getQtItens() {
    return this.orderForm.controls.qt_itens;
  }

  public getSomaTotal(): number {
    this.orderForm.controls.vr_total = this.orderForm.controls.items.value.reduce( function( prevVal, elem ) {
        return prevVal + (elem.priceUnit * elem.qt);
      }, 0 );
    const total = Number(this.orderForm.controls.vr_total);
    return total;
  }

  public onAddItem () {
    const fg = this.formBuilder.group(new Item());
    this.itemFormArray.push(fg);
  }

  public get itemFormArray(): FormArray{
    return this.orderForm.get('items') as FormArray;
  }

  public onRemoveItem (index) {
    const it: any = this.orderForm.controls['items'];
    it.removeAt(index);
  }

  public getValidation(): boolean {
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
       return false;
    }
  }

  /* Submete pedido e realiza integração com o PagSeguro  */
  public onOrderFormSubmit() {
      const item: Item[] = this.orderForm.controls.items.value;
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
      const data = JSON.stringify(this.orderCheckout);
      console.log('-----PEDIDO em formato JSON-----');
      console.log( data );

      /* Enviar para o backend (CHAMAR SERVICE) */

      /* Definir variáveis para onstruir XML de integração com o PagSeguro */
      const emp = '<<credentials to the webservice>>';
      const login = '<<credentials to the webservice>>';
      const pass = '<<credentials to the webservice>>';
      const id = '<<credentials to the webservice>>';

      /* Definir template e conteúdo do XML  */
      const body: string = '<?xml version=\"1.0\"?><checkout>\r\n' +
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

  public getProdutosService() {
    console.log('LOG');
  }

  public getQtTecidoF1(vr_largura: number): number {
    return vr_largura * 2.5;
  }

  public getQtTecidoF2(vr_altura: number, vr_largura: number): number {
    return (vr_altura + 30) * (Math.round(vr_largura / 120));
  }

  public getQtTecidoF3(vr_largura: number): number {
    return vr_largura * 2.3;
  }

  public getQtTecidoF4(vr_altura: number, vr_largura: number): number {
    return (vr_altura + 30) * (Math.round(vr_largura / 150));
  }

  public getPrecoItem(qt_tecido: number, vr_tecido: number): number {
    if (qt_tecido <= 100) {
      qt_tecido = 100;
    }
    return qt_tecido * vr_tecido;
  }

  public getFrete(): number {
    let vr_frete: number;
    const qt_itens: number = Number(this.orderForm.controls.qt_itens);
    if ((this.orderForm.controls.sg_uf.value) && (qt_itens < 5)) {
      vr_frete = qt_itens * this.getFreteService(this.orderForm.controls.sg_uf.value);
      /*vr_frete = qt_itens * 20;*/
    } else {
      vr_frete = 0;
    }
    this.orderForm.controls.vr_frete.setValue(vr_frete);
    return vr_frete;
  }

  private getFreteService(sg_uf: string): number {
    this.getDBServiceObjeto('/tableShipping/' + sg_uf + '/price').subscribe(
      data => {
        this.orderForm.controls.vr_frete.setValue(Number(data));
      },
        error => {
        console.error('Erro na captura de dados do serviço de Frete!');
        return Observable.throw(error);
      });
    return this.getVrFrete();
  }

  public getVrFrete(): number {
    return this.orderForm.controls.vr_frete.value;
  }

  getDBService(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getDBServiceObjeto(objeto): Observable<any[]> {
    return this.db.object(objeto).valueChanges();
  }
}
