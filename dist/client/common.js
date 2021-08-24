(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "3hzH":
/*!*****************************************!*\
  !*** ./src/app/models/product.model.ts ***!
  \*****************************************/
/*! exports provided: productModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productModel", function() { return productModel; });
class productModel {
    constructor() {
        this.id = "";
        this.name = "";
        this.category = "";
        this.marque = "";
        this.type = "";
        this.pricev = "";
        this.TVA = "";
        this.typep = "";
        this.typetaxe = "";
        this.desc = "";
        this.priceht = "";
        this.pricettc = "";
        this.refconst = "";
        this.refint = "";
        this.Enstock = "";
    }
}


/***/ }),

/***/ "FrDY":
/*!*********************************************!*\
  !*** ./src/app/models/Listproduct.model.ts ***!
  \*********************************************/
/*! exports provided: ListProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProduct", function() { return ListProduct; });
class ListProduct {
}


/***/ }),

/***/ "Gdn9":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ProductService {
    constructor(http) {
        this.http = http;
    }
    getData() {
        return this.http.get('http://127.0.0.1:8000/api/rvente/products');
    }
    getProductById(id) {
        return this.http.get('http://127.0.0.1:8000/api/rvente/product/' + id);
    }
    insertData(data) {
        return this.http.post('http://127.0.0.1:8000/api/rvente/addProduct', data);
    }
    updateData(id, data) {
        return this.http.put('http://127.0.0.1:8000/api/rvente/updateProduct/' + id, data);
    }
    deleteData(id) {
        return this.http.delete('http://127.0.0.1:8000/api/rvente/deleteProduct/' + id);
    }
    nbprod() {
        return this.http.get('http://127.0.0.1:8000/api/rvente/nbprod');
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ })

}]);