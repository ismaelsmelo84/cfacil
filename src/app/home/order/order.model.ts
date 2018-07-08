export class Item {

  tpPrincipal: number;
  tpBlackout: number;
  tpSupport: number;
  height: number;
  width: number;
  qt: number;
  priceUnit: number;
  totalItem: number;

  constructor() {

    this.tpPrincipal = 0;
    this.tpBlackout = 0;
    this.tpSupport = 0;
    this.height = 120;
    this.width = 200;
    this.qt = 1;
    this.priceUnit = 0;
    this.totalItem = 0;
  }
}

export class TableShipping {
  nameUf: string;
  price: number;
  sgUf: string;
}

export class Produto {
  ordem: number;
  nome: string;
  preco: number;
}

export class OrderCheckout {

  items: Item[];
  no_logradouro: string;
  nu_numero: string;
  no_bairro: string;
  no_municipio: string;
  sg_uf: string;
  nu_cep: string;
  qt_itens: number;
  vr_frete: number;
  vr_total: number;

  constructor( items: Item[],
               no_cliente: string,
               nu_telefone: string,
               no_email: string,
               no_logradouro: string,
               nu_numero: string,
               no_bairro: string,
               no_municipio: string,
               sg_uf: string,
               nu_cep: string,
               qt_itens: number,
               vr_frete: number,
               vr_total: number ) {

    this.items = items;
    this.no_logradouro = no_logradouro;
    this.nu_numero = nu_numero;
    this.no_bairro = no_bairro;
    this.no_municipio = no_municipio;
    this.sg_uf = sg_uf;
    this.nu_cep = nu_cep;
    this.qt_itens = qt_itens;
    this.vr_frete = vr_frete;
    this.vr_total = vr_total;
  }
}
