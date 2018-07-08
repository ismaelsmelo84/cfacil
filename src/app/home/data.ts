/*
------------------------------------------------------------------
A P E N A S   C O N T E U D O   E S T A T I C O
------------------------------------------------------------------
*/

/*--------------------------------------------------------------------------------
 Ligar/desligar módulos - STATIC */
export const ativacao = {
              ic_slideshow: true,
              ic_produtos: true,
              ic_promocoes: false,
              ic_sobreNos: true,
              ic_testemunhos: false,
              ic_news: false,
              ic_pedidos: true,
              ic_searchOrder: true,
              ic_destaques: true,
              ic_contatos: true,
              ic_termos: true
            };

/*--------------------------------------------------------------------------------
 Seção de NEWS - STATIC */
export const news = {
              ds_cabecalho: 'Assine nossa lista',
              ds_descricao: 'Cadastre-se para receber e-mails sobre ofertas e notícias relacionadas ao Cortina Fácil',
              no_botao: 'Assinar!',
              no_email: 'contato@cortinafacil.com.br'
            };

// Parâmetros Gerais - STATIC
export const parGerais = {
              urlApi: '',
              urlApiPagSeguroRet: '',
              urlApiPagSeguroSearch: '',
              no_contaPagSeguro: 'cortinafacil2017@gmail.com',
            };

/*--------------------------------------------------------------------------------
 Seção de SEARCH ORDER - STATIC */
export const searchOrder = {
              ds_cabecalho: 'Verifique a situação do seu pedido',
              ds_descricao: 'Informe seu e-mail caso deseje buscar os seus últimos pedidos realizados conosco.',
              no_botao: 'Consultar!',
              no_email: 'contato@cortinafacil.com.br'
            };

/*--------------------------------------------------------------------------------
 Seção de Destaques - STATIC */
export const destaques = {
              no_texto1: 'Qualidade garantida',
              no_texto2: 'Entrega rápida',
              no_texto3: 'Pagamento seguro'
            };

/*--------------------------------------------------------------------------------
 Seção de CONTATO (frases) - STATIC */
export const dadosContato = {
              no_site: 'CortinaFacil.com.br',
              no_localizacao: 'São Sebastião do Caí/RS, Brasil',
              ds_telefone: '(51) 99930-2468',
              no_email: 'contato@cortinafacil.com.br'
            };



/*--------------------------------------------------------------------------------
 Seção de PEDIDO */

// Cadastros de Tecidos Principal
export const tecidoPrincipal = [
  { id: 0, name: 'Não incluir', price: 0  },
  { id: 1, name: 'Voal', price: 30 },
  { id: 2, name: 'Voal Champagne', price: 30 },
  { id: 3, name: 'Linho', price: 23 }
];

// Cadastros de Tecidos Blackout
export const tecidoBlackout = [
  { id: 0, name: 'Não incluir', price: 0 },
  { id: 1, name: 'Tecido', price: 30  },
  { id: 2, name: 'Plástico', price: 32  }
];

// Cadastros de Tipos de Suporte
export const tipoSuporte = [
  { id: 0, name: 'Deslizante' },
  { id: 1, name: 'Argola' },
  { id: 2, name: 'Ilhós' }
];

// Parâmetros de Frete (preço por unidade)
export const tableShipping = [
  { uf: 'RS', nameUf: 'Rio Grande do Sul', price: 20.00 },
  { uf: 'SC', nameUf: 'Santa Catarina', price: 25.00 },
  { uf: 'PR', nameUf: 'Paraná', price: 30.00 }
];

/*--------------------------------------------------------------------------------
 Seção de SEARCH RESULTS */
 export const ordersList = [{
  id_pedido: 1,
  no_cliente: 'João Américo Lima',
  dt_pedido: '15/12/2017',
  qt_itens: 4,
  vr_total: 345.00,
  ic_situacao: 'Pago',
  dt_ultAtualizacao: '03/01/2018'
}];
