(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\User\Documents\skripsi\source code program\simppl_Mongodb-Express-Angular-Nodejs\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3FaF":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function FaF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 mat-dialog-title>Error ni</h1>\r\n<div mat-dialog-content><p class=\"mat-body-1\">{{ data.message }}</p> </div>\r\n<div mat-dialog-actions>\r\n  <button mat-button mat-dialog-close>okeh</button>\r\n</div>";
      /***/
    },

    /***/
    "3QRs":
    /*!*****************************************************************!*\
      !*** ./src/app/layouts/akun/_services/token-storage.service.ts ***!
      \*****************************************************************/

    /*! exports provided: TokenStorageService */

    /***/
    function QRs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
        return TokenStorageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TOKEN_KEY = 'auth-token';
      var PENGGUNA_KEY = 'auth-pengguna';

      var TokenStorageService = /*#__PURE__*/function () {
        function TokenStorageService() {
          _classCallCheck(this, TokenStorageService);
        }

        _createClass(TokenStorageService, [{
          key: "signOut",
          value: function signOut() {
            window.sessionStorage.clear();
          }
        }, {
          key: "saveToken",
          value: function saveToken(token) {
            window.sessionStorage.removeItem(TOKEN_KEY);
            window.sessionStorage.setItem(TOKEN_KEY, token);
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return sessionStorage.getItem(TOKEN_KEY);
          }
        }, {
          key: "savePengguna",
          value: function savePengguna(pengguna) {
            window.sessionStorage.removeItem(PENGGUNA_KEY);
            window.sessionStorage.setItem(PENGGUNA_KEY, JSON.stringify(pengguna));
          }
        }, {
          key: "getPengguna",
          value: function getPengguna() {
            return JSON.parse(sessionStorage.getItem(PENGGUNA_KEY));
          }
        }]);

        return TokenStorageService;
      }();

      TokenStorageService.ctorParameters = function () {
        return [];
      };

      TokenStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TokenStorageService);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "main {\r\n  width: 80%;\r\n  margin: 1rem auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CG0s":
    /*!******************************************!*\
      !*** ./src/app/error/error.component.ts ***!
      \******************************************/

    /*! exports provided: ErrorComponent */

    /***/
    function CG0s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
        return ErrorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_error_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./error.component.html */
      "3FaF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");

      var ErrorComponent = function ErrorComponent(data) {
        _classCallCheck(this, ErrorComponent);

        this.data = data;
      };

      ErrorComponent.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
          }]
        }];
      };

      ErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_error_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ErrorComponent);
      /***/
    },

    /***/
    "Eo/H":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EoH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\r\n  <h3>Dashboard</h3>\r\n</div>";
      /***/
    },

    /***/
    "Jckx":
    /*!*******************************************************!*\
      !*** ./src/app/layouts/default/default.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function Jckx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\nmat-drawer {\r\n  width: 250px;\r\n}\r\nmat-drawer-container {\r\n  height: 100%;\r\n}\r\nmat-drawer-content {\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  padding-bottom: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxubWF0LWRyYXdlciB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5tYXQtZHJhd2VyLWNvbnRlbnQge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "M95H":
    /*!**********************************************************!*\
      !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
      \**********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function M95H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "Eo/H");
      /* harmony import */


      var _dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.component.css */
      "fhIt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ctorParameters = function () {
        return [];
      };

      DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DashboardComponent);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./error/error.component */
      "CG0s");
      /* harmony import */


      var _layouts_akun_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./layouts/akun/_helpers/auth.interceptor */
      "xnJx");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
          useClass: _layouts_akun_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "fKaD":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/default/default.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function fKaD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header (toggleSideBarForMe)=\"sideBarToggler($event)\"></app-header>\r\n\r\n<mat-drawer-container>\r\n  <mat-drawer mode=\"side\" [opened]=\"sideBarOpen\">\r\n    <!-- <app-sidebar></app-sidebar> -->\r\n    <router-outlet name=\"sidebardosen\"></router-outlet>\r\n    <router-outlet name=\"sidebarguru\"></router-outlet>\r\n    <router-outlet name=\"sidebarkaprodi\"></router-outlet>\r\n    <router-outlet name=\"sidebarstaff\"></router-outlet>\r\n    <router-outlet name=\"sidebarmhs\"></router-outlet>\r\n    <router-outlet name=\"sidebaradmin\"></router-outlet>\r\n  </mat-drawer>\r\n  <mat-drawer-content>\r\n    <router-outlet></router-outlet>\r\n  </mat-drawer-content>\r\n</mat-drawer-container>\r\n\r\n<app-footer></app-footer>";
      /***/
    },

    /***/
    "fhIt":
    /*!***********************************************************!*\
      !*** ./src/app/modules/dashboard/dashboard.component.css ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function fhIt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "table {\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59Il19 */";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./layouts/default/default.component */
      "xS3V");
      /* harmony import */


      var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./modules/dashboard/dashboard.component */
      "M95H");

      var routes = [{
        path: 'dashboard',
        component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | layouts-default-default-module */
          [__webpack_require__.e("default~layouts-akun-akun-module~layouts-default-default-module~modules-admin-admin-module~modules-k~ac209db2"), __webpack_require__.e("default~layouts-default-default-module~modules-admin-admin-module~modules-kaprodi-kaprodi-module~mod~a73a87b3"), __webpack_require__.e("default~layouts-default-default-module~modules-admin-admin-module~modules-kaprodi-kaprodi-module~mod~9d3e5a49"), __webpack_require__.e("default~layouts-default-default-module~modules-kaprodi-kaprodi-module~modules-penilaian-dosen-dosen-~caeca387"), __webpack_require__.e("default~layouts-akun-akun-module~layouts-default-default-module~modules-mhs-datamhs-module"), __webpack_require__.e("default~layouts-default-default-module~modules-admin-admin-module"), __webpack_require__.e("layouts-default-default-module")]).then(__webpack_require__.bind(null,
          /*! ./layouts/default/default.module */
          "mBqM")).then(function (m) {
            return m.DefaultModule;
          });
        },
        children: [{
          path: '',
          component: _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
        }, {
          path: 'dosen',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-penilaian-dosen-dosen-module */
            [__webpack_require__.e("default~layouts-akun-akun-module~layouts-default-default-module~modules-admin-admin-module~modules-k~ac209db2"), __webpack_require__.e("default~layouts-default-default-module~modules-admin-admin-module~modules-kaprodi-kaprodi-module~mod~a73a87b3"), __webpack_require__.e("default~layouts-default-default-module~modules-admin-admin-module~modules-kaprodi-kaprodi-module~mod~9d3e5a49"), __webpack_require__.e("default~layouts-default-default-module~modules-kaprodi-kaprodi-module~modules-penilaian-dosen-dosen-~caeca387"), __webpack_require__.e("default~modules-kaprodi-kaprodi-module~modules-penilaian-dosen-dosen-module~modules-penilaian-guru-g~f8822793"), __webpack_require__.e("default~modules-penilaian-dosen-dosen-module~modules-penilaian-guru-guru-module"), __webpack_require__.e("modules-penilaian-dosen-dosen-module")]).then(__webpack_require__.bind(null,
            /*! ./modules/penilaian/dosen/dosen.module */
            "gc19")).then(function (m) {
              return m.DosenModule;
            });
          }
        }, {
          path: 'guru',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-penilaian-guru-guru-module */
            [__webpack_require__.e("default~layouts-akun-akun-module~layouts-default-default-module~modules-admin-admin-module~modules-k~ac209db2"), __webpack_require__.e("default~layouts-default-default-module~modules-admin-admin-module~modules-kaprodi-kaprodi-module~mod~a73a87b3"), __webpack_require__.e("default~layouts-default-default-module~modules-admin-admin-module~modules-kaprodi-kaprodi-module~mod~9d3e5a49"), __webpack_require__.e("default~modules-admin-admin-module~modules-kaprodi-kaprodi-module~modules-mhs-datamhs-module~modules~dda87dfe"), __webpack_require__.e("default~modules-kaprodi-kaprodi-module~modules-mhs-datamhs-module~modules-penilaian-guru-guru-module~e8160516"), __webpack_require__.e("default~layouts-default-default-module~modules-kaprodi-kaprodi-module~modules-penilaian-dosen-dosen-~caeca387"), __webpack_require__.e("default~modules-kaprodi-kaprodi-module~modules-penilaian-dosen-dosen-module~modules-penilaian-guru-g~f8822793"), __webpack_require__.e("default~modules-penilaian-dosen-dosen-module~modules-penilaian-guru-guru-module"), __webpack_require__.e("modules-penilaian-guru-guru-module")]).then(__webpack_require__.bind(null,
            /*! ./modules/penilaian/guru/guru.module */
            "kIq/")).then(function (m) {
              return m.GuruModule;
            });
          }
        }, {
          path: 'kaprodi',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-kaprodi-kaprodi-module */
            [__webpack_require__.e("default~layouts-akun-akun-module~layouts-default-default-module~modules-admin-admin-module~modules-k~ac209db2"), __webpack_require__.e("default~layouts-default-default-module~modules-admin-admin-module~modules-kaprodi-kaprodi-module~mod~a73a87b3"), __webpack_require__.e("default~layouts-default-default-module~modules-admin-admin-module~modules-kaprodi-kaprodi-module~mod~9d3e5a49"), __webpack_require__.e("default~modules-admin-admin-module~modules-kaprodi-kaprodi-module~modules-mhs-datamhs-module~modules~dda87dfe"), __webpack_require__.e("default~modules-kaprodi-kaprodi-module~modules-mhs-datamhs-module~modules-penilaian-guru-guru-module~e8160516"), __webpack_require__.e("default~layouts-default-default-module~modules-kaprodi-kaprodi-module~modules-penilaian-dosen-dosen-~caeca387"), __webpack_require__.e("default~modules-kaprodi-kaprodi-module~modules-penilaian-dosen-dosen-module~modules-penilaian-guru-g~f8822793"), __webpack_require__.e("default~layouts-akun-akun-module~modules-admin-admin-module~modules-kaprodi-kaprodi-module~modules-m~262d7060"), __webpack_require__.e("modules-kaprodi-kaprodi-module")]).then(__webpack_require__.bind(null,
            /*! ./modules/kaprodi/kaprodi.module */
            "BLOu")).then(function (m) {
              return m.KaprodiModule;
            });
          }
        }, {
          path: 'staff',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-staff-staff-module */
            [__webpack_require__.e("default~layouts-akun-akun-module~layouts-default-default-module~modules-admin-admin-module~modules-k~ac209db2"), __webpack_require__.e("default~layouts-default-default-module~modules-admin-admin-module~modules-kaprodi-kaprodi-module~mod~a73a87b3"), __webpack_require__.e("default~layouts-default-default-module~modules-admin-admin-module~modules-kaprodi-kaprodi-module~mod~9d3e5a49"), __webpack_require__.e("default~modules-admin-admin-module~modules-kaprodi-kaprodi-module~modules-mhs-datamhs-module~modules~dda87dfe"), __webpack_require__.e("default~modules-kaprodi-kaprodi-module~modules-mhs-datamhs-module~modules-penilaian-guru-guru-module~e8160516"), __webpack_require__.e("default~modules-kaprodi-kaprodi-module~modules-penilaian-dosen-dosen-module~modules-penilaian-guru-g~f8822793"), __webpack_require__.e("modules-staff-staff-module")]).then(__webpack_require__.bind(null,
            /*! ./modules/staff/staff.module */
            "QMNA")).then(function (m) {
              return m.StaffModule;
            });
          }
        }, {
          path: 'mhs',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-mhs-datamhs-module */
            [__webpack_require__.e("default~layouts-akun-akun-module~layouts-default-default-module~modules-admin-admin-module~modules-k~ac209db2"), __webpack_require__.e("default~layouts-default-default-module~modules-admin-admin-module~modules-kaprodi-kaprodi-module~mod~a73a87b3"), __webpack_require__.e("default~modules-admin-admin-module~modules-kaprodi-kaprodi-module~modules-mhs-datamhs-module~modules~dda87dfe"), __webpack_require__.e("default~modules-kaprodi-kaprodi-module~modules-mhs-datamhs-module~modules-penilaian-guru-guru-module~e8160516"), __webpack_require__.e("default~layouts-akun-akun-module~modules-admin-admin-module~modules-kaprodi-kaprodi-module~modules-m~262d7060"), __webpack_require__.e("default~layouts-akun-akun-module~layouts-default-default-module~modules-mhs-datamhs-module"), __webpack_require__.e("modules-mhs-datamhs-module")]).then(__webpack_require__.bind(null,
            /*! ./modules/mhs/datamhs.module */
            "NpFv")).then(function (m) {
              return m.DatamhsModule;
            });
          }
        }]
      }, {
        path: 'auth',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | layouts-akun-akun-module */
          [__webpack_require__.e("default~layouts-akun-akun-module~layouts-default-default-module~modules-admin-admin-module~modules-k~ac209db2"), __webpack_require__.e("default~layouts-akun-akun-module~modules-admin-admin-module~modules-kaprodi-kaprodi-module~modules-m~262d7060"), __webpack_require__.e("default~layouts-akun-akun-module~layouts-default-default-module~modules-mhs-datamhs-module"), __webpack_require__.e("layouts-akun-akun-module")]).then(__webpack_require__.bind(null,
          /*! ./layouts/akun/akun.module */
          "sd3A")).then(function (m) {
            return m.AkunModule;
          });
        }
      }, {
        path: 'admin',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-admin-admin-module */
          [__webpack_require__.e("default~layouts-akun-akun-module~layouts-default-default-module~modules-admin-admin-module~modules-k~ac209db2"), __webpack_require__.e("default~layouts-default-default-module~modules-admin-admin-module~modules-kaprodi-kaprodi-module~mod~a73a87b3"), __webpack_require__.e("default~layouts-default-default-module~modules-admin-admin-module~modules-kaprodi-kaprodi-module~mod~9d3e5a49"), __webpack_require__.e("default~modules-admin-admin-module~modules-kaprodi-kaprodi-module~modules-mhs-datamhs-module~modules~dda87dfe"), __webpack_require__.e("default~layouts-akun-akun-module~modules-admin-admin-module~modules-kaprodi-kaprodi-module~modules-m~262d7060"), __webpack_require__.e("default~layouts-default-default-module~modules-admin-admin-module"), __webpack_require__.e("modules-admin-admin-module")]).then(__webpack_require__.bind(null,
          /*! ./modules/admin/admin.module */
          "13Ib")).then(function (m) {
            return m.AdminModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: []
      })], AppRoutingModule);
      /***/
    },

    /***/
    "xS3V":
    /*!******************************************************!*\
      !*** ./src/app/layouts/default/default.component.ts ***!
      \******************************************************/

    /*! exports provided: DefaultComponent */

    /***/
    function xS3V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultComponent", function () {
        return DefaultComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_default_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./default.component.html */
      "fKaD");
      /* harmony import */


      var _default_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./default.component.css */
      "Jckx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DefaultComponent = /*#__PURE__*/function () {
        function DefaultComponent() {
          _classCallCheck(this, DefaultComponent);

          this.sideBarOpen = true;
        }

        _createClass(DefaultComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "sideBarToggler",
          value: function sideBarToggler($event) {
            this.sideBarOpen = !this.sideBarOpen;
          }
        }]);

        return DefaultComponent;
      }();

      DefaultComponent.ctorParameters = function () {
        return [];
      };

      DefaultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-default',
        template: _raw_loader_default_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_default_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DefaultComponent);
      /***/
    },

    /***/
    "xnJx":
    /*!***********************************************************!*\
      !*** ./src/app/layouts/akun/_helpers/auth.interceptor.ts ***!
      \***********************************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function xnJx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/token-storage.service */
      "3QRs");

      var TOKEN_HEADER_KEY = 'x-access-token';

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(token) {
          _classCallCheck(this, AuthInterceptor);

          this.token = token;
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var authReq = req;
            var token = this.token.getToken();

            if (token != null) {
              authReq = req.clone({
                headers: req.headers.set(TOKEN_HEADER_KEY, token)
              });
            }

            return next.handle(authReq);
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ctorParameters = function () {
        return [{
          type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
        }];
      };

      AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map