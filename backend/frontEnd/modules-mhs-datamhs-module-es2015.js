(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-mhs-datamhs-module"],{

/***/ "K5iF":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mhs/datamhs/datamhstambah/datamhstambah.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align: center;\">\r\n  <h4> Pendaftaran Mahasiswa </h4>\r\n</div>\r\n<div>\r\n  <form [formGroup]=\"formMhs\" (submit)=\"simpanAkunMhs()\" >\r\n    <mat-form-field>\r\n        <input\r\n          matInput\r\n          type=\"text\"\r\n          formControlName=\"nama_mhs\"\r\n          placeholder=\"Nama\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        type=\"text\"\r\n        formControlName=\"nim_mhs\"\r\n        placeholder=\"Nim\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        type=\"text\"\r\n        formControlName=\"no_hp_mhs\"\r\n        placeholder=\"Nomor Handphone\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        type=\"text\"\r\n        formControlName=\"ipk_mhs\"\r\n        placeholder=\"IPK\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        type=\"text\"\r\n        formControlName=\"nokwitansi_mhs\"\r\n        placeholder=\"No.Kwitansi\">\r\n    </mat-form-field>\r\n    <button\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      type=\"submit\">Simpan\r\n    </button>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "MoTu":
/*!************************************************!*\
  !*** ./src/app/modules/mhs/datamhs.service.ts ***!
  \************************************************/
/*! exports provided: DatamhsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatamhsService", function() { return DatamhsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const urlMhs = 'http://localhost:4000/api/mhs';
let DatamhsService = class DatamhsService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ambilSemua(params) {
        return this.http.get(urlMhs, { params });
    }
    ambil(id) {
        return this.http.get(`${urlMhs}/${id}`);
    }
    buat(data) {
        return this.http.post(`${urlMhs}/buat`, data);
    }
    update(id, data) {
        return this.http.put(`${urlMhs}/${id}`, data);
    }
    hapus(idm) {
        return this.http.delete(`${urlMhs}/${idm}`);
    }
    hapusSemua() {
        return this.http.delete(urlMhs);
    }
};
DatamhsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DatamhsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DatamhsService);



/***/ }),

/***/ "NpFv":
/*!***********************************************!*\
  !*** ./src/app/modules/mhs/datamhs.module.ts ***!
  \***********************************************/
/*! exports provided: DatamhsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatamhsModule", function() { return DatamhsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _datamhs_datamhstampil_datamhstampil_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datamhs/datamhstampil/datamhstampil.component */ "t2zf");
/* harmony import */ var _datamhs_datamhstambah_datamhstambah_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datamhs/datamhstambah/datamhstambah.component */ "wRsM");
/* harmony import */ var _mhs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mhs-routing.module */ "le48");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");













let DatamhsModule = class DatamhsModule {
};
DatamhsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _datamhs_datamhstampil_datamhstampil_component__WEBPACK_IMPORTED_MODULE_3__["DatamhstampilComponent"],
            _datamhs_datamhstambah_datamhstambah_component__WEBPACK_IMPORTED_MODULE_4__["DatamhstambahComponent"]
        ],
        imports: [
            _mhs_routing_module__WEBPACK_IMPORTED_MODULE_5__["MhsRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"]
        ]
    })
], DatamhsModule);



/***/ }),

/***/ "O0iW":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/mhs/datamhs/datamhstampil/datamhstampil.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFtaHN0YW1waWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJkYXRhbWhzdGFtcGlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "c6ov":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/mhs/datamhs/datamhstambah/datamhstambah.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field,\r\ntextarea {\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFtaHN0YW1iYWguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFXO0FBQ2IiLCJmaWxlIjoiZGF0YW1oc3RhbWJhaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQsXHJcbnRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "le48":
/*!***************************************************!*\
  !*** ./src/app/modules/mhs/mhs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MhsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MhsRoutingModule", function() { return MhsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_component_sidebar_sidebarmhs_sidebarmhs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/sidebar/sidebarmhs/sidebarmhs.component */ "XFV7");
/* harmony import */ var _datamhs_datamhstambah_datamhstambah_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datamhs/datamhstambah/datamhstambah.component */ "wRsM");
/* harmony import */ var _datamhs_datamhstampil_datamhstampil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datamhs/datamhstampil/datamhstampil.component */ "t2zf");






const routes = [
    {
        path: '',
        component: src_app_shared_component_sidebar_sidebarmhs_sidebarmhs_component__WEBPACK_IMPORTED_MODULE_3__["SidebarmhsComponent"],
        outlet: 'sidebarmhs'
    }, {
        path: 'tambahmhs',
        component: _datamhs_datamhstambah_datamhstambah_component__WEBPACK_IMPORTED_MODULE_4__["DatamhstambahComponent"]
    }, {
        path: 'tampilmhs',
        component: _datamhs_datamhstampil_datamhstampil_component__WEBPACK_IMPORTED_MODULE_5__["DatamhstampilComponent"]
    }, {
        path: 'tampilmhs/ubahdata/:id',
        component: _datamhs_datamhstambah_datamhstambah_component__WEBPACK_IMPORTED_MODULE_4__["DatamhstambahComponent"]
    }
];
let MhsRoutingModule = class MhsRoutingModule {
};
MhsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MhsRoutingModule);



/***/ }),

/***/ "t2zf":
/*!******************************************************************************!*\
  !*** ./src/app/modules/mhs/datamhs/datamhstampil/datamhstampil.component.ts ***!
  \******************************************************************************/
/*! exports provided: DatamhstampilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatamhstampilComponent", function() { return DatamhstampilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_datamhstampil_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./datamhstampil.component.html */ "zlZU");
/* harmony import */ var _datamhstampil_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datamhstampil.component.css */ "O0iW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _datamhs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../datamhs.service */ "MoTu");






let DatamhstampilComponent = class DatamhstampilComponent {
    constructor(dataMhs) {
        this.dataMhs = dataMhs;
        this.dataMhsSekarang = null;
        this.currentIndex = -1;
        this.nama_mhs = '';
        this.halaman = 1;
        this.totalAkunMhs = 0;
        this.totalDataPerHalaman = 10;
        this.banyakPerHalaman = [5, 10, 15];
        this.kolomMhs = ["nama", "nim", "no_hp_mhs", "ipk", "nokwitansi", "aksi"];
    }
    ngOnInit() {
        this.ambilDataMhs();
    }
    getRequestParams(searchTitle, halaman, totalDataPerHalaman) {
        let params = {};
        if (searchTitle) {
            params[`nama_mhs`] = searchTitle;
        }
        if (halaman) {
            params[`page`] = halaman - 1;
        }
        if (totalDataPerHalaman) {
            params[`size`] = totalDataPerHalaman;
        }
        return params;
    }
    ambilDataMhs() {
        const params = this.getRequestParams(this.nama_mhs, this.halaman, this.totalDataPerHalaman);
        this.dataMhs.ambilSemua(params)
            .subscribe((ambilDataMhs) => {
            this.mhs = ambilDataMhs.mhs;
            this.totalAkunMhs = ambilDataMhs.totalAkunMhs;
            console.log(ambilDataMhs);
        });
        error => {
            console.log(error);
        };
    }
    handlePageChange(event) {
        this.halaman = event;
        this.ambilDataMhs();
    }
    handlePageSizeChange(event) {
        this.totalDataPerHalaman = event.target.value;
        this.halaman = 1;
        this.ambilDataMhs();
    }
    setActiveTutorial(mhsTampil, index) {
        this.dataMhsSekarang = mhsTampil;
        this.currentIndex = index;
    }
    hapusMhs(id) {
        this.dataMhs.hapus(id)
            .subscribe(response => {
            console.log(response);
            this.ambilDataMhs();
        }, error => {
            console.log(error);
        });
    }
    hapusSemuaDataMhs() {
        this.dataMhs.hapusSemua()
            .subscribe(response => {
            console.log(response);
            this.ambilDataMhs();
        }, error => {
            console.log(error);
        });
    }
};
DatamhstampilComponent.ctorParameters = () => [
    { type: _datamhs_service__WEBPACK_IMPORTED_MODULE_5__["DatamhsService"] }
];
DatamhstampilComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
};
DatamhstampilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-datamhstampil',
        template: _raw_loader_datamhstampil_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_datamhstampil_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DatamhstampilComponent);



/***/ }),

/***/ "wRsM":
/*!******************************************************************************!*\
  !*** ./src/app/modules/mhs/datamhs/datamhstambah/datamhstambah.component.ts ***!
  \******************************************************************************/
/*! exports provided: DatamhstambahComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatamhstambahComponent", function() { return DatamhstambahComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_datamhstambah_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./datamhstambah.component.html */ "K5iF");
/* harmony import */ var _datamhstambah_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datamhstambah.component.css */ "c6ov");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _datamhs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../datamhs.service */ "MoTu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let DatamhstambahComponent = class DatamhstambahComponent {
    constructor(datamhsService, router, route) {
        this.datamhsService = datamhsService;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.mode = 'buat';
    }
    ngOnInit() {
        this.formMhs = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            nama_mhs: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)] }),
            nim_mhs: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            no_hp_mhs: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            ipk_mhs: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            nokwitansi_mhs: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
        });
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has('id')) {
                this.mode = 'edit';
                this.idMhs = paramMap.get('id');
                this.datamhsService.ambil(this.idMhs).subscribe(upMhs => {
                    this.dataMhs = upMhs;
                    this.formMhs.setValue({
                        nama_mhs: this.dataMhs.nama_mhs,
                        nim_mhs: this.dataMhs.nim_mhs,
                        no_hp_mhs: this.dataMhs.no_hp_mhs,
                        ipk_mhs: this.dataMhs.ipk_mhs,
                        nokwitansi_mhs: this.dataMhs.nokwitansi_mhs
                    });
                });
            }
            else {
                this.mode = 'buat';
                this.idMhs = null;
            }
        });
    }
    simpanAkunMhs() {
        if (this.formMhs.invalid) {
            return;
        }
        if (this.mode === 'buat') {
            this.datamhsService.buat({
                nama_mhs: this.formMhs.value.nama_mhs,
                nim_mhs: this.formMhs.value.nim_mhs,
                no_hp_mhs: this.formMhs.value.no_hp_mhs,
                ipk_mhs: this.formMhs.value.ipk_mhs,
                nokwitansi_mhs: this.formMhs.value.nokwitansi_mhs
            })
                .subscribe(akunMhs => {
                console.log(akunMhs);
                this.submitted = true;
            }, error => {
                console.log(error);
            });
        }
        else {
            this.datamhsService.update(this.dataMhs.id, this.dataMhs = {
                nama_mhs: this.formMhs.value.nama_mhs,
                nim_mhs: this.formMhs.value.nim_mhs,
                no_hp_mhs: this.formMhs.value.no_hp_mhs,
                ipk_mhs: this.formMhs.value.ipk_mhs,
                nokwitansi_mhs: this.formMhs.value.nokwitansi_mhs
            }).subscribe(dataUploadMhs => {
                console.log(dataUploadMhs);
                this.submitted = true;
            }, error => {
                console.log(error);
            });
        }
        this.formMhs.reset();
        this.router.navigate(["/dashboard/mhs/tampilmhs"]);
    }
};
DatamhstambahComponent.ctorParameters = () => [
    { type: _datamhs_service__WEBPACK_IMPORTED_MODULE_5__["DatamhsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
DatamhstambahComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-datamhstambah',
        template: _raw_loader_datamhstambah_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_datamhstambah_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DatamhstambahComponent);



/***/ }),

/***/ "zlZU":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mhs/datamhs/datamhstampil/datamhstampil.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div>\r\n    <button mat-icon-button routerLink=\"/dashboard/mhs/tambahmhs\">\r\n      <mat-icon>add_box</mat-icon>\r\n    </button>\r\n    <table mat-table [dataSource]=\"mhs\" class=\"mat-elevation-z8\">\r\n      <ng-container matColumnDef=\"nama\">\r\n        <th mat-header-cell *matHeaderCellDef> Nama. </th>\r\n        <td mat-cell *matCellDef=\"let mhs\"> {{mhs.nama_mhs}}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"nim\">\r\n        <th mat-header-cell *matHeaderCellDef> Nim </th>\r\n        <td mat-cell *matCellDef=\"let mhs\">{{mhs.nim_mhs}} </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"no_hp_mhs\">\r\n        <th mat-header-cell *matHeaderCellDef> Nomor Handphone </th>\r\n        <td mat-cell *matCellDef=\"let mhs\">{{mhs.no_hp_mhs}} </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"ipk\">\r\n        <th mat-header-cell *matHeaderCellDef> IPK </th>\r\n        <td mat-cell *matCellDef=\"let mhs\">{{mhs.ipk_mhs}} </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"nokwitansi\">\r\n        <th mat-header-cell *matHeaderCellDef> No.Kwitansi </th>\r\n        <td mat-cell *matCellDef=\"let mhs\">{{mhs.nokwitansi_mhs}} </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"aksi\">\r\n        <th mat-header-cell *matHeaderCellDef> Aksi </th>\r\n        <td mat-cell *matCellDef=\"let mhs\"> \r\n          <div >\r\n            <a mat-button color=\"primary\" [routerLink]=\"['ubahdata', mhs.id]\">EDIT</a>\r\n            <button mat-button color=\"warn\" (click)=\"hapusMhs(mhs.id)\">DELETE</button>\r\n          </div>\r\n        </td>\r\n      </ng-container>      \r\n      <tr mat-header-row *matHeaderRowDef=\"kolomMhs\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: kolomMhs;\"></tr>\r\n    </table>\r\n  </div>\r\n</div>");

/***/ })

}]);
//# sourceMappingURL=modules-mhs-datamhs-module-es2015.js.map