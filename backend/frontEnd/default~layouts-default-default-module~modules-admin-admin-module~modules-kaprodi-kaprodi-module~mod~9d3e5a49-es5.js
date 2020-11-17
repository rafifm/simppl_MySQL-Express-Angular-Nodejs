(function () {
  function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layouts-default-default-module~modules-admin-admin-module~modules-kaprodi-kaprodi-module~mod~9d3e5a49"], {
    /***/
    "+LSZ":
    /*!*********************************************************************************!*\
      !*** ./src/app/shared/component/sidebar/sidebaradmin/sidebaradmin.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: SidebaradminComponent */

    /***/
    function LSZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebaradminComponent", function () {
        return SidebaradminComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sidebaradmin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sidebaradmin.component.html */
      "zbaq");
      /* harmony import */


      var _sidebaradmin_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidebaradmin.component.css */
      "gv3B");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_layouts_akun_services_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/layouts/akun/_services/token-storage.service */
      "3QRs");

      var SidebaradminComponent = /*#__PURE__*/function () {
        function SidebaradminComponent(tokenService, route) {
          _classCallCheck(this, SidebaradminComponent);

          this.tokenService = tokenService;
          this.route = route;
        }

        _createClass(SidebaradminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.nama_admin = this.route.snapshot.queryParams['nama'];
            this.email_admin = this.tokenService.getPengguna().email_pengguna;
          }
        }]);

        return SidebaradminComponent;
      }();

      SidebaradminComponent.ctorParameters = function () {
        return [{
          type: src_app_layouts_akun_services_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      SidebaradminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sidebaradmin',
        template: _raw_loader_sidebaradmin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sidebaradmin_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SidebaradminComponent);
      /***/
    },

    /***/
    "/t3+":
    /*!*************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js ***!
      \*************************************************************************/

    /*! exports provided: MatToolbar, MatToolbarModule, MatToolbarRow, throwToolbarMixedModesError */

    /***/
    function t3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatToolbar", function () {
        return MatToolbar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatToolbarModule", function () {
        return MatToolbarModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatToolbarRow", function () {
        return MatToolbarRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "throwToolbarMixedModesError", function () {
        return throwToolbarMixedModesError;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatToolbar.

      /** @docs-private */


      var _c0 = ["*", [["mat-toolbar-row"]]];
      var _c1 = ["*", "mat-toolbar-row"];

      var MatToolbarBase = function MatToolbarBase(_elementRef) {
        _classCallCheck(this, MatToolbarBase);

        this._elementRef = _elementRef;
      };

      var _MatToolbarMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinColor"])(MatToolbarBase);

      var MatToolbarRow = function MatToolbarRow() {
        _classCallCheck(this, MatToolbarRow);
      };

      MatToolbarRow.ɵfac = function MatToolbarRow_Factory(t) {
        return new (t || MatToolbarRow)();
      };

      MatToolbarRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatToolbarRow,
        selectors: [["mat-toolbar-row"]],
        hostAttrs: [1, "mat-toolbar-row"],
        exportAs: ["matToolbarRow"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbarRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-toolbar-row',
            exportAs: 'matToolbarRow',
            host: {
              'class': 'mat-toolbar-row'
            }
          }]
        }], null, null);
      })();

      var MatToolbar = /*#__PURE__*/function (_MatToolbarMixinBase2) {
        _inherits(MatToolbar, _MatToolbarMixinBase2);

        var _super = _createSuper(MatToolbar);

        function MatToolbar(elementRef, _platform, document) {
          var _this;

          _classCallCheck(this, MatToolbar);

          _this = _super.call(this, elementRef);
          _this._platform = _platform; // TODO: make the document a required param when doing breaking changes.

          _this._document = document;
          return _this;
        }

        _createClass(MatToolbar, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            if (this._platform.isBrowser) {
              this._checkToolbarMixedModes();

              this._toolbarRows.changes.subscribe(function () {
                return _this2._checkToolbarMixedModes();
              });
            }
          }
          /**
           * Throws an exception when developers are attempting to combine the different toolbar row modes.
           */

        }, {
          key: "_checkToolbarMixedModes",
          value: function _checkToolbarMixedModes() {
            var _this3 = this;

            if (this._toolbarRows.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              // Check if there are any other DOM nodes that can display content but aren't inside of
              // a <mat-toolbar-row> element.
              var isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter(function (node) {
                return !(node.classList && node.classList.contains('mat-toolbar-row'));
              }).filter(function (node) {
                return node.nodeType !== (_this3._document ? _this3._document.COMMENT_NODE : 8);
              }).some(function (node) {
                return !!(node.textContent && node.textContent.trim());
              });

              if (isCombinedUsage) {
                throwToolbarMixedModesError();
              }
            }
          }
        }]);

        return MatToolbar;
      }(_MatToolbarMixinBase);

      MatToolbar.ɵfac = function MatToolbar_Factory(t) {
        return new (t || MatToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
      };

      MatToolbar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatToolbar,
        selectors: [["mat-toolbar"]],
        contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatToolbarRow, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._toolbarRows = _t);
          }
        },
        hostAttrs: [1, "mat-toolbar"],
        hostVars: 4,
        hostBindings: function MatToolbar_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
          }
        },
        inputs: {
          color: "color"
        },
        exportAs: ["matToolbar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 2,
        vars: 0,
        template: function MatToolbar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
          }
        },
        styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatToolbar.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      };

      MatToolbar.propDecorators = {
        _toolbarRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [MatToolbarRow, {
            descendants: true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-toolbar',
            exportAs: 'matToolbar',
            template: "<ng-content></ng-content>\n<ng-content select=\"mat-toolbar-row\"></ng-content>\n",
            inputs: ['color'],
            host: {
              'class': 'mat-toolbar',
              '[class.mat-toolbar-multiple-rows]': '_toolbarRows.length > 0',
              '[class.mat-toolbar-single-row]': '_toolbarRows.length === 0'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }];
        }, {
          _toolbarRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [MatToolbarRow, {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * Throws an exception when attempting to combine the different toolbar row modes.
       * @docs-private
       */


      function throwToolbarMixedModesError() {
        throw Error('MatToolbar: Attempting to combine different toolbar modes. ' + 'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' + 'inside of a `<mat-toolbar>` for a single row.');
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatToolbarModule = function MatToolbarModule() {
        _classCallCheck(this, MatToolbarModule);
      };

      MatToolbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatToolbarModule
      });
      MatToolbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatToolbarModule_Factory(t) {
          return new (t || MatToolbarModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatToolbarModule, {
          declarations: function declarations() {
            return [MatToolbar, MatToolbarRow];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            exports: [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            declarations: [MatToolbar, MatToolbarRow]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=toolbar.js.map

      /***/

    },

    /***/
    "1VV9":
    /*!*********************************************************************************!*\
      !*** ./src/app/shared/component/sidebar/sidebardosen/sidebardosen.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: SidebardosenComponent */

    /***/
    function VV9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebardosenComponent", function () {
        return SidebardosenComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sidebardosen_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sidebardosen.component.html */
      "2UtH");
      /* harmony import */


      var _sidebardosen_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidebardosen.component.css */
      "jr1D");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SidebardosenComponent = /*#__PURE__*/function () {
        function SidebardosenComponent(route) {
          _classCallCheck(this, SidebardosenComponent);

          this.route = route;
        }

        _createClass(SidebardosenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.nama_dosen = this.route.snapshot.queryParams['nama'];
            this.email_dosen = this.route.snapshot.queryParams['email'];
          }
        }]);

        return SidebardosenComponent;
      }();

      SidebardosenComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      SidebardosenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sidebardosen',
        template: _raw_loader_sidebardosen_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sidebardosen_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SidebardosenComponent);
      /***/
    },

    /***/
    "1eqT":
    /*!********************************************************************************!*\
      !*** ./src/app/shared/component/sidebar/sidebarguru/sidebarguru.component.css ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function eqT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host .mat-icon {\r\n  vertical-align: middle;\r\n  margin-right: 20px;\r\n}\r\n\r\n.profile-card {\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n\r\n.profile-card img {\r\n  width: 100px;\r\n  height: 100px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXJndXJ1LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic2lkZWJhcmd1cnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IC5tYXQtaWNvbiB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1jYXJkIGltZyB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59Il19 */";
      /***/
    },

    /***/
    "2UtH":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/sidebar/sidebardosen/sidebardosen.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UtH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-nav-list>\r\n  <div class=\"profile-card\">\r\n    <div class=\"header\">\r\n      <h2>{{nama_dosen}}</h2>\r\n      <h4>{{email_dosen}}</h4>\r\n    </div>\r\n    <img src=\"assets/logoprofile.png\">\r\n  </div>\r\n\r\n</mat-nav-list>";
      /***/
    },

    /***/
    "2uUN":
    /*!*********************************************************************************!*\
      !*** ./src/app/shared/component/sidebar/sidebarstaff/sidebarstaff.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: SidebarstaffComponent */

    /***/
    function uUN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarstaffComponent", function () {
        return SidebarstaffComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sidebarstaff_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sidebarstaff.component.html */
      "zVgB");
      /* harmony import */


      var _sidebarstaff_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidebarstaff.component.css */
      "uJI4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SidebarstaffComponent = /*#__PURE__*/function () {
        function SidebarstaffComponent() {
          _classCallCheck(this, SidebarstaffComponent);

          this.ddstaff = [{
            label: 'Staff',
            items: [{
              label: ' - Nilai UAS',
              link: '/pendaftaranmhstampil'
            }, {
              label: 'Pendaftaran Mahasiswa',
              link: '/pendaftaranmhstampil'
            }, {
              label: 'Penilaian Dosen',
              link: '/nilaidosentampil'
            }, {
              label: 'Penilaian Guru',
              link: '/nilaigurutampil'
            }]
          }];
          this.ddguru = [{
            label: 'Guru Pamong',
            items: [{
              label: 'Pendaftaran Mahasiswa',
              link: '/pendaftaranmhstampil'
            }, {
              label: 'Penilaian Dosen',
              link: '/nilaidosentampil'
            }, {
              label: 'Penilaian Guru',
              link: '/nilaigurutampil'
            }]
          }];
          this.dddosen = [{
            label: 'Dosen Pembimbing',
            items: [{
              label: ' - Nilai UAS',
              link: '/pendaftaranmhstampil'
            }, {
              label: 'Pendaftaran Mahasiswa',
              link: '/pendaftaranmhstampil'
            }, {
              label: 'Penilaian Dosen',
              link: '/nilaidosentampil'
            }, {
              label: 'Penilaian Guru',
              link: '/nilaigurutampil'
            }]
          }];
          this.ddmhs = [{
            label: 'Mahasiswa',
            items: [{
              label: 'Pendaftaran Mahasiswa',
              link: '/pendaftaranmhstampil'
            }, {
              label: 'Penilaian Dosen',
              link: '/nilaidosentampil'
            }, {
              label: 'Penilaian Guru',
              link: '/nilaigurutampil'
            }]
          }];
          this.config = {
            highlightOnSelect: true,
            interfaceWithRoute: true,
            collapseOnSelect: true
          };
        }

        _createClass(SidebarstaffComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SidebarstaffComponent;
      }();

      SidebarstaffComponent.ctorParameters = function () {
        return [];
      };

      SidebarstaffComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sidebarstaff',
        template: _raw_loader_sidebarstaff_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sidebarstaff_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SidebarstaffComponent);
      /***/
    },

    /***/
    "49JC":
    /*!**************************************************************!*\
      !*** ./src/app/shared/component/header/header.component.css ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function JC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ul li {\r\n  list-style: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwgbGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "536J":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/sidebar/sidebarkaprodi/sidebarkaprodi.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-nav-list>\r\n  <div class=\"profile-card\">\r\n    <div class=\"header\">\r\n      <h2>{{nama_kaprodi}}</h2>\r\n      <h4>{{email_kaprodi}}</h4>\r\n    </div>\r\n    <img src=\"assets/logoprofile.png\">\r\n  </div>\r\n\r\n  <mat-divider></mat-divider>\r\n  <ng-material-multilevel-menu [configuration]='config' [items]='ddpengguna'></ng-material-multilevel-menu>\r\n  <ng-material-multilevel-menu [configuration]='config' [items]='ddsklh'></ng-material-multilevel-menu>\r\n  <ng-material-multilevel-menu [configuration]='config' [items]='ddmhs'></ng-material-multilevel-menu>\r\n  <mat-divider></mat-divider>\r\n\r\n</mat-nav-list>";
      /***/
    },

    /***/
    "Cqpj":
    /*!**************************************************************!*\
      !*** ./src/app/shared/component/footer/footer.component.css ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function Cqpj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "footer {\r\n  padding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "CsTR":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/ng-material-multilevel-menu/__ivy_ngcc__/fesm2015/ng-material-multilevel-menu.js ***!
      \*******************************************************************************************************/

    /*! exports provided: ExpandCollapseStatusEnum, NgMaterialMultilevelMenuComponent, NgMaterialMultilevelMenuModule, ɵa, ɵb, ɵc */

    /***/
    function CsTR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpandCollapseStatusEnum", function () {
        return ExpandCollapseStatusEnum;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgMaterialMultilevelMenuComponent", function () {
        return NgMaterialMultilevelMenuComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgMaterialMultilevelMenuModule", function () {
        return NgMaterialMultilevelMenuModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return MaterialsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return MultilevelMenuService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return ListItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");

      function ListItemComponent_mat_list_item_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
        }
      }

      function ListItemComponent_mat_list_item_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-list-item", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListItemComponent_mat_list_item_0_Template_mat_list_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r7.expand(ctx_r7.node);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListItemComponent_mat_list_item_0_ng_container_1_Template, 1, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx_r0.node.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRippleDisabled", ctx_r0.node.disabled)("ngClass", ctx_r0.selectedListClasses)("ngStyle", ctx_r0.getListStyle());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2);
        }
      }

      function ListItemComponent_div_2_ng_list_item_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-list-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedItem", function ListItemComponent_div_2_ng_list_item_1_Template_ng_list_item_selectedItem_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r11.selectedListItem($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var singleNode_r10 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nodeConfiguration", ctx_r9.nodeConfiguration)("node", singleNode_r10.value)("level", ctx_r9.level + 1)("submenuLevel", singleNode_r10.key)("selectedNode", ctx_r9.selectedNode)("nodeExpandCollapseStatus", ctx_r9.nodeExpandCollapseStatus);
        }
      }

      function ListItemComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListItemComponent_div_2_ng_list_item_1_Template, 1, 6, "ng-list-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@slideInOut", undefined)("dir", ctx_r1.isRtlLayout() ? "rtl" : "ltr")("ngClass", ctx_r1.classes);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 4, ctx_r1.nodeChildren, ctx_r1.multilevelMenuService.kvDummyComparerFn));
        }
      }

      function ListItemComponent_ng_template_3_a_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
        }
      }

      function ListItemComponent_ng_template_3_a_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListItemComponent_ng_template_3_a_0_ng_container_1_Template, 1, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r13.node.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", ctx_r13.getHrefTargetType());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r4);
        }
      }

      function ListItemComponent_ng_template_3_a_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
        }
      }

      function ListItemComponent_ng_template_3_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListItemComponent_ng_template_3_a_1_ng_container_1_Template, 1, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r14.node.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r4);
        }
      }

      function ListItemComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ListItemComponent_ng_template_3_a_0_Template, 2, 3, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListItemComponent_ng_template_3_a_1_Template, 2, 2, "a", 10);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.node.externalRedirect);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.node.externalRedirect);
        }
      }

      function ListItemComponent_ng_template_5_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r17.getSelectedFaIcon());
        }
      }

      function ListItemComponent_ng_template_5_mat_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r18.getSelectedIcon(), " ");
        }
      }

      function ListItemComponent_ng_template_5_mat_icon_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 24);
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("svgIcon", ctx_r19.getSelectedSvgIcon());
        }
      }

      function ListItemComponent_ng_template_5_img_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 25);
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r20.getSelectedImageIcon(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx_r20.node.label);
        }
      }

      function ListItemComponent_ng_template_5_div_8_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " keyboard_arrow_down ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@isExpandedLTR", ctx_r22.expanded ? "yes" : "no");
        }
      }

      function ListItemComponent_ng_template_5_div_8_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " keyboard_arrow_down ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@isExpandedRTL", ctx_r23.expanded ? "yes" : "no");
        }
      }

      function ListItemComponent_ng_template_5_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListItemComponent_ng_template_5_div_8_mat_icon_1_Template, 2, 1, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ListItemComponent_ng_template_5_div_8_mat_icon_2_Template, 2, 1, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r21.isRtlLayout());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r21.isRtlLayout());
        }
      }

      function ListItemComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ListItemComponent_ng_template_5_span_2_Template, 2, 1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ListItemComponent_ng_template_5_mat_icon_3_Template, 2, 1, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ListItemComponent_ng_template_5_mat_icon_4_Template, 1, 1, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ListItemComponent_ng_template_5_img_5_Template, 1, 2, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ListItemComponent_ng_template_5_div_8_Template, 3, 2, "div", 20);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dir", ctx_r5.isRtlLayout() ? "rtl" : "ltr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r5.getListIcon(ctx_r5.node));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "faicon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "svgicon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "imageicon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.node.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.hasItems());
        }
      }

      function NgMaterialMultilevelMenuComponent_div_0_ng_list_item_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-list-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedItem", function NgMaterialMultilevelMenuComponent_div_0_ng_list_item_2_Template_ng_list_item_selectedItem_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r3.selectedListItem($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nodeConfiguration", ctx_r1.nodeConfig)("node", node_r2.value)("level", 1)("submenuLevel", node_r2.key)("selectedNode", ctx_r1.currentNode)("nodeExpandCollapseStatus", ctx_r1.nodeExpandCollapseStatus);
        }
      }

      function NgMaterialMultilevelMenuComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NgMaterialMultilevelMenuComponent_div_0_ng_list_item_2_Template, 1, 6, "ng-list-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.getClassName())("ngStyle", ctx_r0.getGlobalStyle())("dir", ctx_r0.isRtlLayout() ? "rtl" : "ltr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 4, ctx_r0.items, ctx_r0.multilevelMenuService.kvDummyComparerFn));
        }
      }

      var ExpandCollapseStatusEnum;

      (function (ExpandCollapseStatusEnum) {
        ExpandCollapseStatusEnum["expand"] = "expand";
        ExpandCollapseStatusEnum["collapse"] = "collapse";
      })(ExpandCollapseStatusEnum || (ExpandCollapseStatusEnum = {}));

      var CONSTANT = {
        PADDING_AT_START: true,
        DEFAULT_CLASS_NAME: "amml-container",
        DEFAULT_LIST_CLASS_NAME: "amml-item",
        SELECTED_LIST_CLASS_NAME: "selected-amml-item",
        ACTIVE_ITEM_CLASS_NAME: "active-amml-item",
        DISABLED_ITEM_CLASS_NAME: "disabled-amml-item",
        DEFAULT_SELECTED_FONT_COLOR: "#1976d2",
        DEFAULT_LIST_BACKGROUND_COLOR: "transparent",
        DEFAULT_LIST_FONT_COLOR: "rgba(0,0,0,.87)",
        DEFAULT_HREF_TARGET_TYPE: '_self',
        ERROR_MESSAGE: "Invalid data for material Multilevel List Component"
      };

      var MultilevelMenuService = /*#__PURE__*/function () {
        function MultilevelMenuService() {
          _classCallCheck(this, MultilevelMenuService);
        }

        _createClass(MultilevelMenuService, [{
          key: "generateId",
          value: function generateId() {
            var text = '';
            var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

            for (var i = 0; i < 20; i++) {
              text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return text;
          }
        }, {
          key: "addRandomId",
          value: function addRandomId(nodes) {
            var _this4 = this;

            nodes.forEach(function (node) {
              node.id = _this4.generateId();

              if (node.items !== undefined) {
                _this4.addRandomId(node.items);
              }
            });
          }
        }, {
          key: "recursiveCheckId",
          value: function recursiveCheckId(node, nodeId) {
            var _this5 = this;

            if (node.id === nodeId) {
              return true;
            } else {
              if (node.items !== undefined) {
                return node.items.some(function (nestedNode) {
                  return _this5.recursiveCheckId(nestedNode, nodeId);
                });
              }
            }
          }
        }, {
          key: "recursiveCheckLink",
          value: function recursiveCheckLink(nodes, link) {
            for (var nodeIndex = 0; nodeIndex < nodes.length; nodeIndex++) {
              var node = nodes[nodeIndex];

              for (var key in node) {
                if (node.hasOwnProperty(key)) {
                  if (encodeURI(node.link) === link) {
                    this.foundLinkObject = node;
                  } else {
                    if (node.items !== undefined) {
                      this.recursiveCheckLink(node.items, link);
                    }
                  }
                }
              }
            }
          }
        }, {
          key: "getMatchedObjectByUrl",
          value: function getMatchedObjectByUrl(node, link) {
            this.recursiveCheckLink(node, link);
            return this.foundLinkObject;
          } // overrides key-value pipe's default reordering (by key) by implementing dummy comprarer function
          // https://angular.io/api/common/KeyValuePipe#description

        }, {
          key: "kvDummyComparerFn",
          value: function kvDummyComparerFn() {
            return 0;
          }
        }]);

        return MultilevelMenuService;
      }();

      MultilevelMenuService.ɵfac = function MultilevelMenuService_Factory(t) {
        return new (t || MultilevelMenuService)();
      };

      MultilevelMenuService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
        factory: function MultilevelMenuService_Factory() {
          return new MultilevelMenuService();
        },
        token: MultilevelMenuService,
        providedIn: "root"
      });

      var ListItemComponent = /*#__PURE__*/function () {
        function ListItemComponent(router, multilevelMenuService) {
          var _this$selectedListCla;

          _classCallCheck(this, ListItemComponent);

          this.router = router;
          this.multilevelMenuService = multilevelMenuService;
          this.level = 1;
          this.submenuLevel = 0;
          this.nodeConfiguration = null;
          this.nodeExpandCollapseStatus = null;
          this.selectedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.isSelected = false;
          this.expanded = false;
          this.firstInitializer = false;
          this.selectedListClasses = (_this$selectedListCla = {}, _defineProperty(_this$selectedListCla, CONSTANT.DEFAULT_LIST_CLASS_NAME, true), _defineProperty(_this$selectedListCla, CONSTANT.SELECTED_LIST_CLASS_NAME, false), _defineProperty(_this$selectedListCla, CONSTANT.ACTIVE_ITEM_CLASS_NAME, false), _this$selectedListCla);
        }

        _createClass(ListItemComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.nodeChildren = this.node && this.node.items ? this.node.items.filter(function (n) {
              return !n.hidden;
            }) : [];

            if (this.selectedNode !== undefined && this.selectedNode !== null) {
              this.setSelectedClass(this.multilevelMenuService.recursiveCheckId(this.node, this.selectedNode.id));
            }

            this.setExpandCollapseStatus();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selectedListClasses[CONSTANT.DISABLED_ITEM_CLASS_NAME] = this.node.disabled;

            if (this.node.faIcon !== null && this.node.faIcon !== undefined && this.node.faIcon.match(/\bfa\w(?!-)/) === null) {
              this.node.faIcon = "fas ".concat(this.node.faIcon);
            }

            this.selectedListClasses["level-".concat(this.level, "-submenulevel-").concat(this.submenuLevel)] = true;

            if (typeof this.node.expanded === 'boolean') {
              this.expanded = this.node.expanded;
            }

            this.setClasses();
          }
        }, {
          key: "setSelectedClass",
          value: function setSelectedClass(isFound) {
            var _this$selectedListCla2;

            if (isFound) {
              if (!this.firstInitializer) {
                this.expanded = true;
              }

              this.isSelected = this.nodeConfiguration.highlightOnSelect || this.selectedNode.items === undefined ? true : false;
            } else {
              this.isSelected = false;

              if (this.nodeConfiguration.collapseOnSelect) {
                this.expanded = false;
              }
            }

            this.selectedListClasses = (_this$selectedListCla2 = {}, _defineProperty(_this$selectedListCla2, CONSTANT.DEFAULT_LIST_CLASS_NAME, true), _defineProperty(_this$selectedListCla2, CONSTANT.SELECTED_LIST_CLASS_NAME, this.isSelected), _defineProperty(_this$selectedListCla2, CONSTANT.ACTIVE_ITEM_CLASS_NAME, this.selectedNode.id === this.node.id), _defineProperty(_this$selectedListCla2, CONSTANT.DISABLED_ITEM_CLASS_NAME, this.node.disabled), _defineProperty(_this$selectedListCla2, "level-".concat(this.level, "-submenulevel-").concat(this.submenuLevel), true), _this$selectedListCla2);
            this.setClasses();
          }
        }, {
          key: "getPaddingAtStart",
          value: function getPaddingAtStart() {
            return this.nodeConfiguration.paddingAtStart ? true : false;
          }
        }, {
          key: "getListStyle",
          value: function getListStyle() {
            var styles = {
              background: CONSTANT.DEFAULT_LIST_BACKGROUND_COLOR,
              color: CONSTANT.DEFAULT_LIST_FONT_COLOR
            };

            if (this.nodeConfiguration.listBackgroundColor !== null) {
              styles.background = this.nodeConfiguration.listBackgroundColor;
            }

            if (this.isSelected) {
              this.nodeConfiguration.selectedListFontColor !== null ? styles.color = this.nodeConfiguration.selectedListFontColor : styles.color = CONSTANT.DEFAULT_SELECTED_FONT_COLOR;
            } else if (this.nodeConfiguration.fontColor !== null) {
              styles.color = this.nodeConfiguration.fontColor;
            }

            return styles;
          }
        }, {
          key: "getListIcon",
          value: function getListIcon(node) {
            if (node.icon !== null && node.icon !== undefined && node.icon !== '') {
              return "icon";
            } else if (node.faIcon !== null && node.faIcon !== undefined && node.faIcon !== '') {
              return "faicon";
            } else if (node.imageIcon !== null && node.imageIcon !== undefined && node.imageIcon !== '') {
              return "imageicon";
            } else if (node.svgIcon !== null && node.svgIcon !== undefined && node.svgIcon !== '') {
              return "svgicon";
            } else {
              return "";
            }
          }
        }, {
          key: "getSelectedSvgIcon",
          value: function getSelectedSvgIcon() {
            if (this.isSelected && this.node.activeSvgIcon) {
              return this.node.activeSvgIcon;
            }

            return this.node.svgIcon;
          }
        }, {
          key: "getSelectedIcon",
          value: function getSelectedIcon() {
            if (this.isSelected && this.node.activeIcon) {
              return this.node.activeIcon;
            }

            return this.node.icon;
          }
        }, {
          key: "getSelectedFaIcon",
          value: function getSelectedFaIcon() {
            if (this.isSelected && this.node.activeFaIcon) {
              return this.node.activeFaIcon;
            }

            return this.node.faIcon;
          }
        }, {
          key: "getSelectedImageIcon",
          value: function getSelectedImageIcon() {
            if (this.isSelected && this.node.activeImageIcon) {
              return this.node.activeImageIcon;
            }

            return this.node.imageIcon;
          }
        }, {
          key: "getHrefTargetType",
          value: function getHrefTargetType() {
            if (this.node.hrefTargetType) {
              return this.node.hrefTargetType;
            }

            return CONSTANT.DEFAULT_HREF_TARGET_TYPE;
          }
        }, {
          key: "hasItems",
          value: function hasItems() {
            return this.nodeChildren.length > 0 ? true : false;
          }
        }, {
          key: "isRtlLayout",
          value: function isRtlLayout() {
            return this.nodeConfiguration.rtlLayout;
          }
        }, {
          key: "setClasses",
          value: function setClasses() {
            var _this$classes;

            this.classes = (_this$classes = {}, _defineProperty(_this$classes, "level-".concat(this.level + 1), true), _defineProperty(_this$classes, 'amml-submenu', this.hasItems() && this.getPaddingAtStart()), _this$classes);
          }
        }, {
          key: "setExpandCollapseStatus",
          value: function setExpandCollapseStatus() {
            if (this.nodeExpandCollapseStatus !== null && this.nodeExpandCollapseStatus !== undefined) {
              if (this.nodeExpandCollapseStatus === ExpandCollapseStatusEnum.expand) {
                this.expanded = true;
              }

              if (this.nodeExpandCollapseStatus === ExpandCollapseStatusEnum.collapse) {
                this.expanded = false;
              }
            }
          }
        }, {
          key: "expand",
          value: function expand(node) {
            if (node.disabled) {
              return;
            }

            this.expanded = !this.expanded;
            this.firstInitializer = true;
            this.setClasses();

            if (this.nodeConfiguration.interfaceWithRoute !== null && this.nodeConfiguration.interfaceWithRoute && node.link !== undefined && node.link) {
              this.router.navigate([node.link], node.navigationExtras);
            } else if (node.onSelected && typeof node.onSelected === 'function') {
              node.onSelected(node);
              this.selectedListItem(node);
            } else if (node.items === undefined || this.nodeConfiguration.collapseOnSelect) {
              this.selectedListItem(node);
            }
          }
        }, {
          key: "selectedListItem",
          value: function selectedListItem(node) {
            this.selectedItem.emit(node);
          }
        }]);

        return ListItemComponent;
      }();

      ListItemComponent.ɵfac = function ListItemComponent_Factory(t) {
        return new (t || ListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MultilevelMenuService));
      };

      ListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ListItemComponent,
        selectors: [["ng-list-item"]],
        inputs: {
          level: "level",
          submenuLevel: "submenuLevel",
          nodeConfiguration: "nodeConfiguration",
          nodeExpandCollapseStatus: "nodeExpandCollapseStatus",
          node: "node",
          selectedNode: "selectedNode"
        },
        outputs: {
          selectedItem: "selectedItem"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 7,
        vars: 2,
        consts: [["matRipple", "", 3, "title", "matRippleDisabled", "ngClass", "ngStyle", "click", 4, "ngIf"], [3, "dir", "ngClass", 4, "ngIf"], ["linkTemplate", ""], ["linkLabelOutlet", ""], ["matRipple", "", 3, "title", "matRippleDisabled", "ngClass", "ngStyle", "click"], [4, "ngTemplateOutlet"], [3, "dir", "ngClass"], [3, "nodeConfiguration", "node", "level", "submenuLevel", "selectedNode", "nodeExpandCollapseStatus", "selectedItem", 4, "ngFor", "ngForOf"], [3, "nodeConfiguration", "node", "level", "submenuLevel", "selectedNode", "nodeExpandCollapseStatus", "selectedItem"], ["class", "anml-link", 3, "href", "target", 4, "ngIf"], ["class", "anml-link", 3, "routerLink", 4, "ngIf"], [1, "anml-link", 3, "href", "target"], [1, "anml-link", 3, "routerLink"], [1, "anml-data", 3, "dir"], [1, "icon-container", 3, "ngSwitch"], ["class", "amml-icon amml-icon-fa", 4, "ngSwitchCase"], ["class", "amml-icon", 4, "ngSwitchCase"], ["class", "amml-icon amml-svg-icon", 3, "svgIcon", 4, "ngSwitchCase"], ["matListAvatar", "", "class", "amml-icon", 3, "src", "alt", 4, "ngSwitchCase"], [1, "label"], ["class", "amml-icon-arrow-container", 4, "ngIf"], [1, "amml-icon", "amml-icon-fa"], [3, "ngClass"], [1, "amml-icon"], [1, "amml-icon", "amml-svg-icon", 3, "svgIcon"], ["matListAvatar", "", 1, "amml-icon", 3, "src", "alt"], [1, "amml-icon-arrow-container"], [4, "ngIf"]],
        template: function ListItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ListItemComponent_mat_list_item_0_Template, 2, 5, "mat-list-item", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ListItemComponent_div_2_Template, 3, 7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ListItemComponent_ng_template_3_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ListItemComponent_ng_template_5_Template, 9, 8, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.node.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasItems() && ctx.expanded);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ListItemComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListAvatarCssMatStyler"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]],
        styles: [".amml-item[_ngcontent-%COMP%]{line-height:48px;position:relative;cursor:pointer}.anml-link[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-start;text-transform:capitalize;text-decoration:none;color:inherit}.anml-data[_ngcontent-%COMP%]{width:100%;height:48px;display:flex;justify-content:flex-start}.disabled-amml-item[_ngcontent-%COMP%]{opacity:.5;text-decoration:none;pointer-events:none}.icon-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.amml-icon-fa[_ngcontent-%COMP%]{font-size:20px}.label[_ngcontent-%COMP%]{line-height:48px;font-weight:400}.amml-svg-icon[_ngcontent-%COMP%]{width:22px;height:22px;margin-top:-12px}.amml-icon-arrow-container[_ngcontent-%COMP%]{direction:ltr;display:flex;align-items:center}div[dir=ltr][_ngcontent-%COMP%]   .amml-icon[_ngcontent-%COMP%]{margin-right:16px}div[dir=ltr].amml-submenu[_ngcontent-%COMP%], div[dir=rtl][_ngcontent-%COMP%]   .amml-icon[_ngcontent-%COMP%]{margin-left:16px}div[dir=rtl].amml-submenu[_ngcontent-%COMP%]{margin-right:16px}"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            height: '*',
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            height: '*',
            opacity: 0.2
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            height: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            opacity: 0
          }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            height: '0',
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            height: '*'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            opacity: 1
          }))])])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('isExpandedLTR', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('no', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            transform: 'rotate(-90deg)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('yes', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            transform: 'rotate(0deg)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('no => yes', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(200)), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('yes => no', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(200))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('isExpandedRTL', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('no', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            transform: 'rotate(90deg)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('yes', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            transform: 'rotate(0deg)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('no => yes', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(200)), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('yes => no', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(200))])]
        }
      });

      ListItemComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: MultilevelMenuService
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ListItemComponent.prototype, "node", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ListItemComponent.prototype, "level", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ListItemComponent.prototype, "submenuLevel", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ListItemComponent.prototype, "selectedNode", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ListItemComponent.prototype, "nodeConfiguration", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ListItemComponent.prototype, "nodeExpandCollapseStatus", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ListItemComponent.prototype, "selectedItem", void 0);
      ListItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], MultilevelMenuService])], ListItemComponent);

      var MaterialsModule = function MaterialsModule() {
        _classCallCheck(this, MaterialsModule);
      };

      MaterialsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MaterialsModule
      });
      MaterialsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function MaterialsModule_Factory(t) {
          return new (t || MaterialsModule)();
        },
        imports: [[_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]]
      });

      var NgMaterialMultilevelMenuComponent = /*#__PURE__*/function () {
        function NgMaterialMultilevelMenuComponent(router, multilevelMenuService) {
          _classCallCheck(this, NgMaterialMultilevelMenuComponent);

          this.router = router;
          this.multilevelMenuService = multilevelMenuService;
          this.configuration = null;
          this.expandCollapseStatus = null;
          this.selectedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.selectedLabel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.nodeConfig = {
            paddingAtStart: true,
            listBackgroundColor: null,
            fontColor: null,
            selectedListFontColor: null,
            interfaceWithRoute: null,
            collapseOnSelect: null,
            highlightOnSelect: false,
            rtlLayout: false
          };
          this.isInvalidConfig = true;
          this.nodeExpandCollapseStatus = null;
        }

        _createClass(NgMaterialMultilevelMenuComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.detectInvalidConfig();
            this.detectExpandCollapseStatus();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            if (this.configuration !== null && this.configuration !== undefined && this.configuration !== '' && this.configuration.interfaceWithRoute !== null && this.configuration.interfaceWithRoute) {
              this.router.events.subscribe(function (event) {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                  _this6.updateNodeByURL(event.urlAfterRedirects);
                }
              });
              this.updateNodeByURL(this.router.url);
            }
          }
        }, {
          key: "updateNodeByURL",
          value: function updateNodeByURL(url) {
            var foundNode = this.multilevelMenuService.getMatchedObjectByUrl(this.items, url);

            if (foundNode !== undefined && foundNode.link !== undefined && foundNode.link !== null && foundNode.link !== '' // && !foundNode.disabled // Prevent route redirection for disabled menu
            ) {
                this.currentNode = foundNode;
                this.selectedListItem(foundNode);
              }
          }
        }, {
          key: "checkValidData",
          value: function checkValidData() {
            if (this.items.length === 0) {
              console.warn(CONSTANT.ERROR_MESSAGE);
            } else {
              this.items = this.items.filter(function (n) {
                return !n.hidden;
              });
              this.multilevelMenuService.addRandomId(this.items);
            }
          }
        }, {
          key: "detectInvalidConfig",
          value: function detectInvalidConfig() {
            if (this.configuration === null || this.configuration === undefined || this.configuration === '') {
              this.isInvalidConfig = true;
            } else {
              this.isInvalidConfig = false;
              var config = this.configuration;

              if (config.paddingAtStart !== undefined && config.paddingAtStart !== null && typeof config.paddingAtStart === 'boolean') {
                this.nodeConfig.paddingAtStart = config.paddingAtStart;
              }

              if (config.listBackgroundColor !== '' && config.listBackgroundColor !== null && config.listBackgroundColor !== undefined) {
                this.nodeConfig.listBackgroundColor = config.listBackgroundColor;
              }

              if (config.fontColor !== '' && config.fontColor !== null && config.fontColor !== undefined) {
                this.nodeConfig.fontColor = config.fontColor;
              }

              if (config.selectedListFontColor !== '' && config.selectedListFontColor !== null && config.selectedListFontColor !== undefined) {
                this.nodeConfig.selectedListFontColor = config.selectedListFontColor;
              }

              if (config.interfaceWithRoute !== null && config.interfaceWithRoute !== undefined && typeof config.interfaceWithRoute === 'boolean') {
                this.nodeConfig.interfaceWithRoute = config.interfaceWithRoute;
              }

              if (config.collapseOnSelect !== null && config.collapseOnSelect !== undefined && typeof config.collapseOnSelect === 'boolean') {
                this.nodeConfig.collapseOnSelect = config.collapseOnSelect;
              }

              if (config.highlightOnSelect !== null && config.highlightOnSelect !== undefined && typeof config.highlightOnSelect === 'boolean') {
                this.nodeConfig.highlightOnSelect = config.highlightOnSelect;
              }

              if (config.rtlLayout !== null && config.rtlLayout !== undefined && typeof config.rtlLayout === 'boolean') {
                this.nodeConfig.rtlLayout = config.rtlLayout;
              }
            }

            this.checkValidData();
          }
        }, {
          key: "detectExpandCollapseStatus",
          value: function detectExpandCollapseStatus() {
            if (this.expandCollapseStatus !== null && this.expandCollapseStatus !== undefined) {
              this.nodeExpandCollapseStatus = this.expandCollapseStatus;
            }
          }
        }, {
          key: "getClassName",
          value: function getClassName() {
            if (this.isInvalidConfig) {
              return CONSTANT.DEFAULT_CLASS_NAME;
            } else {
              if (this.configuration.classname !== '' && this.configuration.classname !== null && this.configuration.classname !== undefined) {
                return "".concat(CONSTANT.DEFAULT_CLASS_NAME, " ").concat(this.configuration.classname);
              } else {
                return CONSTANT.DEFAULT_CLASS_NAME;
              }
            }
          }
        }, {
          key: "getGlobalStyle",
          value: function getGlobalStyle() {
            if (!this.isInvalidConfig) {
              var styles = {
                background: null
              };

              if (this.configuration.backgroundColor !== '' && this.configuration.backgroundColor !== null && this.configuration.backgroundColor !== undefined) {
                styles.background = this.configuration.backgroundColor;
              }

              return styles;
            }
          }
        }, {
          key: "isRtlLayout",
          value: function isRtlLayout() {
            return this.nodeConfig.rtlLayout;
          }
        }, {
          key: "selectedListItem",
          value: function selectedListItem(event) {
            this.currentNode = event;

            if (event.items === undefined && (!event.onSelected || typeof event.onSelected !== 'function')) {
              this.selectedItem.emit(event);
            } else {
              this.selectedLabel.emit(event);
            }
          }
        }]);

        return NgMaterialMultilevelMenuComponent;
      }();

      NgMaterialMultilevelMenuComponent.ɵfac = function NgMaterialMultilevelMenuComponent_Factory(t) {
        return new (t || NgMaterialMultilevelMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MultilevelMenuService));
      };

      NgMaterialMultilevelMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NgMaterialMultilevelMenuComponent,
        selectors: [["ng-material-multilevel-menu"]],
        inputs: {
          configuration: "configuration",
          expandCollapseStatus: "expandCollapseStatus",
          items: "items"
        },
        outputs: {
          selectedItem: "selectedItem",
          selectedLabel: "selectedLabel"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 1,
        consts: [[3, "ngClass", "ngStyle", "dir", 4, "ngIf"], [3, "ngClass", "ngStyle", "dir"], [3, "nodeConfiguration", "node", "level", "submenuLevel", "selectedNode", "nodeExpandCollapseStatus", "selectedItem", 4, "ngFor", "ngForOf"], [3, "nodeConfiguration", "node", "level", "submenuLevel", "selectedNode", "nodeExpandCollapseStatus", "selectedItem"]],
        template: function NgMaterialMultilevelMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NgMaterialMultilevelMenuComponent_div_0_Template, 4, 7, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.items.length !== 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Dir"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ListItemComponent],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]],
        styles: [".amml-item[_ngcontent-%COMP%]{line-height:48px;display:flex;justify-content:space-between;position:relative}.anml-data[_ngcontent-%COMP%]{width:100%;text-transform:capitalize;display:flex;justify-content:flex-start}.amml-icon-fa[_ngcontent-%COMP%]{font-size:20px}.amml-icon[_ngcontent-%COMP%]{line-height:48px}.active[_ngcontent-%COMP%]{color:#1976d2}div[dir=ltr][_ngcontent-%COMP%]   .amml-icon[_ngcontent-%COMP%]{margin-right:15px}div[dir=ltr][_ngcontent-%COMP%]   .amml-submenu[_ngcontent-%COMP%]{margin-left:16px}div[dir=rtl][_ngcontent-%COMP%]   .amml-icon[_ngcontent-%COMP%]{margin-left:15px}div[dir=rtl][_ngcontent-%COMP%]   .amml-submenu[_ngcontent-%COMP%]{margin-right:16px}"]
      });

      NgMaterialMultilevelMenuComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: MultilevelMenuService
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], NgMaterialMultilevelMenuComponent.prototype, "items", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NgMaterialMultilevelMenuComponent.prototype, "configuration", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgMaterialMultilevelMenuComponent.prototype, "expandCollapseStatus", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NgMaterialMultilevelMenuComponent.prototype, "selectedItem", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NgMaterialMultilevelMenuComponent.prototype, "selectedLabel", void 0);
      NgMaterialMultilevelMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], MultilevelMenuService])], NgMaterialMultilevelMenuComponent);

      var NgMaterialMultilevelMenuModule = function NgMaterialMultilevelMenuModule() {
        _classCallCheck(this, NgMaterialMultilevelMenuModule);
      };

      NgMaterialMultilevelMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: NgMaterialMultilevelMenuModule
      });
      NgMaterialMultilevelMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function NgMaterialMultilevelMenuModule_Factory(t) {
          return new (t || NgMaterialMultilevelMenuModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], MaterialsModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MultilevelMenuService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ListItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'ng-list-item',
            template: "<mat-list-item matRipple \r\n  *ngIf=\"!node.hidden\"\r\n  title=\"{{node.label}}\"\r\n  [matRippleDisabled]=\"node.disabled\" \r\n  [ngClass]=\"selectedListClasses\"\r\n  [ngStyle]=\"getListStyle()\"\r\n  (click)=\"expand(node)\">\r\n  <ng-container *ngTemplateOutlet=\"linkTemplate\"></ng-container>\r\n</mat-list-item>\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<div *ngIf=\"hasItems() && expanded\" [@slideInOut] [dir]=\"isRtlLayout() ? 'rtl' : 'ltr'\" [ngClass]=\"classes\">\r\n  <ng-list-item *ngFor=\"let singleNode of nodeChildren | keyvalue : multilevelMenuService.kvDummyComparerFn\"\r\n    [nodeConfiguration]='nodeConfiguration' \r\n    [node]=\"singleNode.value\" \r\n    [level]=\"level + 1\"\r\n    [submenuLevel]=\"singleNode.key\"\r\n    [selectedNode]='selectedNode' \r\n    [nodeExpandCollapseStatus]='nodeExpandCollapseStatus'\r\n    (selectedItem)=\"selectedListItem($event)\">\r\n  </ng-list-item>\r\n</div>\r\n\r\n<ng-template #linkTemplate>\r\n  <a class=\"anml-link\" *ngIf=\"node.externalRedirect\" [href]=\"node.link\" [target]=\"getHrefTargetType()\">\r\n    <ng-container *ngTemplateOutlet=\"linkLabelOutlet\"></ng-container>\r\n  </a>\r\n  <a class=\"anml-link\" *ngIf=\"!node.externalRedirect\" [routerLink]=\"node.link\">\r\n    <ng-container *ngTemplateOutlet=\"linkLabelOutlet\"></ng-container>\r\n  </a>\r\n</ng-template>\r\n\r\n<ng-template #linkLabelOutlet>\r\n  <div class=\"anml-data\" [dir]=\"isRtlLayout() ? 'rtl' : 'ltr'\">\r\n    <div class=\"icon-container\" [ngSwitch]=\"getListIcon(node)\">\r\n      <span *ngSwitchCase=\"'faicon'\" class=\"amml-icon amml-icon-fa\">\r\n        <i [ngClass]=\"getSelectedFaIcon()\"></i>\r\n      </span>\r\n      <mat-icon *ngSwitchCase=\"'icon'\" class=\"amml-icon\">\r\n        {{getSelectedIcon()}}\r\n      </mat-icon>\r\n      <mat-icon *ngSwitchCase=\"'svgicon'\" svgIcon=\"{{getSelectedSvgIcon()}}\" class=\"amml-icon amml-svg-icon\">\r\n      </mat-icon>\r\n      <img matListAvatar *ngSwitchCase=\"'imageicon'\" class=\"amml-icon\" src=\"{{getSelectedImageIcon()}}\"\r\n        alt=\"{{node.label}}\" />\r\n    </div>\r\n    <span class=\"label\">{{node.label}}</span>\r\n  </div>\r\n  <div class=\"amml-icon-arrow-container\" *ngIf='hasItems()'>\r\n    <mat-icon *ngIf='!isRtlLayout()' [@isExpandedLTR]=\"expanded ? 'yes' : 'no'\">\r\n      keyboard_arrow_down\r\n    </mat-icon>\r\n    <mat-icon *ngIf='isRtlLayout()' [@isExpandedRTL]=\"expanded ? 'yes' : 'no'\">\r\n      keyboard_arrow_down\r\n    </mat-icon>\r\n  </div>\r\n</ng-template>",
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
              height: '*',
              opacity: 0
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
              height: '*',
              opacity: 0.2
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
              height: 0
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
              opacity: 0
            }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
              height: '0',
              opacity: 0
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
              height: '*'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
              opacity: 1
            }))])])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('isExpandedLTR', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('no', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
              transform: 'rotate(-90deg)'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('yes', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
              transform: 'rotate(0deg)'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('no => yes', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(200)), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('yes => no', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(200))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('isExpandedRTL', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('no', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
              transform: 'rotate(90deg)'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('yes', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
              transform: 'rotate(0deg)'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('no => yes', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(200)), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('yes => no', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(200))])],
            styles: [".amml-item{line-height:48px;position:relative;cursor:pointer}.anml-link{width:100%;display:flex;justify-content:flex-start;text-transform:capitalize;text-decoration:none;color:inherit}.anml-data{width:100%;height:48px;display:flex;justify-content:flex-start}.disabled-amml-item{opacity:.5;text-decoration:none;pointer-events:none}.icon-container{display:flex;flex-direction:column;justify-content:center}.amml-icon-fa{font-size:20px}.label{line-height:48px;font-weight:400}.amml-svg-icon{width:22px;height:22px;margin-top:-12px}.amml-icon-arrow-container{direction:ltr;display:flex;align-items:center}div[dir=ltr] .amml-icon{margin-right:16px}div[dir=ltr].amml-submenu,div[dir=rtl] .amml-icon{margin-left:16px}div[dir=rtl].amml-submenu{margin-right:16px}"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: MultilevelMenuService
          }];
        }, {
          level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          submenuLevel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nodeConfiguration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nodeExpandCollapseStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          selectedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          selectedNode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MaterialsModule, {
          imports: function imports() {
            return [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]];
          },
          exports: function exports() {
            return [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MaterialsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]],
            declarations: [],
            exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgMaterialMultilevelMenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'ng-material-multilevel-menu',
            template: "<div [ngClass]=\"getClassName()\" [ngStyle]=\"getGlobalStyle()\" *ngIf='items.length !== 0' [dir]=\"isRtlLayout() ? 'rtl' : 'ltr'\">\r\n  <mat-list>\r\n    <ng-list-item\r\n      *ngFor=\"let node of items | keyvalue: multilevelMenuService.kvDummyComparerFn\"\r\n      [nodeConfiguration]='nodeConfig'\r\n      [node]='node.value'\r\n      [level]=\"1\"\r\n      [submenuLevel]=\"node.key\"\r\n      [selectedNode]='currentNode'\r\n      [nodeExpandCollapseStatus]='nodeExpandCollapseStatus'\r\n      (selectedItem)=\"selectedListItem($event)\r\n    \">\r\n    </ng-list-item>\r\n  </mat-list>\r\n</div>\r\n",
            styles: [".amml-item{line-height:48px;display:flex;justify-content:space-between;position:relative}.anml-data{width:100%;text-transform:capitalize;display:flex;justify-content:flex-start}.amml-icon-fa{font-size:20px}.amml-icon{line-height:48px}.active{color:#1976d2}div[dir=ltr] .amml-icon{margin-right:15px}div[dir=ltr] .amml-submenu{margin-left:16px}div[dir=rtl] .amml-icon{margin-left:15px}div[dir=rtl] .amml-submenu{margin-right:16px}"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: MultilevelMenuService
          }];
        }, {
          configuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          expandCollapseStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          selectedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          selectedLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NgMaterialMultilevelMenuModule, {
          declarations: function declarations() {
            return [NgMaterialMultilevelMenuComponent, ListItemComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], MaterialsModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]];
          },
          exports: function exports() {
            return [NgMaterialMultilevelMenuComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgMaterialMultilevelMenuModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], MaterialsModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: [NgMaterialMultilevelMenuComponent, ListItemComponent],
            exports: [NgMaterialMultilevelMenuComponent]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of ng-material-multilevel-menu
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng-material-multilevel-menu.js.map

      /***/

    },

    /***/
    "MutI":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js ***!
      \**********************************************************************/

    /*! exports provided: MAT_LIST, MAT_NAV_LIST, MAT_SELECTION_LIST_VALUE_ACCESSOR, MatList, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListItem, MatListModule, MatListOption, MatListSubheaderCssMatStyler, MatNavList, MatSelectionList, MatSelectionListChange */

    /***/
    function MutI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_LIST", function () {
        return MAT_LIST;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_NAV_LIST", function () {
        return MAT_NAV_LIST;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SELECTION_LIST_VALUE_ACCESSOR", function () {
        return MAT_SELECTION_LIST_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatList", function () {
        return MatList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatListAvatarCssMatStyler", function () {
        return MatListAvatarCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatListIconCssMatStyler", function () {
        return MatListIconCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatListItem", function () {
        return MatListItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatListModule", function () {
        return MatListModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatListOption", function () {
        return MatListOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatListSubheaderCssMatStyler", function () {
        return MatListSubheaderCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatNavList", function () {
        return MatNavList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSelectionList", function () {
        return MatSelectionList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSelectionListChange", function () {
        return MatSelectionListChange;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatList.

      /** @docs-private */


      var _c0 = ["*"];
      var _c1 = ".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n";
      var _c2 = [[["", "mat-list-avatar", ""], ["", "mat-list-icon", ""], ["", "matListAvatar", ""], ["", "matListIcon", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
      var _c3 = ["[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]", "[mat-line], [matLine]", "*"];
      var _c4 = ["text"];

      function MatListOption_mat_pseudo_checkbox_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-pseudo-checkbox", 5);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
        }
      }

      var _c5 = ["*", [["", "mat-list-avatar", ""], ["", "mat-list-icon", ""], ["", "matListAvatar", ""], ["", "matListIcon", ""]]];
      var _c6 = ["*", "[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]"];

      var MatListBase = function MatListBase() {
        _classCallCheck(this, MatListBase);
      };

      var _MatListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatListBase)); // Boilerplate for applying mixins to MatListItem.

      /** @docs-private */


      var MatListItemBase = function MatListItemBase() {
        _classCallCheck(this, MatListItemBase);
      };

      var _MatListItemMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatListItemBase);
      /**
       * Injection token that can be used to inject instances of `MatList`. It serves as
       * alternative token to the actual `MatList` class which could cause unnecessary
       * retention of the class and its component metadata.
       */


      var MAT_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatList');
      /**
       * Injection token that can be used to inject instances of `MatNavList`. It serves as
       * alternative token to the actual `MatNavList` class which could cause unnecessary
       * retention of the class and its component metadata.
       */

      var MAT_NAV_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatNavList');

      var MatNavList = /*#__PURE__*/function (_MatListMixinBase2) {
        _inherits(MatNavList, _MatListMixinBase2);

        var _super2 = _createSuper(MatNavList);

        function MatNavList() {
          var _this7;

          _classCallCheck(this, MatNavList);

          _this7 = _super2.apply(this, arguments);
          /** Emits when the state of the list changes. */

          _this7._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          return _this7;
        }

        _createClass(MatNavList, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._stateChanges.next();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
        }]);

        return MatNavList;
      }(_MatListMixinBase);

      MatNavList.ɵfac = function MatNavList_Factory(t) {
        return ɵMatNavList_BaseFactory(t || MatNavList);
      };

      MatNavList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatNavList,
        selectors: [["mat-nav-list"]],
        hostAttrs: ["role", "navigation", 1, "mat-nav-list", "mat-list-base"],
        inputs: {
          disableRipple: "disableRipple",
          disabled: "disabled"
        },
        exportAs: ["matNavList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: MAT_NAV_LIST,
          useExisting: MatNavList
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatNavList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
          }
        },
        styles: [_c1],
        encapsulation: 2,
        changeDetection: 0
      });

      var ɵMatNavList_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatNavList);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatNavList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-nav-list',
            exportAs: 'matNavList',
            host: {
              'role': 'navigation',
              'class': 'mat-nav-list mat-list-base'
            },
            template: "<ng-content></ng-content>\n\n",
            inputs: ['disableRipple', 'disabled'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [{
              provide: MAT_NAV_LIST,
              useExisting: MatNavList
            }],
            styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n"]
          }]
        }], null, null);
      })();

      var MatList = /*#__PURE__*/function (_MatListMixinBase3) {
        _inherits(MatList, _MatListMixinBase3);

        var _super3 = _createSuper(MatList);

        function MatList(_elementRef) {
          var _this8;

          _classCallCheck(this, MatList);

          _this8 = _super3.call(this);
          _this8._elementRef = _elementRef;
          /** Emits when the state of the list changes. */

          _this8._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();

          if (_this8._getListType() === 'action-list') {
            _elementRef.nativeElement.classList.add('mat-action-list');
          }

          return _this8;
        }

        _createClass(MatList, [{
          key: "_getListType",
          value: function _getListType() {
            var nodeName = this._elementRef.nativeElement.nodeName.toLowerCase();

            if (nodeName === 'mat-list') {
              return 'list';
            }

            if (nodeName === 'mat-action-list') {
              return 'action-list';
            }

            return null;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._stateChanges.next();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
        }]);

        return MatList;
      }(_MatListMixinBase);

      MatList.ɵfac = function MatList_Factory(t) {
        return new (t || MatList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      MatList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatList,
        selectors: [["mat-list"], ["mat-action-list"]],
        hostAttrs: [1, "mat-list", "mat-list-base"],
        inputs: {
          disableRipple: "disableRipple",
          disabled: "disabled"
        },
        exportAs: ["matList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: MAT_LIST,
          useExisting: MatList
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
          }
        },
        styles: [_c1],
        encapsulation: 2,
        changeDetection: 0
      });

      MatList.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-list, mat-action-list',
            exportAs: 'matList',
            template: "<ng-content></ng-content>\n\n",
            host: {
              'class': 'mat-list mat-list-base'
            },
            inputs: ['disableRipple', 'disabled'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [{
              provide: MAT_LIST,
              useExisting: MatList
            }],
            styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * Directive whose purpose is to add the mat- CSS styling to this selector.
       * @docs-private
       */


      var MatListAvatarCssMatStyler = function MatListAvatarCssMatStyler() {
        _classCallCheck(this, MatListAvatarCssMatStyler);
      };

      MatListAvatarCssMatStyler.ɵfac = function MatListAvatarCssMatStyler_Factory(t) {
        return new (t || MatListAvatarCssMatStyler)();
      };

      MatListAvatarCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatListAvatarCssMatStyler,
        selectors: [["", "mat-list-avatar", ""], ["", "matListAvatar", ""]],
        hostAttrs: [1, "mat-list-avatar"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListAvatarCssMatStyler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[mat-list-avatar], [matListAvatar]',
            host: {
              'class': 'mat-list-avatar'
            }
          }]
        }], null, null);
      })();
      /**
       * Directive whose purpose is to add the mat- CSS styling to this selector.
       * @docs-private
       */


      var MatListIconCssMatStyler = function MatListIconCssMatStyler() {
        _classCallCheck(this, MatListIconCssMatStyler);
      };

      MatListIconCssMatStyler.ɵfac = function MatListIconCssMatStyler_Factory(t) {
        return new (t || MatListIconCssMatStyler)();
      };

      MatListIconCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatListIconCssMatStyler,
        selectors: [["", "mat-list-icon", ""], ["", "matListIcon", ""]],
        hostAttrs: [1, "mat-list-icon"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListIconCssMatStyler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[mat-list-icon], [matListIcon]',
            host: {
              'class': 'mat-list-icon'
            }
          }]
        }], null, null);
      })();
      /**
       * Directive whose purpose is to add the mat- CSS styling to this selector.
       * @docs-private
       */


      var MatListSubheaderCssMatStyler = function MatListSubheaderCssMatStyler() {
        _classCallCheck(this, MatListSubheaderCssMatStyler);
      };

      MatListSubheaderCssMatStyler.ɵfac = function MatListSubheaderCssMatStyler_Factory(t) {
        return new (t || MatListSubheaderCssMatStyler)();
      };

      MatListSubheaderCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatListSubheaderCssMatStyler,
        selectors: [["", "mat-subheader", ""], ["", "matSubheader", ""]],
        hostAttrs: [1, "mat-subheader"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListSubheaderCssMatStyler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[mat-subheader], [matSubheader]',
            host: {
              'class': 'mat-subheader'
            }
          }]
        }], null, null);
      })();
      /** An item within a Material Design list. */


      var MatListItem = /*#__PURE__*/function (_MatListItemMixinBase2) {
        _inherits(MatListItem, _MatListItemMixinBase2);

        var _super4 = _createSuper(MatListItem);

        function MatListItem(_element, _changeDetectorRef, navList, list) {
          var _this9;

          _classCallCheck(this, MatListItem);

          _this9 = _super4.call(this);
          _this9._element = _element;
          _this9._isInteractiveList = false;
          _this9._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          _this9._disabled = false;
          _this9._isInteractiveList = !!(navList || list && list._getListType() === 'action-list');
          _this9._list = navList || list; // If no type attribute is specified for <button>, set it to "button".
          // If a type attribute is already specified, do nothing.

          var element = _this9._getHostElement();

          if (element.nodeName.toLowerCase() === 'button' && !element.hasAttribute('type')) {
            element.setAttribute('type', 'button');
          }

          if (_this9._list) {
            // React to changes in the state of the parent list since
            // some of the item's properties depend on it (e.g. `disableRipple`).
            _this9._list._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this9._destroyed)).subscribe(function () {
              _changeDetectorRef.markForCheck();
            });
          }

          return _this9;
        }
        /** Whether the option is disabled. */


        _createClass(MatListItem, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["setLines"])(this._lines, this._element);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Whether this list item should show a ripple effect when clicked. */

        }, {
          key: "_isRippleDisabled",
          value: function _isRippleDisabled() {
            return !this._isInteractiveList || this.disableRipple || !!(this._list && this._list.disableRipple);
          }
          /** Retrieves the DOM element of the component host. */

        }, {
          key: "_getHostElement",
          value: function _getHostElement() {
            return this._element.nativeElement;
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || !!(this._list && this._list.disabled);
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
        }]);

        return MatListItem;
      }(_MatListItemMixinBase);

      MatListItem.ɵfac = function MatListItem_Factory(t) {
        return new (t || MatListItem)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_NAV_LIST, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_LIST, 8));
      };

      MatListItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatListItem,
        selectors: [["mat-list-item"], ["a", "mat-list-item", ""], ["button", "mat-list-item", ""]],
        contentQueries: function MatListItem_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListAvatarCssMatStyler, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListIconCssMatStyler, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._avatar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._icon = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._lines = _t);
          }
        },
        hostAttrs: [1, "mat-list-item", "mat-focus-indicator"],
        hostVars: 6,
        hostBindings: function MatListItem_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-list-item-disabled", ctx.disabled)("mat-list-item-avatar", ctx._avatar || ctx._icon)("mat-list-item-with-avatar", ctx._avatar || ctx._icon);
          }
        },
        inputs: {
          disableRipple: "disableRipple",
          disabled: "disabled"
        },
        exportAs: ["matListItem"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c3,
        decls: 6,
        vars: 2,
        consts: [[1, "mat-list-item-content"], ["mat-ripple", "", 1, "mat-list-item-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-list-text"]],
        template: function MatListItem_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx._isRippleDisabled());
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"]],
        encapsulation: 2,
        changeDetection: 0
      });

      MatListItem.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: MatNavList,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_NAV_LIST]
          }]
        }, {
          type: MatList,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_LIST]
          }]
        }];
      };

      MatListItem.propDecorators = {
        _lines: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], {
            descendants: true
          }]
        }],
        _avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatListAvatarCssMatStyler]
        }],
        _icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatListIconCssMatStyler]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListItem, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-list-item, a[mat-list-item], button[mat-list-item]',
            exportAs: 'matListItem',
            host: {
              'class': 'mat-list-item mat-focus-indicator',
              '[class.mat-list-item-disabled]': 'disabled',
              // @breaking-change 8.0.0 Remove `mat-list-item-avatar` in favor of `mat-list-item-with-avatar`.
              '[class.mat-list-item-avatar]': '_avatar || _icon',
              '[class.mat-list-item-with-avatar]': '_avatar || _icon'
            },
            inputs: ['disableRipple'],
            template: "<div class=\"mat-list-item-content\">\n  <div class=\"mat-list-item-ripple\" mat-ripple\n       [matRippleTrigger]=\"_getHostElement()\"\n       [matRippleDisabled]=\"_isRippleDisabled()\">\n  </div>\n\n  <ng-content select=\"[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]\">\n  </ng-content>\n\n  <div class=\"mat-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n\n  <ng-content></ng-content>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: MatNavList,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MAT_NAV_LIST]
            }]
          }, {
            type: MatList,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MAT_LIST]
            }]
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          _lines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], {
              descendants: true
            }]
          }],
          _avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MatListAvatarCssMatStyler]
          }],
          _icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MatListIconCssMatStyler]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatSelectionListBase = function MatSelectionListBase() {
        _classCallCheck(this, MatSelectionListBase);
      };

      var _MatSelectionListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatSelectionListBase);

      var MatListOptionBase = function MatListOptionBase() {
        _classCallCheck(this, MatListOptionBase);
      };

      var _MatListOptionMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatListOptionBase);
      /** @docs-private */


      var MAT_SELECTION_LIST_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MatSelectionList;
        }),
        multi: true
      };
      /** Change event that is being fired whenever the selected state of an option changes. */

      var MatSelectionListChange = function MatSelectionListChange(
      /** Reference to the selection list that emitted the event. */
      source,
      /**
       * Reference to the option that has been changed.
       * @deprecated Use `options` instead, because some events may change more than one option.
       * @breaking-change 12.0.0
       */
      option,
      /** Reference to the options that have been changed. */
      options) {
        _classCallCheck(this, MatSelectionListChange);

        this.source = source;
        this.option = option;
        this.options = options;
      };
      /**
       * Component for list-options of selection-list. Each list-option can automatically
       * generate a checkbox and can put current item into the selectionModel of selection-list
       * if the current item is selected.
       */


      var MatListOption = /*#__PURE__*/function (_MatListOptionMixinBa) {
        _inherits(MatListOption, _MatListOptionMixinBa);

        var _super5 = _createSuper(MatListOption);

        function MatListOption(_element, _changeDetector,
        /** @docs-private */
        selectionList) {
          var _this10;

          _classCallCheck(this, MatListOption);

          _this10 = _super5.call(this);
          _this10._element = _element;
          _this10._changeDetector = _changeDetector;
          _this10.selectionList = selectionList;
          _this10._selected = false;
          _this10._disabled = false;
          _this10._hasFocus = false;
          /** Whether the label should appear before or after the checkbox. Defaults to 'after' */

          _this10.checkboxPosition = 'after';
          /**
           * This is set to true after the first OnChanges cycle so we don't clear the value of `selected`
           * in the first cycle.
           */

          _this10._inputsInitialized = false;
          return _this10;
        }
        /** Theme color of the list option. This sets the color of the checkbox. */


        _createClass(MatListOption, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            var list = this.selectionList;

            if (list._value && list._value.some(function (value) {
              return list.compareWith(value, _this11._value);
            })) {
              this._setSelected(true);
            }

            var wasSelected = this._selected; // List options that are selected at initialization can't be reported properly to the form
            // control. This is because it takes some time until the selection-list knows about all
            // available options. Also it can happen that the ControlValueAccessor has an initial value
            // that should be used instead. Deferring the value change report to the next tick ensures
            // that the form control value is not being overwritten.

            Promise.resolve().then(function () {
              if (_this11._selected || wasSelected) {
                _this11.selected = true;

                _this11._changeDetector.markForCheck();
              }
            });
            this._inputsInitialized = true;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["setLines"])(this._lines, this._element);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this12 = this;

            if (this.selected) {
              // We have to delay this until the next tick in order
              // to avoid changed after checked errors.
              Promise.resolve().then(function () {
                _this12.selected = false;
              });
            }

            var hadFocus = this._hasFocus;

            var newActiveItem = this.selectionList._removeOptionFromList(this); // Only move focus if this option was focused at the time it was destroyed.


            if (hadFocus && newActiveItem) {
              newActiveItem.focus();
            }
          }
          /** Toggles the selection state of the option. */

        }, {
          key: "toggle",
          value: function toggle() {
            this.selected = !this.selected;
          }
          /** Allows for programmatic focusing of the option. */

        }, {
          key: "focus",
          value: function focus() {
            this._element.nativeElement.focus();
          }
          /**
           * Returns the list item's text label. Implemented as a part of the FocusKeyManager.
           * @docs-private
           */

        }, {
          key: "getLabel",
          value: function getLabel() {
            return this._text ? this._text.nativeElement.textContent || '' : '';
          }
          /** Whether this list item should show a ripple effect when clicked. */

        }, {
          key: "_isRippleDisabled",
          value: function _isRippleDisabled() {
            return this.disabled || this.disableRipple || this.selectionList.disableRipple;
          }
        }, {
          key: "_handleClick",
          value: function _handleClick() {
            if (!this.disabled && (this.selectionList.multiple || !this.selected)) {
              this.toggle(); // Emit a change event if the selected state of the option changed through user interaction.

              this.selectionList._emitChangeEvent([this]);
            }
          }
        }, {
          key: "_handleFocus",
          value: function _handleFocus() {
            this.selectionList._setFocusedOption(this);

            this._hasFocus = true;
          }
        }, {
          key: "_handleBlur",
          value: function _handleBlur() {
            this.selectionList._onTouched();

            this._hasFocus = false;
          }
          /** Retrieves the DOM element of the component host. */

        }, {
          key: "_getHostElement",
          value: function _getHostElement() {
            return this._element.nativeElement;
          }
          /** Sets the selected state of the option. Returns whether the value has changed. */

        }, {
          key: "_setSelected",
          value: function _setSelected(selected) {
            if (selected === this._selected) {
              return false;
            }

            this._selected = selected;

            if (selected) {
              this.selectionList.selectedOptions.select(this);
            } else {
              this.selectionList.selectedOptions.deselect(this);
            }

            this._changeDetector.markForCheck();

            return true;
          }
          /**
           * Notifies Angular that the option needs to be checked in the next change detection run. Mainly
           * used to trigger an update of the list option if the disabled state of the selection list
           * changed.
           */

        }, {
          key: "_markForCheck",
          value: function _markForCheck() {
            this._changeDetector.markForCheck();
          }
        }, {
          key: "color",
          get: function get() {
            return this._color || this.selectionList.color;
          },
          set: function set(newValue) {
            this._color = newValue;
          }
          /** Value of the option */

        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(newValue) {
            if (this.selected && !this.selectionList.compareWith(newValue, this.value) && this._inputsInitialized) {
              this.selected = false;
            }

            this._value = newValue;
          }
          /** Whether the option is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || this.selectionList && this.selectionList.disabled;
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            if (newValue !== this._disabled) {
              this._disabled = newValue;

              this._changeDetector.markForCheck();
            }
          }
          /** Whether the option is selected. */

        }, {
          key: "selected",
          get: function get() {
            return this.selectionList.selectedOptions.isSelected(this);
          },
          set: function set(value) {
            var isSelected = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            if (isSelected !== this._selected) {
              this._setSelected(isSelected);

              this.selectionList._reportValueChange();
            }
          }
        }]);

        return MatListOption;
      }(_MatListOptionMixinBase);

      MatListOption.ɵfac = function MatListOption_Factory(t) {
        return new (t || MatListOption)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MatSelectionList;
        })));
      };

      MatListOption.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatListOption,
        selectors: [["mat-list-option"]],
        contentQueries: function MatListOption_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListAvatarCssMatStyler, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListIconCssMatStyler, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._avatar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._icon = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._lines = _t);
          }
        },
        viewQuery: function MatListOption_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._text = _t.first);
          }
        },
        hostAttrs: ["role", "option", 1, "mat-list-item", "mat-list-option", "mat-focus-indicator"],
        hostVars: 15,
        hostBindings: function MatListOption_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatListOption_focus_HostBindingHandler() {
              return ctx._handleFocus();
            })("blur", function MatListOption_blur_HostBindingHandler() {
              return ctx._handleBlur();
            })("click", function MatListOption_click_HostBindingHandler() {
              return ctx._handleClick();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", ctx.selected)("aria-disabled", ctx.disabled)("tabindex", -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-list-item-disabled", ctx.disabled)("mat-list-item-with-avatar", ctx._avatar || ctx._icon)("mat-primary", ctx.color === "primary")("mat-accent", ctx.color !== "primary" && ctx.color !== "warn")("mat-warn", ctx.color === "warn")("mat-list-single-selected-option", ctx.selected && !ctx.selectionList.multiple);
          }
        },
        inputs: {
          disableRipple: "disableRipple",
          checkboxPosition: "checkboxPosition",
          color: "color",
          value: "value",
          selected: "selected",
          disabled: "disabled"
        },
        exportAs: ["matListOption"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c6,
        decls: 7,
        vars: 5,
        consts: [[1, "mat-list-item-content"], ["mat-ripple", "", 1, "mat-list-item-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [3, "state", "disabled", 4, "ngIf"], [1, "mat-list-text"], ["text", ""], [3, "state", "disabled"]],
        template: function MatListOption_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatListOption_mat_pseudo_checkbox_2_Template, 1, 2, "mat-pseudo-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](6, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-list-item-content-reverse", ctx.checkboxPosition == "after");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx._isRippleDisabled());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectionList.multiple);
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckbox"]],
        encapsulation: 2,
        changeDetection: 0
      });

      MatListOption.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: MatSelectionList,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return MatSelectionList;
            })]
          }]
        }];
      };

      MatListOption.propDecorators = {
        _avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatListAvatarCssMatStyler]
        }],
        _icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatListIconCssMatStyler]
        }],
        _lines: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], {
            descendants: true
          }]
        }],
        _text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['text']
        }],
        checkboxPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListOption, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-list-option',
            exportAs: 'matListOption',
            inputs: ['disableRipple'],
            host: {
              'role': 'option',
              'class': 'mat-list-item mat-list-option mat-focus-indicator',
              '(focus)': '_handleFocus()',
              '(blur)': '_handleBlur()',
              '(click)': '_handleClick()',
              '[class.mat-list-item-disabled]': 'disabled',
              '[class.mat-list-item-with-avatar]': '_avatar || _icon',
              // Manually set the "primary" or "warn" class if the color has been explicitly
              // set to "primary" or "warn". The pseudo checkbox picks up these classes for
              // its theme.
              '[class.mat-primary]': 'color === "primary"',
              // Even though accent is the default, we need to set this class anyway, because the  list might
              // be placed inside a parent that has one of the other colors with a higher specificity.
              '[class.mat-accent]': 'color !== "primary" && color !== "warn"',
              '[class.mat-warn]': 'color === "warn"',
              '[class.mat-list-single-selected-option]': 'selected && !selectionList.multiple',
              '[attr.aria-selected]': 'selected',
              '[attr.aria-disabled]': 'disabled',
              '[attr.tabindex]': '-1'
            },
            template: "<div class=\"mat-list-item-content\"\n  [class.mat-list-item-content-reverse]=\"checkboxPosition == 'after'\">\n\n  <div mat-ripple\n    class=\"mat-list-item-ripple\"\n    [matRippleTrigger]=\"_getHostElement()\"\n    [matRippleDisabled]=\"_isRippleDisabled()\"></div>\n\n  <mat-pseudo-checkbox\n    *ngIf=\"selectionList.multiple\"\n    [state]=\"selected ? 'checked' : 'unchecked'\"\n    [disabled]=\"disabled\"></mat-pseudo-checkbox>\n\n  <div class=\"mat-list-text\" #text><ng-content></ng-content></div>\n\n  <ng-content select=\"[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]\">\n  </ng-content>\n\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: MatSelectionList,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return MatSelectionList;
              })]
            }]
          }];
        }, {
          checkboxPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          _avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MatListAvatarCssMatStyler]
          }],
          _icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MatListIconCssMatStyler]
          }],
          _lines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], {
              descendants: true
            }]
          }],
          _text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['text']
          }]
        });
      })();
      /**
       * Material Design list component where each item is a selectable option. Behaves as a listbox.
       */


      var MatSelectionList = /*#__PURE__*/function (_MatSelectionListMixi) {
        _inherits(MatSelectionList, _MatSelectionListMixi);

        var _super6 = _createSuper(MatSelectionList);

        function MatSelectionList(_element, // @breaking-change 11.0.0 Remove `tabIndex` parameter.
        tabIndex, _changeDetector, // @breaking-change 11.0.0 `_focusMonitor` parameter to become required.
        _focusMonitor) {
          var _this13;

          _classCallCheck(this, MatSelectionList);

          _this13 = _super6.call(this);
          _this13._element = _element;
          _this13._changeDetector = _changeDetector;
          _this13._focusMonitor = _focusMonitor;
          _this13._multiple = true;
          _this13._contentInitialized = false;
          /** Emits a change event whenever the selected state of an option changes. */

          _this13.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Tabindex of the selection list.
           * @breaking-change 11.0.0 Remove `tabIndex` input.
           */

          _this13.tabIndex = 0;
          /** Theme color of the selection list. This sets the checkbox color for all list options. */

          _this13.color = 'accent';
          /**
           * Function used for comparing an option against the selected value when determining which
           * options should appear as selected. The first argument is the value of an options. The second
           * one is a value from the selected value. A boolean must be returned.
           */

          _this13.compareWith = function (a1, a2) {
            return a1 === a2;
          };

          _this13._disabled = false;
          /** The currently selected options. */

          _this13.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](_this13._multiple);
          /** The tabindex of the selection list. */

          _this13._tabIndex = -1;
          /** View to model callback that should be called whenever the selected options change. */

          _this13._onChange = function (_) {};
          /** Emits when the list has been destroyed. */


          _this13._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          /** View to model callback that should be called if the list or its options lost focus. */

          _this13._onTouched = function () {};

          return _this13;
        }
        /** Whether the selection list is disabled. */


        _createClass(MatSelectionList, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this14 = this;

            var _a;

            this._contentInitialized = true;
            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusKeyManager"](this.options).withWrap().withTypeAhead().withHomeAndEnd() // Allow disabled items to be focusable. For accessibility reasons, there must be a way for
            // screenreader users, that allows reading the different options of the list.
            .skipPredicate(function () {
              return false;
            }).withAllowedModifierKeys(['shiftKey']);

            if (this._value) {
              this._setOptionsFromValues(this._value);
            } // If the user attempts to tab out of the selection list, allow focus to escape.


            this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this14._allowFocusEscape();
            }); // When the number of options change, update the tabindex of the selection list.


            this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this14._updateTabIndex();
            }); // Sync external changes to the model back to the options.

            this.selectedOptions.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(function (event) {
              if (event.added) {
                var _iterator = _createForOfIteratorHelper(event.added),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var item = _step.value;
                    item.selected = true;
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }

              if (event.removed) {
                var _iterator2 = _createForOfIteratorHelper(event.removed),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var _item2 = _step2.value;
                    _item2.selected = false;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            }); // @breaking-change 11.0.0 Remove null assertion once _focusMonitor is required.

            (_a = this._focusMonitor) === null || _a === void 0 ? void 0 : _a.monitor(this._element).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(function (origin) {
              if (origin === 'keyboard' || origin === 'program') {
                var activeIndex = _this14._keyManager.activeItemIndex;

                if (!activeIndex || activeIndex === -1) {
                  // If there is no active index, set focus to the first option.
                  _this14._keyManager.setFirstItemActive();
                } else {
                  // Otherwise, set focus to the active option.
                  _this14._keyManager.setActiveItem(activeIndex);
                }
              }
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var disableRippleChanges = changes['disableRipple'];
            var colorChanges = changes['color'];

            if (disableRippleChanges && !disableRippleChanges.firstChange || colorChanges && !colorChanges.firstChange) {
              this._markOptionsForCheck();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a; // @breaking-change 11.0.0 Remove null assertion once _focusMonitor is required.


            (_a = this._focusMonitor) === null || _a === void 0 ? void 0 : _a.stopMonitoring(this._element);

            this._destroyed.next();

            this._destroyed.complete();

            this._isDestroyed = true;
          }
          /** Focuses the selection list. */

        }, {
          key: "focus",
          value: function focus(options) {
            this._element.nativeElement.focus(options);
          }
          /** Selects all of the options. */

        }, {
          key: "selectAll",
          value: function selectAll() {
            this._setAllOptionsSelected(true);
          }
          /** Deselects all of the options. */

        }, {
          key: "deselectAll",
          value: function deselectAll() {
            this._setAllOptionsSelected(false);
          }
          /** Sets the focused option of the selection-list. */

        }, {
          key: "_setFocusedOption",
          value: function _setFocusedOption(option) {
            this._keyManager.updateActiveItem(option);
          }
          /**
           * Removes an option from the selection list and updates the active item.
           * @returns Currently-active item.
           */

        }, {
          key: "_removeOptionFromList",
          value: function _removeOptionFromList(option) {
            var optionIndex = this._getOptionIndex(option);

            if (optionIndex > -1 && this._keyManager.activeItemIndex === optionIndex) {
              // Check whether the option is the last item
              if (optionIndex > 0) {
                this._keyManager.updateActiveItem(optionIndex - 1);
              } else if (optionIndex === 0 && this.options.length > 1) {
                this._keyManager.updateActiveItem(Math.min(optionIndex + 1, this.options.length - 1));
              }
            }

            return this._keyManager.activeItem;
          }
          /** Passes relevant key presses to our key manager. */

        }, {
          key: "_keydown",
          value: function _keydown(event) {
            var keyCode = event.keyCode;
            var manager = this._keyManager;
            var previousFocusIndex = manager.activeItemIndex;
            var hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event);

            switch (keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["SPACE"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"]:
                if (!hasModifier && !manager.isTyping()) {
                  this._toggleFocusedOption(); // Always prevent space from scrolling the page since the list has focus


                  event.preventDefault();
                }

                break;

              default:
                // The "A" key gets special treatment, because it's used for the "select all" functionality.
                if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["A"] && this.multiple && Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event, 'ctrlKey') && !manager.isTyping()) {
                  var shouldSelect = this.options.some(function (option) {
                    return !option.disabled && !option.selected;
                  });

                  this._setAllOptionsSelected(shouldSelect, true, true);

                  event.preventDefault();
                } else {
                  manager.onKeydown(event);
                }

            }

            if (this.multiple && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["DOWN_ARROW"]) && event.shiftKey && manager.activeItemIndex !== previousFocusIndex) {
              this._toggleFocusedOption();
            }
          }
          /** Reports a value change to the ControlValueAccessor */

        }, {
          key: "_reportValueChange",
          value: function _reportValueChange() {
            // Stop reporting value changes after the list has been destroyed. This avoids
            // cases where the list might wrongly reset its value once it is removed, but
            // the form control is still live.
            if (this.options && !this._isDestroyed) {
              var value = this._getSelectedOptionValues();

              this._onChange(value);

              this._value = value;
            }
          }
          /** Emits a change event if the selected state of an option changed. */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent(options) {
            this.selectionChange.emit(new MatSelectionListChange(this, options[0], options));
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "writeValue",
          value: function writeValue(values) {
            this._value = values;

            if (this.options) {
              this._setOptionsFromValues(values || []);
            }
          }
          /** Implemented as a part of ControlValueAccessor. */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          }
          /** Sets the selected options based on the specified values. */

        }, {
          key: "_setOptionsFromValues",
          value: function _setOptionsFromValues(values) {
            var _this15 = this;

            this.options.forEach(function (option) {
              return option._setSelected(false);
            });
            values.forEach(function (value) {
              var correspondingOption = _this15.options.find(function (option) {
                // Skip options that are already in the model. This allows us to handle cases
                // where the same primitive value is selected multiple times.
                return option.selected ? false : _this15.compareWith(option.value, value);
              });

              if (correspondingOption) {
                correspondingOption._setSelected(true);
              }
            });
          }
          /** Returns the values of the selected options. */

        }, {
          key: "_getSelectedOptionValues",
          value: function _getSelectedOptionValues() {
            return this.options.filter(function (option) {
              return option.selected;
            }).map(function (option) {
              return option.value;
            });
          }
          /** Toggles the state of the currently focused option if enabled. */

        }, {
          key: "_toggleFocusedOption",
          value: function _toggleFocusedOption() {
            var focusedIndex = this._keyManager.activeItemIndex;

            if (focusedIndex != null && this._isValidIndex(focusedIndex)) {
              var focusedOption = this.options.toArray()[focusedIndex];

              if (focusedOption && !focusedOption.disabled && (this._multiple || !focusedOption.selected)) {
                focusedOption.toggle(); // Emit a change event because the focused option changed its state through user
                // interaction.

                this._emitChangeEvent([focusedOption]);
              }
            }
          }
          /**
           * Sets the selected state on all of the options
           * and emits an event if anything changed.
           */

        }, {
          key: "_setAllOptionsSelected",
          value: function _setAllOptionsSelected(isSelected, skipDisabled, isUserInput) {
            // Keep track of whether anything changed, because we only want to
            // emit the changed event when something actually changed.
            var changedOptions = [];
            this.options.forEach(function (option) {
              if ((!skipDisabled || !option.disabled) && option._setSelected(isSelected)) {
                changedOptions.push(option);
              }
            });

            if (changedOptions.length) {
              this._reportValueChange();

              if (isUserInput) {
                this._emitChangeEvent(changedOptions);
              }
            }
          }
          /**
           * Utility to ensure all indexes are valid.
           * @param index The index to be checked.
           * @returns True if the index is valid for our list of options.
           */

        }, {
          key: "_isValidIndex",
          value: function _isValidIndex(index) {
            return index >= 0 && index < this.options.length;
          }
          /** Returns the index of the specified list option. */

        }, {
          key: "_getOptionIndex",
          value: function _getOptionIndex(option) {
            return this.options.toArray().indexOf(option);
          }
          /** Marks all the options to be checked in the next change detection run. */

        }, {
          key: "_markOptionsForCheck",
          value: function _markOptionsForCheck() {
            if (this.options) {
              this.options.forEach(function (option) {
                return option._markForCheck();
              });
            }
          }
          /**
           * Removes the tabindex from the selection list and resets it back afterwards, allowing the user
           * to tab out of it. This prevents the list from capturing focus and redirecting it back within
           * the list, creating a focus trap if it user tries to tab away.
           */

        }, {
          key: "_allowFocusEscape",
          value: function _allowFocusEscape() {
            var _this16 = this;

            this._tabIndex = -1;
            setTimeout(function () {
              _this16._tabIndex = 0;

              _this16._changeDetector.markForCheck();
            });
          }
          /** Updates the tabindex based upon if the selection list is empty. */

        }, {
          key: "_updateTabIndex",
          value: function _updateTabIndex() {
            this._tabIndex = this.options.length === 0 ? -1 : 0;
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); // The `MatSelectionList` and `MatListOption` are using the `OnPush` change detection
            // strategy. Therefore the options will not check for any changes if the `MatSelectionList`
            // changed its state. Since we know that a change to `disabled` property of the list affects
            // the state of the options, we manually mark each option for check.

            this._markOptionsForCheck();
          }
          /** Whether selection is limited to one or multiple items (default multiple). */

        }, {
          key: "multiple",
          get: function get() {
            return this._multiple;
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            if (newValue !== this._multiple) {
              if (this._contentInitialized && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw new Error('Cannot change `multiple` mode of mat-selection-list after initialization.');
              }

              this._multiple = newValue;
              this.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](this._multiple, this.selectedOptions.selected);
            }
          }
        }]);

        return MatSelectionList;
      }(_MatSelectionListMixinBase);

      MatSelectionList.ɵfac = function MatSelectionList_Factory(t) {
        return new (t || MatSelectionList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]));
      };

      MatSelectionList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatSelectionList,
        selectors: [["mat-selection-list"]],
        contentQueries: function MatSelectionList_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListOption, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.options = _t);
          }
        },
        hostAttrs: ["role", "listbox", 1, "mat-selection-list", "mat-list-base"],
        hostVars: 3,
        hostBindings: function MatSelectionList_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MatSelectionList_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-multiselectable", ctx.multiple)("aria-disabled", ctx.disabled.toString())("tabindex", ctx._tabIndex);
          }
        },
        inputs: {
          disableRipple: "disableRipple",
          tabIndex: "tabIndex",
          color: "color",
          compareWith: "compareWith",
          disabled: "disabled",
          multiple: "multiple"
        },
        outputs: {
          selectionChange: "selectionChange"
        },
        exportAs: ["matSelectionList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SELECTION_LIST_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatSelectionList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
          }
        },
        styles: [_c1],
        encapsulation: 2,
        changeDetection: 0
      });

      MatSelectionList.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]
        }];
      };

      MatSelectionList.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [MatListOption, {
            descendants: true
          }]
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSelectionList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-selection-list',
            exportAs: 'matSelectionList',
            inputs: ['disableRipple'],
            host: {
              'role': 'listbox',
              'class': 'mat-selection-list mat-list-base',
              '(keydown)': '_keydown($event)',
              '[attr.aria-multiselectable]': 'multiple',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.tabindex]': '_tabIndex'
            },
            template: '<ng-content></ng-content>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            providers: [MAT_SELECTION_LIST_VALUE_ACCESSOR],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]
          }];
        }, {
          selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [MatListOption, {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatListModule = function MatListModule() {
        _classCallCheck(this, MatListModule);
      };

      MatListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatListModule
      });
      MatListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MatListModule_Factory(t) {
          return new (t || MatListModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatListModule, {
          declarations: function declarations() {
            return [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListSubheaderCssMatStyler, MatSelectionList, MatListOption];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]];
          },
          exports: function exports() {
            return [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], MatListIconCssMatStyler, MatListSubheaderCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], MatSelectionList, MatListOption, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
            exports: [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], MatListIconCssMatStyler, MatListSubheaderCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], MatSelectionList, MatListOption, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]],
            declarations: [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListSubheaderCssMatStyler, MatSelectionList, MatListOption]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=list.js.map

      /***/

    },

    /***/
    "N5Qc":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/sidebar/sidebar.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function N5Qc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
      /***/
    },

    /***/
    "Nj0y":
    /*!*************************************************************!*\
      !*** ./src/app/shared/component/footer/footer.component.ts ***!
      \*************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function Nj0y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "QHnc");
      /* harmony import */


      var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer.component.css */
      "Cqpj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ctorParameters = function () {
        return [];
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FooterComponent);
      /***/
    },

    /***/
    "OppO":
    /*!*******************************************************************************!*\
      !*** ./src/app/shared/component/sidebar/sidebarguru/sidebarguru.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: SidebarguruComponent */

    /***/
    function OppO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarguruComponent", function () {
        return SidebarguruComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sidebarguru_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sidebarguru.component.html */
      "tYO7");
      /* harmony import */


      var _sidebarguru_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidebarguru.component.css */
      "1eqT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SidebarguruComponent = /*#__PURE__*/function () {
        function SidebarguruComponent() {
          _classCallCheck(this, SidebarguruComponent);

          this.ddmhs = [{
            label: 'Mahasiswa',
            items: [{
              label: ' - Nilai Ujian',
              link: '/dashboard/guru/tambahnilai'
            }, {
              label: 'Lihat Nilai Ujian',
              link: '/dashboard/guru/tampilnilai'
            }]
          }];
          this.ddkelas = [{
            label: 'Kelas',
            items: [{
              label: 'Pendaftaran Mahasiswa',
              link: '/pendaftaranmhstampil'
            }, {
              label: 'Penilaian Dosen',
              link: '/nilaidosentampil'
            }, {
              label: 'Penilaian Guru',
              link: '/nilaigurutampil'
            }]
          }];
          this.config = {
            highlightOnSelect: true,
            interfaceWithRoute: true,
            collapseOnSelect: true
          };
        }

        _createClass(SidebarguruComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SidebarguruComponent;
      }();

      SidebarguruComponent.ctorParameters = function () {
        return [];
      };

      SidebarguruComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sidebarguru',
        template: _raw_loader_sidebarguru_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sidebarguru_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SidebarguruComponent);
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _component_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./component/header/header.component */
      "xdqI");
      /* harmony import */


      var _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./component/sidebar/sidebar.component */
      "lIYJ");
      /* harmony import */


      var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./component/footer/footer.component */
      "Nj0y");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_material_multilevel_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-material-multilevel-menu */
      "CsTR");
      /* harmony import */


      var _component_sidebar_sidebarguru_sidebarguru_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./component/sidebar/sidebarguru/sidebarguru.component */
      "OppO");
      /* harmony import */


      var _component_sidebar_sidebardosen_sidebardosen_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./component/sidebar/sidebardosen/sidebardosen.component */
      "1VV9");
      /* harmony import */


      var _component_sidebar_sidebaradmin_sidebaradmin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./component/sidebar/sidebaradmin/sidebaradmin.component */
      "+LSZ");
      /* harmony import */


      var _component_sidebar_sidebarkaprodi_sidebarkaprodi_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./component/sidebar/sidebarkaprodi/sidebarkaprodi.component */
      "PXxi");
      /* harmony import */


      var _component_sidebar_sidebarstaff_sidebarstaff_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./component/sidebar/sidebarstaff/sidebarstaff.component */
      "2uUN");
      /* harmony import */


      var _component_sidebar_sidebarmhs_sidebarmhs_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./component/sidebar/sidebarmhs/sidebarmhs.component */
      "XFV7");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _component_sidebar_sidebarguru_sidebarguru_component__WEBPACK_IMPORTED_MODULE_15__["SidebarguruComponent"], _component_sidebar_sidebardosen_sidebardosen_component__WEBPACK_IMPORTED_MODULE_16__["SidebardosenComponent"], _component_sidebar_sidebaradmin_sidebaradmin_component__WEBPACK_IMPORTED_MODULE_17__["SidebaradminComponent"], _component_sidebar_sidebarkaprodi_sidebarkaprodi_component__WEBPACK_IMPORTED_MODULE_18__["SidebarkaprodiComponent"], _component_sidebar_sidebarstaff_sidebarstaff_component__WEBPACK_IMPORTED_MODULE_19__["SidebarstaffComponent"], _component_sidebar_sidebarmhs_sidebarmhs_component__WEBPACK_IMPORTED_MODULE_20__["SidebarmhsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ng_material_multilevel_menu__WEBPACK_IMPORTED_MODULE_14__["NgMaterialMultilevelMenuModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]],
        exports: [_component_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _component_sidebar_sidebardosen_sidebardosen_component__WEBPACK_IMPORTED_MODULE_16__["SidebardosenComponent"], _component_sidebar_sidebarkaprodi_sidebarkaprodi_component__WEBPACK_IMPORTED_MODULE_18__["SidebarkaprodiComponent"], _component_sidebar_sidebardosen_sidebardosen_component__WEBPACK_IMPORTED_MODULE_16__["SidebardosenComponent"], _component_sidebar_sidebarguru_sidebarguru_component__WEBPACK_IMPORTED_MODULE_15__["SidebarguruComponent"], _component_sidebar_sidebaradmin_sidebaradmin_component__WEBPACK_IMPORTED_MODULE_17__["SidebaradminComponent"]]
      })], SharedModule);
      /***/
    },

    /***/
    "PXxi":
    /*!*************************************************************************************!*\
      !*** ./src/app/shared/component/sidebar/sidebarkaprodi/sidebarkaprodi.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: SidebarkaprodiComponent */

    /***/
    function PXxi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarkaprodiComponent", function () {
        return SidebarkaprodiComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sidebarkaprodi_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sidebarkaprodi.component.html */
      "536J");
      /* harmony import */


      var _sidebarkaprodi_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidebarkaprodi.component.css */
      "Xqdy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SidebarkaprodiComponent = /*#__PURE__*/function () {
        function SidebarkaprodiComponent(route) {
          _classCallCheck(this, SidebarkaprodiComponent);

          this.route = route;
          this.ddmhs = [{
            label: 'Dosen',
            items: [{
              label: 'Penempatan Dosen',
              link: '/dashboard/kaprodi/pilihtempatdosen'
            }]
          }];
          this.ddsklh = [{
            label: 'Mahasiswa',
            items: [{
              label: 'Penempatan Mahasiswa',
              link: '/dashboard/kaprodi/pilihtempatmhs'
            }]
          }];
          this.ddpengguna = [{
            label: 'Sekolah',
            items: [{
              label: 'Tambah Sekolah',
              link: '/dashboard/kaprodi/tambahsekolah'
            }]
          }];
          this.config = {
            highlightOnSelect: true,
            interfaceWithRoute: true,
            collapseOnSelect: true
          };
        }

        _createClass(SidebarkaprodiComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.nama_kaprodi = this.route.snapshot.queryParams['nama'];
            this.email_kaprodi = this.route.snapshot.queryParams['email'];
          }
        }]);

        return SidebarkaprodiComponent;
      }();

      SidebarkaprodiComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      SidebarkaprodiComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sidebarkaprodi',
        template: _raw_loader_sidebarkaprodi_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sidebarkaprodi_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SidebarkaprodiComponent);
      /***/
    },

    /***/
    "QHnc":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/footer/footer.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QHnc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-divider></mat-divider>\r\n<footer>\r\n  &copy; All Right Reserved 2020\r\n</footer>";
      /***/
    },

    /***/
    "STbY":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js ***!
      \**********************************************************************/

    /*! exports provided: MAT_MENU_CONTENT, MAT_MENU_DEFAULT_OPTIONS, MAT_MENU_PANEL, MAT_MENU_SCROLL_STRATEGY, MatMenu, MatMenuContent, MatMenuItem, MatMenuModule, MatMenuTrigger, _MatMenuBase, _MatMenuDirectivesModule, fadeInItems, matMenuAnimations, transformMenu, ɵangular_material_src_material_menu_menu_a, ɵangular_material_src_material_menu_menu_b, ɵangular_material_src_material_menu_menu_c */

    /***/
    function STbY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_MENU_CONTENT", function () {
        return MAT_MENU_CONTENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_MENU_DEFAULT_OPTIONS", function () {
        return MAT_MENU_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_MENU_PANEL", function () {
        return MAT_MENU_PANEL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_MENU_SCROLL_STRATEGY", function () {
        return MAT_MENU_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenu", function () {
        return MatMenu;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenuContent", function () {
        return MatMenuContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenuItem", function () {
        return MatMenuItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenuModule", function () {
        return MatMenuModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenuTrigger", function () {
        return MatMenuTrigger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatMenuBase", function () {
        return _MatMenuBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatMenuDirectivesModule", function () {
        return _MatMenuDirectivesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fadeInItems", function () {
        return fadeInItems;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matMenuAnimations", function () {
        return matMenuAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "transformMenu", function () {
        return transformMenu;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_a", function () {
        return MAT_MENU_DEFAULT_OPTIONS_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_b", function () {
        return MAT_MENU_SCROLL_STRATEGY_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_c", function () {
        return MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by the mat-menu component.
       * Animation duration and timing values are based on:
       * https://material.io/guidelines/components/menus.html#menus-usage
       * @docs-private
       */


      var _c0 = ["mat-menu-item", ""];
      var _c1 = ["*"];

      function MatMenu_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function MatMenu_ng_template_0_Template_div_keydown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r1._handleKeydown($event);
          })("click", function MatMenu_ng_template_0_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3.closed.emit("click");
          })("@transformMenu.start", function MatMenu_ng_template_0_Template_div_animation_transformMenu_start_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r4._onAnimationStart($event);
          })("@transformMenu.done", function MatMenu_ng_template_0_Template_div_animation_transformMenu_done_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5._onAnimationDone($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r0.panelId)("ngClass", ctx_r0._classList)("@transformMenu", ctx_r0._panelAnimationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0.ariaLabelledby || null)("aria-describedby", ctx_r0.ariaDescribedby || null);
        }
      }

      var matMenuAnimations = {
        /**
         * This animation controls the menu panel's entry and exit from the page.
         *
         * When the menu panel is added to the DOM, it scales in and fades in its border.
         *
         * When the menu panel is removed from the DOM, it simply fades out after a brief
         * delay to display the ripple.
         */
        transformMenu: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('transformMenu', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 0,
          transform: 'scale(0.8)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 1,
          transform: 'scale(1)'
        }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 0
        })))]),

        /**
         * This animation fades in the background color and content of the menu panel
         * after its containing element is scaled in.
         */
        fadeInItems: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fadeInItems', [// TODO(crisbeto): this is inside the `transformMenu`
        // now. Remove next time we do breaking changes.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
      };
      /**
       * @deprecated
       * @breaking-change 8.0.0
       * @docs-private
       */

      var fadeInItems = matMenuAnimations.fadeInItems;
      /**
       * @deprecated
       * @breaking-change 8.0.0
       * @docs-private
       */

      var transformMenu = matMenuAnimations.transformMenu;
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `MatMenuContent`. It serves
       * as alternative token to the actual `MatMenuContent` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var MAT_MENU_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MatMenuContent');
      /**
       * Menu content that will be rendered lazily once the menu is opened.
       */

      var MatMenuContent = /*#__PURE__*/function () {
        function MatMenuContent(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document, _changeDetectorRef) {
          _classCallCheck(this, MatMenuContent);

          this._template = _template;
          this._componentFactoryResolver = _componentFactoryResolver;
          this._appRef = _appRef;
          this._injector = _injector;
          this._viewContainerRef = _viewContainerRef;
          this._document = _document;
          this._changeDetectorRef = _changeDetectorRef;
          /** Emits when the menu content has been attached. */

          this._attached = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        }
        /**
         * Attaches the content with a particular context.
         * @docs-private
         */


        _createClass(MatMenuContent, [{
          key: "attach",
          value: function attach() {
            var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (!this._portal) {
              this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["TemplatePortal"](this._template, this._viewContainerRef);
            }

            this.detach();

            if (!this._outlet) {
              this._outlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["DomPortalOutlet"](this._document.createElement('div'), this._componentFactoryResolver, this._appRef, this._injector);
            }

            var element = this._template.elementRef.nativeElement; // Because we support opening the same menu from different triggers (which in turn have their
            // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
            // risk it staying attached to a pane that's no longer in the DOM.

            element.parentNode.insertBefore(this._outlet.outletElement, element); // When `MatMenuContent` is used in an `OnPush` component, the insertion of the menu
            // content via `createEmbeddedView` does not cause the content to be seen as "dirty"
            // by Angular. This causes the `@ContentChildren` for menu items within the menu to
            // not be updated by Angular. By explicitly marking for check here, we tell Angular that
            // it needs to check for new menu items and update the `@ContentChild` in `MatMenu`.
            // @breaking-change 9.0.0 Make change detector ref required

            if (this._changeDetectorRef) {
              this._changeDetectorRef.markForCheck();
            }

            this._portal.attach(this._outlet, context);

            this._attached.next();
          }
          /**
           * Detaches the content.
           * @docs-private
           */

        }, {
          key: "detach",
          value: function detach() {
            if (this._portal.isAttached) {
              this._portal.detach();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._outlet) {
              this._outlet.dispose();
            }
          }
        }]);

        return MatMenuContent;
      }();

      MatMenuContent.ɵfac = function MatMenuContent_Factory(t) {
        return new (t || MatMenuContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
      };

      MatMenuContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatMenuContent,
        selectors: [["ng-template", "matMenuContent", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: MAT_MENU_CONTENT,
          useExisting: MatMenuContent
        }])]
      });

      MatMenuContent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'ng-template[matMenuContent]',
            providers: [{
              provide: MAT_MENU_CONTENT,
              useExisting: MatMenuContent
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Throws an exception for the case when menu trigger doesn't have a valid mat-menu instance
       * @docs-private
       */


      function throwMatMenuMissingError() {
        throw Error("matMenuTriggerFor: must pass in an mat-menu instance.\n\n    Example:\n      <mat-menu #menu=\"matMenu\"></mat-menu>\n      <button [matMenuTriggerFor]=\"menu\"></button>");
      }
      /**
       * Throws an exception for the case when menu's x-position value isn't valid.
       * In other words, it doesn't match 'before' or 'after'.
       * @docs-private
       */


      function throwMatMenuInvalidPositionX() {
        throw Error("xPosition value must be either 'before' or after'.\n      Example: <mat-menu xPosition=\"before\" #menu=\"matMenu\"></mat-menu>");
      }
      /**
       * Throws an exception for the case when menu's y-position value isn't valid.
       * In other words, it doesn't match 'above' or 'below'.
       * @docs-private
       */


      function throwMatMenuInvalidPositionY() {
        throw Error("yPosition value must be either 'above' or below'.\n      Example: <mat-menu yPosition=\"above\" #menu=\"matMenu\"></mat-menu>");
      }
      /**
       * Throws an exception for the case when a menu is assigned
       * to a trigger that is placed inside the same menu.
       * @docs-private
       */


      function throwMatMenuRecursiveError() {
        throw Error("matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is " + "not a parent of the trigger or move the trigger outside of the menu.");
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token used to provide the parent menu to menu-specific components.
       * @docs-private
       */


      var MAT_MENU_PANEL = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_MENU_PANEL');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatMenuItem.

      /** @docs-private */

      var MatMenuItemBase = function MatMenuItemBase() {
        _classCallCheck(this, MatMenuItemBase);
      };

      var _MatMenuItemMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinDisabled"])(MatMenuItemBase));
      /**
       * Single item inside of a `mat-menu`. Provides the menu item styling and accessibility treatment.
       */


      var MatMenuItem = /*#__PURE__*/function (_MatMenuItemMixinBase2) {
        _inherits(MatMenuItem, _MatMenuItemMixinBase2);

        var _super7 = _createSuper(MatMenuItem);

        function MatMenuItem(_elementRef,
        /**
         * @deprecated `_document` parameter is no longer being used and will be removed.
         * @breaking-change 12.0.0
         */
        _document, _focusMonitor, _parentMenu) {
          var _this17;

          _classCallCheck(this, MatMenuItem);

          // @breaking-change 8.0.0 make `_focusMonitor` and `document` required params.
          _this17 = _super7.call(this);
          _this17._elementRef = _elementRef;
          _this17._focusMonitor = _focusMonitor;
          _this17._parentMenu = _parentMenu;
          /** ARIA role for the menu item. */

          _this17.role = 'menuitem';
          /** Stream that emits when the menu item is hovered. */

          _this17._hovered = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          /** Stream that emits when the menu item is focused. */

          _this17._focused = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          /** Whether the menu item is highlighted. */

          _this17._highlighted = false;
          /** Whether the menu item acts as a trigger for a sub-menu. */

          _this17._triggersSubmenu = false;

          if (_parentMenu && _parentMenu.addItem) {
            _parentMenu.addItem(_assertThisInitialized(_this17));
          }

          return _this17;
        }
        /** Focuses the menu item. */


        _createClass(MatMenuItem, [{
          key: "focus",
          value: function focus() {
            var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
            var options = arguments.length > 1 ? arguments[1] : undefined;

            if (this._focusMonitor) {
              this._focusMonitor.focusVia(this._getHostElement(), origin, options);
            } else {
              this._getHostElement().focus(options);
            }

            this._focused.next(this);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this._focusMonitor) {
              // Start monitoring the element so it gets the appropriate focused classes. We want
              // to show the focus style for menu items only when the focus was not caused by a
              // mouse or touch interaction.
              this._focusMonitor.monitor(this._elementRef, false);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._focusMonitor) {
              this._focusMonitor.stopMonitoring(this._elementRef);
            }

            if (this._parentMenu && this._parentMenu.removeItem) {
              this._parentMenu.removeItem(this);
            }

            this._hovered.complete();

            this._focused.complete();
          }
          /** Used to set the `tabindex`. */

        }, {
          key: "_getTabIndex",
          value: function _getTabIndex() {
            return this.disabled ? '-1' : '0';
          }
          /** Returns the host DOM element. */

        }, {
          key: "_getHostElement",
          value: function _getHostElement() {
            return this._elementRef.nativeElement;
          }
          /** Prevents the default element actions if it is disabled. */
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete

        }, {
          key: "_checkDisabled",
          value: function _checkDisabled(event) {
            if (this.disabled) {
              event.preventDefault();
              event.stopPropagation();
            }
          }
          /** Emits to the hover stream. */
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete

        }, {
          key: "_handleMouseEnter",
          value: function _handleMouseEnter() {
            this._hovered.next(this);
          }
          /** Gets the label to be used when determining whether the option should be focused. */

        }, {
          key: "getLabel",
          value: function getLabel() {
            var _a, _b;

            var clone = this._elementRef.nativeElement.cloneNode(true);

            var icons = clone.querySelectorAll('mat-icon, .material-icons'); // Strip away icons so they don't show up in the text.

            for (var i = 0; i < icons.length; i++) {
              var icon = icons[i];
              (_a = icon.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(icon);
            }

            return ((_b = clone.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || '';
          }
        }]);

        return MatMenuItem;
      }(_MatMenuItemMixinBase);

      MatMenuItem.ɵfac = function MatMenuItem_Factory(t) {
        return new (t || MatMenuItem)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_PANEL, 8));
      };

      MatMenuItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatMenuItem,
        selectors: [["", "mat-menu-item", ""]],
        hostAttrs: [1, "mat-focus-indicator"],
        hostVars: 10,
        hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatMenuItem_click_HostBindingHandler($event) {
              return ctx._checkDisabled($event);
            })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
              return ctx._handleMouseEnter();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled.toString())("disabled", ctx.disabled || null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-menu-item", true)("mat-menu-item-highlighted", ctx._highlighted)("mat-menu-item-submenu-trigger", ctx._triggersSubmenu);
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          role: "role"
        },
        exportAs: ["matMenuItem"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        attrs: _c0,
        ngContentSelectors: _c1,
        decls: 2,
        vars: 2,
        consts: [["matRipple", "", 1, "mat-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"]],
        template: function MatMenuItem_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRipple"]],
        encapsulation: 2,
        changeDetection: 0
      });

      MatMenuItem.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_PANEL]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      };

      MatMenuItem.propDecorators = {
        role: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _checkDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['click', ['$event']]
        }],
        _handleMouseEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['mouseenter']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuItem, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: '[mat-menu-item]',
            exportAs: 'matMenuItem',
            inputs: ['disabled', 'disableRipple'],
            host: {
              '[attr.role]': 'role',
              '[class.mat-menu-item]': 'true',
              '[class.mat-menu-item-highlighted]': '_highlighted',
              '[class.mat-menu-item-submenu-trigger]': '_triggersSubmenu',
              '[attr.tabindex]': '_getTabIndex()',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.disabled]': 'disabled || null',
              'class': 'mat-focus-indicator'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            template: "<ng-content></ng-content>\n<div class=\"mat-menu-ripple\" matRipple\n     [matRippleDisabled]=\"disableRipple || disabled\"\n     [matRippleTrigger]=\"_getHostElement()\">\n</div>\n"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_MENU_PANEL]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }];
        }, {
          role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],

          /** Prevents the default element actions if it is disabled. */
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete
          _checkDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['click', ['$event']]
          }],

          /** Emits to the hover stream. */
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete
          _handleMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['mouseenter']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token to be used to override the default options for `mat-menu`. */


      var MAT_MENU_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-menu-default-options', {
        providedIn: 'root',
        factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
      });
      /** @docs-private */

      function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
        return {
          overlapTrigger: false,
          xPosition: 'after',
          yPosition: 'below',
          backdropClass: 'cdk-overlay-transparent-backdrop'
        };
      }
      /**
       * Start elevation for the menu panel.
       * @docs-private
       */


      var MAT_MENU_BASE_ELEVATION = 4;
      var menuPanelUid = 0;
      /** Base class with all of the `MatMenu` functionality. */

      var _MatMenuBase = /*#__PURE__*/function () {
        function _MatMenuBase(_elementRef, _ngZone, _defaultOptions) {
          _classCallCheck(this, _MatMenuBase);

          this._elementRef = _elementRef;
          this._ngZone = _ngZone;
          this._defaultOptions = _defaultOptions;
          this._xPosition = this._defaultOptions.xPosition;
          this._yPosition = this._defaultOptions.yPosition;
          /** Only the direct descendant menu items. */

          this._directDescendantItems = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
          /** Subscription to tab events on the menu panel */

          this._tabSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          /** Config object to be passed into the menu's ngClass */

          this._classList = {};
          /** Current state of the panel animation. */

          this._panelAnimationState = 'void';
          /** Emits whenever an animation on the menu completes. */

          this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          /** Class or list of classes to be added to the overlay panel. */

          this.overlayPanelClass = this._defaultOptions.overlayPanelClass || '';
          /** Class to be added to the backdrop element. */

          this.backdropClass = this._defaultOptions.backdropClass;
          this._overlapTrigger = this._defaultOptions.overlapTrigger;
          this._hasBackdrop = this._defaultOptions.hasBackdrop;
          /** Event emitted when the menu is closed. */

          this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * Event emitted when the menu is closed.
           * @deprecated Switch to `closed` instead
           * @breaking-change 8.0.0
           */

          this.close = this.closed;
          this.panelId = "mat-menu-panel-".concat(menuPanelUid++);
        }
        /** Position of the menu in the X axis. */


        _createClass(_MatMenuBase, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setPositionClasses();
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this18 = this;

            this._updateDirectDescendants();

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusKeyManager"](this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
            this._tabSubscription = this._keyManager.tabOut.subscribe(function () {
              return _this18.closed.emit('tab');
            }); // If a user manually (programatically) focuses a menu item, we need to reflect that focus
            // change back to the key manager. Note that we don't need to unsubscribe here because _focused
            // is internal and we know that it gets completed on destroy.

            this._directDescendantItems.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._directDescendantItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (items) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(items.map(function (item) {
                return item._focused;
              })));
            })).subscribe(function (focusedItem) {
              return _this18._keyManager.updateActiveItem(focusedItem);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._directDescendantItems.destroy();

            this._tabSubscription.unsubscribe();

            this.closed.complete();
          }
          /** Stream that emits whenever the hovered menu item changes. */

        }, {
          key: "_hovered",
          value: function _hovered() {
            // Coerce the `changes` property because Angular types it as `Observable<any>`
            var itemChanges = this._directDescendantItems.changes;
            return itemChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._directDescendantItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (items) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(items.map(function (item) {
                return item._hovered;
              })));
            }));
          }
          /*
           * Registers a menu item with the menu.
           * @docs-private
           * @deprecated No longer being used. To be removed.
           * @breaking-change 9.0.0
           */

        }, {
          key: "addItem",
          value: function addItem(_item) {}
          /**
           * Removes an item from the menu.
           * @docs-private
           * @deprecated No longer being used. To be removed.
           * @breaking-change 9.0.0
           */

        }, {
          key: "removeItem",
          value: function removeItem(_item) {}
          /** Handle a keyboard event from the menu, delegating to the appropriate action. */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            var keyCode = event.keyCode;
            var manager = this._keyManager;

            switch (keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ESCAPE"]:
                if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["hasModifierKey"])(event)) {
                  event.preventDefault();
                  this.closed.emit('keydown');
                }

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["LEFT_ARROW"]:
                if (this.parentMenu && this.direction === 'ltr') {
                  this.closed.emit('keydown');
                }

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["RIGHT_ARROW"]:
                if (this.parentMenu && this.direction === 'rtl') {
                  this.closed.emit('keydown');
                }

                break;

              default:
                if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["DOWN_ARROW"]) {
                  manager.setFocusOrigin('keyboard');
                }

                manager.onKeydown(event);
            }
          }
          /**
           * Focus the first item in the menu.
           * @param origin Action from which the focus originated. Used to set the correct styling.
           */

        }, {
          key: "focusFirstItem",
          value: function focusFirstItem() {
            var _this19 = this;

            var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';

            // When the content is rendered lazily, it takes a bit before the items are inside the DOM.
            if (this.lazyContent) {
              this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function () {
                return _this19._focusFirstItem(origin);
              });
            } else {
              this._focusFirstItem(origin);
            }
          }
          /**
           * Actual implementation that focuses the first item. Needs to be separated
           * out so we don't repeat the same logic in the public `focusFirstItem` method.
           */

        }, {
          key: "_focusFirstItem",
          value: function _focusFirstItem(origin) {
            var manager = this._keyManager;
            manager.setFocusOrigin(origin).setFirstItemActive(); // If there's no active item at this point, it means that all the items are disabled.
            // Move focus to the menu panel so keyboard events like Escape still work. Also this will
            // give _some_ feedback to screen readers.

            if (!manager.activeItem && this._directDescendantItems.length) {
              var element = this._directDescendantItems.first._getHostElement().parentElement; // Because the `mat-menu` is at the DOM insertion point, not inside the overlay, we don't
              // have a nice way of getting a hold of the menu panel. We can't use a `ViewChild` either
              // because the panel is inside an `ng-template`. We work around it by starting from one of
              // the items and walking up the DOM.


              while (element) {
                if (element.getAttribute('role') === 'menu') {
                  element.focus();
                  break;
                } else {
                  element = element.parentElement;
                }
              }
            }
          }
          /**
           * Resets the active item in the menu. This is used when the menu is opened, allowing
           * the user to start from the first option when pressing the down arrow.
           */

        }, {
          key: "resetActiveItem",
          value: function resetActiveItem() {
            this._keyManager.setActiveItem(-1);
          }
          /**
           * Sets the menu panel elevation.
           * @param depth Number of parent menus that come before the menu.
           */

        }, {
          key: "setElevation",
          value: function setElevation(depth) {
            // The elevation starts at the base and increases by one for each level.
            // Capped at 24 because that's the maximum elevation defined in the Material design spec.
            var elevation = Math.min(MAT_MENU_BASE_ELEVATION + depth, 24);
            var newElevation = "mat-elevation-z".concat(elevation);
            var customElevation = Object.keys(this._classList).find(function (c) {
              return c.startsWith('mat-elevation-z');
            });

            if (!customElevation || customElevation === this._previousElevation) {
              if (this._previousElevation) {
                this._classList[this._previousElevation] = false;
              }

              this._classList[newElevation] = true;
              this._previousElevation = newElevation;
            }
          }
          /**
           * Adds classes to the menu panel based on its position. Can be used by
           * consumers to add specific styling based on the position.
           * @param posX Position of the menu along the x axis.
           * @param posY Position of the menu along the y axis.
           * @docs-private
           */

        }, {
          key: "setPositionClasses",
          value: function setPositionClasses() {
            var posX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.xPosition;
            var posY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.yPosition;
            var classes = this._classList;
            classes['mat-menu-before'] = posX === 'before';
            classes['mat-menu-after'] = posX === 'after';
            classes['mat-menu-above'] = posY === 'above';
            classes['mat-menu-below'] = posY === 'below';
          }
          /** Starts the enter animation. */

        }, {
          key: "_startAnimation",
          value: function _startAnimation() {
            // @breaking-change 8.0.0 Combine with _resetAnimation.
            this._panelAnimationState = 'enter';
          }
          /** Resets the panel animation to its initial state. */

        }, {
          key: "_resetAnimation",
          value: function _resetAnimation() {
            // @breaking-change 8.0.0 Combine with _startAnimation.
            this._panelAnimationState = 'void';
          }
          /** Callback that is invoked when the panel animation completes. */

        }, {
          key: "_onAnimationDone",
          value: function _onAnimationDone(event) {
            this._animationDone.next(event);

            this._isAnimating = false;
          }
        }, {
          key: "_onAnimationStart",
          value: function _onAnimationStart(event) {
            this._isAnimating = true; // Scroll the content element to the top as soon as the animation starts. This is necessary,
            // because we move focus to the first item while it's still being animated, which can throw
            // the browser off when it determines the scroll position. Alternatively we can move focus
            // when the animation is done, however moving focus asynchronously will interrupt screen
            // readers which are in the process of reading out the menu already. We take the `element`
            // from the `event` since we can't use a `ViewChild` to access the pane.

            if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {
              event.element.scrollTop = 0;
            }
          }
          /**
           * Sets up a stream that will keep track of any newly-added menu items and will update the list
           * of direct descendants. We collect the descendants this way, because `_allItems` can include
           * items that are part of child menus, and using a custom way of registering items is unreliable
           * when it comes to maintaining the item order.
           */

        }, {
          key: "_updateDirectDescendants",
          value: function _updateDirectDescendants() {
            var _this20 = this;

            this._allItems.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._allItems)).subscribe(function (items) {
              _this20._directDescendantItems.reset(items.filter(function (item) {
                return item._parentMenu === _this20;
              }));

              _this20._directDescendantItems.notifyOnChanges();
            });
          }
        }, {
          key: "xPosition",
          get: function get() {
            return this._xPosition;
          },
          set: function set(value) {
            if (value !== 'before' && value !== 'after' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwMatMenuInvalidPositionX();
            }

            this._xPosition = value;
            this.setPositionClasses();
          }
          /** Position of the menu in the Y axis. */

        }, {
          key: "yPosition",
          get: function get() {
            return this._yPosition;
          },
          set: function set(value) {
            if (value !== 'above' && value !== 'below' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwMatMenuInvalidPositionY();
            }

            this._yPosition = value;
            this.setPositionClasses();
          }
          /** Whether the menu should overlap its trigger. */

        }, {
          key: "overlapTrigger",
          get: function get() {
            return this._overlapTrigger;
          },
          set: function set(value) {
            this._overlapTrigger = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /** Whether the menu has a backdrop. */

        }, {
          key: "hasBackdrop",
          get: function get() {
            return this._hasBackdrop;
          },
          set: function set(value) {
            this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /**
           * This method takes classes set on the host mat-menu element and applies them on the
           * menu template that displays in the overlay container.  Otherwise, it's difficult
           * to style the containing menu from outside the component.
           * @param classes list of class names
           */

        }, {
          key: "panelClass",
          set: function set(classes) {
            var _this21 = this;

            var previousPanelClass = this._previousPanelClass;

            if (previousPanelClass && previousPanelClass.length) {
              previousPanelClass.split(' ').forEach(function (className) {
                _this21._classList[className] = false;
              });
            }

            this._previousPanelClass = classes;

            if (classes && classes.length) {
              classes.split(' ').forEach(function (className) {
                _this21._classList[className] = true;
              });
              this._elementRef.nativeElement.className = '';
            }
          }
          /**
           * This method takes classes set on the host mat-menu element and applies them on the
           * menu template that displays in the overlay container.  Otherwise, it's difficult
           * to style the containing menu from outside the component.
           * @deprecated Use `panelClass` instead.
           * @breaking-change 8.0.0
           */

        }, {
          key: "classList",
          get: function get() {
            return this.panelClass;
          },
          set: function set(classes) {
            this.panelClass = classes;
          }
        }]);

        return _MatMenuBase;
      }();

      _MatMenuBase.ɵfac = function _MatMenuBase_Factory(t) {
        return new (t || _MatMenuBase)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS));
      };

      _MatMenuBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: _MatMenuBase,
        contentQueries: function _MatMenuBase_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MAT_MENU_CONTENT, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatMenuItem, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatMenuItem, false);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.lazyContent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._allItems = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.items = _t);
          }
        },
        viewQuery: function _MatMenuBase_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
          }
        },
        inputs: {
          backdropClass: "backdropClass",
          xPosition: "xPosition",
          yPosition: "yPosition",
          overlapTrigger: "overlapTrigger",
          hasBackdrop: "hasBackdrop",
          panelClass: ["class", "panelClass"],
          classList: "classList",
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          ariaDescribedby: ["aria-describedby", "ariaDescribedby"]
        },
        outputs: {
          closed: "closed",
          close: "close"
        }
      });

      _MatMenuBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_DEFAULT_OPTIONS]
          }]
        }];
      };

      _MatMenuBase.propDecorators = {
        _allItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatMenuItem, {
            descendants: true
          }]
        }],
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-labelledby']
        }],
        ariaDescribedby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-describedby']
        }],
        xPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        yPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        templateRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]]
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatMenuItem, {
            descendants: false
          }]
        }],
        lazyContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [MAT_MENU_CONTENT]
        }],
        overlapTrigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['class']
        }],
        classList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_MatMenuBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_MENU_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          xPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          yPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          overlapTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['class']
          }],
          classList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          _allItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatMenuItem, {
              descendants: true
            }]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-labelledby']
          }],
          ariaDescribedby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-describedby']
          }],
          templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]]
          }],
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatMenuItem, {
              descendants: false
            }]
          }],
          lazyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [MAT_MENU_CONTENT]
          }]
        });
      })();
      /** @docs-public MatMenu */


      var MatMenu = /*#__PURE__*/function (_MatMenuBase2) {
        _inherits(MatMenu, _MatMenuBase2);

        var _super8 = _createSuper(MatMenu);

        function MatMenu(elementRef, ngZone, defaultOptions) {
          _classCallCheck(this, MatMenu);

          return _super8.call(this, elementRef, ngZone, defaultOptions);
        }

        return MatMenu;
      }(_MatMenuBase);

      MatMenu.ɵfac = function MatMenu_Factory(t) {
        return new (t || MatMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS));
      };

      MatMenu.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatMenu,
        selectors: [["mat-menu"]],
        exportAs: ["matMenu"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: MAT_MENU_PANEL,
          useExisting: MatMenu
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 1,
        vars: 0,
        consts: [["tabindex", "-1", "role", "menu", 1, "mat-menu-panel", 3, "id", "ngClass", "keydown", "click"], [1, "mat-menu-content"]],
        template: function MatMenu_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatMenu_ng_template_0_Template, 3, 6, "ng-template");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]],
        styles: [".mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"],
        encapsulation: 2,
        data: {
          animation: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems]
        },
        changeDetection: 0
      });

      MatMenu.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_DEFAULT_OPTIONS]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenu, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-menu',
            template: "<ng-template>\n  <div\n    class=\"mat-menu-panel\"\n    [id]=\"panelId\"\n    [ngClass]=\"_classList\"\n    (keydown)=\"_handleKeydown($event)\"\n    (click)=\"closed.emit('click')\"\n    [@transformMenu]=\"_panelAnimationState\"\n    (@transformMenu.start)=\"_onAnimationStart($event)\"\n    (@transformMenu.done)=\"_onAnimationDone($event)\"\n    tabindex=\"-1\"\n    role=\"menu\"\n    [attr.aria-label]=\"ariaLabel || null\"\n    [attr.aria-labelledby]=\"ariaLabelledby || null\"\n    [attr.aria-describedby]=\"ariaDescribedby || null\">\n    <div class=\"mat-menu-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            exportAs: 'matMenu',
            animations: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems],
            providers: [{
              provide: MAT_MENU_PANEL,
              useExisting: MatMenu
            }],
            styles: [".mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_MENU_DEFAULT_OPTIONS]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token that determines the scroll handling while the menu is open. */


      var MAT_MENU_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-menu-scroll-strategy');
      /** @docs-private */

      function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition();
        };
      }
      /** @docs-private */


      var MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: MAT_MENU_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]],
        useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY
      };
      /** Default top padding of the menu panel. */

      var MENU_PANEL_TOP_PADDING = 8;
      /** Options for binding a passive event listener. */

      var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["normalizePassiveListenerOptions"])({
        passive: true
      }); // TODO(andrewseguin): Remove the kebab versions in favor of camelCased attribute selectors

      /** Directive applied to an element that should trigger a `mat-menu`. */

      var MatMenuTrigger = /*#__PURE__*/function () {
        function MatMenuTrigger(_overlay, _element, _viewContainerRef, scrollStrategy, parentMenu, // `MatMenuTrigger` is commonly used in combination with a `MatMenuItem`.
        // tslint:disable-next-line: lightweight-tokens
        _menuItemInstance, _dir, // TODO(crisbeto): make the _focusMonitor required when doing breaking changes.
        // @breaking-change 8.0.0
        _focusMonitor) {
          var _this22 = this;

          _classCallCheck(this, MatMenuTrigger);

          this._overlay = _overlay;
          this._element = _element;
          this._viewContainerRef = _viewContainerRef;
          this._menuItemInstance = _menuItemInstance;
          this._dir = _dir;
          this._focusMonitor = _focusMonitor;
          this._overlayRef = null;
          this._menuOpen = false;
          this._closingActionsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          this._hoverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          this._menuCloseSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          /**
           * Handles touch start events on the trigger.
           * Needs to be an arrow function so we can easily use addEventListener and removeEventListener.
           */

          this._handleTouchStart = function () {
            return _this22._openedBy = 'touch';
          }; // Tracking input type is necessary so it's possible to only auto-focus
          // the first item of the list when the menu is opened via the keyboard


          this._openedBy = null;
          /**
           * Whether focus should be restored when the menu is closed.
           * Note that disabling this option can have accessibility implications
           * and it's up to you to manage focus, if you decide to turn it off.
           */

          this.restoreFocus = true;
          /** Event emitted when the associated menu is opened. */

          this.menuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * Event emitted when the associated menu is opened.
           * @deprecated Switch to `menuOpened` instead
           * @breaking-change 8.0.0
           */
          // tslint:disable-next-line:no-output-on-prefix

          this.onMenuOpen = this.menuOpened;
          /** Event emitted when the associated menu is closed. */

          this.menuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * Event emitted when the associated menu is closed.
           * @deprecated Switch to `menuClosed` instead
           * @breaking-change 8.0.0
           */
          // tslint:disable-next-line:no-output-on-prefix

          this.onMenuClose = this.menuClosed;
          this._scrollStrategy = scrollStrategy;
          this._parentMaterialMenu = parentMenu instanceof _MatMenuBase ? parentMenu : undefined;

          _element.nativeElement.addEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);

          if (_menuItemInstance) {
            _menuItemInstance._triggersSubmenu = this.triggersSubmenu();
          }
        }
        /**
         * @deprecated
         * @breaking-change 8.0.0
         */


        _createClass(MatMenuTrigger, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this._checkMenu();

            this._handleHover();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._overlayRef) {
              this._overlayRef.dispose();

              this._overlayRef = null;
            }

            this._element.nativeElement.removeEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);

            this._menuCloseSubscription.unsubscribe();

            this._closingActionsSubscription.unsubscribe();

            this._hoverSubscription.unsubscribe();
          }
          /** Whether the menu is open. */

        }, {
          key: "triggersSubmenu",

          /** Whether the menu triggers a sub-menu or a top-level one. */
          value: function triggersSubmenu() {
            return !!(this._menuItemInstance && this._parentMaterialMenu);
          }
          /** Toggles the menu between the open and closed states. */

        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            return this._menuOpen ? this.closeMenu() : this.openMenu();
          }
          /** Opens the menu. */

        }, {
          key: "openMenu",
          value: function openMenu() {
            var _this23 = this;

            if (this._menuOpen) {
              return;
            }

            this._checkMenu();

            var overlayRef = this._createOverlay();

            var overlayConfig = overlayRef.getConfig();

            this._setPosition(overlayConfig.positionStrategy);

            overlayConfig.hasBackdrop = this.menu.hasBackdrop == null ? !this.triggersSubmenu() : this.menu.hasBackdrop;
            overlayRef.attach(this._getPortal());

            if (this.menu.lazyContent) {
              this.menu.lazyContent.attach(this.menuData);
            }

            this._closingActionsSubscription = this._menuClosingActions().subscribe(function () {
              return _this23.closeMenu();
            });

            this._initMenu();

            if (this.menu instanceof _MatMenuBase) {
              this.menu._startAnimation();
            }
          }
          /** Closes the menu. */

        }, {
          key: "closeMenu",
          value: function closeMenu() {
            this.menu.close.emit();
          }
          /**
           * Focuses the menu trigger.
           * @param origin Source of the menu trigger's focus.
           */

        }, {
          key: "focus",
          value: function focus() {
            var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
            var options = arguments.length > 1 ? arguments[1] : undefined;

            if (this._focusMonitor) {
              this._focusMonitor.focusVia(this._element, origin, options);
            } else {
              this._element.nativeElement.focus(options);
            }
          }
          /** Closes the menu and does the necessary cleanup. */

        }, {
          key: "_destroyMenu",
          value: function _destroyMenu() {
            var _this24 = this;

            if (!this._overlayRef || !this.menuOpen) {
              return;
            }

            var menu = this.menu;

            this._closingActionsSubscription.unsubscribe();

            this._overlayRef.detach();

            this._restoreFocus();

            if (menu instanceof _MatMenuBase) {
              menu._resetAnimation();

              if (menu.lazyContent) {
                // Wait for the exit animation to finish before detaching the content.
                menu._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) {
                  return event.toState === 'void';
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), // Interrupt if the content got re-attached.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(menu.lazyContent._attached)).subscribe({
                  next: function next() {
                    return menu.lazyContent.detach();
                  },
                  // No matter whether the content got re-attached, reset the menu.
                  complete: function complete() {
                    return _this24._setIsMenuOpen(false);
                  }
                });
              } else {
                this._setIsMenuOpen(false);
              }
            } else {
              this._setIsMenuOpen(false);

              if (menu.lazyContent) {
                menu.lazyContent.detach();
              }
            }
          }
          /**
           * This method sets the menu state to open and focuses the first item if
           * the menu was opened via the keyboard.
           */

        }, {
          key: "_initMenu",
          value: function _initMenu() {
            this.menu.parentMenu = this.triggersSubmenu() ? this._parentMaterialMenu : undefined;
            this.menu.direction = this.dir;

            this._setMenuElevation();

            this._setIsMenuOpen(true);

            this.menu.focusFirstItem(this._openedBy || 'program');
          }
          /** Updates the menu elevation based on the amount of parent menus that it has. */

        }, {
          key: "_setMenuElevation",
          value: function _setMenuElevation() {
            if (this.menu.setElevation) {
              var depth = 0;
              var parentMenu = this.menu.parentMenu;

              while (parentMenu) {
                depth++;
                parentMenu = parentMenu.parentMenu;
              }

              this.menu.setElevation(depth);
            }
          }
          /** Restores focus to the element that was focused before the menu was open. */

        }, {
          key: "_restoreFocus",
          value: function _restoreFocus() {
            // We should reset focus if the user is navigating using a keyboard or
            // if we have a top-level trigger which might cause focus to be lost
            // when clicking on the backdrop.
            if (this.restoreFocus) {
              if (!this._openedBy) {
                // Note that the focus style will show up both for `program` and
                // `keyboard` so we don't have to specify which one it is.
                this.focus();
              } else if (!this.triggersSubmenu()) {
                this.focus(this._openedBy);
              }
            }

            this._openedBy = null;
          } // set state rather than toggle to support triggers sharing a menu

        }, {
          key: "_setIsMenuOpen",
          value: function _setIsMenuOpen(isOpen) {
            this._menuOpen = isOpen;
            this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();

            if (this.triggersSubmenu()) {
              this._menuItemInstance._highlighted = isOpen;
            }
          }
          /**
           * This method checks that a valid instance of MatMenu has been passed into
           * matMenuTriggerFor. If not, an exception is thrown.
           */

        }, {
          key: "_checkMenu",
          value: function _checkMenu() {
            if (!this.menu && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwMatMenuMissingError();
            }
          }
          /**
           * This method creates the overlay from the provided menu's template and saves its
           * OverlayRef so that it can be attached to the DOM when openMenu is called.
           */

        }, {
          key: "_createOverlay",
          value: function _createOverlay() {
            if (!this._overlayRef) {
              var config = this._getOverlayConfig();

              this._subscribeToPositions(config.positionStrategy);

              this._overlayRef = this._overlay.create(config); // Consume the `keydownEvents` in order to prevent them from going to another overlay.
              // Ideally we'd also have our keyboard event logic in here, however doing so will
              // break anybody that may have implemented the `MatMenuPanel` themselves.

              this._overlayRef.keydownEvents().subscribe();
            }

            return this._overlayRef;
          }
          /**
           * This method builds the configuration object needed to create the overlay, the OverlayState.
           * @returns OverlayConfig
           */

        }, {
          key: "_getOverlayConfig",
          value: function _getOverlayConfig() {
            return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayConfig"]({
              positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withTransformOriginOn('.mat-menu-panel, .mat-mdc-menu-panel'),
              backdropClass: this.menu.backdropClass || 'cdk-overlay-transparent-backdrop',
              panelClass: this.menu.overlayPanelClass,
              scrollStrategy: this._scrollStrategy(),
              direction: this._dir
            });
          }
          /**
           * Listens to changes in the position of the overlay and sets the correct classes
           * on the menu based on the new position. This ensures the animation origin is always
           * correct, even if a fallback position is used for the overlay.
           */

        }, {
          key: "_subscribeToPositions",
          value: function _subscribeToPositions(position) {
            var _this25 = this;

            if (this.menu.setPositionClasses) {
              position.positionChanges.subscribe(function (change) {
                var posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
                var posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';

                _this25.menu.setPositionClasses(posX, posY);
              });
            }
          }
          /**
           * Sets the appropriate positions on a position strategy
           * so the overlay connects with the trigger correctly.
           * @param positionStrategy Strategy whose position to update.
           */

        }, {
          key: "_setPosition",
          value: function _setPosition(positionStrategy) {
            var _ref = this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'],
                _ref2 = _slicedToArray(_ref, 2),
                originX = _ref2[0],
                originFallbackX = _ref2[1];

            var _ref3 = this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'],
                _ref4 = _slicedToArray(_ref3, 2),
                overlayY = _ref4[0],
                overlayFallbackY = _ref4[1];

            var originY = overlayY,
                originFallbackY = overlayFallbackY;
            var overlayX = originX,
                overlayFallbackX = originFallbackX;
            var offsetY = 0;

            if (this.triggersSubmenu()) {
              // When the menu is a sub-menu, it should always align itself
              // to the edges of the trigger, instead of overlapping it.
              overlayFallbackX = originX = this.menu.xPosition === 'before' ? 'start' : 'end';
              originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
              offsetY = overlayY === 'bottom' ? MENU_PANEL_TOP_PADDING : -MENU_PANEL_TOP_PADDING;
            } else if (!this.menu.overlapTrigger) {
              originY = overlayY === 'top' ? 'bottom' : 'top';
              originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
            }

            positionStrategy.withPositions([{
              originX: originX,
              originY: originY,
              overlayX: overlayX,
              overlayY: overlayY,
              offsetY: offsetY
            }, {
              originX: originFallbackX,
              originY: originY,
              overlayX: overlayFallbackX,
              overlayY: overlayY,
              offsetY: offsetY
            }, {
              originX: originX,
              originY: originFallbackY,
              overlayX: overlayX,
              overlayY: overlayFallbackY,
              offsetY: -offsetY
            }, {
              originX: originFallbackX,
              originY: originFallbackY,
              overlayX: overlayFallbackX,
              overlayY: overlayFallbackY,
              offsetY: -offsetY
            }]);
          }
          /** Returns a stream that emits whenever an action that should close the menu occurs. */

        }, {
          key: "_menuClosingActions",
          value: function _menuClosingActions() {
            var _this26 = this;

            var backdrop = this._overlayRef.backdropClick();

            var detachments = this._overlayRef.detachments();

            var parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])();
            var hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (active) {
              return active !== _this26._menuItemInstance;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return _this26._menuOpen;
            })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(backdrop, parentClose, hover, detachments);
          }
          /** Handles mouse presses on the trigger. */

        }, {
          key: "_handleMousedown",
          value: function _handleMousedown(event) {
            if (!Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["isFakeMousedownFromScreenReader"])(event)) {
              // Since right or middle button clicks won't trigger the `click` event,
              // we shouldn't consider the menu as opened by mouse in those cases.
              this._openedBy = event.button === 0 ? 'mouse' : null; // Since clicking on the trigger won't close the menu if it opens a sub-menu,
              // we should prevent focus from moving onto it via click to avoid the
              // highlight from lingering on the menu item.

              if (this.triggersSubmenu()) {
                event.preventDefault();
              }
            }
          }
          /** Handles key presses on the trigger. */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            var keyCode = event.keyCode;

            if (this.triggersSubmenu() && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["RIGHT_ARROW"] && this.dir === 'ltr' || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["LEFT_ARROW"] && this.dir === 'rtl')) {
              this.openMenu();
            }
          }
          /** Handles click events on the trigger. */

        }, {
          key: "_handleClick",
          value: function _handleClick(event) {
            if (this.triggersSubmenu()) {
              // Stop event propagation to avoid closing the parent menu.
              event.stopPropagation();
              this.openMenu();
            } else {
              this.toggleMenu();
            }
          }
          /** Handles the cases where the user hovers over the trigger. */

        }, {
          key: "_handleHover",
          value: function _handleHover() {
            var _this27 = this;

            // Subscribe to changes in the hovered item in order to toggle the panel.
            if (!this.triggersSubmenu() || !this._parentMaterialMenu) {
              return;
            }

            this._hoverSubscription = this._parentMaterialMenu._hovered() // Since we might have multiple competing triggers for the same menu (e.g. a sub-menu
            // with different data and triggers), we have to delay it by a tick to ensure that
            // it won't be closed immediately after it is opened.
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (active) {
              return active === _this27._menuItemInstance && !active.disabled;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"])).subscribe(function () {
              _this27._openedBy = 'mouse'; // If the same menu is used between multiple triggers, it might still be animating
              // while the new trigger tries to re-open it. Wait for the animation to finish
              // before doing so. Also interrupt if the user moves to another item.

              if (_this27.menu instanceof _MatMenuBase && _this27.menu._isAnimating) {
                // We need the `delay(0)` here in order to avoid
                // 'changed after checked' errors in some cases. See #12194.
                _this27.menu._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this27._parentMaterialMenu._hovered())).subscribe(function () {
                  return _this27.openMenu();
                });
              } else {
                _this27.openMenu();
              }
            });
          }
          /** Gets the portal that should be attached to the overlay. */

        }, {
          key: "_getPortal",
          value: function _getPortal() {
            // Note that we can avoid this check by keeping the portal on the menu panel.
            // While it would be cleaner, we'd have to introduce another required method on
            // `MatMenuPanel`, making it harder to consume.
            if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {
              this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["TemplatePortal"](this.menu.templateRef, this._viewContainerRef);
            }

            return this._portal;
          }
        }, {
          key: "_deprecatedMatMenuTriggerFor",
          get: function get() {
            return this.menu;
          },
          set: function set(v) {
            this.menu = v;
          }
          /** References the menu instance that the trigger is associated with. */

        }, {
          key: "menu",
          get: function get() {
            return this._menu;
          },
          set: function set(menu) {
            var _this28 = this;

            if (menu === this._menu) {
              return;
            }

            this._menu = menu;

            this._menuCloseSubscription.unsubscribe();

            if (menu) {
              if (menu === this._parentMaterialMenu && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throwMatMenuRecursiveError();
              }

              this._menuCloseSubscription = menu.close.subscribe(function (reason) {
                _this28._destroyMenu(); // If a click closed the menu, we should close the entire chain of nested menus.


                if ((reason === 'click' || reason === 'tab') && _this28._parentMaterialMenu) {
                  _this28._parentMaterialMenu.closed.emit(reason);
                }
              });
            }
          }
        }, {
          key: "menuOpen",
          get: function get() {
            return this._menuOpen;
          }
          /** The text direction of the containing app. */

        }, {
          key: "dir",
          get: function get() {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
          }
        }]);

        return MatMenuTrigger;
      }();

      MatMenuTrigger.ɵfac = function MatMenuTrigger_Factory(t) {
        return new (t || MatMenuTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_PANEL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatMenuItem, 10), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]));
      };

      MatMenuTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatMenuTrigger,
        selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
        hostAttrs: ["aria-haspopup", "true", 1, "mat-menu-trigger"],
        hostVars: 2,
        hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) {
              return ctx._handleMousedown($event);
            })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            })("click", function MatMenuTrigger_click_HostBindingHandler($event) {
              return ctx._handleClick($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", ctx.menuOpen || null)("aria-controls", ctx.menuOpen ? ctx.menu.panelId : null);
          }
        },
        inputs: {
          restoreFocus: ["matMenuTriggerRestoreFocus", "restoreFocus"],
          _deprecatedMatMenuTriggerFor: ["mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
          menu: ["matMenuTriggerFor", "menu"],
          menuData: ["matMenuTriggerData", "menuData"]
        },
        outputs: {
          menuOpened: "menuOpened",
          onMenuOpen: "onMenuOpen",
          menuClosed: "menuClosed",
          onMenuClose: "onMenuClose"
        },
        exportAs: ["matMenuTrigger"]
      });

      MatMenuTrigger.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_SCROLL_STRATEGY]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_PANEL]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: MatMenuItem,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }];
      };

      MatMenuTrigger.propDecorators = {
        _deprecatedMatMenuTriggerFor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['mat-menu-trigger-for']
        }],
        menu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matMenuTriggerFor']
        }],
        menuData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matMenuTriggerData']
        }],
        restoreFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matMenuTriggerRestoreFocus']
        }],
        menuOpened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        onMenuOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        menuClosed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        onMenuClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuTrigger, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: "[mat-menu-trigger-for], [matMenuTriggerFor]",
            host: {
              'class': 'mat-menu-trigger',
              'aria-haspopup': 'true',
              '[attr.aria-expanded]': 'menuOpen || null',
              '[attr.aria-controls]': 'menuOpen ? menu.panelId : null',
              '(mousedown)': '_handleMousedown($event)',
              '(keydown)': '_handleKeydown($event)',
              '(click)': '_handleClick($event)'
            },
            exportAs: 'matMenuTrigger'
          }]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_MENU_SCROLL_STRATEGY]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_MENU_PANEL]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }, {
            type: MatMenuItem,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
          }];
        }, {
          restoreFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matMenuTriggerRestoreFocus']
          }],
          menuOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          onMenuOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          menuClosed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          onMenuClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          _deprecatedMatMenuTriggerFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['mat-menu-trigger-for']
          }],
          menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matMenuTriggerFor']
          }],
          menuData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matMenuTriggerData']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Used by both the current `MatMenuModule` and the MDC `MatMenuModule`
       * to declare the menu-related directives.
       */


      var _MatMenuDirectivesModule = function _MatMenuDirectivesModule() {
        _classCallCheck(this, _MatMenuDirectivesModule);
      };

      _MatMenuDirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _MatMenuDirectivesModule
      });
      _MatMenuDirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function _MatMenuDirectivesModule_Factory(t) {
          return new (t || _MatMenuDirectivesModule)();
        },
        providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_MatMenuDirectivesModule, {
          declarations: function declarations() {
            return [MatMenuTrigger, MatMenuContent];
          },
          exports: function exports() {
            return [MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_MatMenuDirectivesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            exports: [MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]],
            declarations: [MatMenuTrigger, MatMenuContent],
            providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
          }]
        }], null, null);
      })();

      var MatMenuModule = function MatMenuModule() {
        _classCallCheck(this, MatMenuModule);
      };

      MatMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: MatMenuModule
      });
      MatMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function MatMenuModule_Factory(t) {
          return new (t || MatMenuModule)();
        },
        providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _MatMenuDirectivesModule], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _MatMenuDirectivesModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatMenuModule, {
          declarations: function declarations() {
            return [MatMenu, MatMenuItem];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _MatMenuDirectivesModule];
          },
          exports: function exports() {
            return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], MatMenu, MatMenuItem, _MatMenuDirectivesModule];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _MatMenuDirectivesModule],
            exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], MatMenu, MatMenuItem, _MatMenuDirectivesModule],
            declarations: [MatMenu, MatMenuItem],
            providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=menu.js.map

      /***/

    },

    /***/
    "WHOE":
    /*!****************************************************************!*\
      !*** ./src/app/shared/component/sidebar/sidebar.component.css ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function WHOE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "XiUz":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js ***!
      \************************************************************************/

    /*! exports provided: FlexModule, FlexStyleBuilder, FlexDirective, DefaultFlexDirective, FlexAlignStyleBuilder, FlexAlignDirective, DefaultFlexAlignDirective, FlexFillStyleBuilder, FlexFillDirective, FlexOffsetStyleBuilder, FlexOffsetDirective, DefaultFlexOffsetDirective, FlexOrderStyleBuilder, FlexOrderDirective, DefaultFlexOrderDirective, LayoutStyleBuilder, LayoutDirective, DefaultLayoutDirective, LayoutAlignStyleBuilder, LayoutAlignDirective, DefaultLayoutAlignDirective, LayoutGapStyleBuilder, LayoutGapDirective, DefaultLayoutGapDirective */

    /***/
    function XiUz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexModule", function () {
        return FlexModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexStyleBuilder", function () {
        return FlexStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexDirective", function () {
        return FlexDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexDirective", function () {
        return DefaultFlexDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexAlignStyleBuilder", function () {
        return FlexAlignStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexAlignDirective", function () {
        return FlexAlignDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexAlignDirective", function () {
        return DefaultFlexAlignDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexFillStyleBuilder", function () {
        return FlexFillStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexFillDirective", function () {
        return FlexFillDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexOffsetStyleBuilder", function () {
        return FlexOffsetStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexOffsetDirective", function () {
        return FlexOffsetDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexOffsetDirective", function () {
        return DefaultFlexOffsetDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexOrderStyleBuilder", function () {
        return FlexOrderStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexOrderDirective", function () {
        return FlexOrderDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexOrderDirective", function () {
        return DefaultFlexOrderDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutStyleBuilder", function () {
        return LayoutStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutDirective", function () {
        return LayoutDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutDirective", function () {
        return DefaultLayoutDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutAlignStyleBuilder", function () {
        return LayoutAlignStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutAlignDirective", function () {
        return LayoutAlignDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutAlignDirective", function () {
        return DefaultLayoutAlignDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutGapStyleBuilder", function () {
        return LayoutGapStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutGapDirective", function () {
        return LayoutGapDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutGapDirective", function () {
        return DefaultLayoutGapDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/core */
      "pD6V");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: utils/layout-validator.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       * @type {?}
       */


      var INLINE = 'inline';
      /** @type {?} */

      var LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
      /**
       * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
       * @param {?} value
       * @return {?}
       */

      function buildLayoutCSS(value) {
        var _validateValue = validateValue(value),
            _validateValue2 = _slicedToArray(_validateValue, 3),
            direction = _validateValue2[0],
            wrap = _validateValue2[1],
            isInline = _validateValue2[2];

        return buildCSS(direction, wrap, isInline);
      }
      /**
       * Validate the value to be one of the acceptable value options
       * Use default fallback of 'row'
       * @param {?} value
       * @return {?}
       */


      function validateValue(value) {
        value = value ? value.toLowerCase() : '';

        var _value$split = value.split(' '),
            _value$split2 = _slicedToArray(_value$split, 3),
            direction = _value$split2[0],
            wrap = _value$split2[1],
            inline = _value$split2[2]; // First value must be the `flex-direction`


        if (!LAYOUT_VALUES.find(
        /**
        * @param {?} x
        * @return {?}
        */
        function (x) {
          return x === direction;
        })) {
          direction = LAYOUT_VALUES[0];
        }

        if (wrap === INLINE) {
          wrap = inline !== INLINE ? inline : '';
          inline = INLINE;
        }

        return [direction, validateWrapValue(wrap), !!inline];
      }
      /**
       * Determine if the validated, flex-direction value specifies
       * a horizontal/row flow.
       * @param {?} value
       * @return {?}
       */


      function isFlowHorizontal(value) {
        var _validateValue3 = validateValue(value),
            _validateValue4 = _slicedToArray(_validateValue3, 1),
            flow = _validateValue4[0];

        return flow.indexOf('row') > -1;
      }
      /**
       * Convert layout-wrap='<value>' to expected flex-wrap style
       * @param {?} value
       * @return {?}
       */


      function validateWrapValue(value) {
        if (!!value) {
          switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
              value = 'wrap-reverse';
              break;

            case 'no':
            case 'none':
            case 'nowrap':
              value = 'nowrap';
              break;
            // All other values fallback to 'wrap'

            default:
              value = 'wrap';
              break;
          }
        }

        return value;
      }
      /**
       * Build the CSS that should be assigned to the element instance
       * BUG:
       *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
       *      Use height instead if possible; height : <xxx>vh;
       *
       *  This way any padding or border specified on the child elements are
       *  laid out and drawn inside that element's specified width and height.
       * @param {?} direction
       * @param {?=} wrap
       * @param {?=} inline
       * @return {?}
       */


      function buildCSS(direction) {
        var wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var inline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        return {
          'display': inline ? 'inline-flex' : 'flex',
          'box-sizing': 'border-box',
          'flex-direction': direction,
          'flex-wrap': !!wrap ? wrap : null
        };
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/layout/layout.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var LayoutStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_) {
        _inherits(LayoutStyleBuilder, _angular_flex_layout_);

        var _super9 = _createSuper(LayoutStyleBuilder);

        function LayoutStyleBuilder() {
          _classCallCheck(this, LayoutStyleBuilder);

          return _super9.apply(this, arguments);
        }

        _createClass(LayoutStyleBuilder, [{
          key: "buildStyles",

          /**
           * @param {?} input
           * @return {?}
           */
          value: function buildStyles(input) {
            return buildLayoutCSS(input);
          }
        }]);

        return LayoutStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      LayoutStyleBuilder.ɵfac = function LayoutStyleBuilder_Factory(t) {
        return ɵLayoutStyleBuilder_BaseFactory(t || LayoutStyleBuilder);
      };
      /** @nocollapse */


      LayoutStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function LayoutStyleBuilder_Factory() {
          return new LayoutStyleBuilder();
        },
        token: LayoutStyleBuilder,
        providedIn: "root"
      });

      var ɵLayoutStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](LayoutStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /** @type {?} */


      var inputs = ['fxLayout', 'fxLayout.xs', 'fxLayout.sm', 'fxLayout.md', 'fxLayout.lg', 'fxLayout.xl', 'fxLayout.lt-sm', 'fxLayout.lt-md', 'fxLayout.lt-lg', 'fxLayout.lt-xl', 'fxLayout.gt-xs', 'fxLayout.gt-sm', 'fxLayout.gt-md', 'fxLayout.gt-lg'];
      /** @type {?} */

      var selector = "\n  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],\n  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],\n  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],\n  [fxLayout.gt-md], [fxLayout.gt-lg]\n";
      /**
       * 'layout' flexbox styling directive
       * Defines the positioning flow direction for the child elements: row or column
       * Optional values: column or row (default)
       * @see https://css-tricks.com/almanac/properties/f/flex-direction/
       *
       */

      var LayoutDirective = /*#__PURE__*/function (_angular_flex_layout_2) {
        _inherits(LayoutDirective, _angular_flex_layout_2);

        var _super10 = _createSuper(LayoutDirective);

        /**
         * @param {?} elRef
         * @param {?} styleUtils
         * @param {?} styleBuilder
         * @param {?} marshal
         */
        function LayoutDirective(elRef, styleUtils, styleBuilder, marshal) {
          var _this29;

          _classCallCheck(this, LayoutDirective);

          _this29 = _super10.call(this, elRef, styleBuilder, styleUtils, marshal);
          _this29.DIRECTIVE_KEY = 'layout';
          _this29.styleCache = layoutCache;

          _this29.init();

          return _this29;
        }

        return LayoutDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      LayoutDirective.ɵfac = function LayoutDirective_Factory(t) {
        return new (t || LayoutDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LayoutStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      LayoutDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: LayoutDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      LayoutDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: LayoutStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: LayoutStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, null);
      })();

      var DefaultLayoutDirective = /*#__PURE__*/function (_LayoutDirective) {
        _inherits(DefaultLayoutDirective, _LayoutDirective);

        var _super11 = _createSuper(DefaultLayoutDirective);

        function DefaultLayoutDirective() {
          var _this30;

          _classCallCheck(this, DefaultLayoutDirective);

          _this30 = _super11.apply(this, arguments);
          _this30.inputs = inputs;
          return _this30;
        }

        return DefaultLayoutDirective;
      }(LayoutDirective);

      DefaultLayoutDirective.ɵfac = function DefaultLayoutDirective_Factory(t) {
        return ɵDefaultLayoutDirective_BaseFactory(t || DefaultLayoutDirective);
      };

      DefaultLayoutDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultLayoutDirective,
        selectors: [["", "fxLayout", ""], ["", "fxLayout.xs", ""], ["", "fxLayout.sm", ""], ["", "fxLayout.md", ""], ["", "fxLayout.lg", ""], ["", "fxLayout.xl", ""], ["", "fxLayout.lt-sm", ""], ["", "fxLayout.lt-md", ""], ["", "fxLayout.lt-lg", ""], ["", "fxLayout.lt-xl", ""], ["", "fxLayout.gt-xs", ""], ["", "fxLayout.gt-sm", ""], ["", "fxLayout.gt-md", ""], ["", "fxLayout.gt-lg", ""]],
        inputs: {
          fxLayout: "fxLayout",
          "fxLayout.xs": "fxLayout.xs",
          "fxLayout.sm": "fxLayout.sm",
          "fxLayout.md": "fxLayout.md",
          "fxLayout.lg": "fxLayout.lg",
          "fxLayout.xl": "fxLayout.xl",
          "fxLayout.lt-sm": "fxLayout.lt-sm",
          "fxLayout.lt-md": "fxLayout.lt-md",
          "fxLayout.lt-lg": "fxLayout.lt-lg",
          "fxLayout.lt-xl": "fxLayout.lt-xl",
          "fxLayout.gt-xs": "fxLayout.gt-xs",
          "fxLayout.gt-sm": "fxLayout.gt-sm",
          "fxLayout.gt-md": "fxLayout.gt-md",
          "fxLayout.gt-lg": "fxLayout.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultLayoutDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultLayoutDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultLayoutDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector,
            inputs: inputs
          }]
        }], null, null);
      })();
      /** @type {?} */


      var layoutCache = new Map();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/layout-gap/layout-gap.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */

      var CLEAR_MARGIN_CSS = {
        'margin-left': null,
        'margin-right': null,
        'margin-top': null,
        'margin-bottom': null
      };

      var LayoutGapStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_3) {
        _inherits(LayoutGapStyleBuilder, _angular_flex_layout_3);

        var _super12 = _createSuper(LayoutGapStyleBuilder);

        /**
         * @param {?} _styler
         */
        function LayoutGapStyleBuilder(_styler) {
          var _this31;

          _classCallCheck(this, LayoutGapStyleBuilder);

          _this31 = _super12.call(this);
          _this31._styler = _styler;
          return _this31;
        }
        /**
         * @param {?} gapValue
         * @param {?} parent
         * @return {?}
         */


        _createClass(LayoutGapStyleBuilder, [{
          key: "buildStyles",
          value: function buildStyles(gapValue, parent) {
            if (gapValue.endsWith(GRID_SPECIFIER)) {
              gapValue = gapValue.slice(0, gapValue.indexOf(GRID_SPECIFIER)); // Add the margin to the host element

              return buildGridMargin(gapValue, parent.directionality);
            } else {
              return {};
            }
          }
          /**
           * @param {?} gapValue
           * @param {?} _styles
           * @param {?} parent
           * @return {?}
           */

        }, {
          key: "sideEffect",
          value: function sideEffect(gapValue, _styles, parent) {
            /** @type {?} */
            var items = parent.items;

            if (gapValue.endsWith(GRID_SPECIFIER)) {
              gapValue = gapValue.slice(0, gapValue.indexOf(GRID_SPECIFIER)); // For each `element` children, set the padding

              /** @type {?} */

              var paddingStyles = buildGridPadding(gapValue, parent.directionality);

              this._styler.applyStyleToElements(paddingStyles, parent.items);
            } else {
              /** @type {?} */
              var lastItem =
              /** @type {?} */
              items.pop(); // For each `element` children EXCEPT the last,
              // set the margin right/bottom styles...

              /** @type {?} */

              var gapCss = buildGapCSS(gapValue, parent);

              this._styler.applyStyleToElements(gapCss, items); // Clear all gaps for all visible elements


              this._styler.applyStyleToElements(CLEAR_MARGIN_CSS, [lastItem]);
            }
          }
        }]);

        return LayoutGapStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      LayoutGapStyleBuilder.ɵfac = function LayoutGapStyleBuilder_Factory(t) {
        return new (t || LayoutGapStyleBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]));
      };
      /** @nocollapse */


      LayoutGapStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function LayoutGapStyleBuilder_Factory() {
          return new LayoutGapStyleBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]));
        },
        token: LayoutGapStyleBuilder,
        providedIn: "root"
      });
      /** @nocollapse */

      LayoutGapStyleBuilder.ctorParameters = function () {
        return [{
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutGapStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }];
        }, null);
      })();
      /** @type {?} */


      var inputs$1 = ['fxLayoutGap', 'fxLayoutGap.xs', 'fxLayoutGap.sm', 'fxLayoutGap.md', 'fxLayoutGap.lg', 'fxLayoutGap.xl', 'fxLayoutGap.lt-sm', 'fxLayoutGap.lt-md', 'fxLayoutGap.lt-lg', 'fxLayoutGap.lt-xl', 'fxLayoutGap.gt-xs', 'fxLayoutGap.gt-sm', 'fxLayoutGap.gt-md', 'fxLayoutGap.gt-lg'];
      /** @type {?} */

      var selector$1 = "\n  [fxLayoutGap], [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md],\n  [fxLayoutGap.lg], [fxLayoutGap.xl], [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md],\n  [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl], [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm],\n  [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]\n";
      /**
       * 'layout-padding' styling directive
       *  Defines padding of child elements in a layout container
       */

      var LayoutGapDirective = /*#__PURE__*/function (_angular_flex_layout_4) {
        _inherits(LayoutGapDirective, _angular_flex_layout_4);

        var _super13 = _createSuper(LayoutGapDirective);

        /**
         * @param {?} elRef
         * @param {?} zone
         * @param {?} directionality
         * @param {?} styleUtils
         * @param {?} styleBuilder
         * @param {?} marshal
         */
        function LayoutGapDirective(elRef, zone, directionality, styleUtils, styleBuilder, marshal) {
          var _this32;

          _classCallCheck(this, LayoutGapDirective);

          _this32 = _super13.call(this, elRef, styleBuilder, styleUtils, marshal);
          _this32.zone = zone;
          _this32.directionality = directionality;
          _this32.styleUtils = styleUtils;
          _this32.layout = 'row'; // default flex-direction
          // default flex-direction

          _this32.DIRECTIVE_KEY = 'layout-gap';
          _this32.observerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          /** @type {?} */

          var extraTriggers = [_this32.directionality.change, _this32.observerSubject.asObservable()];

          _this32.init(extraTriggers);

          _this32.marshal.trackValue(_this32.nativeElement, 'layout').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this32.destroySubject)).subscribe(_this32.onLayoutChange.bind(_assertThisInitialized(_this32)));

          return _this32;
        }
        /**
         * Special accessor to query for all child 'element' nodes regardless of type, class, etc
         * @protected
         * @return {?}
         */


        _createClass(LayoutGapDirective, [{
          key: "ngAfterContentInit",
          // *********************************************
          // Lifecycle Methods
          // *********************************************

          /**
           * @return {?}
           */
          value: function ngAfterContentInit() {
            this.buildChildObservable();
            this.triggerUpdate();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(LayoutGapDirective.prototype), "ngOnDestroy", this).call(this);

            if (this.observer) {
              this.observer.disconnect();
            }
          } // *********************************************
          // Protected methods
          // *********************************************

          /**
           * Cache the parent container 'flex-direction' and update the 'margin' styles
           * @protected
           * @param {?} matcher
           * @return {?}
           */

        }, {
          key: "onLayoutChange",
          value: function onLayoutChange(matcher) {
            var _this33 = this;

            /** @type {?} */
            var layout = matcher.value; // Make sure to filter out 'wrap' option

            /** @type {?} */

            var direction = layout.split(' ');
            this.layout = direction[0];

            if (!LAYOUT_VALUES.find(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x === _this33.layout;
            })) {
              this.layout = 'row';
            }

            this.triggerUpdate();
          }
          /**
           *
           * @protected
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "updateWithValue",
          value: function updateWithValue(value) {
            var _this34 = this;

            // Gather all non-hidden Element nodes

            /** @type {?} */
            var items = this.childrenNodes.filter(
            /**
            * @param {?} el
            * @return {?}
            */
            function (el) {
              return el.nodeType === 1 && _this34.willDisplay(el);
            }).sort(
            /**
            * @param {?} a
            * @param {?} b
            * @return {?}
            */
            function (a, b) {
              /** @type {?} */
              var orderA = +_this34.styler.lookupStyle(a, 'order');
              /** @type {?} */

              var orderB = +_this34.styler.lookupStyle(b, 'order');

              if (isNaN(orderA) || isNaN(orderB) || orderA === orderB) {
                return 0;
              } else {
                return orderA > orderB ? 1 : -1;
              }
            });

            if (items.length > 0) {
              /** @type {?} */
              var directionality = this.directionality.value;
              /** @type {?} */

              var layout = this.layout;

              if (layout === 'row' && directionality === 'rtl') {
                this.styleCache = layoutGapCacheRowRtl;
              } else if (layout === 'row' && directionality !== 'rtl') {
                this.styleCache = layoutGapCacheRowLtr;
              } else if (layout === 'column' && directionality === 'rtl') {
                this.styleCache = layoutGapCacheColumnRtl;
              } else if (layout === 'column' && directionality !== 'rtl') {
                this.styleCache = layoutGapCacheColumnLtr;
              }

              this.addStyles(value, {
                directionality: directionality,
                items: items,
                layout: layout
              });
            }
          }
          /**
           * We need to override clearStyles because in most cases mru isn't populated
           * @protected
           * @return {?}
           */

        }, {
          key: "clearStyles",
          value: function clearStyles() {
            /** @type {?} */
            var gridMode = Object.keys(this.mru).length > 0;
            /** @type {?} */

            var childrenStyle = gridMode ? 'padding' : getMarginType(this.directionality.value, this.layout); // If there are styles on the parent remove them

            if (gridMode) {
              _get(_getPrototypeOf(LayoutGapDirective.prototype), "clearStyles", this).call(this);
            } // Then remove the children styles too


            this.styleUtils.applyStyleToElements(_defineProperty({}, childrenStyle, ''), this.childrenNodes);
          }
          /**
           * Determine if an element will show or hide based on current activation
           * @protected
           * @param {?} source
           * @return {?}
           */

        }, {
          key: "willDisplay",
          value: function willDisplay(source) {
            /** @type {?} */
            var value = this.marshal.getValue(source, 'show-hide');
            return value === true || value === undefined && this.styleUtils.lookupStyle(source, 'display') !== 'none';
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "buildChildObservable",
          value: function buildChildObservable() {
            var _this35 = this;

            this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              if (typeof MutationObserver !== 'undefined') {
                _this35.observer = new MutationObserver(
                /**
                * @param {?} mutations
                * @return {?}
                */
                function (mutations) {
                  /** @type {?} */
                  var validatedChanges =
                  /**
                  * @param {?} it
                  * @return {?}
                  */
                  function validatedChanges(it) {
                    return it.addedNodes && it.addedNodes.length > 0 || it.removedNodes && it.removedNodes.length > 0;
                  }; // update gap styles only for child 'added' or 'removed' events


                  if (mutations.some(validatedChanges)) {
                    _this35.observerSubject.next();
                  }
                });

                _this35.observer.observe(_this35.nativeElement, {
                  childList: true
                });
              }
            });
          }
        }, {
          key: "childrenNodes",
          get: function get() {
            /** @type {?} */
            var obj = this.nativeElement.children;
            /** @type {?} */

            var buffer = []; // iterate backwards ensuring that length is an UInt32

            for (var i = obj.length; i--;) {
              buffer[i] = obj[i];
            }

            return buffer;
          }
        }]);

        return LayoutGapDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      LayoutGapDirective.ɵfac = function LayoutGapDirective_Factory(t) {
        return new (t || LayoutGapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LayoutGapStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      LayoutGapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: LayoutGapDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      LayoutGapDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: LayoutGapStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutGapDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: LayoutGapStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, null);
      })();

      var DefaultLayoutGapDirective = /*#__PURE__*/function (_LayoutGapDirective) {
        _inherits(DefaultLayoutGapDirective, _LayoutGapDirective);

        var _super14 = _createSuper(DefaultLayoutGapDirective);

        function DefaultLayoutGapDirective() {
          var _this36;

          _classCallCheck(this, DefaultLayoutGapDirective);

          _this36 = _super14.apply(this, arguments);
          _this36.inputs = inputs$1;
          return _this36;
        }

        return DefaultLayoutGapDirective;
      }(LayoutGapDirective);

      DefaultLayoutGapDirective.ɵfac = function DefaultLayoutGapDirective_Factory(t) {
        return ɵDefaultLayoutGapDirective_BaseFactory(t || DefaultLayoutGapDirective);
      };

      DefaultLayoutGapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultLayoutGapDirective,
        selectors: [["", "fxLayoutGap", ""], ["", "fxLayoutGap.xs", ""], ["", "fxLayoutGap.sm", ""], ["", "fxLayoutGap.md", ""], ["", "fxLayoutGap.lg", ""], ["", "fxLayoutGap.xl", ""], ["", "fxLayoutGap.lt-sm", ""], ["", "fxLayoutGap.lt-md", ""], ["", "fxLayoutGap.lt-lg", ""], ["", "fxLayoutGap.lt-xl", ""], ["", "fxLayoutGap.gt-xs", ""], ["", "fxLayoutGap.gt-sm", ""], ["", "fxLayoutGap.gt-md", ""], ["", "fxLayoutGap.gt-lg", ""]],
        inputs: {
          fxLayoutGap: "fxLayoutGap",
          "fxLayoutGap.xs": "fxLayoutGap.xs",
          "fxLayoutGap.sm": "fxLayoutGap.sm",
          "fxLayoutGap.md": "fxLayoutGap.md",
          "fxLayoutGap.lg": "fxLayoutGap.lg",
          "fxLayoutGap.xl": "fxLayoutGap.xl",
          "fxLayoutGap.lt-sm": "fxLayoutGap.lt-sm",
          "fxLayoutGap.lt-md": "fxLayoutGap.lt-md",
          "fxLayoutGap.lt-lg": "fxLayoutGap.lt-lg",
          "fxLayoutGap.lt-xl": "fxLayoutGap.lt-xl",
          "fxLayoutGap.gt-xs": "fxLayoutGap.gt-xs",
          "fxLayoutGap.gt-sm": "fxLayoutGap.gt-sm",
          "fxLayoutGap.gt-md": "fxLayoutGap.gt-md",
          "fxLayoutGap.gt-lg": "fxLayoutGap.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultLayoutGapDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultLayoutGapDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultLayoutGapDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$1,
            inputs: inputs$1
          }]
        }], null, null);
      })();
      /** @type {?} */


      var layoutGapCacheRowRtl = new Map();
      /** @type {?} */

      var layoutGapCacheColumnRtl = new Map();
      /** @type {?} */

      var layoutGapCacheRowLtr = new Map();
      /** @type {?} */

      var layoutGapCacheColumnLtr = new Map();
      /** @type {?} */

      var GRID_SPECIFIER = ' grid';
      /**
       * @param {?} value
       * @param {?} directionality
       * @return {?}
       */

      function buildGridPadding(value, directionality) {
        var _value$split3 = value.split(' '),
            _value$split4 = _slicedToArray(_value$split3, 2),
            between = _value$split4[0],
            below = _value$split4[1];
        /** @type {?} */


        var bottom = below || between;
        /** @type {?} */

        var paddingRight = '0px';
        /** @type {?} */

        var paddingBottom = bottom;
        /** @type {?} */

        var paddingLeft = '0px';

        if (directionality === 'rtl') {
          paddingLeft = between;
        } else {
          paddingRight = between;
        }

        return {
          'padding': "0px ".concat(paddingRight, " ").concat(paddingBottom, " ").concat(paddingLeft)
        };
      }
      /**
       * @param {?} value
       * @param {?} directionality
       * @return {?}
       */


      function buildGridMargin(value, directionality) {
        var _value$split5 = value.split(' '),
            _value$split6 = _slicedToArray(_value$split5, 2),
            between = _value$split6[0],
            below = _value$split6[1];
        /** @type {?} */


        var bottom = below || between;
        /** @type {?} */

        var minus =
        /**
        * @param {?} str
        * @return {?}
        */
        function minus(str) {
          return "-".concat(str);
        };
        /** @type {?} */


        var marginRight = '0px';
        /** @type {?} */

        var marginBottom = minus(bottom);
        /** @type {?} */

        var marginLeft = '0px';

        if (directionality === 'rtl') {
          marginLeft = minus(between);
        } else {
          marginRight = minus(between);
        }

        return {
          'margin': "0px ".concat(marginRight, " ").concat(marginBottom, " ").concat(marginLeft)
        };
      }
      /**
       * @param {?} directionality
       * @param {?} layout
       * @return {?}
       */


      function getMarginType(directionality, layout) {
        switch (layout) {
          case 'column':
            return 'margin-bottom';

          case 'column-reverse':
            return 'margin-top';

          case 'row':
            return directionality === 'rtl' ? 'margin-left' : 'margin-right';

          case 'row-reverse':
            return directionality === 'rtl' ? 'margin-right' : 'margin-left';

          default:
            return directionality === 'rtl' ? 'margin-left' : 'margin-right';
        }
      }
      /**
       * @param {?} gapValue
       * @param {?} parent
       * @return {?}
       */


      function buildGapCSS(gapValue, parent) {
        /** @type {?} */
        var key = getMarginType(parent.directionality, parent.layout);
        /** @type {?} */

        var margins = Object.assign({}, CLEAR_MARGIN_CSS);
        margins[key] = gapValue;
        return margins;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: utils/object-extend.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Extends an object with the *enumerable* and *own* properties of one or more source objects,
       * similar to Object.assign.
       *
       * @param {?} dest The object which will have properties copied to it.
       * @param {...?} sources The source objects from which properties will be copied.
       * @return {?}
       */


      function extendObject(dest) {
        if (dest == null) {
          throw TypeError('Cannot convert undefined or null to object');
        }

        for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          sources[_key - 1] = arguments[_key];
        }

        for (var _i2 = 0, _sources = sources; _i2 < _sources.length; _i2++) {
          var source = _sources[_i2];

          if (source != null) {
            for (var key in source) {
              if (source.hasOwnProperty(key)) {
                dest[key] = source[key];
              }
            }
          }
        }

        return dest;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/flex/flex.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FlexStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_5) {
        _inherits(FlexStyleBuilder, _angular_flex_layout_5);

        var _super15 = _createSuper(FlexStyleBuilder);

        /**
         * @param {?} layoutConfig
         */
        function FlexStyleBuilder(layoutConfig) {
          var _this37;

          _classCallCheck(this, FlexStyleBuilder);

          _this37 = _super15.call(this);
          _this37.layoutConfig = layoutConfig;
          return _this37;
        }
        /**
         * @param {?} input
         * @param {?} parent
         * @return {?}
         */


        _createClass(FlexStyleBuilder, [{
          key: "buildStyles",
          value: function buildStyles(input, parent) {
            var _input$split = input.split(' '),
                _input$split2 = _toArray(_input$split),
                grow = _input$split2[0],
                shrink = _input$split2[1],
                basisParts = _input$split2.slice(2);
            /** @type {?} */


            var basis = basisParts.join(' '); // The flex-direction of this element's flex container. Defaults to 'row'.

            /** @type {?} */

            var direction = parent.direction.indexOf('column') > -1 ? 'column' : 'row';
            /** @type {?} */

            var max = isFlowHorizontal(direction) ? 'max-width' : 'max-height';
            /** @type {?} */

            var min = isFlowHorizontal(direction) ? 'min-width' : 'min-height';
            /** @type {?} */

            var hasCalc = String(basis).indexOf('calc') > -1;
            /** @type {?} */

            var usingCalc = hasCalc || basis === 'auto';
            /** @type {?} */

            var isPercent = String(basis).indexOf('%') > -1 && !hasCalc;
            /** @type {?} */

            var hasUnits = String(basis).indexOf('px') > -1 || String(basis).indexOf('rem') > -1 || String(basis).indexOf('em') > -1 || String(basis).indexOf('vw') > -1 || String(basis).indexOf('vh') > -1;
            /** @type {?} */

            var isValue = hasCalc || hasUnits;
            grow = grow == '0' ? 0 : grow;
            shrink = shrink == '0' ? 0 : shrink; // make box inflexible when shrink and grow are both zero
            // should not set a min when the grow is zero
            // should not set a max when the shrink is zero

            /** @type {?} */

            var isFixed = !grow && !shrink;
            /** @type {?} */

            var css = {}; // flex-basis allows you to specify the initial/starting main-axis size of the element,
            // before anything else is computed. It can either be a percentage or an absolute value.
            // It is, however, not the breaking point for flex-grow/shrink properties
            //
            // flex-grow can be seen as this:
            //   0: Do not stretch. Either size to element's content width, or obey 'flex-basis'.
            //   1: (Default value). Stretch; will be the same size to all other flex items on
            //       the same row since they have a default value of 1.
            //   ≥2 (integer n): Stretch. Will be n times the size of other elements
            //      with 'flex-grow: 1' on the same row.
            // Use `null` to clear existing styles.

            /** @type {?} */

            var clearStyles = {
              'max-width': null,
              'max-height': null,
              'min-width': null,
              'min-height': null
            };

            switch (basis || '') {
              case '':
                /** @type {?} */
                var useColumnBasisZero = this.layoutConfig.useColumnBasisZero !== false;
                basis = direction === 'row' ? '0%' : useColumnBasisZero ? '0.000000001px' : 'auto';
                break;

              case 'initial': // default

              case 'nogrow':
                grow = 0;
                basis = 'auto';
                break;

              case 'grow':
                basis = '100%';
                break;

              case 'noshrink':
                shrink = 0;
                basis = 'auto';
                break;

              case 'auto':
                break;

              case 'none':
                grow = 0;
                shrink = 0;
                basis = 'auto';
                break;

              default:
                // Defaults to percentage sizing unless `px` is explicitly set
                if (!isValue && !isPercent && !isNaN(
                /** @type {?} */
                basis)) {
                  basis = basis + '%';
                } // Fix for issue 280


                if (basis === '0%') {
                  isValue = true;
                }

                if (basis === '0px') {
                  basis = '0%';
                } // fix issue #5345


                if (hasCalc) {
                  css = extendObject(clearStyles, {
                    'flex-grow': grow,
                    'flex-shrink': shrink,
                    'flex-basis': isValue ? basis : '100%'
                  });
                } else {
                  css = extendObject(clearStyles, {
                    'flex': "".concat(grow, " ").concat(shrink, " ").concat(isValue ? basis : '100%')
                  });
                }

                break;
            }

            if (!(css['flex'] || css['flex-grow'])) {
              if (hasCalc) {
                css = extendObject(clearStyles, {
                  'flex-grow': grow,
                  'flex-shrink': shrink,
                  'flex-basis': basis
                });
              } else {
                css = extendObject(clearStyles, {
                  'flex': "".concat(grow, " ").concat(shrink, " ").concat(basis)
                });
              }
            } // Fix for issues 277, 534, and 728


            if (basis !== '0%' && basis !== '0px' && basis !== '0.000000001px' && basis !== 'auto') {
              css[min] = isFixed || isValue && grow ? basis : null;
              css[max] = isFixed || !usingCalc && shrink ? basis : null;
            } // Fix for issue 528


            if (!css[min] && !css[max]) {
              if (hasCalc) {
                css = extendObject(clearStyles, {
                  'flex-grow': grow,
                  'flex-shrink': shrink,
                  'flex-basis': basis
                });
              } else {
                css = extendObject(clearStyles, {
                  'flex': "".concat(grow, " ").concat(shrink, " ").concat(basis)
                });
              }
            } else {
              // Fix for issue 660
              if (parent.hasWrap) {
                css[hasCalc ? 'flex-basis' : 'flex'] = css[max] ? hasCalc ? css[max] : "".concat(grow, " ").concat(shrink, " ").concat(css[max]) : hasCalc ? css[min] : "".concat(grow, " ").concat(shrink, " ").concat(css[min]);
              }
            }

            return (
              /** @type {?} */
              extendObject(css, {
                'box-sizing': 'border-box'
              })
            );
          }
        }]);

        return FlexStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      FlexStyleBuilder.ɵfac = function FlexStyleBuilder_Factory(t) {
        return new (t || FlexStyleBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]));
      };
      /** @nocollapse */


      FlexStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function FlexStyleBuilder_Factory() {
          return new FlexStyleBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]));
        },
        token: FlexStyleBuilder,
        providedIn: "root"
      });
      /** @nocollapse */

      FlexStyleBuilder.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]]
            }]
          }];
        }, null);
      })();
      /** @type {?} */


      var inputs$2 = ['fxFlex', 'fxFlex.xs', 'fxFlex.sm', 'fxFlex.md', 'fxFlex.lg', 'fxFlex.xl', 'fxFlex.lt-sm', 'fxFlex.lt-md', 'fxFlex.lt-lg', 'fxFlex.lt-xl', 'fxFlex.gt-xs', 'fxFlex.gt-sm', 'fxFlex.gt-md', 'fxFlex.gt-lg'];
      /** @type {?} */

      var selector$2 = "\n  [fxFlex], [fxFlex.xs], [fxFlex.sm], [fxFlex.md],\n  [fxFlex.lg], [fxFlex.xl], [fxFlex.lt-sm], [fxFlex.lt-md],\n  [fxFlex.lt-lg], [fxFlex.lt-xl], [fxFlex.gt-xs], [fxFlex.gt-sm],\n  [fxFlex.gt-md], [fxFlex.gt-lg]\n";
      /**
       * Directive to control the size of a flex item using flex-basis, flex-grow, and flex-shrink.
       * Corresponds to the css `flex` shorthand property.
       *
       * @see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
       */

      var FlexDirective = /*#__PURE__*/function (_angular_flex_layout_6) {
        _inherits(FlexDirective, _angular_flex_layout_6);

        var _super16 = _createSuper(FlexDirective);

        /**
         * @param {?} elRef
         * @param {?} styleUtils
         * @param {?} layoutConfig
         * @param {?} styleBuilder
         * @param {?} marshal
         */
        function FlexDirective(elRef, styleUtils, layoutConfig, styleBuilder, marshal) {
          var _this38;

          _classCallCheck(this, FlexDirective);

          _this38 = _super16.call(this, elRef, styleBuilder, styleUtils, marshal);
          _this38.layoutConfig = layoutConfig;
          _this38.marshal = marshal;
          _this38.DIRECTIVE_KEY = 'flex';
          _this38.direction = undefined;
          _this38.wrap = undefined;
          _this38.flexGrow = '1';
          _this38.flexShrink = '1';

          _this38.init();

          return _this38;
        }
        /**
         * @return {?}
         */


        _createClass(FlexDirective, [{
          key: "ngOnInit",

          /**
           * @return {?}
           */
          value: function ngOnInit() {
            if (this.parentElement) {
              this.marshal.trackValue(this.parentElement, 'layout').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroySubject)).subscribe(this.onLayoutChange.bind(this));
              this.marshal.trackValue(this.nativeElement, 'layout-align').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroySubject)).subscribe(this.triggerReflow.bind(this));
            }
          }
          /**
           * Caches the parent container's 'flex-direction' and updates the element's style.
           * Used as a handler for layout change events from the parent flex container.
           * @protected
           * @param {?} matcher
           * @return {?}
           */

        }, {
          key: "onLayoutChange",
          value: function onLayoutChange(matcher) {
            /** @type {?} */
            var layout = matcher.value;
            /** @type {?} */

            var layoutParts = layout.split(' ');
            this.direction = layoutParts[0];
            this.wrap = layoutParts[1] !== undefined && layoutParts[1] === 'wrap';
            this.triggerUpdate();
          }
          /**
           * Input to this is exclusively the basis input value
           * @protected
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "updateWithValue",
          value: function updateWithValue(value) {
            /** @type {?} */
            var addFlexToParent = this.layoutConfig.addFlexToParent !== false;

            if (this.direction === undefined) {
              this.direction = this.getFlexFlowDirection(
              /** @type {?} */
              this.parentElement, addFlexToParent);
            }

            if (this.wrap === undefined) {
              this.wrap = this.hasWrap(
              /** @type {?} */
              this.parentElement);
            }
            /** @type {?} */


            var direction = this.direction;
            /** @type {?} */

            var isHorizontal = direction.startsWith('row');
            /** @type {?} */

            var hasWrap = this.wrap;

            if (isHorizontal && hasWrap) {
              this.styleCache = flexRowWrapCache;
            } else if (isHorizontal && !hasWrap) {
              this.styleCache = flexRowCache;
            } else if (!isHorizontal && hasWrap) {
              this.styleCache = flexColumnWrapCache;
            } else if (!isHorizontal && !hasWrap) {
              this.styleCache = flexColumnCache;
            }
            /** @type {?} */


            var basis = String(value).replace(';', '');
            /** @type {?} */

            var parts = Object(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["validateBasis"])(basis, this.flexGrow, this.flexShrink);
            this.addStyles(parts.join(' '), {
              direction: direction,
              hasWrap: hasWrap
            });
          }
          /**
           * Trigger a style reflow, usually based on a shrink/grow input event
           * @protected
           * @return {?}
           */

        }, {
          key: "triggerReflow",
          value: function triggerReflow() {
            /** @type {?} */
            var activatedValue = this.activatedValue;

            if (activatedValue !== undefined) {
              /** @type {?} */
              var parts = Object(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["validateBasis"])(activatedValue + '', this.flexGrow, this.flexShrink);
              this.marshal.updateElement(this.nativeElement, this.DIRECTIVE_KEY, parts.join(' '));
            }
          }
        }, {
          key: "shrink",
          get: function get() {
            return this.flexShrink;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this.flexShrink = value || '1';
            this.triggerReflow();
          }
          /**
           * @return {?}
           */

        }, {
          key: "grow",
          get: function get() {
            return this.flexGrow;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this.flexGrow = value || '1';
            this.triggerReflow();
          }
        }]);

        return FlexDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      FlexDirective.ɵfac = function FlexDirective_Factory(t) {
        return new (t || FlexDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FlexStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      FlexDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FlexDirective,
        inputs: {
          shrink: ["fxShrink", "shrink"],
          grow: ["fxGrow", "grow"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      FlexDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]]
          }]
        }, {
          type: FlexStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };

      FlexDirective.propDecorators = {
        shrink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['fxShrink']
        }],
        grow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['fxGrow']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]]
            }]
          }, {
            type: FlexStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, {
          shrink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['fxShrink']
          }],
          grow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['fxGrow']
          }]
        });
      })();

      var DefaultFlexDirective = /*#__PURE__*/function (_FlexDirective) {
        _inherits(DefaultFlexDirective, _FlexDirective);

        var _super17 = _createSuper(DefaultFlexDirective);

        function DefaultFlexDirective() {
          var _this39;

          _classCallCheck(this, DefaultFlexDirective);

          _this39 = _super17.apply(this, arguments);
          _this39.inputs = inputs$2;
          return _this39;
        }

        return DefaultFlexDirective;
      }(FlexDirective);

      DefaultFlexDirective.ɵfac = function DefaultFlexDirective_Factory(t) {
        return ɵDefaultFlexDirective_BaseFactory(t || DefaultFlexDirective);
      };

      DefaultFlexDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultFlexDirective,
        selectors: [["", "fxFlex", ""], ["", "fxFlex.xs", ""], ["", "fxFlex.sm", ""], ["", "fxFlex.md", ""], ["", "fxFlex.lg", ""], ["", "fxFlex.xl", ""], ["", "fxFlex.lt-sm", ""], ["", "fxFlex.lt-md", ""], ["", "fxFlex.lt-lg", ""], ["", "fxFlex.lt-xl", ""], ["", "fxFlex.gt-xs", ""], ["", "fxFlex.gt-sm", ""], ["", "fxFlex.gt-md", ""], ["", "fxFlex.gt-lg", ""]],
        inputs: {
          fxFlex: "fxFlex",
          "fxFlex.xs": "fxFlex.xs",
          "fxFlex.sm": "fxFlex.sm",
          "fxFlex.md": "fxFlex.md",
          "fxFlex.lg": "fxFlex.lg",
          "fxFlex.xl": "fxFlex.xl",
          "fxFlex.lt-sm": "fxFlex.lt-sm",
          "fxFlex.lt-md": "fxFlex.lt-md",
          "fxFlex.lt-lg": "fxFlex.lt-lg",
          "fxFlex.lt-xl": "fxFlex.lt-xl",
          "fxFlex.gt-xs": "fxFlex.gt-xs",
          "fxFlex.gt-sm": "fxFlex.gt-sm",
          "fxFlex.gt-md": "fxFlex.gt-md",
          "fxFlex.gt-lg": "fxFlex.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultFlexDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultFlexDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultFlexDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            inputs: inputs$2,
            selector: selector$2
          }]
        }], null, null);
      })();
      /** @type {?} */


      var flexRowCache = new Map();
      /** @type {?} */

      var flexColumnCache = new Map();
      /** @type {?} */

      var flexRowWrapCache = new Map();
      /** @type {?} */

      var flexColumnWrapCache = new Map();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/flex-order/flex-order.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var FlexOrderStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_7) {
        _inherits(FlexOrderStyleBuilder, _angular_flex_layout_7);

        var _super18 = _createSuper(FlexOrderStyleBuilder);

        function FlexOrderStyleBuilder() {
          _classCallCheck(this, FlexOrderStyleBuilder);

          return _super18.apply(this, arguments);
        }

        _createClass(FlexOrderStyleBuilder, [{
          key: "buildStyles",

          /**
           * @param {?} value
           * @return {?}
           */
          value: function buildStyles(value) {
            return {
              order: value && parseInt(value, 10) || ''
            };
          }
        }]);

        return FlexOrderStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      FlexOrderStyleBuilder.ɵfac = function FlexOrderStyleBuilder_Factory(t) {
        return ɵFlexOrderStyleBuilder_BaseFactory(t || FlexOrderStyleBuilder);
      };
      /** @nocollapse */


      FlexOrderStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function FlexOrderStyleBuilder_Factory() {
          return new FlexOrderStyleBuilder();
        },
        token: FlexOrderStyleBuilder,
        providedIn: "root"
      });

      var ɵFlexOrderStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FlexOrderStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexOrderStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /** @type {?} */


      var inputs$3 = ['fxFlexOrder', 'fxFlexOrder.xs', 'fxFlexOrder.sm', 'fxFlexOrder.md', 'fxFlexOrder.lg', 'fxFlexOrder.xl', 'fxFlexOrder.lt-sm', 'fxFlexOrder.lt-md', 'fxFlexOrder.lt-lg', 'fxFlexOrder.lt-xl', 'fxFlexOrder.gt-xs', 'fxFlexOrder.gt-sm', 'fxFlexOrder.gt-md', 'fxFlexOrder.gt-lg'];
      /** @type {?} */

      var selector$3 = "\n  [fxFlexOrder], [fxFlexOrder.xs], [fxFlexOrder.sm], [fxFlexOrder.md],\n  [fxFlexOrder.lg], [fxFlexOrder.xl], [fxFlexOrder.lt-sm], [fxFlexOrder.lt-md],\n  [fxFlexOrder.lt-lg], [fxFlexOrder.lt-xl], [fxFlexOrder.gt-xs], [fxFlexOrder.gt-sm],\n  [fxFlexOrder.gt-md], [fxFlexOrder.gt-lg]\n";
      /**
       * 'flex-order' flexbox styling directive
       * Configures the positional ordering of the element in a sorted layout container
       * @see https://css-tricks.com/almanac/properties/o/order/
       */

      var FlexOrderDirective = /*#__PURE__*/function (_angular_flex_layout_8) {
        _inherits(FlexOrderDirective, _angular_flex_layout_8);

        var _super19 = _createSuper(FlexOrderDirective);

        /**
         * @param {?} elRef
         * @param {?} styleUtils
         * @param {?} styleBuilder
         * @param {?} marshal
         */
        function FlexOrderDirective(elRef, styleUtils, styleBuilder, marshal) {
          var _this40;

          _classCallCheck(this, FlexOrderDirective);

          _this40 = _super19.call(this, elRef, styleBuilder, styleUtils, marshal);
          _this40.DIRECTIVE_KEY = 'flex-order';
          _this40.styleCache = flexOrderCache;

          _this40.init();

          return _this40;
        }

        return FlexOrderDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      FlexOrderDirective.ɵfac = function FlexOrderDirective_Factory(t) {
        return new (t || FlexOrderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FlexOrderStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      FlexOrderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FlexOrderDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      FlexOrderDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: FlexOrderStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexOrderDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: FlexOrderStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, null);
      })();
      /** @type {?} */


      var flexOrderCache = new Map();

      var DefaultFlexOrderDirective = /*#__PURE__*/function (_FlexOrderDirective) {
        _inherits(DefaultFlexOrderDirective, _FlexOrderDirective);

        var _super20 = _createSuper(DefaultFlexOrderDirective);

        function DefaultFlexOrderDirective() {
          var _this41;

          _classCallCheck(this, DefaultFlexOrderDirective);

          _this41 = _super20.apply(this, arguments);
          _this41.inputs = inputs$3;
          return _this41;
        }

        return DefaultFlexOrderDirective;
      }(FlexOrderDirective);

      DefaultFlexOrderDirective.ɵfac = function DefaultFlexOrderDirective_Factory(t) {
        return ɵDefaultFlexOrderDirective_BaseFactory(t || DefaultFlexOrderDirective);
      };

      DefaultFlexOrderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultFlexOrderDirective,
        selectors: [["", "fxFlexOrder", ""], ["", "fxFlexOrder.xs", ""], ["", "fxFlexOrder.sm", ""], ["", "fxFlexOrder.md", ""], ["", "fxFlexOrder.lg", ""], ["", "fxFlexOrder.xl", ""], ["", "fxFlexOrder.lt-sm", ""], ["", "fxFlexOrder.lt-md", ""], ["", "fxFlexOrder.lt-lg", ""], ["", "fxFlexOrder.lt-xl", ""], ["", "fxFlexOrder.gt-xs", ""], ["", "fxFlexOrder.gt-sm", ""], ["", "fxFlexOrder.gt-md", ""], ["", "fxFlexOrder.gt-lg", ""]],
        inputs: {
          fxFlexOrder: "fxFlexOrder",
          "fxFlexOrder.xs": "fxFlexOrder.xs",
          "fxFlexOrder.sm": "fxFlexOrder.sm",
          "fxFlexOrder.md": "fxFlexOrder.md",
          "fxFlexOrder.lg": "fxFlexOrder.lg",
          "fxFlexOrder.xl": "fxFlexOrder.xl",
          "fxFlexOrder.lt-sm": "fxFlexOrder.lt-sm",
          "fxFlexOrder.lt-md": "fxFlexOrder.lt-md",
          "fxFlexOrder.lt-lg": "fxFlexOrder.lt-lg",
          "fxFlexOrder.lt-xl": "fxFlexOrder.lt-xl",
          "fxFlexOrder.gt-xs": "fxFlexOrder.gt-xs",
          "fxFlexOrder.gt-sm": "fxFlexOrder.gt-sm",
          "fxFlexOrder.gt-md": "fxFlexOrder.gt-md",
          "fxFlexOrder.gt-lg": "fxFlexOrder.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultFlexOrderDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultFlexOrderDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultFlexOrderDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$3,
            inputs: inputs$3
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/flex-offset/flex-offset.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FlexOffsetStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_9) {
        _inherits(FlexOffsetStyleBuilder, _angular_flex_layout_9);

        var _super21 = _createSuper(FlexOffsetStyleBuilder);

        function FlexOffsetStyleBuilder() {
          _classCallCheck(this, FlexOffsetStyleBuilder);

          return _super21.apply(this, arguments);
        }

        _createClass(FlexOffsetStyleBuilder, [{
          key: "buildStyles",

          /**
           * @param {?} offset
           * @param {?} parent
           * @return {?}
           */
          value: function buildStyles(offset, parent) {
            if (offset === '') {
              offset = '0';
            }
            /** @type {?} */


            var isPercent = String(offset).indexOf('%') > -1;
            /** @type {?} */

            var isPx = String(offset).indexOf('px') > -1;

            if (!isPx && !isPercent && !isNaN(+offset)) {
              offset = offset + '%';
            }
            /** @type {?} */


            var horizontalLayoutKey = parent.isRtl ? 'margin-right' : 'margin-left';
            /** @type {?} */

            var styles = isFlowHorizontal(parent.layout) ? _defineProperty({}, horizontalLayoutKey, "".concat(offset)) : {
              'margin-top': "".concat(offset)
            };
            return styles;
          }
        }]);

        return FlexOffsetStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      FlexOffsetStyleBuilder.ɵfac = function FlexOffsetStyleBuilder_Factory(t) {
        return ɵFlexOffsetStyleBuilder_BaseFactory(t || FlexOffsetStyleBuilder);
      };
      /** @nocollapse */


      FlexOffsetStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function FlexOffsetStyleBuilder_Factory() {
          return new FlexOffsetStyleBuilder();
        },
        token: FlexOffsetStyleBuilder,
        providedIn: "root"
      });

      var ɵFlexOffsetStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FlexOffsetStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexOffsetStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /** @type {?} */


      var inputs$4 = ['fxFlexOffset', 'fxFlexOffset.xs', 'fxFlexOffset.sm', 'fxFlexOffset.md', 'fxFlexOffset.lg', 'fxFlexOffset.xl', 'fxFlexOffset.lt-sm', 'fxFlexOffset.lt-md', 'fxFlexOffset.lt-lg', 'fxFlexOffset.lt-xl', 'fxFlexOffset.gt-xs', 'fxFlexOffset.gt-sm', 'fxFlexOffset.gt-md', 'fxFlexOffset.gt-lg'];
      /** @type {?} */

      var selector$4 = "\n  [fxFlexOffset], [fxFlexOffset.xs], [fxFlexOffset.sm], [fxFlexOffset.md],\n  [fxFlexOffset.lg], [fxFlexOffset.xl], [fxFlexOffset.lt-sm], [fxFlexOffset.lt-md],\n  [fxFlexOffset.lt-lg], [fxFlexOffset.lt-xl], [fxFlexOffset.gt-xs], [fxFlexOffset.gt-sm],\n  [fxFlexOffset.gt-md], [fxFlexOffset.gt-lg]\n";
      /**
       * 'flex-offset' flexbox styling directive
       * Configures the 'margin-left' of the element in a layout container
       */

      var FlexOffsetDirective = /*#__PURE__*/function (_angular_flex_layout_10) {
        _inherits(FlexOffsetDirective, _angular_flex_layout_10);

        var _super22 = _createSuper(FlexOffsetDirective);

        /**
         * @param {?} elRef
         * @param {?} directionality
         * @param {?} styleBuilder
         * @param {?} marshal
         * @param {?} styler
         */
        function FlexOffsetDirective(elRef, directionality, styleBuilder, marshal, styler) {
          var _this42;

          _classCallCheck(this, FlexOffsetDirective);

          _this42 = _super22.call(this, elRef, styleBuilder, styler, marshal);
          _this42.directionality = directionality;
          _this42.DIRECTIVE_KEY = 'flex-offset';

          _this42.init([_this42.directionality.change]); // Parent DOM `layout-gap` with affect the nested child with `flex-offset`


          if (_this42.parentElement) {
            _this42.marshal.trackValue(_this42.parentElement, 'layout-gap').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this42.destroySubject)).subscribe(_this42.triggerUpdate.bind(_assertThisInitialized(_this42)));
          }

          return _this42;
        } // *********************************************
        // Protected methods
        // *********************************************

        /**
         * Using the current fxFlexOffset value, update the inline CSS
         * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
         *       otherwise `margin-top` is used for the offset.
         * @protected
         * @param {?=} value
         * @return {?}
         */


        _createClass(FlexOffsetDirective, [{
          key: "updateWithValue",
          value: function updateWithValue() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            // The flex-direction of this element's flex container. Defaults to 'row'.

            /** @type {?} */
            var layout = this.getFlexFlowDirection(
            /** @type {?} */
            this.parentElement, true);
            /** @type {?} */

            var isRtl = this.directionality.value === 'rtl';

            if (layout === 'row' && isRtl) {
              this.styleCache = flexOffsetCacheRowRtl;
            } else if (layout === 'row' && !isRtl) {
              this.styleCache = flexOffsetCacheRowLtr;
            } else if (layout === 'column' && isRtl) {
              this.styleCache = flexOffsetCacheColumnRtl;
            } else if (layout === 'column' && !isRtl) {
              this.styleCache = flexOffsetCacheColumnLtr;
            }

            this.addStyles(value + '', {
              layout: layout,
              isRtl: isRtl
            });
          }
        }]);

        return FlexOffsetDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      FlexOffsetDirective.ɵfac = function FlexOffsetDirective_Factory(t) {
        return new (t || FlexOffsetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FlexOffsetStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]));
      };

      FlexOffsetDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FlexOffsetDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      FlexOffsetDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]
        }, {
          type: FlexOffsetStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexOffsetDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]
          }, {
            type: FlexOffsetStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }];
        }, null);
      })();

      var DefaultFlexOffsetDirective = /*#__PURE__*/function (_FlexOffsetDirective) {
        _inherits(DefaultFlexOffsetDirective, _FlexOffsetDirective);

        var _super23 = _createSuper(DefaultFlexOffsetDirective);

        function DefaultFlexOffsetDirective() {
          var _this43;

          _classCallCheck(this, DefaultFlexOffsetDirective);

          _this43 = _super23.apply(this, arguments);
          _this43.inputs = inputs$4;
          return _this43;
        }

        return DefaultFlexOffsetDirective;
      }(FlexOffsetDirective);

      DefaultFlexOffsetDirective.ɵfac = function DefaultFlexOffsetDirective_Factory(t) {
        return ɵDefaultFlexOffsetDirective_BaseFactory(t || DefaultFlexOffsetDirective);
      };

      DefaultFlexOffsetDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultFlexOffsetDirective,
        selectors: [["", "fxFlexOffset", ""], ["", "fxFlexOffset.xs", ""], ["", "fxFlexOffset.sm", ""], ["", "fxFlexOffset.md", ""], ["", "fxFlexOffset.lg", ""], ["", "fxFlexOffset.xl", ""], ["", "fxFlexOffset.lt-sm", ""], ["", "fxFlexOffset.lt-md", ""], ["", "fxFlexOffset.lt-lg", ""], ["", "fxFlexOffset.lt-xl", ""], ["", "fxFlexOffset.gt-xs", ""], ["", "fxFlexOffset.gt-sm", ""], ["", "fxFlexOffset.gt-md", ""], ["", "fxFlexOffset.gt-lg", ""]],
        inputs: {
          fxFlexOffset: "fxFlexOffset",
          "fxFlexOffset.xs": "fxFlexOffset.xs",
          "fxFlexOffset.sm": "fxFlexOffset.sm",
          "fxFlexOffset.md": "fxFlexOffset.md",
          "fxFlexOffset.lg": "fxFlexOffset.lg",
          "fxFlexOffset.xl": "fxFlexOffset.xl",
          "fxFlexOffset.lt-sm": "fxFlexOffset.lt-sm",
          "fxFlexOffset.lt-md": "fxFlexOffset.lt-md",
          "fxFlexOffset.lt-lg": "fxFlexOffset.lt-lg",
          "fxFlexOffset.lt-xl": "fxFlexOffset.lt-xl",
          "fxFlexOffset.gt-xs": "fxFlexOffset.gt-xs",
          "fxFlexOffset.gt-sm": "fxFlexOffset.gt-sm",
          "fxFlexOffset.gt-md": "fxFlexOffset.gt-md",
          "fxFlexOffset.gt-lg": "fxFlexOffset.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultFlexOffsetDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultFlexOffsetDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultFlexOffsetDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$4,
            inputs: inputs$4
          }]
        }], null, null);
      })();
      /** @type {?} */


      var flexOffsetCacheRowRtl = new Map();
      /** @type {?} */

      var flexOffsetCacheColumnRtl = new Map();
      /** @type {?} */

      var flexOffsetCacheRowLtr = new Map();
      /** @type {?} */

      var flexOffsetCacheColumnLtr = new Map();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/flex-align/flex-align.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var FlexAlignStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_11) {
        _inherits(FlexAlignStyleBuilder, _angular_flex_layout_11);

        var _super24 = _createSuper(FlexAlignStyleBuilder);

        function FlexAlignStyleBuilder() {
          _classCallCheck(this, FlexAlignStyleBuilder);

          return _super24.apply(this, arguments);
        }

        _createClass(FlexAlignStyleBuilder, [{
          key: "buildStyles",

          /**
           * @param {?} input
           * @return {?}
           */
          value: function buildStyles(input) {
            input = input || 'stretch';
            /** @type {?} */

            var styles = {}; // Cross-axis

            switch (input) {
              case 'start':
                styles['align-self'] = 'flex-start';
                break;

              case 'end':
                styles['align-self'] = 'flex-end';
                break;

              default:
                styles['align-self'] = input;
                break;
            }

            return styles;
          }
        }]);

        return FlexAlignStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      FlexAlignStyleBuilder.ɵfac = function FlexAlignStyleBuilder_Factory(t) {
        return ɵFlexAlignStyleBuilder_BaseFactory(t || FlexAlignStyleBuilder);
      };
      /** @nocollapse */


      FlexAlignStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function FlexAlignStyleBuilder_Factory() {
          return new FlexAlignStyleBuilder();
        },
        token: FlexAlignStyleBuilder,
        providedIn: "root"
      });

      var ɵFlexAlignStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FlexAlignStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexAlignStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /** @type {?} */


      var inputs$5 = ['fxFlexAlign', 'fxFlexAlign.xs', 'fxFlexAlign.sm', 'fxFlexAlign.md', 'fxFlexAlign.lg', 'fxFlexAlign.xl', 'fxFlexAlign.lt-sm', 'fxFlexAlign.lt-md', 'fxFlexAlign.lt-lg', 'fxFlexAlign.lt-xl', 'fxFlexAlign.gt-xs', 'fxFlexAlign.gt-sm', 'fxFlexAlign.gt-md', 'fxFlexAlign.gt-lg'];
      /** @type {?} */

      var selector$5 = "\n  [fxFlexAlign], [fxFlexAlign.xs], [fxFlexAlign.sm], [fxFlexAlign.md],\n  [fxFlexAlign.lg], [fxFlexAlign.xl], [fxFlexAlign.lt-sm], [fxFlexAlign.lt-md],\n  [fxFlexAlign.lt-lg], [fxFlexAlign.lt-xl], [fxFlexAlign.gt-xs], [fxFlexAlign.gt-sm],\n  [fxFlexAlign.gt-md], [fxFlexAlign.gt-lg]\n";
      /**
       * 'flex-align' flexbox styling directive
       * Allows element-specific overrides for cross-axis alignments in a layout container
       * @see https://css-tricks.com/almanac/properties/a/align-self/
       */

      var FlexAlignDirective = /*#__PURE__*/function (_angular_flex_layout_12) {
        _inherits(FlexAlignDirective, _angular_flex_layout_12);

        var _super25 = _createSuper(FlexAlignDirective);

        /**
         * @param {?} elRef
         * @param {?} styleUtils
         * @param {?} styleBuilder
         * @param {?} marshal
         */
        function FlexAlignDirective(elRef, styleUtils, styleBuilder, marshal) {
          var _this44;

          _classCallCheck(this, FlexAlignDirective);

          _this44 = _super25.call(this, elRef, styleBuilder, styleUtils, marshal);
          _this44.DIRECTIVE_KEY = 'flex-align';
          _this44.styleCache = flexAlignCache;

          _this44.init();

          return _this44;
        }

        return FlexAlignDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      FlexAlignDirective.ɵfac = function FlexAlignDirective_Factory(t) {
        return new (t || FlexAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FlexAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      FlexAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FlexAlignDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      FlexAlignDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: FlexAlignStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexAlignDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: FlexAlignStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, null);
      })();
      /** @type {?} */


      var flexAlignCache = new Map();

      var DefaultFlexAlignDirective = /*#__PURE__*/function (_FlexAlignDirective) {
        _inherits(DefaultFlexAlignDirective, _FlexAlignDirective);

        var _super26 = _createSuper(DefaultFlexAlignDirective);

        function DefaultFlexAlignDirective() {
          var _this45;

          _classCallCheck(this, DefaultFlexAlignDirective);

          _this45 = _super26.apply(this, arguments);
          _this45.inputs = inputs$5;
          return _this45;
        }

        return DefaultFlexAlignDirective;
      }(FlexAlignDirective);

      DefaultFlexAlignDirective.ɵfac = function DefaultFlexAlignDirective_Factory(t) {
        return ɵDefaultFlexAlignDirective_BaseFactory(t || DefaultFlexAlignDirective);
      };

      DefaultFlexAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultFlexAlignDirective,
        selectors: [["", "fxFlexAlign", ""], ["", "fxFlexAlign.xs", ""], ["", "fxFlexAlign.sm", ""], ["", "fxFlexAlign.md", ""], ["", "fxFlexAlign.lg", ""], ["", "fxFlexAlign.xl", ""], ["", "fxFlexAlign.lt-sm", ""], ["", "fxFlexAlign.lt-md", ""], ["", "fxFlexAlign.lt-lg", ""], ["", "fxFlexAlign.lt-xl", ""], ["", "fxFlexAlign.gt-xs", ""], ["", "fxFlexAlign.gt-sm", ""], ["", "fxFlexAlign.gt-md", ""], ["", "fxFlexAlign.gt-lg", ""]],
        inputs: {
          fxFlexAlign: "fxFlexAlign",
          "fxFlexAlign.xs": "fxFlexAlign.xs",
          "fxFlexAlign.sm": "fxFlexAlign.sm",
          "fxFlexAlign.md": "fxFlexAlign.md",
          "fxFlexAlign.lg": "fxFlexAlign.lg",
          "fxFlexAlign.xl": "fxFlexAlign.xl",
          "fxFlexAlign.lt-sm": "fxFlexAlign.lt-sm",
          "fxFlexAlign.lt-md": "fxFlexAlign.lt-md",
          "fxFlexAlign.lt-lg": "fxFlexAlign.lt-lg",
          "fxFlexAlign.lt-xl": "fxFlexAlign.lt-xl",
          "fxFlexAlign.gt-xs": "fxFlexAlign.gt-xs",
          "fxFlexAlign.gt-sm": "fxFlexAlign.gt-sm",
          "fxFlexAlign.gt-md": "fxFlexAlign.gt-md",
          "fxFlexAlign.gt-lg": "fxFlexAlign.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultFlexAlignDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultFlexAlignDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultFlexAlignDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$5,
            inputs: inputs$5
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/flex-fill/flex-fill.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var FLEX_FILL_CSS = {
        'margin': 0,
        'width': '100%',
        'height': '100%',
        'min-width': '100%',
        'min-height': '100%'
      };

      var FlexFillStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_13) {
        _inherits(FlexFillStyleBuilder, _angular_flex_layout_13);

        var _super27 = _createSuper(FlexFillStyleBuilder);

        function FlexFillStyleBuilder() {
          _classCallCheck(this, FlexFillStyleBuilder);

          return _super27.apply(this, arguments);
        }

        _createClass(FlexFillStyleBuilder, [{
          key: "buildStyles",

          /**
           * @param {?} _input
           * @return {?}
           */
          value: function buildStyles(_input) {
            return FLEX_FILL_CSS;
          }
        }]);

        return FlexFillStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      FlexFillStyleBuilder.ɵfac = function FlexFillStyleBuilder_Factory(t) {
        return ɵFlexFillStyleBuilder_BaseFactory(t || FlexFillStyleBuilder);
      };
      /** @nocollapse */


      FlexFillStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function FlexFillStyleBuilder_Factory() {
          return new FlexFillStyleBuilder();
        },
        token: FlexFillStyleBuilder,
        providedIn: "root"
      });

      var ɵFlexFillStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FlexFillStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexFillStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /**
       * 'fxFill' flexbox styling directive
       *  Maximizes width and height of element in a layout container
       *
       *  NOTE: fxFill is NOT responsive API!!
       */


      var FlexFillDirective = /*#__PURE__*/function (_angular_flex_layout_14) {
        _inherits(FlexFillDirective, _angular_flex_layout_14);

        var _super28 = _createSuper(FlexFillDirective);

        /**
         * @param {?} elRef
         * @param {?} styleUtils
         * @param {?} styleBuilder
         * @param {?} marshal
         */
        function FlexFillDirective(elRef, styleUtils, styleBuilder, marshal) {
          var _this46;

          _classCallCheck(this, FlexFillDirective);

          _this46 = _super28.call(this, elRef, styleBuilder, styleUtils, marshal);
          _this46.styleCache = flexFillCache;

          _this46.addStyles('');

          return _this46;
        }

        return FlexFillDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      FlexFillDirective.ɵfac = function FlexFillDirective_Factory(t) {
        return new (t || FlexFillDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FlexFillStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      FlexFillDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FlexFillDirective,
        selectors: [["", "fxFill", ""], ["", "fxFlexFill", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      FlexFillDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: FlexFillStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexFillDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "[fxFill], [fxFlexFill]"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: FlexFillStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, null);
      })();
      /** @type {?} */


      var flexFillCache = new Map();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/layout-align/layout-align.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var LayoutAlignStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_15) {
        _inherits(LayoutAlignStyleBuilder, _angular_flex_layout_15);

        var _super29 = _createSuper(LayoutAlignStyleBuilder);

        function LayoutAlignStyleBuilder() {
          _classCallCheck(this, LayoutAlignStyleBuilder);

          return _super29.apply(this, arguments);
        }

        _createClass(LayoutAlignStyleBuilder, [{
          key: "buildStyles",

          /**
           * @param {?} align
           * @param {?} parent
           * @return {?}
           */
          value: function buildStyles(align, parent) {
            /** @type {?} */
            var css = {};

            var _align$split = align.split(' '),
                _align$split2 = _slicedToArray(_align$split, 2),
                mainAxis = _align$split2[0],
                crossAxis = _align$split2[1]; // Main axis


            switch (mainAxis) {
              case 'center':
                css['justify-content'] = 'center';
                break;

              case 'space-around':
                css['justify-content'] = 'space-around';
                break;

              case 'space-between':
                css['justify-content'] = 'space-between';
                break;

              case 'space-evenly':
                css['justify-content'] = 'space-evenly';
                break;

              case 'end':
              case 'flex-end':
                css['justify-content'] = 'flex-end';
                break;

              case 'start':
              case 'flex-start':
              default:
                css['justify-content'] = 'flex-start'; // default main axis

                break;
            } // Cross-axis


            switch (crossAxis) {
              case 'start':
              case 'flex-start':
                css['align-items'] = css['align-content'] = 'flex-start';
                break;

              case 'center':
                css['align-items'] = css['align-content'] = 'center';
                break;

              case 'end':
              case 'flex-end':
                css['align-items'] = css['align-content'] = 'flex-end';
                break;

              case 'space-between':
                css['align-content'] = 'space-between';
                css['align-items'] = 'stretch';
                break;

              case 'space-around':
                css['align-content'] = 'space-around';
                css['align-items'] = 'stretch';
                break;

              case 'baseline':
                css['align-content'] = 'stretch';
                css['align-items'] = 'baseline';
                break;

              case 'stretch':
              default:
                // 'stretch'
                css['align-items'] = css['align-content'] = 'stretch'; // default cross axis

                break;
            }

            return (
              /** @type {?} */
              extendObject(css, {
                'display': parent.inline ? 'inline-flex' : 'flex',
                'flex-direction': parent.layout,
                'box-sizing': 'border-box',
                'max-width': crossAxis === 'stretch' ? !isFlowHorizontal(parent.layout) ? '100%' : null : null,
                'max-height': crossAxis === 'stretch' ? isFlowHorizontal(parent.layout) ? '100%' : null : null
              })
            );
          }
        }]);

        return LayoutAlignStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      LayoutAlignStyleBuilder.ɵfac = function LayoutAlignStyleBuilder_Factory(t) {
        return ɵLayoutAlignStyleBuilder_BaseFactory(t || LayoutAlignStyleBuilder);
      };
      /** @nocollapse */


      LayoutAlignStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function LayoutAlignStyleBuilder_Factory() {
          return new LayoutAlignStyleBuilder();
        },
        token: LayoutAlignStyleBuilder,
        providedIn: "root"
      });

      var ɵLayoutAlignStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](LayoutAlignStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutAlignStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /** @type {?} */


      var inputs$6 = ['fxLayoutAlign', 'fxLayoutAlign.xs', 'fxLayoutAlign.sm', 'fxLayoutAlign.md', 'fxLayoutAlign.lg', 'fxLayoutAlign.xl', 'fxLayoutAlign.lt-sm', 'fxLayoutAlign.lt-md', 'fxLayoutAlign.lt-lg', 'fxLayoutAlign.lt-xl', 'fxLayoutAlign.gt-xs', 'fxLayoutAlign.gt-sm', 'fxLayoutAlign.gt-md', 'fxLayoutAlign.gt-lg'];
      /** @type {?} */

      var selector$6 = "\n  [fxLayoutAlign], [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md],\n  [fxLayoutAlign.lg], [fxLayoutAlign.xl], [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md],\n  [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl], [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm],\n  [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]\n";
      /**
       * 'layout-align' flexbox styling directive
       *  Defines positioning of child elements along main and cross axis in a layout container
       *  Optional values: {main-axis} values or {main-axis cross-axis} value pairs
       *
       * @see https://css-tricks.com/almanac/properties/j/justify-content/
       * @see https://css-tricks.com/almanac/properties/a/align-items/
       * @see https://css-tricks.com/almanac/properties/a/align-content/
       */

      var LayoutAlignDirective = /*#__PURE__*/function (_angular_flex_layout_16) {
        _inherits(LayoutAlignDirective, _angular_flex_layout_16);

        var _super30 = _createSuper(LayoutAlignDirective);

        // default inline value

        /**
         * @param {?} elRef
         * @param {?} styleUtils
         * @param {?} styleBuilder
         * @param {?} marshal
         */
        function LayoutAlignDirective(elRef, styleUtils, styleBuilder, marshal) {
          var _this47;

          _classCallCheck(this, LayoutAlignDirective);

          _this47 = _super30.call(this, elRef, styleBuilder, styleUtils, marshal);
          _this47.DIRECTIVE_KEY = 'layout-align';
          _this47.layout = 'row'; // default flex-direction
          // default flex-direction

          _this47.inline = false; // default inline value

          _this47.init();

          _this47.marshal.trackValue(_this47.nativeElement, 'layout').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this47.destroySubject)).subscribe(_this47.onLayoutChange.bind(_assertThisInitialized(_this47)));

          return _this47;
        } // *********************************************
        // Protected methods
        // *********************************************

        /**
         *
         * @protected
         * @param {?} value
         * @return {?}
         */


        _createClass(LayoutAlignDirective, [{
          key: "updateWithValue",
          value: function updateWithValue(value) {
            /** @type {?} */
            var layout = this.layout || 'row';
            /** @type {?} */

            var inline = this.inline;

            if (layout === 'row' && inline) {
              this.styleCache = layoutAlignHorizontalInlineCache;
            } else if (layout === 'row' && !inline) {
              this.styleCache = layoutAlignHorizontalCache;
            } else if (layout === 'row-reverse' && inline) {
              this.styleCache = layoutAlignHorizontalRevInlineCache;
            } else if (layout === 'row-reverse' && !inline) {
              this.styleCache = layoutAlignHorizontalRevCache;
            } else if (layout === 'column' && inline) {
              this.styleCache = layoutAlignVerticalInlineCache;
            } else if (layout === 'column' && !inline) {
              this.styleCache = layoutAlignVerticalCache;
            } else if (layout === 'column-reverse' && inline) {
              this.styleCache = layoutAlignVerticalRevInlineCache;
            } else if (layout === 'column-reverse' && !inline) {
              this.styleCache = layoutAlignVerticalRevCache;
            }

            this.addStyles(value, {
              layout: layout,
              inline: inline
            });
          }
          /**
           * Cache the parent container 'flex-direction' and update the 'flex' styles
           * @protected
           * @param {?} matcher
           * @return {?}
           */

        }, {
          key: "onLayoutChange",
          value: function onLayoutChange(matcher) {
            var _this48 = this;

            /** @type {?} */
            var layoutKeys = matcher.value.split(' ');
            this.layout = layoutKeys[0];
            this.inline = matcher.value.includes('inline');

            if (!LAYOUT_VALUES.find(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x === _this48.layout;
            })) {
              this.layout = 'row';
            }

            this.triggerUpdate();
          }
        }]);

        return LayoutAlignDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      LayoutAlignDirective.ɵfac = function LayoutAlignDirective_Factory(t) {
        return new (t || LayoutAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LayoutAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      LayoutAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: LayoutAlignDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      LayoutAlignDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: LayoutAlignStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutAlignDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: LayoutAlignStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, null);
      })();

      var DefaultLayoutAlignDirective = /*#__PURE__*/function (_LayoutAlignDirective) {
        _inherits(DefaultLayoutAlignDirective, _LayoutAlignDirective);

        var _super31 = _createSuper(DefaultLayoutAlignDirective);

        function DefaultLayoutAlignDirective() {
          var _this49;

          _classCallCheck(this, DefaultLayoutAlignDirective);

          _this49 = _super31.apply(this, arguments);
          _this49.inputs = inputs$6;
          return _this49;
        }

        return DefaultLayoutAlignDirective;
      }(LayoutAlignDirective);

      DefaultLayoutAlignDirective.ɵfac = function DefaultLayoutAlignDirective_Factory(t) {
        return ɵDefaultLayoutAlignDirective_BaseFactory(t || DefaultLayoutAlignDirective);
      };

      DefaultLayoutAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultLayoutAlignDirective,
        selectors: [["", "fxLayoutAlign", ""], ["", "fxLayoutAlign.xs", ""], ["", "fxLayoutAlign.sm", ""], ["", "fxLayoutAlign.md", ""], ["", "fxLayoutAlign.lg", ""], ["", "fxLayoutAlign.xl", ""], ["", "fxLayoutAlign.lt-sm", ""], ["", "fxLayoutAlign.lt-md", ""], ["", "fxLayoutAlign.lt-lg", ""], ["", "fxLayoutAlign.lt-xl", ""], ["", "fxLayoutAlign.gt-xs", ""], ["", "fxLayoutAlign.gt-sm", ""], ["", "fxLayoutAlign.gt-md", ""], ["", "fxLayoutAlign.gt-lg", ""]],
        inputs: {
          fxLayoutAlign: "fxLayoutAlign",
          "fxLayoutAlign.xs": "fxLayoutAlign.xs",
          "fxLayoutAlign.sm": "fxLayoutAlign.sm",
          "fxLayoutAlign.md": "fxLayoutAlign.md",
          "fxLayoutAlign.lg": "fxLayoutAlign.lg",
          "fxLayoutAlign.xl": "fxLayoutAlign.xl",
          "fxLayoutAlign.lt-sm": "fxLayoutAlign.lt-sm",
          "fxLayoutAlign.lt-md": "fxLayoutAlign.lt-md",
          "fxLayoutAlign.lt-lg": "fxLayoutAlign.lt-lg",
          "fxLayoutAlign.lt-xl": "fxLayoutAlign.lt-xl",
          "fxLayoutAlign.gt-xs": "fxLayoutAlign.gt-xs",
          "fxLayoutAlign.gt-sm": "fxLayoutAlign.gt-sm",
          "fxLayoutAlign.gt-md": "fxLayoutAlign.gt-md",
          "fxLayoutAlign.gt-lg": "fxLayoutAlign.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultLayoutAlignDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultLayoutAlignDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultLayoutAlignDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$6,
            inputs: inputs$6
          }]
        }], null, null);
      })();
      /** @type {?} */


      var layoutAlignHorizontalCache = new Map();
      /** @type {?} */

      var layoutAlignVerticalCache = new Map();
      /** @type {?} */

      var layoutAlignHorizontalRevCache = new Map();
      /** @type {?} */

      var layoutAlignVerticalRevCache = new Map();
      /** @type {?} */

      var layoutAlignHorizontalInlineCache = new Map();
      /** @type {?} */

      var layoutAlignVerticalInlineCache = new Map();
      /** @type {?} */

      var layoutAlignHorizontalRevInlineCache = new Map();
      /** @type {?} */

      var layoutAlignVerticalRevInlineCache = new Map();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */

      var ALL_DIRECTIVES = [DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective, DefaultFlexOrderDirective, DefaultFlexOffsetDirective, FlexFillDirective, DefaultFlexAlignDirective, DefaultFlexDirective];
      /**
       * *****************************************************************
       * Define module for the Flex API
       * *****************************************************************
       */

      var FlexModule = function FlexModule() {
        _classCallCheck(this, FlexModule);
      };

      FlexModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FlexModule
      });
      FlexModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FlexModule_Factory(t) {
          return new (t || FlexModule)();
        },
        imports: [[_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FlexModule, {
          declarations: function declarations() {
            return [DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective, DefaultFlexOrderDirective, DefaultFlexOffsetDirective, FlexFillDirective, DefaultFlexAlignDirective, DefaultFlexDirective];
          },
          imports: function imports() {
            return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]];
          },
          exports: function exports() {
            return [DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective, DefaultFlexOrderDirective, DefaultFlexOffsetDirective, FlexFillDirective, DefaultFlexAlignDirective, DefaultFlexDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
            declarations: [].concat(ALL_DIRECTIVES),
            exports: [].concat(ALL_DIRECTIVES)
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: flex/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: flex/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=flex.js.map

      /***/

    },

    /***/
    "Xqdy":
    /*!**************************************************************************************!*\
      !*** ./src/app/shared/component/sidebar/sidebarkaprodi/sidebarkaprodi.component.css ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function Xqdy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host .mat-icon {\r\n  vertical-align: middle;\r\n  margin-right: 20px;\r\n}\r\n\r\n.profile-card {\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n\r\n.profile-card img {\r\n  width: 100px;\r\n  height: 100px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXJrYXByb2RpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic2lkZWJhcmthcHJvZGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IC5tYXQtaWNvbiB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1jYXJkIGltZyB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59Il19 */";
      /***/
    },

    /***/
    "YUcS":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js ***!
      \*******************************************************************************/

    /*! exports provided: ɵMatchMedia, ɵMockMatchMedia, ɵMockMatchMediaProvider, CoreModule, removeStyles, BROWSER_PROVIDER, CLASS_NAME, MediaChange, StylesheetMap, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, mergeAlias, BaseDirective2, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MediaObserver, MediaTrigger, sortDescendingPriority, sortAscendingPriority, coerceArray, StyleUtils, StyleBuilder, validateBasis, MediaMarshaller, BREAKPOINT_PRINT, PrintHook, ExtendedModule, ClassDirective, DefaultClassDirective, ImgSrcStyleBuilder, ImgSrcDirective, DefaultImgSrcDirective, ShowHideStyleBuilder, ShowHideDirective, DefaultShowHideDirective, StyleDirective, DefaultStyleDirective, FlexModule, FlexStyleBuilder, FlexDirective, DefaultFlexDirective, FlexAlignStyleBuilder, FlexAlignDirective, DefaultFlexAlignDirective, FlexFillStyleBuilder, FlexFillDirective, FlexOffsetStyleBuilder, FlexOffsetDirective, DefaultFlexOffsetDirective, FlexOrderStyleBuilder, FlexOrderDirective, DefaultFlexOrderDirective, LayoutStyleBuilder, LayoutDirective, DefaultLayoutDirective, LayoutAlignStyleBuilder, LayoutAlignDirective, DefaultLayoutAlignDirective, LayoutGapStyleBuilder, LayoutGapDirective, DefaultLayoutGapDirective, ɵgrid_privatef, ɵgrid_privatee, ɵgrid_privated, ɵgrid_privatei, ɵgrid_privateh, ɵgrid_privateg, ɵgrid_privatel, ɵgrid_privatek, ɵgrid_privatej, ɵgrid_privateo, ɵgrid_privaten, ɵgrid_privatem, ɵgrid_privater, ɵgrid_privateq, ɵgrid_privatep, ɵgrid_privateu, ɵgrid_privatet, ɵgrid_privates, ɵgrid_privatex, ɵgrid_privatew, ɵgrid_privatev, ɵgrid_privateba, ɵgrid_privatez, ɵgrid_privatey, ɵgrid_privatec, ɵgrid_privateb, ɵgrid_privatea, ɵgrid_privatebd, ɵgrid_privatebc, ɵgrid_privatebb, ɵgrid_privatebg, ɵgrid_privatebf, ɵgrid_privatebe, GridModule, VERSION, FlexLayoutModule */

    /***/
    function YUcS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VERSION", function () {
        return VERSION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexLayoutModule", function () {
        return FlexLayoutModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/core */
      "pD6V");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵMatchMedia", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ɵMatchMedia"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵMockMatchMedia", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ɵMockMatchMedia"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵMockMatchMediaProvider", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ɵMockMatchMediaProvider"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "removeStyles", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["removeStyles"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BROWSER_PROVIDER", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BROWSER_PROVIDER"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CLASS_NAME"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MediaChange", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaChange"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StylesheetMap", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StylesheetMap"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONFIG"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LAYOUT_CONFIG", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "mergeAlias", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["mergeAlias"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BaseDirective2", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_BREAKPOINTS", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_BREAKPOINTS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ScreenTypes", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ScreenTypes"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ORIENTATION_BREAKPOINTS", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ORIENTATION_BREAKPOINTS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BreakPointRegistry", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BreakPointRegistry"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINTS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MediaObserver", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MediaTrigger", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaTrigger"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "sortDescendingPriority", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["sortDescendingPriority"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "sortAscendingPriority", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["sortAscendingPriority"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["coerceArray"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StyleUtils", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StyleBuilder", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "validateBasis", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["validateBasis"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MediaMarshaller", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BREAKPOINT_PRINT", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT_PRINT"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PrintHook", function () {
        return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["PrintHook"];
      });
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ExtendedModule", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ClassDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ClassDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultClassDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ImgSrcStyleBuilder", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ImgSrcStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ImgSrcDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultImgSrcDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultImgSrcDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ShowHideStyleBuilder", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ShowHideStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ShowHideDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultShowHideDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultShowHideDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StyleDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["StyleDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultStyleDirective", function () {
        return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultStyleDirective"];
      });
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexModule", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexAlignStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexAlignStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexAlignDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexAlignDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexAlignDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexAlignDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexFillStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexFillDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexOffsetStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOffsetStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexOffsetDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOffsetDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexOffsetDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexOffsetDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexOrderStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOrderStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlexOrderDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOrderDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultFlexOrderDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexOrderDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutAlignStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutAlignStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutAlignDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutAlignDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutAlignDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutGapStyleBuilder", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutGapStyleBuilder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutGapDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutGapDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutGapDirective", function () {
        return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"];
      });
      /* harmony import */


      var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/grid */
      "zpSk");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatef", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatef"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatee", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatee"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privated", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privated"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatei", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatei"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateh", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateh"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateg", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateg"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatel", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatel"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatek", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatek"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatej", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatej"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateo", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateo"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privaten", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privaten"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatem", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatem"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privater", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privater"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateq", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateq"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatep", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatep"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateu", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateu"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatet", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatet"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privates", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privates"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatex", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatex"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatew", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatew"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatev", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatev"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateba", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateba"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatez", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatez"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatey", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatey"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatec", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatec"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateb", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatea", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatea"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebd", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebd"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebc", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebc"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebb", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebg", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebg"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebf", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebf"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebe", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebe"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GridModule", function () {
        return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"];
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: version.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Current version of Angular Flex-Layout.
       * @type {?}
       */


      var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('11.0.0-beta.33');
      /**
       * @fileoverview added by tsickle
       * Generated from: module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * FlexLayoutModule -- the main import for all utilities in the Angular Layout library
       * * Will automatically provide Flex, Grid, and Extended modules for use in the application
       * * Can be configured using the static withConfig method, options viewable on the Wiki's
       *   Configuration page
       */

      var FlexLayoutModule = /*#__PURE__*/function () {
        /**
         * @param {?} serverModuleLoaded
         * @param {?} platformId
         */
        function FlexLayoutModule(serverModuleLoaded, platformId) {
          _classCallCheck(this, FlexLayoutModule);

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(platformId) && !serverModuleLoaded) {
            console.warn('Warning: Flex Layout loaded on the server without FlexLayoutServerModule');
          }
        }
        /**
         * Initialize the FlexLayoutModule with a set of config options,
         * which sets the corresponding tokens accordingly
         * @param {?} configOptions
         * @param {?=} breakpoints
         * @return {?}
         */


        _createClass(FlexLayoutModule, null, [{
          key: "withConfig",
          value: function withConfig(configOptions) {
            var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            return {
              ngModule: FlexLayoutModule,
              providers: configOptions.serverLoaded ? [{
                provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"],
                useValue: Object.assign(Object.assign({}, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONFIG"]), configOptions)
              }, {
                provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"],
                useValue: breakpoints,
                multi: true
              }, {
                provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"],
                useValue: true
              }] : [{
                provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"],
                useValue: Object.assign(Object.assign({}, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONFIG"]), configOptions)
              }, {
                provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"],
                useValue: breakpoints,
                multi: true
              }]
            };
          }
        }]);

        return FlexLayoutModule;
      }();

      FlexLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FlexLayoutModule
      });
      FlexLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FlexLayoutModule_Factory(t) {
          return new (t || FlexLayoutModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
        },
        imports: [[_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]]
      });
      /** @nocollapse */

      FlexLayoutModule.ctorParameters = function () {
        return [{
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FlexLayoutModule, {
          imports: function imports() {
            return [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]];
          },
          exports: function exports() {
            return [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexLayoutModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]],
            exports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]]
          }]
        }], function () {
          return [{
            type: Boolean,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=flex-layout.js.map

      /***/

    },

    /***/
    "f0Cb":
    /*!*************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js ***!
      \*************************************************************************/

    /*! exports provided: MatDivider, MatDividerModule */

    /***/
    function f0Cb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDivider", function () {
        return MatDivider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDividerModule", function () {
        return MatDividerModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatDivider = /*#__PURE__*/function () {
        function MatDivider() {
          _classCallCheck(this, MatDivider);

          this._vertical = false;
          this._inset = false;
        }
        /** Whether the divider is vertically aligned. */


        _createClass(MatDivider, [{
          key: "vertical",
          get: function get() {
            return this._vertical;
          },
          set: function set(value) {
            this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /** Whether the divider is an inset divider. */

        }, {
          key: "inset",
          get: function get() {
            return this._inset;
          },
          set: function set(value) {
            this._inset = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
        }]);

        return MatDivider;
      }();

      MatDivider.ɵfac = function MatDivider_Factory(t) {
        return new (t || MatDivider)();
      };

      MatDivider.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatDivider,
        selectors: [["mat-divider"]],
        hostAttrs: ["role", "separator", 1, "mat-divider"],
        hostVars: 7,
        hostBindings: function MatDivider_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", ctx.vertical ? "vertical" : "horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
          }
        },
        inputs: {
          vertical: "vertical",
          inset: "inset"
        },
        decls: 0,
        vars: 0,
        template: function MatDivider_Template(rf, ctx) {},
        styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });
      MatDivider.propDecorators = {
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDivider, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-divider',
            host: {
              'role': 'separator',
              '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
              '[class.mat-divider-vertical]': 'vertical',
              '[class.mat-divider-horizontal]': '!vertical',
              '[class.mat-divider-inset]': 'inset',
              'class': 'mat-divider'
            },
            template: '',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"]
          }]
        }], function () {
          return [];
        }, {
          vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          inset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatDividerModule = function MatDividerModule() {
        _classCallCheck(this, MatDividerModule);
      };

      MatDividerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatDividerModule
      });
      MatDividerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatDividerModule_Factory(t) {
          return new (t || MatDividerModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatDividerModule, {
          declarations: function declarations() {
            return [MatDivider];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatDivider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDividerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            exports: [MatDivider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            declarations: [MatDivider]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=divider.js.map

      /***/

    },

    /***/
    "ghxU":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/header/header.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ghxU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row >\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n      <span fxLayout=\"row\" fxLayoutAlign=\"center center \" style=\"color:yellow\">SIMPPL</span>\r\n      <h3 fxLayout=\"row\" fxLayoutAlign=\"center center\">{{peran}}</h3>  \r\n      <ul fxLayout=\"row\" fxLayoutGap=\"20px\">\r\n        <li>\r\n          <button mat-icon-button (click)=\"toggleSideBar()\">\r\n            <mat-icon>menu</mat-icon>\r\n          </button>\r\n          <button mat-raised-button color=\"primary\" (click)=\"logout()\"  >\r\n            Log Out\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>";
      /***/
    },

    /***/
    "gv3B":
    /*!**********************************************************************************!*\
      !*** ./src/app/shared/component/sidebar/sidebaradmin/sidebaradmin.component.css ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function gv3B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host .mat-icon {\r\n  vertical-align: middle;\r\n  margin-right: 20px;\r\n}\r\n\r\n.profile-card {\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n\r\n.profile-card img {\r\n  width: 100px;\r\n  height: 100px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXJhZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNpZGViYXJhZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgLm1hdC1pY29uIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmQgaW1nIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "jr1D":
    /*!**********************************************************************************!*\
      !*** ./src/app/shared/component/sidebar/sidebardosen/sidebardosen.component.css ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function jr1D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host .mat-icon {\r\n  vertical-align: middle;\r\n  margin-right: 20px;\r\n}\r\n\r\n.profile-card {\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n\r\n.profile-card img {\r\n  width: 100px;\r\n  height: 100px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXJkb3Nlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNpZGViYXJkb3Nlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgLm1hdC1pY29uIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmQgaW1nIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "lIYJ":
    /*!***************************************************************!*\
      !*** ./src/app/shared/component/sidebar/sidebar.component.ts ***!
      \***************************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function lIYJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "N5Qc");
      /* harmony import */


      var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidebar.component.css */
      "WHOE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent() {
          _classCallCheck(this, SidebarComponent);
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ctorParameters = function () {
        return [];
      };

      SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sidebar',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SidebarComponent);
      /***/
    },

    /***/
    "pD6V":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/core.js ***!
      \************************************************************************/

    /*! exports provided: ɵMatchMedia, ɵMockMatchMedia, ɵMockMatchMediaProvider, CoreModule, removeStyles, BROWSER_PROVIDER, CLASS_NAME, MediaChange, StylesheetMap, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, mergeAlias, BaseDirective2, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MediaObserver, MediaTrigger, sortDescendingPriority, sortAscendingPriority, coerceArray, StyleUtils, StyleBuilder, validateBasis, MediaMarshaller, BREAKPOINT_PRINT, PrintHook */

    /***/
    function pD6V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵMatchMedia", function () {
        return MatchMedia;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵMockMatchMedia", function () {
        return MockMatchMedia;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵMockMatchMediaProvider", function () {
        return MockMatchMediaProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "removeStyles", function () {
        return removeStyles;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BROWSER_PROVIDER", function () {
        return BROWSER_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function () {
        return CLASS_NAME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaChange", function () {
        return MediaChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StylesheetMap", function () {
        return StylesheetMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function () {
        return DEFAULT_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LAYOUT_CONFIG", function () {
        return LAYOUT_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN", function () {
        return SERVER_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function () {
        return BREAKPOINT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mergeAlias", function () {
        return mergeAlias;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseDirective2", function () {
        return BaseDirective2;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_BREAKPOINTS", function () {
        return DEFAULT_BREAKPOINTS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScreenTypes", function () {
        return ScreenTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ORIENTATION_BREAKPOINTS", function () {
        return ORIENTATION_BREAKPOINTS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreakPointRegistry", function () {
        return BreakPointRegistry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function () {
        return BREAKPOINTS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaObserver", function () {
        return MediaObserver;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaTrigger", function () {
        return MediaTrigger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sortDescendingPriority", function () {
        return sortDescendingPriority;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sortAscendingPriority", function () {
        return sortAscendingPriority;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
        return coerceArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StyleUtils", function () {
        return StyleUtils;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StyleBuilder", function () {
        return StyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateBasis", function () {
        return validateBasis;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaMarshaller", function () {
        return MediaMarshaller;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BREAKPOINT_PRINT", function () {
        return BREAKPOINT_PRINT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrintHook", function () {
        return PrintHook;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/browser-provider.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Find all of the server-generated stylings, if any, and remove them
       * This will be in the form of inline classes and the style block in the
       * head of the DOM
       * @param {?} _document
       * @param {?} platformId
       * @return {?}
       */


      function removeStyles(_document, platformId) {
        return (
          /**
          * @return {?}
          */
          function () {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
              /** @type {?} */
              var elements = Array.from(_document.querySelectorAll("[class*=".concat(CLASS_NAME, "]"))); // RegExp constructor should only be used if passing a variable to the constructor.
              // When using static regular expression it is more performant to use reg exp literal.
              // This is also needed to provide Safari 9 compatibility, please see
              // https://stackoverflow.com/questions/37919802 for more discussion.

              /** @type {?} */

              var classRegex = /\bflex-layout-.+?\b/g;
              elements.forEach(
              /**
              * @param {?} el
              * @return {?}
              */
              function (el) {
                el.classList.contains("".concat(CLASS_NAME, "ssr")) && el.parentNode ? el.parentNode.removeChild(el) : el.className.replace(classRegex, '');
              });
            }
          }
        );
      }
      /**
       *  Provider to remove SSR styles on the browser
       * @type {?}
       */


      var BROWSER_PROVIDER = {
        provide:
        /** @type {?} */
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"],
        useFactory: removeStyles,
        deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]],
        multi: true
      };
      /** @type {?} */

      var CLASS_NAME = 'flex-layout-';
      /**
       * @fileoverview added by tsickle
       * Generated from: core/module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * *****************************************************************
       * Define module for common Angular Layout utilities
       * *****************************************************************
       */

      var CoreModule = function CoreModule() {
        _classCallCheck(this, CoreModule);
      };

      CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CoreModule
      });
      CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CoreModule_Factory(t) {
          return new (t || CoreModule)();
        },
        providers: [BROWSER_PROVIDER]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            providers: [BROWSER_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-change.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Class instances emitted [to observers] for each mql notification
       */


      var MediaChange = /*#__PURE__*/function () {
        /**
         * @param {?=} matches whether the mediaQuery is currently activated
         * @param {?=} mediaQuery e.g. (min-width: 600px) and (max-width: 959px)
         * @param {?=} mqAlias e.g. gt-sm, md, gt-lg
         * @param {?=} suffix e.g. GtSM, Md, GtLg
         * @param {?=} priority the priority of activation for the given breakpoint
         */
        function MediaChange() {
          var matches = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var mediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
          var mqAlias = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var suffix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
          var priority = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

          _classCallCheck(this, MediaChange);

          this.matches = matches;
          this.mediaQuery = mediaQuery;
          this.mqAlias = mqAlias;
          this.suffix = suffix;
          this.priority = priority;
          this.property = '';
        }
        /**
         * Create an exact copy of the MediaChange
         * @return {?}
         */


        _createClass(MediaChange, [{
          key: "clone",
          value: function clone() {
            return new MediaChange(this.matches, this.mediaQuery, this.mqAlias, this.suffix);
          }
        }]);

        return MediaChange;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/stylesheet-map/stylesheet-map.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Utility to emulate a CSS stylesheet
       *
       * This utility class stores all of the styles for a given HTML element
       * as a readonly `stylesheet` map.
       */


      var StylesheetMap = /*#__PURE__*/function () {
        function StylesheetMap() {
          _classCallCheck(this, StylesheetMap);

          this.stylesheet = new Map();
        }
        /**
         * Add an individual style to an HTML element
         * @param {?} element
         * @param {?} style
         * @param {?} value
         * @return {?}
         */


        _createClass(StylesheetMap, [{
          key: "addStyleToElement",
          value: function addStyleToElement(element, style, value) {
            /** @type {?} */
            var stylesheet = this.stylesheet.get(element);

            if (stylesheet) {
              stylesheet.set(style, value);
            } else {
              this.stylesheet.set(element, new Map([[style, value]]));
            }
          }
          /**
           * Clear the virtual stylesheet
           * @return {?}
           */

        }, {
          key: "clearStyles",
          value: function clearStyles() {
            this.stylesheet.clear();
          }
          /**
           * Retrieve a given style for an HTML element
           * @param {?} el
           * @param {?} styleName
           * @return {?}
           */

        }, {
          key: "getStyleForElement",
          value: function getStyleForElement(el, styleName) {
            /** @type {?} */
            var styles = this.stylesheet.get(el);
            /** @type {?} */

            var value = '';

            if (styles) {
              /** @type {?} */
              var style = styles.get(styleName);

              if (typeof style === 'number' || typeof style === 'string') {
                value = style + '';
              }
            }

            return value;
          }
        }]);

        return StylesheetMap;
      }();

      StylesheetMap.ɵfac = function StylesheetMap_Factory(t) {
        return new (t || StylesheetMap)();
      };
      /** @nocollapse */


      StylesheetMap.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function StylesheetMap_Factory() {
          return new StylesheetMap();
        },
        token: StylesheetMap,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StylesheetMap, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/stylesheet-map/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/tokens/library-config.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_CONFIG = {
        addFlexToParent: true,
        addOrientationBps: false,
        disableDefaultBps: false,
        disableVendorPrefixes: false,
        serverLoaded: false,
        useColumnBasisZero: true,
        printWithBreakpoints: [],
        mediaTriggerAutoRestore: true,
        ssrObserveBreakpoints: []
      };
      /** @type {?} */

      var LAYOUT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Flex Layout token, config options for the library', {
        providedIn: 'root',
        factory:
        /**
        * @return {?}
        */
        function factory() {
          return DEFAULT_CONFIG;
        }
      });
      /**
       * @fileoverview added by tsickle
       * Generated from: core/tokens/server-token.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Token that is provided to tell whether the FlexLayoutServerModule
       * has been included in the bundle
       *
       * NOTE: This can be manually provided to disable styles when using SSR
       * @type {?}
       */

      var SERVER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('FlexLayoutServerLoaded', {
        providedIn: 'root',
        factory:
        /**
        * @return {?}
        */
        function factory() {
          return false;
        }
      });
      /**
       * @fileoverview added by tsickle
       * Generated from: core/tokens/breakpoint-token.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */

      var BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Flex Layout token, collect all breakpoints into one provider', {
        providedIn: 'root',
        factory:
        /**
        * @return {?}
        */
        function factory() {
          return null;
        }
      });
      /**
       * @fileoverview added by tsickle
       * Generated from: core/tokens/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/add-alias.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * For the specified MediaChange, make sure it contains the breakpoint alias
       * and suffix (if available).
       * @param {?} dest
       * @param {?} source
       * @return {?}
       */

      function mergeAlias(dest, source) {
        dest = dest ? dest.clone() : new MediaChange();

        if (source) {
          dest.mqAlias = source.alias;
          dest.mediaQuery = source.mediaQuery;
          dest.suffix =
          /** @type {?} */
          source.suffix;
          dest.priority =
          /** @type {?} */
          source.priority;
        }

        return dest;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: utils/layout-validator.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       * @type {?}
       */


      var INLINE = 'inline';
      /** @type {?} */

      var LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
      /**
       * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
       * @param {?} value
       * @return {?}
       */

      function buildLayoutCSS(value) {
        var _validateValue5 = validateValue(value),
            _validateValue6 = _slicedToArray(_validateValue5, 3),
            direction = _validateValue6[0],
            wrap = _validateValue6[1],
            isInline = _validateValue6[2];

        return buildCSS(direction, wrap, isInline);
      }
      /**
       * Validate the value to be one of the acceptable value options
       * Use default fallback of 'row'
       * @param {?} value
       * @return {?}
       */


      function validateValue(value) {
        value = value ? value.toLowerCase() : '';

        var _value$split7 = value.split(' '),
            _value$split8 = _slicedToArray(_value$split7, 3),
            direction = _value$split8[0],
            wrap = _value$split8[1],
            inline = _value$split8[2]; // First value must be the `flex-direction`


        if (!LAYOUT_VALUES.find(
        /**
        * @param {?} x
        * @return {?}
        */
        function (x) {
          return x === direction;
        })) {
          direction = LAYOUT_VALUES[0];
        }

        if (wrap === INLINE) {
          wrap = inline !== INLINE ? inline : '';
          inline = INLINE;
        }

        return [direction, validateWrapValue(wrap), !!inline];
      }
      /**
       * Convert layout-wrap='<value>' to expected flex-wrap style
       * @param {?} value
       * @return {?}
       */


      function validateWrapValue(value) {
        if (!!value) {
          switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
              value = 'wrap-reverse';
              break;

            case 'no':
            case 'none':
            case 'nowrap':
              value = 'nowrap';
              break;
            // All other values fallback to 'wrap'

            default:
              value = 'wrap';
              break;
          }
        }

        return value;
      }
      /**
       * Build the CSS that should be assigned to the element instance
       * BUG:
       *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
       *      Use height instead if possible; height : <xxx>vh;
       *
       *  This way any padding or border specified on the child elements are
       *  laid out and drawn inside that element's specified width and height.
       * @param {?} direction
       * @param {?=} wrap
       * @param {?=} inline
       * @return {?}
       */


      function buildCSS(direction) {
        var wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var inline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        return {
          'display': inline ? 'inline-flex' : 'flex',
          'box-sizing': 'border-box',
          'flex-direction': direction,
          'flex-wrap': !!wrap ? wrap : null
        };
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/base/base2.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @abstract
       */


      var BaseDirective2 = /*#__PURE__*/function () {
        /**
         * @protected
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         */
        function BaseDirective2(elementRef, styleBuilder, styler, marshal) {
          _classCallCheck(this, BaseDirective2);

          this.elementRef = elementRef;
          this.styleBuilder = styleBuilder;
          this.styler = styler;
          this.marshal = marshal;
          this.DIRECTIVE_KEY = '';
          this.inputs = [];
          /**
           * The most recently used styles for the builder
           */

          this.mru = {};
          this.destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * Cache map for style computation
           */

          this.styleCache = new Map();
        }
        /**
         * Access to host element's parent DOM node
         * @protected
         * @return {?}
         */


        _createClass(BaseDirective2, [{
          key: "ngOnChanges",

          /**
           * For \@Input changes
           * @param {?} changes
           * @return {?}
           */
          value: function ngOnChanges(changes) {
            var _this50 = this;

            Object.keys(changes).forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              if (_this50.inputs.indexOf(key) !== -1) {
                /** @type {?} */
                var bp = key.split('.').slice(1).join('.');
                /** @type {?} */

                var val = changes[key].currentValue;

                _this50.setValue(val, bp);
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroySubject.next();
            this.destroySubject.complete();
            this.marshal.releaseElement(this.nativeElement);
          }
          /**
           * Register with central marshaller service
           * @protected
           * @param {?=} extraTriggers
           * @return {?}
           */

        }, {
          key: "init",
          value: function init() {
            var extraTriggers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            this.marshal.init(this.elementRef.nativeElement, this.DIRECTIVE_KEY, this.updateWithValue.bind(this), this.clearStyles.bind(this), extraTriggers);
          }
          /**
           * Add styles to the element using predefined style builder
           * @protected
           * @param {?} input
           * @param {?=} parent
           * @return {?}
           */

        }, {
          key: "addStyles",
          value: function addStyles(input, parent) {
            /** @type {?} */
            var builder = this.styleBuilder;
            /** @type {?} */

            var useCache = builder.shouldCache;
            /** @type {?} */

            var genStyles = this.styleCache.get(input);

            if (!genStyles || !useCache) {
              genStyles = builder.buildStyles(input, parent);

              if (useCache) {
                this.styleCache.set(input, genStyles);
              }
            }

            this.mru = Object.assign({}, genStyles);
            this.applyStyleToElement(genStyles);
            builder.sideEffect(input, genStyles, parent);
          }
          /**
           * Remove generated styles from an element using predefined style builder
           * @protected
           * @return {?}
           */

        }, {
          key: "clearStyles",
          value: function clearStyles() {
            var _this51 = this;

            Object.keys(this.mru).forEach(
            /**
            * @param {?} k
            * @return {?}
            */
            function (k) {
              _this51.mru[k] = '';
            });
            this.applyStyleToElement(this.mru);
            this.mru = {};
          }
          /**
           * Force trigger style updates on DOM element
           * @protected
           * @return {?}
           */

        }, {
          key: "triggerUpdate",
          value: function triggerUpdate() {
            this.marshal.triggerUpdate(this.nativeElement, this.DIRECTIVE_KEY);
          }
          /**
           * Determine the DOM element's Flexbox flow (flex-direction).
           *
           * Check inline style first then check computed (stylesheet) style.
           * And optionally add the flow value to element's inline style.
           * @protected
           * @param {?} target
           * @param {?=} addIfMissing
           * @return {?}
           */

        }, {
          key: "getFlexFlowDirection",
          value: function getFlexFlowDirection(target) {
            var addIfMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (target) {
              var _this$styler$getFlowD = this.styler.getFlowDirection(target),
                  _this$styler$getFlowD2 = _slicedToArray(_this$styler$getFlowD, 2),
                  value = _this$styler$getFlowD2[0],
                  hasInlineValue = _this$styler$getFlowD2[1];

              if (!hasInlineValue && addIfMissing) {
                /** @type {?} */
                var style = buildLayoutCSS(value);
                /** @type {?} */

                var elements = [target];
                this.styler.applyStyleToElements(style, elements);
              }

              return value.trim();
            }

            return 'row';
          }
          /**
           * @protected
           * @param {?} target
           * @return {?}
           */

        }, {
          key: "hasWrap",
          value: function hasWrap(target) {
            return this.styler.hasWrap(target);
          }
          /**
           * Applies styles given via string pair or object map to the directive element
           * @protected
           * @param {?} style
           * @param {?=} value
           * @param {?=} element
           * @return {?}
           */

        }, {
          key: "applyStyleToElement",
          value: function applyStyleToElement(style, value) {
            var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.nativeElement;
            this.styler.applyStyleToElement(element, style, value);
          }
          /**
           * @protected
           * @param {?} val
           * @param {?} bp
           * @return {?}
           */

        }, {
          key: "setValue",
          value: function setValue(val, bp) {
            this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, val, bp);
          }
          /**
           * @protected
           * @param {?} input
           * @return {?}
           */

        }, {
          key: "updateWithValue",
          value: function updateWithValue(input) {
            if (this.currentValue !== input) {
              this.addStyles(input);
              this.currentValue = input;
            }
          }
        }, {
          key: "parentElement",
          get: function get() {
            return this.elementRef.nativeElement.parentElement;
          }
          /**
           * Access to the HTMLElement for the directive
           * @protected
           * @return {?}
           */

        }, {
          key: "nativeElement",
          get: function get() {
            return this.elementRef.nativeElement;
          }
          /**
           * Access to the activated value for the directive
           * @return {?}
           */

        }, {
          key: "activatedValue",
          get: function get() {
            return this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY);
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, value, this.marshal.activatedAlias);
          }
        }]);

        return BaseDirective2;
      }();

      BaseDirective2.ɵfac = function BaseDirective2_Factory(t) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
      };

      BaseDirective2.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: BaseDirective2,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /**
       * @fileoverview added by tsickle
       * Generated from: core/base/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/data/break-points.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * NOTE: Smaller ranges have HIGHER priority since the match is more specific
       * @type {?}
       */

      var DEFAULT_BREAKPOINTS = [{
        alias: 'xs',
        mediaQuery: 'screen and (min-width: 0px) and (max-width: 599.98px)',
        priority: 1000
      }, {
        alias: 'sm',
        mediaQuery: 'screen and (min-width: 600px) and (max-width: 959.98px)',
        priority: 900
      }, {
        alias: 'md',
        mediaQuery: 'screen and (min-width: 960px) and (max-width: 1279.98px)',
        priority: 800
      }, {
        alias: 'lg',
        mediaQuery: 'screen and (min-width: 1280px) and (max-width: 1919.98px)',
        priority: 700
      }, {
        alias: 'xl',
        mediaQuery: 'screen and (min-width: 1920px) and (max-width: 4999.98px)',
        priority: 600
      }, {
        alias: 'lt-sm',
        overlapping: true,
        mediaQuery: 'screen and (max-width: 599.98px)',
        priority: 950
      }, {
        alias: 'lt-md',
        overlapping: true,
        mediaQuery: 'screen and (max-width: 959.98px)',
        priority: 850
      }, {
        alias: 'lt-lg',
        overlapping: true,
        mediaQuery: 'screen and (max-width: 1279.98px)',
        priority: 750
      }, {
        alias: 'lt-xl',
        overlapping: true,
        priority: 650,
        mediaQuery: 'screen and (max-width: 1919.98px)'
      }, {
        alias: 'gt-xs',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 600px)',
        priority: -950
      }, {
        alias: 'gt-sm',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 960px)',
        priority: -850
      }, {
        alias: 'gt-md',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 1280px)',
        priority: -750
      }, {
        alias: 'gt-lg',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 1920px)',
        priority: -650
      }];
      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/data/orientation-break-points.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /* tslint:disable */

      /** @type {?} */

      var HANDSET_PORTRAIT = '(orientation: portrait) and (max-width: 599.98px)';
      /** @type {?} */

      var HANDSET_LANDSCAPE = '(orientation: landscape) and (max-width: 959.98px)';
      /** @type {?} */

      var TABLET_PORTRAIT = '(orientation: portrait) and (min-width: 600px) and (max-width: 839.98px)';
      /** @type {?} */

      var TABLET_LANDSCAPE = '(orientation: landscape) and (min-width: 960px) and (max-width: 1279.98px)';
      /** @type {?} */

      var WEB_PORTRAIT = '(orientation: portrait) and (min-width: 840px)';
      /** @type {?} */

      var WEB_LANDSCAPE = '(orientation: landscape) and (min-width: 1280px)';
      /** @type {?} */

      var ScreenTypes = {
        'HANDSET': "".concat(HANDSET_PORTRAIT, ", ").concat(HANDSET_LANDSCAPE),
        'TABLET': "".concat(TABLET_PORTRAIT, " , ").concat(TABLET_LANDSCAPE),
        'WEB': "".concat(WEB_PORTRAIT, ", ").concat(WEB_LANDSCAPE, " "),
        'HANDSET_PORTRAIT': "".concat(HANDSET_PORTRAIT),
        'TABLET_PORTRAIT': "".concat(TABLET_PORTRAIT, " "),
        'WEB_PORTRAIT': "".concat(WEB_PORTRAIT),
        'HANDSET_LANDSCAPE': "".concat(HANDSET_LANDSCAPE),
        'TABLET_LANDSCAPE': "".concat(TABLET_LANDSCAPE),
        'WEB_LANDSCAPE': "".concat(WEB_LANDSCAPE)
      };
      /**
       * Extended Breakpoints for handset/tablets with landscape or portrait orientations
       * @type {?}
       */

      var ORIENTATION_BREAKPOINTS = [{
        'alias': 'handset',
        priority: 2000,
        'mediaQuery': ScreenTypes.HANDSET
      }, {
        'alias': 'handset.landscape',
        priority: 2000,
        'mediaQuery': ScreenTypes.HANDSET_LANDSCAPE
      }, {
        'alias': 'handset.portrait',
        priority: 2000,
        'mediaQuery': ScreenTypes.HANDSET_PORTRAIT
      }, {
        'alias': 'tablet',
        priority: 2100,
        'mediaQuery': ScreenTypes.TABLET
      }, {
        'alias': 'tablet.landscape',
        priority: 2100,
        'mediaQuery': ScreenTypes.TABLET_LANDSCAPE
      }, {
        'alias': 'tablet.portrait',
        priority: 2100,
        'mediaQuery': ScreenTypes.TABLET_PORTRAIT
      }, {
        'alias': 'web',
        priority: 2200,
        'mediaQuery': ScreenTypes.WEB,
        overlapping: true
      }, {
        'alias': 'web.landscape',
        priority: 2200,
        'mediaQuery': ScreenTypes.WEB_LANDSCAPE,
        overlapping: true
      }, {
        'alias': 'web.portrait',
        priority: 2200,
        'mediaQuery': ScreenTypes.WEB_PORTRAIT,
        overlapping: true
      }];
      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/break-point.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: utils/object-extend.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Extends an object with the *enumerable* and *own* properties of one or more source objects,
       * similar to Object.assign.
       *
       * @param {?} dest The object which will have properties copied to it.
       * @param {...?} sources The source objects from which properties will be copied.
       * @return {?}
       */

      function extendObject(dest) {
        if (dest == null) {
          throw TypeError('Cannot convert undefined or null to object');
        }

        for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          sources[_key2 - 1] = arguments[_key2];
        }

        for (var _i3 = 0, _sources2 = sources; _i3 < _sources2.length; _i3++) {
          var source = _sources2[_i3];

          if (source != null) {
            for (var key in source) {
              if (source.hasOwnProperty(key)) {
                dest[key] = source[key];
              }
            }
          }
        }

        return dest;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/breakpoint-tools.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var ALIAS_DELIMITERS = /(\.|-|_)/g;
      /**
       * @param {?} part
       * @return {?}
       */

      function firstUpperCase(part) {
        /** @type {?} */
        var first = part.length > 0 ? part.charAt(0) : '';
        /** @type {?} */

        var remainder = part.length > 1 ? part.slice(1) : '';
        return first.toUpperCase() + remainder;
      }
      /**
       * Converts snake-case to SnakeCase.
       * @param {?} name Text to UpperCamelCase
       * @return {?}
       */


      function camelCase(name) {
        return name.replace(ALIAS_DELIMITERS, '|').split('|').map(firstUpperCase).join('');
      }
      /**
       * For each breakpoint, ensure that a Suffix is defined;
       * fallback to UpperCamelCase the unique Alias value
       * @param {?} list
       * @return {?}
       */


      function validateSuffixes(list) {
        list.forEach(
        /**
        * @param {?} bp
        * @return {?}
        */
        function (bp) {
          if (!bp.suffix) {
            bp.suffix = camelCase(bp.alias); // create Suffix value based on alias

            bp.overlapping = !!bp.overlapping; // ensure default value
          }
        });
        return list;
      }
      /**
       * Merge a custom breakpoint list with the default list based on unique alias values
       *  - Items are added if the alias is not in the default list
       *  - Items are merged with the custom override if the alias exists in the default list
       * @param {?} defaults
       * @param {?=} custom
       * @return {?}
       */


      function mergeByAlias(defaults) {
        var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        /** @type {?} */
        var dict = {};
        defaults.forEach(
        /**
        * @param {?} bp
        * @return {?}
        */
        function (bp) {
          dict[bp.alias] = bp;
        }); // Merge custom breakpoints

        custom.forEach(
        /**
        * @param {?} bp
        * @return {?}
        */
        function (bp) {
          if (dict[bp.alias]) {
            extendObject(dict[bp.alias], bp);
          } else {
            dict[bp.alias] = bp;
          }
        });
        return validateSuffixes(Object.keys(dict).map(
        /**
        * @param {?} k
        * @return {?}
        */
        function (k) {
          return dict[k];
        }));
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/break-points-token.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       *  Injection token unique to the flex-layout library.
       *  Use this token when build a custom provider (see below).
       * @type {?}
       */


      var BREAKPOINTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Token (@angular/flex-layout) Breakpoints', {
        providedIn: 'root',
        factory:
        /**
        * @return {?}
        */
        function factory() {
          /** @type {?} */
          var breakpoints = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BREAKPOINT);
          /** @type {?} */

          var layoutConfig = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(LAYOUT_CONFIG);
          /** @type {?} */

          var bpFlattenArray = [].concat.apply([], (breakpoints || []).map(
          /**
          * @param {?} v
          * @return {?}
          */
          function (v) {
            return Array.isArray(v) ? v : [v];
          }));
          /** @type {?} */

          var builtIns = (layoutConfig.disableDefaultBps ? [] : DEFAULT_BREAKPOINTS).concat(layoutConfig.addOrientationBps ? ORIENTATION_BREAKPOINTS : []);
          return mergeByAlias(builtIns, bpFlattenArray);
        }
      });
      /**
       * @fileoverview added by tsickle
       * Generated from: core/utils/sort.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * HOF to sort the breakpoints by descending priority
       * @template T
       * @param {?} a
       * @param {?} b
       * @return {?}
       */

      function sortDescendingPriority(a, b) {
        /** @type {?} */
        var priorityA = a ? a.priority || 0 : 0;
        /** @type {?} */

        var priorityB = b ? b.priority || 0 : 0;
        return priorityB - priorityA;
      }
      /**
       * HOF to sort the breakpoints by ascending priority
       * @template T
       * @param {?} a
       * @param {?} b
       * @return {?}
       */


      function sortAscendingPriority(a, b) {
        /** @type {?} */
        var pA = a.priority || 0;
        /** @type {?} */

        var pB = b.priority || 0;
        return pA - pB;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/break-point-registry.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Registry of 1..n MediaQuery breakpoint ranges
       * This is published as a provider and may be overridden from custom, application-specific ranges
       *
       */


      var BreakPointRegistry = /*#__PURE__*/function () {
        /**
         * @param {?} list
         */
        function BreakPointRegistry(list) {
          _classCallCheck(this, BreakPointRegistry);

          /**
           * Memoized BreakPoint Lookups
           */
          this.findByMap = new Map();
          this.items = _toConsumableArray(list).sort(sortAscendingPriority);
        }
        /**
         * Search breakpoints by alias (e.g. gt-xs)
         * @param {?} alias
         * @return {?}
         */


        _createClass(BreakPointRegistry, [{
          key: "findByAlias",
          value: function findByAlias(alias) {
            return !alias ? null : this.findWithPredicate(alias,
            /**
            * @param {?} bp
            * @return {?}
            */
            function (bp) {
              return bp.alias == alias;
            });
          }
          /**
           * @param {?} query
           * @return {?}
           */

        }, {
          key: "findByQuery",
          value: function findByQuery(query) {
            return this.findWithPredicate(query,
            /**
            * @param {?} bp
            * @return {?}
            */
            function (bp) {
              return bp.mediaQuery == query;
            });
          }
          /**
           * Get all the breakpoints whose ranges could overlapping `normal` ranges;
           * e.g. gt-sm overlaps md, lg, and xl
           * @return {?}
           */

        }, {
          key: "findWithPredicate",

          /**
           * Memoized lookup using custom predicate function
           * @private
           * @param {?} key
           * @param {?} searchFn
           * @return {?}
           */
          value: function findWithPredicate(key, searchFn) {
            /** @type {?} */
            var response = this.findByMap.get(key);

            if (!response) {
              response = this.items.find(searchFn) || null;
              this.findByMap.set(key, response);
            }

            return response || null;
          }
        }, {
          key: "overlappings",
          get: function get() {
            return this.items.filter(
            /**
            * @param {?} it
            * @return {?}
            */
            function (it) {
              return it.overlapping == true;
            });
          }
          /**
           * Get list of all registered (non-empty) breakpoint aliases
           * @return {?}
           */

        }, {
          key: "aliases",
          get: function get() {
            return this.items.map(
            /**
            * @param {?} it
            * @return {?}
            */
            function (it) {
              return it.alias;
            });
          }
          /**
           * Aliases are mapped to properties using suffixes
           * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
           * for property layoutGtSM.
           * @return {?}
           */

        }, {
          key: "suffixes",
          get: function get() {
            return this.items.map(
            /**
            * @param {?} it
            * @return {?}
            */
            function (it) {
              return !!it.suffix ? it.suffix : '';
            });
          }
        }]);

        return BreakPointRegistry;
      }();

      BreakPointRegistry.ɵfac = function BreakPointRegistry_Factory(t) {
        return new (t || BreakPointRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BREAKPOINTS));
      };
      /** @nocollapse */


      BreakPointRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function BreakPointRegistry_Factory() {
          return new BreakPointRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BREAKPOINTS));
        },
        token: BreakPointRegistry,
        providedIn: "root"
      });
      /** @nocollapse */

      BreakPointRegistry.ctorParameters = function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [BREAKPOINTS]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakPointRegistry, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [BREAKPOINTS]
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/breakpoints/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/match-media/match-media.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * MediaMonitor configures listeners to mediaQuery changes and publishes an Observable facade to
       * convert mediaQuery change callbacks to subscriber notifications. These notifications will be
       * performed within the ng Zone to trigger change detections and component updates.
       *
       * NOTE: both mediaQuery activations and de-activations are announced in notifications
       */


      var MatchMedia = /*#__PURE__*/function () {
        /**
         * @param {?} _zone
         * @param {?} _platformId
         * @param {?} _document
         */
        function MatchMedia(_zone, _platformId, _document) {
          _classCallCheck(this, MatchMedia);

          this._zone = _zone;
          this._platformId = _platformId;
          this._document = _document;
          /**
           * Initialize source with 'all' so all non-responsive APIs trigger style updates
           */

          this.source = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new MediaChange(true));
          this.registry = new Map();
          this.pendingRemoveListenerFns = [];
          this._observable$ = this.source.asObservable();
        }
        /**
         * Publish list of all current activations
         * @return {?}
         */


        _createClass(MatchMedia, [{
          key: "isActive",

          /**
           * For the specified mediaQuery?
           * @param {?} mediaQuery
           * @return {?}
           */
          value: function isActive(mediaQuery) {
            /** @type {?} */
            var mql = this.registry.get(mediaQuery);
            return !!mql ? mql.matches : this.registerQuery(mediaQuery).some(
            /**
            * @param {?} m
            * @return {?}
            */
            function (m) {
              return m.matches;
            });
          }
          /**
           * External observers can watch for all (or a specific) mql changes.
           * Typically used by the MediaQueryAdaptor; optionally available to components
           * who wish to use the MediaMonitor as mediaMonitor$ observable service.
           *
           * Use deferred registration process to register breakpoints only on subscription
           * This logic also enforces logic to register all mediaQueries BEFORE notify
           * subscribers of notifications.
           * @param {?=} mqList
           * @param {?=} filterOthers
           * @return {?}
           */

        }, {
          key: "observe",
          value: function observe(mqList) {
            var _this52 = this;

            var filterOthers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (mqList && mqList.length) {
              /** @type {?} */
              var matchMedia$ = this._observable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
              /**
              * @param {?} change
              * @return {?}
              */
              function (change) {
                return !filterOthers ? true : mqList.indexOf(change.mediaQuery) > -1;
              }));
              /** @type {?} */


              var registration$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
              /**
              * @param {?} observer
              * @return {?}
              */
              function (observer) {
                // tslint:disable-line:max-line-length

                /** @type {?} */
                var matches = _this52.registerQuery(mqList);

                if (matches.length) {
                  /** @type {?} */
                  var lastChange =
                  /** @type {?} */
                  matches.pop();
                  matches.forEach(
                  /**
                  * @param {?} e
                  * @return {?}
                  */
                  function (e) {
                    observer.next(e);
                  });

                  _this52.source.next(lastChange); // last match is cached

                }

                observer.complete();
              });
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(registration$, matchMedia$);
            }

            return this._observable$;
          }
          /**
           * Based on the BreakPointRegistry provider, register internal listeners for each unique
           * mediaQuery. Each listener emits specific MediaChange data to observers
           * @param {?} mediaQuery
           * @return {?}
           */

        }, {
          key: "registerQuery",
          value: function registerQuery(mediaQuery) {
            var _this53 = this;

            /** @type {?} */
            var list = Array.isArray(mediaQuery) ? mediaQuery : [mediaQuery];
            /** @type {?} */

            var matches = [];
            buildQueryCss(list, this._document);
            list.forEach(
            /**
            * @param {?} query
            * @return {?}
            */
            function (query) {
              /** @type {?} */
              var onMQLEvent =
              /**
              * @param {?} e
              * @return {?}
              */
              function onMQLEvent(e) {
                _this53._zone.run(
                /**
                * @return {?}
                */
                function () {
                  return _this53.source.next(new MediaChange(e.matches, query));
                });
              };
              /** @type {?} */


              var mql = _this53.registry.get(query);

              if (!mql) {
                mql = _this53.buildMQL(query);
                mql.addListener(onMQLEvent);

                _this53.pendingRemoveListenerFns.push(
                /**
                * @return {?}
                */
                function () {
                  return (
                    /** @type {?} */
                    mql.removeListener(onMQLEvent)
                  );
                });

                _this53.registry.set(query, mql);
              }

              if (mql.matches) {
                matches.push(new MediaChange(true, query));
              }
            });
            return matches;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            /** @type {?} */
            var fn;

            while (fn = this.pendingRemoveListenerFns.pop()) {
              fn();
            }
          }
          /**
           * Call window.matchMedia() to build a MediaQueryList; which
           * supports 0..n listeners for activation/deactivation
           * @protected
           * @param {?} query
           * @return {?}
           */

        }, {
          key: "buildMQL",
          value: function buildMQL(query) {
            return constructMql(query, Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId));
          }
        }, {
          key: "activations",
          get: function get() {
            /** @type {?} */
            var results = [];
            this.registry.forEach(
            /**
            * @param {?} mql
            * @param {?} key
            * @return {?}
            */
            function (mql, key) {
              if (mql.matches) {
                results.push(key);
              }
            });
            return results;
          }
        }]);

        return MatchMedia;
      }();

      MatchMedia.ɵfac = function MatchMedia_Factory(t) {
        return new (t || MatchMedia)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };
      /** @nocollapse */


      MatchMedia.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function MatchMedia_Factory() {
          return new MatchMedia(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
        },
        token: MatchMedia,
        providedIn: "root"
      });
      /** @nocollapse */

      MatchMedia.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchMedia, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * Private global registry for all dynamically-created, injected style tags
       * @see prepare(query)
       * @type {?}
       */


      var ALL_STYLES = {};
      /**
       * For Webkit engines that only trigger the MediaQueryList Listener
       * when there is at least one CSS selector for the respective media query.
       *
       * @param {?} mediaQueries
       * @param {?} _document
       * @return {?}
       */

      function buildQueryCss(mediaQueries, _document) {
        /** @type {?} */
        var list = mediaQueries.filter(
        /**
        * @param {?} it
        * @return {?}
        */
        function (it) {
          return !ALL_STYLES[it];
        });

        if (list.length > 0) {
          /** @type {?} */
          var query = list.join(', ');

          try {
            /** @type {?} */
            var styleEl = _document.createElement('style');

            styleEl.setAttribute('type', 'text/css');

            if (!
            /** @type {?} */
            styleEl.styleSheet) {
              /** @type {?} */
              var cssText = "\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ".concat(query, " {.fx-query-test{ }}\n");
              styleEl.appendChild(_document.createTextNode(cssText));
            }

            /** @type {?} */
            _document.head.appendChild(styleEl); // Store in private global registry


            list.forEach(
            /**
            * @param {?} mq
            * @return {?}
            */
            function (mq) {
              return ALL_STYLES[mq] = styleEl;
            });
          } catch (e) {
            console.error(e);
          }
        }
      }
      /**
       * @param {?} query
       * @param {?} isBrowser
       * @return {?}
       */


      function constructMql(query, isBrowser) {
        /** @type {?} */
        var canListen = isBrowser && !!
        /** @type {?} */
        window.matchMedia('all').addListener;
        return canListen ?
        /** @type {?} */
        window.matchMedia(query) :
        /** @type {?} */
        {
          matches: query === 'all' || query === '',
          media: query,
          addListener:
          /**
          * @return {?}
          */
          function addListener() {},
          removeListener:
          /**
          * @return {?}
          */
          function removeListener() {},
          onchange: null,

          /**
           * @return {?}
           */
          addEventListener: function addEventListener() {},

          /**
           * @return {?}
           */
          removeEventListener: function removeEventListener() {},

          /**
           * @return {?}
           */
          dispatchEvent: function dispatchEvent() {
            return false;
          }
        };
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/match-media/mock/mock-match-media.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * MockMatchMedia mocks calls to the Window API matchMedia with a build of a simulated
       * MockMediaQueryListener. Methods are available to simulate an activation of a mediaQuery
       * range and to clearAll mediaQuery listeners.
       */


      var MockMatchMedia = /*#__PURE__*/function (_MatchMedia) {
        _inherits(MockMatchMedia, _MatchMedia);

        var _super32 = _createSuper(MockMatchMedia);

        // Allow fallback to overlapping mediaQueries

        /**
         * @param {?} _zone
         * @param {?} _platformId
         * @param {?} _document
         * @param {?} _breakpoints
         */
        function MockMatchMedia(_zone, _platformId, _document, _breakpoints) {
          var _this54;

          _classCallCheck(this, MockMatchMedia);

          _this54 = _super32.call(this, _zone, _platformId, _document);
          _this54._breakpoints = _breakpoints;
          _this54.autoRegisterQueries = true; // Used for testing BreakPoint registrations
          // Used for testing BreakPoint registrations

          _this54.useOverlaps = false; // Allow fallback to overlapping mediaQueries

          return _this54;
        }
        /**
         * Easy method to clear all listeners for all mediaQueries
         * @return {?}
         */


        _createClass(MockMatchMedia, [{
          key: "clearAll",
          value: function clearAll() {
            this.registry.forEach(
            /**
            * @param {?} mql
            * @return {?}
            */
            function (mql) {
              /** @type {?} */
              mql.destroy();
            });
            this.registry.clear();
            this.useOverlaps = false;
          }
          /**
           * Feature to support manual, simulated activation of a mediaQuery.
           * @param {?} mediaQuery
           * @param {?=} useOverlaps
           * @return {?}
           */

        }, {
          key: "activate",
          value: function activate(mediaQuery) {
            var useOverlaps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            useOverlaps = useOverlaps || this.useOverlaps;
            mediaQuery = this._validateQuery(mediaQuery);

            if (useOverlaps || !this.isActive(mediaQuery)) {
              this._deactivateAll();

              this._registerMediaQuery(mediaQuery);

              this._activateWithOverlaps(mediaQuery, useOverlaps);
            }

            return this.hasActivated;
          }
          /**
           * Converts an optional mediaQuery alias to a specific, valid mediaQuery
           * @param {?} queryOrAlias
           * @return {?}
           */

        }, {
          key: "_validateQuery",
          value: function _validateQuery(queryOrAlias) {
            /** @type {?} */
            var bp = this._breakpoints.findByAlias(queryOrAlias);

            return bp && bp.mediaQuery || queryOrAlias;
          }
          /**
           * Manually onMediaChange any overlapping mediaQueries to simulate
           * similar functionality in the window.matchMedia()
           * @private
           * @param {?} mediaQuery
           * @param {?} useOverlaps
           * @return {?}
           */

        }, {
          key: "_activateWithOverlaps",
          value: function _activateWithOverlaps(mediaQuery, useOverlaps) {
            if (useOverlaps) {
              /** @type {?} */
              var bp = this._breakpoints.findByQuery(mediaQuery);
              /** @type {?} */


              var alias = bp ? bp.alias : 'unknown'; // Simulate activation of overlapping lt-<XXX> ranges

              switch (alias) {
                case 'lg':
                  this._activateByAlias(['lt-xl']);

                  break;

                case 'md':
                  this._activateByAlias(['lt-xl', 'lt-lg']);

                  break;

                case 'sm':
                  this._activateByAlias(['lt-xl', 'lt-lg', 'lt-md']);

                  break;

                case 'xs':
                  this._activateByAlias(['lt-xl', 'lt-lg', 'lt-md', 'lt-sm']);

                  break;
              } // Simulate activation of overlapping gt-<xxxx> mediaQuery ranges


              switch (alias) {
                case 'xl':
                  this._activateByAlias(['gt-lg', 'gt-md', 'gt-sm', 'gt-xs']);

                  break;

                case 'lg':
                  this._activateByAlias(['gt-md', 'gt-sm', 'gt-xs']);

                  break;

                case 'md':
                  this._activateByAlias(['gt-sm', 'gt-xs']);

                  break;

                case 'sm':
                  this._activateByAlias(['gt-xs']);

                  break;
              }
            } // Activate last since the responsiveActivation is watching *this* mediaQuery


            return this._activateByQuery(mediaQuery);
          }
          /**
           *
           * @private
           * @param {?} aliases
           * @return {?}
           */

        }, {
          key: "_activateByAlias",
          value: function _activateByAlias(aliases) {
            var _this55 = this;

            /** @type {?} */
            var activate =
            /**
            * @param {?} alias
            * @return {?}
            */
            function activate(alias) {
              /** @type {?} */
              var bp = _this55._breakpoints.findByAlias(alias);

              _this55._activateByQuery(bp ? bp.mediaQuery : alias);
            };

            aliases.forEach(activate);
          }
          /**
           *
           * @private
           * @param {?} mediaQuery
           * @return {?}
           */

        }, {
          key: "_activateByQuery",
          value: function _activateByQuery(mediaQuery) {
            if (!this.registry.has(mediaQuery) && this.autoRegisterQueries) {
              this._registerMediaQuery(mediaQuery);
            }
            /** @type {?} */


            var mql =
            /** @type {?} */
            this.registry.get(mediaQuery);

            if (mql && !this.isActive(mediaQuery)) {
              this.registry.set(mediaQuery, mql.activate());
            }

            return this.hasActivated;
          }
          /**
           * Deactivate all current MQLs and reset the buffer
           * @private
           * @template THIS
           * @this {THIS}
           * @return {THIS}
           */

        }, {
          key: "_deactivateAll",
          value: function _deactivateAll() {
            /** @type {?} */
            this.registry.forEach(
            /**
            * @param {?} it
            * @return {?}
            */
            function (it) {
              /** @type {?} */
              it.deactivate();
            });
            return (
              /** @type {?} */
              this
            );
          }
          /**
           * Insure the mediaQuery is registered with MatchMedia
           * @private
           * @param {?} mediaQuery
           * @return {?}
           */

        }, {
          key: "_registerMediaQuery",
          value: function _registerMediaQuery(mediaQuery) {
            if (!this.registry.has(mediaQuery) && this.autoRegisterQueries) {
              this.registerQuery(mediaQuery);
            }
          }
          /**
           * Call window.matchMedia() to build a MediaQueryList; which
           * supports 0..n listeners for activation/deactivation
           * @protected
           * @param {?} query
           * @return {?}
           */

        }, {
          key: "buildMQL",
          value: function buildMQL(query) {
            return new MockMediaQueryList(query);
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "hasActivated",
          get: function get() {
            return this.activations.length > 0;
          }
        }]);

        return MockMatchMedia;
      }(MatchMedia);

      MockMatchMedia.ɵfac = function MockMatchMedia_Factory(t) {
        return new (t || MockMatchMedia)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry));
      };

      MockMatchMedia.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MockMatchMedia,
        factory: MockMatchMedia.ɵfac
      });
      /** @nocollapse */

      MockMatchMedia.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: BreakPointRegistry
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MockMatchMedia, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: BreakPointRegistry
          }];
        }, null);
      })();
      /**
       * Special internal class to simulate a MediaQueryList and
       * - supports manual activation to simulate mediaQuery matching
       * - manages listeners
       */


      var MockMediaQueryList = /*#__PURE__*/function () {
        /**
         * @param {?} _mediaQuery
         */
        function MockMediaQueryList(_mediaQuery) {
          _classCallCheck(this, MockMediaQueryList);

          this._mediaQuery = _mediaQuery;
          this._isActive = false;
          this._listeners = [];
          this.onchange = null;
        }
        /**
         * @return {?}
         */


        _createClass(MockMediaQueryList, [{
          key: "destroy",

          /**
           * Destroy the current list by deactivating the
           * listeners and clearing the internal list
           * @return {?}
           */
          value: function destroy() {
            this.deactivate();
            this._listeners = [];
          }
          /**
           * Notify all listeners that 'matches === TRUE'
           * @return {?}
           */

        }, {
          key: "activate",
          value: function activate() {
            var _this56 = this;

            if (!this._isActive) {
              this._isActive = true;

              this._listeners.forEach(
              /**
              * @param {?} callback
              * @return {?}
              */
              function (callback) {
                /** @type {?} */
                var cb =
                /** @type {?} */
                callback;
                cb.call(_this56,
                /** @type {?} */
                {
                  matches: _this56.matches,
                  media: _this56.media
                });
              });
            }

            return this;
          }
          /**
           * Notify all listeners that 'matches === false'
           * @return {?}
           */

        }, {
          key: "deactivate",
          value: function deactivate() {
            var _this57 = this;

            if (this._isActive) {
              this._isActive = false;

              this._listeners.forEach(
              /**
              * @param {?} callback
              * @return {?}
              */
              function (callback) {
                /** @type {?} */
                var cb =
                /** @type {?} */
                callback;
                cb.call(_this57,
                /** @type {?} */
                {
                  matches: _this57.matches,
                  media: _this57.media
                });
              });
            }

            return this;
          }
          /**
           * Add a listener to our internal list to activate later
           * @param {?} listener
           * @return {?}
           */

        }, {
          key: "addListener",
          value: function addListener(listener) {
            if (this._listeners.indexOf(listener) === -1) {
              this._listeners.push(listener);
            }

            if (this._isActive) {
              /** @type {?} */
              var cb =
              /** @type {?} */
              listener;
              cb.call(this,
              /** @type {?} */
              {
                matches: this.matches,
                media: this.media
              });
            }
          }
          /**
           * Don't need to remove listeners in the testing environment
           * @param {?} _
           * @return {?}
           */

        }, {
          key: "removeListener",
          value: function removeListener(_) {}
          /**
           * @param {?} _
           * @param {?} __
           * @param {?=} ___
           * @return {?}
           */

        }, {
          key: "addEventListener",
          value: function addEventListener(_, __, ___) {}
          /**
           * @param {?} _
           * @param {?} __
           * @param {?=} ___
           * @return {?}
           */

        }, {
          key: "removeEventListener",
          value: function removeEventListener(_, __, ___) {}
          /**
           * @param {?} _
           * @return {?}
           */

        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(_) {
            return false;
          }
        }, {
          key: "matches",
          get: function get() {
            return this._isActive;
          }
          /**
           * @return {?}
           */

        }, {
          key: "media",
          get: function get() {
            return this._mediaQuery;
          }
        }]);

        return MockMediaQueryList;
      }();
      /**
       * Pre-configured provider for MockMatchMedia
       * @type {?}
       */


      var MockMatchMediaProvider = {
        // tslint:disable-line:variable-name
        provide: MatchMedia,
        useClass: MockMatchMedia
      };
      /**
       * @fileoverview added by tsickle
       * Generated from: core/match-media/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-marshaller/print-hook.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */

      var PRINT = 'print';
      /** @type {?} */

      var BREAKPOINT_PRINT = {
        alias: PRINT,
        mediaQuery: PRINT,
        priority: 1000
      };
      /**
       * PrintHook - Use to intercept print MediaQuery activations and force
       *             layouts to render with the specified print alias/breakpoint
       *
       * Used in MediaMarshaller and MediaObserver
       */

      var PrintHook = /*#__PURE__*/function () {
        /**
         * @param {?} breakpoints
         * @param {?} layoutConfig
         * @param {?} _document
         */
        function PrintHook(breakpoints, layoutConfig, _document) {
          _classCallCheck(this, PrintHook);

          this.breakpoints = breakpoints;
          this.layoutConfig = layoutConfig;
          this._document = _document; // registeredBeforeAfterPrintHooks tracks if we registered the `beforeprint`
          //  and `afterprint` event listeners.

          this.registeredBeforeAfterPrintHooks = false; // isPrintingBeforeAfterEvent is used to track if we are printing from within
          // a `beforeprint` event handler. This prevents the typicall `stopPrinting`
          // form `interceptEvents` so that printing is not stopped while the dialog
          // is still open. This is an extension of the `isPrinting` property on
          // browsers which support `beforeprint` and `afterprint` events.

          this.isPrintingBeforeAfterEvent = false;
          this.beforePrintEventListeners = [];
          this.afterPrintEventListeners = [];
          /**
           * Is this service currently in Print-mode ?
           */

          this.isPrinting = false;
          this.queue = new PrintQueue();
          this.deactivations = [];
        }
        /**
         * Add 'print' mediaQuery: to listen for matchMedia activations
         * @param {?} queries
         * @return {?}
         */


        _createClass(PrintHook, [{
          key: "withPrintQuery",
          value: function withPrintQuery(queries) {
            return [].concat(_toConsumableArray(queries), [PRINT]);
          }
          /**
           * Is the MediaChange event for any 'print' \@media
           * @param {?} e
           * @return {?}
           */

        }, {
          key: "isPrintEvent",
          value: function isPrintEvent(e) {
            return e.mediaQuery.startsWith(PRINT);
          }
          /**
           * What is the desired mqAlias to use while printing?
           * @return {?}
           */

        }, {
          key: "getEventBreakpoints",

          /**
           * Lookup breakpoint associated with mediaQuery
           * @param {?} __0
           * @return {?}
           */
          value: function getEventBreakpoints(_ref6) {
            var mediaQuery = _ref6.mediaQuery;

            /** @type {?} */
            var bp = this.breakpoints.findByQuery(mediaQuery);
            /** @type {?} */

            var list = bp ? [].concat(_toConsumableArray(this.printBreakPoints), [bp]) : this.printBreakPoints;
            return list.sort(sortDescendingPriority);
          }
          /**
           * Update event with printAlias mediaQuery information
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "updateEvent",
          value: function updateEvent(event) {
            /** @type {?} */
            var bp = this.breakpoints.findByQuery(event.mediaQuery);

            if (this.isPrintEvent(event)) {
              // Reset from 'print' to first (highest priority) print breakpoint
              bp = this.getEventBreakpoints(event)[0];
              event.mediaQuery = bp ? bp.mediaQuery : '';
            }

            return mergeAlias(event, bp);
          } // registerBeforeAfterPrintHooks registers a `beforeprint` event hook so we can
          // trigger print styles synchronously and apply proper layout styles.
          // It is a noop if the hooks have already been registered or if the document's
          // `defaultView` is not available.

          /**
           * @private
           * @param {?} target
           * @return {?}
           */

        }, {
          key: "registerBeforeAfterPrintHooks",
          value: function registerBeforeAfterPrintHooks(target) {
            var _this58 = this;

            // `defaultView` may be null when rendering on the server or in other contexts.
            if (!this._document.defaultView || this.registeredBeforeAfterPrintHooks) {
              return;
            }

            this.registeredBeforeAfterPrintHooks = true;
            /** @type {?} */

            var beforePrintListener =
            /**
            * @return {?}
            */
            function beforePrintListener() {
              // If we aren't already printing, start printing and update the styles as
              // if there was a regular print `MediaChange`(from matchMedia).
              if (!_this58.isPrinting) {
                _this58.isPrintingBeforeAfterEvent = true;

                _this58.startPrinting(target, _this58.getEventBreakpoints(new MediaChange(true, PRINT)));

                target.updateStyles();
              }
            };
            /** @type {?} */


            var afterPrintListener =
            /**
            * @return {?}
            */
            function afterPrintListener() {
              // If we aren't already printing, start printing and update the styles as
              // if there was a regular print `MediaChange`(from matchMedia).
              _this58.isPrintingBeforeAfterEvent = false;

              if (_this58.isPrinting) {
                _this58.stopPrinting(target);

                target.updateStyles();
              }
            }; // Could we have teardown logic to remove if there are no print listeners being used?


            this._document.defaultView.addEventListener('beforeprint', beforePrintListener);

            this._document.defaultView.addEventListener('afterprint', afterPrintListener);

            this.beforePrintEventListeners.push(beforePrintListener);
            this.afterPrintEventListeners.push(afterPrintListener);
          }
          /**
           * Prepare RxJS filter operator with partial application
           * @param {?} target
           * @return {?} pipeable filter predicate
           */

        }, {
          key: "interceptEvents",
          value: function interceptEvents(target) {
            var _this59 = this;

            this.registerBeforeAfterPrintHooks(target);
            return (
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                if (_this59.isPrintEvent(event)) {
                  if (event.matches && !_this59.isPrinting) {
                    _this59.startPrinting(target, _this59.getEventBreakpoints(event));

                    target.updateStyles();
                  } else if (!event.matches && _this59.isPrinting && !_this59.isPrintingBeforeAfterEvent) {
                    _this59.stopPrinting(target);

                    target.updateStyles();
                  }
                } else {
                  _this59.collectActivations(event);
                }
              }
            );
          }
          /**
           * Stop mediaChange event propagation in event streams
           * @return {?}
           */

        }, {
          key: "blockPropagation",
          value: function blockPropagation() {
            var _this60 = this;

            return (
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                return !(_this60.isPrinting || _this60.isPrintEvent(event));
              }
            );
          }
          /**
           * Save current activateBreakpoints (for later restore)
           * and substitute only the printAlias breakpoint
           * @protected
           * @param {?} target
           * @param {?} bpList
           * @return {?}
           */

        }, {
          key: "startPrinting",
          value: function startPrinting(target, bpList) {
            this.isPrinting = true;
            target.activatedBreakpoints = this.queue.addPrintBreakpoints(bpList);
          }
          /**
           * For any print de-activations, reset the entire print queue
           * @protected
           * @param {?} target
           * @return {?}
           */

        }, {
          key: "stopPrinting",
          value: function stopPrinting(target) {
            target.activatedBreakpoints = this.deactivations;
            this.deactivations = [];
            this.queue.clear();
            this.isPrinting = false;
          }
          /**
           * To restore pre-Print Activations, we must capture the proper
           * list of breakpoint activations BEFORE print starts. OnBeforePrint()
           * is supported; so 'print' mediaQuery activations are used as a fallback
           * in browsers without `beforeprint` support.
           *
           * >  But activated breakpoints are deactivated BEFORE 'print' activation.
           *
           * Let's capture all de-activations using the following logic:
           *
           *  When not printing:
           *    - clear cache when activating non-print breakpoint
           *    - update cache (and sort) when deactivating
           *
           *  When printing:
           *    - sort and save when starting print
           *    - restore as activatedTargets and clear when stop printing
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "collectActivations",
          value: function collectActivations(event) {
            if (!this.isPrinting || this.isPrintingBeforeAfterEvent) {
              if (!event.matches) {
                /** @type {?} */
                var bp = this.breakpoints.findByQuery(event.mediaQuery);

                if (bp) {
                  // Deactivating a breakpoint
                  this.deactivations.push(bp);
                  this.deactivations.sort(sortDescendingPriority);
                }
              } else if (!this.isPrintingBeforeAfterEvent) {
                // Only clear deactivations if we aren't printing from a `beforeprint` event.
                // Otherwise this will clear before `stopPrinting()` is called to restore
                // the pre-Print Activations.
                this.deactivations = [];
              }
            }
          }
          /**
           * Teardown logic for the service.
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this61 = this;

            this.beforePrintEventListeners.forEach(
            /**
            * @param {?} l
            * @return {?}
            */
            function (l) {
              return _this61._document.defaultView.removeEventListener('beforeprint', l);
            });
            this.afterPrintEventListeners.forEach(
            /**
            * @param {?} l
            * @return {?}
            */
            function (l) {
              return _this61._document.defaultView.removeEventListener('afterprint', l);
            });
          }
        }, {
          key: "printAlias",
          get: function get() {
            return this.layoutConfig.printWithBreakpoints || [];
          }
          /**
           * Lookup breakpoints associated with print aliases.
           * @return {?}
           */

        }, {
          key: "printBreakPoints",
          get: function get() {
            var _this62 = this;

            return (
              /** @type {?} */
              this.printAlias.map(
              /**
              * @param {?} alias
              * @return {?}
              */
              function (alias) {
                return _this62.breakpoints.findByAlias(alias);
              }).filter(
              /**
              * @param {?} bp
              * @return {?}
              */
              function (bp) {
                return bp !== null;
              })
            );
          }
        }]);

        return PrintHook;
      }();

      PrintHook.ɵfac = function PrintHook_Factory(t) {
        return new (t || PrintHook)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };
      /** @nocollapse */


      PrintHook.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function PrintHook_Factory() {
          return new PrintHook(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LAYOUT_CONFIG), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
        },
        token: PrintHook,
        providedIn: "root"
      });
      /** @nocollapse */

      PrintHook.ctorParameters = function () {
        return [{
          type: BreakPointRegistry
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [LAYOUT_CONFIG]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintHook, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: BreakPointRegistry
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [LAYOUT_CONFIG]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }];
        }, null);
      })(); // ************************************************************************
      // Internal Utility class 'PrintQueue'
      // ************************************************************************

      /**
       * Utility class to manage print breakpoints + activatedBreakpoints
       * with correct sorting WHILE printing
       */


      var PrintQueue = /*#__PURE__*/function () {
        function PrintQueue() {
          _classCallCheck(this, PrintQueue);

          /**
           * Sorted queue with prioritized print breakpoints
           */
          this.printBreakpoints = [];
        }
        /**
         * @param {?} bpList
         * @return {?}
         */


        _createClass(PrintQueue, [{
          key: "addPrintBreakpoints",
          value: function addPrintBreakpoints(bpList) {
            var _this63 = this;

            bpList.push(BREAKPOINT_PRINT);
            bpList.sort(sortDescendingPriority);
            bpList.forEach(
            /**
            * @param {?} bp
            * @return {?}
            */
            function (bp) {
              return _this63.addBreakpoint(bp);
            });
            return this.printBreakpoints;
          }
          /**
           * Add Print breakpoint to queue
           * @param {?} bp
           * @return {?}
           */

        }, {
          key: "addBreakpoint",
          value: function addBreakpoint(bp) {
            if (!!bp) {
              /** @type {?} */
              var bpInList = this.printBreakpoints.find(
              /**
              * @param {?} it
              * @return {?}
              */
              function (it) {
                return it.mediaQuery === bp.mediaQuery;
              });

              if (bpInList === undefined) {
                // If this is a `printAlias` breakpoint, then append. If a true 'print' breakpoint,
                // register as highest priority in the queue
                this.printBreakpoints = isPrintBreakPoint(bp) ? [bp].concat(_toConsumableArray(this.printBreakpoints)) : [].concat(_toConsumableArray(this.printBreakpoints), [bp]);
              }
            }
          }
          /**
           * Restore original activated breakpoints and clear internal caches
           * @return {?}
           */

        }, {
          key: "clear",
          value: function clear() {
            this.printBreakpoints = [];
          }
        }]);

        return PrintQueue;
      }(); // ************************************************************************
      // Internal Utility methods
      // ************************************************************************

      /**
       * Only support intercept queueing if the Breakpoint is a print \@media query
       * @param {?} bp
       * @return {?}
       */


      function isPrintBreakPoint(bp) {
        return bp ? bp.mediaQuery.startsWith(PRINT) : false;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/utils/array.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Wraps the provided value in an array, unless the provided value is an array.
       * @template T
       * @param {?} value
       * @return {?}
       */


      function coerceArray(value) {
        return Array.isArray(value) ? value : [value];
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-observer/media-observer.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * MediaObserver enables applications to listen for 1..n mediaQuery activations and to determine
       * if a mediaQuery is currently activated.
       *
       * Since a breakpoint change will first deactivate 1...n mediaQueries and then possibly activate
       * 1..n mediaQueries, the MediaObserver will debounce notifications and report ALL *activations*
       * in 1 event notification. The reported activations will be sorted in descending priority order.
       *
       * This class uses the BreakPoint Registry to inject alias information into the raw MediaChange
       * notification. For custom mediaQuery notifications, alias information will not be injected and
       * those fields will be ''.
       *
       * Note: Developers should note that only mediaChange activations (not de-activations)
       *       are announced by the MediaObserver.
       *
       * \@usage
       *
       *  // RxJS
       *  import { filter } from 'rxjs/operators';
       *  import { MediaObserver } from '\@angular/flex-layout';
       *
       * \@Component({ ... })
       *  export class AppComponent {
       *    status: string = '';
       *
       *    constructor(mediaObserver: MediaObserver) {
       *      const media$ = mediaObserver.asObservable().pipe(
       *        filter((changes: MediaChange[]) => true)   // silly noop filter
       *      );
       *
       *      media$.subscribe((changes: MediaChange[]) => {
       *        let status = '';
       *        changes.forEach( change => {
       *          status += `'${change.mqAlias}' = (${change.mediaQuery}) <br/>` ;
       *        });
       *        this.status = status;
       *     });
       *
       *    }
       *  }
       */


      var MediaObserver = /*#__PURE__*/function () {
        /**
         * @param {?} breakpoints
         * @param {?} matchMedia
         * @param {?} hook
         */
        function MediaObserver(breakpoints, matchMedia, hook) {
          _classCallCheck(this, MediaObserver);

          this.breakpoints = breakpoints;
          this.matchMedia = matchMedia;
          this.hook = hook;
          /**
           * Filter MediaChange notifications for overlapping breakpoints
           */

          this.filterOverlaps = false;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this._media$ = this.watchActivations();
          this.media$ = this._media$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
          /**
          * @param {?} changes
          * @return {?}
          */
          function (changes) {
            return changes.length > 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
          /**
          * @param {?} changes
          * @return {?}
          */
          function (changes) {
            return changes[0];
          }));
        }
        /**
         * Completes the active subject, signalling to all complete for all
         * MediaObserver subscribers
         * @return {?}
         */


        _createClass(MediaObserver, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
          } // ************************************************
          // Public Methods
          // ************************************************

          /**
           * Observe changes to current activation 'list'
           * @return {?}
           */

        }, {
          key: "asObservable",
          value: function asObservable() {
            return this._media$;
          }
          /**
           * Allow programmatic query to determine if one or more media query/alias match
           * the current viewport size.
           * @param {?} value One or more media queries (or aliases) to check.
           * @return {?} Whether any of the media queries match.
           */

        }, {
          key: "isActive",
          value: function isActive(value) {
            var _this64 = this;

            /** @type {?} */
            var aliases = splitQueries(coerceArray(value));
            return aliases.some(
            /**
            * @param {?} alias
            * @return {?}
            */
            function (alias) {
              /** @type {?} */
              var query = toMediaQuery(alias, _this64.breakpoints);
              return query !== null && _this64.matchMedia.isActive(query);
            });
          } // ************************************************
          // Internal Methods
          // ************************************************

          /**
           * Register all the mediaQueries registered in the BreakPointRegistry
           * This is needed so subscribers can be auto-notified of all standard, registered
           * mediaQuery activations
           * @private
           * @return {?}
           */

        }, {
          key: "watchActivations",
          value: function watchActivations() {
            /** @type {?} */
            var queries = this.breakpoints.items.map(
            /**
            * @param {?} bp
            * @return {?}
            */
            function (bp) {
              return bp.mediaQuery;
            });
            return this.buildObservable(queries);
          }
          /**
           * Only pass/announce activations (not de-activations)
           *
           * Since multiple-mediaQueries can be activation in a cycle,
           * gather all current activations into a single list of changes to observers
           *
           * Inject associated (if any) alias information into the MediaChange event
           * - Exclude mediaQuery activations for overlapping mQs. List bounded mQ ranges only
           * - Exclude print activations that do not have an associated mediaQuery
           *
           * NOTE: the raw MediaChange events [from MatchMedia] do not
           *       contain important alias information; as such this info
           *       must be injected into the MediaChange
           * @private
           * @param {?} mqList
           * @return {?}
           */

        }, {
          key: "buildObservable",
          value: function buildObservable(mqList) {
            var _this65 = this;

            /** @type {?} */
            var hasChanges =
            /**
            * @param {?} changes
            * @return {?}
            */
            function hasChanges(changes) {
              /** @type {?} */
              var isValidQuery =
              /**
              * @param {?} change
              * @return {?}
              */
              function isValidQuery(change) {
                return change.mediaQuery.length > 0;
              };

              return changes.filter(isValidQuery).length > 0;
            };
            /** @type {?} */


            var excludeOverlaps =
            /**
            * @param {?} changes
            * @return {?}
            */
            function excludeOverlaps(changes) {
              return !_this65.filterOverlaps ? changes : changes.filter(
              /**
              * @param {?} change
              * @return {?}
              */
              function (change) {
                /** @type {?} */
                var bp = _this65.breakpoints.findByQuery(change.mediaQuery);

                return !bp ? true : !bp.overlapping;
              });
            };
            /**
             */


            return this.matchMedia.observe(this.hook.withPrintQuery(mqList)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
            /**
            * @param {?} change
            * @return {?}
            */
            function (change) {
              return change.matches;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
            /**
            * @param {?} _
            * @return {?}
            */
            function (_) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_this65.findAllActivations());
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(excludeOverlaps), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(hasChanges), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$));
          }
          /**
           * Find all current activations and prepare single list of activations
           * sorted by descending priority.
           * @private
           * @return {?}
           */

        }, {
          key: "findAllActivations",
          value: function findAllActivations() {
            var _this66 = this;

            /** @type {?} */
            var mergeMQAlias =
            /**
            * @param {?} change
            * @return {?}
            */
            function mergeMQAlias(change) {
              /** @type {?} */
              var bp = _this66.breakpoints.findByQuery(change.mediaQuery);

              return mergeAlias(change, bp);
            };
            /** @type {?} */


            var replaceWithPrintAlias =
            /**
            * @param {?} change
            * @return {?}
            */
            function replaceWithPrintAlias(change) {
              return _this66.hook.isPrintEvent(change) ? _this66.hook.updateEvent(change) : change;
            };

            return this.matchMedia.activations.map(
            /**
            * @param {?} query
            * @return {?}
            */
            function (query) {
              return new MediaChange(true, query);
            }).map(replaceWithPrintAlias).map(mergeMQAlias).sort(sortDescendingPriority);
          }
        }]);

        return MediaObserver;
      }();

      MediaObserver.ɵfac = function MediaObserver_Factory(t) {
        return new (t || MediaObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PrintHook));
      };
      /** @nocollapse */


      MediaObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function MediaObserver_Factory() {
          return new MediaObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MatchMedia), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PrintHook));
        },
        token: MediaObserver,
        providedIn: "root"
      });
      /** @nocollapse */

      MediaObserver.ctorParameters = function () {
        return [{
          type: BreakPointRegistry
        }, {
          type: MatchMedia
        }, {
          type: PrintHook
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaObserver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: BreakPointRegistry
          }, {
            type: MatchMedia
          }, {
            type: PrintHook
          }];
        }, null);
      })();
      /**
       * Find associated breakpoint (if any)
       * @param {?} query
       * @param {?} locator
       * @return {?}
       */


      function toMediaQuery(query, locator) {
        /** @type {?} */
        var bp = locator.findByAlias(query) || locator.findByQuery(query);
        return bp ? bp.mediaQuery : null;
      }
      /**
       * Split each query string into separate query strings if two queries are provided as comma
       * separated.
       * @param {?} queries
       * @return {?}
       */


      function splitQueries(queries) {
        return queries.map(
        /**
        * @param {?} query
        * @return {?}
        */
        function (query) {
          return query.split(',');
        }).reduce(
        /**
        * @param {?} a1
        * @param {?} a2
        * @return {?}
        */
        function (a1, a2) {
          return a1.concat(a2);
        }).map(
        /**
        * @param {?} query
        * @return {?}
        */
        function (query) {
          return query.trim();
        });
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-observer/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-trigger/media-trigger.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Class
       */


      var MediaTrigger = /*#__PURE__*/function () {
        /**
         * @param {?} breakpoints
         * @param {?} matchMedia
         * @param {?} layoutConfig
         * @param {?} _platformId
         * @param {?} _document
         */
        function MediaTrigger(breakpoints, matchMedia, layoutConfig, _platformId, _document) {
          _classCallCheck(this, MediaTrigger);

          this.breakpoints = breakpoints;
          this.matchMedia = matchMedia;
          this.layoutConfig = layoutConfig;
          this._platformId = _platformId;
          this._document = _document;
          this.hasCachedRegistryMatches = false;
          this.originalActivations = [];
          this.originalRegistry = new Map();
        }
        /**
         * Manually activate range of breakpoints
         * @param {?} list array of mediaQuery or alias strings
         * @return {?}
         */


        _createClass(MediaTrigger, [{
          key: "activate",
          value: function activate(list) {
            list = list.map(
            /**
            * @param {?} it
            * @return {?}
            */
            function (it) {
              return it.trim();
            }); // trim queries

            this.saveActivations();
            this.deactivateAll();
            this.setActivations(list);
            this.prepareAutoRestore();
          }
          /**
           * Restore original, 'real' breakpoints and emit events
           * to trigger stream notification
           * @return {?}
           */

        }, {
          key: "restore",
          value: function restore() {
            if (this.hasCachedRegistryMatches) {
              /** @type {?} */
              var extractQuery =
              /**
              * @param {?} change
              * @return {?}
              */
              function extractQuery(change) {
                return change.mediaQuery;
              };
              /** @type {?} */


              var list = this.originalActivations.map(extractQuery);

              try {
                this.deactivateAll();
                this.restoreRegistryMatches();
                this.setActivations(list);
              } finally {
                this.originalActivations = [];

                if (this.resizeSubscription) {
                  this.resizeSubscription.unsubscribe();
                }
              }
            }
          } // ************************************************
          // Internal Methods
          // ************************************************

          /**
           * Whenever window resizes, immediately auto-restore original
           * activations (if we are simulating activations)
           * @private
           * @return {?}
           */

        }, {
          key: "prepareAutoRestore",
          value: function prepareAutoRestore() {
            /** @type {?} */
            var isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) && this._document;
            /** @type {?} */


            var enableAutoRestore = isBrowser && this.layoutConfig.mediaTriggerAutoRestore;

            if (enableAutoRestore) {
              /** @type {?} */
              var resize$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
              this.resizeSubscription = resize$.subscribe(this.restore.bind(this));
            }
          }
          /**
           * Notify all matchMedia subscribers of de-activations
           *
           * Note: we must force 'matches' updates for
           *       future matchMedia::activation lookups
           * @private
           * @return {?}
           */

        }, {
          key: "deactivateAll",
          value: function deactivateAll() {
            /** @type {?} */
            var list = this.currentActivations;
            this.forceRegistryMatches(list, false);
            this.simulateMediaChanges(list, false);
          }
          /**
           * Cache current activations as sorted, prioritized list of MediaChanges
           * @private
           * @return {?}
           */

        }, {
          key: "saveActivations",
          value: function saveActivations() {
            var _this67 = this;

            if (!this.hasCachedRegistryMatches) {
              /** @type {?} */
              var toMediaChange =
              /**
              * @param {?} query
              * @return {?}
              */
              function toMediaChange(query) {
                return new MediaChange(true, query);
              };
              /** @type {?} */


              var mergeMQAlias =
              /**
              * @param {?} change
              * @return {?}
              */
              function mergeMQAlias(change) {
                /** @type {?} */
                var bp = _this67.breakpoints.findByQuery(change.mediaQuery);

                return mergeAlias(change, bp);
              };

              this.originalActivations = this.currentActivations.map(toMediaChange).map(mergeMQAlias).sort(sortDescendingPriority);
              this.cacheRegistryMatches();
            }
          }
          /**
           * Force set manual activations for specified mediaQuery list
           * @private
           * @param {?} list
           * @return {?}
           */

        }, {
          key: "setActivations",
          value: function setActivations(list) {
            if (!!this.originalRegistry) {
              this.forceRegistryMatches(list, true);
            }

            this.simulateMediaChanges(list);
          }
          /**
           * For specified mediaQuery list manually simulate activations or deactivations
           * @private
           * @param {?} queries
           * @param {?=} matches
           * @return {?}
           */

        }, {
          key: "simulateMediaChanges",
          value: function simulateMediaChanges(queries) {
            var _this68 = this;

            var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            /** @type {?} */
            var toMediaQuery =
            /**
            * @param {?} query
            * @return {?}
            */
            function toMediaQuery(query) {
              /** @type {?} */
              var locator = _this68.breakpoints;
              /** @type {?} */

              var bp = locator.findByAlias(query) || locator.findByQuery(query);
              return bp ? bp.mediaQuery : query;
            };
            /** @type {?} */


            var emitChangeEvent =
            /**
            * @param {?} query
            * @return {?}
            */
            function emitChangeEvent(query) {
              return _this68.emitChangeEvent(matches, query);
            };

            queries.map(toMediaQuery).forEach(emitChangeEvent);
          }
          /**
           * Replace current registry with simulated registry...
           * Note: this is required since MediaQueryList::matches is 'readOnly'
           * @private
           * @param {?} queries
           * @param {?} matches
           * @return {?}
           */

        }, {
          key: "forceRegistryMatches",
          value: function forceRegistryMatches(queries, matches) {
            /** @type {?} */
            var registry = new Map();
            queries.forEach(
            /**
            * @param {?} query
            * @return {?}
            */
            function (query) {
              registry.set(query,
              /** @type {?} */
              {
                matches: matches
              });
            });
            this.matchMedia.registry = registry;
          }
          /**
           * Save current MatchMedia::registry items.
           * @private
           * @return {?}
           */

        }, {
          key: "cacheRegistryMatches",
          value: function cacheRegistryMatches() {
            /** @type {?} */
            var target = this.originalRegistry;
            target.clear();
            this.matchMedia.registry.forEach(
            /**
            * @param {?} value
            * @param {?} key
            * @return {?}
            */
            function (value, key) {
              target.set(key, value);
            });
            this.hasCachedRegistryMatches = true;
          }
          /**
           * Restore original, 'true' registry
           * @private
           * @return {?}
           */

        }, {
          key: "restoreRegistryMatches",
          value: function restoreRegistryMatches() {
            /** @type {?} */
            var target = this.matchMedia.registry;
            target.clear();
            this.originalRegistry.forEach(
            /**
            * @param {?} value
            * @param {?} key
            * @return {?}
            */
            function (value, key) {
              target.set(key, value);
            });
            this.originalRegistry.clear();
            this.hasCachedRegistryMatches = false;
          }
          /**
           * Manually emit a MediaChange event via the MatchMedia to MediaMarshaller and MediaObserver
           * @private
           * @param {?} matches
           * @param {?} query
           * @return {?}
           */

        }, {
          key: "emitChangeEvent",
          value: function emitChangeEvent(matches, query) {
            this.matchMedia.source.next(new MediaChange(matches, query));
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "currentActivations",
          get: function get() {
            return this.matchMedia.activations;
          }
        }]);

        return MediaTrigger;
      }();

      MediaTrigger.ɵfac = function MediaTrigger_Factory(t) {
        return new (t || MediaTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };
      /** @nocollapse */


      MediaTrigger.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function MediaTrigger_Factory() {
          return new MediaTrigger(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MatchMedia), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LAYOUT_CONFIG), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
        },
        token: MediaTrigger,
        providedIn: "root"
      });
      /** @nocollapse */

      MediaTrigger.ctorParameters = function () {
        return [{
          type: BreakPointRegistry
        }, {
          type: MatchMedia
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [LAYOUT_CONFIG]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaTrigger, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: BreakPointRegistry
          }, {
            type: MatchMedia
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [LAYOUT_CONFIG]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-trigger/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/utils/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: utils/auto-prefixer.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Applies CSS prefixes to appropriate style keys.
       *
       * Note: `-ms-`, `-moz` and `-webkit-box` are no longer supported. e.g.
       *    {
       *      display: -webkit-flex;     NEW - Safari 6.1+. iOS 7.1+, BB10
       *      display: flex;             NEW, Spec - Firefox, Chrome, Opera
       *      // display: -webkit-box;   OLD - iOS 6-, Safari 3.1-6, BB7
       *      // display: -ms-flexbox;   TWEENER - IE 10
       *      // display: -moz-flexbox;  OLD - Firefox
       *    }
       * @param {?} target
       * @return {?}
       */


      function applyCssPrefixes(target) {
        for (var key in target) {
          /** @type {?} */
          var value = target[key] || '';

          switch (key) {
            case 'display':
              if (value === 'flex') {
                target['display'] = ['-webkit-flex', 'flex'];
              } else if (value === 'inline-flex') {
                target['display'] = ['-webkit-inline-flex', 'inline-flex'];
              } else {
                target['display'] = value;
              }

              break;

            case 'align-items':
            case 'align-self':
            case 'align-content':
            case 'flex':
            case 'flex-basis':
            case 'flex-flow':
            case 'flex-grow':
            case 'flex-shrink':
            case 'flex-wrap':
            case 'justify-content':
              target['-webkit-' + key] = value;
              break;

            case 'flex-direction':
              value = value || 'row';
              target['-webkit-flex-direction'] = value;
              target['flex-direction'] = value;
              break;

            case 'order':
              target['order'] = target['-webkit-' + key] = isNaN(+value) ? '0' : value;
              break;
          }
        }

        return target;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/style-utils/style-utils.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var StyleUtils = /*#__PURE__*/function () {
        /**
         * @param {?} _serverStylesheet
         * @param {?} _serverModuleLoaded
         * @param {?} _platformId
         * @param {?} layoutConfig
         */
        function StyleUtils(_serverStylesheet, _serverModuleLoaded, _platformId, layoutConfig) {
          _classCallCheck(this, StyleUtils);

          this._serverStylesheet = _serverStylesheet;
          this._serverModuleLoaded = _serverModuleLoaded;
          this._platformId = _platformId;
          this.layoutConfig = layoutConfig;
        }
        /**
         * Applies styles given via string pair or object map to the directive element
         * @param {?} element
         * @param {?} style
         * @param {?=} value
         * @return {?}
         */


        _createClass(StyleUtils, [{
          key: "applyStyleToElement",
          value: function applyStyleToElement(element, style) {
            var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            /** @type {?} */
            var styles = {};

            if (typeof style === 'string') {
              styles[style] = value;
              style = styles;
            }

            styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);

            this._applyMultiValueStyleToElement(styles, element);
          }
          /**
           * Applies styles given via string pair or object map to the directive's element
           * @param {?} style
           * @param {?=} elements
           * @return {?}
           */

        }, {
          key: "applyStyleToElements",
          value: function applyStyleToElements(style) {
            var _this69 = this;

            var elements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            /** @type {?} */
            var styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);
            elements.forEach(
            /**
            * @param {?} el
            * @return {?}
            */
            function (el) {
              _this69._applyMultiValueStyleToElement(styles, el);
            });
          }
          /**
           * Determine the DOM element's Flexbox flow (flex-direction)
           *
           * Check inline style first then check computed (stylesheet) style
           * @param {?} target
           * @return {?}
           */

        }, {
          key: "getFlowDirection",
          value: function getFlowDirection(target) {
            /** @type {?} */
            var query = 'flex-direction';
            /** @type {?} */

            var value = this.lookupStyle(target, query);
            /** @type {?} */

            var hasInlineValue = this.lookupInlineStyle(target, query) || Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this._platformId) && this._serverModuleLoaded ? value : '';
            return [value || 'row', hasInlineValue];
          }
          /**
           * @param {?} target
           * @return {?}
           */

        }, {
          key: "hasWrap",
          value: function hasWrap(target) {
            /** @type {?} */
            var query = 'flex-wrap';
            return this.lookupStyle(target, query) === 'wrap';
          }
          /**
           * Find the DOM element's raw attribute value (if any)
           * @param {?} element
           * @param {?} attribute
           * @return {?}
           */

        }, {
          key: "lookupAttributeValue",
          value: function lookupAttributeValue(element, attribute) {
            return element.getAttribute(attribute) || '';
          }
          /**
           * Find the DOM element's inline style value (if any)
           * @param {?} element
           * @param {?} styleName
           * @return {?}
           */

        }, {
          key: "lookupInlineStyle",
          value: function lookupInlineStyle(element, styleName) {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) ? element.style.getPropertyValue(styleName) : this._getServerStyle(element, styleName);
          }
          /**
           * Determine the inline or inherited CSS style
           * NOTE: platform-server has no implementation for getComputedStyle
           * @param {?} element
           * @param {?} styleName
           * @param {?=} inlineOnly
           * @return {?}
           */

        }, {
          key: "lookupStyle",
          value: function lookupStyle(element, styleName) {
            var inlineOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            /** @type {?} */
            var value = '';

            if (element) {
              /** @type {?} */
              var immediateValue = value = this.lookupInlineStyle(element, styleName);

              if (!immediateValue) {
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId)) {
                  if (!inlineOnly) {
                    value = getComputedStyle(element).getPropertyValue(styleName);
                  }
                } else {
                  if (this._serverModuleLoaded) {
                    value = this._serverStylesheet.getStyleForElement(element, styleName);
                  }
                }
              }
            } // Note: 'inline' is the default of all elements, unless UA stylesheet overrides;
            //       in which case getComputedStyle() should determine a valid value.


            return value ? value.trim() : '';
          }
          /**
           * Applies the styles to the element. The styles object map may contain an array of values
           * Each value will be added as element style
           * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
           * @private
           * @param {?} styles
           * @param {?} element
           * @return {?}
           */

        }, {
          key: "_applyMultiValueStyleToElement",
          value: function _applyMultiValueStyleToElement(styles, element) {
            var _this70 = this;

            Object.keys(styles).sort().forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              /** @type {?} */
              var el = styles[key];
              /** @type {?} */

              var values = Array.isArray(el) ? el : [el];
              values.sort();

              var _iterator3 = _createForOfIteratorHelper(values),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var value = _step3.value;
                  value = value ? value + '' : '';

                  if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this70._platformId) || !_this70._serverModuleLoaded) {
                    Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this70._platformId) ? element.style.setProperty(key, value) : _this70._setServerStyle(element, key, value);
                  } else {
                    _this70._serverStylesheet.addStyleToElement(element, key, value);
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            });
          }
          /**
           * @private
           * @param {?} element
           * @param {?} styleName
           * @param {?=} styleValue
           * @return {?}
           */

        }, {
          key: "_setServerStyle",
          value: function _setServerStyle(element, styleName, styleValue) {
            styleName = styleName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            /** @type {?} */

            var styleMap = this._readStyleAttribute(element);

            styleMap[styleName] = styleValue || '';

            this._writeStyleAttribute(element, styleMap);
          }
          /**
           * @private
           * @param {?} element
           * @param {?} styleName
           * @return {?}
           */

        }, {
          key: "_getServerStyle",
          value: function _getServerStyle(element, styleName) {
            /** @type {?} */
            var styleMap = this._readStyleAttribute(element);

            return styleMap[styleName] || '';
          }
          /**
           * @private
           * @param {?} element
           * @return {?}
           */

        }, {
          key: "_readStyleAttribute",
          value: function _readStyleAttribute(element) {
            /** @type {?} */
            var styleMap = {};
            /** @type {?} */

            var styleAttribute = element.getAttribute('style');

            if (styleAttribute) {
              /** @type {?} */
              var styleList = styleAttribute.split(/;+/g);

              for (var i = 0; i < styleList.length; i++) {
                /** @type {?} */
                var style = styleList[i].trim();

                if (style.length > 0) {
                  /** @type {?} */
                  var colonIndex = style.indexOf(':');

                  if (colonIndex === -1) {
                    throw new Error("Invalid CSS style: ".concat(style));
                  }
                  /** @type {?} */


                  var name = style.substr(0, colonIndex).trim();
                  styleMap[name] = style.substr(colonIndex + 1).trim();
                }
              }
            }

            return styleMap;
          }
          /**
           * @private
           * @param {?} element
           * @param {?} styleMap
           * @return {?}
           */

        }, {
          key: "_writeStyleAttribute",
          value: function _writeStyleAttribute(element, styleMap) {
            /** @type {?} */
            var styleAttrValue = '';

            for (var key in styleMap) {
              /** @type {?} */
              var newValue = styleMap[key];

              if (newValue) {
                styleAttrValue += key + ':' + styleMap[key] + ';';
              }
            }

            element.setAttribute('style', styleAttrValue);
          }
        }]);

        return StyleUtils;
      }();

      StyleUtils.ɵfac = function StyleUtils_Factory(t) {
        return new (t || StyleUtils)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](StylesheetMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SERVER_TOKEN), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LAYOUT_CONFIG));
      };
      /** @nocollapse */


      StyleUtils.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function StyleUtils_Factory() {
          return new StyleUtils(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(StylesheetMap), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(SERVER_TOKEN), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LAYOUT_CONFIG));
        },
        token: StyleUtils,
        providedIn: "root"
      });
      /** @nocollapse */

      StyleUtils.ctorParameters = function () {
        return [{
          type: StylesheetMap
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [SERVER_TOKEN]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [LAYOUT_CONFIG]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StyleUtils, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: StylesheetMap
          }, {
            type: Boolean,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [SERVER_TOKEN]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [LAYOUT_CONFIG]
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/style-builder/style-builder.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * A class that encapsulates CSS style generation for common directives
       * @abstract
       */


      var StyleBuilder = /*#__PURE__*/function () {
        function StyleBuilder() {
          _classCallCheck(this, StyleBuilder);

          /**
           * Whether to cache the generated output styles
           */
          this.shouldCache = true;
        }
        /**
         * Run a side effect computation given the input string and the computed styles
         * from the build task and the host configuration object
         * NOTE: This should be a no-op unless an algorithm is provided in a subclass
         * @param {?} _input
         * @param {?} _styles
         * @param {?=} _parent
         * @return {?}
         */


        _createClass(StyleBuilder, [{
          key: "sideEffect",
          value: function sideEffect(_input, _styles, _parent) {}
        }]);

        return StyleBuilder;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: core/basis-validator/basis-validator.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * The flex API permits 3 or 1 parts of the value:
       *    - `flex-grow flex-shrink flex-basis`, or
       *    - `flex-basis`
       * @param {?} basis
       * @param {?=} grow
       * @param {?=} shrink
       * @return {?}
       */


      function validateBasis(basis) {
        var grow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1';
        var shrink = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '1';

        /** @type {?} */
        var parts = [grow, shrink, basis];
        /** @type {?} */

        var j = basis.indexOf('calc');

        if (j > 0) {
          parts[2] = _validateCalcValue(basis.substring(j).trim());
          /** @type {?} */

          var matches = basis.substr(0, j).trim().split(' ');

          if (matches.length == 2) {
            parts[0] = matches[0];
            parts[1] = matches[1];
          }
        } else if (j == 0) {
          parts[2] = _validateCalcValue(basis.trim());
        } else {
          /** @type {?} */
          var _matches = basis.split(' ');

          parts = _matches.length === 3 ? _matches : [grow, shrink, basis];
        }

        return parts;
      }
      /**
       * Calc expressions require whitespace before & after any expression operators
       * This is a simple, crude whitespace padding solution.
       *   - '3 3 calc(15em + 20px)'
       *   - calc(100% / 7 * 2)
       *   - 'calc(15em + 20px)'
       *   - 'calc(15em+20px)'
       *   - '37px'
       *   = '43%'
       * @param {?} calc
       * @return {?}
       */


      function _validateCalcValue(calc) {
        return calc.replace(/[\s]/g, '').replace(/[\/\*\+\-]/g, ' $& ');
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/media-marshaller/media-marshaller.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * MediaMarshaller - register responsive values from directives and
       *                   trigger them based on media query events
       */


      var MediaMarshaller = /*#__PURE__*/function () {
        /**
         * @param {?} matchMedia
         * @param {?} breakpoints
         * @param {?} hook
         */
        function MediaMarshaller(matchMedia, breakpoints, hook) {
          _classCallCheck(this, MediaMarshaller);

          this.matchMedia = matchMedia;
          this.breakpoints = breakpoints;
          this.hook = hook;
          this.activatedBreakpoints = [];
          this.elementMap = new Map();
          this.elementKeyMap = new WeakMap();
          this.watcherMap = new WeakMap(); // special triggers to update elements
          // special triggers to update elements

          this.updateMap = new WeakMap(); // callback functions to update styles
          // callback functions to update styles

          this.clearMap = new WeakMap(); // callback functions to clear styles
          // callback functions to clear styles

          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.observeActivations();
        }
        /**
         * @return {?}
         */


        _createClass(MediaMarshaller, [{
          key: "onMediaChange",

          /**
           * Update styles on breakpoint activates or deactivates
           * @param {?} mc
           * @return {?}
           */
          value: function onMediaChange(mc) {
            /** @type {?} */
            var bp = this.findByQuery(mc.mediaQuery);

            if (bp) {
              mc = mergeAlias(mc, bp);

              if (mc.matches && this.activatedBreakpoints.indexOf(bp) === -1) {
                this.activatedBreakpoints.push(bp);
                this.activatedBreakpoints.sort(sortDescendingPriority);
                this.updateStyles();
              } else if (!mc.matches && this.activatedBreakpoints.indexOf(bp) !== -1) {
                // Remove the breakpoint when it's deactivated
                this.activatedBreakpoints.splice(this.activatedBreakpoints.indexOf(bp), 1);
                this.activatedBreakpoints.sort(sortDescendingPriority);
                this.updateStyles();
              }
            }
          }
          /**
           * initialize the marshaller with necessary elements for delegation on an element
           * @param {?} element
           * @param {?} key
           * @param {?=} updateFn optional callback so that custom bp directives don't have to re-provide this
           * @param {?=} clearFn optional callback so that custom bp directives don't have to re-provide this
           * @param {?=} extraTriggers other triggers to force style updates (e.g. layout, directionality, etc)
           * @return {?}
           */

        }, {
          key: "init",
          value: function init(element, key, updateFn, clearFn) {
            var extraTriggers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
            initBuilderMap(this.updateMap, element, key, updateFn);
            initBuilderMap(this.clearMap, element, key, clearFn);
            this.buildElementKeyMap(element, key);
            this.watchExtraTriggers(element, key, extraTriggers);
          }
          /**
           * get the value for an element and key and optionally a given breakpoint
           * @param {?} element
           * @param {?} key
           * @param {?=} bp
           * @return {?}
           */

        }, {
          key: "getValue",
          value: function getValue(element, key, bp) {
            /** @type {?} */
            var bpMap = this.elementMap.get(element);

            if (bpMap) {
              /** @type {?} */
              var values = bp !== undefined ? bpMap.get(bp) : this.getActivatedValues(bpMap, key);

              if (values) {
                return values.get(key);
              }
            }

            return undefined;
          }
          /**
           * whether the element has values for a given key
           * @param {?} element
           * @param {?} key
           * @return {?}
           */

        }, {
          key: "hasValue",
          value: function hasValue(element, key) {
            /** @type {?} */
            var bpMap = this.elementMap.get(element);

            if (bpMap) {
              /** @type {?} */
              var values = this.getActivatedValues(bpMap, key);

              if (values) {
                return values.get(key) !== undefined || false;
              }
            }

            return false;
          }
          /**
           * Set the value for an input on a directive
           * @param {?} element the element in question
           * @param {?} key the type of the directive (e.g. flex, layout-gap, etc)
           * @param {?} val the value for the breakpoint
           * @param {?} bp the breakpoint suffix (empty string = default)
           * @return {?}
           */

        }, {
          key: "setValue",
          value: function setValue(element, key, val, bp) {
            /** @type {?} */
            var bpMap = this.elementMap.get(element);

            if (!bpMap) {
              bpMap = new Map().set(bp, new Map().set(key, val));
              this.elementMap.set(element, bpMap);
            } else {
              /** @type {?} */
              var values = (bpMap.get(bp) || new Map()).set(key, val);
              bpMap.set(bp, values);
              this.elementMap.set(element, bpMap);
            }
            /** @type {?} */


            var value = this.getValue(element, key);

            if (value !== undefined) {
              this.updateElement(element, key, value);
            }
          }
          /**
           * Track element value changes for a specific key
           * @param {?} element
           * @param {?} key
           * @return {?}
           */

        }, {
          key: "trackValue",
          value: function trackValue(element, key) {
            return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
            /**
            * @param {?} v
            * @return {?}
            */
            function (v) {
              return v.element === element && v.key === key;
            }));
          }
          /**
           * update all styles for all elements on the current breakpoint
           * @return {?}
           */

        }, {
          key: "updateStyles",
          value: function updateStyles() {
            var _this71 = this;

            this.elementMap.forEach(
            /**
            * @param {?} bpMap
            * @param {?} el
            * @return {?}
            */
            function (bpMap, el) {
              /** @type {?} */
              var keyMap = new Set(
              /** @type {?} */
              _this71.elementKeyMap.get(el));
              /** @type {?} */

              var valueMap = _this71.getActivatedValues(bpMap);

              if (valueMap) {
                valueMap.forEach(
                /**
                * @param {?} v
                * @param {?} k
                * @return {?}
                */
                function (v, k) {
                  _this71.updateElement(el, k, v);

                  keyMap["delete"](k);
                });
              }

              keyMap.forEach(
              /**
              * @param {?} k
              * @return {?}
              */
              function (k) {
                valueMap = _this71.getActivatedValues(bpMap, k);

                if (valueMap) {
                  /** @type {?} */
                  var value = valueMap.get(k);

                  _this71.updateElement(el, k, value);
                } else {
                  _this71.clearElement(el, k);
                }
              });
            });
          }
          /**
           * clear the styles for a given element
           * @param {?} element
           * @param {?} key
           * @return {?}
           */

        }, {
          key: "clearElement",
          value: function clearElement(element, key) {
            /** @type {?} */
            var builders = this.clearMap.get(element);

            if (builders) {
              /** @type {?} */
              var clearFn =
              /** @type {?} */
              builders.get(key);

              if (!!clearFn) {
                clearFn();
                this.subject.next({
                  element: element,
                  key: key,
                  value: ''
                });
              }
            }
          }
          /**
           * update a given element with the activated values for a given key
           * @param {?} element
           * @param {?} key
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "updateElement",
          value: function updateElement(element, key, value) {
            /** @type {?} */
            var builders = this.updateMap.get(element);

            if (builders) {
              /** @type {?} */
              var updateFn =
              /** @type {?} */
              builders.get(key);

              if (!!updateFn) {
                updateFn(value);
                this.subject.next({
                  element: element,
                  key: key,
                  value: value
                });
              }
            }
          }
          /**
           * release all references to a given element
           * @param {?} element
           * @return {?}
           */

        }, {
          key: "releaseElement",
          value: function releaseElement(element) {
            /** @type {?} */
            var watcherMap = this.watcherMap.get(element);

            if (watcherMap) {
              watcherMap.forEach(
              /**
              * @param {?} s
              * @return {?}
              */
              function (s) {
                return s.unsubscribe();
              });
              this.watcherMap["delete"](element);
            }
            /** @type {?} */


            var elementMap = this.elementMap.get(element);

            if (elementMap) {
              elementMap.forEach(
              /**
              * @param {?} _
              * @param {?} s
              * @return {?}
              */
              function (_, s) {
                return elementMap["delete"](s);
              });
              this.elementMap["delete"](element);
            }
          }
          /**
           * trigger an update for a given element and key (e.g. layout)
           * @param {?} element
           * @param {?=} key
           * @return {?}
           */

        }, {
          key: "triggerUpdate",
          value: function triggerUpdate(element, key) {
            var _this72 = this;

            /** @type {?} */
            var bpMap = this.elementMap.get(element);

            if (bpMap) {
              /** @type {?} */
              var valueMap = this.getActivatedValues(bpMap, key);

              if (valueMap) {
                if (key) {
                  this.updateElement(element, key, valueMap.get(key));
                } else {
                  valueMap.forEach(
                  /**
                  * @param {?} v
                  * @param {?} k
                  * @return {?}
                  */
                  function (v, k) {
                    return _this72.updateElement(element, k, v);
                  });
                }
              }
            }
          }
          /**
           * Cross-reference for HTMLElement with directive key
           * @private
           * @param {?} element
           * @param {?} key
           * @return {?}
           */

        }, {
          key: "buildElementKeyMap",
          value: function buildElementKeyMap(element, key) {
            /** @type {?} */
            var keyMap = this.elementKeyMap.get(element);

            if (!keyMap) {
              keyMap = new Set();
              this.elementKeyMap.set(element, keyMap);
            }

            keyMap.add(key);
          }
          /**
           * Other triggers that should force style updates:
           * - directionality
           * - layout changes
           * - mutationobserver updates
           * @private
           * @param {?} element
           * @param {?} key
           * @param {?} triggers
           * @return {?}
           */

        }, {
          key: "watchExtraTriggers",
          value: function watchExtraTriggers(element, key, triggers) {
            var _this73 = this;

            if (triggers && triggers.length) {
              /** @type {?} */
              var watchers = this.watcherMap.get(element);

              if (!watchers) {
                watchers = new Map();
                this.watcherMap.set(element, watchers);
              }
              /** @type {?} */


              var subscription = watchers.get(key);

              if (!subscription) {
                /** @type {?} */
                var newSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"]).apply(void 0, _toConsumableArray(triggers)).subscribe(
                /**
                * @return {?}
                */
                function () {
                  /** @type {?} */
                  var currentValue = _this73.getValue(element, key);

                  _this73.updateElement(element, key, currentValue);
                });
                watchers.set(key, newSubscription);
              }
            }
          }
          /**
           * Breakpoint locator by mediaQuery
           * @private
           * @param {?} query
           * @return {?}
           */

        }, {
          key: "findByQuery",
          value: function findByQuery(query) {
            return this.breakpoints.findByQuery(query);
          }
          /**
           * get the fallback breakpoint for a given element, starting with the current breakpoint
           * @private
           * @param {?} bpMap
           * @param {?=} key
           * @return {?}
           */

        }, {
          key: "getActivatedValues",
          value: function getActivatedValues(bpMap, key) {
            for (var i = 0; i < this.activatedBreakpoints.length; i++) {
              /** @type {?} */
              var activatedBp = this.activatedBreakpoints[i];
              /** @type {?} */

              var valueMap = bpMap.get(activatedBp.alias);

              if (valueMap) {
                if (key === undefined || valueMap.has(key) && valueMap.get(key) != null) {
                  return valueMap;
                }
              }
            }
            /** @type {?} */


            var lastHope = bpMap.get('');
            return key === undefined || lastHope && lastHope.has(key) ? lastHope : undefined;
          }
          /**
           * Watch for mediaQuery breakpoint activations
           * @private
           * @return {?}
           */

        }, {
          key: "observeActivations",
          value: function observeActivations() {
            /** @type {?} */
            var target =
            /** @type {?} */

            /** @type {?} */
            this;
            /** @type {?} */

            var queries = this.breakpoints.items.map(
            /**
            * @param {?} bp
            * @return {?}
            */
            function (bp) {
              return bp.mediaQuery;
            });
            this.matchMedia.observe(this.hook.withPrintQuery(queries)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(this.hook.interceptEvents(target)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this));
          }
        }, {
          key: "activatedAlias",
          get: function get() {
            return this.activatedBreakpoints[0] ? this.activatedBreakpoints[0].alias : '';
          }
        }]);

        return MediaMarshaller;
      }();

      MediaMarshaller.ɵfac = function MediaMarshaller_Factory(t) {
        return new (t || MediaMarshaller)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PrintHook));
      };
      /** @nocollapse */


      MediaMarshaller.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function MediaMarshaller_Factory() {
          return new MediaMarshaller(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MatchMedia), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PrintHook));
        },
        token: MediaMarshaller,
        providedIn: "root"
      });
      /** @nocollapse */

      MediaMarshaller.ctorParameters = function () {
        return [{
          type: MatchMedia
        }, {
          type: BreakPointRegistry
        }, {
          type: PrintHook
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaMarshaller, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: MatchMedia
          }, {
            type: BreakPointRegistry
          }, {
            type: PrintHook
          }];
        }, null);
      })();
      /**
       * @param {?} map
       * @param {?} element
       * @param {?} key
       * @param {?=} input
       * @return {?}
       */


      function initBuilderMap(map$$1, element, key, input) {
        if (input !== undefined) {
          /** @type {?} */
          var oldMap = map$$1.get(element);

          if (!oldMap) {
            oldMap = new Map();
            map$$1.set(element, oldMap);
          }

          oldMap.set(key, input);
        }
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: core/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: core/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=core.js.map

      /***/

    },

    /***/
    "tYO7":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/sidebar/sidebarguru/sidebarguru.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tYO7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-nav-list>\r\n  <div class=\"profile-card\">\r\n    <div class=\"header\">\r\n      <h2>Yuni Suryaningsih</h2>\r\n      <h4>yuni334@yahoo.com</h4>\r\n    </div>\r\n    <img src=\"assets/logoprofile.png\">\r\n  </div>\r\n\r\n  <mat-divider></mat-divider>\r\n  <ng-material-multilevel-menu [configuration]='config' [items]='ddkelas'></ng-material-multilevel-menu>\r\n  <ng-material-multilevel-menu [configuration]='config' [items]='ddmhs'></ng-material-multilevel-menu>\r\n  <mat-divider></mat-divider>\r\n\r\n</mat-nav-list>";
      /***/
    },

    /***/
    "uJI4":
    /*!**********************************************************************************!*\
      !*** ./src/app/shared/component/sidebar/sidebarstaff/sidebarstaff.component.css ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function uJI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host .mat-icon {\r\n  vertical-align: middle;\r\n  margin-right: 20px;\r\n}\r\n\r\n.profile-card {\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n\r\n.profile-card img {\r\n  width: 100px;\r\n  height: 100px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXJzdGFmZi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNpZGViYXJzdGFmZi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgLm1hdC1pY29uIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmQgaW1nIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "xdqI":
    /*!*************************************************************!*\
      !*** ./src/app/shared/component/header/header.component.ts ***!
      \*************************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function xdqI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header.component.html */
      "ghxU");
      /* harmony import */


      var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header.component.css */
      "49JC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_layouts_akun_services_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/layouts/akun/_services/token-storage.service */
      "3QRs");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(tokenStorage, router) {
          _classCallCheck(this, HeaderComponent);

          this.tokenStorage = tokenStorage;
          this.router = router;
          this.userIsAuthenticated = false;
          this.toggleSideBarForMe = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.tokenStorage.getPengguna().peran == 'PERAN_DOSEN') {
              this.peran = "DOSEN";
            } else if (this.tokenStorage.getPengguna().peran == 'PERAN_ADMIN') {
              this.peran = "ADMIN";
            } else if (this.tokenStorage.getPengguna().peran == 'PERAN_MAHASISWA') {
              this.peran = "MAHASISWA";
            } else if (this.tokenStorage.getPengguna().peran == 'PERAN_KAPRODI') {
              this.peran = "KAPRODI";
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            this.router.navigate(['/auth/login']);
            this.tokenStorage.signOut(); // window.location.reload();
          }
        }, {
          key: "toggleSideBar",
          value: function toggleSideBar() {
            this.toggleSideBarForMe.emit();
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ctorParameters = function () {
        return [{
          type: src_app_layouts_akun_services_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      HeaderComponent.propDecorators = {
        toggleSideBarForMe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HeaderComponent);
      /***/
    },

    /***/
    "zVgB":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/sidebar/sidebarstaff/sidebarstaff.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zVgB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-nav-list>\r\n  <div class=\"profile-card\">\r\n    <div class=\"header\">\r\n      <h2>Rafif</h2>\r\n      <h4>Email</h4>\r\n    </div>\r\n    <img src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\">\r\n  </div>\r\n\r\n  <h2 MatSubheader>Tools</h2>\r\n  <mat-divider></mat-divider>\r\n  <ng-material-multilevel-menu [configuration]='config' [items]='ddstaff'></ng-material-multilevel-menu>\r\n  <ng-material-multilevel-menu [configuration]='config' [items]='ddguru'></ng-material-multilevel-menu>\r\n  <ng-material-multilevel-menu [configuration]='config' [items]='dddosen'></ng-material-multilevel-menu>\r\n  <ng-material-multilevel-menu [configuration]='config' [items]='ddmhs'></ng-material-multilevel-menu>\r\n  <mat-divider></mat-divider>\r\n\r\n</mat-nav-list>";
      /***/
    },

    /***/
    "zbaq":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/sidebar/sidebaradmin/sidebaradmin.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zbaq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-nav-list>\r\n  <div class=\"profile-card\">\r\n    <div class=\"header\">\r\n      <h2>{{nama_admin}}</h2>\r\n      <h4>{{email_admin}}</h4>\r\n    </div>\r\n    <img src=\"assets/logoprofile.png\">\r\n  </div>\r\n\r\n</mat-nav-list>";
      /***/
    },

    /***/
    "znSr":
    /*!****************************************************************************!*\
      !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js ***!
      \****************************************************************************/

    /*! exports provided: ExtendedModule, ClassDirective, DefaultClassDirective, ImgSrcStyleBuilder, ImgSrcDirective, DefaultImgSrcDirective, ShowHideStyleBuilder, ShowHideDirective, DefaultShowHideDirective, StyleDirective, DefaultStyleDirective */

    /***/
    function znSr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtendedModule", function () {
        return ExtendedModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClassDirective", function () {
        return ClassDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultClassDirective", function () {
        return DefaultClassDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImgSrcStyleBuilder", function () {
        return ImgSrcStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function () {
        return ImgSrcDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultImgSrcDirective", function () {
        return DefaultImgSrcDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowHideStyleBuilder", function () {
        return ShowHideStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function () {
        return ShowHideDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultShowHideDirective", function () {
        return DefaultShowHideDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StyleDirective", function () {
        return StyleDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultStyleDirective", function () {
        return DefaultStyleDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/core */
      "pD6V");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: extended/img-src/img-src.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ImgSrcStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_17) {
        _inherits(ImgSrcStyleBuilder, _angular_flex_layout_17);

        var _super33 = _createSuper(ImgSrcStyleBuilder);

        function ImgSrcStyleBuilder() {
          _classCallCheck(this, ImgSrcStyleBuilder);

          return _super33.apply(this, arguments);
        }

        _createClass(ImgSrcStyleBuilder, [{
          key: "buildStyles",

          /**
           * @param {?} url
           * @return {?}
           */
          value: function buildStyles(url) {
            return {
              'content': url ? "url(".concat(url, ")") : ''
            };
          }
        }]);

        return ImgSrcStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]);

      ImgSrcStyleBuilder.ɵfac = function ImgSrcStyleBuilder_Factory(t) {
        return ɵImgSrcStyleBuilder_BaseFactory(t || ImgSrcStyleBuilder);
      };
      /** @nocollapse */


      ImgSrcStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function ImgSrcStyleBuilder_Factory() {
          return new ImgSrcStyleBuilder();
        },
        token: ImgSrcStyleBuilder,
        providedIn: "root"
      });

      var ɵImgSrcStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ImgSrcStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgSrcStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var ImgSrcDirective = /*#__PURE__*/function (_angular_flex_layout_18) {
        _inherits(ImgSrcDirective, _angular_flex_layout_18);

        var _super34 = _createSuper(ImgSrcDirective);

        /**
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         * @param {?} platformId
         * @param {?} serverModuleLoaded
         */
        function ImgSrcDirective(elementRef, styleBuilder, styler, marshal, platformId, serverModuleLoaded) {
          var _this74;

          _classCallCheck(this, ImgSrcDirective);

          _this74 = _super34.call(this, elementRef, styleBuilder, styler, marshal);
          _this74.platformId = platformId;
          _this74.serverModuleLoaded = serverModuleLoaded;
          _this74.DIRECTIVE_KEY = 'img-src';
          _this74.defaultSrc = '';
          _this74.styleCache = imgSrcCache;

          _this74.init();

          _this74.setValue(_this74.nativeElement.getAttribute('src') || '', '');

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(_this74.platformId) && _this74.serverModuleLoaded) {
            _this74.nativeElement.setAttribute('src', '');
          }

          return _this74;
        }
        /**
         * @param {?} val
         * @return {?}
         */


        _createClass(ImgSrcDirective, [{
          key: "updateWithValue",

          /**
           * Use the [responsively] activated input value to update
           * the host img src attribute or assign a default `img.src=''`
           * if the src has not been defined.
           *
           * Do nothing to standard `<img src="">` usages, only when responsive
           * keys are present do we actually call `setAttribute()`
           * @protected
           * @param {?=} value
           * @return {?}
           */
          value: function updateWithValue(value) {
            /** @type {?} */
            var url = value || this.defaultSrc;

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId) && this.serverModuleLoaded) {
              this.addStyles(url);
            } else {
              this.nativeElement.setAttribute('src', url);
            }
          }
        }, {
          key: "src",
          set: function set(val) {
            this.defaultSrc = val;
            this.setValue(this.defaultSrc, '');
          }
        }]);

        return ImgSrcDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]);

      ImgSrcDirective.ɵfac = function ImgSrcDirective_Factory(t) {
        return new (t || ImgSrcDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ImgSrcStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]));
      };

      ImgSrcDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ImgSrcDirective,
        inputs: {
          src: "src"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      ImgSrcDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ImgSrcStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
          }]
        }];
      };

      ImgSrcDirective.propDecorators = {
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['src']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgSrcDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: ImgSrcStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: Boolean,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
            }]
          }];
        }, {
          src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['src']
          }]
        });
      })();
      /** @type {?} */


      var imgSrcCache = new Map();
      /** @type {?} */

      var inputs = ['src.xs', 'src.sm', 'src.md', 'src.lg', 'src.xl', 'src.lt-sm', 'src.lt-md', 'src.lt-lg', 'src.lt-xl', 'src.gt-xs', 'src.gt-sm', 'src.gt-md', 'src.gt-lg'];
      /** @type {?} */

      var selector = "\n  img[src.xs],    img[src.sm],    img[src.md],    img[src.lg],   img[src.xl],\n  img[src.lt-sm], img[src.lt-md], img[src.lt-lg], img[src.lt-xl],\n  img[src.gt-xs], img[src.gt-sm], img[src.gt-md], img[src.gt-lg]\n";
      /**
       * This directive provides a responsive API for the HTML <img> 'src' attribute
       * and will update the img.src property upon each responsive activation.
       *
       * e.g.
       *      <img src="defaultScene.jpg" src.xs="mobileScene.jpg"></img>
       *
       * @see https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-src/
       */

      var DefaultImgSrcDirective = /*#__PURE__*/function (_ImgSrcDirective) {
        _inherits(DefaultImgSrcDirective, _ImgSrcDirective);

        var _super35 = _createSuper(DefaultImgSrcDirective);

        function DefaultImgSrcDirective() {
          var _this75;

          _classCallCheck(this, DefaultImgSrcDirective);

          _this75 = _super35.apply(this, arguments);
          _this75.inputs = inputs;
          return _this75;
        }

        return DefaultImgSrcDirective;
      }(ImgSrcDirective);

      DefaultImgSrcDirective.ɵfac = function DefaultImgSrcDirective_Factory(t) {
        return ɵDefaultImgSrcDirective_BaseFactory(t || DefaultImgSrcDirective);
      };

      DefaultImgSrcDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultImgSrcDirective,
        selectors: [["img", "src.xs", ""], ["img", "src.sm", ""], ["img", "src.md", ""], ["img", "src.lg", ""], ["img", "src.xl", ""], ["img", "src.lt-sm", ""], ["img", "src.lt-md", ""], ["img", "src.lt-lg", ""], ["img", "src.lt-xl", ""], ["img", "src.gt-xs", ""], ["img", "src.gt-sm", ""], ["img", "src.gt-md", ""], ["img", "src.gt-lg", ""]],
        inputs: {
          "src.xs": "src.xs",
          "src.sm": "src.sm",
          "src.md": "src.md",
          "src.lg": "src.lg",
          "src.xl": "src.xl",
          "src.lt-sm": "src.lt-sm",
          "src.lt-md": "src.lt-md",
          "src.lt-lg": "src.lt-lg",
          "src.lt-xl": "src.lt-xl",
          "src.gt-xs": "src.gt-xs",
          "src.gt-sm": "src.gt-sm",
          "src.gt-md": "src.gt-md",
          "src.gt-lg": "src.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultImgSrcDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultImgSrcDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultImgSrcDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector,
            inputs: inputs
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: extended/class/class.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ClassDirective = /*#__PURE__*/function (_angular_flex_layout_19) {
        _inherits(ClassDirective, _angular_flex_layout_19);

        var _super36 = _createSuper(ClassDirective);

        /**
         * @param {?} elementRef
         * @param {?} styler
         * @param {?} marshal
         * @param {?} iterableDiffers
         * @param {?} keyValueDiffers
         * @param {?} renderer2
         * @param {?} ngClassInstance
         */
        function ClassDirective(elementRef, styler, marshal, iterableDiffers, keyValueDiffers, renderer2, ngClassInstance) {
          var _this76;

          _classCallCheck(this, ClassDirective);

          _this76 = _super36.call(this, elementRef,
          /** @type {?} */
          null, styler, marshal);
          _this76.ngClassInstance = ngClassInstance;
          _this76.DIRECTIVE_KEY = 'ngClass';

          if (!_this76.ngClassInstance) {
            // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been defined on
            // the same host element; since the responsive variations may be defined...
            _this76.ngClassInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"](iterableDiffers, keyValueDiffers, elementRef, renderer2);
          }

          _this76.init();

          _this76.setValue('', '');

          return _this76;
        }
        /**
         * Capture class assignments so we cache the default classes
         * which are merged with activated styles and used as fallbacks.
         * @param {?} val
         * @return {?}
         */


        _createClass(ClassDirective, [{
          key: "updateWithValue",

          /**
           * @protected
           * @param {?} value
           * @return {?}
           */
          value: function updateWithValue(value) {
            this.ngClassInstance.ngClass = value;
            this.ngClassInstance.ngDoCheck();
          } // ******************************************************************
          // Lifecycle Hooks
          // ******************************************************************

          /**
           * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
           * @return {?}
           */

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            this.ngClassInstance.ngDoCheck();
          }
        }, {
          key: "klass",
          set: function set(val) {
            this.ngClassInstance.klass = val;
            this.setValue(val, '');
          }
        }]);

        return ClassDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]);

      ClassDirective.ɵfac = function ClassDirective_Factory(t) {
        return new (t || ClassDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], 10));
      };

      ClassDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ClassDirective,
        inputs: {
          klass: ["class", "klass"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      ClassDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }];
      };

      ClassDirective.propDecorators = {
        klass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['class']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }]
          }];
        }, {
          klass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['class']
          }]
        });
      })();
      /** @type {?} */


      var inputs$1 = ['ngClass', 'ngClass.xs', 'ngClass.sm', 'ngClass.md', 'ngClass.lg', 'ngClass.xl', 'ngClass.lt-sm', 'ngClass.lt-md', 'ngClass.lt-lg', 'ngClass.lt-xl', 'ngClass.gt-xs', 'ngClass.gt-sm', 'ngClass.gt-md', 'ngClass.gt-lg'];
      /** @type {?} */

      var selector$1 = "\n  [ngClass], [ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl],\n  [ngClass.lt-sm], [ngClass.lt-md], [ngClass.lt-lg], [ngClass.lt-xl],\n  [ngClass.gt-xs], [ngClass.gt-sm], [ngClass.gt-md], [ngClass.gt-lg]\n";
      /**
       * Directive to add responsive support for ngClass.
       * This maintains the core functionality of 'ngClass' and adds responsive API
       * Note: this class is a no-op when rendered on the server
       */

      var DefaultClassDirective = /*#__PURE__*/function (_ClassDirective) {
        _inherits(DefaultClassDirective, _ClassDirective);

        var _super37 = _createSuper(DefaultClassDirective);

        function DefaultClassDirective() {
          var _this77;

          _classCallCheck(this, DefaultClassDirective);

          _this77 = _super37.apply(this, arguments);
          _this77.inputs = inputs$1;
          return _this77;
        }

        return DefaultClassDirective;
      }(ClassDirective);

      DefaultClassDirective.ɵfac = function DefaultClassDirective_Factory(t) {
        return ɵDefaultClassDirective_BaseFactory(t || DefaultClassDirective);
      };

      DefaultClassDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultClassDirective,
        selectors: [["", "ngClass", ""], ["", "ngClass.xs", ""], ["", "ngClass.sm", ""], ["", "ngClass.md", ""], ["", "ngClass.lg", ""], ["", "ngClass.xl", ""], ["", "ngClass.lt-sm", ""], ["", "ngClass.lt-md", ""], ["", "ngClass.lt-lg", ""], ["", "ngClass.lt-xl", ""], ["", "ngClass.gt-xs", ""], ["", "ngClass.gt-sm", ""], ["", "ngClass.gt-md", ""], ["", "ngClass.gt-lg", ""]],
        inputs: {
          ngClass: "ngClass",
          "ngClass.xs": "ngClass.xs",
          "ngClass.sm": "ngClass.sm",
          "ngClass.md": "ngClass.md",
          "ngClass.lg": "ngClass.lg",
          "ngClass.xl": "ngClass.xl",
          "ngClass.lt-sm": "ngClass.lt-sm",
          "ngClass.lt-md": "ngClass.lt-md",
          "ngClass.lt-lg": "ngClass.lt-lg",
          "ngClass.lt-xl": "ngClass.lt-xl",
          "ngClass.gt-xs": "ngClass.gt-xs",
          "ngClass.gt-sm": "ngClass.gt-sm",
          "ngClass.gt-md": "ngClass.gt-md",
          "ngClass.gt-lg": "ngClass.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultClassDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultClassDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultClassDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$1,
            inputs: inputs$1
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: extended/show-hide/show-hide.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ShowHideStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_20) {
        _inherits(ShowHideStyleBuilder, _angular_flex_layout_20);

        var _super38 = _createSuper(ShowHideStyleBuilder);

        function ShowHideStyleBuilder() {
          _classCallCheck(this, ShowHideStyleBuilder);

          return _super38.apply(this, arguments);
        }

        _createClass(ShowHideStyleBuilder, [{
          key: "buildStyles",

          /**
           * @param {?} show
           * @param {?} parent
           * @return {?}
           */
          value: function buildStyles(show, parent) {
            /** @type {?} */
            var shouldShow = show === 'true';
            return {
              'display': shouldShow ? parent.display || (parent.isServer ? 'initial' : '') : 'none'
            };
          }
        }]);

        return ShowHideStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]);

      ShowHideStyleBuilder.ɵfac = function ShowHideStyleBuilder_Factory(t) {
        return ɵShowHideStyleBuilder_BaseFactory(t || ShowHideStyleBuilder);
      };
      /** @nocollapse */


      ShowHideStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function ShowHideStyleBuilder_Factory() {
          return new ShowHideStyleBuilder();
        },
        token: ShowHideStyleBuilder,
        providedIn: "root"
      });

      var ɵShowHideStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ShowHideStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowHideStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var ShowHideDirective = /*#__PURE__*/function (_angular_flex_layout_21) {
        _inherits(ShowHideDirective, _angular_flex_layout_21);

        var _super39 = _createSuper(ShowHideDirective);

        /**
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         * @param {?} layoutConfig
         * @param {?} platformId
         * @param {?} serverModuleLoaded
         */
        function ShowHideDirective(elementRef, styleBuilder, styler, marshal, layoutConfig, platformId, serverModuleLoaded) {
          var _this78;

          _classCallCheck(this, ShowHideDirective);

          _this78 = _super39.call(this, elementRef, styleBuilder, styler, marshal);
          _this78.layoutConfig = layoutConfig;
          _this78.platformId = platformId;
          _this78.serverModuleLoaded = serverModuleLoaded;
          _this78.DIRECTIVE_KEY = 'show-hide';
          /**
           * Original DOM Element CSS display style
           */

          _this78.display = '';
          _this78.hasLayout = false;
          _this78.hasFlexChild = false;
          return _this78;
        } // *********************************************
        // Lifecycle Methods
        // *********************************************

        /**
         * @return {?}
         */


        _createClass(ShowHideDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.trackExtraTriggers();
            /** @type {?} */

            var children = Array.from(this.nativeElement.children);

            for (var i = 0; i < children.length; i++) {
              if (this.marshal.hasValue(
              /** @type {?} */
              children[i], 'flex')) {
                this.hasFlexChild = true;
                break;
              }
            }

            if (DISPLAY_MAP.has(this.nativeElement)) {
              this.display =
              /** @type {?} */
              DISPLAY_MAP.get(this.nativeElement);
            } else {
              this.display = this.getDisplayStyle();
              DISPLAY_MAP.set(this.nativeElement, this.display);
            }

            this.init(); // set the default to show unless explicitly overridden

            /** @type {?} */

            var defaultValue = this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY, '');

            if (defaultValue === undefined || defaultValue === '') {
              this.setValue(true, '');
            } else {
              this.triggerUpdate();
            }
          }
          /**
           * On changes to any \@Input properties...
           * Default to use the non-responsive Input value ('fxShow')
           * Then conditionally override with the mq-activated Input's current value
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this79 = this;

            Object.keys(changes).forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              if (_this79.inputs.indexOf(key) !== -1) {
                /** @type {?} */
                var inputKey = key.split('.');
                /** @type {?} */

                var bp = inputKey.slice(1).join('.');
                /** @type {?} */

                var inputValue = changes[key].currentValue;
                /** @type {?} */

                var shouldShow = inputValue !== '' ? inputValue !== 0 ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(inputValue) : false : true;

                if (inputKey[0] === 'fxHide') {
                  shouldShow = !shouldShow;
                }

                _this79.setValue(shouldShow, bp);
              }
            });
          } // *********************************************
          // Protected methods
          // *********************************************

          /**
           *  Watch for these extra triggers to update fxShow, fxHide stylings
           * @protected
           * @return {?}
           */

        }, {
          key: "trackExtraTriggers",
          value: function trackExtraTriggers() {
            var _this80 = this;

            this.hasLayout = this.marshal.hasValue(this.nativeElement, 'layout');
            ['layout', 'layout-align'].forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              _this80.marshal.trackValue(_this80.nativeElement, key).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this80.destroySubject)).subscribe(_this80.triggerUpdate.bind(_this80));
            });
          }
          /**
           * Override accessor to the current HTMLElement's `display` style
           * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
           * unless it was already explicitly specified inline or in a CSS stylesheet.
           * @protected
           * @return {?}
           */

        }, {
          key: "getDisplayStyle",
          value: function getDisplayStyle() {
            return this.hasLayout || this.hasFlexChild && this.layoutConfig.addFlexToParent ? 'flex' : this.styler.lookupStyle(this.nativeElement, 'display', true);
          }
          /**
           * Validate the visibility value and then update the host's inline display style
           * @protected
           * @param {?=} value
           * @return {?}
           */

        }, {
          key: "updateWithValue",
          value: function updateWithValue() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (value === '') {
              return;
            }
            /** @type {?} */


            var isServer = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId);
            this.addStyles(value ? 'true' : 'false', {
              display: this.display,
              isServer: isServer
            });

            if (isServer && this.serverModuleLoaded) {
              this.nativeElement.style.setProperty('display', '');
            }

            this.marshal.triggerUpdate(
            /** @type {?} */
            this.parentElement, 'layout-gap');
          }
        }]);

        return ShowHideDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]);

      ShowHideDirective.ɵfac = function ShowHideDirective_Factory(t) {
        return new (t || ShowHideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ShowHideStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]));
      };

      ShowHideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ShowHideDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      ShowHideDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ShowHideStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"]]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowHideDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: ShowHideStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"]]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: Boolean,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
            }]
          }];
        }, null);
      })();
      /** @type {?} */


      var DISPLAY_MAP = new WeakMap();
      /** @type {?} */

      var inputs$2 = ['fxShow', 'fxShow.print', 'fxShow.xs', 'fxShow.sm', 'fxShow.md', 'fxShow.lg', 'fxShow.xl', 'fxShow.lt-sm', 'fxShow.lt-md', 'fxShow.lt-lg', 'fxShow.lt-xl', 'fxShow.gt-xs', 'fxShow.gt-sm', 'fxShow.gt-md', 'fxShow.gt-lg', 'fxHide', 'fxHide.print', 'fxHide.xs', 'fxHide.sm', 'fxHide.md', 'fxHide.lg', 'fxHide.xl', 'fxHide.lt-sm', 'fxHide.lt-md', 'fxHide.lt-lg', 'fxHide.lt-xl', 'fxHide.gt-xs', 'fxHide.gt-sm', 'fxHide.gt-md', 'fxHide.gt-lg'];
      /** @type {?} */

      var selector$2 = "\n  [fxShow], [fxShow.print],\n  [fxShow.xs], [fxShow.sm], [fxShow.md], [fxShow.lg], [fxShow.xl],\n  [fxShow.lt-sm], [fxShow.lt-md], [fxShow.lt-lg], [fxShow.lt-xl],\n  [fxShow.gt-xs], [fxShow.gt-sm], [fxShow.gt-md], [fxShow.gt-lg],\n  [fxHide], [fxHide.print],\n  [fxHide.xs], [fxHide.sm], [fxHide.md], [fxHide.lg], [fxHide.xl],\n  [fxHide.lt-sm], [fxHide.lt-md], [fxHide.lt-lg], [fxHide.lt-xl],\n  [fxHide.gt-xs], [fxHide.gt-sm], [fxHide.gt-md], [fxHide.gt-lg]\n";
      /**
       * 'show' Layout API directive
       */

      var DefaultShowHideDirective = /*#__PURE__*/function (_ShowHideDirective) {
        _inherits(DefaultShowHideDirective, _ShowHideDirective);

        var _super40 = _createSuper(DefaultShowHideDirective);

        function DefaultShowHideDirective() {
          var _this81;

          _classCallCheck(this, DefaultShowHideDirective);

          _this81 = _super40.apply(this, arguments);
          _this81.inputs = inputs$2;
          return _this81;
        }

        return DefaultShowHideDirective;
      }(ShowHideDirective);

      DefaultShowHideDirective.ɵfac = function DefaultShowHideDirective_Factory(t) {
        return ɵDefaultShowHideDirective_BaseFactory(t || DefaultShowHideDirective);
      };

      DefaultShowHideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultShowHideDirective,
        selectors: [["", "fxShow", ""], ["", "fxShow.print", ""], ["", "fxShow.xs", ""], ["", "fxShow.sm", ""], ["", "fxShow.md", ""], ["", "fxShow.lg", ""], ["", "fxShow.xl", ""], ["", "fxShow.lt-sm", ""], ["", "fxShow.lt-md", ""], ["", "fxShow.lt-lg", ""], ["", "fxShow.lt-xl", ""], ["", "fxShow.gt-xs", ""], ["", "fxShow.gt-sm", ""], ["", "fxShow.gt-md", ""], ["", "fxShow.gt-lg", ""], ["", "fxHide", ""], ["", "fxHide.print", ""], ["", "fxHide.xs", ""], ["", "fxHide.sm", ""], ["", "fxHide.md", ""], ["", "fxHide.lg", ""], ["", "fxHide.xl", ""], ["", "fxHide.lt-sm", ""], ["", "fxHide.lt-md", ""], ["", "fxHide.lt-lg", ""], ["", "fxHide.lt-xl", ""], ["", "fxHide.gt-xs", ""], ["", "fxHide.gt-sm", ""], ["", "fxHide.gt-md", ""], ["", "fxHide.gt-lg", ""]],
        inputs: {
          fxShow: "fxShow",
          "fxShow.print": "fxShow.print",
          "fxShow.xs": "fxShow.xs",
          "fxShow.sm": "fxShow.sm",
          "fxShow.md": "fxShow.md",
          "fxShow.lg": "fxShow.lg",
          "fxShow.xl": "fxShow.xl",
          "fxShow.lt-sm": "fxShow.lt-sm",
          "fxShow.lt-md": "fxShow.lt-md",
          "fxShow.lt-lg": "fxShow.lt-lg",
          "fxShow.lt-xl": "fxShow.lt-xl",
          "fxShow.gt-xs": "fxShow.gt-xs",
          "fxShow.gt-sm": "fxShow.gt-sm",
          "fxShow.gt-md": "fxShow.gt-md",
          "fxShow.gt-lg": "fxShow.gt-lg",
          fxHide: "fxHide",
          "fxHide.print": "fxHide.print",
          "fxHide.xs": "fxHide.xs",
          "fxHide.sm": "fxHide.sm",
          "fxHide.md": "fxHide.md",
          "fxHide.lg": "fxHide.lg",
          "fxHide.xl": "fxHide.xl",
          "fxHide.lt-sm": "fxHide.lt-sm",
          "fxHide.lt-md": "fxHide.lt-md",
          "fxHide.lt-lg": "fxHide.lt-lg",
          "fxHide.lt-xl": "fxHide.lt-xl",
          "fxHide.gt-xs": "fxHide.gt-xs",
          "fxHide.gt-sm": "fxHide.gt-sm",
          "fxHide.gt-md": "fxHide.gt-md",
          "fxHide.gt-lg": "fxHide.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultShowHideDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultShowHideDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultShowHideDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$2,
            inputs: inputs$2
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: extended/style/style-transforms.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * NgStyle allowed inputs
       */


      var NgStyleKeyValue =
      /**
       * @param {?} key
       * @param {?} value
       * @param {?=} noQuotes
       */
      function NgStyleKeyValue(key, value) {
        var noQuotes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        _classCallCheck(this, NgStyleKeyValue);

        this.key = key;
        this.value = value;
        this.key = noQuotes ? key.replace(/['"]/g, '').trim() : key.trim();
        this.value = noQuotes ? value.replace(/['"]/g, '').trim() : value.trim();
        this.value = this.value.replace(/;/, '');
      };
      /**
       * @param {?} target
       * @return {?}
       */


      function getType(target) {
        /** @type {?} */
        var what = typeof target;

        if (what === 'object') {
          return target.constructor === Array ? 'array' : target.constructor === Set ? 'set' : 'object';
        }

        return what;
      }
      /**
       * Split string of key:value pairs into Array of k-v pairs
       * e.g.  'key:value; key:value; key:value;' -> ['key:value',...]
       * @param {?} source
       * @param {?=} delimiter
       * @return {?}
       */


      function buildRawList(source) {
        var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ';';
        return String(source).trim().split(delimiter).map(
        /**
        * @param {?} val
        * @return {?}
        */
        function (val) {
          return val.trim();
        }).filter(
        /**
        * @param {?} val
        * @return {?}
        */
        function (val) {
          return val !== '';
        });
      }
      /**
       * Convert array of key:value strings to a iterable map object
       * @param {?} styles
       * @param {?=} sanitize
       * @return {?}
       */


      function buildMapFromList(styles, sanitize) {
        /** @type {?} */
        var sanitizeValue =
        /**
        * @param {?} it
        * @return {?}
        */
        function sanitizeValue(it) {
          if (sanitize) {
            it.value = sanitize(it.value);
          }

          return it;
        };

        return styles.map(stringToKeyValue).filter(
        /**
        * @param {?} entry
        * @return {?}
        */
        function (entry) {
          return !!entry;
        }).map(sanitizeValue).reduce(keyValuesToMap,
        /** @type {?} */
        {});
      }
      /**
       * Convert Set<string> or raw Object to an iterable NgStyleMap
       * @param {?} source
       * @param {?=} sanitize
       * @return {?}
       */


      function buildMapFromSet(source, sanitize) {
        /** @type {?} */
        var list = [];

        if (getType(source) === 'set') {
          /** @type {?} */
          source.forEach(
          /**
          * @param {?} entry
          * @return {?}
          */
          function (entry) {
            return list.push(entry);
          });
        } else {
          Object.keys(source).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            list.push("".concat(key, ":").concat(
            /** @type {?} */
            source[key]));
          });
        }

        return buildMapFromList(list, sanitize);
      }
      /**
       * Convert 'key:value' -> [key, value]
       * @param {?} it
       * @return {?}
       */


      function stringToKeyValue(it) {
        var _it$split = it.split(':'),
            _it$split2 = _toArray(_it$split),
            key = _it$split2[0],
            vals = _it$split2.slice(1);

        return new NgStyleKeyValue(key, vals.join(':'));
      }
      /**
       * Convert [ [key,value] ] -> { key : value }
       * @param {?} map
       * @param {?} entry
       * @return {?}
       */


      function keyValuesToMap(map, entry) {
        if (!!entry.key) {
          map[entry.key] = entry.value;
        }

        return map;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: extended/style/style.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var StyleDirective = /*#__PURE__*/function (_angular_flex_layout_22) {
        _inherits(StyleDirective, _angular_flex_layout_22);

        var _super41 = _createSuper(StyleDirective);

        /**
         * @param {?} elementRef
         * @param {?} styler
         * @param {?} marshal
         * @param {?} sanitizer
         * @param {?} differs
         * @param {?} renderer2
         * @param {?} ngStyleInstance
         * @param {?} serverLoaded
         * @param {?} platformId
         */
        function StyleDirective(elementRef, styler, marshal, sanitizer, differs, renderer2, ngStyleInstance, serverLoaded, platformId) {
          var _this82;

          _classCallCheck(this, StyleDirective);

          _this82 = _super41.call(this, elementRef,
          /** @type {?} */
          null, styler, marshal);
          _this82.sanitizer = sanitizer;
          _this82.ngStyleInstance = ngStyleInstance;
          _this82.DIRECTIVE_KEY = 'ngStyle';

          if (!_this82.ngStyleInstance) {
            // Create an instance NgStyle Directive instance only if `ngStyle=""` has NOT been
            // defined on the same host element; since the responsive variations may be defined...
            _this82.ngStyleInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"](elementRef, differs, renderer2);
          }

          _this82.init();
          /** @type {?} */


          var styles = _this82.nativeElement.getAttribute('style') || '';
          _this82.fallbackStyles = _this82.buildStyleMap(styles);
          _this82.isServer = serverLoaded && Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(platformId);
          return _this82;
        }
        /**
         * Add generated styles
         * @protected
         * @param {?} value
         * @return {?}
         */


        _createClass(StyleDirective, [{
          key: "updateWithValue",
          value: function updateWithValue(value) {
            /** @type {?} */
            var styles = this.buildStyleMap(value);
            this.ngStyleInstance.ngStyle = Object.assign(Object.assign({}, this.fallbackStyles), styles);

            if (this.isServer) {
              this.applyStyleToElement(styles);
            }

            this.ngStyleInstance.ngDoCheck();
          }
          /**
           * Remove generated styles
           * @protected
           * @return {?}
           */

        }, {
          key: "clearStyles",
          value: function clearStyles() {
            this.ngStyleInstance.ngStyle = this.fallbackStyles;
            this.ngStyleInstance.ngDoCheck();
          }
          /**
           * Convert raw strings to ngStyleMap; which is required by ngStyle
           * NOTE: Raw string key-value pairs MUST be delimited by `;`
           *       Comma-delimiters are not supported due to complexities of
           *       possible style values such as `rgba(x,x,x,x)` and others
           * @protected
           * @param {?} styles
           * @return {?}
           */

        }, {
          key: "buildStyleMap",
          value: function buildStyleMap(styles) {
            var _this83 = this;

            // Always safe-guard (aka sanitize) style property values

            /** @type {?} */
            var sanitizer =
            /**
            * @param {?} val
            * @return {?}
            */
            function sanitizer(val) {
              return _this83.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].STYLE, val) || '';
            };

            if (styles) {
              switch (getType(styles)) {
                case 'string':
                  return buildMapFromList$1(buildRawList(styles), sanitizer);

                case 'array':
                  return buildMapFromList$1(
                  /** @type {?} */
                  styles, sanitizer);

                case 'set':
                  return buildMapFromSet(styles, sanitizer);

                default:
                  return buildMapFromSet(styles, sanitizer);
              }
            }

            return {};
          } // ******************************************************************
          // Lifecycle Hooks
          // ******************************************************************

          /**
           * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
           * @return {?}
           */

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            this.ngStyleInstance.ngDoCheck();
          }
        }]);

        return StyleDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]);

      StyleDirective.ɵfac = function StyleDirective_Factory(t) {
        return new (t || StyleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      };

      StyleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: StyleDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      StyleDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StyleDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }]
          }, {
            type: Boolean,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }];
        }, null);
      })();
      /** @type {?} */


      var inputs$3 = ['ngStyle', 'ngStyle.xs', 'ngStyle.sm', 'ngStyle.md', 'ngStyle.lg', 'ngStyle.xl', 'ngStyle.lt-sm', 'ngStyle.lt-md', 'ngStyle.lt-lg', 'ngStyle.lt-xl', 'ngStyle.gt-xs', 'ngStyle.gt-sm', 'ngStyle.gt-md', 'ngStyle.gt-lg'];
      /** @type {?} */

      var selector$3 = "\n  [ngStyle],\n  [ngStyle.xs], [ngStyle.sm], [ngStyle.md], [ngStyle.lg], [ngStyle.xl],\n  [ngStyle.lt-sm], [ngStyle.lt-md], [ngStyle.lt-lg], [ngStyle.lt-xl],\n  [ngStyle.gt-xs], [ngStyle.gt-sm], [ngStyle.gt-md], [ngStyle.gt-lg]\n";
      /**
       * Directive to add responsive support for ngStyle.
       *
       */

      var DefaultStyleDirective = /*#__PURE__*/function (_StyleDirective) {
        _inherits(DefaultStyleDirective, _StyleDirective);

        var _super42 = _createSuper(DefaultStyleDirective);

        function DefaultStyleDirective() {
          var _this84;

          _classCallCheck(this, DefaultStyleDirective);

          _this84 = _super42.apply(this, arguments);
          _this84.inputs = inputs$3;
          return _this84;
        }

        return DefaultStyleDirective;
      }(StyleDirective);

      DefaultStyleDirective.ɵfac = function DefaultStyleDirective_Factory(t) {
        return ɵDefaultStyleDirective_BaseFactory(t || DefaultStyleDirective);
      };

      DefaultStyleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultStyleDirective,
        selectors: [["", "ngStyle", ""], ["", "ngStyle.xs", ""], ["", "ngStyle.sm", ""], ["", "ngStyle.md", ""], ["", "ngStyle.lg", ""], ["", "ngStyle.xl", ""], ["", "ngStyle.lt-sm", ""], ["", "ngStyle.lt-md", ""], ["", "ngStyle.lt-lg", ""], ["", "ngStyle.lt-xl", ""], ["", "ngStyle.gt-xs", ""], ["", "ngStyle.gt-sm", ""], ["", "ngStyle.gt-md", ""], ["", "ngStyle.gt-lg", ""]],
        inputs: {
          ngStyle: "ngStyle",
          "ngStyle.xs": "ngStyle.xs",
          "ngStyle.sm": "ngStyle.sm",
          "ngStyle.md": "ngStyle.md",
          "ngStyle.lg": "ngStyle.lg",
          "ngStyle.xl": "ngStyle.xl",
          "ngStyle.lt-sm": "ngStyle.lt-sm",
          "ngStyle.lt-md": "ngStyle.lt-md",
          "ngStyle.lt-lg": "ngStyle.lt-lg",
          "ngStyle.lt-xl": "ngStyle.lt-xl",
          "ngStyle.gt-xs": "ngStyle.gt-xs",
          "ngStyle.gt-sm": "ngStyle.gt-sm",
          "ngStyle.gt-md": "ngStyle.gt-md",
          "ngStyle.gt-lg": "ngStyle.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultStyleDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultStyleDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultStyleDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$3,
            inputs: inputs$3
          }]
        }], null, null);
      })();
      /**
       * Build a styles map from a list of styles, while sanitizing bad values first
       * @param {?} styles
       * @param {?=} sanitize
       * @return {?}
       */


      function buildMapFromList$1(styles, sanitize) {
        /** @type {?} */
        var sanitizeValue =
        /**
        * @param {?} it
        * @return {?}
        */
        function sanitizeValue(it) {
          if (sanitize) {
            it.value = sanitize(it.value);
          }

          return it;
        };

        return styles.map(stringToKeyValue).filter(
        /**
        * @param {?} entry
        * @return {?}
        */
        function (entry) {
          return !!entry;
        }).map(sanitizeValue).reduce(keyValuesToMap,
        /** @type {?} */
        {});
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: extended/module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var ALL_DIRECTIVES = [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective];
      /**
       * *****************************************************************
       * Define module for the Extended API
       * *****************************************************************
       */

      var ExtendedModule = function ExtendedModule() {
        _classCallCheck(this, ExtendedModule);
      };

      ExtendedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ExtendedModule
      });
      ExtendedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ExtendedModule_Factory(t) {
          return new (t || ExtendedModule)();
        },
        imports: [[_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExtendedModule, {
          declarations: function declarations() {
            return [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective];
          },
          imports: function imports() {
            return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]];
          },
          exports: function exports() {
            return [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtendedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]],
            declarations: [].concat(ALL_DIRECTIVES),
            exports: [].concat(ALL_DIRECTIVES)
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: extended/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: extended/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=extended.js.map

      /***/

    },

    /***/
    "zpSk":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/grid.js ***!
      \************************************************************************/

    /*! exports provided: GridModule, ɵgrid_privatef, ɵgrid_privatee, ɵgrid_privated, ɵgrid_privatei, ɵgrid_privateh, ɵgrid_privateg, ɵgrid_privatel, ɵgrid_privatek, ɵgrid_privatej, ɵgrid_privateo, ɵgrid_privaten, ɵgrid_privatem, ɵgrid_privater, ɵgrid_privateq, ɵgrid_privatep, ɵgrid_privateu, ɵgrid_privatet, ɵgrid_privates, ɵgrid_privatex, ɵgrid_privatew, ɵgrid_privatev, ɵgrid_privateba, ɵgrid_privatez, ɵgrid_privatey, ɵgrid_privatec, ɵgrid_privateb, ɵgrid_privatea, ɵgrid_privatebd, ɵgrid_privatebc, ɵgrid_privatebb, ɵgrid_privatebg, ɵgrid_privatebf, ɵgrid_privatebe */

    /***/
    function zpSk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GridModule", function () {
        return GridModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatef", function () {
        return DefaultGridAlignColumnsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatee", function () {
        return GridAlignColumnsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privated", function () {
        return GridAlignColumnsStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatei", function () {
        return DefaultGridAlignRowsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateh", function () {
        return GridAlignRowsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateg", function () {
        return GridAlignRowsStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatel", function () {
        return DefaultGridAreaDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatek", function () {
        return GridAreaDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatej", function () {
        return GridAreaStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateo", function () {
        return DefaultGridAreasDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privaten", function () {
        return GridAreasDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatem", function () {
        return GridAreasStyleBuiler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privater", function () {
        return DefaultGridAutoDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateq", function () {
        return GridAutoDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatep", function () {
        return GridAutoStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateu", function () {
        return DefaultGridColumnDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatet", function () {
        return GridColumnDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privates", function () {
        return GridColumnStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatex", function () {
        return DefaultGridColumnsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatew", function () {
        return GridColumnsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatev", function () {
        return GridColumnsStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateba", function () {
        return DefaultGridGapDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatez", function () {
        return GridGapDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatey", function () {
        return GridGapStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatec", function () {
        return DefaultGridAlignDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privateb", function () {
        return GridAlignDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatea", function () {
        return GridAlignStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebd", function () {
        return DefaultGridRowDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebc", function () {
        return GridRowDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebb", function () {
        return GridRowStyleBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebg", function () {
        return DefaultGridRowsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebf", function () {
        return GridRowsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebe", function () {
        return GridRowsStyleBuilder;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/core */
      "pD6V");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: grid/grid-align/grid-align.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var ROW_DEFAULT = 'stretch';
      /** @type {?} */

      var COL_DEFAULT = 'stretch';

      var GridAlignStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_23) {
        _inherits(GridAlignStyleBuilder, _angular_flex_layout_23);

        var _super43 = _createSuper(GridAlignStyleBuilder);

        function GridAlignStyleBuilder() {
          _classCallCheck(this, GridAlignStyleBuilder);

          return _super43.apply(this, arguments);
        }

        _createClass(GridAlignStyleBuilder, [{
          key: "buildStyles",

          /**
           * @param {?} input
           * @return {?}
           */
          value: function buildStyles(input) {
            return buildCss(input || ROW_DEFAULT);
          }
        }]);

        return GridAlignStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridAlignStyleBuilder.ɵfac = function GridAlignStyleBuilder_Factory(t) {
        return ɵGridAlignStyleBuilder_BaseFactory(t || GridAlignStyleBuilder);
      };
      /** @nocollapse */


      GridAlignStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridAlignStyleBuilder_Factory() {
          return new GridAlignStyleBuilder();
        },
        token: GridAlignStyleBuilder,
        providedIn: "root"
      });

      var ɵGridAlignStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAlignStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAlignStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridAlignDirective = /*#__PURE__*/function (_angular_flex_layout_24) {
        _inherits(GridAlignDirective, _angular_flex_layout_24);

        var _super44 = _createSuper(GridAlignDirective);

        /**
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         */
        function GridAlignDirective(elementRef, styleBuilder, styler, marshal) {
          var _this85;

          _classCallCheck(this, GridAlignDirective);

          _this85 = _super44.call(this, elementRef, styleBuilder, styler, marshal);
          _this85.DIRECTIVE_KEY = 'grid-align';
          _this85.styleCache = alignCache;

          _this85.init();

          return _this85;
        }

        return GridAlignDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridAlignDirective.ɵfac = function GridAlignDirective_Factory(t) {
        return new (t || GridAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridAlignDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridAlignDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridAlignStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAlignDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: GridAlignStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, null);
      })();
      /** @type {?} */


      var alignCache = new Map();
      /** @type {?} */

      var inputs = ['gdGridAlign', 'gdGridAlign.xs', 'gdGridAlign.sm', 'gdGridAlign.md', 'gdGridAlign.lg', 'gdGridAlign.xl', 'gdGridAlign.lt-sm', 'gdGridAlign.lt-md', 'gdGridAlign.lt-lg', 'gdGridAlign.lt-xl', 'gdGridAlign.gt-xs', 'gdGridAlign.gt-sm', 'gdGridAlign.gt-md', 'gdGridAlign.gt-lg'];
      /** @type {?} */

      var selector = "\n  [gdGridAlign],\n  [gdGridAlign.xs], [gdGridAlign.sm], [gdGridAlign.md], [gdGridAlign.lg],[gdGridAlign.xl],\n  [gdGridAlign.lt-sm], [gdGridAlign.lt-md], [gdGridAlign.lt-lg], [gdGridAlign.lt-xl],\n  [gdGridAlign.gt-xs], [gdGridAlign.gt-sm], [gdGridAlign.gt-md], [gdGridAlign.gt-lg]\n";
      /**
       * 'align' CSS Grid styling directive for grid children
       *  Defines positioning of child elements along row and column axis in a grid container
       *  Optional values: {row-axis} values or {row-axis column-axis} value pairs
       *
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-self
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-self
       */

      var DefaultGridAlignDirective = /*#__PURE__*/function (_GridAlignDirective) {
        _inherits(DefaultGridAlignDirective, _GridAlignDirective);

        var _super45 = _createSuper(DefaultGridAlignDirective);

        function DefaultGridAlignDirective() {
          var _this86;

          _classCallCheck(this, DefaultGridAlignDirective);

          _this86 = _super45.apply(this, arguments);
          _this86.inputs = inputs;
          return _this86;
        }

        return DefaultGridAlignDirective;
      }(GridAlignDirective);

      DefaultGridAlignDirective.ɵfac = function DefaultGridAlignDirective_Factory(t) {
        return ɵDefaultGridAlignDirective_BaseFactory(t || DefaultGridAlignDirective);
      };

      DefaultGridAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridAlignDirective,
        selectors: [["", "gdGridAlign", ""], ["", "gdGridAlign.xs", ""], ["", "gdGridAlign.sm", ""], ["", "gdGridAlign.md", ""], ["", "gdGridAlign.lg", ""], ["", "gdGridAlign.xl", ""], ["", "gdGridAlign.lt-sm", ""], ["", "gdGridAlign.lt-md", ""], ["", "gdGridAlign.lt-lg", ""], ["", "gdGridAlign.lt-xl", ""], ["", "gdGridAlign.gt-xs", ""], ["", "gdGridAlign.gt-sm", ""], ["", "gdGridAlign.gt-md", ""], ["", "gdGridAlign.gt-lg", ""]],
        inputs: {
          gdGridAlign: "gdGridAlign",
          "gdGridAlign.xs": "gdGridAlign.xs",
          "gdGridAlign.sm": "gdGridAlign.sm",
          "gdGridAlign.md": "gdGridAlign.md",
          "gdGridAlign.lg": "gdGridAlign.lg",
          "gdGridAlign.xl": "gdGridAlign.xl",
          "gdGridAlign.lt-sm": "gdGridAlign.lt-sm",
          "gdGridAlign.lt-md": "gdGridAlign.lt-md",
          "gdGridAlign.lt-lg": "gdGridAlign.lt-lg",
          "gdGridAlign.lt-xl": "gdGridAlign.lt-xl",
          "gdGridAlign.gt-xs": "gdGridAlign.gt-xs",
          "gdGridAlign.gt-sm": "gdGridAlign.gt-sm",
          "gdGridAlign.gt-md": "gdGridAlign.gt-md",
          "gdGridAlign.gt-lg": "gdGridAlign.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridAlignDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAlignDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridAlignDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector,
            inputs: inputs
          }]
        }], null, null);
      })();
      /**
       * @param {?=} align
       * @return {?}
       */


      function buildCss() {
        var align = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        /** @type {?} */
        var css = {};

        var _align$split3 = align.split(' '),
            _align$split4 = _slicedToArray(_align$split3, 2),
            rowAxis = _align$split4[0],
            columnAxis = _align$split4[1]; // Row axis


        switch (rowAxis) {
          case 'end':
            css['justify-self'] = 'end';
            break;

          case 'center':
            css['justify-self'] = 'center';
            break;

          case 'stretch':
            css['justify-self'] = 'stretch';
            break;

          case 'start':
            css['justify-self'] = 'start';
            break;

          default:
            css['justify-self'] = ROW_DEFAULT; // default row axis

            break;
        } // Column axis


        switch (columnAxis) {
          case 'end':
            css['align-self'] = 'end';
            break;

          case 'center':
            css['align-self'] = 'center';
            break;

          case 'stretch':
            css['align-self'] = 'stretch';
            break;

          case 'start':
            css['align-self'] = 'start';
            break;

          default:
            css['align-self'] = COL_DEFAULT; // default column axis

            break;
        }

        return css;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/align-columns/align-columns.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_MAIN = 'start';
      /** @type {?} */

      var DEFAULT_CROSS = 'stretch';

      var GridAlignColumnsStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_25) {
        _inherits(GridAlignColumnsStyleBuilder, _angular_flex_layout_25);

        var _super46 = _createSuper(GridAlignColumnsStyleBuilder);

        function GridAlignColumnsStyleBuilder() {
          _classCallCheck(this, GridAlignColumnsStyleBuilder);

          return _super46.apply(this, arguments);
        }

        _createClass(GridAlignColumnsStyleBuilder, [{
          key: "buildStyles",

          /**
           * @param {?} input
           * @param {?} parent
           * @return {?}
           */
          value: function buildStyles(input, parent) {
            return buildCss$1(input || "".concat(DEFAULT_MAIN, " ").concat(DEFAULT_CROSS), parent.inline);
          }
        }]);

        return GridAlignColumnsStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridAlignColumnsStyleBuilder.ɵfac = function GridAlignColumnsStyleBuilder_Factory(t) {
        return ɵGridAlignColumnsStyleBuilder_BaseFactory(t || GridAlignColumnsStyleBuilder);
      };
      /** @nocollapse */


      GridAlignColumnsStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridAlignColumnsStyleBuilder_Factory() {
          return new GridAlignColumnsStyleBuilder();
        },
        token: GridAlignColumnsStyleBuilder,
        providedIn: "root"
      });

      var ɵGridAlignColumnsStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAlignColumnsStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAlignColumnsStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridAlignColumnsDirective = /*#__PURE__*/function (_angular_flex_layout_26) {
        _inherits(GridAlignColumnsDirective, _angular_flex_layout_26);

        var _super47 = _createSuper(GridAlignColumnsDirective);

        /**
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         */
        function GridAlignColumnsDirective(elementRef, styleBuilder, styler, marshal) {
          var _this87;

          _classCallCheck(this, GridAlignColumnsDirective);

          _this87 = _super47.call(this, elementRef, styleBuilder, styler, marshal);
          _this87.DIRECTIVE_KEY = 'grid-align-columns';
          _this87._inline = false;

          _this87.init();

          return _this87;
        }
        /**
         * @return {?}
         */


        _createClass(GridAlignColumnsDirective, [{
          key: "updateWithValue",
          // *********************************************
          // Protected methods
          // *********************************************

          /**
           * @protected
           * @param {?} value
           * @return {?}
           */
          value: function updateWithValue(value) {
            this.styleCache = this.inline ? alignColumnsInlineCache : alignColumnsCache;
            this.addStyles(value, {
              inline: this.inline
            });
          }
        }, {
          key: "inline",
          get: function get() {
            return this._inline;
          }
          /**
           * @param {?} val
           * @return {?}
           */
          ,
          set: function set(val) {
            this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
          }
        }]);

        return GridAlignColumnsDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridAlignColumnsDirective.ɵfac = function GridAlignColumnsDirective_Factory(t) {
        return new (t || GridAlignColumnsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAlignColumnsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridAlignColumnsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridAlignColumnsDirective,
        inputs: {
          inline: ["gdInline", "inline"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridAlignColumnsDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridAlignColumnsStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };

      GridAlignColumnsDirective.propDecorators = {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAlignColumnsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: GridAlignColumnsStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, {
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['gdInline']
          }]
        });
      })();
      /** @type {?} */


      var alignColumnsCache = new Map();
      /** @type {?} */

      var alignColumnsInlineCache = new Map();
      /** @type {?} */

      var inputs$1 = ['gdAlignColumns', 'gdAlignColumns.xs', 'gdAlignColumns.sm', 'gdAlignColumns.md', 'gdAlignColumns.lg', 'gdAlignColumns.xl', 'gdAlignColumns.lt-sm', 'gdAlignColumns.lt-md', 'gdAlignColumns.lt-lg', 'gdAlignColumns.lt-xl', 'gdAlignColumns.gt-xs', 'gdAlignColumns.gt-sm', 'gdAlignColumns.gt-md', 'gdAlignColumns.gt-lg'];
      /** @type {?} */

      var selector$1 = "\n  [gdAlignColumns],\n  [gdAlignColumns.xs], [gdAlignColumns.sm], [gdAlignColumns.md],\n  [gdAlignColumns.lg], [gdAlignColumns.xl], [gdAlignColumns.lt-sm],\n  [gdAlignColumns.lt-md], [gdAlignColumns.lt-lg], [gdAlignColumns.lt-xl],\n  [gdAlignColumns.gt-xs], [gdAlignColumns.gt-sm], [gdAlignColumns.gt-md],\n  [gdAlignColumns.gt-lg]\n";
      /**
       * 'column alignment' CSS Grid styling directive
       * Configures the alignment in the column direction
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-19
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-21
       */

      var DefaultGridAlignColumnsDirective = /*#__PURE__*/function (_GridAlignColumnsDire) {
        _inherits(DefaultGridAlignColumnsDirective, _GridAlignColumnsDire);

        var _super48 = _createSuper(DefaultGridAlignColumnsDirective);

        function DefaultGridAlignColumnsDirective() {
          var _this88;

          _classCallCheck(this, DefaultGridAlignColumnsDirective);

          _this88 = _super48.apply(this, arguments);
          _this88.inputs = inputs$1;
          return _this88;
        }

        return DefaultGridAlignColumnsDirective;
      }(GridAlignColumnsDirective);

      DefaultGridAlignColumnsDirective.ɵfac = function DefaultGridAlignColumnsDirective_Factory(t) {
        return ɵDefaultGridAlignColumnsDirective_BaseFactory(t || DefaultGridAlignColumnsDirective);
      };

      DefaultGridAlignColumnsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridAlignColumnsDirective,
        selectors: [["", "gdAlignColumns", ""], ["", "gdAlignColumns.xs", ""], ["", "gdAlignColumns.sm", ""], ["", "gdAlignColumns.md", ""], ["", "gdAlignColumns.lg", ""], ["", "gdAlignColumns.xl", ""], ["", "gdAlignColumns.lt-sm", ""], ["", "gdAlignColumns.lt-md", ""], ["", "gdAlignColumns.lt-lg", ""], ["", "gdAlignColumns.lt-xl", ""], ["", "gdAlignColumns.gt-xs", ""], ["", "gdAlignColumns.gt-sm", ""], ["", "gdAlignColumns.gt-md", ""], ["", "gdAlignColumns.gt-lg", ""]],
        inputs: {
          gdAlignColumns: "gdAlignColumns",
          "gdAlignColumns.xs": "gdAlignColumns.xs",
          "gdAlignColumns.sm": "gdAlignColumns.sm",
          "gdAlignColumns.md": "gdAlignColumns.md",
          "gdAlignColumns.lg": "gdAlignColumns.lg",
          "gdAlignColumns.xl": "gdAlignColumns.xl",
          "gdAlignColumns.lt-sm": "gdAlignColumns.lt-sm",
          "gdAlignColumns.lt-md": "gdAlignColumns.lt-md",
          "gdAlignColumns.lt-lg": "gdAlignColumns.lt-lg",
          "gdAlignColumns.lt-xl": "gdAlignColumns.lt-xl",
          "gdAlignColumns.gt-xs": "gdAlignColumns.gt-xs",
          "gdAlignColumns.gt-sm": "gdAlignColumns.gt-sm",
          "gdAlignColumns.gt-md": "gdAlignColumns.gt-md",
          "gdAlignColumns.gt-lg": "gdAlignColumns.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridAlignColumnsDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAlignColumnsDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridAlignColumnsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$1,
            inputs: inputs$1
          }]
        }], null, null);
      })();
      /**
       * @param {?} align
       * @param {?} inline
       * @return {?}
       */


      function buildCss$1(align, inline) {
        /** @type {?} */
        var css = {};

        var _align$split5 = align.split(' '),
            _align$split6 = _slicedToArray(_align$split5, 2),
            mainAxis = _align$split6[0],
            crossAxis = _align$split6[1]; // Main axis


        switch (mainAxis) {
          case 'center':
            css['align-content'] = 'center';
            break;

          case 'space-around':
            css['align-content'] = 'space-around';
            break;

          case 'space-between':
            css['align-content'] = 'space-between';
            break;

          case 'space-evenly':
            css['align-content'] = 'space-evenly';
            break;

          case 'end':
            css['align-content'] = 'end';
            break;

          case 'start':
            css['align-content'] = 'start';
            break;

          case 'stretch':
            css['align-content'] = 'stretch';
            break;

          default:
            css['align-content'] = DEFAULT_MAIN; // default main axis

            break;
        } // Cross-axis


        switch (crossAxis) {
          case 'start':
            css['align-items'] = 'start';
            break;

          case 'center':
            css['align-items'] = 'center';
            break;

          case 'end':
            css['align-items'] = 'end';
            break;

          case 'stretch':
            css['align-items'] = 'stretch';
            break;

          default:
            // 'stretch'
            css['align-items'] = DEFAULT_CROSS; // default cross axis

            break;
        }

        css['display'] = inline ? 'inline-grid' : 'grid';
        return css;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/align-rows/align-rows.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_MAIN$1 = 'start';
      /** @type {?} */

      var DEFAULT_CROSS$1 = 'stretch';

      var GridAlignRowsStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_27) {
        _inherits(GridAlignRowsStyleBuilder, _angular_flex_layout_27);

        var _super49 = _createSuper(GridAlignRowsStyleBuilder);

        function GridAlignRowsStyleBuilder() {
          _classCallCheck(this, GridAlignRowsStyleBuilder);

          return _super49.apply(this, arguments);
        }

        _createClass(GridAlignRowsStyleBuilder, [{
          key: "buildStyles",

          /**
           * @param {?} input
           * @param {?} parent
           * @return {?}
           */
          value: function buildStyles(input, parent) {
            return buildCss$2(input || "".concat(DEFAULT_MAIN$1, " ").concat(DEFAULT_CROSS$1), parent.inline);
          }
        }]);

        return GridAlignRowsStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridAlignRowsStyleBuilder.ɵfac = function GridAlignRowsStyleBuilder_Factory(t) {
        return ɵGridAlignRowsStyleBuilder_BaseFactory(t || GridAlignRowsStyleBuilder);
      };
      /** @nocollapse */


      GridAlignRowsStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridAlignRowsStyleBuilder_Factory() {
          return new GridAlignRowsStyleBuilder();
        },
        token: GridAlignRowsStyleBuilder,
        providedIn: "root"
      });

      var ɵGridAlignRowsStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAlignRowsStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAlignRowsStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridAlignRowsDirective = /*#__PURE__*/function (_angular_flex_layout_28) {
        _inherits(GridAlignRowsDirective, _angular_flex_layout_28);

        var _super50 = _createSuper(GridAlignRowsDirective);

        /**
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         */
        function GridAlignRowsDirective(elementRef, styleBuilder, styler, marshal) {
          var _this89;

          _classCallCheck(this, GridAlignRowsDirective);

          _this89 = _super50.call(this, elementRef, styleBuilder, styler, marshal);
          _this89.DIRECTIVE_KEY = 'grid-align-rows';
          _this89._inline = false;

          _this89.init();

          return _this89;
        }
        /**
         * @return {?}
         */


        _createClass(GridAlignRowsDirective, [{
          key: "updateWithValue",
          // *********************************************
          // Protected methods
          // *********************************************

          /**
           * @protected
           * @param {?} value
           * @return {?}
           */
          value: function updateWithValue(value) {
            this.styleCache = this.inline ? alignRowsInlineCache : alignRowsCache;
            this.addStyles(value, {
              inline: this.inline
            });
          }
        }, {
          key: "inline",
          get: function get() {
            return this._inline;
          }
          /**
           * @param {?} val
           * @return {?}
           */
          ,
          set: function set(val) {
            this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
          }
        }]);

        return GridAlignRowsDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridAlignRowsDirective.ɵfac = function GridAlignRowsDirective_Factory(t) {
        return new (t || GridAlignRowsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAlignRowsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridAlignRowsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridAlignRowsDirective,
        inputs: {
          inline: ["gdInline", "inline"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridAlignRowsDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridAlignRowsStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };

      GridAlignRowsDirective.propDecorators = {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAlignRowsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: GridAlignRowsStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, {
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['gdInline']
          }]
        });
      })();
      /** @type {?} */


      var alignRowsCache = new Map();
      /** @type {?} */

      var alignRowsInlineCache = new Map();
      /** @type {?} */

      var inputs$2 = ['gdAlignRows', 'gdAlignRows.xs', 'gdAlignRows.sm', 'gdAlignRows.md', 'gdAlignRows.lg', 'gdAlignRows.xl', 'gdAlignRows.lt-sm', 'gdAlignRows.lt-md', 'gdAlignRows.lt-lg', 'gdAlignRows.lt-xl', 'gdAlignRows.gt-xs', 'gdAlignRows.gt-sm', 'gdAlignRows.gt-md', 'gdAlignRows.gt-lg'];
      /** @type {?} */

      var selector$2 = "\n  [gdAlignRows],\n  [gdAlignRows.xs], [gdAlignRows.sm], [gdAlignRows.md],\n  [gdAlignRows.lg], [gdAlignRows.xl], [gdAlignRows.lt-sm],\n  [gdAlignRows.lt-md], [gdAlignRows.lt-lg], [gdAlignRows.lt-xl],\n  [gdAlignRows.gt-xs], [gdAlignRows.gt-sm], [gdAlignRows.gt-md],\n  [gdAlignRows.gt-lg]\n";
      /**
       * 'row alignment' CSS Grid styling directive
       * Configures the alignment in the row direction
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-18
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-20
       */

      var DefaultGridAlignRowsDirective = /*#__PURE__*/function (_GridAlignRowsDirecti) {
        _inherits(DefaultGridAlignRowsDirective, _GridAlignRowsDirecti);

        var _super51 = _createSuper(DefaultGridAlignRowsDirective);

        function DefaultGridAlignRowsDirective() {
          var _this90;

          _classCallCheck(this, DefaultGridAlignRowsDirective);

          _this90 = _super51.apply(this, arguments);
          _this90.inputs = inputs$2;
          return _this90;
        }

        return DefaultGridAlignRowsDirective;
      }(GridAlignRowsDirective);

      DefaultGridAlignRowsDirective.ɵfac = function DefaultGridAlignRowsDirective_Factory(t) {
        return ɵDefaultGridAlignRowsDirective_BaseFactory(t || DefaultGridAlignRowsDirective);
      };

      DefaultGridAlignRowsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridAlignRowsDirective,
        selectors: [["", "gdAlignRows", ""], ["", "gdAlignRows.xs", ""], ["", "gdAlignRows.sm", ""], ["", "gdAlignRows.md", ""], ["", "gdAlignRows.lg", ""], ["", "gdAlignRows.xl", ""], ["", "gdAlignRows.lt-sm", ""], ["", "gdAlignRows.lt-md", ""], ["", "gdAlignRows.lt-lg", ""], ["", "gdAlignRows.lt-xl", ""], ["", "gdAlignRows.gt-xs", ""], ["", "gdAlignRows.gt-sm", ""], ["", "gdAlignRows.gt-md", ""], ["", "gdAlignRows.gt-lg", ""]],
        inputs: {
          gdAlignRows: "gdAlignRows",
          "gdAlignRows.xs": "gdAlignRows.xs",
          "gdAlignRows.sm": "gdAlignRows.sm",
          "gdAlignRows.md": "gdAlignRows.md",
          "gdAlignRows.lg": "gdAlignRows.lg",
          "gdAlignRows.xl": "gdAlignRows.xl",
          "gdAlignRows.lt-sm": "gdAlignRows.lt-sm",
          "gdAlignRows.lt-md": "gdAlignRows.lt-md",
          "gdAlignRows.lt-lg": "gdAlignRows.lt-lg",
          "gdAlignRows.lt-xl": "gdAlignRows.lt-xl",
          "gdAlignRows.gt-xs": "gdAlignRows.gt-xs",
          "gdAlignRows.gt-sm": "gdAlignRows.gt-sm",
          "gdAlignRows.gt-md": "gdAlignRows.gt-md",
          "gdAlignRows.gt-lg": "gdAlignRows.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridAlignRowsDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAlignRowsDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridAlignRowsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$2,
            inputs: inputs$2
          }]
        }], null, null);
      })();
      /**
       * @param {?} align
       * @param {?} inline
       * @return {?}
       */


      function buildCss$2(align, inline) {
        /** @type {?} */
        var css = {};

        var _align$split7 = align.split(' '),
            _align$split8 = _slicedToArray(_align$split7, 2),
            mainAxis = _align$split8[0],
            crossAxis = _align$split8[1]; // Main axis


        switch (mainAxis) {
          case 'center':
          case 'space-around':
          case 'space-between':
          case 'space-evenly':
          case 'end':
          case 'start':
          case 'stretch':
            css['justify-content'] = mainAxis;
            break;

          default:
            css['justify-content'] = DEFAULT_MAIN$1; // default main axis

            break;
        } // Cross-axis


        switch (crossAxis) {
          case 'start':
          case 'center':
          case 'end':
          case 'stretch':
            css['justify-items'] = crossAxis;
            break;

          default:
            // 'stretch'
            css['justify-items'] = DEFAULT_CROSS$1; // default cross axis

            break;
        }

        css['display'] = inline ? 'inline-grid' : 'grid';
        return css;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/area/area.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE = 'auto';

      var GridAreaStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_29) {
        _inherits(GridAreaStyleBuilder, _angular_flex_layout_29);

        var _super52 = _createSuper(GridAreaStyleBuilder);

        function GridAreaStyleBuilder() {
          _classCallCheck(this, GridAreaStyleBuilder);

          return _super52.apply(this, arguments);
        }

        _createClass(GridAreaStyleBuilder, [{
          key: "buildStyles",

          /**
           * @param {?} input
           * @return {?}
           */
          value: function buildStyles(input) {
            return {
              'grid-area': input || DEFAULT_VALUE
            };
          }
        }]);

        return GridAreaStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridAreaStyleBuilder.ɵfac = function GridAreaStyleBuilder_Factory(t) {
        return ɵGridAreaStyleBuilder_BaseFactory(t || GridAreaStyleBuilder);
      };
      /** @nocollapse */


      GridAreaStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridAreaStyleBuilder_Factory() {
          return new GridAreaStyleBuilder();
        },
        token: GridAreaStyleBuilder,
        providedIn: "root"
      });

      var ɵGridAreaStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAreaStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAreaStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridAreaDirective = /*#__PURE__*/function (_angular_flex_layout_30) {
        _inherits(GridAreaDirective, _angular_flex_layout_30);

        var _super53 = _createSuper(GridAreaDirective);

        /**
         * @param {?} elRef
         * @param {?} styleUtils
         * @param {?} styleBuilder
         * @param {?} marshal
         */
        function GridAreaDirective(elRef, styleUtils, styleBuilder, marshal) {
          var _this91;

          _classCallCheck(this, GridAreaDirective);

          _this91 = _super53.call(this, elRef, styleBuilder, styleUtils, marshal);
          _this91.DIRECTIVE_KEY = 'grid-area';
          _this91.styleCache = gridAreaCache;

          _this91.init();

          return _this91;
        }

        return GridAreaDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridAreaDirective.ɵfac = function GridAreaDirective_Factory(t) {
        return new (t || GridAreaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAreaStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridAreaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridAreaDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridAreaDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: GridAreaStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAreaDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: GridAreaStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, null);
      })();
      /** @type {?} */


      var gridAreaCache = new Map();
      /** @type {?} */

      var inputs$3 = ['gdArea', 'gdArea.xs', 'gdArea.sm', 'gdArea.md', 'gdArea.lg', 'gdArea.xl', 'gdArea.lt-sm', 'gdArea.lt-md', 'gdArea.lt-lg', 'gdArea.lt-xl', 'gdArea.gt-xs', 'gdArea.gt-sm', 'gdArea.gt-md', 'gdArea.gt-lg'];
      /** @type {?} */

      var selector$3 = "\n  [gdArea],\n  [gdArea.xs], [gdArea.sm], [gdArea.md], [gdArea.lg], [gdArea.xl],\n  [gdArea.lt-sm], [gdArea.lt-md], [gdArea.lt-lg], [gdArea.lt-xl],\n  [gdArea.gt-xs], [gdArea.gt-sm], [gdArea.gt-md], [gdArea.gt-lg]\n";
      /**
       * 'grid-area' CSS Grid styling directive
       * Configures the name or position of an element within the grid
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-27
       */

      var DefaultGridAreaDirective = /*#__PURE__*/function (_GridAreaDirective) {
        _inherits(DefaultGridAreaDirective, _GridAreaDirective);

        var _super54 = _createSuper(DefaultGridAreaDirective);

        function DefaultGridAreaDirective() {
          var _this92;

          _classCallCheck(this, DefaultGridAreaDirective);

          _this92 = _super54.apply(this, arguments);
          _this92.inputs = inputs$3;
          return _this92;
        }

        return DefaultGridAreaDirective;
      }(GridAreaDirective);

      DefaultGridAreaDirective.ɵfac = function DefaultGridAreaDirective_Factory(t) {
        return ɵDefaultGridAreaDirective_BaseFactory(t || DefaultGridAreaDirective);
      };

      DefaultGridAreaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridAreaDirective,
        selectors: [["", "gdArea", ""], ["", "gdArea.xs", ""], ["", "gdArea.sm", ""], ["", "gdArea.md", ""], ["", "gdArea.lg", ""], ["", "gdArea.xl", ""], ["", "gdArea.lt-sm", ""], ["", "gdArea.lt-md", ""], ["", "gdArea.lt-lg", ""], ["", "gdArea.lt-xl", ""], ["", "gdArea.gt-xs", ""], ["", "gdArea.gt-sm", ""], ["", "gdArea.gt-md", ""], ["", "gdArea.gt-lg", ""]],
        inputs: {
          gdArea: "gdArea",
          "gdArea.xs": "gdArea.xs",
          "gdArea.sm": "gdArea.sm",
          "gdArea.md": "gdArea.md",
          "gdArea.lg": "gdArea.lg",
          "gdArea.xl": "gdArea.xl",
          "gdArea.lt-sm": "gdArea.lt-sm",
          "gdArea.lt-md": "gdArea.lt-md",
          "gdArea.lt-lg": "gdArea.lt-lg",
          "gdArea.lt-xl": "gdArea.lt-xl",
          "gdArea.gt-xs": "gdArea.gt-xs",
          "gdArea.gt-sm": "gdArea.gt-sm",
          "gdArea.gt-md": "gdArea.gt-md",
          "gdArea.gt-lg": "gdArea.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridAreaDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAreaDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridAreaDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$3,
            inputs: inputs$3
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/areas/areas.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$1 = 'none';
      /** @type {?} */

      var DELIMETER = '|';

      var GridAreasStyleBuiler = /*#__PURE__*/function (_angular_flex_layout_31) {
        _inherits(GridAreasStyleBuiler, _angular_flex_layout_31);

        var _super55 = _createSuper(GridAreasStyleBuiler);

        function GridAreasStyleBuiler() {
          _classCallCheck(this, GridAreasStyleBuiler);

          return _super55.apply(this, arguments);
        }

        _createClass(GridAreasStyleBuiler, [{
          key: "buildStyles",

          /**
           * @param {?} input
           * @param {?} parent
           * @return {?}
           */
          value: function buildStyles(input, parent) {
            /** @type {?} */
            var areas = (input || DEFAULT_VALUE$1).split(DELIMETER).map(
            /**
            * @param {?} v
            * @return {?}
            */
            function (v) {
              return "\"".concat(v.trim(), "\"");
            });
            return {
              'display': parent.inline ? 'inline-grid' : 'grid',
              'grid-template-areas': areas.join(' ')
            };
          }
        }]);

        return GridAreasStyleBuiler;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridAreasStyleBuiler.ɵfac = function GridAreasStyleBuiler_Factory(t) {
        return ɵGridAreasStyleBuiler_BaseFactory(t || GridAreasStyleBuiler);
      };
      /** @nocollapse */


      GridAreasStyleBuiler.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridAreasStyleBuiler_Factory() {
          return new GridAreasStyleBuiler();
        },
        token: GridAreasStyleBuiler,
        providedIn: "root"
      });

      var ɵGridAreasStyleBuiler_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAreasStyleBuiler);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAreasStyleBuiler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridAreasDirective = /*#__PURE__*/function (_angular_flex_layout_32) {
        _inherits(GridAreasDirective, _angular_flex_layout_32);

        var _super56 = _createSuper(GridAreasDirective);

        /**
         * @param {?} elRef
         * @param {?} styleUtils
         * @param {?} styleBuilder
         * @param {?} marshal
         */
        function GridAreasDirective(elRef, styleUtils, styleBuilder, marshal) {
          var _this93;

          _classCallCheck(this, GridAreasDirective);

          _this93 = _super56.call(this, elRef, styleBuilder, styleUtils, marshal);
          _this93.DIRECTIVE_KEY = 'grid-areas';
          _this93._inline = false;

          _this93.init();

          return _this93;
        }
        /**
         * @return {?}
         */


        _createClass(GridAreasDirective, [{
          key: "updateWithValue",
          // *********************************************
          // Protected methods
          // *********************************************

          /**
           * @protected
           * @param {?} value
           * @return {?}
           */
          value: function updateWithValue(value) {
            this.styleCache = this.inline ? areasInlineCache : areasCache;
            this.addStyles(value, {
              inline: this.inline
            });
          }
        }, {
          key: "inline",
          get: function get() {
            return this._inline;
          }
          /**
           * @param {?} val
           * @return {?}
           */
          ,
          set: function set(val) {
            this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
          }
        }]);

        return GridAreasDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridAreasDirective.ɵfac = function GridAreasDirective_Factory(t) {
        return new (t || GridAreasDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAreasStyleBuiler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridAreasDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridAreasDirective,
        inputs: {
          inline: ["gdInline", "inline"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridAreasDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: GridAreasStyleBuiler
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };

      GridAreasDirective.propDecorators = {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAreasDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: GridAreasStyleBuiler
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, {
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['gdInline']
          }]
        });
      })();
      /** @type {?} */


      var areasCache = new Map();
      /** @type {?} */

      var areasInlineCache = new Map();
      /** @type {?} */

      var inputs$4 = ['gdAreas', 'gdAreas.xs', 'gdAreas.sm', 'gdAreas.md', 'gdAreas.lg', 'gdAreas.xl', 'gdAreas.lt-sm', 'gdAreas.lt-md', 'gdAreas.lt-lg', 'gdAreas.lt-xl', 'gdAreas.gt-xs', 'gdAreas.gt-sm', 'gdAreas.gt-md', 'gdAreas.gt-lg'];
      /** @type {?} */

      var selector$4 = "\n  [gdAreas],\n  [gdAreas.xs], [gdAreas.sm], [gdAreas.md], [gdAreas.lg], [gdAreas.xl],\n  [gdAreas.lt-sm], [gdAreas.lt-md], [gdAreas.lt-lg], [gdAreas.lt-xl],\n  [gdAreas.gt-xs], [gdAreas.gt-sm], [gdAreas.gt-md], [gdAreas.gt-lg]\n";
      /**
       * 'grid-template-areas' CSS Grid styling directive
       * Configures the names of elements within the grid
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-14
       */

      var DefaultGridAreasDirective = /*#__PURE__*/function (_GridAreasDirective) {
        _inherits(DefaultGridAreasDirective, _GridAreasDirective);

        var _super57 = _createSuper(DefaultGridAreasDirective);

        function DefaultGridAreasDirective() {
          var _this94;

          _classCallCheck(this, DefaultGridAreasDirective);

          _this94 = _super57.apply(this, arguments);
          _this94.inputs = inputs$4;
          return _this94;
        }

        return DefaultGridAreasDirective;
      }(GridAreasDirective);

      DefaultGridAreasDirective.ɵfac = function DefaultGridAreasDirective_Factory(t) {
        return ɵDefaultGridAreasDirective_BaseFactory(t || DefaultGridAreasDirective);
      };

      DefaultGridAreasDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridAreasDirective,
        selectors: [["", "gdAreas", ""], ["", "gdAreas.xs", ""], ["", "gdAreas.sm", ""], ["", "gdAreas.md", ""], ["", "gdAreas.lg", ""], ["", "gdAreas.xl", ""], ["", "gdAreas.lt-sm", ""], ["", "gdAreas.lt-md", ""], ["", "gdAreas.lt-lg", ""], ["", "gdAreas.lt-xl", ""], ["", "gdAreas.gt-xs", ""], ["", "gdAreas.gt-sm", ""], ["", "gdAreas.gt-md", ""], ["", "gdAreas.gt-lg", ""]],
        inputs: {
          gdAreas: "gdAreas",
          "gdAreas.xs": "gdAreas.xs",
          "gdAreas.sm": "gdAreas.sm",
          "gdAreas.md": "gdAreas.md",
          "gdAreas.lg": "gdAreas.lg",
          "gdAreas.xl": "gdAreas.xl",
          "gdAreas.lt-sm": "gdAreas.lt-sm",
          "gdAreas.lt-md": "gdAreas.lt-md",
          "gdAreas.lt-lg": "gdAreas.lt-lg",
          "gdAreas.lt-xl": "gdAreas.lt-xl",
          "gdAreas.gt-xs": "gdAreas.gt-xs",
          "gdAreas.gt-sm": "gdAreas.gt-sm",
          "gdAreas.gt-md": "gdAreas.gt-md",
          "gdAreas.gt-lg": "gdAreas.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridAreasDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAreasDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridAreasDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$4,
            inputs: inputs$4
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/auto/auto.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$2 = 'initial';

      var GridAutoStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_33) {
        _inherits(GridAutoStyleBuilder, _angular_flex_layout_33);

        var _super58 = _createSuper(GridAutoStyleBuilder);

        function GridAutoStyleBuilder() {
          _classCallCheck(this, GridAutoStyleBuilder);

          return _super58.apply(this, arguments);
        }

        _createClass(GridAutoStyleBuilder, [{
          key: "buildStyles",

          /**
           * @param {?} input
           * @param {?} parent
           * @return {?}
           */
          value: function buildStyles(input, parent) {
            var _split = (input || DEFAULT_VALUE$2).split(' '),
                _split2 = _slicedToArray(_split, 2),
                direction = _split2[0],
                dense = _split2[1];

            if (direction !== 'column' && direction !== 'row' && direction !== 'dense') {
              direction = 'row';
            }

            dense = dense === 'dense' && direction !== 'dense' ? ' dense' : '';
            return {
              'display': parent.inline ? 'inline-grid' : 'grid',
              'grid-auto-flow': direction + dense
            };
          }
        }]);

        return GridAutoStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridAutoStyleBuilder.ɵfac = function GridAutoStyleBuilder_Factory(t) {
        return ɵGridAutoStyleBuilder_BaseFactory(t || GridAutoStyleBuilder);
      };
      /** @nocollapse */


      GridAutoStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridAutoStyleBuilder_Factory() {
          return new GridAutoStyleBuilder();
        },
        token: GridAutoStyleBuilder,
        providedIn: "root"
      });

      var ɵGridAutoStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAutoStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAutoStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridAutoDirective = /*#__PURE__*/function (_angular_flex_layout_34) {
        _inherits(GridAutoDirective, _angular_flex_layout_34);

        var _super59 = _createSuper(GridAutoDirective);

        /**
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         */
        function GridAutoDirective(elementRef, styleBuilder, styler, marshal) {
          var _this95;

          _classCallCheck(this, GridAutoDirective);

          _this95 = _super59.call(this, elementRef, styleBuilder, styler, marshal);
          _this95._inline = false;
          _this95.DIRECTIVE_KEY = 'grid-auto';

          _this95.init();

          return _this95;
        }
        /**
         * @return {?}
         */


        _createClass(GridAutoDirective, [{
          key: "updateWithValue",
          // *********************************************
          // Protected methods
          // *********************************************

          /**
           * @protected
           * @param {?} value
           * @return {?}
           */
          value: function updateWithValue(value) {
            this.styleCache = this.inline ? autoInlineCache : autoCache;
            this.addStyles(value, {
              inline: this.inline
            });
          }
        }, {
          key: "inline",
          get: function get() {
            return this._inline;
          }
          /**
           * @param {?} val
           * @return {?}
           */
          ,
          set: function set(val) {
            this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
          }
        }]);

        return GridAutoDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridAutoDirective.ɵfac = function GridAutoDirective_Factory(t) {
        return new (t || GridAutoDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAutoStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridAutoDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridAutoDirective,
        inputs: {
          inline: ["gdInline", "inline"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridAutoDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridAutoStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };

      GridAutoDirective.propDecorators = {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAutoDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: GridAutoStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, {
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['gdInline']
          }]
        });
      })();
      /** @type {?} */


      var autoCache = new Map();
      /** @type {?} */

      var autoInlineCache = new Map();
      /** @type {?} */

      var inputs$5 = ['gdAuto', 'gdAuto.xs', 'gdAuto.sm', 'gdAuto.md', 'gdAuto.lg', 'gdAuto.xl', 'gdAuto.lt-sm', 'gdAuto.lt-md', 'gdAuto.lt-lg', 'gdAuto.lt-xl', 'gdAuto.gt-xs', 'gdAuto.gt-sm', 'gdAuto.gt-md', 'gdAuto.gt-lg'];
      /** @type {?} */

      var selector$5 = "\n  [gdAuto],\n  [gdAuto.xs], [gdAuto.sm], [gdAuto.md], [gdAuto.lg], [gdAuto.xl],\n  [gdAuto.lt-sm], [gdAuto.lt-md], [gdAuto.lt-lg], [gdAuto.lt-xl],\n  [gdAuto.gt-xs], [gdAuto.gt-sm], [gdAuto.gt-md], [gdAuto.gt-lg]\n";
      /**
       * 'grid-auto-flow' CSS Grid styling directive
       * Configures the auto placement algorithm for the grid
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-23
       */

      var DefaultGridAutoDirective = /*#__PURE__*/function (_GridAutoDirective) {
        _inherits(DefaultGridAutoDirective, _GridAutoDirective);

        var _super60 = _createSuper(DefaultGridAutoDirective);

        function DefaultGridAutoDirective() {
          var _this96;

          _classCallCheck(this, DefaultGridAutoDirective);

          _this96 = _super60.apply(this, arguments);
          _this96.inputs = inputs$5;
          return _this96;
        }

        return DefaultGridAutoDirective;
      }(GridAutoDirective);

      DefaultGridAutoDirective.ɵfac = function DefaultGridAutoDirective_Factory(t) {
        return ɵDefaultGridAutoDirective_BaseFactory(t || DefaultGridAutoDirective);
      };

      DefaultGridAutoDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridAutoDirective,
        selectors: [["", "gdAuto", ""], ["", "gdAuto.xs", ""], ["", "gdAuto.sm", ""], ["", "gdAuto.md", ""], ["", "gdAuto.lg", ""], ["", "gdAuto.xl", ""], ["", "gdAuto.lt-sm", ""], ["", "gdAuto.lt-md", ""], ["", "gdAuto.lt-lg", ""], ["", "gdAuto.lt-xl", ""], ["", "gdAuto.gt-xs", ""], ["", "gdAuto.gt-sm", ""], ["", "gdAuto.gt-md", ""], ["", "gdAuto.gt-lg", ""]],
        inputs: {
          gdAuto: "gdAuto",
          "gdAuto.xs": "gdAuto.xs",
          "gdAuto.sm": "gdAuto.sm",
          "gdAuto.md": "gdAuto.md",
          "gdAuto.lg": "gdAuto.lg",
          "gdAuto.xl": "gdAuto.xl",
          "gdAuto.lt-sm": "gdAuto.lt-sm",
          "gdAuto.lt-md": "gdAuto.lt-md",
          "gdAuto.lt-lg": "gdAuto.lt-lg",
          "gdAuto.lt-xl": "gdAuto.lt-xl",
          "gdAuto.gt-xs": "gdAuto.gt-xs",
          "gdAuto.gt-sm": "gdAuto.gt-sm",
          "gdAuto.gt-md": "gdAuto.gt-md",
          "gdAuto.gt-lg": "gdAuto.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridAutoDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAutoDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridAutoDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$5,
            inputs: inputs$5
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/column/column.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$3 = 'auto';

      var GridColumnStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_35) {
        _inherits(GridColumnStyleBuilder, _angular_flex_layout_35);

        var _super61 = _createSuper(GridColumnStyleBuilder);

        function GridColumnStyleBuilder() {
          _classCallCheck(this, GridColumnStyleBuilder);

          return _super61.apply(this, arguments);
        }

        _createClass(GridColumnStyleBuilder, [{
          key: "buildStyles",

          /**
           * @param {?} input
           * @return {?}
           */
          value: function buildStyles(input) {
            return {
              'grid-column': input || DEFAULT_VALUE$3
            };
          }
        }]);

        return GridColumnStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridColumnStyleBuilder.ɵfac = function GridColumnStyleBuilder_Factory(t) {
        return ɵGridColumnStyleBuilder_BaseFactory(t || GridColumnStyleBuilder);
      };
      /** @nocollapse */


      GridColumnStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridColumnStyleBuilder_Factory() {
          return new GridColumnStyleBuilder();
        },
        token: GridColumnStyleBuilder,
        providedIn: "root"
      });

      var ɵGridColumnStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridColumnStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridColumnStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridColumnDirective = /*#__PURE__*/function (_angular_flex_layout_36) {
        _inherits(GridColumnDirective, _angular_flex_layout_36);

        var _super62 = _createSuper(GridColumnDirective);

        /**
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         */
        function GridColumnDirective(elementRef, styleBuilder, styler, marshal) {
          var _this97;

          _classCallCheck(this, GridColumnDirective);

          _this97 = _super62.call(this, elementRef, styleBuilder, styler, marshal);
          _this97.DIRECTIVE_KEY = 'grid-column';
          _this97.styleCache = columnCache;

          _this97.init();

          return _this97;
        }

        return GridColumnDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridColumnDirective.ɵfac = function GridColumnDirective_Factory(t) {
        return new (t || GridColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridColumnStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridColumnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridColumnDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridColumnDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridColumnStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridColumnDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: GridColumnStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, null);
      })();
      /** @type {?} */


      var columnCache = new Map();
      /** @type {?} */

      var inputs$6 = ['gdColumn', 'gdColumn.xs', 'gdColumn.sm', 'gdColumn.md', 'gdColumn.lg', 'gdColumn.xl', 'gdColumn.lt-sm', 'gdColumn.lt-md', 'gdColumn.lt-lg', 'gdColumn.lt-xl', 'gdColumn.gt-xs', 'gdColumn.gt-sm', 'gdColumn.gt-md', 'gdColumn.gt-lg'];
      /** @type {?} */

      var selector$6 = "\n  [gdColumn],\n  [gdColumn.xs], [gdColumn.sm], [gdColumn.md], [gdColumn.lg], [gdColumn.xl],\n  [gdColumn.lt-sm], [gdColumn.lt-md], [gdColumn.lt-lg], [gdColumn.lt-xl],\n  [gdColumn.gt-xs], [gdColumn.gt-sm], [gdColumn.gt-md], [gdColumn.gt-lg]\n";
      /**
       * 'grid-column' CSS Grid styling directive
       * Configures the name or position of an element within the grid
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
       */

      var DefaultGridColumnDirective = /*#__PURE__*/function (_GridColumnDirective) {
        _inherits(DefaultGridColumnDirective, _GridColumnDirective);

        var _super63 = _createSuper(DefaultGridColumnDirective);

        function DefaultGridColumnDirective() {
          var _this98;

          _classCallCheck(this, DefaultGridColumnDirective);

          _this98 = _super63.apply(this, arguments);
          _this98.inputs = inputs$6;
          return _this98;
        }

        return DefaultGridColumnDirective;
      }(GridColumnDirective);

      DefaultGridColumnDirective.ɵfac = function DefaultGridColumnDirective_Factory(t) {
        return ɵDefaultGridColumnDirective_BaseFactory(t || DefaultGridColumnDirective);
      };

      DefaultGridColumnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridColumnDirective,
        selectors: [["", "gdColumn", ""], ["", "gdColumn.xs", ""], ["", "gdColumn.sm", ""], ["", "gdColumn.md", ""], ["", "gdColumn.lg", ""], ["", "gdColumn.xl", ""], ["", "gdColumn.lt-sm", ""], ["", "gdColumn.lt-md", ""], ["", "gdColumn.lt-lg", ""], ["", "gdColumn.lt-xl", ""], ["", "gdColumn.gt-xs", ""], ["", "gdColumn.gt-sm", ""], ["", "gdColumn.gt-md", ""], ["", "gdColumn.gt-lg", ""]],
        inputs: {
          gdColumn: "gdColumn",
          "gdColumn.xs": "gdColumn.xs",
          "gdColumn.sm": "gdColumn.sm",
          "gdColumn.md": "gdColumn.md",
          "gdColumn.lg": "gdColumn.lg",
          "gdColumn.xl": "gdColumn.xl",
          "gdColumn.lt-sm": "gdColumn.lt-sm",
          "gdColumn.lt-md": "gdColumn.lt-md",
          "gdColumn.lt-lg": "gdColumn.lt-lg",
          "gdColumn.lt-xl": "gdColumn.lt-xl",
          "gdColumn.gt-xs": "gdColumn.gt-xs",
          "gdColumn.gt-sm": "gdColumn.gt-sm",
          "gdColumn.gt-md": "gdColumn.gt-md",
          "gdColumn.gt-lg": "gdColumn.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridColumnDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridColumnDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridColumnDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$6,
            inputs: inputs$6
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/columns/columns.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$4 = 'none';
      /** @type {?} */

      var AUTO_SPECIFIER = '!';

      var GridColumnsStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_37) {
        _inherits(GridColumnsStyleBuilder, _angular_flex_layout_37);

        var _super64 = _createSuper(GridColumnsStyleBuilder);

        function GridColumnsStyleBuilder() {
          _classCallCheck(this, GridColumnsStyleBuilder);

          return _super64.apply(this, arguments);
        }

        _createClass(GridColumnsStyleBuilder, [{
          key: "buildStyles",

          /**
           * @param {?} input
           * @param {?} parent
           * @return {?}
           */
          value: function buildStyles(input, parent) {
            input = input || DEFAULT_VALUE$4;
            /** @type {?} */

            var auto = false;

            if (input.endsWith(AUTO_SPECIFIER)) {
              input = input.substring(0, input.indexOf(AUTO_SPECIFIER));
              auto = true;
            }
            /** @type {?} */


            var css = {
              'display': parent.inline ? 'inline-grid' : 'grid',
              'grid-auto-columns': '',
              'grid-template-columns': ''
            };
            /** @type {?} */

            var key = auto ? 'grid-auto-columns' : 'grid-template-columns';
            css[key] = input;
            return css;
          }
        }]);

        return GridColumnsStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridColumnsStyleBuilder.ɵfac = function GridColumnsStyleBuilder_Factory(t) {
        return ɵGridColumnsStyleBuilder_BaseFactory(t || GridColumnsStyleBuilder);
      };
      /** @nocollapse */


      GridColumnsStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridColumnsStyleBuilder_Factory() {
          return new GridColumnsStyleBuilder();
        },
        token: GridColumnsStyleBuilder,
        providedIn: "root"
      });

      var ɵGridColumnsStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridColumnsStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridColumnsStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridColumnsDirective = /*#__PURE__*/function (_angular_flex_layout_38) {
        _inherits(GridColumnsDirective, _angular_flex_layout_38);

        var _super65 = _createSuper(GridColumnsDirective);

        /**
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         */
        function GridColumnsDirective(elementRef, styleBuilder, styler, marshal) {
          var _this99;

          _classCallCheck(this, GridColumnsDirective);

          _this99 = _super65.call(this, elementRef, styleBuilder, styler, marshal);
          _this99.DIRECTIVE_KEY = 'grid-columns';
          _this99._inline = false;

          _this99.init();

          return _this99;
        }
        /**
         * @return {?}
         */


        _createClass(GridColumnsDirective, [{
          key: "updateWithValue",
          // *********************************************
          // Protected methods
          // *********************************************

          /**
           * @protected
           * @param {?} value
           * @return {?}
           */
          value: function updateWithValue(value) {
            this.styleCache = this.inline ? columnsInlineCache : columnsCache;
            this.addStyles(value, {
              inline: this.inline
            });
          }
        }, {
          key: "inline",
          get: function get() {
            return this._inline;
          }
          /**
           * @param {?} val
           * @return {?}
           */
          ,
          set: function set(val) {
            this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
          }
        }]);

        return GridColumnsDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridColumnsDirective.ɵfac = function GridColumnsDirective_Factory(t) {
        return new (t || GridColumnsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridColumnsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridColumnsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridColumnsDirective,
        inputs: {
          inline: ["gdInline", "inline"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridColumnsDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridColumnsStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };

      GridColumnsDirective.propDecorators = {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridColumnsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: GridColumnsStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, {
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['gdInline']
          }]
        });
      })();
      /** @type {?} */


      var columnsCache = new Map();
      /** @type {?} */

      var columnsInlineCache = new Map();
      /** @type {?} */

      var inputs$7 = ['gdColumns', 'gdColumns.xs', 'gdColumns.sm', 'gdColumns.md', 'gdColumns.lg', 'gdColumns.xl', 'gdColumns.lt-sm', 'gdColumns.lt-md', 'gdColumns.lt-lg', 'gdColumns.lt-xl', 'gdColumns.gt-xs', 'gdColumns.gt-sm', 'gdColumns.gt-md', 'gdColumns.gt-lg'];
      /** @type {?} */

      var selector$7 = "\n  [gdColumns],\n  [gdColumns.xs], [gdColumns.sm], [gdColumns.md], [gdColumns.lg], [gdColumns.xl],\n  [gdColumns.lt-sm], [gdColumns.lt-md], [gdColumns.lt-lg], [gdColumns.lt-xl],\n  [gdColumns.gt-xs], [gdColumns.gt-sm], [gdColumns.gt-md], [gdColumns.gt-lg]\n";
      /**
       * 'grid-template-columns' CSS Grid styling directive
       * Configures the sizing for the columns in the grid
       * Syntax: <column value> [auto]
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
       */

      var DefaultGridColumnsDirective = /*#__PURE__*/function (_GridColumnsDirective) {
        _inherits(DefaultGridColumnsDirective, _GridColumnsDirective);

        var _super66 = _createSuper(DefaultGridColumnsDirective);

        function DefaultGridColumnsDirective() {
          var _this100;

          _classCallCheck(this, DefaultGridColumnsDirective);

          _this100 = _super66.apply(this, arguments);
          _this100.inputs = inputs$7;
          return _this100;
        }

        return DefaultGridColumnsDirective;
      }(GridColumnsDirective);

      DefaultGridColumnsDirective.ɵfac = function DefaultGridColumnsDirective_Factory(t) {
        return ɵDefaultGridColumnsDirective_BaseFactory(t || DefaultGridColumnsDirective);
      };

      DefaultGridColumnsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridColumnsDirective,
        selectors: [["", "gdColumns", ""], ["", "gdColumns.xs", ""], ["", "gdColumns.sm", ""], ["", "gdColumns.md", ""], ["", "gdColumns.lg", ""], ["", "gdColumns.xl", ""], ["", "gdColumns.lt-sm", ""], ["", "gdColumns.lt-md", ""], ["", "gdColumns.lt-lg", ""], ["", "gdColumns.lt-xl", ""], ["", "gdColumns.gt-xs", ""], ["", "gdColumns.gt-sm", ""], ["", "gdColumns.gt-md", ""], ["", "gdColumns.gt-lg", ""]],
        inputs: {
          gdColumns: "gdColumns",
          "gdColumns.xs": "gdColumns.xs",
          "gdColumns.sm": "gdColumns.sm",
          "gdColumns.md": "gdColumns.md",
          "gdColumns.lg": "gdColumns.lg",
          "gdColumns.xl": "gdColumns.xl",
          "gdColumns.lt-sm": "gdColumns.lt-sm",
          "gdColumns.lt-md": "gdColumns.lt-md",
          "gdColumns.lt-lg": "gdColumns.lt-lg",
          "gdColumns.lt-xl": "gdColumns.lt-xl",
          "gdColumns.gt-xs": "gdColumns.gt-xs",
          "gdColumns.gt-sm": "gdColumns.gt-sm",
          "gdColumns.gt-md": "gdColumns.gt-md",
          "gdColumns.gt-lg": "gdColumns.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridColumnsDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridColumnsDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridColumnsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$7,
            inputs: inputs$7
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/gap/gap.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$5 = '0';

      var GridGapStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_39) {
        _inherits(GridGapStyleBuilder, _angular_flex_layout_39);

        var _super67 = _createSuper(GridGapStyleBuilder);

        function GridGapStyleBuilder() {
          _classCallCheck(this, GridGapStyleBuilder);

          return _super67.apply(this, arguments);
        }

        _createClass(GridGapStyleBuilder, [{
          key: "buildStyles",

          /**
           * @param {?} input
           * @param {?} parent
           * @return {?}
           */
          value: function buildStyles(input, parent) {
            return {
              'display': parent.inline ? 'inline-grid' : 'grid',
              'grid-gap': input || DEFAULT_VALUE$5
            };
          }
        }]);

        return GridGapStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridGapStyleBuilder.ɵfac = function GridGapStyleBuilder_Factory(t) {
        return ɵGridGapStyleBuilder_BaseFactory(t || GridGapStyleBuilder);
      };
      /** @nocollapse */


      GridGapStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridGapStyleBuilder_Factory() {
          return new GridGapStyleBuilder();
        },
        token: GridGapStyleBuilder,
        providedIn: "root"
      });

      var ɵGridGapStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridGapStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridGapStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridGapDirective = /*#__PURE__*/function (_angular_flex_layout_40) {
        _inherits(GridGapDirective, _angular_flex_layout_40);

        var _super68 = _createSuper(GridGapDirective);

        /**
         * @param {?} elRef
         * @param {?} styleUtils
         * @param {?} styleBuilder
         * @param {?} marshal
         */
        function GridGapDirective(elRef, styleUtils, styleBuilder, marshal) {
          var _this101;

          _classCallCheck(this, GridGapDirective);

          _this101 = _super68.call(this, elRef, styleBuilder, styleUtils, marshal);
          _this101.DIRECTIVE_KEY = 'grid-gap';
          _this101._inline = false;

          _this101.init();

          return _this101;
        }
        /**
         * @return {?}
         */


        _createClass(GridGapDirective, [{
          key: "updateWithValue",
          // *********************************************
          // Protected methods
          // *********************************************

          /**
           * @protected
           * @param {?} value
           * @return {?}
           */
          value: function updateWithValue(value) {
            this.styleCache = this.inline ? gapInlineCache : gapCache;
            this.addStyles(value, {
              inline: this.inline
            });
          }
        }, {
          key: "inline",
          get: function get() {
            return this._inline;
          }
          /**
           * @param {?} val
           * @return {?}
           */
          ,
          set: function set(val) {
            this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
          }
        }]);

        return GridGapDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridGapDirective.ɵfac = function GridGapDirective_Factory(t) {
        return new (t || GridGapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridGapStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridGapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridGapDirective,
        inputs: {
          inline: ["gdInline", "inline"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridGapDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: GridGapStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };

      GridGapDirective.propDecorators = {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridGapDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: GridGapStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, {
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['gdInline']
          }]
        });
      })();
      /** @type {?} */


      var gapCache = new Map();
      /** @type {?} */

      var gapInlineCache = new Map();
      /** @type {?} */

      var inputs$8 = ['gdGap', 'gdGap.xs', 'gdGap.sm', 'gdGap.md', 'gdGap.lg', 'gdGap.xl', 'gdGap.lt-sm', 'gdGap.lt-md', 'gdGap.lt-lg', 'gdGap.lt-xl', 'gdGap.gt-xs', 'gdGap.gt-sm', 'gdGap.gt-md', 'gdGap.gt-lg'];
      /** @type {?} */

      var selector$8 = "\n  [gdGap],\n  [gdGap.xs], [gdGap.sm], [gdGap.md], [gdGap.lg], [gdGap.xl],\n  [gdGap.lt-sm], [gdGap.lt-md], [gdGap.lt-lg], [gdGap.lt-xl],\n  [gdGap.gt-xs], [gdGap.gt-sm], [gdGap.gt-md], [gdGap.gt-lg]\n";
      /**
       * 'grid-gap' CSS Grid styling directive
       * Configures the gap between items in the grid
       * Syntax: <row gap> [<column-gap>]
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-17
       */

      var DefaultGridGapDirective = /*#__PURE__*/function (_GridGapDirective) {
        _inherits(DefaultGridGapDirective, _GridGapDirective);

        var _super69 = _createSuper(DefaultGridGapDirective);

        function DefaultGridGapDirective() {
          var _this102;

          _classCallCheck(this, DefaultGridGapDirective);

          _this102 = _super69.apply(this, arguments);
          _this102.inputs = inputs$8;
          return _this102;
        }

        return DefaultGridGapDirective;
      }(GridGapDirective);

      DefaultGridGapDirective.ɵfac = function DefaultGridGapDirective_Factory(t) {
        return ɵDefaultGridGapDirective_BaseFactory(t || DefaultGridGapDirective);
      };

      DefaultGridGapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridGapDirective,
        selectors: [["", "gdGap", ""], ["", "gdGap.xs", ""], ["", "gdGap.sm", ""], ["", "gdGap.md", ""], ["", "gdGap.lg", ""], ["", "gdGap.xl", ""], ["", "gdGap.lt-sm", ""], ["", "gdGap.lt-md", ""], ["", "gdGap.lt-lg", ""], ["", "gdGap.lt-xl", ""], ["", "gdGap.gt-xs", ""], ["", "gdGap.gt-sm", ""], ["", "gdGap.gt-md", ""], ["", "gdGap.gt-lg", ""]],
        inputs: {
          gdGap: "gdGap",
          "gdGap.xs": "gdGap.xs",
          "gdGap.sm": "gdGap.sm",
          "gdGap.md": "gdGap.md",
          "gdGap.lg": "gdGap.lg",
          "gdGap.xl": "gdGap.xl",
          "gdGap.lt-sm": "gdGap.lt-sm",
          "gdGap.lt-md": "gdGap.lt-md",
          "gdGap.lt-lg": "gdGap.lt-lg",
          "gdGap.lt-xl": "gdGap.lt-xl",
          "gdGap.gt-xs": "gdGap.gt-xs",
          "gdGap.gt-sm": "gdGap.gt-sm",
          "gdGap.gt-md": "gdGap.gt-md",
          "gdGap.gt-lg": "gdGap.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridGapDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridGapDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridGapDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$8,
            inputs: inputs$8
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/row/row.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$6 = 'auto';

      var GridRowStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_41) {
        _inherits(GridRowStyleBuilder, _angular_flex_layout_41);

        var _super70 = _createSuper(GridRowStyleBuilder);

        function GridRowStyleBuilder() {
          _classCallCheck(this, GridRowStyleBuilder);

          return _super70.apply(this, arguments);
        }

        _createClass(GridRowStyleBuilder, [{
          key: "buildStyles",

          /**
           * @param {?} input
           * @return {?}
           */
          value: function buildStyles(input) {
            return {
              'grid-row': input || DEFAULT_VALUE$6
            };
          }
        }]);

        return GridRowStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridRowStyleBuilder.ɵfac = function GridRowStyleBuilder_Factory(t) {
        return ɵGridRowStyleBuilder_BaseFactory(t || GridRowStyleBuilder);
      };
      /** @nocollapse */


      GridRowStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridRowStyleBuilder_Factory() {
          return new GridRowStyleBuilder();
        },
        token: GridRowStyleBuilder,
        providedIn: "root"
      });

      var ɵGridRowStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridRowStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridRowStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridRowDirective = /*#__PURE__*/function (_angular_flex_layout_42) {
        _inherits(GridRowDirective, _angular_flex_layout_42);

        var _super71 = _createSuper(GridRowDirective);

        /**
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         */
        function GridRowDirective(elementRef, styleBuilder, styler, marshal) {
          var _this103;

          _classCallCheck(this, GridRowDirective);

          _this103 = _super71.call(this, elementRef, styleBuilder, styler, marshal);
          _this103.DIRECTIVE_KEY = 'grid-row';
          _this103.styleCache = rowCache;

          _this103.init();

          return _this103;
        }

        return GridRowDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridRowDirective.ɵfac = function GridRowDirective_Factory(t) {
        return new (t || GridRowDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridRowStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridRowDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridRowDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridRowDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridRowStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridRowDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: GridRowStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, null);
      })();
      /** @type {?} */


      var rowCache = new Map();
      /** @type {?} */

      var inputs$9 = ['gdRow', 'gdRow.xs', 'gdRow.sm', 'gdRow.md', 'gdRow.lg', 'gdRow.xl', 'gdRow.lt-sm', 'gdRow.lt-md', 'gdRow.lt-lg', 'gdRow.lt-xl', 'gdRow.gt-xs', 'gdRow.gt-sm', 'gdRow.gt-md', 'gdRow.gt-lg'];
      /** @type {?} */

      var selector$9 = "\n  [gdRow],\n  [gdRow.xs], [gdRow.sm], [gdRow.md], [gdRow.lg], [gdRow.xl],\n  [gdRow.lt-sm], [gdRow.lt-md], [gdRow.lt-lg], [gdRow.lt-xl],\n  [gdRow.gt-xs], [gdRow.gt-sm], [gdRow.gt-md], [gdRow.gt-lg]\n";
      /**
       * 'grid-row' CSS Grid styling directive
       * Configures the name or position of an element within the grid
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
       */

      var DefaultGridRowDirective = /*#__PURE__*/function (_GridRowDirective) {
        _inherits(DefaultGridRowDirective, _GridRowDirective);

        var _super72 = _createSuper(DefaultGridRowDirective);

        function DefaultGridRowDirective() {
          var _this104;

          _classCallCheck(this, DefaultGridRowDirective);

          _this104 = _super72.apply(this, arguments);
          _this104.inputs = inputs$9;
          return _this104;
        }

        return DefaultGridRowDirective;
      }(GridRowDirective);

      DefaultGridRowDirective.ɵfac = function DefaultGridRowDirective_Factory(t) {
        return ɵDefaultGridRowDirective_BaseFactory(t || DefaultGridRowDirective);
      };

      DefaultGridRowDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridRowDirective,
        selectors: [["", "gdRow", ""], ["", "gdRow.xs", ""], ["", "gdRow.sm", ""], ["", "gdRow.md", ""], ["", "gdRow.lg", ""], ["", "gdRow.xl", ""], ["", "gdRow.lt-sm", ""], ["", "gdRow.lt-md", ""], ["", "gdRow.lt-lg", ""], ["", "gdRow.lt-xl", ""], ["", "gdRow.gt-xs", ""], ["", "gdRow.gt-sm", ""], ["", "gdRow.gt-md", ""], ["", "gdRow.gt-lg", ""]],
        inputs: {
          gdRow: "gdRow",
          "gdRow.xs": "gdRow.xs",
          "gdRow.sm": "gdRow.sm",
          "gdRow.md": "gdRow.md",
          "gdRow.lg": "gdRow.lg",
          "gdRow.xl": "gdRow.xl",
          "gdRow.lt-sm": "gdRow.lt-sm",
          "gdRow.lt-md": "gdRow.lt-md",
          "gdRow.lt-lg": "gdRow.lt-lg",
          "gdRow.lt-xl": "gdRow.lt-xl",
          "gdRow.gt-xs": "gdRow.gt-xs",
          "gdRow.gt-sm": "gdRow.gt-sm",
          "gdRow.gt-md": "gdRow.gt-md",
          "gdRow.gt-lg": "gdRow.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridRowDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridRowDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridRowDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$9,
            inputs: inputs$9
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/rows/rows.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DEFAULT_VALUE$7 = 'none';
      /** @type {?} */

      var AUTO_SPECIFIER$1 = '!';

      var GridRowsStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_43) {
        _inherits(GridRowsStyleBuilder, _angular_flex_layout_43);

        var _super73 = _createSuper(GridRowsStyleBuilder);

        function GridRowsStyleBuilder() {
          _classCallCheck(this, GridRowsStyleBuilder);

          return _super73.apply(this, arguments);
        }

        _createClass(GridRowsStyleBuilder, [{
          key: "buildStyles",

          /**
           * @param {?} input
           * @param {?} parent
           * @return {?}
           */
          value: function buildStyles(input, parent) {
            input = input || DEFAULT_VALUE$7;
            /** @type {?} */

            var auto = false;

            if (input.endsWith(AUTO_SPECIFIER$1)) {
              input = input.substring(0, input.indexOf(AUTO_SPECIFIER$1));
              auto = true;
            }
            /** @type {?} */


            var css = {
              'display': parent.inline ? 'inline-grid' : 'grid',
              'grid-auto-rows': '',
              'grid-template-rows': ''
            };
            /** @type {?} */

            var key = auto ? 'grid-auto-rows' : 'grid-template-rows';
            css[key] = input;
            return css;
          }
        }]);

        return GridRowsStyleBuilder;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

      GridRowsStyleBuilder.ɵfac = function GridRowsStyleBuilder_Factory(t) {
        return ɵGridRowsStyleBuilder_BaseFactory(t || GridRowsStyleBuilder);
      };
      /** @nocollapse */


      GridRowsStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function GridRowsStyleBuilder_Factory() {
          return new GridRowsStyleBuilder();
        },
        token: GridRowsStyleBuilder,
        providedIn: "root"
      });

      var ɵGridRowsStyleBuilder_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridRowsStyleBuilder);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridRowsStyleBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var GridRowsDirective = /*#__PURE__*/function (_angular_flex_layout_44) {
        _inherits(GridRowsDirective, _angular_flex_layout_44);

        var _super74 = _createSuper(GridRowsDirective);

        /**
         * @param {?} elementRef
         * @param {?} styleBuilder
         * @param {?} styler
         * @param {?} marshal
         */
        function GridRowsDirective(elementRef, styleBuilder, styler, marshal) {
          var _this105;

          _classCallCheck(this, GridRowsDirective);

          _this105 = _super74.call(this, elementRef, styleBuilder, styler, marshal);
          _this105.DIRECTIVE_KEY = 'grid-rows';
          _this105._inline = false;

          _this105.init();

          return _this105;
        }
        /**
         * @return {?}
         */


        _createClass(GridRowsDirective, [{
          key: "updateWithValue",
          // *********************************************
          // Protected methods
          // *********************************************

          /**
           * @protected
           * @param {?} value
           * @return {?}
           */
          value: function updateWithValue(value) {
            this.styleCache = this.inline ? rowsInlineCache : rowsCache;
            this.addStyles(value, {
              inline: this.inline
            });
          }
        }, {
          key: "inline",
          get: function get() {
            return this._inline;
          }
          /**
           * @param {?} val
           * @return {?}
           */
          ,
          set: function set(val) {
            this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
          }
        }]);

        return GridRowsDirective;
      }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

      GridRowsDirective.ɵfac = function GridRowsDirective_Factory(t) {
        return new (t || GridRowsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridRowsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
      };

      GridRowsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GridRowsDirective,
        inputs: {
          inline: ["gdInline", "inline"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      GridRowsDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridRowsStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      };

      GridRowsDirective.propDecorators = {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridRowsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: GridRowsStyleBuilder
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
          }, {
            type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
          }];
        }, {
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['gdInline']
          }]
        });
      })();
      /** @type {?} */


      var rowsCache = new Map();
      /** @type {?} */

      var rowsInlineCache = new Map();
      /** @type {?} */

      var inputs$10 = ['gdRows', 'gdRows.xs', 'gdRows.sm', 'gdRows.md', 'gdRows.lg', 'gdRows.xl', 'gdRows.lt-sm', 'gdRows.lt-md', 'gdRows.lt-lg', 'gdRows.lt-xl', 'gdRows.gt-xs', 'gdRows.gt-sm', 'gdRows.gt-md', 'gdRows.gt-lg'];
      /** @type {?} */

      var selector$10 = "\n  [gdRows],\n  [gdRows.xs], [gdRows.sm], [gdRows.md], [gdRows.lg], [gdRows.xl],\n  [gdRows.lt-sm], [gdRows.lt-md], [gdRows.lt-lg], [gdRows.lt-xl],\n  [gdRows.gt-xs], [gdRows.gt-sm], [gdRows.gt-md], [gdRows.gt-lg]\n";
      /**
       * 'grid-template-rows' CSS Grid styling directive
       * Configures the sizing for the rows in the grid
       * Syntax: <column value> [auto]
       * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
       */

      var DefaultGridRowsDirective = /*#__PURE__*/function (_GridRowsDirective) {
        _inherits(DefaultGridRowsDirective, _GridRowsDirective);

        var _super75 = _createSuper(DefaultGridRowsDirective);

        function DefaultGridRowsDirective() {
          var _this106;

          _classCallCheck(this, DefaultGridRowsDirective);

          _this106 = _super75.apply(this, arguments);
          _this106.inputs = inputs$10;
          return _this106;
        }

        return DefaultGridRowsDirective;
      }(GridRowsDirective);

      DefaultGridRowsDirective.ɵfac = function DefaultGridRowsDirective_Factory(t) {
        return ɵDefaultGridRowsDirective_BaseFactory(t || DefaultGridRowsDirective);
      };

      DefaultGridRowsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultGridRowsDirective,
        selectors: [["", "gdRows", ""], ["", "gdRows.xs", ""], ["", "gdRows.sm", ""], ["", "gdRows.md", ""], ["", "gdRows.lg", ""], ["", "gdRows.xl", ""], ["", "gdRows.lt-sm", ""], ["", "gdRows.lt-md", ""], ["", "gdRows.lt-lg", ""], ["", "gdRows.lt-xl", ""], ["", "gdRows.gt-xs", ""], ["", "gdRows.gt-sm", ""], ["", "gdRows.gt-md", ""], ["", "gdRows.gt-lg", ""]],
        inputs: {
          gdRows: "gdRows",
          "gdRows.xs": "gdRows.xs",
          "gdRows.sm": "gdRows.sm",
          "gdRows.md": "gdRows.md",
          "gdRows.lg": "gdRows.lg",
          "gdRows.xl": "gdRows.xl",
          "gdRows.lt-sm": "gdRows.lt-sm",
          "gdRows.lt-md": "gdRows.lt-md",
          "gdRows.lt-lg": "gdRows.lt-lg",
          "gdRows.lt-xl": "gdRows.lt-xl",
          "gdRows.gt-xs": "gdRows.gt-xs",
          "gdRows.gt-sm": "gdRows.gt-sm",
          "gdRows.gt-md": "gdRows.gt-md",
          "gdRows.gt-lg": "gdRows.gt-lg"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵDefaultGridRowsDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridRowsDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridRowsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: selector$10,
            inputs: inputs$10
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var ALL_DIRECTIVES = [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective];
      /**
       * *****************************************************************
       * Define module for the CSS Grid API
       * *****************************************************************
       */

      var GridModule = function GridModule() {
        _classCallCheck(this, GridModule);
      };

      GridModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GridModule
      });
      GridModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GridModule_Factory(t) {
          return new (t || GridModule)();
        },
        imports: [[_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GridModule, {
          declarations: function declarations() {
            return [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective];
          },
          imports: function imports() {
            return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]];
          },
          exports: function exports() {
            return [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]],
            declarations: [].concat(ALL_DIRECTIVES),
            exports: [].concat(ALL_DIRECTIVES)
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: grid/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: grid/index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=grid.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~layouts-default-default-module~modules-admin-admin-module~modules-kaprodi-kaprodi-module~mod~9d3e5a49-es5.js.map