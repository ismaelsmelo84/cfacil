/*--------------------------------------------------------------------------------
 Ligar/desligar módulos */
export const ativacao = {
              ic_slideshow: true,
              ic_produtos: true,
              ic_promocoes: false,
              ic_sobreNos:true,
              ic_testemunhos: true,
              ic_news: false,
              ic_pedidos: true,
              ic_searchOrder: true,
              ic_destaques: true,
              ic_contatos: true,
              ic_termos: true
            };

/*--------------------------------------------------------------------------------
 Seção de SLIDESHOW */
export const slides = [{
              im_cabecalho: 'assets/img/logo_transparent.png',
              ds_texto: 'Cortinas não são apenas elementos de decoração, muito mais do que isso, elas são essenciais para prover conforto aos seus ambientes. Conheça agora os nossos produtos e se preferir, acompanhe-nos nas redes sociais.',
              im_iconeSocial: 'icon-facebook',
              no_linkIconeSocial: '#link',
              no_botao: 'Conheça nossos produtos',
              no_linkBotao: '#products'
            }, {
              no_cabecalho: 'Estilo e Qualidade',
              ds_texto: 'Nós escolhemos cada elemento dos nossos produtos para expressar o seu bom gosto, de uma forma única, econômica e conforme o mais alto padrão de qualidade, garantido pelo Cortina Fácil.',
              no_botao: 'Garanta a sua cortina',
              no_linkBotao: '#orderform'
            }, {
              no_cabecalho: 'Conforto e Comodidade',
              ds_textoParte1: 'Sua casa e/ou escritório repaginados! Todos aqueles que usufruem desses locais perceberão algo de notável em seus ambientes.',
              ds_textoParte2: 'Clique no link abaixo e receba uma agradável surpresa em sua casa.',
              no_botao: 'Compre agora',
              no_linkBotao: '#orderform'
            }];

/*--------------------------------------------------------------------------------
 Seção de PRODUTOS (galerias) - STATIC */
export const galerias = [
              { name: 'Cortinas Principais', description: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, varius sed dolor. Donec augue lacus, vulputate sed consectetur facilisis, interdum pharetra ligula. Nulla suscipit erat nibh, ut porttitor nisl dapibus eu.' }, //Galeria 1
              { name: 'Cortinas Blackout', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, varius sed dolor. Donec augue lacus, vulputate sed consectetur facilisis, interdum pharetra ligula. Nulla suscipit erat nibh, ut porttitor nisl dapibus eu.' }, //Galeria 2
              { name: 'Acessórios', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, varius sed dolor. Donec augue lacus, vulputate sed consectetur facilisis, interdum pharetra ligula. Nulla suscipit erat nibh, ut porttitor nisl dapibus eu.' } //Galeria 3
            ];

/*--------------------------------------------------------------------------------
 Seção de PROMOCOES */
export const promocao = {
              tx_promocao: 'Frete grátis (compras acima de R$ 200) para todo o país!',
              no_link: '#orderform',
              no_botao: 'Aproveite e compre agora'
            };

/*--------------------------------------------------------------------------------
 Seção de TESTEMUNHOS (frases) */
export const frases = [
            {
              ds_frase1: 'This is one of the most beautiful site I have ever seen in my life.',
              ds_frase2: 'Your site is great!',
              no_autor: 'Camila Klein',
              ic_default: true
            },{
              ds_frase1: 'This is one of the most beautiful site I have ever seen in my life.',
              ds_frase2: 'Your site is great!',
              no_autor: 'Camila Klein 2',
              ic_default: false
            },{
              ds_frase1: 'This is one of the most beautiful site I have ever seen in my life.',
              ds_frase2: 'Your site is great!',
              no_autor: 'Camila Klein 3',
              ic_default: false
            }
          ];

/*--------------------------------------------------------------------------------
 Seção de NEWS - STATIC */
export const news = {
              ds_cabecalho: 'Assine nossa lista',
              ds_descricao: 'Cadastre-se para receber e-mails sobre ofertas e notícias relacionadas ao Cortina Fácil',
              no_botao: 'Assinar!',
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

// Parâmetros Gerais
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

/*--------------------------------------------------------------------------------
 Seção de Destaques - STATIC */
export const destaques = {
              no_texto1: 'Qualidade garantida',
              no_texto2: 'Entrega em todo o Brasil',
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
 Página de TERMOS E CONDICOES */

// Lado esquerdo
export const termosEsq = [
              { no_cabecalho: 'Política de preços', ds_texto: 'Prices are shown in € (EURO). All prices include Danish VAT of 25%. Prices do not include service, payment and delivery charges. Orders may be subjected to local taxes and/or import duties at your own expense.' },
              { no_cabecalho: 'Pagamentos', ds_texto: 'Texto' },
              { no_cabecalho: 'Confirmação do pedido', ds_texto: 'Texto' },
              { no_cabecalho: 'Frete', ds_texto: 'Texto' },
              { no_cabecalho: 'Devoluções', ds_texto: 'Texto' }
            ];

// Lado direito
export const termosDir = [
              { no_cabecalho: 'Garantia', ds_texto: 'There is a 2 years warranty on all products sold on www.microStore.com. This warranty covers manufacturing faults only, not wear and tear from regular use. Please contact us at shop@microStore.com if you have a warranty claim, including order number, photos of the claim area and a description of the claim.' },
              { no_cabecalho: 'Política de Privacidade', ds_texto: 'Texto' },
              { no_cabecalho: 'Segurança', ds_texto: 'Texto' },
              { no_cabecalho: 'Restrições', ds_texto: 'Texto' },
              { no_cabecalho: 'Legislação', ds_texto: 'Texto' }
            ];
