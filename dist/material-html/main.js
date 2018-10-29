(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nmain {\r\n\tpadding: var(--spacing-xl);\r\n}\r\n\r\nheader {\r\n\tbackground: #212121;\r\n\tcolor: rgba(255, 255, 255, 0.8);\r\n\tfont-weight: 500;\r\n}\r\n\r\n.material-logo {\r\n\tbackground: url(/assets/mio-logo-sprite.png) 100% 50%/auto 100% no-repeat;\r\n\tdisplay: block;\r\n\theight: 24px;\r\n\tmargin-right: 16px;\r\n\twidth: 24px;\r\n\t-webkit-animation: mioLogo 1.6s steps(96) forwards;\r\n\t        animation: mioLogo 1.6s steps(96) forwards;\r\n\tbackground-position: 100% 50%;\r\n}\r\n\r\n.github-icon {\r\n\theight: 24px;\r\n}\r\n\r\nnav {\r\n\tbackground: var(--color-bg-primary);\r\n\tpadding: var(--spacing-s);\r\n}\r\n\r\nnav small {\r\n\tmargin-top: var(--spacing-s);\r\n\tmargin-bottom: var(--spacing-xs);\r\n}\r\n\r\n.nav-block {\r\n\tmargin: var(--spacing-s);\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <header>\r\n  <!-- left -->\r\n  <div class=\"flexVAlign\">\r\n    <i class=\"material-logo\"></i>\r\n    <span>Material HTML</span>\r\n  </div>\r\n  <!-- right -->\r\n  <a href=\"https://github.com/cedvdb/material-html\">\r\n    <img class=\"github-icon pointer\" src=\"/assets/github-icon.svg\"/>\r\n  </a>\r\n</header>\r\n\r\n<main class=\"mainCtnr\">\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n</main>\r\n<nav class=\"open\">\r\n  <small>Guides</small>\r\n  <a class=\"button\" routerLink=\"getting-started\">Getting Started</a>\r\n  <a class=\"button\" routerLink=\"palette\">palette</a>\r\n  <a class=\"button\" routerLink=\"helpers\">Helper classes</a>\r\n\r\n  <small>Elements</small>\r\n  <a class=\"button\" routerLink=\"typography\">Typography</a>\r\n  <!-- <a class=\"button\" routerLink=\"header\">Headers</a> -->\r\n  <a class=\"button\" routerLink=\"elevation\">Elevation</a>\r\n  <a class=\"button\" routerLink=\"menu\">Menu</a>\r\n  <a class=\"button\" routerLink=\"list\">Lists</a>\r\n  <a class=\"button\" routerLink=\"card\">Card</a>\r\n  <a class=\"button\" routerLink=\"button\">Buttons</a>\r\n  <!-- <a class=\"button\" routerLink=\"input\">Inputs</a> -->\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_typography_page_typography_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/typography-page/typography-page.component */ "./src/app/pages/typography-page/typography-page.component.ts");
/* harmony import */ var _pages_headers_page_headers_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/headers-page/headers-page.component */ "./src/app/pages/headers-page/headers-page.component.ts");
/* harmony import */ var _pages_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/list-page/list-page.component */ "./src/app/pages/list-page/list-page.component.ts");
/* harmony import */ var _pages_elevation_page_elevation_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/elevation-page/elevation-page.component */ "./src/app/pages/elevation-page/elevation-page.component.ts");
/* harmony import */ var _pages_buttons_page_buttons_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/buttons-page/buttons-page.component */ "./src/app/pages/buttons-page/buttons-page.component.ts");
/* harmony import */ var _pages_getting_started_page_getting_started_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/getting-started-page/getting-started-page.component */ "./src/app/pages/getting-started-page/getting-started-page.component.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _pages_card_page_card_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/card-page/card-page.component */ "./src/app/pages/card-page/card-page.component.ts");
/* harmony import */ var _pages_palette_palette_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/palette/palette.component */ "./src/app/pages/palette/palette.component.ts");
/* harmony import */ var _pages_menu_page_menu_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/menu-page/menu-page.component */ "./src/app/pages/menu-page/menu-page.component.ts");
/* harmony import */ var _pages_helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/helper-classes/helper-classes.component */ "./src/app/pages/helper-classes/helper-classes.component.ts");
/* harmony import */ var _pages_inputs_page_inputs_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/inputs-page/inputs-page.component */ "./src/app/pages/inputs-page/inputs-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_10__["PagesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', pathMatch: 'full', redirectTo: 'getting-started' },
                    { path: 'typography', component: _pages_typography_page_typography_page_component__WEBPACK_IMPORTED_MODULE_4__["TypographyPageComponent"] },
                    { path: 'header', component: _pages_headers_page_headers_page_component__WEBPACK_IMPORTED_MODULE_5__["HeadersPageComponent"] },
                    { path: 'list', component: _pages_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_6__["ListPageComponent"] },
                    { path: 'elevation', component: _pages_elevation_page_elevation_page_component__WEBPACK_IMPORTED_MODULE_7__["ElevationPageComponent"] },
                    { path: 'button', component: _pages_buttons_page_buttons_page_component__WEBPACK_IMPORTED_MODULE_8__["ButtonsPageComponent"] },
                    { path: 'getting-started', component: _pages_getting_started_page_getting_started_page_component__WEBPACK_IMPORTED_MODULE_9__["GettingStartedPageComponent"] },
                    { path: 'card', component: _pages_card_page_card_page_component__WEBPACK_IMPORTED_MODULE_11__["CardPageComponent"] },
                    { path: 'palette', component: _pages_palette_palette_component__WEBPACK_IMPORTED_MODULE_12__["PaletteComponent"] },
                    { path: 'menu', component: _pages_menu_page_menu_page_component__WEBPACK_IMPORTED_MODULE_13__["MenuPageComponent"] },
                    { path: 'helpers', component: _pages_helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_14__["HelperClassesComponent"] },
                    { path: 'input', component: _pages_inputs_page_inputs_page_component__WEBPACK_IMPORTED_MODULE_15__["InputsPageComponent"] },
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/code/code.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/code/code.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre>\n\t<code #code class=\"lang-{{ lang }}\">\n\t\t<ng-content></ng-content>\n\t</code>\n</pre>"

/***/ }),

/***/ "./src/app/components/code/code.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/code/code.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/code/code.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/code/code.component.ts ***!
  \***************************************************/
/*! exports provided: CodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return CodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _code_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code.service */ "./src/app/components/code/code.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CodeComponent = /** @class */ (function () {
    function CodeComponent(element, codeService) {
        this.element = element;
        this.codeService = codeService;
        /** event emitters for error and loaded event */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(CodeComponent.prototype, "txt", {
        /** text transformed into code */
        get: function () { return this._txt; },
        set: function (value) {
            this._txt = value;
            this.codeElement.nativeElement.innerHTML = value;
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CodeComponent.prototype, "src", {
        /** source of an api we can call to get the code */
        get: function () { return this._src; },
        set: function (value) {
            var _this = this;
            this._src = value;
            this.codeService
                .fetchSrc(value)
                .then(function (txt) {
                _this.render();
                _this.load.emit(txt);
            })
                .catch(function (error) { return _this.error.emit(error); });
        },
        enumerable: true,
        configurable: true
    });
    CodeComponent.prototype.ngAfterViewInit = function () {
        // when transclusion is used we only render it once at the start
        // if an @Input is used instead then we will render every change
        if (this.isTranscluded()) {
            this.render();
        }
    };
    /** renders the code  */
    CodeComponent.prototype.render = function () {
        this.codeService.render(this.codeElement.nativeElement);
    };
    /** whether the text to be translated into markdown is passed via transclusion */
    CodeComponent.prototype.isTranscluded = function () {
        return !this.txt && !this.src;
    };
    CodeComponent.prototype.ngAfterContentChecked = function () {
        this.codeElement.innerHTML = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('code'),
        __metadata("design:type", Object)
    ], CodeComponent.prototype, "codeElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CodeComponent.prototype, "lang", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], CodeComponent.prototype, "txt", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], CodeComponent.prototype, "src", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CodeComponent.prototype, "error", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CodeComponent.prototype, "load", void 0);
    CodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'x-code',
            template: __webpack_require__(/*! ./code.component.html */ "./src/app/components/code/code.component.html"),
            styles: [__webpack_require__(/*! ./code.component.scss */ "./src/app/components/code/code.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _code_service__WEBPACK_IMPORTED_MODULE_1__["CodeService"]])
    ], CodeComponent);
    return CodeComponent;
}());



/***/ }),

/***/ "./src/app/components/code/code.service.ts":
/*!*************************************************!*\
  !*** ./src/app/components/code/code.service.ts ***!
  \*************************************************/
/*! exports provided: CodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeService", function() { return CodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highlightjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlightjs */ "./node_modules/highlightjs/highlight.pack.js");
/* harmony import */ var highlightjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlightjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CodeService = /** @class */ (function () {
    function CodeService() {
    }
    CodeService.prototype.render = function (el) {
        highlightjs__WEBPACK_IMPORTED_MODULE_1__["highlightBlock"](el);
    };
    /** fetch the src and gives back the content in a good format that can then be rendered
     * (using fetch to not rely on the http client)
    */
    CodeService.prototype.fetchSrc = function (src) {
        return fetch(src)
            .then(function (r) { return r.text(); });
    };
    CodeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CodeService);
    return CodeService;
}());



/***/ }),

/***/ "./src/app/pages/buttons-page/buttons-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/buttons-page/buttons-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n\theight: 100%;\r\n}\r\n\r\nbutton {\r\n\tmargin: var(--spacing-s);\r\n}"

/***/ }),

/***/ "./src/app/pages/buttons-page/buttons-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/buttons-page/buttons-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<section>\n\t<header>Button</header>\n\n\t<main>\n\t\tButtons can be nicely combined with elevation and background classes to have a variety of button\n\n\t\t<h6>normal button</h6>\n\n\t\t<button>empty</button>\n\t\t<button class=\"primary\">.primary</button>\n\n\t\t<h6>raised button</h6>\n\t\t<button class=\"z-1\">z-1</button>\n\t\t<button class=\"primary z-h\">z-h</button>\n\n\t\t<h6>backgrounds</h6>\n\t\t<button class=\"primary\">primary</button>\n\t\t<button class=\"accent\">accent</button>\n\t\t<button class=\"warn\">warn</button>\n\t\t<button class=\"success\">success</button>\n\t</main>\n\n</section>\n"

/***/ }),

/***/ "./src/app/pages/buttons-page/buttons-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/buttons-page/buttons-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ButtonsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsPageComponent", function() { return ButtonsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonsPageComponent = /** @class */ (function () {
    function ButtonsPageComponent() {
    }
    ButtonsPageComponent.prototype.ngOnInit = function () {
    };
    ButtonsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons-page',
            template: __webpack_require__(/*! ./buttons-page.component.html */ "./src/app/pages/buttons-page/buttons-page.component.html"),
            styles: [__webpack_require__(/*! ./buttons-page.component.css */ "./src/app/pages/buttons-page/buttons-page.component.css")],
            host: {
                class: 'flexCenter'
            }
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsPageComponent);
    return ButtonsPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/card-page/card-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/card-page/card-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.example {\r\n\twidth: 400px;\r\n\theight: 610px;\r\n\tmargin-left: 1rem;\r\n\tmargin-right: 1rem;\r\n}"

/***/ }),

/***/ "./src/app/pages/card-page/card-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/card-page/card-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"flexCenter\">\n  <section class=\"example\">\n    <img src=\"https://images.pexels.com/photos/375903/pexels-photo-375903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\"/>\n    <header>Example</header>\n    <main>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n    </main>\n    <footer class=\"flexEnd\">\n      <button>cancel</button>\n      <span class=\"mg-xs spacer\"></span>\n      <button class=\"primary\">ok</button>\n    </footer>\n  </section>\n\n  <section class=\"example\">\n      <img src=\"https://images.pexels.com/photos/714023/pexels-photo-714023.jpeg?cs=srgb&dl=dark-dirt-road-driving-714023.jpg&fm=jpg\"/>\n      <header>Example</header>\n      <main>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      </main>\n      <footer class=\"flexEnd\">\n        <button>cancel</button>\n        <span class=\"mg-xs spacer\"></span>\n        <button class=\"primary\">ok</button>\n      </footer>\n    </section>\n</div>\n\n<section>\n  <header>Card</header>\n  <main>\n    Cards are surfaces that display content and actions on a single topic.\n\n    They should be easy to scan for relevant and actionable information.\n    Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.\n  </main>\n\n</section>\n\n<section>\n  <main>\n    A card is represented with the html tag &lt;section&gt;, they can have a &lt;img&gt;, a &lt;header&gt; a &lt;main&gt; and a &lt;footer&gt;\n  </main>\n</section>\n\n"

/***/ }),

/***/ "./src/app/pages/card-page/card-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/card-page/card-page.component.ts ***!
  \********************************************************/
/*! exports provided: CardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageComponent", function() { return CardPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardPageComponent = /** @class */ (function () {
    function CardPageComponent() {
    }
    CardPageComponent.prototype.ngOnInit = function () {
    };
    CardPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-page',
            template: __webpack_require__(/*! ./card-page.component.html */ "./src/app/pages/card-page/card-page.component.html"),
            styles: [__webpack_require__(/*! ./card-page.component.css */ "./src/app/pages/card-page/card-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardPageComponent);
    return CardPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/elevation-page/elevation-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/elevation-page/elevation-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"mg-l\">\n  <header class=\"primary\">\n    Elevation classes\n  </header>\n  <main>\n    Here are the different elevation class you can use to elevate your elements.\n    Elevation goes from 1 to 12 and are preceded with 'z-'. example:\n  </main>\n</section>\n\n<div class=\"cardCtnr flex flexWrap\">\n  <section *ngFor=\"let level of levels\" class=\"z-{{ level }} mg-m flexCenter\">\n    <span>z-{{ level }}</span>\n  </section>\n</div>\n\n<section class=\"mg-l\">\n  <header class=\"primary\">\n    Special Elevation classes\n  </header>\n  <main>\n    Here are the different elevation class that have a special behavior. For example z-h applies elevation on hover, z-a on active\n  </main>\n</section>\n\n<div class=\"cardCtnr flex flexWrap\">\n  <section class=\"z-h flexCenter mg-m\">\n    <span>z-h</span>\n  </section>\n\n  <section class=\"z-a flexCenter mg-m\">\n    <span>z-a</span>\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/pages/elevation-page/elevation-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/elevation-page/elevation-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardCtnr section {\n  box-sizing: border-box;\n  width: 300px;\n  height: 300px; }\n"

/***/ }),

/***/ "./src/app/pages/elevation-page/elevation-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/elevation-page/elevation-page.component.ts ***!
  \******************************************************************/
/*! exports provided: ElevationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElevationPageComponent", function() { return ElevationPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElevationPageComponent = /** @class */ (function () {
    function ElevationPageComponent() {
        this.levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        this.code = "\n<section class=\"z-1\"> <section>\n";
    }
    ElevationPageComponent.prototype.ngOnInit = function () {
    };
    ElevationPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-elevation-page',
            template: __webpack_require__(/*! ./elevation-page.component.html */ "./src/app/pages/elevation-page/elevation-page.component.html"),
            styles: [__webpack_require__(/*! ./elevation-page.component.scss */ "./src/app/pages/elevation-page/elevation-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ElevationPageComponent);
    return ElevationPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/getting-started-page/getting-started-page.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/getting-started-page/getting-started-page.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "code {\r\n\tcolor: var(--color-primary);\r\n}"

/***/ }),

/***/ "./src/app/pages/getting-started-page/getting-started-page.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/getting-started-page/getting-started-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <img src=\"https://wallpapersite.com/images/pages/pic_w/10125.jpg\"/>\n  <header>Material HTML</header>\n  <main>\n    <p>\n      Material HTML is an humble attempt to bring material design specs to hyper text markup language.\n      The goal of HTML is to convey semantic meaning and that is also what material design does. Therefor\n      marrying the two seems like a good choice.\n    </p>\n    <p>\n       - Material HTML is lightweight and uses css4 variables under the hood so it's customizable at runtime\n    </p>\n    <p>\n       - Only css (scss) is used here to style the basic HTML tags. However you only go so far with HTML tags therefor\n      some css helper classes are added.\n    </p>\n\n    <p>\n       - The code is heavily inspired of the code found in the angular material repository\n    </p>\n  </main>\n</section>\n\n<section>\n  <header>Include the library</header>\n  <main>\n\n    Although the library is modular the easiest way to get started is to include the whole library.\n    <br>\n\n    <div class=\"caption\">INSTALL:</div>\n    <pre>\n      <code>\n        npm install material-html\n      </code>\n    </pre>\n\n    <div class=\"caption\">IMPORT:</div>\n    <pre>\n      <code>\n        /** in your scss import this once */\n        @import '~material-html/all.scss';\n      </code>\n    </pre>\n\n\n\n  </main>\n</section>\n\n<section>\n  <header>Create the css 4 variables</header>\n  <main>\n    <p>\n      The next step is to create the set of css 4 variables used by Material HTML.\n    </p>\n    <p>\n      To do so, you can use the helper function:\n    </p>\n    <pre>\n      <code>\n        /** the color names here are names from the palette\n        * in order they are: primary, secondary, warn, success */\n\n        generate-theme('indigo', 'brown', 'red', 'green');\n      </code>\n    </pre>\n    <p>\n      This will generate a set of css 4 variables that are used by Material HTML\n    </p>\n  </main>\n</section>\n\n\n<section>\n  <header>Fine grained theming</header>\n  <main>\n    <p>\n      Since the scss function generate-theme only generates css 4 variables, you can also not\n      call this function and define your css4 variables by yourself\n    </p>\n    <pre>\n      <code>\n        :root {{ '{' }}\n          --color-primary: #2196f3;\n          --color-primary-contrast: rgba(255, 255, 255, 0.7);\n          --color-primary-light: #bbdefb;\n          --color-primary-light-contrast: rgba(0, 0, 0, 0.87);\n          --color-primary-dark: #1976d2;\n          --color-primary-dark-contrast: rgba(255, 255, 255, 0.7);\n          --color-accent: #ffc107;\n          --color-accent-contrast: rgba(0, 0, 0, 0.87);\n          --color-accent-light: #ffecb3;\n          --color-accent-light-contrast: rgba(0, 0, 0, 0.87);\n          --color-accent-dark: #ffa000;\n          --color-accent-dark-contrast: rgba(0, 0, 0, 0.87);\n          --color-success: #4caf50;\n          --color-success-contrast: rgba(0, 0, 0, 0.87);\n          --color-success-light: #c8e6c9;\n          --color-success-light-contrast: rgba(0, 0, 0, 0.87);\n          --color-success-dark: #388e3c;\n          --color-success-dark-contrast: rgba(255, 255, 255, 0.7);\n          --color-warn: #f44336;\n          --color-warn-contrast: rgba(255, 255, 255, 0.7);\n          --color-warn-light: #ffcdd2;\n          --color-warn-light-contrast: rgba(0, 0, 0, 0.87);\n          --color-warn-dark: #d32f2f;\n          --color-warn-dark-contrast: rgba(255, 255, 255, 0.7);\n          --color-bg-primary: white;\n          --color-bg-secondary: #fafafa;\n          --color-bg-primary-dark: #424242;\n          --color-bg-secondary-dark: #303030;\n          --color-txt-primary: rgba(0, 0, 0, 0.87);\n          --color-txt-secondary: rgba(0, 0, 0, 0.54);\n          --color-txt-third: rgba(0, 0, 0, 0.38);\n          --color-txt-fourth: rgba(0, 0, 0, 0.12);\n          --color-txt-primary-on-dark: rgba(255, 255, 255, 0.7);\n          --color-txt-secondary-on-dark: rgba(255, 255, 255, 0.5);\n          --color-txt-third-on-dark: rgba(255, 255, 255, 0.3);\n          --color-txt-fourth-on-dark: rgba(255, 255, 255, 0.1);\n          --color-btn-brightness-hover: 96%;\n          --color-btn-brightness-active: 88%;\n          --color-btn-brightness-disabled: 88%;\n          --color-btn-brightness-hover-dark: 97%;\n          --color-btn-brightness-active-dark: 90%;\n          --color-btn-brightness-disabled-dark: 90%;\n          --color-divider: rgba(0, 0, 0, 0.12);\n          --color-divider-dark: rgba(255, 255, 255, 0.1);\n          --spacing-xxs: 0.25rem;\n          --spacing-xs: 0.5rem;\n          --spacing-s: 0.75rem;\n          --spacing-m: 1.5rem;\n          --spacing-l: 3rem;\n          --spacing-xl: 4rem;\n        {{ '}' }}\n      </code>\n    </pre>\n  </main>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/getting-started-page/getting-started-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/getting-started-page/getting-started-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: GettingStartedPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedPageComponent", function() { return GettingStartedPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GettingStartedPageComponent = /** @class */ (function () {
    function GettingStartedPageComponent() {
    }
    GettingStartedPageComponent.prototype.ngOnInit = function () {
    };
    GettingStartedPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-getting-started-page',
            template: __webpack_require__(/*! ./getting-started-page.component.html */ "./src/app/pages/getting-started-page/getting-started-page.component.html"),
            styles: [__webpack_require__(/*! ./getting-started-page.component.css */ "./src/app/pages/getting-started-page/getting-started-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GettingStartedPageComponent);
    return GettingStartedPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/headers-page/headers-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/headers-page/headers-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/headers-page/headers-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/headers-page/headers-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <header>Header</header>\n  <main>\n    &lt;header&gt;'s are used in dialog and sections\n  </main>\n</section>\n\n<section>\n  <header class=\"bg-primary\">Examples</header>\n  <main>\n    <header></header>\n  </main>\n</section>"

/***/ }),

/***/ "./src/app/pages/headers-page/headers-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/headers-page/headers-page.component.ts ***!
  \**************************************************************/
/*! exports provided: HeadersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadersPageComponent", function() { return HeadersPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadersPageComponent = /** @class */ (function () {
    function HeadersPageComponent() {
    }
    HeadersPageComponent.prototype.ngOnInit = function () {
    };
    HeadersPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-headers-page',
            template: __webpack_require__(/*! ./headers-page.component.html */ "./src/app/pages/headers-page/headers-page.component.html"),
            styles: [__webpack_require__(/*! ./headers-page.component.css */ "./src/app/pages/headers-page/headers-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeadersPageComponent);
    return HeadersPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/helper-classes/helper-classes.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/helper-classes/helper-classes.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.example {\r\n\tpadding: var(--spacing-xxs) var(--spacing-s);\r\n}"

/***/ }),

/***/ "./src/app/pages/helper-classes/helper-classes.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/helper-classes/helper-classes.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section>\n  <header>Palette Helpers</header>\n  <main>\n    <ul>\n      <li *ngFor=\"let cls of colorClss\">\n        <span class=\"example {{ cls }}\">{{ cls }}</span>\n      </li>\n    </ul>\n  </main>\n</section>\n\n<section>\n  <header>Text Palette Helpers</header>\n  <main>\n    <ul>\n      <li *ngFor=\"let cls of txtClss\">\n        <span class=\"{{ cls }} example\">{{ cls }}</span>\n      </li>\n    </ul>\n  </main>\n</section>\n\n<section>\n  <header>Spacing Helpers (margin & padding)</header>\n  <main>\n    <ul>\n      <li *ngFor=\"let cls of spacingClss\">\n        <span class=\"example\">{{ cls }}</span>\n      </li>\n    </ul>\n  </main>\n</section>\n\n<section>\n  <header>Flex Helpers</header>\n  <main>\n    <ul>\n      <li *ngFor=\"let cls of flexClss\">\n        <span class=\"example\">{{ cls }}</span>\n      </li>\n    </ul>\n  </main>\n</section>\n\n\n<section>\n  <header>Misc Helpers</header>\n  <main>\n    <ul>\n      <li *ngFor=\"let cls of miscClss\">\n        <span class=\"example\">{{ cls }}</span>\n      </li>\n    </ul>\n  </main>\n</section>\n\n"

/***/ }),

/***/ "./src/app/pages/helper-classes/helper-classes.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/helper-classes/helper-classes.component.ts ***!
  \******************************************************************/
/*! exports provided: HelperClassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperClassesComponent", function() { return HelperClassesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelperClassesComponent = /** @class */ (function () {
    function HelperClassesComponent() {
        this.colorClss = [
            'color-primary',
            'bg-primary',
            'color-accent',
            'bg-accent',
            'color-warn',
            'bg-warn',
            'color-success',
            'bg-success'
        ];
        this.txtClss = [
            'txt-primary',
            'txt-secondary',
            'txt-third',
        ];
        this.typoClss = [
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'subtitle1',
            'subtitle2',
            'body1',
            'body2',
            'caption',
            'overline'
        ];
        this.spacingClss = [
            'mg-xxs',
            'mg-xs',
            'mg-s',
            'mg-m',
            'mg-l',
            'mg-xl',
            'pd-xxs',
            'pd-xs',
            'pd-s',
            'pd-m',
            'pd-l',
            'pd-xl'
        ];
        this.flexClss = [
            'flex',
            'flexCenter',
            'flexVAlign',
            'flexWrap',
            'flexStart',
            'flexEnd',
            'flexColumn',
            'flexGrow',
            'flexBetween',
            'flexAround',
        ];
        this.miscClss = [
            'ellipsis',
            'cercle'
        ];
    }
    HelperClassesComponent.prototype.ngOnInit = function () {
    };
    HelperClassesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-helper-classes',
            template: __webpack_require__(/*! ./helper-classes.component.html */ "./src/app/pages/helper-classes/helper-classes.component.html"),
            styles: [__webpack_require__(/*! ./helper-classes.component.css */ "./src/app/pages/helper-classes/helper-classes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelperClassesComponent);
    return HelperClassesComponent;
}());



/***/ }),

/***/ "./src/app/pages/helpers-page/helpers-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/helpers-page/helpers-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  A bunch of helper classes are provided.\n</section>\n\n<section>\n  <header>Palette Helpers</header>\n  <main>\n    <ul>\n      <li *ngFor=\"let cls of colorClss\">\n        {{ cls }}\n      </li>\n    </ul>\n  </main>\n</section>"

/***/ }),

/***/ "./src/app/pages/helpers-page/helpers-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/helpers-page/helpers-page.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/helpers-page/helpers-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/helpers-page/helpers-page.component.ts ***!
  \**************************************************************/
/*! exports provided: HelpersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpersPageComponent", function() { return HelpersPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpersPageComponent = /** @class */ (function () {
    function HelpersPageComponent() {
        this.colorClss = [
            'color-primary',
            'bg-primary',
            'color-accent',
            'bg-accent',
            'color-warn',
            'bg-warn',
            'color-success',
            'bg-success'
        ];
    }
    HelpersPageComponent.prototype.ngOnInit = function () {
    };
    HelpersPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-helpers-page',
            template: __webpack_require__(/*! ./helpers-page.component.html */ "./src/app/pages/helpers-page/helpers-page.component.html"),
            styles: [__webpack_require__(/*! ./helpers-page.component.scss */ "./src/app/pages/helpers-page/helpers-page.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], HelpersPageComponent);
    return HelpersPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section>\n  Defaults browser styles are ugly, there is no denying in that.\n  The goal of html tags is to provide semantic meaning to someone reading the html.\n  What this library does is that it humbly tries to bring material design styles to vanilla html.\n</section>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/pages/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/inputs-page/inputs-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/inputs-page/inputs-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <main>\n    <input type=\"text\"/>\n  </main>\n</section>"

/***/ }),

/***/ "./src/app/pages/inputs-page/inputs-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/inputs-page/inputs-page.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/inputs-page/inputs-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/inputs-page/inputs-page.component.ts ***!
  \************************************************************/
/*! exports provided: InputsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsPageComponent", function() { return InputsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InputsPageComponent = /** @class */ (function () {
    function InputsPageComponent() {
    }
    InputsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inputs-page',
            template: __webpack_require__(/*! ./inputs-page.component.html */ "./src/app/pages/inputs-page/inputs-page.component.html"),
            styles: [__webpack_require__(/*! ./inputs-page.component.scss */ "./src/app/pages/inputs-page/inputs-page.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], InputsPageComponent);
    return InputsPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/layouts-page/layouts-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/layouts-page/layouts-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  layouts-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/layouts-page/layouts-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/layouts-page/layouts-page.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/layouts-page/layouts-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/layouts-page/layouts-page.component.ts ***!
  \**************************************************************/
/*! exports provided: LayoutsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsPageComponent", function() { return LayoutsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutsPageComponent = /** @class */ (function () {
    function LayoutsPageComponent() {
    }
    LayoutsPageComponent.prototype.ngOnInit = function () {
    };
    LayoutsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layouts-page',
            template: __webpack_require__(/*! ./layouts-page.component.html */ "./src/app/pages/layouts-page/layouts-page.component.html"),
            styles: [__webpack_require__(/*! ./layouts-page.component.scss */ "./src/app/pages/layouts-page/layouts-page.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], LayoutsPageComponent);
    return LayoutsPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/list-page/list-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/list-page/list-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preview {\r\n\twidth: 2rem;\r\n\theight: 2rem;\r\n\tmargin-right: var(--spacing-xs);\r\n}"

/***/ }),

/***/ "./src/app/pages/list-page/list-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/list-page/list-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <header>List</header>\n  <main>\n      Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text.\n      <br>\n      li elements display as flex.\n  </main>\n</section>\n\n<section>\n  <header>Example</header>\n  <main>\n    <ul>\n      <li *ngFor=\"let color of list\">\n        <div class=\"preview\" [style.background]=\"color\"></div>\n        <span>{{ color }}</span>\n      </li>\n    </ul>\n  </main>\n</section>"

/***/ }),

/***/ "./src/app/pages/list-page/list-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/list-page/list-page.component.ts ***!
  \********************************************************/
/*! exports provided: ListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageComponent", function() { return ListPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListPageComponent = /** @class */ (function () {
    function ListPageComponent() {
        this.list = ['indianred', 'lightcoral', 'salmon', 'darksalmon', 'lightsalmon'];
    }
    ListPageComponent.prototype.ngOnInit = function () {
    };
    ListPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-page',
            template: __webpack_require__(/*! ./list-page.component.html */ "./src/app/pages/list-page/list-page.component.html"),
            styles: [__webpack_require__(/*! ./list-page.component.css */ "./src/app/pages/list-page/list-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListPageComponent);
    return ListPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/menu-page/menu-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/menu-page/menu-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <header>\n    Menu\n  </header>\n  <main>\n      A menu displays a list of choices on a temporary surface. They appear when users interact with a button, action, or other control.\n  </main>\n</section>\n\n<section>\n  <header>\n    Example\n  </header>\n  <main>\n    <menu>\n      <menuitem>Option 1</menuitem>\n      <menuitem>Option 2</menuitem>\n      <menuitem>Option 3</menuitem>\n      <menuitem>Option 4</menuitem>\n      <menuitem>Option 5</menuitem>\n    </menu>\n  </main>\n</section>"

/***/ }),

/***/ "./src/app/pages/menu-page/menu-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/menu-page/menu-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/menu-page/menu-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/menu-page/menu-page.component.ts ***!
  \********************************************************/
/*! exports provided: MenuPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageComponent", function() { return MenuPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuPageComponent = /** @class */ (function () {
    function MenuPageComponent() {
    }
    MenuPageComponent.prototype.ngOnInit = function () {
    };
    MenuPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-page',
            template: __webpack_require__(/*! ./menu-page.component.html */ "./src/app/pages/menu-page/menu-page.component.html"),
            styles: [__webpack_require__(/*! ./menu-page.component.scss */ "./src/app/pages/menu-page/menu-page.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], MenuPageComponent);
    return MenuPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _typography_page_typography_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typography-page/typography-page.component */ "./src/app/pages/typography-page/typography-page.component.ts");
/* harmony import */ var _headers_page_headers_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./headers-page/headers-page.component */ "./src/app/pages/headers-page/headers-page.component.ts");
/* harmony import */ var _list_page_list_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-page/list-page.component */ "./src/app/pages/list-page/list-page.component.ts");
/* harmony import */ var _elevation_page_elevation_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elevation-page/elevation-page.component */ "./src/app/pages/elevation-page/elevation-page.component.ts");
/* harmony import */ var _buttons_page_buttons_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttons-page/buttons-page.component */ "./src/app/pages/buttons-page/buttons-page.component.ts");
/* harmony import */ var _getting_started_page_getting_started_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getting-started-page/getting-started-page.component */ "./src/app/pages/getting-started-page/getting-started-page.component.ts");
/* harmony import */ var _card_page_card_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card-page/card-page.component */ "./src/app/pages/card-page/card-page.component.ts");
/* harmony import */ var _helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helper-classes/helper-classes.component */ "./src/app/pages/helper-classes/helper-classes.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _components_code_code_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/code/code.component */ "./src/app/components/code/code.component.ts");
/* harmony import */ var _palette_palette_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./palette/palette.component */ "./src/app/pages/palette/palette.component.ts");
/* harmony import */ var _menu_page_menu_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu-page/menu-page.component */ "./src/app/pages/menu-page/menu-page.component.ts");
/* harmony import */ var _helpers_page_helpers_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers-page/helpers-page.component */ "./src/app/pages/helpers-page/helpers-page.component.ts");
/* harmony import */ var _layouts_page_layouts_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layouts-page/layouts-page.component */ "./src/app/pages/layouts-page/layouts-page.component.ts");
/* harmony import */ var _inputs_page_inputs_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./inputs-page/inputs-page.component */ "./src/app/pages/inputs-page/inputs-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _components_code_code_component__WEBPACK_IMPORTED_MODULE_11__["CodeComponent"],
                _typography_page_typography_page_component__WEBPACK_IMPORTED_MODULE_2__["TypographyPageComponent"],
                _headers_page_headers_page_component__WEBPACK_IMPORTED_MODULE_3__["HeadersPageComponent"],
                _list_page_list_page_component__WEBPACK_IMPORTED_MODULE_4__["ListPageComponent"],
                _elevation_page_elevation_page_component__WEBPACK_IMPORTED_MODULE_5__["ElevationPageComponent"],
                _buttons_page_buttons_page_component__WEBPACK_IMPORTED_MODULE_6__["ButtonsPageComponent"],
                _getting_started_page_getting_started_page_component__WEBPACK_IMPORTED_MODULE_7__["GettingStartedPageComponent"],
                _card_page_card_page_component__WEBPACK_IMPORTED_MODULE_8__["CardPageComponent"],
                _helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_9__["HelperClassesComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"],
                _palette_palette_component__WEBPACK_IMPORTED_MODULE_12__["PaletteComponent"],
                _menu_page_menu_page_component__WEBPACK_IMPORTED_MODULE_13__["MenuPageComponent"],
                _helpers_page_helpers_page_component__WEBPACK_IMPORTED_MODULE_14__["HelpersPageComponent"],
                _layouts_page_layouts_page_component__WEBPACK_IMPORTED_MODULE_15__["LayoutsPageComponent"],
                _inputs_page_inputs_page_component__WEBPACK_IMPORTED_MODULE_16__["InputsPageComponent"],
            ],
            exports: [
                _typography_page_typography_page_component__WEBPACK_IMPORTED_MODULE_2__["TypographyPageComponent"],
                _headers_page_headers_page_component__WEBPACK_IMPORTED_MODULE_3__["HeadersPageComponent"],
                _list_page_list_page_component__WEBPACK_IMPORTED_MODULE_4__["ListPageComponent"],
                _elevation_page_elevation_page_component__WEBPACK_IMPORTED_MODULE_5__["ElevationPageComponent"],
                _buttons_page_buttons_page_component__WEBPACK_IMPORTED_MODULE_6__["ButtonsPageComponent"],
                _getting_started_page_getting_started_page_component__WEBPACK_IMPORTED_MODULE_7__["GettingStartedPageComponent"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/palette/palette.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/palette/palette.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <header>Palette</header>\n  <main>\n    The Material Design color system uses an organized approach to applying color to your UI.\n    In this system, a primary and a secondary color are typically selected to represent your brand.\n    Dark and light variants of each color can then be applied to your UI in different ways.\n  </main>\n  <footer>\n    <a class=\"color-primary\" href=\"https://material.io/design/color/the-color-system.html#color-usage-palettes\">\n      Reference\n    </a>\n  </footer>\n</section>\n\n<div class=\"palettes\">\n\n  <section *ngFor=\"let palette of allPalettes\">\n    <header>\n      <!-- 0 is key 1 is value because we used object entries -->\n      {{ getName(palette) }}\n    </header>\n\n    <main>\n      <ul>\n        <li *ngFor=\"let color of getColors(palette)\">\n          <div class=\"preview\" [style.background]=\"color.value\">\n\n          </div>\n          <span>{{ color.name }} - {{ color.value }}</span>\n        </li>\n      </ul>\n    </main>\n\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/palette/palette.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/palette/palette.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preview {\n  width: var(--spacing-m);\n  height: var(--spacing-m);\n  margin-right: var(--spacing-xs); }\n\n.palettes {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap; }\n\n.palettes section {\n    width: 16rem;\n    margin: var(--spacing-m); }\n"

/***/ }),

/***/ "./src/app/pages/palette/palette.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/palette/palette.component.ts ***!
  \****************************************************/
/*! exports provided: PaletteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaletteComponent", function() { return PaletteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palette */ "./src/app/pages/palette/palette.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaletteComponent = /** @class */ (function () {
    function PaletteComponent() {
        this.allPalettes = Object.entries(_palette__WEBPACK_IMPORTED_MODULE_1__["allPalettes"]);
    }
    PaletteComponent.prototype.ngOnInit = function () {
    };
    PaletteComponent.prototype.getName = function (palette) {
        return palette[0].replace('_', '-');
    };
    PaletteComponent.prototype.getColors = function (palette) {
        // we only keep string, else it's a sub palette (for text)
        return Object.entries(palette[1])
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return ({ name: key, value: value });
        })
            .filter(function (color) { return typeof color.value === 'string'; });
    };
    PaletteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-palette',
            template: __webpack_require__(/*! ./palette.component.html */ "./src/app/pages/palette/palette.component.html"),
            styles: [__webpack_require__(/*! ./palette.component.scss */ "./src/app/pages/palette/palette.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], PaletteComponent);
    return PaletteComponent;
}());



/***/ }),

/***/ "./src/app/pages/palette/palette.ts":
/*!******************************************!*\
  !*** ./src/app/pages/palette/palette.ts ***!
  \******************************************/
/*! exports provided: red, pink, purple, deep_purple, indigo, blue, light_blue, cyan, teal, green, light_green, lime, yellow, amber, orange, deep_orange, brown, grey, blue_grey, allPalettes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pink", function() { return pink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple", function() { return purple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deep_purple", function() { return deep_purple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indigo", function() { return indigo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return blue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "light_blue", function() { return light_blue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cyan", function() { return cyan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teal", function() { return teal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green", function() { return green; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "light_green", function() { return light_green; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lime", function() { return lime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yellow", function() { return yellow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amber", function() { return amber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orange", function() { return orange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deep_orange", function() { return deep_orange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brown", function() { return brown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grey", function() { return grey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue_grey", function() { return blue_grey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPalettes", function() { return allPalettes; });
var red = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
    contrast: {
        50: 'rgba(black, 0.87)',
        100: 'rgba(black, 0.87)',
        200: 'rgba(black, 0.87)',
        300: 'rgba(black, 0.87)',
        400: 'rgba(black, 0.87)',
        500: 'rgba(white, 0, 70)',
        600: 'rgba(white, 0, 70)',
        700: 'rgba(white, 0, 70)',
        800: 'rgba(white, 0, 70)',
        900: 'rgba(white, 0, 70)',
        A100: 'rgba(black, 0.87)',
        A200: 'rgba(white, 0, 70)',
        A400: 'rgba(white, 0, 70)',
        A700: 'rgba(white, 0, 70)',
    }
};
var pink = {
    50: '#fce4ec',
    100: '#f8bbd0',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#e91e63',
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f',
    A100: '#ff80ab',
    A200: '#ff4081',
    A400: '#f50057',
    A700: '#c51162',
    contrast: {
        50: 'rgba(black, 0.87)',
        100: 'rgba(black, 0.87)',
        200: 'rgba(black, 0.87)',
        300: 'rgba(black, 0.87)',
        400: 'rgba(black, 0.87)',
        500: 'rgba(white, 0, 70)',
        600: 'rgba(white, 0, 70)',
        700: 'rgba(white, 0, 70)',
        800: 'rgba(white, 0, 70)',
        900: 'rgba(white, 0, 70)',
        A100: 'rgba(black, 0.87)',
        A200: 'rgba(white, 0, 70)',
        A400: 'rgba(white, 0, 70)',
        A700: 'rgba(white, 0, 70)',
    }
};
var purple = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
    contrast: {
        50: 'rgba(black, 0.87)',
        100: 'rgba(black, 0.87)',
        200: 'rgba(black, 0.87)',
        300: 'rgba(white, 0, 70)',
        400: 'rgba(white, 0, 70)',
        500: 'rgba(white, 0, 70)',
        600: 'rgba(white, 0, 70)',
        700: 'rgba(white, 0, 70)',
        800: 'rgba(white, 0, 70)',
        900: 'rgba(white, 0, 70)',
        A100: 'rgba(black, 0.87)',
        A200: 'rgba(white, 0, 70)',
        A400: 'rgba(white, 0, 70)',
        A700: 'rgba(white, 0, 70)',
    }
};
var deep_purple = {
    50: '#ede7f6',
    100: '#d1c4e9',
    200: '#b39ddb',
    300: '#9575cd',
    400: '#7e57c2',
    500: '#673ab7',
    600: '#5e35b1',
    700: '#512da8',
    800: '#4527a0',
    900: '#311b92',
    A100: '#b388ff',
    A200: '#7c4dff',
    A400: '#651fff',
    A700: '#6200ea',
    contrast: {
        50: 'rgba(black, 0.87)',
        100: 'rgba(black, 0.87)',
        200: 'rgba(black, 0.87)',
        300: 'rgba(white, 0, 70)',
        400: 'rgba(white, 0, 70)',
        500: 'rgba(white, 0, 70)',
        600: 'rgba(white, 0, 70)',
        700: 'rgba(white, 0, 70)',
        800: 'rgba(white, 0, 70)',
        900: 'rgba(white, 0, 70)',
        A100: 'rgba(black, 0.87)',
        A200: 'rgba(white, 0, 70)',
        A400: 'rgba(white, 0, 70)',
        A700: 'rgba(white, 0, 70)',
    }
};
var indigo = {
    50: '#e8eaf6',
    100: '#c5cae9',
    200: '#9fa8da',
    300: '#7986cb',
    400: '#5c6bc0',
    500: '#3f51b5',
    600: '#3949ab',
    700: '#303f9f',
    800: '#283593',
    900: '#1a237e',
    A100: '#8c9eff',
    A200: '#536dfe',
    A400: '#3d5afe',
    A700: '#304ffe',
    contrast: {
        50: 'rgba(black, 0.87)',
        100: 'rgba(black, 0.87)',
        200: 'rgba(black, 0.87)',
        300: 'rgba(white, 0, 70)',
        400: 'rgba(white, 0, 70)',
        500: 'rgba(white, 0, 70)',
        600: 'rgba(white, 0, 70)',
        700: 'rgba(white, 0, 70)',
        800: 'rgba(white, 0, 70)',
        900: 'rgba(white, 0, 70)',
        A100: 'rgba(black, 0.87)',
        A200: 'rgba(white, 0, 70)',
        A400: 'rgba(white, 0, 70)',
        A700: 'rgba(white, 0, 70)',
    }
};
var blue = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
    contrast: {
        50: 'rgba(black, 0.87)',
        100: 'rgba(black, 0.87)',
        200: 'rgba(black, 0.87)',
        300: 'rgba(black, 0.87)',
        400: 'rgba(black, 0.87)',
        500: 'rgba(white, 0, 70)',
        600: 'rgba(white, 0, 70)',
        700: 'rgba(white, 0, 70)',
        800: 'rgba(white, 0, 70)',
        900: 'rgba(white, 0, 70)',
        A100: 'rgba(black, 0.87)',
        A200: 'rgba(white, 0, 70)',
        A400: 'rgba(white, 0, 70)',
        A700: 'rgba(white, 0, 70)',
    }
};
var light_blue = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
    contrast: {
        50: 'rgba(black, 0.87)',
        100: 'rgba(black, 0.87)',
        200: 'rgba(black, 0.87)',
        300: 'rgba(black, 0.87)',
        400: 'rgba(black, 0.87)',
        500: 'rgba(white, 0, 70)',
        600: 'rgba(white, 0, 70)',
        700: 'rgba(white, 0, 70)',
        800: 'rgba(white, 0, 70)',
        900: 'rgba(white, 0, 70)',
        A100: 'rgba(black, 0.87)',
        A200: 'rgba(black, 0.87)',
        A400: 'rgba(black, 0.87)',
        A700: 'rgba(white, 0, 70)',
    }
};
var cyan = {
    50: '#e0f7fa',
    100: '#b2ebf2',
    200: '#80deea',
    300: '#4dd0e1',
    400: '#26c6da',
    500: '#00bcd4',
    600: '#00acc1',
    700: '#0097a7',
    800: '#00838f',
    900: '#006064',
    A100: '#84ffff',
    A200: '#18ffff',
    A400: '#00e5ff',
    A700: '#00b8d4',
    contrast: {
        50: 'rgba(black, 0.87)',
        100: 'rgba(black, 0.87)',
        200: 'rgba(black, 0.87)',
        300: 'rgba(black, 0.87)',
        400: 'rgba(black, 0.87)',
        500: 'rgba(white, 0, 70)',
        600: 'rgba(white, 0, 70)',
        700: 'rgba(white, 0, 70)',
        800: 'rgba(white, 0, 70)',
        900: 'rgba(white, 0, 70)',
        A100: 'rgba(black, 0.87)',
        A200: 'rgba(black, 0.87)',
        A400: 'rgba(black, 0.87)',
        A700: 'rgba(black, 0.87)',
    }
};
var teal = {
    50: '#e0f2f1',
    100: '#b2dfdb',
    200: '#80cbc4',
    300: '#4db6ac',
    400: '#26a69a',
    500: '#009688',
    600: '#00897b',
    700: '#00796b',
    800: '#00695c',
    900: '#004d40',
    A100: '#a7ffeb',
    A200: '#64ffda',
    A400: '#1de9b6',
    A700: '#00bfa5',
    contrast: {
        50: 'rgba(black, 0.87)',
        100: 'rgba(black, 0.87)',
        200: 'rgba(black, 0.87)',
        300: 'rgba(black, 0.87)',
        400: 'rgba(black, 0.87)',
        500: 'rgba(white, 0, 70)',
        600: 'rgba(white, 0, 70)',
        700: 'rgba(white, 0, 70)',
        800: 'rgba(white, 0, 70)',
        900: 'rgba(white, 0, 70)',
        A100: 'rgba(black, 0.87)',
        A200: 'rgba(black, 0.87)',
        A400: 'rgba(black, 0.87)',
        A700: 'rgba(black, 0.87)',
    }
};
var green = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
    contrast: {
        50: 'rgba(black, 0.87)',
        100: 'rgba(black, 0.87)',
        200: 'rgba(black, 0.87)',
        300: 'rgba(black, 0.87)',
        400: 'rgba(black, 0.87)',
        500: 'rgba(black, 0.87)',
        600: 'rgba(white, 0, 70)',
        700: 'rgba(white, 0, 70)',
        800: 'rgba(white, 0, 70)',
        900: 'rgba(white, 0, 70)',
        A100: 'rgba(black, 0.87)',
        A200: 'rgba(black, 0.87)',
        A400: 'rgba(black, 0.87)',
        A700: 'rgba(black, 0.87)',
    }
};
var light_green = {
    50: '#f1f8e9',
    100: '#dcedc8',
    200: '#c5e1a5',
    300: '#aed581',
    400: '#9ccc65',
    500: '#8bc34a',
    600: '#7cb342',
    700: '#689f38',
    800: '#558b2f',
    900: '#33691e',
    A100: '#ccff90',
    A200: '#b2ff59',
    A400: '#76ff03',
    A700: '#64dd17',
    contrast: {
        50: 'rgba(black, 0.87)',
        100: 'rgba(black, 0.87)',
        200: 'rgba(black, 0.87)',
        300: 'rgba(black, 0.87)',
        400: 'rgba(black, 0.87)',
        500: 'rgba(black, 0.87)',
        600: 'rgba(black, 0.87)',
        700: 'rgba(white, 0, 70)',
        800: 'rgba(white, 0, 70)',
        900: 'rgba(white, 0, 70)',
        A100: 'rgba(black, 0.87)',
        A200: 'rgba(black, 0.87)',
        A400: 'rgba(black, 0.87)',
        A700: 'rgba(black, 0.87)',
    }
};
var lime = {
    50: '#f9fbe7',
    100: '#f0f4c3',
    200: '#e6ee9c',
    300: '#dce775',
    400: '#d4e157',
    500: '#cddc39',
    600: '#c0ca33',
    700: '#afb42b',
    800: '#9e9d24',
    900: '#827717',
    A100: '#f4ff81',
    A200: '#eeff41',
    A400: '#c6ff00',
    A700: '#aeea00',
    contrast: {
        50: 'rgba(black, 0.87)',
        100: 'rgba(black, 0.87)',
        200: 'rgba(black, 0.87)',
        300: 'rgba(black, 0.87)',
        400: 'rgba(black, 0.87)',
        500: 'rgba(black, 0.87)',
        600: 'rgba(black, 0.87)',
        700: 'rgba(black, 0.87)',
        800: 'rgba(black, 0.87)',
        900: 'rgba(white, 0, 70)',
        A100: 'rgba(black, 0.87)',
        A200: 'rgba(black, 0.87)',
        A400: 'rgba(black, 0.87)',
        A700: 'rgba(black, 0.87)',
    }
};
var yellow = {
    50: '#fffde7',
    100: '#fff9c4',
    200: '#fff59d',
    300: '#fff176',
    400: '#ffee58',
    500: '#ffeb3b',
    600: '#fdd835',
    700: '#fbc02d',
    800: '#f9a825',
    900: '#f57f17',
    A100: '#ffff8d',
    A200: '#ffff00',
    A400: '#ffea00',
    A700: '#ffd600',
    contrast: {
        50: 'rgba(black, 0.87)',
        100: 'rgba(black, 0.87)',
        200: 'rgba(black, 0.87)',
        300: 'rgba(black, 0.87)',
        400: 'rgba(black, 0.87)',
        500: 'rgba(black, 0.87)',
        600: 'rgba(black, 0.87)',
        700: 'rgba(black, 0.87)',
        800: 'rgba(black, 0.87)',
        900: 'rgba(black, 0.87)',
        A100: 'rgba(black, 0.87)',
        A200: 'rgba(black, 0.87)',
        A400: 'rgba(black, 0.87)',
        A700: 'rgba(black, 0.87)',
    }
};
var amber = {
    50: '#fff8e1',
    100: '#ffecb3',
    200: '#ffe082',
    300: '#ffd54f',
    400: '#ffca28',
    500: '#ffc107',
    600: '#ffb300',
    700: '#ffa000',
    800: '#ff8f00',
    900: '#ff6f00',
    A100: '#ffe57f',
    A200: '#ffd740',
    A400: '#ffc400',
    A700: '#ffab00',
    contrast: {
        50: 'rgba(black, 0.87)',
        100: 'rgba(black, 0.87)',
        200: 'rgba(black, 0.87)',
        300: 'rgba(black, 0.87)',
        400: 'rgba(black, 0.87)',
        500: 'rgba(black, 0.87)',
        600: 'rgba(black, 0.87)',
        700: 'rgba(black, 0.87)',
        800: 'rgba(black, 0.87)',
        900: 'rgba(black, 0.87)',
        A100: 'rgba(black, 0.87)',
        A200: 'rgba(black, 0.87)',
        A400: 'rgba(black, 0.87)',
        A700: 'rgba(black, 0.87)',
    }
};
var orange = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
    contrast: {
        50: 'rgba(black, 0.87)',
        100: 'rgba(black, 0.87)',
        200: 'rgba(black, 0.87)',
        300: 'rgba(black, 0.87)',
        400: 'rgba(black, 0.87)',
        500: 'rgba(black, 0.87)',
        600: 'rgba(black, 0.87)',
        700: 'rgba(black, 0.87)',
        800: 'rgba(white, 0, 70)',
        900: 'rgba(white, 0, 70)',
        A100: 'rgba(black, 0.87)',
        A200: 'rgba(black, 0.87)',
        A400: 'rgba(black, 0.87)',
        A700: 'black',
    }
};
var deep_orange = {
    50: '#fbe9e7',
    100: '#ffccbc',
    200: '#ffab91',
    300: '#ff8a65',
    400: '#ff7043',
    500: '#ff5722',
    600: '#f4511e',
    700: '#e64a19',
    800: '#d84315',
    900: '#bf360c',
    A100: '#ff9e80',
    A200: '#ff6e40',
    A400: '#ff3d00',
    A700: '#dd2c00',
    contrast: {
        50: 'rgba(black, 0.87)',
        100: 'rgba(black, 0.87)',
        200: 'rgba(black, 0.87)',
        300: 'rgba(black, 0.87)',
        400: 'rgba(black, 0.87)',
        500: 'rgba(white, 0, 70)',
        600: 'rgba(white, 0, 70)',
        700: 'rgba(white, 0, 70)',
        800: 'rgba(white, 0, 70)',
        900: 'rgba(white, 0, 70)',
        A100: 'rgba(black, 0.87)',
        A200: 'rgba(black, 0.87)',
        A400: 'rgba(white, 0, 70)',
        A700: 'rgba(white, 0, 70)',
    }
};
var brown = {
    50: '#efebe9',
    100: '#d7ccc8',
    200: '#bcaaa4',
    300: '#a1887f',
    400: '#8d6e63',
    500: '#795548',
    600: '#6d4c41',
    700: '#5d4037',
    800: '#4e342e',
    900: '#3e2723',
    A100: '#d7ccc8',
    A200: '#bcaaa4',
    A400: '#8d6e63',
    A700: '#5d4037',
    contrast: {
        50: 'rgba(black, 0.87)',
        100: 'rgba(black, 0.87)',
        200: 'rgba(black, 0.87)',
        300: 'rgba(white, 0, 70)',
        400: 'rgba(white, 0, 70)',
        500: 'rgba(white, 0, 70)',
        600: 'rgba(white, 0, 70)',
        700: 'rgba(white, 0, 70)',
        800: 'rgba(white, 0, 70)',
        900: 'rgba(white, 0, 70)',
        A100: 'rgba(black, 0.87)',
        A200: 'rgba(black, 0.87)',
        A400: 'rgba(white, 0, 70)',
        A700: 'rgba(white, 0, 70)',
    }
};
var grey = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#ffffff',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
    contrast: {
        50: 'rgba(black, 0.87)',
        100: 'rgba(black, 0.87)',
        200: 'rgba(black, 0.87)',
        300: 'rgba(black, 0.87)',
        400: 'rgba(black, 0.87)',
        500: 'rgba(black, 0.87)',
        600: 'rgba(white, 0, 70)',
        700: 'rgba(white, 0, 70)',
        800: 'rgba(white, 0, 70)',
        900: 'rgba(white, 0, 70)',
        A100: 'rgba(black, 0.87)',
        A200: 'rgba(black, 0.87)',
        A400: 'rgba(black, 0.87)',
        A700: 'rgba(white, 0, 70)',
    }
};
var blue_grey = {
    50: '#eceff1',
    100: '#cfd8dc',
    200: '#b0bec5',
    300: '#90a4ae',
    400: '#78909c',
    500: '#607d8b',
    600: '#546e7a',
    700: '#455a64',
    800: '#37474f',
    900: '#263238',
    A100: '#cfd8dc',
    A200: '#b0bec5',
    A400: '#78909c',
    A700: '#455a64',
    contrast: {
        50: 'rgba(black, 0.87)',
        100: 'rgba(black, 0.87)',
        200: 'rgba(black, 0.87)',
        300: 'rgba(black, 0.87)',
        400: 'rgba(white, 0, 70)',
        500: 'rgba(white, 0, 70)',
        600: 'rgba(white, 0, 70)',
        700: 'rgba(white, 0, 70)',
        800: 'rgba(white, 0, 70)',
        900: 'rgba(white, 0, 70)',
        A100: 'rgba(black, 0.87)',
        A200: 'rgba(black, 0.87)',
        A400: 'rgba(white, 0, 70)',
        A700: 'rgba(white, 0, 70)',
    }
};
var allPalettes = {
    amber: amber,
    blue: blue,
    blue_grey: blue_grey,
    brown: brown,
    cyan: cyan,
    deep_orange: deep_orange,
    deep_purple: deep_purple,
    green: green,
    grey: grey,
    indigo: indigo,
    light_blue: light_blue,
    light_green: light_green,
    lime: lime,
    orange: orange,
    pink: pink,
    purple: purple,
    red: red,
    teal: teal,
    yellow: yellow
};


/***/ }),

/***/ "./src/app/pages/typography-page/typography-page.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/typography-page/typography-page.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n\tdisplay: block;\r\n}"

/***/ }),

/***/ "./src/app/pages/typography-page/typography-page.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/typography-page/typography-page.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\t<header>Typography</header>\n\t<main>\n\n\t\tThe Material Design type scale includes a range of contrasting styles that support the needs of your product and its content.\n\n\t\tThe type scale is a combination of 13 styles that are supported by the type system. It contains reusable categories of text, each with an intended application and meaning.\n\n\t\t<br><br>\n\n\t\t<span>Note: by default system fonts are used to not have unnecessary download time</span>\n\t\t<span class=\"mg-s spacer\"></span>\n\t\t<a class=\"color-primary\" href=\"https://material.io/design/typography/the-type-system.html\">Reference</a>\n\n\t</main>\n</section>\n\n\n<section>\n\t<main>\n\t\t<ul>\n\t\t\t<li><h1>Material HTML - h1</h1></li>\n\t\t\t<li><h2>Material HTML - h2</h2></li>\n\t\t\t<li><h3>Material HTML - h3</h3></li>\n\t\t\t<li><h4>Material HTML - h4</h4></li>\n\t\t\t<li><h5>Material HTML - h5</h5></li>\n\t\t\t<li><h6>Material HTML - h6</h6></li>\n\t\t\t<li><div class=\"subtitle1\">Material HTML - .subtitle1</div></li>\n\t\t\t<li><div class=\"subtitle2\">Material HTML - .subtitle2</div></li>\n\t\t\t<li><div class=\"body1\">Material HTML - .body1</div></li>\n\t\t\t<li><div class=\"body2\">Material HTML - .body2</div></li>\n\t\t\t<li><div class=\"caption\">Material HTML - .caption</div></li>\n\t\t\t<li><div class=\"overline\">Material HTML - .overline</div></li>\n\t\t\t<li><small>Material HTML - small</small></li>\n\t\t</ul>\n\n\t</main>\n</section>\n\n"

/***/ }),

/***/ "./src/app/pages/typography-page/typography-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/typography-page/typography-page.component.ts ***!
  \********************************************************************/
/*! exports provided: TypographyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyPageComponent", function() { return TypographyPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypographyPageComponent = /** @class */ (function () {
    function TypographyPageComponent() {
    }
    TypographyPageComponent.prototype.ngOnInit = function () {
    };
    TypographyPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography-page',
            template: __webpack_require__(/*! ./typography-page.component.html */ "./src/app/pages/typography-page/typography-page.component.html"),
            styles: [__webpack_require__(/*! ./typography-page.component.css */ "./src/app/pages/typography-page/typography-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyPageComponent);
    return TypographyPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cedva\Desktop\material-html2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map