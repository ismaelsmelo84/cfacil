webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./orders/orders.module": [
		"../../../../../src/app/orders/orders.module.ts"
	],
	"./thanks/thanks.module": [
		"../../../../../src/app/thanks/thanks.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/_components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer id=\"main-footer\" class=\"dark-bg light-typo\">\r\n  <div class=\"container\">\r\n\r\n    <!--Marca -->\r\n    <p class=\"pull-left copyright\">&copy; Cortina Fácil, 2017. <br> by <a href=\"http://www.onsizing.com\" target=\"_blank\">OnSizing</a>.<br></p>\r\n\r\n    <!--Botão \"Termos\" -->\r\n    <div class=\"pull-right paymentMethodImg copyright\">\r\n      <a class=\"btn btn-store outline\" href=\"#\" data-toggle=\"modal\" data-target=\"#modalTermos\">Termos & condições</a>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/_components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/_components/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-nav\" class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\r\n  <div class=\"container\">\r\n\r\n    <!--Logo -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n        <span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#home\">\r\n        <img id=\"navlogo\" src=\"assets/img/logo3.png\" alt=\"Cortina Facil\" width=\"122\" height=\"45\">\r\n      </a>\r\n    </div>\r\n\r\n    <!--Menu -->\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul id=\"navigation\" class=\"nav navbar-nav navbar-right text-center\">\r\n        <li><a href=\"#products\">Produtos</a></li>\r\n        <li><a href=\"#about\">Sobre nós</a></li>\r\n        <li><a href=\"#orderform\">Faça seu Pedido</a></li>\r\n        <li><a href=\"#contact\">Contato</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/_components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/_components/header/header.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n<app-header></app-header>\r\n\r\n<!-- Conteúdo -->\r\n<app-home></app-home>\r\n\r\n<!--\r\n<app-orders></app-orders>\r\n<app-thanks></app-thanks>-->\r\n\r\n<!-- Rodapé -->\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__orders_orders_module__ = __webpack_require__("../../../../../src/app/orders/orders.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__thanks_thanks_module__ = __webpack_require__("../../../../../src/app/thanks/thanks.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_header_header_component__ = __webpack_require__("../../../../../src/app/_components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/_components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//APP Root

//Feature Modules



//componentInstance


//Routing

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_7__orders_orders_module__["OrdersModule"],
                __WEBPACK_IMPORTED_MODULE_8__thanks_thanks_module__["ThanksModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Rota para "Home"

var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
        children: [{
                path: 'obrigado',
                loadChildren: './thanks/thanks.module#ThanksModule'
            }, {
                path: 'pedidos',
                loadChildren: './orders/orders.module#OrdersModule'
            }]
    }, {
        path: '**',
        redirectTo: 'error/404'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\r\n  font-family: 'Amatic SC', cursive;\r\n  font-size: 48PX;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"about\" class=\"padding-top-bottom \">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n      <!--Título -->\r\n      <div class=\"col-md-4 anima fadeInLeft\">\r\n        <header class=\"section-header cta-message\">\r\n          <h2>SOBRE NÓS</h2>\r\n          <h4>Confiança em primeiro lugar</h4>\r\n        </header>\r\n      </div>\r\n\r\n      <!--Texto -->\r\n      <div class=\"col-md-8 cta-message anima fade-up\">\r\n        <p><strong>Comprar boas cortinas de maneira simples, rápida e barata!</strong> Este é o serviço que o <strong>Cortina Fácil</strong> disponibiliza a seus clientes em todo o Brasil, com garantia de qualidade e entrega no prazo.</p>\r\n        <p style=\"display:none;\" id=\"showme\">A CortinaFacil.com.br fica situada em São Sebastião do Caí, município localizado entre a região da região metropolitana de Porto Alegre e a Serra Gaúcha. Nossa empresa foi criada para atender as necessidades de quem precisa comprar boas cortinas de maneira simples, rápida e barata, reunindo as melhores empresas e costureiras da região, com qualidade garantida do início ao fim da confecção dos produtos.<br><br><strong>Não encontrou o tecido que gostaria para sua cortina?</strong> Sem problema! Basta acessar a área de CONTATO e realizar a solicitação do produto desejado. Estamos aqui para atendê-lo e vamos ajudá-lo da melhor forma possível!</p>\r\n        <a class=\"btn btn-store outline\" id=\"show-btn\" href=\"#\">Leia mais</a>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-about',
            template: __webpack_require__("../../../../../src/app/home/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\r\n  font-family: 'Amatic SC', cursive;\r\n  font-size: 48PX;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\" class=\"gray-bg padding-top-bottom\">\r\n  <div class=\"container\">\r\n\r\n    <!--Cabeçalho do Form -->\r\n    <header class=\"section-header text-left\">\r\n      <h2>CONTATO</h2>\r\n    </header>\r\n\r\n    <!--Form -->\r\n    <form action=\"index.html\" method=\"post\" novalidate id=\"contact-form\">\r\n      <div class=\"row\">\r\n\r\n        <!--Contato -->\r\n        <div class=\"col-xs-12 col-sm-12 col-md-4 contact-info cta-message anima fade-right\">\r\n          <address>\r\n            <strong>{{dadosContato.no_site}}</strong><br>\r\n            {{dadosContato.no_localizacao}}<br>\r\n            {{dadosContato.ds_telefone}}<br>\r\n            {{dadosContato.no_email}}\r\n          </address>\r\n        </div>\r\n\r\n        <!--Campos -->\r\n        <div class=\"col-xs-12 col-sm-12 col-md-8 anima fade-up d1\" >\r\n\r\n          <!--Campo nome -->\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"contact-name\">name</label>\r\n            <div class=\"controls\">\r\n              <input id=\"contact-name\" name=\"contactName\" placeholder=\"Seu nome\" class=\"form-control input-lg requiredField\" type=\"text\">\r\n            </div>\r\n          </div>\r\n\r\n          <!--Campo email -->\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"contact-mail\">email</label>\r\n            <div class=\" controls\">\r\n              <input id=\"contact-mail\" name=\"email\" placeholder=\"Seu e-mail\" class=\"form-control input-lg requiredField\" type=\"email\">\r\n            </div>\r\n          </div>\r\n\r\n          <!--Campo mensagem -->\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"contact-message\">message</label>\r\n            <div class=\"controls\">\r\n              <textarea id=\"contact-message\" name=\"comments\" placeholder=\"Sua mensagem\" class=\"form-control input-lg requiredField\" rows=\"5\"></textarea>\r\n            </div>\r\n          </div>\r\n\r\n          <p>\r\n\r\n          <!--Opções -->\r\n          <button name=\"submit\" type=\"submit\" class=\"btn btn-store btn-block\">Enviar Mensagem</button></p>\r\n          <input type=\"hidden\" name=\"submitted\" id=\"submitted3\" value=\"true\">\r\n\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__("../../../../../src/app/home/data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent() {
        Object.assign(this, {
            dadosContato: __WEBPACK_IMPORTED_MODULE_1__data__["b" /* dadosContato */]
        });
    }
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-contact',
            template: __webpack_require__("../../../../../src/app/home/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ativacao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return slides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return galerias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return promocao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return frases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return news; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return tecidoPrincipal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return tecidoBlackout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return tipoSuporte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return tableShipping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return parGerais; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return searchOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ordersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return destaques; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dadosContato; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return termosEsq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return termosDir; });
/*--------------------------------------------------------------------------------
 Ligar/desligar módulos */
var ativacao = {
    ic_slideshow: true,
    ic_produtos: true,
    ic_promocoes: false,
    ic_sobreNos: true,
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
var slides = [{
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
 Seção de PRODUTOS (galerias) */
var galerias = [
    { name: 'Cortinas Principais' },
    { name: 'Cortinas Blackout' },
    { name: 'Acessórios' } //Galeria 3
];
/*--------------------------------------------------------------------------------
 Seção de PROMOCOES */
var promocao = {
    tx_promocao: 'Frete grátis (compras acima de R$ 200) para todo o país até',
    no_link: '#orderform',
    no_botao: 'Aproveite e compre agora'
};
/*--------------------------------------------------------------------------------
 Seção de TESTEMUNHOS (frases) */
var frases = [
    {
        ds_frase1: 'This is one of the most beautiful site I have ever seen in my life.',
        ds_frase2: 'Your site is great!',
        no_autor: 'Camila Klein',
        ic_default: true
    }, {
        ds_frase1: 'This is one of the most beautiful site I have ever seen in my life.',
        ds_frase2: 'Your site is great!',
        no_autor: 'Camila Klein 2',
        ic_default: false
    }, {
        ds_frase1: 'This is one of the most beautiful site I have ever seen in my life.',
        ds_frase2: 'Your site is great!',
        no_autor: 'Camila Klein 3',
        ic_default: false
    }
];
/*--------------------------------------------------------------------------------
 Seção de NEWS */
var news = {
    ds_cabecalho: 'Assine nossa lista',
    ds_descricao: 'Cadastre-se para receber e-mails sobre ofertas e notícias relacionadas ao Cortina Fácil',
    no_botao: 'Assinar!',
    no_email: 'contato@cortinafacil.com.br'
};
/*--------------------------------------------------------------------------------
 Seção de PEDIDO */
// Cadastros de Tecidos Principal
var tecidoPrincipal = [
    { id: 0, name: 'Sem cortina principal' },
    { id: 1, name: 'Voal' },
    { id: 2, name: 'Voal Champagne' },
    { id: 3, name: 'Linho' }
];
// Cadastros de Tecidos Blackout
var tecidoBlackout = [
    { id: 0, name: 'Sem blackout' },
    { id: 1, name: 'Tecido' },
    { id: 2, name: 'Plástico' }
];
// Cadastros de Tipos de Suporte
var tipoSuporte = [
    { id: 0, name: 'Deslizante' },
    { id: 1, name: 'Argola' },
    { id: 2, name: 'Ilhós' }
];
// Parâmetros de Frete (preço por unidade)
var tableShipping = [
    { uf: 'RS', nameUf: 'Rio Grande do Sul', price: 20.00 },
    { uf: 'SC', nameUf: 'Santa Catarina', price: 25.00 },
    { uf: 'PR', nameUf: 'Paraná', price: 30.00 }
];
// Parâmetros Gerais
var parGerais = {
    urlBaseApi: '',
    no_contaPagSeguro: 'cortinafacil2017@gmail.com',
};
/*--------------------------------------------------------------------------------
 Seção de SEARCH ORDER */
var searchOrder = {
    ds_cabecalho: 'Verifique a situação do seu pedido',
    ds_descricao: 'Informe seu e-mail caso deseje buscar os seus últimos pedidos realizados conosco.',
    no_botao: 'Consultar!',
    no_email: 'contato@cortinafacil.com.br'
};
/*--------------------------------------------------------------------------------
 Seção de SEARCH RESULTS */
var ordersList = [{
        id_pedido: 1,
        no_cliente: 'João Américo Lima',
        dt_pedido: '15/12/2017',
        qt_itens: 4,
        vr_total: 345.00,
        ic_situacao: 'Pago',
        dt_ultAtualizacao: '03/01/2018'
    }];
/*--------------------------------------------------------------------------------
 Seção de Destaques */
var destaques = {
    no_texto1: 'Qualidade garantida',
    no_texto2: 'Entrega em todo o Brasil',
    no_texto3: 'Pagamento seguro'
};
/*--------------------------------------------------------------------------------
 Seção de CONTATO (frases) */
var dadosContato = {
    no_site: 'CortinaFacil.com.br',
    no_localizacao: 'São Sebastião do Caí/RS, Brasil',
    ds_telefone: '(51) 99930-2468',
    no_email: 'contato@cortinafacil.com.br'
};
/*--------------------------------------------------------------------------------
 Página de TERMOS E CONDICOES */
// Lado esquerdo
var termosEsq = [
    { no_cabecalho: 'Política de preços', ds_texto: 'Prices are shown in € (EURO). All prices include Danish VAT of 25%. Prices do not include service, payment and delivery charges. Orders may be subjected to local taxes and/or import duties at your own expense.' },
    { no_cabecalho: 'Pagamentos', ds_texto: 'Texto' },
    { no_cabecalho: 'Confirmação do pedido', ds_texto: 'Texto' },
    { no_cabecalho: 'Frete', ds_texto: 'Texto' },
    { no_cabecalho: 'Devoluções', ds_texto: 'Texto' }
];
// Lado direito
var termosDir = [
    { no_cabecalho: 'Garantia', ds_texto: 'There is a 2 years warranty on all products sold on www.microStore.com. This warranty covers manufacturing faults only, not wear and tear from regular use. Please contact us at shop@microStore.com if you have a warranty claim, including order number, photos of the claim area and a description of the claim.' },
    { no_cabecalho: 'Política de Privacidade', ds_texto: 'Texto' },
    { no_cabecalho: 'Segurança', ds_texto: 'Texto' },
    { no_cabecalho: 'Restrições', ds_texto: 'Texto' },
    { no_cabecalho: 'Legislação', ds_texto: 'Texto' }
];


/***/ }),

/***/ "../../../../../src/app/home/highlights/highlights.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"cta\" class=\"padding-top-bottom color-bg light-typo\">\r\n  <div class=\"container\">\r\n    <div class=\"row text-center\">\r\n\r\n      <!--Quadro 1 -->\r\n      <div class=\"col-md-4 col-sm-4 news anima fade-up\">\r\n        <i class=\"icon-trophy iconBig\"></i>\r\n        <h3>{{destaques.no_texto1}}</h3>\r\n      </div>\r\n\r\n      <!--Quadro 2 -->\r\n      <div class=\"col-md-4 col-sm-4 news anima fade-up d1\">\r\n        <i class=\"icon-truck iconBig\"></i>\r\n        <h3>{{destaques.no_texto2}}</h3>\r\n      </div>\r\n\r\n      <!--Quadro 3 -->\r\n      <div class=\"col-md-4 col-sm-4 anima fade-up d2\">\r\n        <i class=\"icon-lock iconBig\"></i>\r\n        <h3>{{destaques.no_texto3}}</h3>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/highlights/highlights.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__("../../../../../src/app/home/data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HighlightsComponent = (function () {
    function HighlightsComponent() {
        Object.assign(this, {
            destaques: __WEBPACK_IMPORTED_MODULE_1__data__["c" /* destaques */]
        });
    }
    HighlightsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-highlights',
            template: __webpack_require__("../../../../../src/app/home/highlights/highlights.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HighlightsComponent);
    return HighlightsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Slideshou -->\r\n<app-home-slideshow [hidden]=\"!ativacao.ic_slideshow\"></app-home-slideshow>\r\n\r\n<!-- Produtos -->\r\n<app-home-products [hidden]=\"!ativacao.ic_produtos\"></app-home-products>\r\n\r\n<!-- Promoções -->\r\n<app-home-promotion [hidden]=\"!ativacao.ic_promocoes\"></app-home-promotion>\r\n\r\n<!-- Sobre nós -->\r\n<app-home-about [hidden]=\"!ativacao.ic_sobreNos\"></app-home-about>\r\n\r\n<!-- Testemunhos -->\r\n<app-home-testimonial [hidden]=\"!ativacao.ic_testemunhos\"></app-home-testimonial>\r\n\r\n<!-- News -->\r\n<app-home-news [hidden]=\"!ativacao.ic_news\"></app-home-news>\r\n\r\n<!-- Pedidos -->\r\n<app-home-order [hidden]=\"!ativacao.ic_pedidos\"></app-home-order>\r\n\r\n<!-- Destaques -->\r\n<app-home-highlights [hidden]=\"!ativacao.ic_destaques\"></app-home-highlights>\r\n\r\n<!-- Contatos -->\r\n<app-home-contact [hidden]=\"!ativacao.ic_contatos\"></app-home-contact>\r\n\r\n<!-- Search Order & Results -->\r\n<app-home-search-order [hidden]=\"!ativacao.ic_searchOrder\"></app-home-search-order>\r\n<app-home-search-results [hidden]=\"!ativacao.ic_searchOrder\"></app-home-search-results>\r\n\r\n<!-- Termos -->\r\n<app-home-terms [hidden]=\"!ativacao.ic_termos\"></app-home-terms>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__("../../../../../src/app/home/data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
        Object.assign(this, {
            ativacao: __WEBPACK_IMPORTED_MODULE_1__data__["a" /* ativacao */]
        });
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_routing__ = __webpack_require__("../../../../../src/app/home/home.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("../../../../../src/app/home/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_order_component__ = __webpack_require__("../../../../../src/app/home/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__("../../../../../src/app/home/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__highlights_highlights_component__ = __webpack_require__("../../../../../src/app/home/highlights/highlights.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__news_news_component__ = __webpack_require__("../../../../../src/app/home/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__products_products_component__ = __webpack_require__("../../../../../src/app/home/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__promotion_promotion_component__ = __webpack_require__("../../../../../src/app/home/promotion/promotion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__slideshow_slideshow_component__ = __webpack_require__("../../../../../src/app/home/slideshow/slideshow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__terms_terms_component__ = __webpack_require__("../../../../../src/app/home/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__testimonial_testimonial_component__ = __webpack_require__("../../../../../src/app/home/testimonial/testimonial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__search_order_search_order_component__ = __webpack_require__("../../../../../src/app/home/search-order/search-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__search_results_search_results_component__ = __webpack_require__("../../../../../src/app/home/search-results/search-results.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__home_routing__["a" /* HomeRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__terms_terms_component__["a" /* TermsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__slideshow_slideshow_component__["a" /* SlideshowComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__promotion_promotion_component__["a" /* PromotionComponent */],
                __WEBPACK_IMPORTED_MODULE_16__testimonial_testimonial_component__["a" /* TestimonialComponent */],
                __WEBPACK_IMPORTED_MODULE_11__news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_8__order_order_component__["a" /* OrderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__highlights_highlights_component__["a" /* HighlightsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__search_order_search_order_component__["a" /* SearchOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__search_results_search_results_component__["a" /* SearchResultsComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__terms_terms_component__["a" /* TermsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__slideshow_slideshow_component__["a" /* SlideshowComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__promotion_promotion_component__["a" /* PromotionComponent */],
                __WEBPACK_IMPORTED_MODULE_16__testimonial_testimonial_component__["a" /* TestimonialComponent */],
                __WEBPACK_IMPORTED_MODULE_11__news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_8__order_order_component__["a" /* OrderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__highlights_highlights_component__["a" /* HighlightsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__search_order_search_order_component__["a" /* SearchOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__search_results_search_results_component__["a" /* SearchResultsComponent */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
    }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"newsletter\" class=\"light-typo dark-bg padding-top-bottom\">\r\n  <div class=\"container \">\r\n\r\n    <!--Cabeçalho -->\r\n    <header class=\"section-header text-center\">\r\n      <h2>{{news.ds_cabecalho}}</h2>\r\n      <h4>{{news.ds_descricao}}</h4>\r\n    </header>\r\n\r\n    <!--Form -->\r\n    <div class=\"row\">\r\n      <form id=\"newsletter-form\" action=\"index.html\" method=\"POST\" class=\"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 \">\r\n\r\n        <!--Campo email -->\r\n        <div class=\"input-group\">\r\n          <input id=\"newsletter-mail\" name=\"email\" placeholder=\"Informe seu e-mail\" class=\"form-control input-lg\" type=\"email\" >\r\n          <span class=\"input-group-btn\">\r\n            <button name=\"submit\" type=\"submit\" class=\"btn btn-store\">{{news.no_botao}}</button>\r\n          </span>\r\n        </div>\r\n\r\n        <!--Opção -->\r\n        <input type=\"hidden\" name=\"submitted\" id=\"submitted2\" value=\"true\">\r\n\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__("../../../../../src/app/home/data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsComponent = (function () {
    function NewsComponent() {
        Object.assign(this, {
            news: __WEBPACK_IMPORTED_MODULE_1__data__["f" /* news */]
        });
    }
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-news',
            template: __webpack_require__("../../../../../src/app/home/news/news.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/order/order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\r\n  font-family: 'Amatic SC', cursive;\r\n  font-size: 48PX;\r\n}\r\n\r\nstrong {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 20px;\r\n}\r\n\r\ntable {\r\n  font-size: 16px;\r\n}\r\n\r\nth {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\nthead.resumo {\r\n  background-color: #FFF;\r\n}\r\n\r\n.total {\r\n  font-size: 24pt;\r\n  font-family: 'Roboto', sans-serif;\r\n  vertical-align: middle;\r\n}\r\n\r\n.fonts {\r\n  font-size: 8pt;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.mini-texto {\r\n  font-size: 8pt;\r\n  font-family: 'Roboto', sans-serif;\r\n  vertical-align: middle;\r\n}\r\n\r\n.fonte-verde {\r\n  color: #4CAF50;\r\n  vertical-align: middle;\r\n}\r\n\r\n.principal {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 0;\r\n  width: 100px;\r\n  height: 20px;\r\n}\r\n\r\n.space {\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n  font-size: 16px;\r\n}\r\n\r\n.centro {\r\n  vertical-align: center;\r\n}\r\n\r\n.left-title-header {\r\n  margin-bottom: 3px;\r\n  text-align: center;\r\n}\r\n\r\n.right-title-header {\r\n  margin-left: 5px;\r\n}\r\n\r\n\r\n\r\n\r\nbutton[data-balloon] {\r\n  overflow: visible; }\r\n\r\n[data-balloon] {\r\n  position: relative;\r\n  cursor: pointer; }\r\n  [data-balloon]:after {\r\n    filter: alpha(opacity=0);\r\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\r\n    -moz-opacity: 0;\r\n    -khtml-opacity: 0;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    transition: all 0.18s ease-out 0.18s;\r\n    font-family: sans-serif !important;\r\n    font-weight: normal !important;\r\n    font-style: normal !important;\r\n    text-shadow: none !important;\r\n    font-size: 12px !important;\r\n    background: rgba(17, 17, 17, 0.9);\r\n    border-radius: 4px;\r\n    color: #fff;\r\n    content: attr(data-balloon);\r\n    padding: .5em 1em;\r\n    position: absolute;\r\n    white-space: nowrap;\r\n    z-index: 10; }\r\n  [data-balloon]:before {\r\n    background: no-repeat url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba(17, 17, 17, 0.9)%22%20transform%3D%22rotate(0)%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\");\r\n    background-size: 100% auto;\r\n    width: 18px;\r\n    height: 6px;\r\n    filter: alpha(opacity=0);\r\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\r\n    -moz-opacity: 0;\r\n    -khtml-opacity: 0;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    transition: all 0.18s ease-out 0.18s;\r\n    content: '';\r\n    position: absolute;\r\n    z-index: 10; }\r\n  [data-balloon]:hover:before, [data-balloon]:hover:after, [data-balloon][data-balloon-visible]:before, [data-balloon][data-balloon-visible]:after {\r\n    filter: alpha(opacity=100);\r\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\r\n    -moz-opacity: 1;\r\n    -khtml-opacity: 1;\r\n    opacity: 1;\r\n    pointer-events: auto; }\r\n  [data-balloon].font-awesome:after {\r\n    font-family: FontAwesome; }\r\n  [data-balloon][data-balloon-break]:after {\r\n    white-space: pre; }\r\n  [data-balloon][data-balloon-blunt]:before, [data-balloon][data-balloon-blunt]:after {\r\n    transition: none; }\r\n  [data-balloon][data-balloon-pos=\"up\"]:after {\r\n    bottom: 100%;\r\n    left: 50%;\r\n    margin-bottom: 11px;\r\n    -webkit-transform: translate(-50%, 10px);\r\n    transform: translate(-50%, 10px);\r\n    -webkit-transform-origin: top;\r\n    transform-origin: top; }\r\n  [data-balloon][data-balloon-pos=\"up\"]:before {\r\n    bottom: 100%;\r\n    left: 50%;\r\n    margin-bottom: 5px;\r\n    -webkit-transform: translate(-50%, 10px);\r\n    transform: translate(-50%, 10px);\r\n    -webkit-transform-origin: top;\r\n    transform-origin: top; }\r\n  [data-balloon][data-balloon-pos=\"up\"]:hover:after, [data-balloon][data-balloon-pos=\"up\"][data-balloon-visible]:after {\r\n    -webkit-transform: translate(-50%, 0);\r\n    transform: translate(-50%, 0); }\r\n  [data-balloon][data-balloon-pos=\"up\"]:hover:before, [data-balloon][data-balloon-pos=\"up\"][data-balloon-visible]:before {\r\n    -webkit-transform: translate(-50%, 0);\r\n    transform: translate(-50%, 0); }\r\n  [data-balloon][data-balloon-pos=\"up-left\"]:after {\r\n    bottom: 100%;\r\n    left: 0;\r\n    margin-bottom: 11px;\r\n    -webkit-transform: translate(0, 10px);\r\n    transform: translate(0, 10px);\r\n    -webkit-transform-origin: top;\r\n    transform-origin: top; }\r\n  [data-balloon][data-balloon-pos=\"up-left\"]:before {\r\n    bottom: 100%;\r\n    left: 5px;\r\n    margin-bottom: 5px;\r\n    -webkit-transform: translate(0, 10px);\r\n    transform: translate(0, 10px);\r\n    -webkit-transform-origin: top;\r\n    transform-origin: top; }\r\n  [data-balloon][data-balloon-pos=\"up-left\"]:hover:after, [data-balloon][data-balloon-pos=\"up-left\"][data-balloon-visible]:after {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0); }\r\n  [data-balloon][data-balloon-pos=\"up-left\"]:hover:before, [data-balloon][data-balloon-pos=\"up-left\"][data-balloon-visible]:before {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0); }\r\n  [data-balloon][data-balloon-pos=\"up-right\"]:after {\r\n    bottom: 100%;\r\n    right: 0;\r\n    margin-bottom: 11px;\r\n    -webkit-transform: translate(0, 10px);\r\n    transform: translate(0, 10px);\r\n    -webkit-transform-origin: top;\r\n    transform-origin: top; }\r\n  [data-balloon][data-balloon-pos=\"up-right\"]:before {\r\n    bottom: 100%;\r\n    right: 5px;\r\n    margin-bottom: 5px;\r\n    -webkit-transform: translate(0, 10px);\r\n    transform: translate(0, 10px);\r\n    -webkit-transform-origin: top;\r\n    transform-origin: top; }\r\n  [data-balloon][data-balloon-pos=\"up-right\"]:hover:after, [data-balloon][data-balloon-pos=\"up-right\"][data-balloon-visible]:after {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0); }\r\n  [data-balloon][data-balloon-pos=\"up-right\"]:hover:before, [data-balloon][data-balloon-pos=\"up-right\"][data-balloon-visible]:before {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0); }\r\n  [data-balloon][data-balloon-pos='down']:after {\r\n    left: 50%;\r\n    margin-top: 11px;\r\n    top: 100%;\r\n    -webkit-transform: translate(-50%, -10px);\r\n    transform: translate(-50%, -10px); }\r\n  [data-balloon][data-balloon-pos='down']:before {\r\n    background: no-repeat url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba(17, 17, 17, 0.9)%22%20transform%3D%22rotate(180 18 6)%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\");\r\n    background-size: 100% auto;\r\n    width: 18px;\r\n    height: 6px;\r\n    left: 50%;\r\n    margin-top: 5px;\r\n    top: 100%;\r\n    -webkit-transform: translate(-50%, -10px);\r\n    transform: translate(-50%, -10px); }\r\n  [data-balloon][data-balloon-pos='down']:hover:after, [data-balloon][data-balloon-pos='down'][data-balloon-visible]:after {\r\n    -webkit-transform: translate(-50%, 0);\r\n    transform: translate(-50%, 0); }\r\n  [data-balloon][data-balloon-pos='down']:hover:before, [data-balloon][data-balloon-pos='down'][data-balloon-visible]:before {\r\n    -webkit-transform: translate(-50%, 0);\r\n    transform: translate(-50%, 0); }\r\n  [data-balloon][data-balloon-pos='down-left']:after {\r\n    left: 0;\r\n    margin-top: 11px;\r\n    top: 100%;\r\n    -webkit-transform: translate(0, -10px);\r\n    transform: translate(0, -10px); }\r\n  [data-balloon][data-balloon-pos='down-left']:before {\r\n    background: no-repeat url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba(17, 17, 17, 0.9)%22%20transform%3D%22rotate(180 18 6)%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\");\r\n    background-size: 100% auto;\r\n    width: 18px;\r\n    height: 6px;\r\n    left: 5px;\r\n    margin-top: 5px;\r\n    top: 100%;\r\n    -webkit-transform: translate(0, -10px);\r\n    transform: translate(0, -10px); }\r\n  [data-balloon][data-balloon-pos='down-left']:hover:after, [data-balloon][data-balloon-pos='down-left'][data-balloon-visible]:after {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0); }\r\n  [data-balloon][data-balloon-pos='down-left']:hover:before, [data-balloon][data-balloon-pos='down-left'][data-balloon-visible]:before {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0); }\r\n  [data-balloon][data-balloon-pos='down-right']:after {\r\n    right: 0;\r\n    margin-top: 11px;\r\n    top: 100%;\r\n    -webkit-transform: translate(0, -10px);\r\n    transform: translate(0, -10px); }\r\n  [data-balloon][data-balloon-pos='down-right']:before {\r\n    background: no-repeat url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba(17, 17, 17, 0.9)%22%20transform%3D%22rotate(180 18 6)%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\");\r\n    background-size: 100% auto;\r\n    width: 18px;\r\n    height: 6px;\r\n    right: 5px;\r\n    margin-top: 5px;\r\n    top: 100%;\r\n    -webkit-transform: translate(0, -10px);\r\n    transform: translate(0, -10px); }\r\n  [data-balloon][data-balloon-pos='down-right']:hover:after, [data-balloon][data-balloon-pos='down-right'][data-balloon-visible]:after {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0); }\r\n  [data-balloon][data-balloon-pos='down-right']:hover:before, [data-balloon][data-balloon-pos='down-right'][data-balloon-visible]:before {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0); }\r\n  [data-balloon][data-balloon-pos='left']:after {\r\n    margin-right: 11px;\r\n    right: 100%;\r\n    top: 50%;\r\n    -webkit-transform: translate(10px, -50%);\r\n    transform: translate(10px, -50%); }\r\n  [data-balloon][data-balloon-pos='left']:before {\r\n    background: no-repeat url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba(17, 17, 17, 0.9)%22%20transform%3D%22rotate(-90 18 18)%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\");\r\n    background-size: 100% auto;\r\n    width: 6px;\r\n    height: 18px;\r\n    margin-right: 5px;\r\n    right: 100%;\r\n    top: 50%;\r\n    -webkit-transform: translate(10px, -50%);\r\n    transform: translate(10px, -50%); }\r\n  [data-balloon][data-balloon-pos='left']:hover:after, [data-balloon][data-balloon-pos='left'][data-balloon-visible]:after {\r\n    -webkit-transform: translate(0, -50%);\r\n    transform: translate(0, -50%); }\r\n  [data-balloon][data-balloon-pos='left']:hover:before, [data-balloon][data-balloon-pos='left'][data-balloon-visible]:before {\r\n    -webkit-transform: translate(0, -50%);\r\n    transform: translate(0, -50%); }\r\n  [data-balloon][data-balloon-pos='right']:after {\r\n    left: 100%;\r\n    margin-left: 11px;\r\n    top: 50%;\r\n    -webkit-transform: translate(-10px, -50%);\r\n    transform: translate(-10px, -50%); }\r\n  [data-balloon][data-balloon-pos='right']:before {\r\n    background: no-repeat url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba(17, 17, 17, 0.9)%22%20transform%3D%22rotate(90 6 6)%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\");\r\n    background-size: 100% auto;\r\n    width: 6px;\r\n    height: 18px;\r\n    left: 100%;\r\n    margin-left: 5px;\r\n    top: 50%;\r\n    -webkit-transform: translate(-10px, -50%);\r\n    transform: translate(-10px, -50%); }\r\n  [data-balloon][data-balloon-pos='right']:hover:after, [data-balloon][data-balloon-pos='right'][data-balloon-visible]:after {\r\n    -webkit-transform: translate(0, -50%);\r\n    transform: translate(0, -50%); }\r\n  [data-balloon][data-balloon-pos='right']:hover:before, [data-balloon][data-balloon-pos='right'][data-balloon-visible]:before {\r\n    -webkit-transform: translate(0, -50%);\r\n    transform: translate(0, -50%); }\r\n  [data-balloon][data-balloon-length='small']:after {\r\n    white-space: normal;\r\n    width: 80px; }\r\n  [data-balloon][data-balloon-length='medium']:after {\r\n    white-space: normal;\r\n    width: 150px; }\r\n  [data-balloon][data-balloon-length='large']:after {\r\n    white-space: normal;\r\n    width: 260px; }\r\n  [data-balloon][data-balloon-length='xlarge']:after {\r\n    white-space: normal;\r\n    width: 380px; }\r\n    @media screen and (max-width: 768px) {\r\n      [data-balloon][data-balloon-length='xlarge']:after {\r\n        white-space: normal;\r\n        width: 90vw; } }\r\n  [data-balloon][data-balloon-length='fit']:after {\r\n    white-space: normal;\r\n    width: 100%; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"orderform\" class=\"gray-bg padding-top-bottom\"> <!--ng-controller=\"orderController\"-->\r\n  <div class=\"container\">\r\n\r\n    <!--Header -->\r\n    <header class=\"section-header text-center\">\r\n      <h2>FAÇA SEU PEDIDO</h2>\r\n    </header>\r\n\r\n    <!--Formulário -->\r\n    <form action=\"index.html\" method=\"post\" novalidate id=\"order-form\">\r\n\r\n      <!-- Lista de itens -->\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12\">\r\n          <p class=\"text-left\"><strong>ITENS DO CARRINHO</strong></p>\r\n          <table class=\"table\">\r\n\r\n            <!-- Cabeçalho da tabela -->\r\n            <thead>\r\n\r\n              <tr>\r\n                <th>\r\n                  <tr><td><div class=\"left-title-header\">&nbsp;&nbsp;&nbsp;&nbsp;ITEM</div></td></tr></th>\r\n                <th>\r\n                  <tr>\r\n                    <td class=\"right-title-header\">TECIDO</td>\r\n                    <td>\r\n                      <div class=\"right-title-header\">\r\n                        <a data-balloon=\"Escolha uma cortina principal e/ou blackout.\" data-balloon-pos=\"up\">\r\n                          <img src=\"assets/img/info.png\" width=\"20\" height=\"28\" alt=\"Dica\" class=\"centro\">\r\n                        </a>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </th>\r\n                <th>\r\n                  <tr>\r\n                    <td><div class=\"right-title-header\">DIMENSÕES</div></td>\r\n                    <td>\r\n                      <div class=\"right-title-header\">\r\n                        <a data-balloon=\"Informe as medidas da cortina em centímetros (1 metro = 100 centímetros).\" data-balloon-pos=\"up\">\r\n                          <img src=\"assets/img/info.png\" width=\"20\" height=\"28\" alt=\"Dica\" class=\"centro\">\r\n                        </a>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </th>\r\n                <th>\r\n                  <tr>\r\n                    <td><div class=\"right-title-header\">SUPORTE</div></td>\r\n                    <td>\r\n                      <div class=\"right-title-header\">\r\n                        <a data-balloon=\"Por fim, selecione um tipo de suporte e a quantidade.\" data-balloon-pos=\"up\">\r\n                          <img src=\"assets/img/info.png\" width=\"20\" height=\"28\" alt=\"Dica\" class=\"centro\">\r\n                        </a>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </th>\r\n                <th><div class=\"left-title-header\">UNIDADES</div></th>\r\n                <th><div class=\"right-title-header\"></div></th>\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            <!-- Linhas da tabela -->\r\n            <tbody>\r\n\r\n              <!-- Linha 1 -->\r\n              <tr *ngFor=\"let ord of order; let i = index\">\r\n\r\n                <!-- ID -->\r\n                <td class=\"text-center fonte-verde\">\r\n                  #{{i+1}}<br><br>\r\n                </td>\r\n\r\n                <!-- Tecido -->\r\n                <td class=\"text-left\">\r\n                  <div class=\"row space\">\r\n                    <div class=\"col-sm-3 col-md-3\">Principal:</div>\r\n                    <div class=\"col-sm-3 col-md-3\">\r\n                      <select class=\"form-control form-control-inline\" [(ngModel)]=\"order[i]['tpPrincipal']\" name=\"order[i]['tpPrincipal']\">\r\n                        <option *ngFor=\"let opt of tecidoPrincipal\" [value]=\"opt.id\">{{opt.name}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row space\">\r\n                    <div class=\"col-sm-3 col-md-3\">Blackout:</div>\r\n                    <div class=\"col-sm-3 col-md-3\">\r\n                      <select class=\"form-control form-control-inline\" [(ngModel)]=\"order[i]['tpBlackout']\" name=\"order[i]['tpBlackout']\">\r\n                        <option *ngFor=\"let opt of tecidoBlackout\" [value]=\"opt.id\">{{opt.name}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n\r\n                <!-- Dimensões -->\r\n                <td class=\"text-left\">\r\n                  <div class=\"row space\">\r\n                    <div class=\"col-sm-5 col-md-5\">Altura (cm):</div>\r\n                    <div class=\"col-sm-1 col-md-1\">\r\n                      <input [(ngModel)]=\"order[i]['height']\" name=\"{{order[i]['height']}}\" class=\"form-control form-control-inline\" type=\"number\" min=\"50\" max=\"400\" size=\"4\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row space\">\r\n                    <div class=\"col-sm-5 col-md-5\">Largura (cm):</div>\r\n                    <div class=\"col-sm-1 col-md-1\">\r\n                      <input [(ngModel)]=\"order[i]['width']\" name=\"{{order[i]['width']}}\" class=\"form-control form-control-inline\" type=\"number\" min=\"50\" max=\"900\" size=\"4\">\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n\r\n                <!-- Suporte -->\r\n                <td class=\"text-center\">\r\n                  <div class=\"row space\">\r\n                    <div class=\"col-sm-3 col-md-3\">Tipo:</div>\r\n                    <div class=\"col-sm-6 col-md-6\">\r\n                      <select class=\"form-control form-control-inline\" [(ngModel)]=\"order[i]['tpSupport']\" name=\"{{order[i]['tpSupport']}}\">\r\n                        <option *ngFor=\"let opt of tipoSuporte\" [value]=\"opt.id\">{{opt.name}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"text-left mini-texto\"><br>\r\n                    <b>NÃO</b> acompanha trilhos ou montagem\r\n                  </div>\r\n                </td>\r\n\r\n                <!-- Preço -->\r\n                <td class=\"text-center\">\r\n                  <div class=\"row space\">\r\n                    <div class=\"col-sm-2 col-md-2\">\r\n                      <div class=\"col-sm-1 col-md-1\">\r\n                        <input [(ngModel)]=\"order[i]['qt']\" name=\"{{order[i]['qt']}}\" class=\"form-control form-control-inline\" type=\"number\" min=\"1\" max=\"99\" size=\"2\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row space\">\r\n                    <div class=\"col-sm-3 col-md-3 text-right vert-align\">\r\n                      <div class=\"total text-right\">{{ getCalculoCortina(i) | currency:\"R$\":0  }}</div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>\r\n                    <a href=\"#orderform\" (click)=\"excluirItem(i)\"><img src=\"assets/img/excluir2.png\" width=\"15\" height=\"15\" alt=\"Excluir\"></a>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td>\r\n                  <div>\r\n                    <a href=\"#orderform\" (click)=\"adicionarItem()\"><img src=\"assets/img/mais2.png\" width=\"20\" height=\"20\" alt=\"Adicionar\"></a>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n\r\n            </tbody>\r\n          </table>\r\n\r\n        </div>\r\n\r\n\r\n        <!-- Dados pessoais -->\r\n        <div class=\"col-sm-6 col-md-6 contact-info\">\r\n\r\n          <!-- Cabeçalho dos métodos de pagamento -->\r\n          <p class=\"text-left\"><strong>DADOS PESSOAIS</strong></p>\r\n\r\n          <!-- Formulário de faturamento -->\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\">Nome</label>\r\n            <input [(ngModel)]=\"resumoPedido['no_cliente']\" name=\"no_cliente\" placeholder=\"Nome\" class=\"form-control input-lg\" type=\"text\" required>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4 col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">Telefone</label>\r\n                <input [(ngModel)]=\"resumoPedido['nu_telefone']\" id=\"nu_telefone\" name=\"nu_telefone\" placeholder=\"Telefone\" class=\"form-control input-lg\" type=\"text\" dropSpecialCharacters=\"false\" mask=\"000-000.00\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-8 col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\" >Email</label>\r\n                <input [(ngModel)]=\"resumoPedido['no_email']\" name=\"no_email\" placeholder=\"Seu e-mail\" class=\"form-control input-lg\" type=\"email\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <p><img src=\"https://stc.pagseguro.uol.com.br/public/img/banners/pagamento/todos_estatico_550_100.gif\" width=\"100%\" alt=\"Logotipos de meios de pagamento do PagSeguro\" title=\"Este site aceita pagamentos com as principais bandeiras e bancos, saldo em conta PagSeguro e boleto.\"></p>\r\n\r\n        </div>\r\n\r\n        <!-- Endereço de entregamento -->\r\n        <div class=\"col-sm-6 col-md-6\">\r\n\r\n          <!-- Cabeçalho do endereço -->\r\n          <p class=\"text-left\"><strong>SOBRE A ENTREGA</strong></p>\r\n\r\n          <!-- Formulário de endereço -->\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\">Rua</label>\r\n            <input [(ngModel)]=\"resumoPedido['no_endereco']\" name=\"no_endereco\" placeholder=\"Endereço\" class=\"form-control\" type=\"text\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\">Município</label>\r\n            <input [(ngModel)]=\"resumoPedido['no_municipio']\" name=\"no_municipio\" placeholder=\"Município\" class=\"form-control\" type=\"text\">\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 col-md-6 form-group\">\r\n                <select class=\"form-control input-lg\" [(ngModel)]=\"resumoPedido['sg_uf']\" name=\"sg_uf\">\r\n                  <option *ngFor=\"let opt of tableShipping\" [value]=\"opt.uf\">{{opt.uf}} - {{opt.nameUf}}</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-sm-6 col-md-6 form-group\">\r\n                <input [(ngModel)]=\"resumoPedido['nu_cep']\" name=\"nu_cep\" placeholder=\"CEP\" class=\"form-control\" type=\"text\">\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Resumo do pedido -->\r\n          <table class=\"table\">\r\n\r\n            <!-- Cabeçalho do resumo -->\r\n            <p class=\"text-left\"><strong>RESUMO DO PEDIDO</strong></p>\r\n\r\n            <!-- Cabeçalho do resumo -->\r\n            <tbody>\r\n              <tr>\r\n                <td>Cortinas (quantidade)</td>\r\n                <td></td>\r\n                <td class=\"text-right\">{{ getQtItens() }}</td>\r\n              </tr>\r\n              <tr>\r\n              <tr>\r\n                <td>Valor do frete:</td>\r\n                <td></td>\r\n                <td class=\"text-right\">{{getFrete() | currency:\"R$ \":0 }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Total (com frete):</td>\r\n                <td></td>\r\n                <td id=\"total\" class=\"text-right\">{{ getSomaTotal() | currency:\"R$ \":0 }}</td>\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n          <!-- Opções de compra / Checkout -->\r\n          <p><button name=\"submit\" type=\"submit\" class=\"btn btn-store btn-block\">Comprar (Pague-Seguro)</button></p>\r\n          <input type=\"hidden\" name=\"submitted\" id=\"submitted\" value=\"true\">\r\n\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__("../../../../../src/app/home/data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderComponent = (function () {
    function OrderComponent() {
        //Itens do pedido
        this.order = [
            { tpPrincipal: 0, tpBlackout: 0, height: 120, width: 200, tpSupport: 0, qt: 1, priceUnit: 250.00, totalItem: 250.00 }
        ];
        //Resumo pedido
        this.resumoPedido = {
            no_cliente: '',
            nu_telefone: '',
            no_email: '',
            no_endereco: '',
            no_municipio: '',
            sg_uf: 'RS',
            nu_cep: '',
            qt_itens: 0,
            vr_frete: 0,
            vr_total: 0
        };
        Object.assign(this, {
            tecidoPrincipal: __WEBPACK_IMPORTED_MODULE_1__data__["n" /* tecidoPrincipal */], tecidoBlackout: __WEBPACK_IMPORTED_MODULE_1__data__["m" /* tecidoBlackout */], tipoSuporte: __WEBPACK_IMPORTED_MODULE_1__data__["q" /* tipoSuporte */], tableShipping: __WEBPACK_IMPORTED_MODULE_1__data__["l" /* tableShipping */], parGerais: __WEBPACK_IMPORTED_MODULE_1__data__["h" /* parGerais */]
        });
    }
    OrderComponent.prototype.ngOnInit = function () { };
    //Possibilita incluir itens no pedido
    OrderComponent.prototype.adicionarItem = function () {
        this.order.push({ tpPrincipal: 0, tpBlackout: 0, height: 120, width: 200, tpSupport: 0, qt: 1, priceUnit: 250.00, totalItem: 250.00 });
    };
    //Possibilita excluir itens no pedido
    OrderComponent.prototype.excluirItem = function (i) {
        this.order.splice(i, 1);
    };
    //Possibilita calcular o preço de um item do pedido
    OrderComponent.prototype.getCalculoCortina = function (i) {
        if (this.order[i].tpPrincipal !== 0 || this.order[i].tpBlackout !== 0) {
            //Calcular área
            var area = (this.order[i]['width'] * this.order[i]['height']) / 10000;
            var valorCortinaPrincipal = 0;
            var valorCortinaBlackout = 0;
            //Calcular preço por tipo de cortina
            if (this.order[i].tpPrincipal !== 0) {
                valorCortinaPrincipal = this.obterPrecoTecidoPrincipal(this.order[i].tpPrincipal) * area;
            }
            ;
            if (this.order[i].tpBlackout !== 0) {
                valorCortinaBlackout = this.obterPrecoTecidoBlackout(this.order[i].tpBlackout) * area;
            }
            ;
            //Calcular item do pedido e armazenar os resultados
            this.order[i]['priceUnit'] = valorCortinaPrincipal + valorCortinaBlackout;
            this.order[i]['totalItem'] = this.order[i]['priceUnit'] * this.order[i]['qt'];
            //Retornar resultado
            return this.order[i]['totalItem'];
        }
        else {
            //Zerar preços no pedido
            this.order[i]['priceUnit'] = 0;
            this.order[i]['totalItem'] = 0;
            //Retornar zerado
            return 0;
        }
    };
    //Obtem preço do tecido para a cortina principal
    OrderComponent.prototype.obterPrecoTecidoPrincipal = function (i) {
        //criar lógica e campo no cadastro
        return 32;
    };
    //Obtem preço do tecido para a cortina blackout
    OrderComponent.prototype.obterPrecoTecidoBlackout = function (i) {
        //criar lógica e campo no cadastro
        return 32;
    };
    //Obtem a quantidade de itens do pedido
    OrderComponent.prototype.getQtItens = function () {
        this.resumoPedido.qt_itens = this.order.reduce(function (prevVal, elem) {
            return prevVal + (elem.qt);
        }, 0);
        return this.resumoPedido.qt_itens;
    };
    //Calcula o total do pedido, incluindo frete
    OrderComponent.prototype.getSomaTotal = function () {
        this.resumoPedido.vr_total = this.order.reduce(function (prevVal, elem) {
            return prevVal + (elem.priceUnit * elem.qt);
        }, 0);
        return this.resumoPedido.vr_total + this.resumoPedido.vr_frete;
    };
    //Calcula o valor do frete com base na UF e num valor fixo por UF
    OrderComponent.prototype.getFrete = function () {
        var _this = this;
        if (this.resumoPedido.sg_uf) {
            var i = this.tableShipping.filter(function (item) { return item.uf == _this.resumoPedido.sg_uf; });
            this.resumoPedido.vr_frete = i[0].price * this.resumoPedido.qt_itens;
        }
        else {
            this.resumoPedido.vr_frete = 0;
        }
        return this.resumoPedido.vr_frete;
    };
    OrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-order',
            template: __webpack_require__("../../../../../src/app/home/order/order.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\r\n  font-family: 'Amatic SC', cursive;\r\n  font-size: 48PX;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"products\" class=\" padding-top-bottom gray-bg\">\r\n  <div class=\"container\">\r\n    <header class=\"section-header text-center anima fade-up\">\r\n      <h2>PRODUTOS</h2>\r\n    </header>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div id=\"projects-container\" class=\"row\">\r\n\r\n      <!-- Galeria 1 -->\r\n      <article class=\"design product col-xs-12 col-sm-6 col-md-4 anima fade-up\">\r\n        <div class=\"img-box\">\r\n          <div class=\"hover-mask2\"></div>\r\n          <span class=\"product-icon icon-eye\"></span>\r\n          <img class=\"img-responsive project-image\" src=\"assets/img/product1.jpg\" alt=\"\">\r\n        </div>\r\n        <div class=\"product-info col-md-12\">\r\n          <div>\r\n            <h4 class=\"project-title\">{{galerias[0]['name']}}</h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"sr-only project-description\" data-oldprice=\"$800\" data-images=\"assets/img/01.jpg,assets/img/02.jpg,assets/img/03.jpg,assets/img/04.jpg,assets/img/05.jpg\">\r\n          <p>1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, varius sed dolor. Donec augue lacus, vulputate sed consectetur facilisis, interdum pharetra ligula. Nulla suscipit erat nibh, ut porttitor nisl dapibus eu.</p>\r\n        </div>\r\n      </article>\r\n\r\n      <!-- Galeria 2 -->\r\n      <article class=\"mock-up product col-xs-12 col-sm-6 col-md-4 anima fade-up d1\">\r\n        <div class=\"img-box\">\r\n          <div class=\"hover-mask2\"></div>\r\n          <span class=\"product-icon icon-eye\"></span>\r\n          <img class=\"img-responsive project-image\" src=\"assets/img/product2.jpg\" alt=\"\">\r\n        </div>\r\n        <div class=\"product-info col-md-12\">\r\n          <div>\r\n            <h4 class=\"project-title\">{{galerias[1]['name']}}</h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"sr-only project-description\" data-images=\"assets/img/06.jpg,assets/img/07.jpg,assets/img/08.jpg,assets/img/09.jpg\">\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, varius sed dolor. Donec augue lacus, vulputate sed consectetur facilisis, interdum pharetra ligula. Nulla suscipit erat nibh, ut porttitor nisl dapibus eu.</p>\r\n          <p>Phasellus porta eros vel lacus euismod consequat. Phasellus eleifend, nibh non feugiat hendrerit, lacus enim adipiscing eros, a pharetra erat neque eget est. Quisque vitae aliquet urna. Integer suscipit lectus eu enim porttitor fringilla. Ut blandit, urna in auctor euismod, arcu eros pharetra metus, a porta purus libero a nibh.</p>\r\n        </div>\r\n      </article>\r\n\r\n      <!-- Galeria 3 -->\r\n      <article class=\" icons product col-xs-12 col-sm-6 col-md-4 anima fade-up d2\">\r\n        <div class=\"img-box\">\r\n          <div class=\"hover-mask2\"></div>\r\n          <span class=\"product-icon icon-eye\"></span>\r\n          <img class=\"img-responsive project-image\" src=\"assets/img/product3.jpg\" alt=\"\">\r\n        </div>\r\n        <div class=\"product-info col-md-12\">\r\n          <div>\r\n            <h4 class=\"project-title\">{{galerias[2]['name']}}</h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"sr-only project-description\" data-oldprice=\"$700\" data-images=\"assets/img/10.jpg,assets/img/11.jpg,assets/img/12.jpg\">\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, varius sed dolor. Donec augue lacus, vulputate sed consectetur facilisis, interdum pharetra ligula. Nulla suscipit erat nibh, ut porttitor nisl dapibus eu.</p>\r\n          <p>Nam eget urna pellentesque nisl ultrices dapibus. Mauris accumsan vehicula nisl, sed tempus mauris facilisis eu. Donec a iaculis nisi, quis malesuada justo. Pellentesque ut enim sit amet ipsum dignissim egestas. Morbi tincidunt rhoncus urna eget placerat.</p>\r\n        </div>\r\n      </article>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"project-modal\" class=\"modal \" style=\"display: none;\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <a class=\"close\" href=\"#\" data-dismiss=\"modal\" ><i class=\"icon-close\"></i></a>\r\n          <div id=\"project-slider\" class=\"owl-carousel owl-theme\" data-navigation=\"true\" data-dots=\"true\" >\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div id=\"project-sidebar\" class=\"col-md-4 \">\r\n                <h2 id=\"sdbr-title\">Flat UI-Kit</h2>\r\n              </div>\r\n              <div id=\"project-content\" class=\"col-md-8 \">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, varius sed dolor. Donec augue lacus, vulputate sed consectetur facilisis, interdum pharetra ligula. Nulla suscipit erat nibh, ut porttitor nisl dapibus eu.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__("../../../../../src/app/home/data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = (function () {
    function ProductsComponent() {
        Object.assign(this, {
            galerias: __WEBPACK_IMPORTED_MODULE_1__data__["e" /* galerias */]
        });
    }
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-products',
            template: __webpack_require__("../../../../../src/app/home/products/products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/promotion/promotion.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"gray-bg padding-top-bottom \">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-md-8 anima fade-right\">\r\n        <h3 class=\"center cta-message\">{{promocao.tx_promocao}}</h3>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 text-center anima fade-left d1\">\r\n        <a class=\"btn btn-store cta-button smooth-scroll\" href=\"{{promocao.no_link}}\" >{{promocao.no_botao}}</a>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/promotion/promotion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__("../../../../../src/app/home/data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PromotionComponent = (function () {
    function PromotionComponent() {
        Object.assign(this, {
            promocao: __WEBPACK_IMPORTED_MODULE_1__data__["i" /* promocao */]
        });
    }
    PromotionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-promotion',
            template: __webpack_require__("../../../../../src/app/home/promotion/promotion.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PromotionComponent);
    return PromotionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/search-order/search-order.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"searchOrder\" class=\"light-typo dark-bg padding-top-bottom\">\r\n  <div class=\"container \">\r\n\r\n    <!--Cabeçalho -->\r\n    <header class=\"section-header text-center\">\r\n      <h2>{{searchOrder.ds_cabecalho}}</h2>\r\n      <h4>{{searchOrder.ds_descricao}}</h4>\r\n    </header>\r\n\r\n    <!--Form -->\r\n    <div class=\"row\">\r\n      <form id=\"searchOrder-form\" action=\"index.html\" method=\"POST\" class=\"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 \">\r\n\r\n        <!--Campo email -->\r\n        <div class=\"input-group\">\r\n          <input id=\"searchOrder-mail\" name=\"email\" placeholder=\"Informe seu e-mail\" class=\"form-control input-lg\" type=\"email\" >\r\n          <span class=\"input-group-btn\">\r\n            <button name=\"submit\" type=\"submit\" class=\"btn btn-store\" data-toggle=\"modal\" data-target=\"#modalResultados\">{{searchOrder.no_botao}}</button>\r\n          </span>\r\n        </div>\r\n\r\n        <!--Opção -->\r\n        <input type=\"hidden\" name=\"submitted\" id=\"searchOrderSubmitted\" value=\"true\">\r\n\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/search-order/search-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__("../../../../../src/app/home/data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchOrderComponent = (function () {
    function SearchOrderComponent() {
        Object.assign(this, {
            searchOrder: __WEBPACK_IMPORTED_MODULE_1__data__["j" /* searchOrder */]
        });
    }
    SearchOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-search-order',
            template: __webpack_require__("../../../../../src/app/home/search-order/search-order.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SearchOrderComponent);
    return SearchOrderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/search-results/search-results.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"modalResultados\" class=\"modal fade text-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"color-bg\">\r\n        <div class=\"container\">\r\n          <div class=\"row \">\r\n            <div class=\"col-xs-12 col-sm-12 col-md-12 color-bg light-typo\" id=\"9modal-bar-sresults\">\r\n              <h2 class=\"pull-left\">ÚLTIMOS PEDIDOS</h2>\r\n              <a class=\"close pull-right\" href=\"#\" data-dismiss=\"modal\" ><i class=\"icon-close\"></i></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"container\">\r\n        <div class=\"row \">\r\n          <table>\r\n            <thead>\r\n              <tr>\r\n                <th>Firstname</th>\r\n                <th>Lastname</th>\r\n                <th>Savings</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td col-sm-4>Peter</td>\r\n                <td col-sm-4>Griffin</td>\r\n                <td col-sm-4> $100</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Lois</td>\r\n                <td>Griffin</td>\r\n                <td>$150</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Joe</td>\r\n                <td>Swanson</td>\r\n                <td>$300</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Cleveland</td>\r\n                <td>Brown</td>\r\n                <td>$250</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/search-results/search-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__("../../../../../src/app/home/data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchResultsComponent = (function () {
    function SearchResultsComponent() {
        Object.assign(this, {
            ordersList: __WEBPACK_IMPORTED_MODULE_1__data__["g" /* ordersList */]
        });
    }
    SearchResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-search-results',
            template: __webpack_require__("../../../../../src/app/home/search-results/search-results.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/slideshow/slideshow.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"hero\" class=\"hero-slider light-typo full-height\" data-height=\"600\" >\r\n  <div id=\"hero-slider\" class=\"owl-carousel owl-theme\" data-autoplay=\"4000\" data-navigation=\"false\" data-dots=\"true\" data-transition=\"fadeOut\">\r\n\r\n    <!-- Slide 1 -->\r\n    <div class=\"item m-center\" style=\"background-image: url(assets/img/01.jpg);\">\r\n      <div class=\"center-box\">\r\n        <span class=\"overlay-bg\"></span>\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12 text-center anima fade-up\">\r\n              <div class=\"hero-unit\">\r\n                <img id=\"logo\" src=\"{{slides[0]['im_cabecalho']}}\" class=\"img-responsive text-center\" alt=\"shop logo\" width=\"300\">\r\n                <p>{{slides[0]['ds_texto']}}</p>\r\n                <ul class=\"social-links text-center\">\r\n                  <!-- <li><a href=\"#link\"><i class=\"icon-twitter\"></i></a></li> Caso queira habilitar o link para o twitter-->\r\n                  <li><a href=\"{{slides[0]['no_linkIconeSocial']}}\"><i class=\"{{slides[0]['im_iconeSocial']}}\"></i></a></li>\r\n                  <!-- <li><a href=\"#link\"><i class=\"icon-vimeo\"></i></a></li> Caso queira habilitar o link para o vimeo-->\r\n                </ul>\r\n                <a class=\"btn btn-store smooth-scroll\" href=\"{{slides[0]['no_linkBotao']}}\">{{slides[0]['no_botao']}}</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Slide 2 -->\r\n    <div class=\"item m-center\" style=\"background-image: url(assets/img/06.jpg);\">\r\n      <div class=\"center-box\">\r\n        <span class=\"overlay-bg\"></span>\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12 text-center anima fade-up\">\r\n              <div class=\"hero-unit\">\r\n                <h2>{{slides[1]['no_cabecalho']}}</h2>\r\n                <p>{{slides[1]['ds_texto']}}</p>\r\n                <a class=\"btn btn-store outline smooth-scroll\" href=\"{{slides[1]['no_linkBotao']}}\">{{slides[1]['no_botao']}}</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Slide 3 -->\r\n    <div class=\"item m-center\" style=\"background-image: url(assets/img/10.jpg);\">\r\n      <div class=\"center-box\">\r\n        <span class=\"overlay-bg\"></span>\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12 text-center anima fade-up\">\r\n              <div class=\"hero-unit\">\r\n                <h2>{{slides[2]['no_cabecalho']}}</h2>\r\n                <p>{{slides[2]['ds_textoParte1']}}</p><p>{{slides[2]['ds_textoParte2']}}</p>\r\n                <a class=\"btn btn-store outline smooth-scroll\" href=\"{{slides[2]['no_linkBotao']}}\">{{slides[2]['no_botao']}}</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/slideshow/slideshow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideshowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__("../../../../../src/app/home/data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlideshowComponent = (function () {
    function SlideshowComponent() {
        Object.assign(this, {
            slides: __WEBPACK_IMPORTED_MODULE_1__data__["k" /* slides */]
        });
    }
    SlideshowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-slideshow',
            template: __webpack_require__("../../../../../src/app/home/slideshow/slideshow.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SlideshowComponent);
    return SlideshowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/terms/terms.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"modalTermos\" class=\"modal fade text-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"color-bg\">\r\n        <div class=\"container\">\r\n          <div class=\"row \">\r\n            <div class=\"col-xs-12 col-sm-12 col-md-12 color-bg light-typo\" id=\"9modal-bar\">\r\n              <h2 class=\"pull-left\">TERMOS & CONDIÇÕES</h2>\r\n              <a class=\"close pull-right\" href=\"#\" data-dismiss=\"modal\" ><i class=\"icon-close\"></i></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"container\">\r\n        <div class=\"row \">\r\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n            <div *ngFor=\"let esquerda of termosEsq\">\r\n              <h3>{{esquerda.no_cabecalho}}</h3>\r\n              <p>{{esquerda.ds_texto}}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n            <div *ngFor=\"let direita of termosDir\">\r\n              <h3>{{direita.no_cabecalho}}</h3>\r\n              <p>{{direita.ds_texto}}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xs-12 col-sm-12 col-md-12 text-center\" >\r\n            <a class=\"btn btn-store\" href=\"#\" data-dismiss=\"modal\">Voltar para a loja</a><br><br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/terms/terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__("../../../../../src/app/home/data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsComponent = (function () {
    function TermsComponent() {
        Object.assign(this, {
            termosEsq: __WEBPACK_IMPORTED_MODULE_1__data__["p" /* termosEsq */], termosDir: __WEBPACK_IMPORTED_MODULE_1__data__["o" /* termosDir */]
        });
    }
    TermsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-terms',
            template: __webpack_require__("../../../../../src/app/home/terms/terms.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/testimonial/testimonial.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"testimonial\" class=\"padding-top-bottom image-bg light-typo\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"testimonial\">\r\n      <div id=\"carousel-example-generic\" class=\"carousel slide bs-docs-carousel-example\" data-interval=\"10000\">\r\n        <ol class=\"carousel-indicators\">\r\n          <li *ngFor=\"let frase of frases; let first=first; let i=index\" data-target=\"#carousel-example-generic\" [attr.data-slide-to]=\"i\" class=\"{{frase.ic_default ? 'active' : ''}}\"></li>\r\n        </ol>\r\n        <div class=\"carousel-inner\">\r\n          <div *ngFor=\"let frase of frases; let i = index\" class=\"{{frase.ic_default ? 'item active' : 'item'}}\">\r\n            <h1>{{frase.ds_frase1}}<br>{{frase.ds_frase2}}</h1>\r\n            <br>\r\n            <h3>{{frase.no_autor}}</h3>\r\n          </div>\r\n        </div>\r\n        <br><br><br>\r\n      </div>\r\n    </div>\r\n    <div class=\"overlay-bg\">\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/testimonial/testimonial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__("../../../../../src/app/home/data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestimonialComponent = (function () {
    function TestimonialComponent() {
        Object.assign(this, {
            frases: __WEBPACK_IMPORTED_MODULE_1__data__["d" /* frases */]
        });
    }
    TestimonialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-testimonial',
            template: __webpack_require__("../../../../../src/app/home/testimonial/testimonial.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialComponent);
    return TestimonialComponent;
}());



/***/ }),

/***/ "../../../../../src/app/orders/orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "Orders (página)\r\n"

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrdersComponent = (function () {
    function OrdersComponent() {
    }
    OrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-orders',
            template: __webpack_require__("../../../../../src/app/orders/orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/orders/orders.component.css")]
        })
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/orders/orders.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__orders_routing__ = __webpack_require__("../../../../../src/app/orders/orders.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__orders_component__ = __webpack_require__("../../../../../src/app/orders/orders.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var OrdersModule = (function () {
    function OrdersModule() {
    }
    OrdersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__orders_routing__["a" /* OrdersRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__orders_component__["a" /* OrdersComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__orders_component__["a" /* OrdersComponent */]
            ]
        })
    ], OrdersModule);
    return OrdersModule;
}());



/***/ }),

/***/ "../../../../../src/app/orders/orders.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders_component__ = __webpack_require__("../../../../../src/app/orders/orders.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__orders_component__["a" /* OrdersComponent */]
    }
];
var OrdersRoutingModule = (function () {
    function OrdersRoutingModule() {
    }
    OrdersRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], OrdersRoutingModule);
    return OrdersRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/thanks/thanks.component.html":
/***/ (function(module, exports) {

module.exports = "Thanks (página)\r\n"

/***/ }),

/***/ "../../../../../src/app/thanks/thanks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThanksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThanksComponent = (function () {
    function ThanksComponent() {
    }
    ThanksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-thanks',
            template: __webpack_require__("../../../../../src/app/thanks/thanks.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ThanksComponent);
    return ThanksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/thanks/thanks.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksModule", function() { return ThanksModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__thanks_routing__ = __webpack_require__("../../../../../src/app/thanks/thanks.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__thanks_component__ = __webpack_require__("../../../../../src/app/thanks/thanks.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ThanksModule = (function () {
    function ThanksModule() {
    }
    ThanksModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__thanks_routing__["a" /* ThanksRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__thanks_component__["a" /* ThanksComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__thanks_component__["a" /* ThanksComponent */]
            ]
        })
    ], ThanksModule);
    return ThanksModule;
}());



/***/ }),

/***/ "../../../../../src/app/thanks/thanks.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThanksRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thanks_component__ = __webpack_require__("../../../../../src/app/thanks/thanks.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__thanks_component__["a" /* ThanksComponent */]
    }
];
var ThanksRoutingModule = (function () {
    function ThanksRoutingModule() {
    }
    ThanksRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], ThanksRoutingModule);
    return ThanksRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map