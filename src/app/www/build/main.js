webpackJsonp([3],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalharRelatoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_relatos_service__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetalharRelatoPage = (function () {
    function DetalharRelatoPage(navCtrl, navParams, geolocation, relatosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.relatosService = relatosService;
        this.categoria = navParams.get('categoria');
    }
    DetalharRelatoPage.prototype.relatar = function () {
        var _this = this;
        var mapaDeTiposDeRelato = {
            'Acidente': 0,
            'Roubo': 1,
            'Incêndio': 2,
        };
        this.geolocation.getCurrentPosition()
            .then(function (geoposition) {
            var dados = {
                Data: new Date(),
                Descricao: _this.observacoesElement.value,
                EmailDoUsuario: 'email@teste.com.br',
                Latitude: geoposition.coords.latitude.toString().replace(',', '.'),
                Longitude: geoposition.coords.longitude.toString().replace(',', '.'),
                TipoDeRelato: mapaDeTiposDeRelato[_this.categoria.nome]
            };
            _this.relatosService.relatar(dados).then(function (response) { return _this.navegarParaHome(); });
        });
    };
    DetalharRelatoPage.prototype.cancelar = function () {
        this.navegarParaHome();
    };
    DetalharRelatoPage.prototype.navegarParaHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('observacoes'),
        __metadata("design:type", Object)
    ], DetalharRelatoPage.prototype, "observacoesElement", void 0);
    DetalharRelatoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhar-relato',template:/*ion-inline-start:"/home/renan/ProjetosGitHub/besafedude/src/app/src/pages/detalhar-relato/detalhar-relato.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Detalhar relato</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list inset>\n    <ion-item>\n      <ion-card class="categoria" color="primary">\n        <ion-card-content>\n          <ion-icon class="icone" name="{{ categoria.icone }}"></ion-icon>\n          <span>{{ categoria.nome }}</span>\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Observações</ion-label>\n      <ion-textarea #observacoes id="observacoes"></ion-textarea>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button clear (click)=cancelar()>Cancelar</button>\n  <button ion-button secondary (click)=relatar()>Enviar</button>\n</ion-content>\n'/*ion-inline-end:"/home/renan/ProjetosGitHub/besafedude/src/app/src/pages/detalhar-relato/detalhar-relato.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__services_relatos_service__["a" /* RelatosService */]])
    ], DetalharRelatoPage);
    return DetalharRelatoPage;
}());

//# sourceMappingURL=detalhar-relato.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsuarioPage = (function () {
    function UsuarioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsuarioPage');
    };
    UsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usuario',template:/*ion-inline-start:"/home/renan/ProjetosGitHub/besafedude/src/app/src/pages/usuario/usuario.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Usuário</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row class="perfil centered">\n    <ion-col><ion-icon name="contact"></ion-icon></ion-col>\n  </ion-row>\n\n  <h1 class="centered">Renan S Moreira</h1>\n  <p class="centered">renanmoreira@digix.com.br</p>\n</ion-content>\n'/*ion-inline-end:"/home/renan/ProjetosGitHub/besafedude/src/app/src/pages/usuario/usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], UsuarioPage);
    return UsuarioPage;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detalhar-relato/detalhar-relato.module": [
		280,
		2
	],
	"../pages/relatar/relatar.module": [
		279,
		1
	],
	"../pages/usuario/usuario.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__relatar_relatar__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuario_usuario__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__relatar_relatar__["a" /* RelatarPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__usuario_usuario__["a" /* UsuarioPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/renan/ProjetosGitHub/besafedude/src/app/src/pages/tabs/tabs.html"*/'<ion-tabs color="primary">\n  <ion-tab [root]="tab1Root" tabTitle="Relatos" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Relatar" tabIcon="add-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Usuário" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/renan/ProjetosGitHub/besafedude/src/app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_relatar_relatar__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_detalhar_relato_detalhar_relato__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_usuario_usuario__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_relatos_service__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_relatar_relatar__["a" /* RelatarPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_detalhar_relato_detalhar_relato__["a" /* DetalharRelatoPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_usuario_usuario__["a" /* UsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/relatar/relatar.module#RelatarPageModule', name: 'RelatarPage', segment: 'relatar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhar-relato/detalhar-relato.module#DetalharRelatoPageModule', name: 'DetalharRelatoPage', segment: 'detalhar-relato', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuario/usuario.module#UsuarioPageModule', name: 'UsuarioPage', segment: 'usuario', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_relatar_relatar__["a" /* RelatarPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_detalhar_relato_detalhar_relato__["a" /* DetalharRelatoPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_usuario_usuario__["a" /* UsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_13__services_relatos_service__["a" /* RelatosService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    if (lat2 === -20 && lon2 === -54)
        return 0;
    var R = 6371;
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c * 100) / 100;
}
function deg2rad(deg) {
    return deg * (Math.PI / 180);
}
/* harmony default export */ __webpack_exports__["a"] = ({
    calcularDistancia: function (lat1, lon1, lat2, lon2) {
        return getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);
    }
});
//# sourceMappingURL=distancia.service.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/renan/ProjetosGitHub/besafedude/src/app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/renan/ProjetosGitHub/besafedude/src/app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhar_relato_detalhar_relato__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RelatarPage = (function () {
    function RelatarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.categorias = [
            { nome: 'Incêndio', icone: 'flame' },
            { nome: 'Acidente', icone: 'car' },
            { nome: 'Roubo', icone: 'cash' },
        ];
    }
    RelatarPage.prototype.iniciarRelato = function (categoria) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detalhar_relato_detalhar_relato__["a" /* DetalharRelatoPage */], {
            categoria: categoria
        });
    };
    RelatarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-relatar',template:/*ion-inline-start:"/home/renan/ProjetosGitHub/besafedude/src/app/src/pages/relatar/relatar.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Relatar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 *ngFor="let categoria of categorias" (click)=iniciarRelato(categoria)>\n        <ion-card class="categoria" color="primary">\n          <ion-card-content>\n            <ion-icon class="icone" name="{{ categoria.icone }}"></ion-icon>\n            <span>{{ categoria.nome }}</span>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/renan/ProjetosGitHub/besafedude/src/app/src/pages/relatar/relatar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RelatarPage);
    return RelatarPage;
}());

//# sourceMappingURL=relatar.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__relatar_relatar__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_relatos_service__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, toastCtrl, relatosService, geolocation) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.relatosService = relatosService;
        this.geolocation = geolocation;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadLocation()
            .then(function (geoposition) {
            _this.loadMap(geoposition);
            _this.loadMarkers(geoposition);
        })
            .catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    HomePage.prototype.loadLocation = function () {
        return this.geolocation.getCurrentPosition();
    };
    HomePage.prototype.loadMap = function (geoposition) {
        var latLng = new google.maps.LatLng(geoposition.coords.latitude, geoposition.coords.longitude);
        console.log(geoposition.coords);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.markDaPosicaoAtual = new google.maps.Marker({
            position: latLng,
            map: this.map,
        });
    };
    HomePage.prototype.loadMarkers = function (geoposition) {
        var _this = this;
        this.relatosService.obterTodos(geoposition.coords)
            .then(function (relatos) {
            _this.relatosProximos = relatos.proximos;
            _this.relatosDistantes = relatos.distantes.slice(0, 10);
            console.log(relatos);
            _this.mapearRelatos(_this.relatosProximos);
            _this.mapearRelatos(_this.relatosDistantes);
            _this.exibirAlerta();
        });
    };
    HomePage.prototype.mapearRelatos = function (relatos) {
        for (var _i = 0, relatos_1 = relatos; _i < relatos_1.length; _i++) {
            var relato = relatos_1[_i];
            var latLng = new google.maps.LatLng(parseFloat(relato.Latitude), parseFloat(relato.Longitude));
            new google.maps.Marker({
                position: latLng,
                map: this.map,
                icon: "/assets/icon/" + relato.Icone + ".png",
                title: relato.Descricao
            });
        }
    };
    HomePage.prototype.exibirAlerta = function () {
        var relatoMaisProximo = this.relatosProximos[0];
        var descricao = relatoMaisProximo.Descricao;
        this.toastCtrl.create({
            message: "H\u00E1 um relato de\n        " + (descricao.charAt(0).toLowerCase() + descricao.slice(1)) + "\n          pr\u00F3ximo \u00E0 voc\u00EA, considere mudar de rota ou siga com cautela\n      ",
            duration: 7000,
            position: 'top'
        }).present();
    };
    HomePage.prototype.mudarLocal = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        this.markDaPosicaoAtual.setPosition(latLng);
        this.map.setCenter(latLng);
        this.loadMarkers({ coords: { latitude: lat, longitude: lng } });
    };
    HomePage.prototype.relatar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__relatar_relatar__["a" /* RelatarPage */]);
    };
    HomePage.prototype.confirmarRelato = function (relato) {
        relato.Confirmado = !relato.Confirmado;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/renan/ProjetosGitHub/besafedude/src/app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Relatos perto de você</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button secondary (click)=relatar() class="relatar">Relatar um problema</button>\n  <div #map id="map" class="mapa"></div>\n\n  <ion-icon class="icone" name="compass" (click)="mudarLocal(-20.4824596, -54.601524899999994)"></ion-icon>\n  <ion-icon class="icone" name="compass" (click)="mudarLocal(-20.458544, -54.586520)"></ion-icon>\n  <ion-icon class="icone" name="compass" (click)="mudarLocal(-20.482404, -54.584582)"></ion-icon>\n  <ion-icon class="icone" name="compass" (click)="mudarLocal(-20.496799, -54.608195)"></ion-icon>\n\n  <ion-item-group class="zebra">\n    <ion-item-divider>Perto de você</ion-item-divider>\n    <ion-item *ngFor="let relato of relatosProximos" class="zebra-item">\n      <ion-avatar item-start class="avatar">\n        <ion-icon class="icone" name="{{relato.Icone}}"></ion-icon>\n      </ion-avatar>\n\n      <div class="informacoes-do-relato">\n        <h2>{{relato.Descricao}}</h2>\n        <p>{{relato.Distancia}} km</p>\n      </div>\n\n      <div class="confirmar-relato">\n        <ion-icon\n          class="icone"\n          [class.relatoConfirmado]="relato.Confirmado"\n          name="thumbs-up"\n          (click)=confirmarRelato(relato)></ion-icon>\n      </div>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group class="zebra">\n    <ion-item-divider>Mais distantes</ion-item-divider>\n    <ion-item *ngFor="let relato of relatosDistantes" class="zebra-item">\n      <ion-avatar item-start class="avatar">\n        <ion-icon class="icone" name="{{relato.Icone}}"></ion-icon>\n      </ion-avatar>\n\n      <h2>{{relato.Descricao}}</h2>\n      <p>{{relato.Distancia}} km</p>\n    </ion-item>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/home/renan/ProjetosGitHub/besafedude/src/app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_relatos_service__["a" /* RelatosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_relatos_service__["a" /* RelatosService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__distancia_service__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RelatosService = (function () {
    function RelatosService(http) {
        this.http = http;
    }
    RelatosService.prototype.obterTodos = function (coordenadasAtuais) {
        var http = this.http;
        return new Promise(function (resolve) {
            http.get('http://besafedude.digix.com.br/Relato/ObterTodos')
                .subscribe(function (response) {
                var relatos = JSON.parse(response._body);
                resolve(detalharRelatos(coordenadasAtuais, relatos));
            });
        });
    };
    RelatosService.prototype.relatar = function (relato) {
        var http = this.http;
        return new Promise(function (resolve) {
            http.post('http://besafedude.digix.com.br/Relato/Relatar', relato)
                .subscribe(function (response) {
                resolve(response);
            });
        });
    };
    RelatosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], RelatosService);
    return RelatosService;
}());

function detalharRelatos(coordenadasAtuais, relatos) {
    var distanciaMaximaDeProximidade = 1;
    var mapaDeDescricoes = {
        0: 'Acidente',
        1: 'Roubo',
        2: 'Incêndio',
    };
    var mapaDeIcones = {
        0: 'car',
        1: 'cash',
        2: 'flame',
    };
    var relatosMapeadosComOrdenacao = relatos
        .map(function (relato) {
        relato.Descricao = mapaDeDescricoes[relato.TipoDeRelato];
        relato.Icone = mapaDeIcones[relato.TipoDeRelato];
        relato.Distancia = __WEBPACK_IMPORTED_MODULE_2__distancia_service__["a" /* default */].calcularDistancia(parseFloat(coordenadasAtuais.latitude), parseFloat(coordenadasAtuais.longitude), parseFloat(relato.Latitude), parseFloat(relato.Longitude));
        return relato;
    })
        .sort(function (relato1, relato2) {
        if (relato1.Distancia > relato2.Distancia)
            return 1;
        if (relato1.Distancia < relato2.Distancia)
            return -1;
        return 0;
    });
    return {
        proximos: relatosMapeadosComOrdenacao.filter(function (relato) { return relato.Distancia <= distanciaMaximaDeProximidade; }),
        distantes: relatosMapeadosComOrdenacao.filter(function (relato) { return relato.Distancia > distanciaMaximaDeProximidade; }),
    };
}
//# sourceMappingURL=relatos.service.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map