(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-kaprodi-kaprodi-module"],{

/***/ "0P7e":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/kaprodi/penentuan/tambah-kuota/tambah-kuota.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>tambah-kuota works!</p>\r\n\r\n<div>\r\n  <div>\r\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"nomor\">\r\n        <th mat-header-cell *matHeaderCellDef> No. </th>\r\n        <td mat-cell *matCellDef=\"let post\">{{post.nomor}} </td>\r\n      </ng-container>\r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"sekolah\">\r\n        <th mat-header-cell *matHeaderCellDef> Sekolah. </th>\r\n        <td mat-cell *matCellDef=\"let post\"> {{post.sekolah}}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"kuota\">\r\n        <th mat-header-cell *matHeaderCellDef> Kuota </th>\r\n        <td mat-cell *matCellDef=\"let post\"> {{post.kuota}}</td>\r\n      </ng-container>    \r\n      <!-- Weight Column -->\r\n      <ng-container matColumnDef=\"status\">\r\n        <th mat-header-cell *matHeaderCellDef> Status </th>\r\n        <td mat-cell *matCellDef=\"let post\"> {{post.status}} </td>\r\n      </ng-container>\r\n      \r\n      <ng-container matColumnDef=\"aksi\">\r\n        <th mat-header-cell *matHeaderCellDef> Aksi </th>\r\n        <td mat-cell *matCellDef=\"let post\"> \r\n          <mat-action-row >\r\n            <a mat-button color=\"primary\">EDIT</a>\r\n            <button mat-button color=\"warn\">DELETE</button>\r\n          </mat-action-row>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <!--<mat-paginator [length]=\"totalmahasiswa\" [pageSize]=\"postsPerPage\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onChangedPage($event)\" *ngIf=\"posts.length > 0 \"></mat-paginator>-->    \r\n  </div>\r\n</div>");

/***/ }),

/***/ "3wB5":
/*!******************************************************!*\
  !*** ./src/app/modules/kaprodi/kaprodi.component.ts ***!
  \******************************************************/
/*! exports provided: KaprodiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KaprodiComponent", function() { return KaprodiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_kaprodi_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./kaprodi.component.html */ "yq2K");
/* harmony import */ var _kaprodi_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kaprodi.component.css */ "oiq4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let KaprodiComponent = class KaprodiComponent {
    constructor() { }
    ngOnInit() {
    }
};
KaprodiComponent.ctorParameters = () => [];
KaprodiComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-kaprodi',
        template: _raw_loader_kaprodi_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_kaprodi_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], KaprodiComponent);



/***/ }),

/***/ "5F7E":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/kaprodi/penempatan/pilih-tmpt-guru/pilih-tmpt-guru.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PilihTmptGuruComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PilihTmptGuruComponent", function() { return PilihTmptGuruComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pilih_tmpt_guru_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pilih-tmpt-guru.component.html */ "7+1x");
/* harmony import */ var _pilih_tmpt_guru_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pilih-tmpt-guru.component.css */ "btYb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _penempatan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../penempatan.service */ "BS8S");






let PilihTmptGuruComponent = class PilihTmptGuruComponent {
    constructor(dataPenempatan) {
        this.dataPenempatan = dataPenempatan;
        this.dataGuruSekarang = null;
        this.nama_guru = '';
        this.currentIndex = -1;
        this.halaman = 1;
        this.totalDataSekolah = 0;
        this.totalDataGuru = 0;
        this.totalDataPerHalaman = 5;
        this.banyakPerHalaman = [5, 10, 15];
        this.kolomGuru = ["nama_guru", "penempatan"];
    }
    ngOnInit() {
        this.ambilData();
    }
    getRequestParams(searchTitle, halaman, totalDataPerHalaman) {
        let params = {};
        if (searchTitle) {
            params[`nama_guru`] = searchTitle;
        }
        if (halaman) {
            params[`page`] = halaman - 1;
        }
        if (totalDataPerHalaman) {
            params[`size`] = totalDataPerHalaman;
        }
        return params;
    }
    ambilData() {
        const params = this.getRequestParams(this.nama_guru, this.halaman, this.totalDataPerHalaman);
        this.dataPenempatan.ambilSemuaGuru(params)
            .subscribe((ambilDataGuru) => {
            this.guru = ambilDataGuru.guru;
            this.totalDataGuru = ambilDataGuru.totalDataGuru;
        });
        error => {
            console.log(error);
        };
        this.dataPenempatan.ambilSemuaMhs(params)
            .subscribe((ambilDataMhs) => {
            this.mhs = ambilDataMhs.mhs;
            this.totalDataGuru = ambilDataMhs.totalDataMhs;
        });
        error => {
            console.log(error);
        };
    }
    handlePageChange(event) {
        this.halaman = event;
        this.ambilData();
    }
    handlePageSizeChange(event) {
        this.totalDataPerHalaman = event.target.value;
        this.halaman = 1;
        this.ambilData();
    }
    setActiveTutorial(guru, index) {
        this.dataGuruSekarang = guru;
        this.currentIndex = index;
    }
    hapusSemuaDataDosen() {
        this.dataPenempatan.hapusSemua()
            .subscribe(response => {
            console.log(response);
            this.ambilData();
        }, error => {
            console.log(error);
        });
    }
};
PilihTmptGuruComponent.ctorParameters = () => [
    { type: _penempatan_service__WEBPACK_IMPORTED_MODULE_5__["PenempatanService"] }
];
PilihTmptGuruComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
};
PilihTmptGuruComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pilih-tmpt-guru',
        template: _raw_loader_pilih_tmpt_guru_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pilih_tmpt_guru_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PilihTmptGuruComponent);



/***/ }),

/***/ "5c4O":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/kaprodi/penentuan/tambah-sekolah/tambah-sekolah.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TambahSekolahComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TambahSekolahComponent", function() { return TambahSekolahComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tambah_sekolah_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tambah-sekolah.component.html */ "O5p1");
/* harmony import */ var _tambah_sekolah_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tambah-sekolah.component.css */ "CR1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _datasekolah_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../datasekolah.service */ "S/Q7");







let TambahSekolahComponent = class TambahSekolahComponent {
    constructor(datasekolahService, router, route) {
        this.datasekolahService = datasekolahService;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.mode = 'buat';
    }
    ngOnInit() {
        this.formSekolah = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            nama_sekolah: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)] }),
            kuotamhs: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] })
        });
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has("id")) {
                this.mode = "edit";
                this.idSekolah = paramMap.get("id");
                this.datasekolahService.ambil(this.idSekolah).subscribe(updateSekolah => {
                    this.dataSekolah = updateSekolah;
                    this.formSekolah.setValue({
                        nama_sekolah: this.dataSekolah.nama_sekolah,
                        kuotamhs: this.dataSekolah.kuotamhs
                    });
                });
            }
            else {
                this.mode = 'buat';
                this.idSekolah = null;
            }
        });
    }
    simpanDataSekolah() {
        if (this.formSekolah.invalid) {
            return;
        }
        if (this.mode === 'buat') {
            this.datasekolahService.buat({
                nama_sekolah: this.formSekolah.value.nama_sekolah,
                kuotamhs: this.formSekolah.value.kuotamhs
            }).subscribe(datakuotasekolah => {
                console.log(datakuotasekolah);
                this.submitted = true;
            }, error => {
                console.log(error);
            });
        }
        else {
            this.datasekolahService.update(this.dataSekolah.id, this.dataSekolah = {
                nama_sekolah: this.formSekolah.value.nama_sekolah,
                kuotamhs: this.formSekolah.value.kuotamhs
            }).subscribe(dataUploadSekolah => {
                console.log(dataUploadSekolah);
                this.submitted = true;
            }, error => {
                console.log(error);
            });
        }
        this.formSekolah.reset();
        this.router.navigate(["/dashboard/kaprodi/tampilsekolah"]);
    }
};
TambahSekolahComponent.ctorParameters = () => [
    { type: _datasekolah_service__WEBPACK_IMPORTED_MODULE_6__["DatasekolahService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
TambahSekolahComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tambah-sekolah',
        template: _raw_loader_tambah_sekolah_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tambah_sekolah_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TambahSekolahComponent);



/***/ }),

/***/ "7+1x":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/kaprodi/penempatan/pilih-tmpt-guru/pilih-tmpt-guru.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div>\r\n    <table mat-table [dataSource]=\"guru\" class=\"mat-elevation-z8\">\r\n      <ng-container matColumnDef=\"nama_guru\">\r\n        <th mat-header-cell *matHeaderCellDef> Nama Guru </th>\r\n        <td mat-cell *matCellDef=\"let guru\"> {{guru.nama_guru}}</td>\r\n      </ng-container> \r\n      <ng-container matColumnDef=\"penempatan\">\r\n        <th mat-header-cell *matHeaderCellDef> Penempatan </th>\r\n        <td mat-cell *matCellDef=\"let guru\"> \r\n          <mat-action-row >\r\n            <mat-select placeholder=\"pilih mhs\">\r\n              <mat-option *ngFor=\"let pilih of mhs\" [value]= \"pilih.nama_mhs\" > {{pilih.nama_mhs}} </mat-option>\r\n            </mat-select>\r\n          </mat-action-row>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"kolomGuru\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: kolomGuru;\"></tr>\r\n    </table>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "BLOu":
/*!***************************************************!*\
  !*** ./src/app/modules/kaprodi/kaprodi.module.ts ***!
  \***************************************************/
/*! exports provided: KaprodiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KaprodiModule", function() { return KaprodiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _penempatan_pilih_tmpt_dosen_pilih_tmpt_dosen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./penempatan/pilih-tmpt-dosen/pilih-tmpt-dosen.component */ "sGZo");
/* harmony import */ var _penempatan_pilih_tmpt_guru_pilih_tmpt_guru_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./penempatan/pilih-tmpt-guru/pilih-tmpt-guru.component */ "5F7E");
/* harmony import */ var _kaprodi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kaprodi-routing.module */ "DfcU");
/* harmony import */ var _penentuan_tambah_kuota_tambah_kuota_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./penentuan/tambah-kuota/tambah-kuota.component */ "KCys");
/* harmony import */ var _penentuan_tambah_sekolah_tambah_sekolah_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./penentuan/tambah-sekolah/tambah-sekolah.component */ "5c4O");
/* harmony import */ var _penentuan_tampil_sekolah_tampil_sekolah_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./penentuan/tampil-sekolah/tampil-sekolah.component */ "GpPp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _penempatan_pilih_tmpt_mhs_pilih_tmpt_mhs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./penempatan/pilih-tmpt-mhs/pilih-tmpt-mhs.component */ "O9Ep");
/* harmony import */ var _penempatan_tampilan_tampilan_dosen_tampilan_dosen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./penempatan/tampilan/tampilan-dosen/tampilan-dosen.component */ "e7lb");
/* harmony import */ var _penempatan_tampilan_tampilan_mhs_tampilan_mhs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./penempatan/tampilan/tampilan-mhs/tampilan-mhs.component */ "Dglh");
/* harmony import */ var _kaprodi_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./kaprodi.component */ "3wB5");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






















let KaprodiModule = class KaprodiModule {
};
KaprodiModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _penempatan_pilih_tmpt_dosen_pilih_tmpt_dosen_component__WEBPACK_IMPORTED_MODULE_3__["PilihTmptDosenComponent"],
            _penempatan_pilih_tmpt_guru_pilih_tmpt_guru_component__WEBPACK_IMPORTED_MODULE_4__["PilihTmptGuruComponent"],
            _penempatan_pilih_tmpt_mhs_pilih_tmpt_mhs_component__WEBPACK_IMPORTED_MODULE_10__["PilihTmptMhsComponent"],
            _penentuan_tambah_kuota_tambah_kuota_component__WEBPACK_IMPORTED_MODULE_6__["TambahKuotaComponent"],
            _penentuan_tambah_sekolah_tambah_sekolah_component__WEBPACK_IMPORTED_MODULE_7__["TambahSekolahComponent"],
            _penentuan_tampil_sekolah_tampil_sekolah_component__WEBPACK_IMPORTED_MODULE_8__["TampilSekolahComponent"],
            _penempatan_tampilan_tampilan_dosen_tampilan_dosen_component__WEBPACK_IMPORTED_MODULE_11__["TampilanDosenComponent"],
            _penempatan_tampilan_tampilan_mhs_tampilan_mhs_component__WEBPACK_IMPORTED_MODULE_12__["TampilanMhsComponent"],
            _kaprodi_component__WEBPACK_IMPORTED_MODULE_13__["KaprodiComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _kaprodi_routing_module__WEBPACK_IMPORTED_MODULE_5__["KaprodiRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"]
        ]
    })
], KaprodiModule);



/***/ }),

/***/ "BS8S":
/*!******************************************************************!*\
  !*** ./src/app/modules/kaprodi/penempatan/penempatan.service.ts ***!
  \******************************************************************/
/*! exports provided: PenempatanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PenempatanService", function() { return PenempatanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const urlGuru = 'http://localhost:4000/api/guru';
const urlDosen = 'http://localhost:4000/api/akundosen';
const urlMhs = 'http://localhost:4000/api/mhs';
const urlSekolah = 'http://localhost:4000/api/sekolah';
let PenempatanService = class PenempatanService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ambilSemuaMhs(params) {
        return this.http.get(urlMhs, { params });
    }
    ambilMhsSekolah(params) {
        return this.http.get(`${urlMhs}/penempatan`, { params });
    }
    ambilDosenMhs(params) {
        return this.http.get(`${urlDosen}/penempatan`, { params });
    }
    ambilSemuaSekolah(params) {
        return this.http.get(urlSekolah, { params });
    }
    ambilSemuaDosen(params) {
        return this.http.get(urlDosen, { params });
    }
    ambilSemuaGuru(params) {
        return this.http.get(urlGuru, { params });
    }
    ambil(id) {
        return this.http.get(`${urlMhs}/${id}`);
    }
    buat(data) {
        return this.http.post(`${urlMhs}/buat`, data);
    }
    insert(data) {
        return this.http.post(`${urlMhs}/insert`, data);
    }
    update(id, data) {
        return this.http.put(`${urlMhs}/${id}`, data);
    }
    insertSekolah(idMhs, idSekolah) {
        return this.http.get(`${urlMhs}/${idMhs}/${idSekolah}`);
    }
    insertMhs(idMhs, idDsn) {
        return this.http.get(`${urlDosen}/${idMhs}/${idDsn}`);
    }
    hapus(id) {
        return this.http.delete(`${urlMhs}/${id}`);
    }
    hapusSemua() {
        return this.http.delete(urlMhs);
    }
};
PenempatanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PenempatanService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PenempatanService);



/***/ }),

/***/ "CR1n":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/kaprodi/penentuan/tambah-sekolah/tambah-sekolah.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=\"file\"] {\r\n  visibility: hidden;\r\n}\r\n\r\nmat-form-field,\r\ntextarea {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhbWJhaC1zZWtvbGFoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsV0FBVztBQUNiIiwiZmlsZSI6InRhbWJhaC1zZWtvbGFoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCxcclxudGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "DfcU":
/*!***********************************************************!*\
  !*** ./src/app/modules/kaprodi/kaprodi-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: KaprodiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KaprodiRoutingModule", function() { return KaprodiRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _penempatan_pilih_tmpt_dosen_pilih_tmpt_dosen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./penempatan/pilih-tmpt-dosen/pilih-tmpt-dosen.component */ "sGZo");
/* harmony import */ var _penempatan_pilih_tmpt_guru_pilih_tmpt_guru_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./penempatan/pilih-tmpt-guru/pilih-tmpt-guru.component */ "5F7E");
/* harmony import */ var _penentuan_tambah_kuota_tambah_kuota_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./penentuan/tambah-kuota/tambah-kuota.component */ "KCys");
/* harmony import */ var _penentuan_tambah_sekolah_tambah_sekolah_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./penentuan/tambah-sekolah/tambah-sekolah.component */ "5c4O");
/* harmony import */ var src_app_shared_component_sidebar_sidebarkaprodi_sidebarkaprodi_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/sidebar/sidebarkaprodi/sidebarkaprodi.component */ "PXxi");
/* harmony import */ var _penentuan_tampil_sekolah_tampil_sekolah_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./penentuan/tampil-sekolah/tampil-sekolah.component */ "GpPp");
/* harmony import */ var _penempatan_pilih_tmpt_mhs_pilih_tmpt_mhs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./penempatan/pilih-tmpt-mhs/pilih-tmpt-mhs.component */ "O9Ep");
/* harmony import */ var _penempatan_tampilan_tampilan_dosen_tampilan_dosen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./penempatan/tampilan/tampilan-dosen/tampilan-dosen.component */ "e7lb");
/* harmony import */ var _penempatan_tampilan_tampilan_mhs_tampilan_mhs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./penempatan/tampilan/tampilan-mhs/tampilan-mhs.component */ "Dglh");
/* harmony import */ var _kaprodi_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./kaprodi.component */ "3wB5");













const routes = [
    {
        path: '',
        component: _kaprodi_component__WEBPACK_IMPORTED_MODULE_12__["KaprodiComponent"]
    }, {
        path: '',
        component: src_app_shared_component_sidebar_sidebarkaprodi_sidebarkaprodi_component__WEBPACK_IMPORTED_MODULE_7__["SidebarkaprodiComponent"],
        outlet: 'sidebarkaprodi'
    }, {
        path: 'pilihtempatdosen',
        component: _penempatan_pilih_tmpt_dosen_pilih_tmpt_dosen_component__WEBPACK_IMPORTED_MODULE_3__["PilihTmptDosenComponent"]
    }, {
        path: 'pilihtempatguru',
        component: _penempatan_pilih_tmpt_guru_pilih_tmpt_guru_component__WEBPACK_IMPORTED_MODULE_4__["PilihTmptGuruComponent"]
    }, {
        path: 'pilihtempatmhs',
        component: _penempatan_pilih_tmpt_mhs_pilih_tmpt_mhs_component__WEBPACK_IMPORTED_MODULE_9__["PilihTmptMhsComponent"]
    }, {
        path: 'tambahkuota',
        component: _penentuan_tambah_kuota_tambah_kuota_component__WEBPACK_IMPORTED_MODULE_5__["TambahKuotaComponent"]
    }, {
        path: 'tambahsekolah',
        component: _penentuan_tambah_sekolah_tambah_sekolah_component__WEBPACK_IMPORTED_MODULE_6__["TambahSekolahComponent"]
    }, {
        path: 'tampilsekolah',
        component: _penentuan_tampil_sekolah_tampil_sekolah_component__WEBPACK_IMPORTED_MODULE_8__["TampilSekolahComponent"]
    }, {
        path: 'tampilsekolah/ubahsekolah/:id',
        component: _penentuan_tambah_sekolah_tambah_sekolah_component__WEBPACK_IMPORTED_MODULE_6__["TambahSekolahComponent"]
    }, {
        path: 'tampildosen',
        component: _penempatan_tampilan_tampilan_dosen_tampilan_dosen_component__WEBPACK_IMPORTED_MODULE_10__["TampilanDosenComponent"]
    }, {
        path: 'tampilmhs',
        component: _penempatan_tampilan_tampilan_mhs_tampilan_mhs_component__WEBPACK_IMPORTED_MODULE_11__["TampilanMhsComponent"]
    }
];
let KaprodiRoutingModule = class KaprodiRoutingModule {
};
KaprodiRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], KaprodiRoutingModule);



/***/ }),

/***/ "Dglh":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/kaprodi/penempatan/tampilan/tampilan-mhs/tampilan-mhs.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TampilanMhsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TampilanMhsComponent", function() { return TampilanMhsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tampilan_mhs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tampilan-mhs.component.html */ "RZd0");
/* harmony import */ var _tampilan_mhs_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tampilan-mhs.component.css */ "nz6O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _penempatan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../penempatan.service */ "BS8S");





let TampilanMhsComponent = class TampilanMhsComponent {
    constructor(dataMhs) {
        this.dataMhs = dataMhs;
        this.nama_mhs = '';
        this.halaman = 1;
        this.totalDataPerhalaman = 10;
        this.kolomMhs = ["nama_mhs", "nim", "sekolah"];
    }
    ngOnInit() {
        this.ambilDataPenempatanMhs();
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
    ambilDataPenempatanMhs() {
        const params = this.getRequestParams(this.nama_mhs, this.halaman, this.totalDataPerhalaman);
        this.dataMhs.ambilMhsSekolah(params)
            .subscribe(ambildata => {
            this.mhs = ambildata;
            console.log(this.mhs);
        });
        error => {
            console.log(error);
        };
    }
};
TampilanMhsComponent.ctorParameters = () => [
    { type: _penempatan_service__WEBPACK_IMPORTED_MODULE_4__["PenempatanService"] }
];
TampilanMhsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tampilan-mhs',
        template: _raw_loader_tampilan_mhs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tampilan_mhs_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TampilanMhsComponent);



/***/ }),

/***/ "GpPp":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/kaprodi/penentuan/tampil-sekolah/tampil-sekolah.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TampilSekolahComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TampilSekolahComponent", function() { return TampilSekolahComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tampil_sekolah_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tampil-sekolah.component.html */ "O+0n");
/* harmony import */ var _tampil_sekolah_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tampil-sekolah.component.css */ "Lug7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _datasekolah_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../datasekolah.service */ "S/Q7");






let TampilSekolahComponent = class TampilSekolahComponent {
    constructor(dataSekolah) {
        this.dataSekolah = dataSekolah;
        this.dataSekolahSekarang = null;
        this.currentIndex = -1;
        this.nama_sekolah = '';
        this.halaman = 1;
        this.totalAkunMhs = 0;
        this.totalDataPerHalaman = 10;
        this.banyakPerHalaman = [5, 10, 15];
        this.kolomSekolah = ["nama_sekolah", "kuotamhs", "aksi"];
    }
    ngOnInit() {
        this.ambilDataSekolah();
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
    ambilDataSekolah() {
        const params = this.getRequestParams(this.nama_sekolah, this.halaman, this.totalDataPerHalaman);
        this.dataSekolah.ambilSemua(params)
            .subscribe((ambilDataSekolah) => {
            this.sekolah = ambilDataSekolah.sekolah;
            this.totalAkunMhs = ambilDataSekolah.totalAkunMhs;
        });
        error => {
            console.log(error);
        };
    }
    handlePageChange(event) {
        this.halaman = event;
        this.ambilDataSekolah();
    }
    handlePageSizeChange(event) {
        this.totalDataPerHalaman = event.target.value;
        this.halaman = 1;
        this.ambilDataSekolah();
    }
    setActiveTutorial(mhsTampil, index) {
        this.dataSekolahSekarang = mhsTampil;
        this.currentIndex = index;
    }
    hapusSekolah(id) {
        this.dataSekolah.hapus(id)
            .subscribe(response => {
            console.log(response);
            this.ambilDataSekolah();
        }, error => {
            console.log(error);
        });
    }
    hapusSemuaDataSekolah() {
        this.dataSekolah.hapusSemua()
            .subscribe(response => {
            console.log(response);
            this.ambilDataSekolah();
        }, error => {
            console.log(error);
        });
    }
};
TampilSekolahComponent.ctorParameters = () => [
    { type: _datasekolah_service__WEBPACK_IMPORTED_MODULE_5__["DatasekolahService"] }
];
TampilSekolahComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
};
TampilSekolahComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tampil-sekolah',
        template: _raw_loader_tampil_sekolah_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tampil_sekolah_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TampilSekolahComponent);



/***/ }),

/***/ "HFp2":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/kaprodi/penentuan/tambah-kuota/tambah-kuota.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhbWJhaC1rdW90YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InRhbWJhaC1rdW90YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "KCys":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/kaprodi/penentuan/tambah-kuota/tambah-kuota.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TambahKuotaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TambahKuotaComponent", function() { return TambahKuotaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tambah_kuota_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tambah-kuota.component.html */ "0P7e");
/* harmony import */ var _tambah_kuota_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tambah-kuota.component.css */ "HFp2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");






const ELEMENT_DATA = [
    { nomor: 1, sekolah: 'SMAN5', kuota: 12, status: 'penuh' },
    { nomor: 1, sekolah: 'SMAN5', kuota: 12, status: 'penuh' },
    { nomor: 1, sekolah: 'SMAN5', kuota: 12, status: 'penuh' },
    { nomor: 1, sekolah: 'SMAN5', kuota: 12, status: 'penuh' },
    { nomor: 1, sekolah: 'SMAN5', kuota: 12, status: 'penuh' },
    { nomor: 1, sekolah: 'SMAN5', kuota: 12, status: 'penuh' },
];
let TambahKuotaComponent = class TambahKuotaComponent {
    constructor() {
        this.displayedColumns = ["nomor", "sekolah", "kuota", "status", "aksi"];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](ELEMENT_DATA);
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }
};
TambahKuotaComponent.ctorParameters = () => [];
TambahKuotaComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
};
TambahKuotaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tambah-kuota',
        template: _raw_loader_tambah_kuota_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tambah_kuota_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TambahKuotaComponent);



/***/ }),

/***/ "Lug7":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/kaprodi/penentuan/tampil-sekolah/tampil-sekolah.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhbXBpbC1zZWtvbGFoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2IiLCJmaWxlIjoidGFtcGlsLXNla29sYWguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "O+0n":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/kaprodi/penentuan/tampil-sekolah/tampil-sekolah.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div>\r\n      <button mat-icon-button routerLink=\"/dashboard/kaprodi/tambahsekolah\">\r\n        <mat-icon>add_box</mat-icon>\r\n      </button>\r\n      <table mat-table [dataSource]=\"sekolah\" class=\"mat-elevation-z8\">\r\n        <!-- Position Column -->\r\n        <ng-container matColumnDef=\"nama_sekolah\">\r\n          <th mat-header-cell *matHeaderCellDef> Nama Sekolah. </th>\r\n          <td mat-cell *matCellDef=\"let sekolah\"> {{sekolah.nama_sekolah}}</td>\r\n        </ng-container>\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"kuotamhs\">\r\n          <th mat-header-cell *matHeaderCellDef> Kuota Mahasiswa </th>\r\n          <td mat-cell *matCellDef=\"let sekolah\">{{sekolah.kuotamhs}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"aksi\">\r\n          <th mat-header-cell *matHeaderCellDef> Aksi </th>\r\n          <td mat-cell *matCellDef=\"let sekolah\"> \r\n            <mat-action-row >\r\n              <a mat-button color=\"primary\" [routerLink]=\"['ubahsekolah', sekolah.id]\" >EDIT</a>\r\n              <button mat-button color=\"warn\" (click)=\"hapusSekolah(sekolah.id)\">DELETE</button>\r\n            </mat-action-row>\r\n          </td>\r\n        </ng-container>      \r\n        <tr mat-header-row *matHeaderRowDef=\"kolomSekolah\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: kolomSekolah;\"></tr>\r\n      </table>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "O5p1":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/kaprodi/penentuan/tambah-sekolah/tambah-sekolah.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align: center;\">\r\n  <h4> Data Kuota Sekolah </h4>\r\n</div>\r\n<mat-card>\r\n  <form [formGroup]=\"formSekolah\" (submit)=\"simpanDataSekolah()\" >\r\n    <mat-form-field>\r\n        <input\r\n          matInput\r\n          type=\"text\"\r\n          formControlName=\"nama_sekolah\"\r\n          placeholder=\"Sekolah\">\r\n          <mat-error *ngIf=\"formSekolah.get('nama_sekolah').invalid\">Masukkan nama</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        type=\"text\"\r\n        formControlName=\"kuotamhs\"\r\n        placeholder=\"Kuota Mahasiswa\">\r\n    </mat-form-field>\r\n    <button\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      type=\"submit\">Simpan\r\n    </button>\r\n  </form>\r\n</mat-card>\r\n");

/***/ }),

/***/ "O9Ep":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/kaprodi/penempatan/pilih-tmpt-mhs/pilih-tmpt-mhs.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PilihTmptMhsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PilihTmptMhsComponent", function() { return PilihTmptMhsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pilih_tmpt_mhs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pilih-tmpt-mhs.component.html */ "dddk");
/* harmony import */ var _pilih_tmpt_mhs_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pilih-tmpt-mhs.component.css */ "uM8J");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _penempatan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../penempatan.service */ "BS8S");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let PilihTmptMhsComponent = class PilihTmptMhsComponent {
    constructor(dataPenempatan, route) {
        this.dataPenempatan = dataPenempatan;
        this.route = route;
        this.dataSekolahSekarang = null;
        this.dataMhsSekarang = null;
        this.nama_mhs = '';
        this.currentIndex = -1;
        this.halaman = 1;
        this.totalAkunMhs = 0;
        this.totalDataSekolah = 0;
        this.totalDataPerHalaman = 10;
        this.banyakPerHalaman = [10, 20];
        this.kolomMhs = ["namaMahasiswa", "nim_mhs", "penempatan"];
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has("id")) {
                this.idMhs = paramMap.get("id");
                this.dataPenempatan.ambil(this.idMhs).subscribe(ambilidmhs => {
                    this.mhs = ambilidmhs;
                });
            }
            else {
                this.idMhs = null;
            }
        });
        this.ambilData();
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
    ambilData() {
        const params = this.getRequestParams(this.nama_mhs, this.halaman, this.totalDataPerHalaman);
        this.dataPenempatan.ambilSemuaMhs(params)
            .subscribe((ambilDataMhs) => {
            this.mhs = ambilDataMhs.mhs;
            this.totalAkunMhs = ambilDataMhs.totalAkunMhs;
        });
        error => {
            console.log(error);
        };
        this.dataPenempatan.ambilSemuaSekolah(params)
            .subscribe((ambilDataSekolah) => {
            this.sekolah = ambilDataSekolah.sekolah;
            this.totalDataSekolah = ambilDataSekolah.totalDataSekolah;
        });
    }
    changeRatio(event) {
        this.dataPenempatan.insert(event.value);
        console.log(event.value);
    }
    insertSekolah(vidSekolah, vidMhs) {
        this.dataPenempatan.insertSekolah(vidMhs, vidSekolah.value).subscribe(inSekolah => {
            console.log(inSekolah);
        }, error => {
            console.log(error);
        });
    }
    handlePageChange(event) {
        this.halaman = event;
        this.ambilData();
    }
    handlePageSizeChange(event) {
        this.totalDataPerHalaman = event.target.value;
        this.halaman = 1;
        this.ambilData();
    }
    setActiveTutorial(mhsTampil, index) {
        this.dataMhsSekarang = mhsTampil;
        this.currentIndex = index;
    }
    hapusSemuaDataMhs() {
        this.dataPenempatan.hapusSemua()
            .subscribe(response => {
            console.log(response);
            this.ambilData();
        }, error => {
            console.log(error);
        });
    }
};
PilihTmptMhsComponent.ctorParameters = () => [
    { type: _penempatan_service__WEBPACK_IMPORTED_MODULE_5__["PenempatanService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
PilihTmptMhsComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
};
PilihTmptMhsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pilih-tmpt-mhs',
        template: _raw_loader_pilih_tmpt_mhs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pilih_tmpt_mhs_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PilihTmptMhsComponent);



/***/ }),

/***/ "RZd0":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/kaprodi/penempatan/tampilan/tampilan-mhs/tampilan-mhs.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div>\n      <table mat-table [dataSource]=\"mhs\" class=\"mat-elevation-z8\">\n        <ng-container matColumnDef=\"nama_mhs\">\n          <th mat-header-cell *matHeaderCellDef> Nama. </th>\n          <td mat-cell *matCellDef=\"let mhs\"> {{mhs.nama_mhs}}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"nim\">\n          <th mat-header-cell *matHeaderCellDef> NIM</th>\n          <td mat-cell *matCellDef=\"let mhs\">{{mhs.nim_mhs}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"sekolah\">\n            <th mat-header-cell *matHeaderCellDef> Sekolah </th>\n            <td mat-cell *matCellDef=\"let mhs\">{{ mhs.sekolah.nama_sekolah }} </td>\n        </ng-container> \n        <tr mat-header-row *matHeaderRowDef=\"kolomMhs\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: kolomMhs;\"></tr>\n      </table>\n      <!-- <mat-paginator [length]=\"totalAkunMhs\" [pageSize]=\"ukuranHalaman\" [pageSizeOptions]=\"banyakPerHalaman\" (page)=\"handlePageChange($event)\"></mat-paginator>     -->\n    </div>\n  </div>");

/***/ }),

/***/ "S/Q7":
/*!******************************************************************!*\
  !*** ./src/app/modules/kaprodi/penentuan/datasekolah.service.ts ***!
  \******************************************************************/
/*! exports provided: DatasekolahService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasekolahService", function() { return DatasekolahService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const urlSekolah = 'http://localhost:4000/api/sekolah';
let DatasekolahService = class DatasekolahService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ambilSemua(params) {
        return this.http.get(urlSekolah, { params });
    }
    ambil(id) {
        return this.http.get(`${urlSekolah}/${id}`);
    }
    buat(dataSekolah) {
        return this.http.post(`${urlSekolah}/buat`, dataSekolah);
    }
    update(id, dataSekolah) {
        console.log(id);
        return this.http.put(`${urlSekolah}/${id}`, dataSekolah);
    }
    hapus(id) {
        return this.http.delete(`${urlSekolah}/${id}`);
    }
    hapusSemua() {
        return this.http.delete(urlSekolah);
    }
};
DatasekolahService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DatasekolahService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DatasekolahService);



/***/ }),

/***/ "Teje":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/kaprodi/penempatan/tampilan/tampilan-dosen/tampilan-dosen.component.css ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhbXBpbGFuLWRvc2VuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2IiLCJmaWxlIjoidGFtcGlsYW4tZG9zZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "btYb":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/kaprodi/penempatan/pilih-tmpt-guru/pilih-tmpt-guru.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbGloLXRtcHQtZ3VydS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InBpbGloLXRtcHQtZ3VydS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "dddk":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/kaprodi/penempatan/pilih-tmpt-mhs/pilih-tmpt-mhs.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div>\r\n      <table mat-table [dataSource]=\"mhs\" class=\"mat-elevation-z8\">\r\n        <ng-container matColumnDef=\"namaMahasiswa\">\r\n          <th mat-header-cell *matHeaderCellDef> Nama </th>\r\n          <td mat-cell *matCellDef=\"let mhs\"> {{mhs.nama_mhs}}</td>\r\n        </ng-container>    \r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"nim_mhs\">\r\n          <th mat-header-cell *matHeaderCellDef> Nim </th>\r\n          <td mat-cell *matCellDef=\"let mhs\"> {{mhs.nim_mhs}} </td>\r\n        </ng-container>  \r\n        <ng-container matColumnDef=\"penempatan\">\r\n          <th mat-header-cell *matHeaderCellDef> Penempatan </th>\r\n          <td mat-cell *matCellDef=\"let mhs\" > \r\n            <mat-action-row >\r\n              <mat-select (selectionChange)=\"insertSekolah($event, mhs.id)\"  placeholder=\"pilih sekolah\">\r\n                <mat-option  type=\"submit\" *ngFor=\"let pilih of sekolah\" [value]= \"pilih.id\"> {{pilih.nama_sekolah}} </mat-option>\r\n              </mat-select>\r\n            </mat-action-row>\r\n          </td>\r\n        </ng-container>\r\n        <tr mat-header-row *matHeaderRowDef=\"kolomMhs\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: kolomMhs;\"></tr>\r\n      </table>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "e7lb":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/kaprodi/penempatan/tampilan/tampilan-dosen/tampilan-dosen.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TampilanDosenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TampilanDosenComponent", function() { return TampilanDosenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tampilan_dosen_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tampilan-dosen.component.html */ "rw9T");
/* harmony import */ var _tampilan_dosen_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tampilan-dosen.component.css */ "Teje");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _penempatan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../penempatan.service */ "BS8S");





let TampilanDosenComponent = class TampilanDosenComponent {
    constructor(dataDosen) {
        this.dataDosen = dataDosen;
        this.nama_dosen = '';
        this.halaman = 1;
        this.totalDataPerHalaman = 10;
        this.kolomDosen = ["nama", "nidn", "mahasiswa", "sekolah"];
    }
    ngOnInit() {
        this.ambilPenempatanDosen();
    }
    getRequestParams(searchTitle, halaman, totalDataPerHalaman) {
        let params = {};
        if (searchTitle) {
            params[`nama_dosen`] = searchTitle;
        }
        if (halaman) {
            params[`page`] = halaman - 1;
        }
        if (totalDataPerHalaman) {
            params[`size`] = totalDataPerHalaman;
        }
        return params;
    }
    ambilPenempatanDosen() {
        const params = this.getRequestParams(this.nama_dosen, this.halaman, this.totalDataPerHalaman);
        this.dataDosen.ambilDosenMhs(params)
            .subscribe(ambilDataDsnMhs => {
            this.dosen = ambilDataDsnMhs;
            console.log(ambilDataDsnMhs);
        });
        error => {
            console.log(error);
        };
    }
};
TampilanDosenComponent.ctorParameters = () => [
    { type: _penempatan_service__WEBPACK_IMPORTED_MODULE_4__["PenempatanService"] }
];
TampilanDosenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tampilan-dosen',
        template: _raw_loader_tampilan_dosen_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tampilan_dosen_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TampilanDosenComponent);



/***/ }),

/***/ "eOfO":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/kaprodi/penempatan/pilih-tmpt-dosen/pilih-tmpt-dosen.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div>\r\n    <table mat-table [dataSource]=\"datadosen\" class=\"mat-elevation-z8\">\r\n      <ng-container matColumnDef=\"namaDosen\">\r\n        <th mat-header-cell *matHeaderCellDef> Nama Dosen </th>\r\n        <td mat-cell *matCellDef=\"let datadosen\"> {{datadosen.nama_dosen}}</td>\r\n      </ng-container>    \r\n      <!-- Weight Column -->\r\n      <ng-container matColumnDef=\"nidn\">\r\n        <th mat-header-cell *matHeaderCellDef> NIDN </th>\r\n        <td mat-cell *matCellDef=\"let datadosen\"> {{datadosen.nidn}} </td>\r\n      </ng-container>  \r\n      <ng-container matColumnDef=\"penempatan\">\r\n        <th mat-header-cell *matHeaderCellDef> Penempatan </th>\r\n        <td mat-cell *matCellDef=\"let datadosen\"> \r\n          <mat-action-row >\r\n            <mat-select (selectionChange)=\"insertMhs($event, datadosen.id)\" placeholder=\"pilih mhs\">\r\n              <mat-option *ngFor=\"let pilih of mhs\" [value]= \"pilih.id\" > {{pilih.nama_mhs}} </mat-option>\r\n            </mat-select>\r\n          </mat-action-row>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"kolomDosen\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: kolomDosen;\"></tr>\r\n    </table>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "nz6O":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/kaprodi/penempatan/tampilan/tampilan-mhs/tampilan-mhs.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhbXBpbGFuLW1ocy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiIiwiZmlsZSI6InRhbXBpbGFuLW1ocy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "oiq4":
/*!*******************************************************!*\
  !*** ./src/app/modules/kaprodi/kaprodi.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card{\r\n  width: 80%;\r\n  height: 80%;\r\n  text-align: center;\r\n  display:flex;\r\n  justify-content:center;\r\n  align-items:center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImthcHJvZGkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImthcHJvZGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "qenH":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/kaprodi/penempatan/pilih-tmpt-dosen/pilih-tmpt-dosen.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbGloLXRtcHQtZG9zZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJwaWxpaC10bXB0LWRvc2VuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "rw9T":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/kaprodi/penempatan/tampilan/tampilan-dosen/tampilan-dosen.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div>\n      <!-- <button mat-icon-button routerLink=\"/dashboard/mhs/tambahmhs\">\n        <mat-icon>add_box</mat-icon>\n      </button> -->\n      <!-- <button class=\"m-3 btn btn-sm btn-danger\" (click)=\"hapusSemuaDataMhs()\">\n        Remove All\n      </button> -->\n      <table mat-table [dataSource]=\"dosen\" class=\"mat-elevation-z8\">\n        <ng-container matColumnDef=\"nama\">\n          <th mat-header-cell *matHeaderCellDef> Nama. </th>\n          <td mat-cell *matCellDef=\"let dosen\"> {{dosen.nama_dosen}}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"nidn\">\n          <th mat-header-cell *matHeaderCellDef> NIDN</th>\n          <td mat-cell *matCellDef=\"let dosen\">{{dosen.nip}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"mahasiswa\">\n            <th mat-header-cell *matHeaderCellDef> Nama Mahasiswa </th>\n            <td mat-cell *matCellDef=\"let dosen\">{{ dosen.mahasiswa.nama_mhs }} </td>\n        </ng-container> \n        <ng-container matColumnDef=\"sekolah\">\n            <th mat-header-cell *matHeaderCellDef> Nama Sekolah </th>\n            <td mat-cell *matCellDef=\"let dosen\">{{ dosen.mahasiswa.sekolah.nama_sekolah }} </td>\n        </ng-container> \n        <tr mat-header-row *matHeaderRowDef=\"kolomDosen\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: kolomDosen;\"></tr>\n      </table>\n      <!-- <mat-paginator [length]=\"totalAkunMhs\" [pageSize]=\"ukuranHalaman\" [pageSizeOptions]=\"banyakPerHalaman\" (page)=\"handlePageChange($event)\"></mat-paginator>     -->\n    </div>\n  </div>");

/***/ }),

/***/ "sGZo":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/kaprodi/penempatan/pilih-tmpt-dosen/pilih-tmpt-dosen.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PilihTmptDosenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PilihTmptDosenComponent", function() { return PilihTmptDosenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pilih_tmpt_dosen_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pilih-tmpt-dosen.component.html */ "eOfO");
/* harmony import */ var _pilih_tmpt_dosen_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pilih-tmpt-dosen.component.css */ "qenH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _penempatan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../penempatan.service */ "BS8S");






let PilihTmptDosenComponent = class PilihTmptDosenComponent {
    constructor(dataPenempatan) {
        this.dataPenempatan = dataPenempatan;
        this.dataDosenSekarang = null;
        this.nama_dosen = '';
        this.currentIndex = -1;
        this.halaman = 1;
        this.totalDataMhs = 0;
        this.totalDataDosen = 0;
        this.totalDataPerHalaman = 10;
        this.banyakPerHalaman = [10, 20];
        this.kolomDosen = ["namaDosen", "nidn", "penempatan"];
    }
    ngOnInit() {
        this.ambilData();
    }
    getRequestParams(searchTitle, halaman, totalDataPerHalaman) {
        let params = {};
        if (searchTitle) {
            params[`nama_dosen`] = searchTitle;
        }
        if (halaman) {
            params[`page`] = halaman - 1;
        }
        if (totalDataPerHalaman) {
            params[`size`] = totalDataPerHalaman;
        }
        return params;
    }
    ambilData() {
        const params = this.getRequestParams(this.nama_dosen, this.halaman, this.totalDataPerHalaman);
        this.dataPenempatan.ambilSemuaDosen(params)
            .subscribe((ambilDataDosen) => {
            this.datadosen = ambilDataDosen.akundosen;
            this.totalDataDosen = ambilDataDosen.totalDataDosen;
            console.log(ambilDataDosen);
        });
        error => {
            console.log(error);
        };
        this.dataPenempatan.ambilSemuaMhs(params)
            .subscribe((ambilDataMhs) => {
            this.mhs = ambilDataMhs.mhs;
            this.totalDataMhs = ambilDataMhs.totalDataMhs;
        });
        error => {
            console.log(error);
        };
    }
    handlePageChange(event) {
        this.halaman = event;
        this.ambilData();
    }
    handlePageSizeChange(event) {
        this.totalDataPerHalaman = event.target.value;
        this.halaman = 1;
        this.ambilData();
    }
    setActiveTutorial(akunDosen, index) {
        this.dataDosenSekarang = akunDosen;
        this.currentIndex = index;
    }
    hapusSemuaDataDosen() {
        this.dataPenempatan.hapusSemua()
            .subscribe(response => {
            console.log(response);
            this.ambilData();
        }, error => {
            console.log(error);
        });
    }
    insertMhs(vIdMhs, vIdDsn) {
        this.dataPenempatan.insertMhs(vIdDsn, vIdMhs.value).subscribe(insertMhs => {
            console.log(insertMhs);
        }), error => {
            console.log(error);
        };
    }
};
PilihTmptDosenComponent.ctorParameters = () => [
    { type: _penempatan_service__WEBPACK_IMPORTED_MODULE_5__["PenempatanService"] }
];
PilihTmptDosenComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
};
PilihTmptDosenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pilih-tmpt-dosen',
        template: _raw_loader_pilih_tmpt_dosen_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pilih_tmpt_dosen_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PilihTmptDosenComponent);



/***/ }),

/***/ "uM8J":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/kaprodi/penempatan/pilih-tmpt-mhs/pilih-tmpt-mhs.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbGloLXRtcHQtbWhzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoicGlsaWgtdG1wdC1taHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "yq2K":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/kaprodi/kaprodi.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-grid-list cols='3' rowHeight='200px'>\n  <mat-grid-tile>\n    <mat-card routerLink=\"/dashboard/kaprodi/tambahsekolah\" routerLinkActive=\"active\">\n      Tambah sekolah\n    </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-card routerLink=\"/dashboard/kaprodi/pilihtempatdosen\" routerLinkActive=\"active\">\n      Penempatan Dosen\n    </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-card routerLink=\"/dashboard/kaprodi/pilihtempatmhs\" routerLinkActive=\"active\">\n      Penempatan Mahasiswa\n    </mat-card>\n  </mat-grid-tile>\n</mat-grid-list>");

/***/ })

}]);
//# sourceMappingURL=modules-kaprodi-kaprodi-module-es2015.js.map