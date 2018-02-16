export interface Order {
  id: number;
  dt_pedido: Date;
  items: {
    tpPrincipal: number;
    tpBlackout: number;
    height: number;
    width: number;
    tpSupport: number;
    qt: number;
    priceUnit: number;
    totalItem: number
  };
  no_cliente: string;
  nu_telefone: string;
  no_email: string;
  no_logradouro: string;
  nu_numero: string;
  no_bairro: string;
  no_municipio: string;
  sg_uf: string;
  nu_cep: string;
  ic_situacao: boolean;
  dt_ultimaAtualizacao: Date;
  qt_itens: number;
  vr_frete: number;
  vr_total: number;
  vr_totalPedido: number;
}
