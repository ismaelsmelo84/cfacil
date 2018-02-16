export interface GeneralParameters {
  ic_slideshow: boolean;
  ic_produtos: boolean;
  ic_promocoes: boolean;
  ic_sobreNos: boolean;
  ic_testemunhos: boolean;
  ic_news: boolean;
  ic_pedidos: boolean;
  ic_searchOrder: boolean;
  ic_destaques: boolean;
  ic_contatos: boolean;
  ic_termos: boolean;
}

export interface ShippingParameters {
  uf: string;
  nameUf: string;
  price: number;
}

export interface Promocao {
  tx_promocao: string;
  no_link: string;
  no_botao: number;
}

export interface Frase {
  ds_frase1: string;
  ds_frase2: string;
  no_autor: string;
  ic_default: true;
}
