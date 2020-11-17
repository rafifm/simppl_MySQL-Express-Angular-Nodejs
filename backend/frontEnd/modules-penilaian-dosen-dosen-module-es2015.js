(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-penilaian-dosen-dosen-module"],{

/***/ "3Zsk":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/penilaian/dosen/dosentambahnilai/dosentambahnilai.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DosentambahnilaiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DosentambahnilaiComponent", function() { return DosentambahnilaiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dosentambahnilai_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dosentambahnilai.component.html */ "nQAv");
/* harmony import */ var _dosentambahnilai_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dosentambahnilai.component.css */ "Gcaq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dosen_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dosen.service */ "Z8iw");







let DosentambahnilaiComponent = class DosentambahnilaiComponent {
    constructor(route, router, dosenService) {
        this.route = route;
        this.router = router;
        this.dosenService = dosenService;
    }
    ngOnInit() {
        this.formNilaiDosen = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            soalno1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            soalno2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            soalno3: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            soalno4: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            soalno5: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            soalno6: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            soalno7: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            soalno8: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            soalno9: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            soalno10: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            soalno11: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            soalno12: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            soalno13: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            soalno14: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            soalno15: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] })
        });
        this.idMhs = this.route.snapshot.paramMap.get('idMhs');
        this.dosenService.ambilSatuMhs(this.idMhs)
            .subscribe(mhs => {
            console.log(mhs);
        }, error => {
            console.log(error);
        });
    }
    tombolNilai() {
        var no1 = this.formNilaiDosen.value.soalno1;
        var no2 = this.formNilaiDosen.value.soalno2;
        var no3 = this.formNilaiDosen.value.soalno3;
        var no4 = this.formNilaiDosen.value.soalno4;
        var no5 = this.formNilaiDosen.value.soalno5;
        var no6 = this.formNilaiDosen.value.soalno6;
        var no7 = this.formNilaiDosen.value.soalno7;
        var no8 = this.formNilaiDosen.value.soalno8;
        var no9 = this.formNilaiDosen.value.soalno9;
        var no10 = this.formNilaiDosen.value.soalno10;
        var no11 = this.formNilaiDosen.value.soalno11;
        var no12 = this.formNilaiDosen.value.soalno12;
        var no13 = this.formNilaiDosen.value.soalno13;
        var no14 = this.formNilaiDosen.value.soalno14;
        var no15 = this.formNilaiDosen.value.soalno15;
        let idPengguna = this.route.snapshot.paramMap.get('idPengguna');
        this.vNilai = (((parseInt(no1) + parseInt(no2) + parseInt(no3) + parseInt(no4) + parseInt(no5) + parseInt(no6) + parseInt(no7) + parseInt(no8) + parseInt(no9) + parseInt(no10) + parseInt(no11) + parseInt(no12) + parseInt(no13) + parseInt(no14) + parseInt(no15)) / 60) * 100).toFixed(2);
        let dbNilai;
        this.dosenService.nilaiUas(this.idMhs, dbNilai = {
            nilaiDosen_uas: this.vNilai
        }).subscribe(nilai => {
            console.log(nilai);
            this.router.navigate(['/dashboard/dosen/tampilnilai']);
        }, error => {
            console.log(error);
        });
    }
};
DosentambahnilaiComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _dosen_service__WEBPACK_IMPORTED_MODULE_6__["DosenService"] }
];
DosentambahnilaiComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dosentambahnilai',
        template: _raw_loader_dosentambahnilai_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dosentambahnilai_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DosentambahnilaiComponent);



/***/ }),

/***/ "Gcaq":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/penilaian/dosen/dosentambahnilai/dosentambahnilai.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-radio-group{\r\n    display: inline-flex;\r\n    width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvc2VudGFtYmFobmlsYWkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2YiLCJmaWxlIjoiZG9zZW50YW1iYWhuaWxhaS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1yYWRpby1ncm91cHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "J4as":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/penilaian/dosen/dosentampilnilai/dosentampilnilai.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DosentampilnilaiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DosentampilnilaiComponent", function() { return DosentampilnilaiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dosentampilnilai_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dosentampilnilai.component.html */ "ZBFL");
/* harmony import */ var _dosentampilnilai_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dosentampilnilai.component.css */ "Vcod");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_layouts_akun_services_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/layouts/akun/_services/token-storage.service */ "3QRs");
/* harmony import */ var _dosen_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dosen.service */ "Z8iw");







let DosentampilnilaiComponent = class DosentampilnilaiComponent {
    constructor(dbMhs, tokenStorage, router) {
        this.dbMhs = dbMhs;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.kolomNilai = ["nama", "nim", "aksi"];
    }
    ngOnInit() {
        this.ambilDataMhs();
    }
    ambilDataMhs() {
        var tombolnilai;
        this.idPengguna = this.tokenStorage.getPengguna().idPengguna;
        this.dbMhs.ambilDosen(this.idPengguna)
            .subscribe(ambilData => {
            this.dosen = ambilData[0].mahasiswas;
            for (var i = 0; i <= this.dosen.length; i++) {
                if (this.dosen[i].nilaiId == null) {
                    tombolnilai = true;
                }
                else if (this.dosen[i].nilaiId != null) {
                    tombolnilai = false;
                }
            }
        });
        error => {
            console.log(error);
        };
    }
    nilai(idMhs) {
        let idPengguna = this.idPengguna;
        this.router.navigate(['/dashboard/dosen/tambahnilai', idMhs, idPengguna]);
    }
};
DosentampilnilaiComponent.ctorParameters = () => [
    { type: _dosen_service__WEBPACK_IMPORTED_MODULE_6__["DosenService"] },
    { type: src_app_layouts_akun_services_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DosentampilnilaiComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dosentampilnilai',
        template: _raw_loader_dosentampilnilai_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dosentampilnilai_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DosentampilnilaiComponent);



/***/ }),

/***/ "N3eU":
/*!*****************************************************************!*\
  !*** ./src/app/modules/penilaian/dosen/dosen-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DosenRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DosenRoutingModule", function() { return DosenRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dosentambahnilai_dosentambahnilai_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dosentambahnilai/dosentambahnilai.component */ "3Zsk");
/* harmony import */ var _dosentampilnilai_dosentampilnilai_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dosentampilnilai/dosentampilnilai.component */ "J4as");
/* harmony import */ var src_app_shared_component_sidebar_sidebardosen_sidebardosen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/sidebar/sidebardosen/sidebardosen.component */ "1VV9");






const routes = [
    {
        path: '',
        component: src_app_shared_component_sidebar_sidebardosen_sidebardosen_component__WEBPACK_IMPORTED_MODULE_5__["SidebardosenComponent"],
        outlet: 'sidebardosen'
    },
    {
        path: 'tambahnilai/:idMhs/:idPengguna',
        component: _dosentambahnilai_dosentambahnilai_component__WEBPACK_IMPORTED_MODULE_3__["DosentambahnilaiComponent"]
    },
    {
        path: 'tampilnilai',
        component: _dosentampilnilai_dosentampilnilai_component__WEBPACK_IMPORTED_MODULE_4__["DosentampilnilaiComponent"]
    }
];
let DosenRoutingModule = class DosenRoutingModule {
};
DosenRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DosenRoutingModule);



/***/ }),

/***/ "Q8Lm":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/penilaian/dosen/dosentambahnilaiuts/dosentambahnilaiuts.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3NlbnRhbWJhaG5pbGFpdXRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "Vcod":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/penilaian/dosen/dosentampilnilai/dosentampilnilai.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-nilai {\r\n  background-color: green;\r\n  color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvc2VudGFtcGlsbmlsYWkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2IiLCJmaWxlIjoiZG9zZW50YW1waWxuaWxhaS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LW5pbGFpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogI2ZmZjtcclxufSJdfQ== */");

/***/ }),

/***/ "YZGH":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/penilaian/dosen/dosentambahnilaiuts/dosentambahnilaiuts.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>dosentambahnilaiuts works!</p>\n");

/***/ }),

/***/ "Z8iw":
/*!**********************************************************!*\
  !*** ./src/app/modules/penilaian/dosen/dosen.service.ts ***!
  \**********************************************************/
/*! exports provided: DosenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DosenService", function() { return DosenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



const urlDosen = 'http://localhost:4000/api/akundosen';
const urlMhs = 'http://localhost:4000/api/mhs';
let DosenService = class DosenService {
    constructor(http) {
        this.http = http;
    }
    ambilDosen(idPengguna) {
        return this.http.get(`${urlDosen}/penilaian/${idPengguna}`);
    }
    nilaiUas(idMhsNilai, nilai) {
        return this.http.put(`${urlMhs}/nilaiuas/${idMhsNilai}`, nilai);
    }
    ambilSatuMhs(idMhs) {
        return this.http.get(`${urlMhs}/${idMhs}`);
    }
};
DosenService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DosenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], DosenService);



/***/ }),

/***/ "ZBFL":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/penilaian/dosen/dosentampilnilai/dosentampilnilai.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div>\r\n    <table mat-table [dataSource]=\"dosen\" class=\"mat-elevation-z8\" >\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"nama\" >\r\n        <th mat-header-cell *matHeaderCellDef> Nama </th>\r\n        <td mat-cell *matCellDef=\"let dosen \">{{dosen.nama_mhs}}</td>\r\n      </ng-container>\r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"nim\">\r\n        <th mat-header-cell *matHeaderCellDef> Nim. </th>\r\n        <td mat-cell *matCellDef=\"let dosen\"> {{dosen.nim_mhs}}</td>\r\n      </ng-container>     \r\n      <ng-container matColumnDef=\"aksi\">\r\n        <th mat-header-cell *matHeaderCellDef > UAS </th>\r\n        <td mat-cell *matCellDef=\"let dosen\" > \r\n          <p *ngIf=\"dosen.nilaiId\">{{dosen.nilai.nilaiDosen_uas}}</p>\r\n          <mat-action-row >\r\n            <button mat-button color=\"nilai\" (click)=\"nilai(dosen.id)\" *ngIf=\"!dosen.nilaiId\">Nilai</button>\r\n            <!-- <a mat-button color=\"primary\">EDIT</a> -->\r\n            <!-- <button mat-button color=\"warn\">DELETE</button> -->\r\n          </mat-action-row>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"kolomNilai\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: kolomNilai;\"></tr>\r\n    </table>\r\n    <!--<mat-paginator [length]=\"totalmahasiswa\" [pageSize]=\"postsPerPage\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onChangedPage($event)\" *ngIf=\"posts.length > 0 \"></mat-paginator>-->    \r\n  </div>\r\n</div>");

/***/ }),

/***/ "gc19":
/*!*********************************************************!*\
  !*** ./src/app/modules/penilaian/dosen/dosen.module.ts ***!
  \*********************************************************/
/*! exports provided: DosenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DosenModule", function() { return DosenModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dosen_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dosen-routing.module */ "N3eU");
/* harmony import */ var _dosentambahnilai_dosentambahnilai_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dosentambahnilai/dosentambahnilai.component */ "3Zsk");
/* harmony import */ var _dosentampilnilai_dosentampilnilai_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dosentampilnilai/dosentampilnilai.component */ "J4as");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _dosentambahnilaiuts_dosentambahnilaiuts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dosentambahnilaiuts/dosentambahnilaiuts.component */ "pobB");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
















let DosenModule = class DosenModule {
};
DosenModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _dosentambahnilai_dosentambahnilai_component__WEBPACK_IMPORTED_MODULE_4__["DosentambahnilaiComponent"],
            _dosentampilnilai_dosentampilnilai_component__WEBPACK_IMPORTED_MODULE_5__["DosentampilnilaiComponent"],
            _dosentambahnilaiuts_dosentambahnilaiuts_component__WEBPACK_IMPORTED_MODULE_8__["DosentambahnilaiutsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dosen_routing_module__WEBPACK_IMPORTED_MODULE_3__["DosenRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"]
        ]
    })
], DosenModule);



/***/ }),

/***/ "nQAv":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/penilaian/dosen/dosentambahnilai/dosentambahnilai.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align: center;\">\r\n  <h4> Penilaian Dosen </h4>\r\n</div>\r\n<form [formGroup]=\"formNilaiDosen\" (submit)=\"tombolNilai()\">\r\n<div >\r\n  <mat-grid-tile-header >A.PENENTUAN BAHAN PEMBELAJARAN DAN MERUMUSKAN TUJUAN</mat-grid-tile-header>\r\n  <mat-grid-list cols=\"12\" rowHeight=\"50px\">\r\n    <mat-grid-tile colspan=\"8\"></mat-grid-tile>\r\n    <mat-grid-tile colspan=\"1\">Sangat Kurang</mat-grid-tile>\r\n    <mat-grid-tile colspan=\"1\">Kurang</mat-grid-tile>\r\n    <mat-grid-tile colspan=\"1\">Baik</mat-grid-tile>\r\n    <mat-grid-tile colspan=\"1\">Amat Baik</mat-grid-tile>\r\n  </mat-grid-list>\r\n  <mat-grid-list cols=\"12\" rowHeight=\"50px\">\r\n    <mat-grid-tile colspan=\"1\">1.</mat-grid-tile>\r\n    <mat-grid-tile colspan=\"7\">Kesesuaian bahan pembelajaran yang digunakan dengan kurikulum.</mat-grid-tile>\r\n    <mat-radio-group formControlName=\"soalno1\">\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"1\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"2\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"3\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"4\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n    </mat-radio-group>\r\n  </mat-grid-list>\r\n  <mat-divider></mat-divider>\r\n</div>\r\n<div >\r\n  <mat-grid-list cols=\"12\" rowHeight=\"50px\">\r\n    <mat-grid-tile colspan=\"1\">2.</mat-grid-tile>\r\n    <mat-grid-tile colspan=\"7\">Keseuaian rumusan kompetensi dasar, indikator dan tujuan pembelajaran.</mat-grid-tile>\r\n    <mat-radio-group formControlName=\"soalno2\">\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"1\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"2\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"3\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"4\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n    </mat-radio-group>\r\n  </mat-grid-list>\r\n  <mat-divider></mat-divider>\r\n</div>\r\n<div >\r\n  <mat-grid-tile-header >B.PEMILIHAN DAN PENGORGANISASIAN MATERI, MEDIA, DAN SUMBER</mat-grid-tile-header>\r\n  <mat-grid-list cols=\"12\" rowHeight=\"50px\">\r\n    <mat-grid-tile colspan=\"1\">3.</mat-grid-tile>\r\n    <mat-grid-tile colspan=\"7\">Kesesuaian materi dengan tujuan, perkembangan siswa, dan urutkan, kedalaman, dan kemutakhiran materi.</mat-grid-tile>\r\n    <mat-radio-group formControlName=\"soalno3\">\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"1\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"2\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"3\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"4\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n    </mat-radio-group>\r\n  </mat-grid-list>\r\n  <mat-divider></mat-divider>\r\n</div>\r\n<div >\r\n  <mat-grid-list cols=\"12\" rowHeight=\"50px\">\r\n    <mat-grid-tile colspan=\"1\">4.</mat-grid-tile>\r\n    <mat-grid-tile colspan=\"7\">Kesesuaian media (alat bantu mengajar) dengan tujuan, materi, metoda, dan lingkungan (daya cerna) siswa.</mat-grid-tile>\r\n    <mat-radio-group formControlName=\"soalno4\">\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"1\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"2\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"3\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"4\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n    </mat-radio-group>\r\n  </mat-grid-list>\r\n  <mat-divider></mat-divider>\r\n</div>\r\n<div >\r\n  <mat-grid-list cols=\"12\" rowHeight=\"50px\">\r\n    <mat-grid-tile colspan=\"1\">5.</mat-grid-tile>\r\n    <mat-grid-tile colspan=\"7\">Kesesuaian sumber belajar dengan tujuan, materi, metoda, dan lingkungan(daya cerna) siswa.</mat-grid-tile>\r\n    <mat-radio-group formControlName=\"soalno5\">\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"1\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"2\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"3\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"4\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n    </mat-radio-group>\r\n  </mat-grid-list>\r\n  <mat-divider></mat-divider>\r\n</div>\r\n<div >\r\n  <mat-grid-tile-header >C. RANCANGAN SKENARIO/STRATEGI PEMBELAJARAN</mat-grid-tile-header>\r\n  <mat-grid-list cols=\"12\" rowHeight=\"55px\">\r\n    <mat-grid-tile colspan=\"1\">6.</mat-grid-tile>\r\n    <mat-grid-tile colspan=\"7\">Kesesuaian kegiatan belajar yang dipilih dengan tujuan, bahan, waktu, sarana, lingkungan, dan bervariasi serta memungkinkan keterlibatan siswa.</mat-grid-tile>\r\n    <mat-radio-group formControlName=\"soalno6\">\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"1\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"2\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"3\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"4\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n    </mat-radio-group>\r\n  </mat-grid-list>\r\n  <mat-divider></mat-divider>\r\n</div>\r\n<div >\r\n  <mat-grid-list cols=\"12\" rowHeight=\"55px\">\r\n    <mat-grid-tile colspan=\"1\">7.</mat-grid-tile>\r\n    <mat-grid-tile colspan=\"7\">Kesesuaian langkah kegitan belajar yang dipilih dengan tujuan, bahan, waktu, sarana, lingkungan, dan memungkinkan keterlibatan siswa.</mat-grid-tile>\r\n    <mat-radio-group formControlName=\"soalno7\">\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"1\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"2\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"3\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"4\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n    </mat-radio-group>\r\n  </mat-grid-list>\r\n  <mat-divider></mat-divider>\r\n</div>\r\n<div >\r\n  <mat-grid-list cols=\"12\" rowHeight=\"50px\">\r\n    <mat-grid-tile colspan=\"1\">8.</mat-grid-tile>\r\n    <mat-grid-tile colspan=\"7\">Cara-cara pengorganisasian siswa seperti bahan, kegiatan, media yang menarik, dan melibatkan siswa.</mat-grid-tile>\r\n    <mat-radio-group formControlName=\"soalno8\">\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"1\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"2\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"3\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"4\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n    </mat-radio-group>\r\n  </mat-grid-list>\r\n  <mat-divider></mat-divider>\r\n</div>\r\n<div >\r\n  <mat-grid-list cols=\"12\" rowHeight=\"50px\">\r\n    <mat-grid-tile colspan=\"1\">9.</mat-grid-tile>\r\n    <mat-grid-tile colspan=\"7\">Alokasi waktu belajar-mengajar (pembukaan, inti, penutup) dicantumkan rinci, dan proposional.</mat-grid-tile>\r\n    <mat-radio-group formControlName=\"soalno9\">\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"1\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"2\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"3\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"4\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n    </mat-radio-group>\r\n  </mat-grid-list>\r\n  <mat-divider></mat-divider>\r\n</div>\r\n<div >\r\n  <mat-grid-list cols=\"12\" rowHeight=\"50px\">\r\n    <mat-grid-tile colspan=\"1\">10.</mat-grid-tile>\r\n    <mat-grid-tile colspan=\"7\">Cara-cara pengorganisasian siswa agr berpartisipasi aktif dalam kegiatan pembelajaran.</mat-grid-tile>\r\n    <mat-radio-group formControlName=\"soalno10\">\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"1\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"2\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"3\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"4\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n    </mat-radio-group>\r\n  </mat-grid-list>\r\n  <mat-divider></mat-divider>\r\n</div>\r\n<div >\r\n  <mat-grid-tile-header >E. RANCANGAN PROSEDUR BENTUK DAN JENIS PENILAIAN</mat-grid-tile-header>\r\n  <mat-grid-list cols=\"12\" rowHeight=\"50px\">\r\n    <mat-grid-tile colspan=\"1\">11.</mat-grid-tile>\r\n    <mat-grid-tile colspan=\"7\">Cara-cara pengorganisasian siswa agr berpartisipasi aktif dalam kegiatan pembelajaran.</mat-grid-tile>\r\n    <mat-radio-group formControlName=\"soalno11\">\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"1\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"2\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"3\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"4\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n    </mat-radio-group>\r\n  </mat-grid-list>\r\n  <mat-divider></mat-divider>\r\n</div>\r\n<div >\r\n  <mat-grid-list cols=\"12\" rowHeight=\"50px\">\r\n    <mat-grid-tile colspan=\"1\">12.</mat-grid-tile>\r\n    <mat-grid-tile colspan=\"7\">Teknik penilaian yang direncanakan mencakup tes, unjuk kerja, hasil karya, dan penugasan.</mat-grid-tile>\r\n    <mat-radio-group formControlName=\"soalno12\">\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"1\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"2\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"3\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"4\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n    </mat-radio-group>\r\n  </mat-grid-list>\r\n  <mat-divider></mat-divider>\r\n</div>\r\n<div >\r\n  <mat-grid-list cols=\"12\" rowHeight=\"50px\">\r\n    <mat-grid-tile colspan=\"1\">13.</mat-grid-tile>\r\n    <mat-grid-tile colspan=\"7\">Layanan remedial dan pengayaan dicantumkan dan diuraikan secara lengkap.</mat-grid-tile>\r\n    <mat-radio-group formControlName=\"soalno13\">\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"1\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"2\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"3\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"4\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n    </mat-radio-group>\r\n  </mat-grid-list>\r\n  <mat-divider></mat-divider>\r\n</div>\r\n<div >\r\n  <mat-grid-tile-header >F. KESAN UMUM RENCANA PEMBELAJARAN</mat-grid-tile-header>\r\n  <mat-grid-list cols=\"12\" rowHeight=\"50px\">\r\n    <mat-grid-tile colspan=\"1\">14.</mat-grid-tile>\r\n    <mat-grid-tile colspan=\"7\"> Kebersihan dan kerapian tulisan, dan ilustrasi menarik.</mat-grid-tile>\r\n    <mat-radio-group formControlName=\"soalno14\">\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"1\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"2\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"3\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"4\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n    </mat-radio-group>\r\n  </mat-grid-list>\r\n  <mat-divider></mat-divider>\r\n</div>\r\n<div >\r\n  <mat-grid-list cols=\"12\" rowHeight=\"50px\">\r\n    <mat-grid-tile colspan=\"1\">15.</mat-grid-tile>\r\n    <mat-grid-tile colspan=\"7\">Penggunaan bahasa tulis tepat, baku, komunikatif, dan sesuai dengan EYD.</mat-grid-tile>\r\n    <mat-radio-group formControlName=\"soalno15\">\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"1\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"2\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"3\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile colspan=\"1\">\r\n        <mat-radio-button value=\"4\"></mat-radio-button>\r\n      </mat-grid-tile>\r\n    </mat-radio-group>\r\n  </mat-grid-list>\r\n  <mat-divider></mat-divider>\r\n</div>\r\n<div>\r\n  <mat-grid-list cols=\"12\" rowHeight=\"50px\">\r\n    <mat-grid-tile colspan=\"8\"> Nilai </mat-grid-tile>\r\n    <mat-grid-tile colspan=\"4\"> {{vNilai}} </mat-grid-tile>\r\n  </mat-grid-list>\r\n  <mat-divider></mat-divider>\r\n</div>\r\n<button \r\n  mat-raised-button\r\n  color=\"primary\"\r\n  type=\"submit\"> Simpan \r\n</button>\r\n</form>\r\n");

/***/ }),

/***/ "pobB":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/penilaian/dosen/dosentambahnilaiuts/dosentambahnilaiuts.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DosentambahnilaiutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DosentambahnilaiutsComponent", function() { return DosentambahnilaiutsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dosentambahnilaiuts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dosentambahnilaiuts.component.html */ "YZGH");
/* harmony import */ var _dosentambahnilaiuts_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dosentambahnilaiuts.component.css */ "Q8Lm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DosentambahnilaiutsComponent = class DosentambahnilaiutsComponent {
    constructor() { }
    ngOnInit() {
    }
};
DosentambahnilaiutsComponent.ctorParameters = () => [];
DosentambahnilaiutsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dosentambahnilaiuts',
        template: _raw_loader_dosentambahnilaiuts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dosentambahnilaiuts_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DosentambahnilaiutsComponent);



/***/ })

}]);
//# sourceMappingURL=modules-penilaian-dosen-dosen-module-es2015.js.map