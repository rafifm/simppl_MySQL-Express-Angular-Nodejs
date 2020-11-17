(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-akun-akun-module"],{

/***/ "7KpO":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/akun/profil/profil.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"currentUser; else loggedOut\">\n  <header class=\"jumbotron\">\n    <h3>\n      <strong>{{ currentUser.username }}</strong> Profile\n    </h3>\n  </header>\n  <p>\n    <strong>Token:</strong>\n    {{ currentUser.accessToken.substring(0, 20) }} ...\n    {{ currentUser.accessToken.substr(currentUser.accessToken.length - 20) }}\n  </p>\n  <p>\n    <strong>Email:</strong>\n    {{ currentUser.email }}\n  </p>\n  <strong>Roles:</strong>\n  <ul>\n    <li *ngFor=\"let role of currentUser.roles\">\n      {{ role }}\n    </li>\n  </ul>\n</div>\n\n<ng-template #loggedOut>\n  Please login.\n</ng-template>");

/***/ }),

/***/ "7o7m":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/akun/register/register.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div>\n        <img src=\"assets/logoulm.png\">\n        <form [formGroup]=\"formRegister\" (submit)=\"onSubmit()\">\n            <mat-form-field>\n                <input\n                matInput\n                type=\"text\"\n                formControlName=\"email_pengguna\"\n                placeholder=\"Email\">\n            </mat-form-field>\n            <mat-form-field>\n                <input\n                matInput\n                type=\"text\"\n                formControlName=\"password_pengguna\"\n                placeholder=\"Password\">\n            </mat-form-field>\n            <button mat-raised-button color=\"accent\" type=\"submit\" >Sign In</button>\n        </form>        \n      </div>\n");

/***/ }),

/***/ "AJtQ":
/*!*********************************************************!*\
  !*** ./src/app/layouts/akun/profil/profil.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilComponent", function() { return ProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profil_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profil.component.html */ "7KpO");
/* harmony import */ var _profil_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profil.component.css */ "xtNo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/token-storage.service */ "3QRs");





let ProfilComponent = class ProfilComponent {
    constructor(token) {
        this.token = token;
    }
    ngOnInit() {
        this.currentUser = this.token.getPengguna();
    }
};
ProfilComponent.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"] }
];
ProfilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profil',
        template: _raw_loader_profil_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profil_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilComponent);



/***/ }),

/***/ "OXqV":
/*!*************************************************************!*\
  !*** ./src/app/layouts/akun/register/register.component.ts ***!
  \*************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "7o7m");
/* harmony import */ var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.css */ "e+mN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/auth.service */ "l0XZ");






let RegisterComponent = class RegisterComponent {
    constructor(authService) {
        this.authService = authService;
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    ngOnInit() {
        this.formRegister = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email_pengguna: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email] }),
            password_pengguna: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] })
        });
    }
    onSubmit() {
        if (this.formRegister.invalid) {
            return;
        }
        this.authService.register({
            email: this.formRegister.value.email_pengguna,
            password: this.formRegister.value.password_pengguna
        }).subscribe(data => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
        }, err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterComponent);



/***/ }),

/***/ "TOLU":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/akun/login/login.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <img src=\"assets/logoulm.png\">\n  <form [formGroup]=\"formLogin\" (submit)=\"onSubmit()\">  \n      <mat-form-field>\n          <input\n          matInput\n          type=\"text\"\n          formControlName=\"email_pengguna\"\n          placeholder=\"Email\">\n      </mat-form-field>\n      <mat-form-field>\n          <input\n          matInput\n          type=\"password\"\n          formControlName=\"password_pengguna\"\n          placeholder=\"Password\">\n      </mat-form-field>\n      <button mat-raised-button color=\"accent\" type=\"submit\" >Log In</button>\n  </form>\n</div>");

/***/ }),

/***/ "ZQZs":
/*!*****************************************************!*\
  !*** ./src/app/layouts/akun/akun-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AkunRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AkunRoutingModule", function() { return AkunRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "jN0A");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "OXqV");





const routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    }, {
        path: 'signup',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }
];
let AkunRoutingModule = class AkunRoutingModule {
};
AkunRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AkunRoutingModule);



/***/ }),

/***/ "ZrNr":
/*!********************************************************!*\
  !*** ./src/app/layouts/akun/login/login.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nmat-card{\r\n  display: inline-block;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n}\r\n\r\nmat-card img{\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n:host {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtY2FyZHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxubWF0LWNhcmQgaW1ne1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "e+mN":
/*!**************************************************************!*\
  !*** ./src/app/layouts/akun/register/register.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nmat-card{\r\n  display: inline-block;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n}\r\n\r\nmat-card img{\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n:host {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtY2FyZHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxubWF0LWNhcmQgaW1ne1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "jN0A":
/*!*******************************************************!*\
  !*** ./src/app/layouts/akun/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "TOLU");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "ZrNr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/auth.service */ "l0XZ");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/token-storage.service */ "3QRs");








let LoginComponent = class LoginComponent {
    constructor(authService, tokenStorage, router) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.isLoggedIn = false;
        this.isLoggedInFailed = false;
        this.roles = [];
        this.errorMessage = '';
    }
    ngOnInit() {
        this.formLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email_pengguna: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email] }),
            password_pengguna: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] })
        });
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getPengguna().peran;
        }
    }
    onSubmit() {
        this.authService.login({
            email: this.formLogin.value.email_pengguna,
            password: this.formLogin.value.password_pengguna
        }).subscribe(data => {
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.savePengguna(data);
            this.isLoggedIn = true;
            this.isLoggedInFailed = false;
            this.roles = this.tokenStorage.getPengguna().peran;
            this.idLogin = this.tokenStorage.getPengguna().id;
            this.idPengguna = this.tokenStorage.getPengguna().idPengguna;
            this.getPeran();
        }, err => {
            console.log(err);
            this.isLoggedInFailed = true;
        });
    }
    reloadPage() {
        window.location.reload();
    }
    getPeran() {
        if (this.roles.includes('PERAN_DOSEN')) {
            if (this.idPengguna == 'kosong') {
                this.router.navigate(['/dashboard/staff/tambahdosen', this.idLogin]);
            }
            else {
                this.router.navigate(['/dashboard/dosen/tampilnilai'], { queryParams: { nama: this.tokenStorage.getPengguna().nama, email: this.tokenStorage.getPengguna().email_pengguna } });
            }
        }
        else if (this.roles.includes('PERAN_GURU')) {
            this.router.navigate(['/dashboard/staff/tambahguru']);
        }
        else if (this.roles.includes('PERAN_MAHASISWA')) {
            this.router.navigate(['/dashboard/mhs/tambahmhs'], { queryParams: { nama: '', email: this.tokenStorage.getPengguna().email_pengguna } });
        }
        else if (this.roles.includes('PERAN_STAFF')) {
            this.router.navigate(['/dashboard/staff/tambahstaff']);
        }
        else if (this.roles.includes('PERAN_ADMIN')) {
            this.router.navigate(['/admin/kelolaperan'], { queryParams: { nama: 'admin', email: this.tokenStorage.getPengguna().email_pengguna } });
        }
        else if (this.roles.includes('PERAN_KAPRODI')) {
            this.router.navigate(['/dashboard/kaprodi'], { queryParams: { nama: 'kaprodi', email: this.tokenStorage.getPengguna().email_pengguna } });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ "l0XZ":
/*!********************************************************!*\
  !*** ./src/app/layouts/akun/_services/auth.service.ts ***!
  \********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



const AUTH_API = 'http://localhost:4000/api/auth/';
const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(rahasia) {
        return this.http.post(AUTH_API + 'signin', {
            email_pengguna: rahasia.email,
            password_pengguna: rahasia.password
        }, httpOptions);
    }
    register(pengguna) {
        return this.http.post(AUTH_API + 'signup', {
            email_pengguna: pengguna.email,
            password_pengguna: pengguna.password
        }, httpOptions);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "sd3A":
/*!*********************************************!*\
  !*** ./src/app/layouts/akun/akun.module.ts ***!
  \*********************************************/
/*! exports provided: AkunModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AkunModule", function() { return AkunModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "jN0A");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "OXqV");
/* harmony import */ var _profil_profil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profil/profil.component */ "AJtQ");
/* harmony import */ var _akun_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./akun-routing.module */ "ZQZs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












let AkunModule = class AkunModule {
};
AkunModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
            _profil_profil_component__WEBPACK_IMPORTED_MODULE_5__["ProfilComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _akun_routing_module__WEBPACK_IMPORTED_MODULE_6__["AkunRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"]
        ]
    })
], AkunModule);



/***/ }),

/***/ "xtNo":
/*!**********************************************************!*\
  !*** ./src/app/layouts/akun/profil/profil.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=layouts-akun-akun-module-es2015.js.map