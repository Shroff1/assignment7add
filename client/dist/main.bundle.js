webpackJsonp([1,4],{

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 146;


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(155);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Aniket/Harvard University/Spring 2018/New folder/assignment/assignment7/assignment7-final-Shroff1/client/src/main.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__laptop_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//added the service file as a provider.
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(317),
            styles: [__webpack_require__(313)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__laptop_service__["a" /* LaptopService */]]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=C:/Aniket/Harvard University/Spring 2018/New folder/assignment/assignment7/assignment7-final-Shroff1/client/src/app.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__laptop_laptop_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__orders_orders_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_detail_order_detail_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/orders', pathMatch: 'full' },
    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_7__orders_orders_component__["a" /* OrdersComponent */] },
    { path: 'orders/:id', component: __WEBPACK_IMPORTED_MODULE_8__order_detail_order_detail_component__["a" /* OrderDetailComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__laptop_laptop_component__["a" /* LaptopComponent */],
                __WEBPACK_IMPORTED_MODULE_7__orders_orders_component__["a" /* OrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_8__order_detail_order_detail_component__["a" /* OrderDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=C:/Aniket/Harvard University/Spring 2018/New folder/assignment/assignment7/assignment7-final-Shroff1/client/src/app.module.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__laptop_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaptopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LaptopComponent = (function () {
    function LaptopComponent(route, laptopService, router) {
        this.route = route;
        this.laptopService = laptopService;
        this.router = router;
    }
    //created a method for the button in the html page.
    LaptopComponent.prototype.handleClickEvent = function (evt) {
        console.log("Testing click event that will be used for deleting");
        this.laptopService.deleteOrder();
    };
    LaptopComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
        __metadata("design:type", Object)
    ], LaptopComponent.prototype, "laptop", void 0);
    LaptopComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-laptop',
            template: __webpack_require__(318),
            styles: [__webpack_require__(314)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__laptop_service__["a" /* LaptopService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__laptop_service__["a" /* LaptopService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
    ], LaptopComponent);
    return LaptopComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=C:/Aniket/Harvard University/Spring 2018/New folder/assignment/assignment7/assignment7-final-Shroff1/client/src/laptop.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__laptop_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderDetailComponent = (function () {
    function OrderDetailComponent(route, laptopService, router) {
        this.route = route;
        this.laptopService = laptopService;
        this.router = router;
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        this.getLaptop();
    };
    OrderDetailComponent.prototype.getLaptop = function () {
        var _this = this;
        var param = this.route.snapshot.paramMap.get('id');
        this.laptopService.getLaptop(param)
            .subscribe(function (laptop) {
            _this.laptop = laptop;
        });
    };
    OrderDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-order-detail',
            template: __webpack_require__(319),
            styles: [__webpack_require__(315)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__laptop_service__["a" /* LaptopService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__laptop_service__["a" /* LaptopService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__laptop_service__["a" /* LaptopService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
    ], OrderDetailComponent);
    return OrderDetailComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=C:/Aniket/Harvard University/Spring 2018/New folder/assignment/assignment7/assignment7-final-Shroff1/client/src/order-detail.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__laptop_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersComponent = (function () {
    function OrdersComponent(laptopService) {
        this.laptopService = laptopService;
        //constructed a laptopService
        this.laptops = null;
    }
    //On file loading, called the list laptop method in laptop service.
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.laptopService.listLaptop().subscribe(function (laptops) {
            _this.laptops = laptops;
        }); //helps with asynchronous calls
    };
    OrdersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-orders',
            template: __webpack_require__(320),
            styles: [__webpack_require__(316)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__laptop_service__["a" /* LaptopService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__laptop_service__["a" /* LaptopService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__laptop_service__["a" /* LaptopService */]) === "function" && _a || Object])
    ], OrdersComponent);
    return OrdersComponent;
    var _a;
}());

//# sourceMappingURL=C:/Aniket/Harvard University/Spring 2018/New folder/assignment/assignment7/assignment7-final-Shroff1/client/src/orders.component.js.map

/***/ }),

/***/ 313:
/***/ (function(module, exports) {

module.exports = "#table{\r\n  width: \"100%\";\r\n}\r\n"

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

module.exports = "#table{\r\n  width: \"100%\";\r\n}\r\n"

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports = "<h2>Laptop Orders!!</h2>\n<div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

module.exports = "<table style=\"width:100%\" border=\"1\" id=\"ord\">\n<a routerLink=\"/orders/{{laptop._id}}\">\n  <tr>\n    <td>{{ laptop.laptopName}}</td>\n    <td>{{ laptop.laptopQty}}</td>\n    <td>{{ laptop.countryOrder}}</td>\n    <td>{{ laptop.targetPrice}}</td>\n    <td>{{ laptop.repName}}</td>\n    <td>{{ laptop.partNumber}}</td>\n  </tr>\n</a>\n</table>\n<button (click)=\"handleClickEvent($event)\">Delete</button>\n"

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

module.exports = "<table style=\"width:100%\" border=\"1\" id=\"ord\">\n  <tr>\n    <th>Laptop Name</th>\n    <th>Qty</th>\n    <th>Country Order</th>\n    <th>target price</th>\n    <th>Rep Name</th>\n    <th>Part Number</th>\n  </tr>\n  <tr>\n    <td>{{ laptop.laptopName}}</td>\n    <td>{{ laptop.laptopQty}}</td>\n    <td>{{ laptop.countryOrder}}</td>\n    <td>{{ laptop.targetPrice}}</td>\n    <td>{{ laptop.repName}}</td>\n    <td>{{ laptop.partNumber}}</td>\n  </tr>\n</table>\n<a routerLink=\"/orders\">Back to Order Page</a>\n"

/***/ }),

/***/ 320:
/***/ (function(module, exports) {

module.exports = "<h1>Laptop Orders</h1>\n<table id=\"table\" style=\"width:100%\" border=\"1\" id=\"ord\">\n      <tr>\n        <th>Laptop Name</th>\n        <th>Qty</th>\n        <th>Country Order</th>\n        <th>target price</th>\n        <th>Rep Name</th>\n        <th>Part Number</th>\n        <th>Delete</th>\n      </tr>\n</table>\n<app-laptop\n    *ngFor='let laptopObject of laptops'\n    [laptop] = \"laptopObject\">\n</app-laptop>\n"

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaptopService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Creating a service that seperates the process of getting the data.
var LaptopService = (function () {
    function LaptopService(http) {
        this.http = http;
        this.apiurl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiurl;
    }
    //Method that returns the laptops array.
    LaptopService.prototype.listLaptop = function () {
        return this.http.get(this.apiurl + 'api/laptop');
    };
    LaptopService.prototype.getLaptop = function (id) {
        return this.http.get(this.apiurl + 'api/laptop/' + id);
    };
    LaptopService.prototype.deleteOrder = function () {
        return this.http.delete(this.apiurl + 'api/laptop/delete');
    };
    LaptopService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], LaptopService);
    return LaptopService;
    var _a;
}());

//# sourceMappingURL=C:/Aniket/Harvard University/Spring 2018/New folder/assignment/assignment7/assignment7-final-Shroff1/client/src/laptop.service.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    apiurl: '/'
};
//# sourceMappingURL=C:/Aniket/Harvard University/Spring 2018/New folder/assignment/assignment7/assignment7-final-Shroff1/client/src/environment.js.map

/***/ })

},[366]);
//# sourceMappingURL=main.bundle.map