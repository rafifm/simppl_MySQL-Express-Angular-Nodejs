(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layouts-akun-akun-module~layouts-default-default-module~modules-admin-admin-module~modules-k~ac209db2"], {
    /***/
    "3Pt+":
    /*!********************************************************************!*\
      !*** ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js ***!
      \********************************************************************/

    /*! exports provided: AbstractControl, AbstractControlDirective, AbstractFormGroupDirective, COMPOSITION_BUFFER_MODE, CheckboxControlValueAccessor, CheckboxRequiredValidator, ControlContainer, DefaultValueAccessor, EmailValidator, FormArray, FormArrayName, FormBuilder, FormControl, FormControlDirective, FormControlName, FormGroup, FormGroupDirective, FormGroupName, FormsModule, MaxLengthValidator, MinLengthValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgModel, NgModelGroup, NgSelectOption, NumberValueAccessor, PatternValidator, RadioControlValueAccessor, RangeValueAccessor, ReactiveFormsModule, RequiredValidator, SelectControlValueAccessor, SelectMultipleControlValueAccessor, VERSION, Validators, ɵInternalFormsSharedModule, ɵNgNoValidate, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_ba, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_d, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_y, ɵangular_packages_forms_forms_z */

    /***/
    function Pt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbstractControl", function () {
        return AbstractControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function () {
        return AbstractControlDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function () {
        return AbstractFormGroupDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function () {
        return COMPOSITION_BUFFER_MODE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function () {
        return CheckboxControlValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function () {
        return CheckboxRequiredValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlContainer", function () {
        return ControlContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function () {
        return DefaultValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailValidator", function () {
        return EmailValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormArray", function () {
        return FormArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormArrayName", function () {
        return FormArrayName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormBuilder", function () {
        return FormBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormControl", function () {
        return FormControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormControlDirective", function () {
        return FormControlDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormControlName", function () {
        return FormControlName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormGroup", function () {
        return FormGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function () {
        return FormGroupDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormGroupName", function () {
        return FormGroupName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsModule", function () {
        return FormsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function () {
        return MaxLengthValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function () {
        return MinLengthValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function () {
        return NG_ASYNC_VALIDATORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function () {
        return NG_VALIDATORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function () {
        return NG_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgControl", function () {
        return NgControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgControlStatus", function () {
        return NgControlStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function () {
        return NgControlStatusGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgForm", function () {
        return NgForm;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgModel", function () {
        return NgModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgModelGroup", function () {
        return NgModelGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgSelectOption", function () {
        return NgSelectOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NumberValueAccessor", function () {
        return NumberValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PatternValidator", function () {
        return PatternValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function () {
        return RadioControlValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RangeValueAccessor", function () {
        return RangeValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function () {
        return ReactiveFormsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequiredValidator", function () {
        return RequiredValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function () {
        return SelectControlValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function () {
        return SelectMultipleControlValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VERSION", function () {
        return VERSION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Validators", function () {
        return Validators;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵInternalFormsSharedModule", function () {
        return ɵInternalFormsSharedModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵNgNoValidate", function () {
        return ɵNgNoValidate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵNgSelectMultipleOption", function () {
        return ɵNgSelectMultipleOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function () {
        return SHARED_FORM_DIRECTIVES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function () {
        return TEMPLATE_DRIVEN_DIRECTIVES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function () {
        return CHECKBOX_REQUIRED_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function () {
        return EMAIL_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function () {
        return MIN_LENGTH_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function () {
        return MAX_LENGTH_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function () {
        return PATTERN_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function () {
        return REACTIVE_DRIVEN_DIRECTIVES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function () {
        return ɵInternalFormsSharedModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function () {
        return CHECKBOX_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function () {
        return DEFAULT_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function () {
        return AbstractControlStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function () {
        return ngControlStatusHost;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function () {
        return formDirectiveProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function () {
        return formControlBinding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function () {
        return modelGroupProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function () {
        return NUMBER_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function () {
        return RADIO_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function () {
        return RadioControlRegistry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function () {
        return RANGE_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function () {
        return NG_MODEL_WITH_FORM_CONTROL_WARNING;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function () {
        return formControlBinding$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function () {
        return controlNameBinding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function () {
        return formDirectiveProvider$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function () {
        return formGroupNameProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function () {
        return formArrayNameProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function () {
        return SELECT_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function () {
        return SELECT_MULTIPLE_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function () {
        return ɵNgSelectMultipleOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function () {
        return ɵNgNoValidate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function () {
        return REQUIRED_VALIDATOR;
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
       * @license Angular v11.0.0
       * (c) 2010-2020 Google LLC. https://angular.io/
       * License: MIT
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Used to provide a `ControlValueAccessor` for form controls.
       *
       * See `DefaultValueAccessor` for how to implement one.
       *
       * @publicApi
       */


      var NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValueAccessor');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var CHECKBOX_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return CheckboxControlValueAccessor;
        }),
        multi: true
      };
      /**
       * @description
       * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
       * element.
       *
       * @usageNotes
       *
       * ### Using a checkbox with a reactive form.
       *
       * The following example shows how to use a checkbox with a reactive form.
       *
       * ```ts
       * const rememberLoginControl = new FormControl();
       * ```
       *
       * ```
       * <input type="checkbox" [formControl]="rememberLoginControl">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var CheckboxControlValueAccessor = /*#__PURE__*/function () {
        function CheckboxControlValueAccessor(_renderer, _elementRef) {
          _classCallCheck(this, CheckboxControlValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          /**
           * The registered callback function called when a change event occurs on the input element.
           * @nodoc
           */

          this.onChange = function (_) {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};
        }
        /**
         * Sets the "checked" property on the input element.
         * @nodoc
         */


        _createClass(CheckboxControlValueAccessor, [{
          key: "writeValue",
          value: function writeValue(value) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
        }]);

        return CheckboxControlValueAccessor;
      }();

      CheckboxControlValueAccessor.ɵfac = function CheckboxControlValueAccessor_Factory(t) {
        return new (t || CheckboxControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      CheckboxControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CheckboxControlValueAccessor,
        selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
        hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
              return ctx.onChange($event.target.checked);
            })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CHECKBOX_VALUE_ACCESSOR])]
      });

      CheckboxControlValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
            host: {
              '(change)': 'onChange($event.target.checked)',
              '(blur)': 'onTouched()'
            },
            providers: [CHECKBOX_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
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


      var DEFAULT_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return DefaultValueAccessor;
        }),
        multi: true
      };
      /**
       * We must check whether the agent is Android because composition events
       * behave differently between iOS and Android.
       */

      function _isAndroid() {
        var userAgent = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])() ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getUserAgent() : '';
        return /android (\d+)/.test(userAgent.toLowerCase());
      }
      /**
       * @description
       * Provide this token to control if form directives buffer IME input until
       * the "compositionend" event occurs.
       * @publicApi
       */


      var COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CompositionEventMode');
      /**
       * @description
       *
       * {@searchKeywords ngDefaultControl}
       *
       * The default `ControlValueAccessor` for writing a value and listening to changes on input
       * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
       * `NgModel` directives.
       *
       * @usageNotes
       *
       * ### Using the default value accessor
       *
       * The following example shows how to use an input element that activates the default value accessor
       * (in this case, a text field).
       *
       * ```ts
       * const firstNameControl = new FormControl();
       * ```
       *
       * ```
       * <input type="text" [formControl]="firstNameControl">
       * ```
       *
       * This value accessor is used by default for `<input type="text">` and `<textarea>` elements, but
       * you could also use it for custom components that have similar behavior and do not require special
       * processing. In order to attach the default value accessor to a custom element, add the
       * `ngDefaultControl` attribute as shown below.
       *
       * ```
       * <custom-input-component ngDefaultControl [(ngModel)]="value"></custom-input-component>
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var DefaultValueAccessor = /*#__PURE__*/function () {
        function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
          _classCallCheck(this, DefaultValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          this._compositionMode = _compositionMode;
          /**
           * The registered callback function called when an input event occurs on the input element.
           * @nodoc
           */

          this.onChange = function (_) {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};
          /** Whether the user is creating a composition string (IME events). */


          this._composing = false;

          if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
          }
        }
        /**
         * Sets the "value" property on the input element.
         * @nodoc
         */


        _createClass(DefaultValueAccessor, [{
          key: "writeValue",
          value: function writeValue(value) {
            var normalizedValue = value == null ? '' : value;

            this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
          /** @internal */

        }, {
          key: "_handleInput",
          value: function _handleInput(value) {
            if (!this._compositionMode || this._compositionMode && !this._composing) {
              this.onChange(value);
            }
          }
          /** @internal */

        }, {
          key: "_compositionStart",
          value: function _compositionStart() {
            this._composing = true;
          }
          /** @internal */

        }, {
          key: "_compositionEnd",
          value: function _compositionEnd(value) {
            this._composing = false;
            this._compositionMode && this.onChange(value);
          }
        }]);

        return DefaultValueAccessor;
      }();

      DefaultValueAccessor.ɵfac = function DefaultValueAccessor_Factory(t) {
        return new (t || DefaultValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](COMPOSITION_BUFFER_MODE, 8));
      };

      DefaultValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultValueAccessor,
        selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
        hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
              return ctx._handleInput($event.target.value);
            })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
              return ctx._compositionStart();
            })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
              return ctx._compositionEnd($event.target.value);
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([DEFAULT_VALUE_ACCESSOR])]
      });

      DefaultValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [COMPOSITION_BUFFER_MODE]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
            // TODO: vsavkin replace the above selector with the one below it once
            // https://github.com/angular/angular/issues/3011 is implemented
            // selector: '[ngModel],[formControl],[formControlName]',
            host: {
              '(input)': '$any(this)._handleInput($event.target.value)',
              '(blur)': 'onTouched()',
              '(compositionstart)': '$any(this)._compositionStart()',
              '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
            },
            providers: [DEFAULT_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: Boolean,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [COMPOSITION_BUFFER_MODE]
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


      function isEmptyInputValue(value) {
        // we don't check for string here so it also works with arrays
        return value == null || value.length === 0;
      }

      function hasValidLength(value) {
        // non-strict comparison is intentional, to check for both `null` and `undefined` values
        return value != null && typeof value.length === 'number';
      }
      /**
       * @description
       * An `InjectionToken` for registering additional synchronous validators used with
       * `AbstractControl`s.
       *
       * @see `NG_ASYNC_VALIDATORS`
       *
       * @usageNotes
       *
       * ### Providing a custom validator
       *
       * The following example registers a custom validator directive. Adding the validator to the
       * existing collection of validators requires the `multi: true` option.
       *
       * ```typescript
       * @Directive({
       *   selector: '[customValidator]',
       *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
       * })
       * class CustomValidatorDirective implements Validator {
       *   validate(control: AbstractControl): ValidationErrors | null {
       *     return { 'custom': true };
       *   }
       * }
       * ```
       *
       * @publicApi
       */


      var NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValidators');
      /**
       * @description
       * An `InjectionToken` for registering additional asynchronous validators used with
       * `AbstractControl`s.
       *
       * @see `NG_VALIDATORS`
       *
       * @publicApi
       */

      var NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgAsyncValidators');
      /**
       * A regular expression that matches valid e-mail addresses.
       *
       * At a high level, this regexp matches e-mail addresses of the format `local-part@tld`, where:
       * - `local-part` consists of one or more of the allowed characters (alphanumeric and some
       *   punctuation symbols).
       * - `local-part` cannot begin or end with a period (`.`).
       * - `local-part` cannot be longer than 64 characters.
       * - `tld` consists of one or more `labels` separated by periods (`.`). For example `localhost` or
       *   `foo.com`.
       * - A `label` consists of one or more of the allowed characters (alphanumeric, dashes (`-`) and
       *   periods (`.`)).
       * - A `label` cannot begin or end with a dash (`-`) or a period (`.`).
       * - A `label` cannot be longer than 63 characters.
       * - The whole address cannot be longer than 254 characters.
       *
       * ## Implementation background
       *
       * This regexp was ported over from AngularJS (see there for git history):
       * https://github.com/angular/angular.js/blob/c133ef836/src/ng/directive/input.js#L27
       * It is based on the
       * [WHATWG version](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
       * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
       * lengths of different parts of the address). The main differences from the WHATWG version are:
       *   - Disallow `local-part` to begin or end with a period (`.`).
       *   - Disallow `local-part` length to exceed 64 characters.
       *   - Disallow total address length to exceed 254 characters.
       *
       * See [this commit](https://github.com/angular/angular.js/commit/f3f5cf72e) for more details.
       */

      var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      /**
       * @description
       * Provides a set of built-in validators that can be used by form controls.
       *
       * A validator is a function that processes a `FormControl` or collection of
       * controls and returns an error map or null. A null map means that validation has passed.
       *
       * @see [Form Validation](/guide/form-validation)
       *
       * @publicApi
       */

      var Validators = /*#__PURE__*/function () {
        function Validators() {
          _classCallCheck(this, Validators);
        }

        _createClass(Validators, null, [{
          key: "min",

          /**
           * @description
           * Validator that requires the control's value to be greater than or equal to the provided number.
           * The validator exists only as a function and not as a directive.
           *
           * @usageNotes
           *
           * ### Validate against a minimum of 3
           *
           * ```typescript
           * const control = new FormControl(2, Validators.min(3));
           *
           * console.log(control.errors); // {min: {min: 3, actual: 2}}
           * ```
           *
           * @returns A validator function that returns an error map with the
           * `min` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */
          value: function min(_min) {
            return function (control) {
              if (isEmptyInputValue(control.value) || isEmptyInputValue(_min)) {
                return null; // don't validate empty values to allow optional controls
              }

              var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
              // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min

              return !isNaN(value) && value < _min ? {
                'min': {
                  'min': _min,
                  'actual': control.value
                }
              } : null;
            };
          }
          /**
           * @description
           * Validator that requires the control's value to be less than or equal to the provided number.
           * The validator exists only as a function and not as a directive.
           *
           * @usageNotes
           *
           * ### Validate against a maximum of 15
           *
           * ```typescript
           * const control = new FormControl(16, Validators.max(15));
           *
           * console.log(control.errors); // {max: {max: 15, actual: 16}}
           * ```
           *
           * @returns A validator function that returns an error map with the
           * `max` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "max",
          value: function max(_max) {
            return function (control) {
              if (isEmptyInputValue(control.value) || isEmptyInputValue(_max)) {
                return null; // don't validate empty values to allow optional controls
              }

              var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
              // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max

              return !isNaN(value) && value > _max ? {
                'max': {
                  'max': _max,
                  'actual': control.value
                }
              } : null;
            };
          }
          /**
           * @description
           * Validator that requires the control have a non-empty value.
           *
           * @usageNotes
           *
           * ### Validate that the field is non-empty
           *
           * ```typescript
           * const control = new FormControl('', Validators.required);
           *
           * console.log(control.errors); // {required: true}
           * ```
           *
           * @returns An error map with the `required` property
           * if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "required",
          value: function required(control) {
            return isEmptyInputValue(control.value) ? {
              'required': true
            } : null;
          }
          /**
           * @description
           * Validator that requires the control's value be true. This validator is commonly
           * used for required checkboxes.
           *
           * @usageNotes
           *
           * ### Validate that the field value is true
           *
           * ```typescript
           * const control = new FormControl('', Validators.requiredTrue);
           *
           * console.log(control.errors); // {required: true}
           * ```
           *
           * @returns An error map that contains the `required` property
           * set to `true` if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "requiredTrue",
          value: function requiredTrue(control) {
            return control.value === true ? null : {
              'required': true
            };
          }
          /**
           * @description
           * Validator that requires the control's value pass an email validation test.
           *
           * Tests the value using a [regular
           * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
           * pattern suitable for common usecases. The pattern is based on the definition of a valid email
           * address in the [WHATWG HTML
           * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
           * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
           * lengths of different parts of the address).
           *
           * The differences from the WHATWG version include:
           * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
           * - Disallow `local-part` to be longer than 64 characters.
           * - Disallow the whole address to be longer than 254 characters.
           *
           * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
           * validate the value against a different pattern.
           *
           * @usageNotes
           *
           * ### Validate that the field matches a valid email pattern
           *
           * ```typescript
           * const control = new FormControl('bad@', Validators.email);
           *
           * console.log(control.errors); // {email: true}
           * ```
           *
           * @returns An error map with the `email` property
           * if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "email",
          value: function email(control) {
            if (isEmptyInputValue(control.value)) {
              return null; // don't validate empty values to allow optional controls
            }

            return EMAIL_REGEXP.test(control.value) ? null : {
              'email': true
            };
          }
          /**
           * @description
           * Validator that requires the length of the control's value to be greater than or equal
           * to the provided minimum length. This validator is also provided by default if you use the
           * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
           * only for types that have a numeric `length` property, such as strings or arrays. The
           * `minLength` validator logic is also not invoked for values when their `length` property is 0
           * (for example in case of an empty string or an empty array), to support optional controls. You
           * can use the standard `required` validator if empty values should not be considered valid.
           *
           * @usageNotes
           *
           * ### Validate that the field has a minimum of 3 characters
           *
           * ```typescript
           * const control = new FormControl('ng', Validators.minLength(3));
           *
           * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
           * ```
           *
           * ```html
           * <input minlength="5">
           * ```
           *
           * @returns A validator function that returns an error map with the
           * `minlength` if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "minLength",
          value: function minLength(_minLength) {
            return function (control) {
              if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
                // don't validate empty values to allow optional controls
                // don't validate values without `length` property
                return null;
              }

              return control.value.length < _minLength ? {
                'minlength': {
                  'requiredLength': _minLength,
                  'actualLength': control.value.length
                }
              } : null;
            };
          }
          /**
           * @description
           * Validator that requires the length of the control's value to be less than or equal
           * to the provided maximum length. This validator is also provided by default if you use the
           * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
           * only for types that have a numeric `length` property, such as strings or arrays.
           *
           * @usageNotes
           *
           * ### Validate that the field has maximum of 5 characters
           *
           * ```typescript
           * const control = new FormControl('Angular', Validators.maxLength(5));
           *
           * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
           * ```
           *
           * ```html
           * <input maxlength="5">
           * ```
           *
           * @returns A validator function that returns an error map with the
           * `maxlength` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "maxLength",
          value: function maxLength(_maxLength) {
            return function (control) {
              return hasValidLength(control.value) && control.value.length > _maxLength ? {
                'maxlength': {
                  'requiredLength': _maxLength,
                  'actualLength': control.value.length
                }
              } : null;
            };
          }
          /**
           * @description
           * Validator that requires the control's value to match a regex pattern. This validator is also
           * provided by default if you use the HTML5 `pattern` attribute.
           *
           * @usageNotes
           *
           * ### Validate that the field only contains letters or spaces
           *
           * ```typescript
           * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
           *
           * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
           * ```
           *
           * ```html
           * <input pattern="[a-zA-Z ]*">
           * ```
           *
           * ### Pattern matching with the global or sticky flag
           *
           * `RegExp` objects created with the `g` or `y` flags that are passed into `Validators.pattern`
           * can produce different results on the same input when validations are run consecutively. This is
           * due to how the behavior of `RegExp.prototype.test` is
           * specified in [ECMA-262](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
           * (`RegExp` preserves the index of the last match when the global or sticky flag is used).
           * Due to this behavior, it is recommended that when using
           * `Validators.pattern` you **do not** pass in a `RegExp` object with either the global or sticky
           * flag enabled.
           *
           * ```typescript
           * // Not recommended (since the `g` flag is used)
           * const controlOne = new FormControl('1', Validators.pattern(/foo/g));
           *
           * // Good
           * const controlTwo = new FormControl('1', Validators.pattern(/foo/));
           * ```
           *
           * @param pattern A regular expression to be used as is to test the values, or a string.
           * If a string is passed, the `^` character is prepended and the `$` character is
           * appended to the provided string (if not already present), and the resulting regular
           * expression is used to test the values.
           *
           * @returns A validator function that returns an error map with the
           * `pattern` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "pattern",
          value: function pattern(_pattern) {
            if (!_pattern) return Validators.nullValidator;
            var regex;
            var regexStr;

            if (typeof _pattern === 'string') {
              regexStr = '';
              if (_pattern.charAt(0) !== '^') regexStr += '^';
              regexStr += _pattern;
              if (_pattern.charAt(_pattern.length - 1) !== '$') regexStr += '$';
              regex = new RegExp(regexStr);
            } else {
              regexStr = _pattern.toString();
              regex = _pattern;
            }

            return function (control) {
              if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
              }

              var value = control.value;
              return regex.test(value) ? null : {
                'pattern': {
                  'requiredPattern': regexStr,
                  'actualValue': value
                }
              };
            };
          }
          /**
           * @description
           * Validator that performs no operation.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "nullValidator",
          value: function nullValidator(control) {
            return null;
          }
        }, {
          key: "compose",
          value: function compose(validators) {
            if (!validators) return null;
            var presentValidators = validators.filter(isPresent);
            if (presentValidators.length == 0) return null;
            return function (control) {
              return mergeErrors(executeValidators(control, presentValidators));
            };
          }
          /**
           * @description
           * Compose multiple async validators into a single function that returns the union
           * of the individual error objects for the provided control.
           *
           * @returns A validator function that returns an error map with the
           * merged error objects of the async validators if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "composeAsync",
          value: function composeAsync(validators) {
            if (!validators) return null;
            var presentValidators = validators.filter(isPresent);
            if (presentValidators.length == 0) return null;
            return function (control) {
              var observables = executeValidators(control, presentValidators).map(toObservable);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(mergeErrors));
            };
          }
        }]);

        return Validators;
      }();

      function isPresent(o) {
        return o != null;
      }

      function toObservable(r) {
        var obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r) : r;

        if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisObservable"])(obs) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw new Error("Expected validator to return Promise or Observable.");
        }

        return obs;
      }

      function mergeErrors(arrayOfErrors) {
        var res = {}; // Not using Array.reduce here due to a Chrome 80 bug
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

        arrayOfErrors.forEach(function (errors) {
          res = errors != null ? Object.assign(Object.assign({}, res), errors) : res;
        });
        return Object.keys(res).length === 0 ? null : res;
      }

      function executeValidators(control, validators) {
        return validators.map(function (validator) {
          return validator(control);
        });
      }

      function isValidatorFn(validator) {
        return !validator.validate;
      }
      /**
       * Given the list of validators that may contain both functions as well as classes, return the list
       * of validator functions (convert validator classes into validator functions). This is needed to
       * have consistent structure in validators list before composing them.
       *
       * @param validators The set of validators that may contain validators both in plain function form
       *     as well as represented as a validator class.
       */


      function normalizeValidators(validators) {
        return validators.map(function (validator) {
          return isValidatorFn(validator) ? validator : function (c) {
            return validator.validate(c);
          };
        });
      }
      /**
       * Merges synchronous validators into a single validator function (combined using
       * `Validators.compose`).
       */


      function composeValidators(validators) {
        return validators != null ? Validators.compose(normalizeValidators(validators)) : null;
      }
      /**
       * Merges asynchronous validators into a single validator function (combined using
       * `Validators.composeAsync`).
       */


      function composeAsyncValidators(validators) {
        return validators != null ? Validators.composeAsync(normalizeValidators(validators)) : null;
      }
      /**
       * Merges raw control validators with a given directive validator and returns the combined list of
       * validators as an array.
       */


      function mergeValidators(controlValidators, dirValidator) {
        if (controlValidators === null) return [dirValidator];
        return Array.isArray(controlValidators) ? [].concat(_toConsumableArray(controlValidators), [dirValidator]) : [controlValidators, dirValidator];
      }
      /**
       * Retrieves the list of raw synchronous validators attached to a given control.
       */


      function getControlValidators(control) {
        return control._rawValidators;
      }
      /**
       * Retrieves the list of raw asynchronous validators attached to a given control.
       */


      function getControlAsyncValidators(control) {
        return control._rawAsyncValidators;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * Base class for control directives.
       *
       * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
       *
       * @publicApi
       */


      var AbstractControlDirective = /*#__PURE__*/function () {
        function AbstractControlDirective() {
          _classCallCheck(this, AbstractControlDirective);

          /**
           * Set of synchronous validators as they were provided while calling `setValidators` function.
           * @internal
           */
          this._rawValidators = [];
          /**
           * Set of asynchronous validators as they were provided while calling `setAsyncValidators`
           * function.
           * @internal
           */

          this._rawAsyncValidators = [];
        }
        /**
         * @description
         * Reports the value of the control if it is present, otherwise null.
         */


        _createClass(AbstractControlDirective, [{
          key: "_setValidators",

          /**
           * Sets synchronous validators for this directive.
           * @internal
           */
          value: function _setValidators(validators) {
            this._rawValidators = validators || [];
            this._composedValidatorFn = composeValidators(this._rawValidators);
          }
          /**
           * Sets asynchronous validators for this directive.
           * @internal
           */

        }, {
          key: "_setAsyncValidators",
          value: function _setAsyncValidators(validators) {
            this._rawAsyncValidators = validators || [];
            this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
          }
          /**
           * @description
           * Synchronous validator function composed of all the synchronous validators registered with this
           * directive.
           */

        }, {
          key: "reset",

          /**
           * @description
           * Resets the control with the provided value if the control is present.
           */
          value: function reset() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            if (this.control) this.control.reset(value);
          }
          /**
           * @description
           * Reports whether the control with the given path has the error specified.
           *
           * @param errorCode The code of the error to check
           * @param path A list of control names that designates how to move from the current control
           * to the control that should be queried for errors.
           *
           * @usageNotes
           * For example, for the following `FormGroup`:
           *
           * ```
           * form = new FormGroup({
           *   address: new FormGroup({ street: new FormControl() })
           * });
           * ```
           *
           * The path to the 'street' control from the root form would be 'address' -> 'street'.
           *
           * It can be provided to this method in one of two formats:
           *
           * 1. An array of string control names, e.g. `['address', 'street']`
           * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
           *
           * If no path is given, this method checks for the error on the current control.
           *
           * @returns whether the given error is present in the control at the given path.
           *
           * If the control is not present, false is returned.
           */

        }, {
          key: "hasError",
          value: function hasError(errorCode, path) {
            return this.control ? this.control.hasError(errorCode, path) : false;
          }
          /**
           * @description
           * Reports error data for the control with the given path.
           *
           * @param errorCode The code of the error to check
           * @param path A list of control names that designates how to move from the current control
           * to the control that should be queried for errors.
           *
           * @usageNotes
           * For example, for the following `FormGroup`:
           *
           * ```
           * form = new FormGroup({
           *   address: new FormGroup({ street: new FormControl() })
           * });
           * ```
           *
           * The path to the 'street' control from the root form would be 'address' -> 'street'.
           *
           * It can be provided to this method in one of two formats:
           *
           * 1. An array of string control names, e.g. `['address', 'street']`
           * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
           *
           * @returns error data for that particular error. If the control or error is not present,
           * null is returned.
           */

        }, {
          key: "getError",
          value: function getError(errorCode, path) {
            return this.control ? this.control.getError(errorCode, path) : null;
          }
        }, {
          key: "value",
          get: function get() {
            return this.control ? this.control.value : null;
          }
          /**
           * @description
           * Reports whether the control is valid. A control is considered valid if no
           * validation errors exist with the current value.
           * If the control is not present, null is returned.
           */

        }, {
          key: "valid",
          get: function get() {
            return this.control ? this.control.valid : null;
          }
          /**
           * @description
           * Reports whether the control is invalid, meaning that an error exists in the input value.
           * If the control is not present, null is returned.
           */

        }, {
          key: "invalid",
          get: function get() {
            return this.control ? this.control.invalid : null;
          }
          /**
           * @description
           * Reports whether a control is pending, meaning that that async validation is occurring and
           * errors are not yet available for the input value. If the control is not present, null is
           * returned.
           */

        }, {
          key: "pending",
          get: function get() {
            return this.control ? this.control.pending : null;
          }
          /**
           * @description
           * Reports whether the control is disabled, meaning that the control is disabled
           * in the UI and is exempt from validation checks and excluded from aggregate
           * values of ancestor controls. If the control is not present, null is returned.
           */

        }, {
          key: "disabled",
          get: function get() {
            return this.control ? this.control.disabled : null;
          }
          /**
           * @description
           * Reports whether the control is enabled, meaning that the control is included in ancestor
           * calculations of validity or value. If the control is not present, null is returned.
           */

        }, {
          key: "enabled",
          get: function get() {
            return this.control ? this.control.enabled : null;
          }
          /**
           * @description
           * Reports the control's validation errors. If the control is not present, null is returned.
           */

        }, {
          key: "errors",
          get: function get() {
            return this.control ? this.control.errors : null;
          }
          /**
           * @description
           * Reports whether the control is pristine, meaning that the user has not yet changed
           * the value in the UI. If the control is not present, null is returned.
           */

        }, {
          key: "pristine",
          get: function get() {
            return this.control ? this.control.pristine : null;
          }
          /**
           * @description
           * Reports whether the control is dirty, meaning that the user has changed
           * the value in the UI. If the control is not present, null is returned.
           */

        }, {
          key: "dirty",
          get: function get() {
            return this.control ? this.control.dirty : null;
          }
          /**
           * @description
           * Reports whether the control is touched, meaning that the user has triggered
           * a `blur` event on it. If the control is not present, null is returned.
           */

        }, {
          key: "touched",
          get: function get() {
            return this.control ? this.control.touched : null;
          }
          /**
           * @description
           * Reports the validation status of the control. Possible values include:
           * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
           * If the control is not present, null is returned.
           */

        }, {
          key: "status",
          get: function get() {
            return this.control ? this.control.status : null;
          }
          /**
           * @description
           * Reports whether the control is untouched, meaning that the user has not yet triggered
           * a `blur` event on it. If the control is not present, null is returned.
           */

        }, {
          key: "untouched",
          get: function get() {
            return this.control ? this.control.untouched : null;
          }
          /**
           * @description
           * Returns a multicasting observable that emits a validation status whenever it is
           * calculated for the control. If the control is not present, null is returned.
           */

        }, {
          key: "statusChanges",
          get: function get() {
            return this.control ? this.control.statusChanges : null;
          }
          /**
           * @description
           * Returns a multicasting observable of value changes for the control that emits every time the
           * value of the control changes in the UI or programmatically.
           * If the control is not present, null is returned.
           */

        }, {
          key: "valueChanges",
          get: function get() {
            return this.control ? this.control.valueChanges : null;
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "path",
          get: function get() {
            return null;
          }
        }, {
          key: "validator",
          get: function get() {
            return this._composedValidatorFn || null;
          }
          /**
           * @description
           * Asynchronous validator function composed of all the asynchronous validators registered with
           * this directive.
           */

        }, {
          key: "asyncValidator",
          get: function get() {
            return this._composedAsyncValidatorFn || null;
          }
        }]);

        return AbstractControlDirective;
      }();

      AbstractControlDirective.ɵfac = function AbstractControlDirective_Factory(t) {
        return new (t || AbstractControlDirective)();
      };

      AbstractControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: AbstractControlDirective
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * A base class for directives that contain multiple registered instances of `NgControl`.
       * Only used by the forms module.
       *
       * @publicApi
       */

      var ControlContainer = /*#__PURE__*/function (_AbstractControlDirec) {
        _inherits(ControlContainer, _AbstractControlDirec);

        var _super = _createSuper(ControlContainer);

        function ControlContainer() {
          _classCallCheck(this, ControlContainer);

          return _super.apply(this, arguments);
        }

        _createClass(ControlContainer, [{
          key: "formDirective",

          /**
           * @description
           * The top-level form directive for the control.
           */
          get: function get() {
            return null;
          }
          /**
           * @description
           * The path to this group.
           */

        }, {
          key: "path",
          get: function get() {
            return null;
          }
        }]);

        return ControlContainer;
      }(AbstractControlDirective);

      ControlContainer.ɵfac = function ControlContainer_Factory(t) {
        return ɵControlContainer_BaseFactory(t || ControlContainer);
      };

      ControlContainer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ControlContainer,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵControlContainer_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ControlContainer);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * A base class that all `FormControl`-based directives extend. It binds a `FormControl`
       * object to a DOM element.
       *
       * @publicApi
       */


      var NgControl = /*#__PURE__*/function (_AbstractControlDirec2) {
        _inherits(NgControl, _AbstractControlDirec2);

        var _super2 = _createSuper(NgControl);

        function NgControl() {
          var _this;

          _classCallCheck(this, NgControl);

          _this = _super2.apply(this, arguments);
          /**
           * @description
           * The parent form for the control.
           *
           * @internal
           */

          _this._parent = null;
          /**
           * @description
           * The name for the control
           */

          _this.name = null;
          /**
           * @description
           * The value accessor for the control
           */

          _this.valueAccessor = null;
          return _this;
        }

        return NgControl;
      }(AbstractControlDirective);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var AbstractControlStatus = /*#__PURE__*/function () {
        function AbstractControlStatus(cd) {
          _classCallCheck(this, AbstractControlStatus);

          this._cd = cd;
        }

        _createClass(AbstractControlStatus, [{
          key: "ngClassUntouched",
          get: function get() {
            return this._cd.control ? this._cd.control.untouched : false;
          }
        }, {
          key: "ngClassTouched",
          get: function get() {
            return this._cd.control ? this._cd.control.touched : false;
          }
        }, {
          key: "ngClassPristine",
          get: function get() {
            return this._cd.control ? this._cd.control.pristine : false;
          }
        }, {
          key: "ngClassDirty",
          get: function get() {
            return this._cd.control ? this._cd.control.dirty : false;
          }
        }, {
          key: "ngClassValid",
          get: function get() {
            return this._cd.control ? this._cd.control.valid : false;
          }
        }, {
          key: "ngClassInvalid",
          get: function get() {
            return this._cd.control ? this._cd.control.invalid : false;
          }
        }, {
          key: "ngClassPending",
          get: function get() {
            return this._cd.control ? this._cd.control.pending : false;
          }
        }]);

        return AbstractControlStatus;
      }();

      var ngControlStatusHost = {
        '[class.ng-untouched]': 'ngClassUntouched',
        '[class.ng-touched]': 'ngClassTouched',
        '[class.ng-pristine]': 'ngClassPristine',
        '[class.ng-dirty]': 'ngClassDirty',
        '[class.ng-valid]': 'ngClassValid',
        '[class.ng-invalid]': 'ngClassInvalid',
        '[class.ng-pending]': 'ngClassPending'
      };
      /**
       * @description
       * Directive automatically applied to Angular form controls that sets CSS classes
       * based on control status.
       *
       * @usageNotes
       *
       * ### CSS classes applied
       *
       * The following classes are applied as the properties become true:
       *
       * * ng-valid
       * * ng-invalid
       * * ng-pending
       * * ng-pristine
       * * ng-dirty
       * * ng-untouched
       * * ng-touched
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var NgControlStatus = /*#__PURE__*/function (_AbstractControlStatu) {
        _inherits(NgControlStatus, _AbstractControlStatu);

        var _super3 = _createSuper(NgControlStatus);

        function NgControlStatus(cd) {
          _classCallCheck(this, NgControlStatus);

          return _super3.call(this, cd);
        }

        return NgControlStatus;
      }(AbstractControlStatus);

      NgControlStatus.ɵfac = function NgControlStatus_Factory(t) {
        return new (t || NgControlStatus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgControl, 2));
      };

      NgControlStatus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgControlStatus,
        selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
        hostVars: 14,
        hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-untouched", ctx.ngClassUntouched)("ng-touched", ctx.ngClassTouched)("ng-pristine", ctx.ngClassPristine)("ng-dirty", ctx.ngClassDirty)("ng-valid", ctx.ngClassValid)("ng-invalid", ctx.ngClassInvalid)("ng-pending", ctx.ngClassPending);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      NgControlStatus.ctorParameters = function () {
        return [{
          type: NgControl,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgControlStatus, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formControlName],[ngModel],[formControl]',
            host: ngControlStatusHost
          }]
        }], function () {
          return [{
            type: NgControl,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }]
          }];
        }, null);
      })();
      /**
       * @description
       * Directive automatically applied to Angular form groups that sets CSS classes
       * based on control status (valid/invalid/dirty/etc).
       *
       * @see `NgControlStatus`
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var NgControlStatusGroup = /*#__PURE__*/function (_AbstractControlStatu2) {
        _inherits(NgControlStatusGroup, _AbstractControlStatu2);

        var _super4 = _createSuper(NgControlStatusGroup);

        function NgControlStatusGroup(cd) {
          _classCallCheck(this, NgControlStatusGroup);

          return _super4.call(this, cd);
        }

        return NgControlStatusGroup;
      }(AbstractControlStatus);

      NgControlStatusGroup.ɵfac = function NgControlStatusGroup_Factory(t) {
        return new (t || NgControlStatusGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 2));
      };

      NgControlStatusGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgControlStatusGroup,
        selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
        hostVars: 14,
        hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-untouched", ctx.ngClassUntouched)("ng-touched", ctx.ngClassTouched)("ng-pristine", ctx.ngClassPristine)("ng-dirty", ctx.ngClassDirty)("ng-valid", ctx.ngClassValid)("ng-invalid", ctx.ngClassInvalid)("ng-pending", ctx.ngClassPending);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      NgControlStatusGroup.ctorParameters = function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgControlStatusGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
            host: ngControlStatusHost
          }]
        }], function () {
          return [{
            type: ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
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

      /**
       * Reports that a FormControl is valid, meaning that no errors exist in the input value.
       *
       * @see `status`
       */


      var VALID = 'VALID';
      /**
       * Reports that a FormControl is invalid, meaning that an error exists in the input value.
       *
       * @see `status`
       */

      var INVALID = 'INVALID';
      /**
       * Reports that a FormControl is pending, meaning that that async validation is occurring and
       * errors are not yet available for the input value.
       *
       * @see `markAsPending`
       * @see `status`
       */

      var PENDING = 'PENDING';
      /**
       * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
       * calculations of validity or value.
       *
       * @see `markAsDisabled`
       * @see `status`
       */

      var DISABLED = 'DISABLED';

      function _find(control, path, delimiter) {
        if (path == null) return null;

        if (!Array.isArray(path)) {
          path = path.split(delimiter);
        }

        if (Array.isArray(path) && path.length === 0) return null; // Not using Array.reduce here due to a Chrome 80 bug
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

        var controlToFind = control;
        path.forEach(function (name) {
          if (controlToFind instanceof FormGroup) {
            controlToFind = controlToFind.controls.hasOwnProperty(name) ? controlToFind.controls[name] : null;
          } else if (controlToFind instanceof FormArray) {
            controlToFind = controlToFind.at(name) || null;
          } else {
            controlToFind = null;
          }
        });
        return controlToFind;
      }
      /**
       * Gets validators from either an options object or given validators.
       */


      function pickValidators(validatorOrOpts) {
        return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
      }
      /**
       * Creates validator function by combining provided validators.
       */


      function coerceToValidator(validator) {
        return Array.isArray(validator) ? composeValidators(validator) : validator || null;
      }
      /**
       * Gets async validators from either an options object or given validators.
       */


      function pickAsyncValidators(asyncValidator, validatorOrOpts) {
        return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
      }
      /**
       * Creates async validator function by combining provided async validators.
       */


      function coerceToAsyncValidator(asyncValidator) {
        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
      }

      function isOptionsObj(validatorOrOpts) {
        return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === 'object';
      }
      /**
       * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
       *
       * It provides some of the shared behavior that all controls and groups of controls have, like
       * running validators, calculating status, and resetting state. It also defines the properties
       * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
       * instantiated directly.
       *
       * @see [Forms Guide](/guide/forms)
       * @see [Reactive Forms Guide](/guide/reactive-forms)
       * @see [Dynamic Forms Guide](/guide/dynamic-form)
       *
       * @publicApi
       */


      var AbstractControl = /*#__PURE__*/function () {
        /**
         * Initialize the AbstractControl instance.
         *
         * @param validators The function or array of functions that is used to determine the validity of
         *     this control synchronously.
         * @param asyncValidators The function or array of functions that is used to determine validity of
         *     this control asynchronously.
         */
        function AbstractControl(validators, asyncValidators) {
          _classCallCheck(this, AbstractControl);

          /**
           * Indicates that a control has its own pending asynchronous validation in progress.
           *
           * @internal
           */
          this._hasOwnPendingAsyncValidator = false;
          /** @internal */

          this._onCollectionChange = function () {};

          this._parent = null;
          /**
           * A control is `pristine` if the user has not yet changed
           * the value in the UI.
           *
           * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
           * Programmatic changes to a control's value do not mark it dirty.
           */

          this.pristine = true;
          /**
           * True if the control is marked as `touched`.
           *
           * A control is marked `touched` once the user has triggered
           * a `blur` event on it.
           */

          this.touched = false;
          /** @internal */

          this._onDisabledChange = [];
          this._rawValidators = validators;
          this._rawAsyncValidators = asyncValidators;
          this._composedValidatorFn = coerceToValidator(this._rawValidators);
          this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
        }
        /**
         * The function that is used to determine the validity of this control synchronously.
         */


        _createClass(AbstractControl, [{
          key: "setValidators",

          /**
           * Sets the synchronous validators that are active on this control.  Calling
           * this overwrites any existing sync validators.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           */
          value: function setValidators(newValidator) {
            this._rawValidators = newValidator;
            this._composedValidatorFn = coerceToValidator(newValidator);
          }
          /**
           * Sets the async validators that are active on this control. Calling this
           * overwrites any existing async validators.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           */

        }, {
          key: "setAsyncValidators",
          value: function setAsyncValidators(newValidator) {
            this._rawAsyncValidators = newValidator;
            this._composedAsyncValidatorFn = coerceToAsyncValidator(newValidator);
          }
          /**
           * Empties out the sync validator list.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           */

        }, {
          key: "clearValidators",
          value: function clearValidators() {
            this.validator = null;
          }
          /**
           * Empties out the async validator list.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           */

        }, {
          key: "clearAsyncValidators",
          value: function clearAsyncValidators() {
            this.asyncValidator = null;
          }
          /**
           * Marks the control as `touched`. A control is touched by focus and
           * blur events that do not change the value.
           *
           * @see `markAsUntouched()`
           * @see `markAsDirty()`
           * @see `markAsPristine()`
           *
           * @param opts Configuration options that determine how the control propagates changes
           * and emits events after marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           */

        }, {
          key: "markAsTouched",
          value: function markAsTouched() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.touched = true;

            if (this._parent && !opts.onlySelf) {
              this._parent.markAsTouched(opts);
            }
          }
          /**
           * Marks the control and all its descendant controls as `touched`.
           * @see `markAsTouched()`
           */

        }, {
          key: "markAllAsTouched",
          value: function markAllAsTouched() {
            this.markAsTouched({
              onlySelf: true
            });

            this._forEachChild(function (control) {
              return control.markAllAsTouched();
            });
          }
          /**
           * Marks the control as `untouched`.
           *
           * If the control has any children, also marks all children as `untouched`
           * and recalculates the `touched` status of all parent controls.
           *
           * @see `markAsTouched()`
           * @see `markAsDirty()`
           * @see `markAsPristine()`
           *
           * @param opts Configuration options that determine how the control propagates changes
           * and emits events after the marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           */

        }, {
          key: "markAsUntouched",
          value: function markAsUntouched() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.touched = false;
            this._pendingTouched = false;

            this._forEachChild(function (control) {
              control.markAsUntouched({
                onlySelf: true
              });
            });

            if (this._parent && !opts.onlySelf) {
              this._parent._updateTouched(opts);
            }
          }
          /**
           * Marks the control as `dirty`. A control becomes dirty when
           * the control's value is changed through the UI; compare `markAsTouched`.
           *
           * @see `markAsTouched()`
           * @see `markAsUntouched()`
           * @see `markAsPristine()`
           *
           * @param opts Configuration options that determine how the control propagates changes
           * and emits events after marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           */

        }, {
          key: "markAsDirty",
          value: function markAsDirty() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.pristine = false;

            if (this._parent && !opts.onlySelf) {
              this._parent.markAsDirty(opts);
            }
          }
          /**
           * Marks the control as `pristine`.
           *
           * If the control has any children, marks all children as `pristine`,
           * and recalculates the `pristine` status of all parent
           * controls.
           *
           * @see `markAsTouched()`
           * @see `markAsUntouched()`
           * @see `markAsDirty()`
           *
           * @param opts Configuration options that determine how the control emits events after
           * marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           */

        }, {
          key: "markAsPristine",
          value: function markAsPristine() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.pristine = true;
            this._pendingDirty = false;

            this._forEachChild(function (control) {
              control.markAsPristine({
                onlySelf: true
              });
            });

            if (this._parent && !opts.onlySelf) {
              this._parent._updatePristine(opts);
            }
          }
          /**
           * Marks the control as `pending`.
           *
           * A control is pending while the control performs async validation.
           *
           * @see {@link AbstractControl.status}
           *
           * @param opts Configuration options that determine how the control propagates changes and
           * emits events after marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
           * observable emits an event with the latest status the control is marked pending.
           * When false, no events are emitted.
           *
           */

        }, {
          key: "markAsPending",
          value: function markAsPending() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.status = PENDING;

            if (opts.emitEvent !== false) {
              this.statusChanges.emit(this.status);
            }

            if (this._parent && !opts.onlySelf) {
              this._parent.markAsPending(opts);
            }
          }
          /**
           * Disables the control. This means the control is exempt from validation checks and
           * excluded from the aggregate value of any parent. Its status is `DISABLED`.
           *
           * If the control has children, all children are also disabled.
           *
           * @see {@link AbstractControl.status}
           *
           * @param opts Configuration options that determine how the control propagates
           * changes and emits events after the control is disabled.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is disabled.
           * When false, no events are emitted.
           */

        }, {
          key: "disable",
          value: function disable() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            // If parent has been marked artificially dirty we don't want to re-calculate the
            // parent's dirtiness based on the children.
            var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

            this.status = DISABLED;
            this.errors = null;

            this._forEachChild(function (control) {
              control.disable(Object.assign(Object.assign({}, opts), {
                onlySelf: true
              }));
            });

            this._updateValue();

            if (opts.emitEvent !== false) {
              this.valueChanges.emit(this.value);
              this.statusChanges.emit(this.status);
            }

            this._updateAncestors(Object.assign(Object.assign({}, opts), {
              skipPristineCheck: skipPristineCheck
            }));

            this._onDisabledChange.forEach(function (changeFn) {
              return changeFn(true);
            });
          }
          /**
           * Enables the control. This means the control is included in validation checks and
           * the aggregate value of its parent. Its status recalculates based on its value and
           * its validators.
           *
           * By default, if the control has children, all children are enabled.
           *
           * @see {@link AbstractControl.status}
           *
           * @param opts Configure options that control how the control propagates changes and
           * emits events when marked as untouched
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is enabled.
           * When false, no events are emitted.
           */

        }, {
          key: "enable",
          value: function enable() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            // If parent has been marked artificially dirty we don't want to re-calculate the
            // parent's dirtiness based on the children.
            var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

            this.status = VALID;

            this._forEachChild(function (control) {
              control.enable(Object.assign(Object.assign({}, opts), {
                onlySelf: true
              }));
            });

            this.updateValueAndValidity({
              onlySelf: true,
              emitEvent: opts.emitEvent
            });

            this._updateAncestors(Object.assign(Object.assign({}, opts), {
              skipPristineCheck: skipPristineCheck
            }));

            this._onDisabledChange.forEach(function (changeFn) {
              return changeFn(false);
            });
          }
        }, {
          key: "_updateAncestors",
          value: function _updateAncestors(opts) {
            if (this._parent && !opts.onlySelf) {
              this._parent.updateValueAndValidity(opts);

              if (!opts.skipPristineCheck) {
                this._parent._updatePristine();
              }

              this._parent._updateTouched();
            }
          }
          /**
           * @param parent Sets the parent of the control
           */

        }, {
          key: "setParent",
          value: function setParent(parent) {
            this._parent = parent;
          }
          /**
           * Recalculates the value and validation status of the control.
           *
           * By default, it also updates the value and validity of its ancestors.
           *
           * @param opts Configuration options determine how the control propagates changes and emits events
           * after updates and validity checks are applied.
           * * `onlySelf`: When true, only update this control. When false or not supplied,
           * update all direct ancestors. Default is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is updated.
           * When false, no events are emitted.
           */

        }, {
          key: "updateValueAndValidity",
          value: function updateValueAndValidity() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this._setInitialStatus();

            this._updateValue();

            if (this.enabled) {
              this._cancelExistingSubscription();

              this.errors = this._runValidator();
              this.status = this._calculateStatus();

              if (this.status === VALID || this.status === PENDING) {
                this._runAsyncValidator(opts.emitEvent);
              }
            }

            if (opts.emitEvent !== false) {
              this.valueChanges.emit(this.value);
              this.statusChanges.emit(this.status);
            }

            if (this._parent && !opts.onlySelf) {
              this._parent.updateValueAndValidity(opts);
            }
          }
          /** @internal */

        }, {
          key: "_updateTreeValidity",
          value: function _updateTreeValidity() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              emitEvent: true
            };

            this._forEachChild(function (ctrl) {
              return ctrl._updateTreeValidity(opts);
            });

            this.updateValueAndValidity({
              onlySelf: true,
              emitEvent: opts.emitEvent
            });
          }
        }, {
          key: "_setInitialStatus",
          value: function _setInitialStatus() {
            this.status = this._allControlsDisabled() ? DISABLED : VALID;
          }
        }, {
          key: "_runValidator",
          value: function _runValidator() {
            return this.validator ? this.validator(this) : null;
          }
        }, {
          key: "_runAsyncValidator",
          value: function _runAsyncValidator(emitEvent) {
            var _this2 = this;

            if (this.asyncValidator) {
              this.status = PENDING;
              this._hasOwnPendingAsyncValidator = true;
              var obs = toObservable(this.asyncValidator(this));
              this._asyncValidationSubscription = obs.subscribe(function (errors) {
                _this2._hasOwnPendingAsyncValidator = false; // This will trigger the recalculation of the validation status, which depends on
                // the state of the asynchronous validation (whether it is in progress or not). So, it is
                // necessary that we have updated the `_hasOwnPendingAsyncValidator` boolean flag first.

                _this2.setErrors(errors, {
                  emitEvent: emitEvent
                });
              });
            }
          }
        }, {
          key: "_cancelExistingSubscription",
          value: function _cancelExistingSubscription() {
            if (this._asyncValidationSubscription) {
              this._asyncValidationSubscription.unsubscribe();

              this._hasOwnPendingAsyncValidator = false;
            }
          }
          /**
           * Sets errors on a form control when running validations manually, rather than automatically.
           *
           * Calling `setErrors` also updates the validity of the parent control.
           *
           * @usageNotes
           *
           * ### Manually set the errors for a control
           *
           * ```
           * const login = new FormControl('someLogin');
           * login.setErrors({
           *   notUnique: true
           * });
           *
           * expect(login.valid).toEqual(false);
           * expect(login.errors).toEqual({ notUnique: true });
           *
           * login.setValue('someOtherLogin');
           *
           * expect(login.valid).toEqual(true);
           * ```
           */

        }, {
          key: "setErrors",
          value: function setErrors(errors) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.errors = errors;

            this._updateControlsErrors(opts.emitEvent !== false);
          }
          /**
           * Retrieves a child control given the control's name or path.
           *
           * @param path A dot-delimited string or array of string/number values that define the path to the
           * control.
           *
           * @usageNotes
           * ### Retrieve a nested control
           *
           * For example, to get a `name` control nested within a `person` sub-group:
           *
           * * `this.form.get('person.name');`
           *
           * -OR-
           *
           * * `this.form.get(['person', 'name']);`
           */

        }, {
          key: "get",
          value: function get(path) {
            return _find(this, path, '.');
          }
          /**
           * @description
           * Reports error data for the control with the given path.
           *
           * @param errorCode The code of the error to check
           * @param path A list of control names that designates how to move from the current control
           * to the control that should be queried for errors.
           *
           * @usageNotes
           * For example, for the following `FormGroup`:
           *
           * ```
           * form = new FormGroup({
           *   address: new FormGroup({ street: new FormControl() })
           * });
           * ```
           *
           * The path to the 'street' control from the root form would be 'address' -> 'street'.
           *
           * It can be provided to this method in one of two formats:
           *
           * 1. An array of string control names, e.g. `['address', 'street']`
           * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
           *
           * @returns error data for that particular error. If the control or error is not present,
           * null is returned.
           */

        }, {
          key: "getError",
          value: function getError(errorCode, path) {
            var control = path ? this.get(path) : this;
            return control && control.errors ? control.errors[errorCode] : null;
          }
          /**
           * @description
           * Reports whether the control with the given path has the error specified.
           *
           * @param errorCode The code of the error to check
           * @param path A list of control names that designates how to move from the current control
           * to the control that should be queried for errors.
           *
           * @usageNotes
           * For example, for the following `FormGroup`:
           *
           * ```
           * form = new FormGroup({
           *   address: new FormGroup({ street: new FormControl() })
           * });
           * ```
           *
           * The path to the 'street' control from the root form would be 'address' -> 'street'.
           *
           * It can be provided to this method in one of two formats:
           *
           * 1. An array of string control names, e.g. `['address', 'street']`
           * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
           *
           * If no path is given, this method checks for the error on the current control.
           *
           * @returns whether the given error is present in the control at the given path.
           *
           * If the control is not present, false is returned.
           */

        }, {
          key: "hasError",
          value: function hasError(errorCode, path) {
            return !!this.getError(errorCode, path);
          }
          /**
           * Retrieves the top-level ancestor of this control.
           */

        }, {
          key: "_updateControlsErrors",

          /** @internal */
          value: function _updateControlsErrors(emitEvent) {
            this.status = this._calculateStatus();

            if (emitEvent) {
              this.statusChanges.emit(this.status);
            }

            if (this._parent) {
              this._parent._updateControlsErrors(emitEvent);
            }
          }
          /** @internal */

        }, {
          key: "_initObservables",
          value: function _initObservables() {
            this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          }
        }, {
          key: "_calculateStatus",
          value: function _calculateStatus() {
            if (this._allControlsDisabled()) return DISABLED;
            if (this.errors) return INVALID;
            if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
            if (this._anyControlsHaveStatus(INVALID)) return INVALID;
            return VALID;
          }
          /** @internal */

        }, {
          key: "_anyControlsHaveStatus",
          value: function _anyControlsHaveStatus(status) {
            return this._anyControls(function (control) {
              return control.status === status;
            });
          }
          /** @internal */

        }, {
          key: "_anyControlsDirty",
          value: function _anyControlsDirty() {
            return this._anyControls(function (control) {
              return control.dirty;
            });
          }
          /** @internal */

        }, {
          key: "_anyControlsTouched",
          value: function _anyControlsTouched() {
            return this._anyControls(function (control) {
              return control.touched;
            });
          }
          /** @internal */

        }, {
          key: "_updatePristine",
          value: function _updatePristine() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.pristine = !this._anyControlsDirty();

            if (this._parent && !opts.onlySelf) {
              this._parent._updatePristine(opts);
            }
          }
          /** @internal */

        }, {
          key: "_updateTouched",
          value: function _updateTouched() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.touched = this._anyControlsTouched();

            if (this._parent && !opts.onlySelf) {
              this._parent._updateTouched(opts);
            }
          }
          /** @internal */

        }, {
          key: "_isBoxedValue",
          value: function _isBoxedValue(formState) {
            return typeof formState === 'object' && formState !== null && Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
          }
          /** @internal */

        }, {
          key: "_registerOnCollectionChange",
          value: function _registerOnCollectionChange(fn) {
            this._onCollectionChange = fn;
          }
          /** @internal */

        }, {
          key: "_setUpdateStrategy",
          value: function _setUpdateStrategy(opts) {
            if (isOptionsObj(opts) && opts.updateOn != null) {
              this._updateOn = opts.updateOn;
            }
          }
          /**
           * Check to see if parent has been marked artificially dirty.
           *
           * @internal
           */

        }, {
          key: "_parentMarkedDirty",
          value: function _parentMarkedDirty(onlySelf) {
            var parentDirty = this._parent && this._parent.dirty;
            return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
          }
        }, {
          key: "validator",
          get: function get() {
            return this._composedValidatorFn;
          },
          set: function set(validatorFn) {
            this._rawValidators = this._composedValidatorFn = validatorFn;
          }
          /**
           * The function that is used to determine the validity of this control asynchronously.
           */

        }, {
          key: "asyncValidator",
          get: function get() {
            return this._composedAsyncValidatorFn;
          },
          set: function set(asyncValidatorFn) {
            this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
          }
          /**
           * The parent control.
           */

        }, {
          key: "parent",
          get: function get() {
            return this._parent;
          }
          /**
           * A control is `valid` when its `status` is `VALID`.
           *
           * @see {@link AbstractControl.status}
           *
           * @returns True if the control has passed all of its validation tests,
           * false otherwise.
           */

        }, {
          key: "valid",
          get: function get() {
            return this.status === VALID;
          }
          /**
           * A control is `invalid` when its `status` is `INVALID`.
           *
           * @see {@link AbstractControl.status}
           *
           * @returns True if this control has failed one or more of its validation checks,
           * false otherwise.
           */

        }, {
          key: "invalid",
          get: function get() {
            return this.status === INVALID;
          }
          /**
           * A control is `pending` when its `status` is `PENDING`.
           *
           * @see {@link AbstractControl.status}
           *
           * @returns True if this control is in the process of conducting a validation check,
           * false otherwise.
           */

        }, {
          key: "pending",
          get: function get() {
            return this.status == PENDING;
          }
          /**
           * A control is `disabled` when its `status` is `DISABLED`.
           *
           * Disabled controls are exempt from validation checks and
           * are not included in the aggregate value of their ancestor
           * controls.
           *
           * @see {@link AbstractControl.status}
           *
           * @returns True if the control is disabled, false otherwise.
           */

        }, {
          key: "disabled",
          get: function get() {
            return this.status === DISABLED;
          }
          /**
           * A control is `enabled` as long as its `status` is not `DISABLED`.
           *
           * @returns True if the control has any status other than 'DISABLED',
           * false if the status is 'DISABLED'.
           *
           * @see {@link AbstractControl.status}
           *
           */

        }, {
          key: "enabled",
          get: function get() {
            return this.status !== DISABLED;
          }
          /**
           * A control is `dirty` if the user has changed the value
           * in the UI.
           *
           * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
           * Programmatic changes to a control's value do not mark it dirty.
           */

        }, {
          key: "dirty",
          get: function get() {
            return !this.pristine;
          }
          /**
           * True if the control has not been marked as touched
           *
           * A control is `untouched` if the user has not yet triggered
           * a `blur` event on it.
           */

        }, {
          key: "untouched",
          get: function get() {
            return !this.touched;
          }
          /**
           * Reports the update strategy of the `AbstractControl` (meaning
           * the event on which the control updates itself).
           * Possible values: `'change'` | `'blur'` | `'submit'`
           * Default value: `'change'`
           */

        }, {
          key: "updateOn",
          get: function get() {
            return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
          }
        }, {
          key: "root",
          get: function get() {
            var x = this;

            while (x._parent) {
              x = x._parent;
            }

            return x;
          }
        }]);

        return AbstractControl;
      }();
      /**
       * Tracks the value and validation status of an individual form control.
       *
       * This is one of the three fundamental building blocks of Angular forms, along with
       * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
       * implements most of the base functionality for accessing the value, validation status,
       * user interactions and events. See [usage examples below](#usage-notes).
       *
       * @see `AbstractControl`
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see [Usage Notes](#usage-notes)
       *
       * @usageNotes
       *
       * ### Initializing Form Controls
       *
       * Instantiate a `FormControl`, with an initial value.
       *
       * ```ts
       * const control = new FormControl('some value');
       * console.log(control.value);     // 'some value'
       *```
       *
       * The following example initializes the control with a form state object. The `value`
       * and `disabled` keys are required in this case.
       *
       * ```ts
       * const control = new FormControl({ value: 'n/a', disabled: true });
       * console.log(control.value);     // 'n/a'
       * console.log(control.status);    // 'DISABLED'
       * ```
       *
       * The following example initializes the control with a sync validator.
       *
       * ```ts
       * const control = new FormControl('', Validators.required);
       * console.log(control.value);      // ''
       * console.log(control.status);     // 'INVALID'
       * ```
       *
       * The following example initializes the control using an options object.
       *
       * ```ts
       * const control = new FormControl('', {
       *    validators: Validators.required,
       *    asyncValidators: myAsyncValidator
       * });
       * ```
       *
       * ### Configure the control to update on a blur event
       *
       * Set the `updateOn` option to `'blur'` to update on the blur `event`.
       *
       * ```ts
       * const control = new FormControl('', { updateOn: 'blur' });
       * ```
       *
       * ### Configure the control to update on a submit event
       *
       * Set the `updateOn` option to `'submit'` to update on a submit `event`.
       *
       * ```ts
       * const control = new FormControl('', { updateOn: 'submit' });
       * ```
       *
       * ### Reset the control back to an initial value
       *
       * You reset to a specific form state by passing through a standalone
       * value or a form state object that contains both a value and a disabled state
       * (these are the only two properties that cannot be calculated).
       *
       * ```ts
       * const control = new FormControl('Nancy');
       *
       * console.log(control.value); // 'Nancy'
       *
       * control.reset('Drew');
       *
       * console.log(control.value); // 'Drew'
       * ```
       *
       * ### Reset the control back to an initial value and disabled
       *
       * ```
       * const control = new FormControl('Nancy');
       *
       * console.log(control.value); // 'Nancy'
       * console.log(control.status); // 'VALID'
       *
       * control.reset({ value: 'Drew', disabled: true });
       *
       * console.log(control.value); // 'Drew'
       * console.log(control.status); // 'DISABLED'
       * ```
       *
       * @publicApi
       */


      var FormControl = /*#__PURE__*/function (_AbstractControl) {
        _inherits(FormControl, _AbstractControl);

        var _super5 = _createSuper(FormControl);

        /**
         * Creates a new `FormControl` instance.
         *
         * @param formState Initializes the control with an initial value,
         * or an object that defines the initial value and disabled state.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains validation functions
         * and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator functions
         *
         */
        function FormControl() {
          var _this3;

          var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var validatorOrOpts = arguments.length > 1 ? arguments[1] : undefined;
          var asyncValidator = arguments.length > 2 ? arguments[2] : undefined;

          _classCallCheck(this, FormControl);

          _this3 = _super5.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
          /** @internal */

          _this3._onChange = [];

          _this3._applyFormState(formState);

          _this3._setUpdateStrategy(validatorOrOpts);

          _this3._initObservables();

          _this3.updateValueAndValidity({
            onlySelf: true,
            // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
            // `VALID` or `INVALID`.
            // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
            // to `true` to allow that during the control creation process.
            emitEvent: !!asyncValidator
          });

          return _this3;
        }
        /**
         * Sets a new value for the form control.
         *
         * @param value The new value for the control.
         * @param options Configuration options that determine how the control propagates changes
         * and emits events when the value changes.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
         * `onChange` event to
         * update the view.
         * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
         * `ngModelChange`
         * event to update the model.
         *
         */


        _createClass(FormControl, [{
          key: "setValue",
          value: function setValue(value) {
            var _this4 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.value = this._pendingValue = value;

            if (this._onChange.length && options.emitModelToViewChange !== false) {
              this._onChange.forEach(function (changeFn) {
                return changeFn(_this4.value, options.emitViewToModelChange !== false);
              });
            }

            this.updateValueAndValidity(options);
          }
          /**
           * Patches the value of a control.
           *
           * This function is functionally the same as {@link FormControl#setValue setValue} at this level.
           * It exists for symmetry with {@link FormGroup#patchValue patchValue} on `FormGroups` and
           * `FormArrays`, where it does behave differently.
           *
           * @see `setValue` for options
           */

        }, {
          key: "patchValue",
          value: function patchValue(value) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.setValue(value, options);
          }
          /**
           * Resets the form control, marking it `pristine` and `untouched`, and setting
           * the value to null.
           *
           * @param formState Resets the control with an initial value,
           * or an object that defines the initial value and disabled state.
           *
           * @param options Configuration options that determine how the control propagates changes
           * and emits events after the value changes.
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
           * false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is reset.
           * When false, no events are emitted.
           *
           */

        }, {
          key: "reset",
          value: function reset() {
            var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._applyFormState(formState);

            this.markAsPristine(options);
            this.markAsUntouched(options);
            this.setValue(this.value, options);
            this._pendingChange = false;
          }
          /**
           * @internal
           */

        }, {
          key: "_updateValue",
          value: function _updateValue() {}
          /**
           * @internal
           */

        }, {
          key: "_anyControls",
          value: function _anyControls(condition) {
            return false;
          }
          /**
           * @internal
           */

        }, {
          key: "_allControlsDisabled",
          value: function _allControlsDisabled() {
            return this.disabled;
          }
          /**
           * Register a listener for change events.
           *
           * @param fn The method that is called when the value changes
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange.push(fn);
          }
          /**
           * @internal
           */

        }, {
          key: "_clearChangeFns",
          value: function _clearChangeFns() {
            this._onChange = [];
            this._onDisabledChange = [];

            this._onCollectionChange = function () {};
          }
          /**
           * Register a listener for disabled events.
           *
           * @param fn The method that is called when the disabled status changes.
           */

        }, {
          key: "registerOnDisabledChange",
          value: function registerOnDisabledChange(fn) {
            this._onDisabledChange.push(fn);
          }
          /**
           * @internal
           */

        }, {
          key: "_forEachChild",
          value: function _forEachChild(cb) {}
          /** @internal */

        }, {
          key: "_syncPendingControls",
          value: function _syncPendingControls() {
            if (this.updateOn === 'submit') {
              if (this._pendingDirty) this.markAsDirty();
              if (this._pendingTouched) this.markAsTouched();

              if (this._pendingChange) {
                this.setValue(this._pendingValue, {
                  onlySelf: true,
                  emitModelToViewChange: false
                });
                return true;
              }
            }

            return false;
          }
        }, {
          key: "_applyFormState",
          value: function _applyFormState(formState) {
            if (this._isBoxedValue(formState)) {
              this.value = this._pendingValue = formState.value;
              formState.disabled ? this.disable({
                onlySelf: true,
                emitEvent: false
              }) : this.enable({
                onlySelf: true,
                emitEvent: false
              });
            } else {
              this.value = this._pendingValue = formState;
            }
          }
        }]);

        return FormControl;
      }(AbstractControl);
      /**
       * Tracks the value and validity state of a group of `FormControl` instances.
       *
       * A `FormGroup` aggregates the values of each child `FormControl` into one object,
       * with each control name as the key.  It calculates its status by reducing the status values
       * of its children. For example, if one of the controls in a group is invalid, the entire
       * group becomes invalid.
       *
       * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
       * along with `FormControl` and `FormArray`.
       *
       * When instantiating a `FormGroup`, pass in a collection of child controls as the first
       * argument. The key for each child registers the name for the control.
       *
       * @usageNotes
       *
       * ### Create a form group with 2 controls
       *
       * ```
       * const form = new FormGroup({
       *   first: new FormControl('Nancy', Validators.minLength(2)),
       *   last: new FormControl('Drew'),
       * });
       *
       * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
       * console.log(form.status);  // 'VALID'
       * ```
       *
       * ### Create a form group with a group-level validator
       *
       * You include group-level validators as the second arg, or group-level async
       * validators as the third arg. These come in handy when you want to perform validation
       * that considers the value of more than one child control.
       *
       * ```
       * const form = new FormGroup({
       *   password: new FormControl('', Validators.minLength(2)),
       *   passwordConfirm: new FormControl('', Validators.minLength(2)),
       * }, passwordMatchValidator);
       *
       *
       * function passwordMatchValidator(g: FormGroup) {
       *    return g.get('password').value === g.get('passwordConfirm').value
       *       ? null : {'mismatch': true};
       * }
       * ```
       *
       * Like `FormControl` instances, you choose to pass in
       * validators and async validators as part of an options object.
       *
       * ```
       * const form = new FormGroup({
       *   password: new FormControl('')
       *   passwordConfirm: new FormControl('')
       * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
       * ```
       *
       * ### Set the updateOn property for all controls in a form group
       *
       * The options object is used to set a default value for each child
       * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
       * group level, all child controls default to 'blur', unless the child
       * has explicitly specified a different `updateOn` value.
       *
       * ```ts
       * const c = new FormGroup({
       *   one: new FormControl()
       * }, { updateOn: 'blur' });
       * ```
       *
       * @publicApi
       */


      var FormGroup = /*#__PURE__*/function (_AbstractControl2) {
        _inherits(FormGroup, _AbstractControl2);

        var _super6 = _createSuper(FormGroup);

        /**
         * Creates a new `FormGroup` instance.
         *
         * @param controls A collection of child controls. The key for each child is the name
         * under which it is registered.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains validation functions
         * and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator functions
         *
         */
        function FormGroup(controls, validatorOrOpts, asyncValidator) {
          var _this5;

          _classCallCheck(this, FormGroup);

          _this5 = _super6.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
          _this5.controls = controls;

          _this5._initObservables();

          _this5._setUpdateStrategy(validatorOrOpts);

          _this5._setUpControls();

          _this5.updateValueAndValidity({
            onlySelf: true,
            // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
            // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
            // so we set `emitEvent` to `true` to allow that during the control creation process.
            emitEvent: !!asyncValidator
          });

          return _this5;
        }
        /**
         * Registers a control with the group's list of controls.
         *
         * This method does not update the value or validity of the control.
         * Use {@link FormGroup#addControl addControl} instead.
         *
         * @param name The control name to register in the collection
         * @param control Provides the control for the given name
         */


        _createClass(FormGroup, [{
          key: "registerControl",
          value: function registerControl(name, control) {
            if (this.controls[name]) return this.controls[name];
            this.controls[name] = control;
            control.setParent(this);

            control._registerOnCollectionChange(this._onCollectionChange);

            return control;
          }
          /**
           * Add a control to this group.
           *
           * This method also updates the value and validity of the control.
           *
           * @param name The control name to add to the collection
           * @param control Provides the control for the given name
           */

        }, {
          key: "addControl",
          value: function addControl(name, control) {
            this.registerControl(name, control);
            this.updateValueAndValidity();

            this._onCollectionChange();
          }
          /**
           * Remove a control from this group.
           *
           * @param name The control name to remove from the collection
           */

        }, {
          key: "removeControl",
          value: function removeControl(name) {
            if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
            delete this.controls[name];
            this.updateValueAndValidity();

            this._onCollectionChange();
          }
          /**
           * Replace an existing control.
           *
           * @param name The control name to replace in the collection
           * @param control Provides the control for the given name
           */

        }, {
          key: "setControl",
          value: function setControl(name, control) {
            if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
            delete this.controls[name];
            if (control) this.registerControl(name, control);
            this.updateValueAndValidity();

            this._onCollectionChange();
          }
          /**
           * Check whether there is an enabled control with the given name in the group.
           *
           * Reports false for disabled controls. If you'd like to check for existence in the group
           * only, use {@link AbstractControl#get get} instead.
           *
           * @param controlName The control name to check for existence in the collection
           *
           * @returns false for disabled controls, true otherwise.
           */

        }, {
          key: "contains",
          value: function contains(controlName) {
            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
          }
          /**
           * Sets the value of the `FormGroup`. It accepts an object that matches
           * the structure of the group, with control names as keys.
           *
           * @usageNotes
           * ### Set the complete value for the form group
           *
           * ```
           * const form = new FormGroup({
           *   first: new FormControl(),
           *   last: new FormControl()
           * });
           *
           * console.log(form.value);   // {first: null, last: null}
           *
           * form.setValue({first: 'Nancy', last: 'Drew'});
           * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
           * ```
           *
           * @throws When strict checks fail, such as setting the value of a control
           * that doesn't exist or if you exclude a value of a control that does exist.
           *
           * @param value The new value for the control that matches the structure of the group.
           * @param options Configuration options that determine how the control propagates changes
           * and emits events after the value changes.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
           * false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control value is updated.
           * When false, no events are emitted.
           */

        }, {
          key: "setValue",
          value: function setValue(value) {
            var _this6 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._checkAllValuesPresent(value);

            Object.keys(value).forEach(function (name) {
              _this6._throwIfControlMissing(name);

              _this6.controls[name].setValue(value[name], {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            });
            this.updateValueAndValidity(options);
          }
          /**
           * Patches the value of the `FormGroup`. It accepts an object with control
           * names as keys, and does its best to match the values to the correct controls
           * in the group.
           *
           * It accepts both super-sets and sub-sets of the group without throwing an error.
           *
           * @usageNotes
           * ### Patch the value for a form group
           *
           * ```
           * const form = new FormGroup({
           *    first: new FormControl(),
           *    last: new FormControl()
           * });
           * console.log(form.value);   // {first: null, last: null}
           *
           * form.patchValue({first: 'Nancy'});
           * console.log(form.value);   // {first: 'Nancy', last: null}
           * ```
           *
           * @param value The object that matches the structure of the group.
           * @param options Configuration options that determine how the control propagates changes and
           * emits events after the value is patched.
           * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
           * true.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control value is updated.
           * When false, no events are emitted.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           */

        }, {
          key: "patchValue",
          value: function patchValue(value) {
            var _this7 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            Object.keys(value).forEach(function (name) {
              if (_this7.controls[name]) {
                _this7.controls[name].patchValue(value[name], {
                  onlySelf: true,
                  emitEvent: options.emitEvent
                });
              }
            });
            this.updateValueAndValidity(options);
          }
          /**
           * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
           * the value of all descendants to null.
           *
           * You reset to a specific form state by passing in a map of states
           * that matches the structure of your form, with control names as keys. The state
           * is a standalone value or a form state object with both a value and a disabled
           * status.
           *
           * @param value Resets the control with an initial value,
           * or an object that defines the initial value and disabled state.
           *
           * @param options Configuration options that determine how the control propagates changes
           * and emits events when the group is reset.
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
           * false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is reset.
           * When false, no events are emitted.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           *
           * @usageNotes
           *
           * ### Reset the form group values
           *
           * ```ts
           * const form = new FormGroup({
           *   first: new FormControl('first name'),
           *   last: new FormControl('last name')
           * });
           *
           * console.log(form.value);  // {first: 'first name', last: 'last name'}
           *
           * form.reset({ first: 'name', last: 'last name' });
           *
           * console.log(form.value);  // {first: 'name', last: 'last name'}
           * ```
           *
           * ### Reset the form group values and disabled status
           *
           * ```
           * const form = new FormGroup({
           *   first: new FormControl('first name'),
           *   last: new FormControl('last name')
           * });
           *
           * form.reset({
           *   first: {value: 'name', disabled: true},
           *   last: 'last'
           * });
           *
           * console.log(this.form.value);  // {first: 'name', last: 'last name'}
           * console.log(this.form.get('first').status);  // 'DISABLED'
           * ```
           */

        }, {
          key: "reset",
          value: function reset() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._forEachChild(function (control, name) {
              control.reset(value[name], {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            });

            this._updatePristine(options);

            this._updateTouched(options);

            this.updateValueAndValidity(options);
          }
          /**
           * The aggregate value of the `FormGroup`, including any disabled controls.
           *
           * Retrieves all values regardless of disabled status.
           * The `value` property is the best way to get the value of the group, because
           * it excludes disabled controls in the `FormGroup`.
           */

        }, {
          key: "getRawValue",
          value: function getRawValue() {
            return this._reduceChildren({}, function (acc, control, name) {
              acc[name] = control instanceof FormControl ? control.value : control.getRawValue();
              return acc;
            });
          }
          /** @internal */

        }, {
          key: "_syncPendingControls",
          value: function _syncPendingControls() {
            var subtreeUpdated = this._reduceChildren(false, function (updated, child) {
              return child._syncPendingControls() ? true : updated;
            });

            if (subtreeUpdated) this.updateValueAndValidity({
              onlySelf: true
            });
            return subtreeUpdated;
          }
          /** @internal */

        }, {
          key: "_throwIfControlMissing",
          value: function _throwIfControlMissing(name) {
            if (!Object.keys(this.controls).length) {
              throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            }

            if (!this.controls[name]) {
              throw new Error("Cannot find form control with name: ".concat(name, "."));
            }
          }
          /** @internal */

        }, {
          key: "_forEachChild",
          value: function _forEachChild(cb) {
            var _this8 = this;

            Object.keys(this.controls).forEach(function (k) {
              return cb(_this8.controls[k], k);
            });
          }
          /** @internal */

        }, {
          key: "_setUpControls",
          value: function _setUpControls() {
            var _this9 = this;

            this._forEachChild(function (control) {
              control.setParent(_this9);

              control._registerOnCollectionChange(_this9._onCollectionChange);
            });
          }
          /** @internal */

        }, {
          key: "_updateValue",
          value: function _updateValue() {
            this.value = this._reduceValue();
          }
          /** @internal */

        }, {
          key: "_anyControls",
          value: function _anyControls(condition) {
            for (var _i = 0, _Object$keys = Object.keys(this.controls); _i < _Object$keys.length; _i++) {
              var controlName = _Object$keys[_i];
              var control = this.controls[controlName];

              if (this.contains(controlName) && condition(control)) {
                return true;
              }
            }

            return false;
          }
          /** @internal */

        }, {
          key: "_reduceValue",
          value: function _reduceValue() {
            var _this10 = this;

            return this._reduceChildren({}, function (acc, control, name) {
              if (control.enabled || _this10.disabled) {
                acc[name] = control.value;
              }

              return acc;
            });
          }
          /** @internal */

        }, {
          key: "_reduceChildren",
          value: function _reduceChildren(initValue, fn) {
            var res = initValue;

            this._forEachChild(function (control, name) {
              res = fn(res, control, name);
            });

            return res;
          }
          /** @internal */

        }, {
          key: "_allControlsDisabled",
          value: function _allControlsDisabled() {
            for (var _i2 = 0, _Object$keys2 = Object.keys(this.controls); _i2 < _Object$keys2.length; _i2++) {
              var controlName = _Object$keys2[_i2];

              if (this.controls[controlName].enabled) {
                return false;
              }
            }

            return Object.keys(this.controls).length > 0 || this.disabled;
          }
          /** @internal */

        }, {
          key: "_checkAllValuesPresent",
          value: function _checkAllValuesPresent(value) {
            this._forEachChild(function (control, name) {
              if (value[name] === undefined) {
                throw new Error("Must supply a value for form control with name: '".concat(name, "'."));
              }
            });
          }
        }]);

        return FormGroup;
      }(AbstractControl);
      /**
       * Tracks the value and validity state of an array of `FormControl`,
       * `FormGroup` or `FormArray` instances.
       *
       * A `FormArray` aggregates the values of each child `FormControl` into an array.
       * It calculates its status by reducing the status values of its children. For example, if one of
       * the controls in a `FormArray` is invalid, the entire array becomes invalid.
       *
       * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
       * along with `FormControl` and `FormGroup`.
       *
       * @usageNotes
       *
       * ### Create an array of form controls
       *
       * ```
       * const arr = new FormArray([
       *   new FormControl('Nancy', Validators.minLength(2)),
       *   new FormControl('Drew'),
       * ]);
       *
       * console.log(arr.value);   // ['Nancy', 'Drew']
       * console.log(arr.status);  // 'VALID'
       * ```
       *
       * ### Create a form array with array-level validators
       *
       * You include array-level validators and async validators. These come in handy
       * when you want to perform validation that considers the value of more than one child
       * control.
       *
       * The two types of validators are passed in separately as the second and third arg
       * respectively, or together as part of an options object.
       *
       * ```
       * const arr = new FormArray([
       *   new FormControl('Nancy'),
       *   new FormControl('Drew')
       * ], {validators: myValidator, asyncValidators: myAsyncValidator});
       * ```
       *
       * ### Set the updateOn property for all controls in a form array
       *
       * The options object is used to set a default value for each child
       * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
       * array level, all child controls default to 'blur', unless the child
       * has explicitly specified a different `updateOn` value.
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl()
       * ], {updateOn: 'blur'});
       * ```
       *
       * ### Adding or removing controls from a form array
       *
       * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
       * in `FormArray` itself. These methods ensure the controls are properly tracked in the
       * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
       * the `FormArray` directly, as that result in strange and unexpected behavior such
       * as broken change detection.
       *
       * @publicApi
       */


      var FormArray = /*#__PURE__*/function (_AbstractControl3) {
        _inherits(FormArray, _AbstractControl3);

        var _super7 = _createSuper(FormArray);

        /**
         * Creates a new `FormArray` instance.
         *
         * @param controls An array of child controls. Each child control is given an index
         * where it is registered.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains validation functions
         * and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator functions
         *
         */
        function FormArray(controls, validatorOrOpts, asyncValidator) {
          var _this11;

          _classCallCheck(this, FormArray);

          _this11 = _super7.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
          _this11.controls = controls;

          _this11._initObservables();

          _this11._setUpdateStrategy(validatorOrOpts);

          _this11._setUpControls();

          _this11.updateValueAndValidity({
            onlySelf: true,
            // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
            // `VALID` or `INVALID`.
            // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
            // to `true` to allow that during the control creation process.
            emitEvent: !!asyncValidator
          });

          return _this11;
        }
        /**
         * Get the `AbstractControl` at the given `index` in the array.
         *
         * @param index Index in the array to retrieve the control
         */


        _createClass(FormArray, [{
          key: "at",
          value: function at(index) {
            return this.controls[index];
          }
          /**
           * Insert a new `AbstractControl` at the end of the array.
           *
           * @param control Form control to be inserted
           */

        }, {
          key: "push",
          value: function push(control) {
            this.controls.push(control);

            this._registerControl(control);

            this.updateValueAndValidity();

            this._onCollectionChange();
          }
          /**
           * Insert a new `AbstractControl` at the given `index` in the array.
           *
           * @param index Index in the array to insert the control
           * @param control Form control to be inserted
           */

        }, {
          key: "insert",
          value: function insert(index, control) {
            this.controls.splice(index, 0, control);

            this._registerControl(control);

            this.updateValueAndValidity();
          }
          /**
           * Remove the control at the given `index` in the array.
           *
           * @param index Index in the array to remove the control
           */

        }, {
          key: "removeAt",
          value: function removeAt(index) {
            if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
            this.controls.splice(index, 1);
            this.updateValueAndValidity();
          }
          /**
           * Replace an existing control.
           *
           * @param index Index in the array to replace the control
           * @param control The `AbstractControl` control to replace the existing control
           */

        }, {
          key: "setControl",
          value: function setControl(index, control) {
            if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
            this.controls.splice(index, 1);

            if (control) {
              this.controls.splice(index, 0, control);

              this._registerControl(control);
            }

            this.updateValueAndValidity();

            this._onCollectionChange();
          }
          /**
           * Length of the control array.
           */

        }, {
          key: "setValue",

          /**
           * Sets the value of the `FormArray`. It accepts an array that matches
           * the structure of the control.
           *
           * This method performs strict checks, and throws an error if you try
           * to set the value of a control that doesn't exist or if you exclude the
           * value of a control.
           *
           * @usageNotes
           * ### Set the values for the controls in the form array
           *
           * ```
           * const arr = new FormArray([
           *   new FormControl(),
           *   new FormControl()
           * ]);
           * console.log(arr.value);   // [null, null]
           *
           * arr.setValue(['Nancy', 'Drew']);
           * console.log(arr.value);   // ['Nancy', 'Drew']
           * ```
           *
           * @param value Array of values for the controls
           * @param options Configure options that determine how the control propagates changes and
           * emits events after the value changes
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
           * is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control value is updated.
           * When false, no events are emitted.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           */
          value: function setValue(value) {
            var _this12 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._checkAllValuesPresent(value);

            value.forEach(function (newValue, index) {
              _this12._throwIfControlMissing(index);

              _this12.at(index).setValue(newValue, {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            });
            this.updateValueAndValidity(options);
          }
          /**
           * Patches the value of the `FormArray`. It accepts an array that matches the
           * structure of the control, and does its best to match the values to the correct
           * controls in the group.
           *
           * It accepts both super-sets and sub-sets of the array without throwing an error.
           *
           * @usageNotes
           * ### Patch the values for controls in a form array
           *
           * ```
           * const arr = new FormArray([
           *    new FormControl(),
           *    new FormControl()
           * ]);
           * console.log(arr.value);   // [null, null]
           *
           * arr.patchValue(['Nancy']);
           * console.log(arr.value);   // ['Nancy', null]
           * ```
           *
           * @param value Array of latest values for the controls
           * @param options Configure options that determine how the control propagates changes and
           * emits events after the value changes
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
           * is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control value is updated.
           * When false, no events are emitted.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           */

        }, {
          key: "patchValue",
          value: function patchValue(value) {
            var _this13 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            value.forEach(function (newValue, index) {
              if (_this13.at(index)) {
                _this13.at(index).patchValue(newValue, {
                  onlySelf: true,
                  emitEvent: options.emitEvent
                });
              }
            });
            this.updateValueAndValidity(options);
          }
          /**
           * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
           * value of all descendants to null or null maps.
           *
           * You reset to a specific form state by passing in an array of states
           * that matches the structure of the control. The state is a standalone value
           * or a form state object with both a value and a disabled status.
           *
           * @usageNotes
           * ### Reset the values in a form array
           *
           * ```ts
           * const arr = new FormArray([
           *    new FormControl(),
           *    new FormControl()
           * ]);
           * arr.reset(['name', 'last name']);
           *
           * console.log(this.arr.value);  // ['name', 'last name']
           * ```
           *
           * ### Reset the values in a form array and the disabled status for the first control
           *
           * ```
           * this.arr.reset([
           *   {value: 'name', disabled: true},
           *   'last'
           * ]);
           *
           * console.log(this.arr.value);  // ['name', 'last name']
           * console.log(this.arr.get(0).status);  // 'DISABLED'
           * ```
           *
           * @param value Array of values for the controls
           * @param options Configure options that determine how the control propagates changes and
           * emits events after the value changes
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
           * is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is reset.
           * When false, no events are emitted.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           */

        }, {
          key: "reset",
          value: function reset() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._forEachChild(function (control, index) {
              control.reset(value[index], {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            });

            this._updatePristine(options);

            this._updateTouched(options);

            this.updateValueAndValidity(options);
          }
          /**
           * The aggregate value of the array, including any disabled controls.
           *
           * Reports all values regardless of disabled status.
           * For enabled controls only, the `value` property is the best way to get the value of the array.
           */

        }, {
          key: "getRawValue",
          value: function getRawValue() {
            return this.controls.map(function (control) {
              return control instanceof FormControl ? control.value : control.getRawValue();
            });
          }
          /**
           * Remove all controls in the `FormArray`.
           *
           * @usageNotes
           * ### Remove all elements from a FormArray
           *
           * ```ts
           * const arr = new FormArray([
           *    new FormControl(),
           *    new FormControl()
           * ]);
           * console.log(arr.length);  // 2
           *
           * arr.clear();
           * console.log(arr.length);  // 0
           * ```
           *
           * It's a simpler and more efficient alternative to removing all elements one by one:
           *
           * ```ts
           * const arr = new FormArray([
           *    new FormControl(),
           *    new FormControl()
           * ]);
           *
           * while (arr.length) {
           *    arr.removeAt(0);
           * }
           * ```
           */

        }, {
          key: "clear",
          value: function clear() {
            if (this.controls.length < 1) return;

            this._forEachChild(function (control) {
              return control._registerOnCollectionChange(function () {});
            });

            this.controls.splice(0);
            this.updateValueAndValidity();
          }
          /** @internal */

        }, {
          key: "_syncPendingControls",
          value: function _syncPendingControls() {
            var subtreeUpdated = this.controls.reduce(function (updated, child) {
              return child._syncPendingControls() ? true : updated;
            }, false);
            if (subtreeUpdated) this.updateValueAndValidity({
              onlySelf: true
            });
            return subtreeUpdated;
          }
          /** @internal */

        }, {
          key: "_throwIfControlMissing",
          value: function _throwIfControlMissing(index) {
            if (!this.controls.length) {
              throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            }

            if (!this.at(index)) {
              throw new Error("Cannot find form control at index ".concat(index));
            }
          }
          /** @internal */

        }, {
          key: "_forEachChild",
          value: function _forEachChild(cb) {
            this.controls.forEach(function (control, index) {
              cb(control, index);
            });
          }
          /** @internal */

        }, {
          key: "_updateValue",
          value: function _updateValue() {
            var _this14 = this;

            this.value = this.controls.filter(function (control) {
              return control.enabled || _this14.disabled;
            }).map(function (control) {
              return control.value;
            });
          }
          /** @internal */

        }, {
          key: "_anyControls",
          value: function _anyControls(condition) {
            return this.controls.some(function (control) {
              return control.enabled && condition(control);
            });
          }
          /** @internal */

        }, {
          key: "_setUpControls",
          value: function _setUpControls() {
            var _this15 = this;

            this._forEachChild(function (control) {
              return _this15._registerControl(control);
            });
          }
          /** @internal */

        }, {
          key: "_checkAllValuesPresent",
          value: function _checkAllValuesPresent(value) {
            this._forEachChild(function (control, i) {
              if (value[i] === undefined) {
                throw new Error("Must supply a value for form control at index: ".concat(i, "."));
              }
            });
          }
          /** @internal */

        }, {
          key: "_allControlsDisabled",
          value: function _allControlsDisabled() {
            var _iterator = _createForOfIteratorHelper(this.controls),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var control = _step.value;
                if (control.enabled) return false;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return this.controls.length > 0 || this.disabled;
          }
        }, {
          key: "_registerControl",
          value: function _registerControl(control) {
            control.setParent(this);

            control._registerOnCollectionChange(this._onCollectionChange);
          }
        }, {
          key: "length",
          get: function get() {
            return this.controls.length;
          }
        }]);

        return FormArray;
      }(AbstractControl);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var NUMBER_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return NumberValueAccessor;
        }),
        multi: true
      };
      /**
       * @description
       * The `ControlValueAccessor` for writing a number value and listening to number input changes.
       * The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
       * directives.
       *
       * @usageNotes
       *
       * ### Using a number input with a reactive form.
       *
       * The following example shows how to use a number input with a reactive form.
       *
       * ```ts
       * const totalCountControl = new FormControl();
       * ```
       *
       * ```
       * <input type="number" [formControl]="totalCountControl">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var NumberValueAccessor = /*#__PURE__*/function () {
        function NumberValueAccessor(_renderer, _elementRef) {
          _classCallCheck(this, NumberValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          /**
           * The registered callback function called when a change or input event occurs on the input
           * element.
           * @nodoc
           */

          this.onChange = function (_) {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};
        }
        /**
         * Sets the "value" property on the input element.
         * @nodoc
         */


        _createClass(NumberValueAccessor, [{
          key: "writeValue",
          value: function writeValue(value) {
            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
            var normalizedValue = value == null ? '' : value;

            this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = function (value) {
              fn(value == '' ? null : parseFloat(value));
            };
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
        }]);

        return NumberValueAccessor;
      }();

      NumberValueAccessor.ɵfac = function NumberValueAccessor_Factory(t) {
        return new (t || NumberValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      NumberValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NumberValueAccessor,
        selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
        hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NumberValueAccessor_input_HostBindingHandler($event) {
              return ctx.onChange($event.target.value);
            })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NUMBER_VALUE_ACCESSOR])]
      });

      NumberValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
            host: {
              '(input)': 'onChange($event.target.value)',
              '(blur)': 'onTouched()'
            },
            providers: [NUMBER_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
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


      var RADIO_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return RadioControlValueAccessor;
        }),
        multi: true
      };

      function throwNameError() {
        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
      }
      /**
       * @description
       * Class used by Angular to track radio buttons. For internal use only.
       */


      var RadioControlRegistry = /*#__PURE__*/function () {
        function RadioControlRegistry() {
          _classCallCheck(this, RadioControlRegistry);

          this._accessors = [];
        }
        /**
         * @description
         * Adds a control to the internal registry. For internal use only.
         */


        _createClass(RadioControlRegistry, [{
          key: "add",
          value: function add(control, accessor) {
            this._accessors.push([control, accessor]);
          }
          /**
           * @description
           * Removes a control from the internal registry. For internal use only.
           */

        }, {
          key: "remove",
          value: function remove(accessor) {
            for (var i = this._accessors.length - 1; i >= 0; --i) {
              if (this._accessors[i][1] === accessor) {
                this._accessors.splice(i, 1);

                return;
              }
            }
          }
          /**
           * @description
           * Selects a radio button. For internal use only.
           */

        }, {
          key: "select",
          value: function select(accessor) {
            var _this16 = this;

            this._accessors.forEach(function (c) {
              if (_this16._isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].fireUncheck(accessor.value);
              }
            });
          }
        }, {
          key: "_isSameGroup",
          value: function _isSameGroup(controlPair, accessor) {
            if (!controlPair[0].control) return false;
            return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
          }
        }]);

        return RadioControlRegistry;
      }();

      RadioControlRegistry.ɵfac = function RadioControlRegistry_Factory(t) {
        return new (t || RadioControlRegistry)();
      };

      RadioControlRegistry.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RadioControlRegistry,
        factory: RadioControlRegistry.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioControlRegistry, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @description
       * The `ControlValueAccessor` for writing radio control values and listening to radio control
       * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
       * `NgModel` directives.
       *
       * @usageNotes
       *
       * ### Using radio buttons with reactive form directives
       *
       * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
       * a reactive form, radio buttons in the same group should have the same `formControlName`.
       * Providing a `name` attribute is optional.
       *
       * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var RadioControlValueAccessor = /*#__PURE__*/function () {
        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
          _classCallCheck(this, RadioControlValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          this._registry = _registry;
          this._injector = _injector;
          /**
           * The registered callback function called when a change event occurs on the input element.
           * @nodoc
           */

          this.onChange = function () {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};
        }
        /** @nodoc */


        _createClass(RadioControlValueAccessor, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._control = this._injector.get(NgControl);

            this._checkName();

            this._registry.add(this._control, this);
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._registry.remove(this);
          }
          /**
           * Sets the "checked" property value on the radio input element.
           * @nodoc
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this._state = value === this.value;

            this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            var _this17 = this;

            this._fn = fn;

            this.onChange = function () {
              fn(_this17.value);

              _this17._registry.select(_this17);
            };
          }
          /**
           * Sets the "value" on the radio input element and unchecks it.
           *
           * @param value
           */

        }, {
          key: "fireUncheck",
          value: function fireUncheck(value) {
            this.writeValue(value);
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
        }, {
          key: "_checkName",
          value: function _checkName() {
            if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwNameError();
            }

            if (!this.name && this.formControlName) this.name = this.formControlName;
          }
        }]);

        return RadioControlValueAccessor;
      }();

      RadioControlValueAccessor.ɵfac = function RadioControlValueAccessor_Factory(t) {
        return new (t || RadioControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RadioControlRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      RadioControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: RadioControlValueAccessor,
        selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
        hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RadioControlValueAccessor_change_HostBindingHandler() {
              return ctx.onChange();
            })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        inputs: {
          name: "name",
          formControlName: "formControlName",
          value: "value"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RADIO_VALUE_ACCESSOR])]
      });

      RadioControlValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: RadioControlRegistry
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      };

      RadioControlValueAccessor.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        formControlName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
            host: {
              '(change)': 'onChange()',
              '(blur)': 'onTouched()'
            },
            providers: [RADIO_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: RadioControlRegistry
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          formControlName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
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


      var RANGE_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return RangeValueAccessor;
        }),
        multi: true
      };
      /**
       * @description
       * The `ControlValueAccessor` for writing a range value and listening to range input changes.
       * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
       * directives.
       *
       * @usageNotes
       *
       * ### Using a range input with a reactive form
       *
       * The following example shows how to use a range input with a reactive form.
       *
       * ```ts
       * const ageControl = new FormControl();
       * ```
       *
       * ```
       * <input type="range" [formControl]="ageControl">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var RangeValueAccessor = /*#__PURE__*/function () {
        function RangeValueAccessor(_renderer, _elementRef) {
          _classCallCheck(this, RangeValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          /**
           * The registered callback function called when a change or input event occurs on the input
           * element.
           * @nodoc
           */

          this.onChange = function (_) {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};
        }
        /**
         * Sets the "value" property on the input element.
         * @nodoc
         */


        _createClass(RangeValueAccessor, [{
          key: "writeValue",
          value: function writeValue(value) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = function (value) {
              fn(value == '' ? null : parseFloat(value));
            };
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the range input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
        }]);

        return RangeValueAccessor;
      }();

      RangeValueAccessor.ɵfac = function RangeValueAccessor_Factory(t) {
        return new (t || RangeValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      RangeValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: RangeValueAccessor,
        selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
        hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RangeValueAccessor_change_HostBindingHandler($event) {
              return ctx.onChange($event.target.value);
            })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
              return ctx.onChange($event.target.value);
            })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RANGE_VALUE_ACCESSOR])]
      });

      RangeValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RangeValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
            host: {
              '(change)': 'onChange($event.target.value)',
              '(input)': 'onChange($event.target.value)',
              '(blur)': 'onTouched()'
            },
            providers: [RANGE_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
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


      var FormErrorExamples = {
        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var ReactiveErrors = /*#__PURE__*/function () {
        function ReactiveErrors() {
          _classCallCheck(this, ReactiveErrors);
        }

        _createClass(ReactiveErrors, null, [{
          key: "controlParentException",
          value: function controlParentException() {
            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formControlName));
          }
        }, {
          key: "ngModelGroupException",
          value: function ngModelGroupException() {
            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ".concat(FormErrorExamples.formGroupName, "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        ").concat(FormErrorExamples.ngModelGroup));
          }
        }, {
          key: "missingFormException",
          value: function missingFormException() {
            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ".concat(FormErrorExamples.formControlName));
          }
        }, {
          key: "groupParentException",
          value: function groupParentException() {
            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formGroupName));
          }
        }, {
          key: "arrayParentException",
          value: function arrayParentException() {
            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        ".concat(FormErrorExamples.formArrayName));
          }
        }, {
          key: "disabledAttrWarning",
          value: function disabledAttrWarning() {
            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n\n      Example:\n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
          }
        }, {
          key: "ngModelWarning",
          value: function ngModelWarning(directiveName) {
            console.warn("\n    It looks like you're using ngModel on the same form field as ".concat(directiveName, ".\n    Support for using the ngModel input property and ngModelChange event with\n    reactive form directives has been deprecated in Angular v6 and will be removed\n    in a future version of Angular.\n\n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/").concat(directiveName === 'formControl' ? 'FormControlDirective' : 'FormControlName', "#use-with-ngmodel\n    "));
          }
        }]);

        return ReactiveErrors;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var SELECT_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return SelectControlValueAccessor;
        }),
        multi: true
      };

      function _buildValueString(id, value) {
        if (id == null) return "".concat(value);
        if (value && typeof value === 'object') value = 'Object';
        return "".concat(id, ": ").concat(value).slice(0, 50);
      }

      function _extractId(valueString) {
        return valueString.split(':')[0];
      }
      /**
       * @description
       * The `ControlValueAccessor` for writing select control values and listening to select control
       * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
       * `NgModel` directives.
       *
       * @usageNotes
       *
       * ### Using select controls in a reactive form
       *
       * The following examples show how to use a select control in a reactive form.
       *
       * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
       *
       * ### Using select controls in a template-driven form
       *
       * To use a select in a template-driven form, simply add an `ngModel` and a `name`
       * attribute to the main `<select>` tag.
       *
       * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
       *
       * ### Customizing option selection
       *
       * Angular uses object identity to select option. It's possible for the identities of items
       * to change while the data does not. This can happen, for example, if the items are produced
       * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
       * second response will produce objects with different identities.
       *
       * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
       * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
       * If `compareWith` is given, Angular selects option by the return value of the function.
       *
       * ```ts
       * const selectedCountriesControl = new FormControl();
       * ```
       *
       * ```
       * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
       *     <option *ngFor="let country of countries" [ngValue]="country">
       *         {{country.name}}
       *     </option>
       * </select>
       *
       * compareFn(c1: Country, c2: Country): boolean {
       *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
       * }
       * ```
       *
       * **Note:** We listen to the 'change' event because 'input' events aren't fired
       * for selects in Firefox and IE:
       * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
       * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var SelectControlValueAccessor = /*#__PURE__*/function () {
        function SelectControlValueAccessor(_renderer, _elementRef) {
          _classCallCheck(this, SelectControlValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          /** @internal */

          this._optionMap = new Map();
          /** @internal */

          this._idCounter = 0;
          /**
           * The registered callback function called when a change event occurs on the input element.
           * @nodoc
           */

          this.onChange = function (_) {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};

          this._compareWith = Object.is;
        }
        /**
         * @description
         * Tracks the option comparison algorithm for tracking identities when
         * checking for changes.
         */


        _createClass(SelectControlValueAccessor, [{
          key: "writeValue",

          /**
           * Sets the "value" property on the input element. The "selectedIndex"
           * property is also set if an ID is provided on the option element.
           * @nodoc
           */
          value: function writeValue(value) {
            this.value = value;

            var id = this._getOptionId(value);

            if (id == null) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
            }

            var valueString = _buildValueString(id, value);

            this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            var _this18 = this;

            this.onChange = function (valueString) {
              _this18.value = _this18._getOptionValue(valueString);
              fn(_this18.value);
            };
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the select input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
          /** @internal */

        }, {
          key: "_registerOption",
          value: function _registerOption() {
            return (this._idCounter++).toString();
          }
          /** @internal */

        }, {
          key: "_getOptionId",
          value: function _getOptionId(value) {
            for (var _i3 = 0, _Array$from = Array.from(this._optionMap.keys()); _i3 < _Array$from.length; _i3++) {
              var id = _Array$from[_i3];
              if (this._compareWith(this._optionMap.get(id), value)) return id;
            }

            return null;
          }
          /** @internal */

        }, {
          key: "_getOptionValue",
          value: function _getOptionValue(valueString) {
            var id = _extractId(valueString);

            return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
          }
        }, {
          key: "compareWith",
          set: function set(fn) {
            if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
            }

            this._compareWith = fn;
          }
        }]);

        return SelectControlValueAccessor;
      }();

      SelectControlValueAccessor.ɵfac = function SelectControlValueAccessor_Factory(t) {
        return new (t || SelectControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      SelectControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: SelectControlValueAccessor,
        selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
        hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
              return ctx.onChange($event.target.value);
            })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        inputs: {
          compareWith: "compareWith"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([SELECT_VALUE_ACCESSOR])]
      });

      SelectControlValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      SelectControlValueAccessor.propDecorators = {
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
            host: {
              '(change)': 'onChange($event.target.value)',
              '(blur)': 'onTouched()'
            },
            providers: [SELECT_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @description
       * Marks `<option>` as dynamic, so Angular can be notified when options change.
       *
       * @see `SelectControlValueAccessor`
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var NgSelectOption = /*#__PURE__*/function () {
        function NgSelectOption(_element, _renderer, _select) {
          _classCallCheck(this, NgSelectOption);

          this._element = _element;
          this._renderer = _renderer;
          this._select = _select;
          if (this._select) this.id = this._select._registerOption();
        }
        /**
         * @description
         * Tracks the value bound to the option element. Unlike the value binding,
         * ngValue supports binding to objects.
         */


        _createClass(NgSelectOption, [{
          key: "_setElementValue",

          /** @internal */
          value: function _setElementValue(value) {
            this._renderer.setProperty(this._element.nativeElement, 'value', value);
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._select) {
              this._select._optionMap["delete"](this.id);

              this._select.writeValue(this._select.value);
            }
          }
        }, {
          key: "ngValue",
          set: function set(value) {
            if (this._select == null) return;

            this._select._optionMap.set(this.id, value);

            this._setElementValue(_buildValueString(this.id, value));

            this._select.writeValue(this._select.value);
          }
          /**
           * @description
           * Tracks simple string values bound to the option element.
           * For objects, use the `ngValue` input binding.
           */

        }, {
          key: "value",
          set: function set(value) {
            this._setElementValue(value);

            if (this._select) this._select.writeValue(this._select.value);
          }
        }]);

        return NgSelectOption;
      }();

      NgSelectOption.ɵfac = function NgSelectOption_Factory(t) {
        return new (t || NgSelectOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SelectControlValueAccessor, 9));
      };

      NgSelectOption.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgSelectOption,
        selectors: [["option"]],
        inputs: {
          ngValue: "ngValue",
          value: "value"
        }
      });

      NgSelectOption.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: SelectControlValueAccessor,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }];
      };

      NgSelectOption.propDecorators = {
        ngValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngValue']
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['value']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectOption, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'option'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: SelectControlValueAccessor,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }]
          }];
        }, {
          ngValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngValue']
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['value']
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


      var SELECT_MULTIPLE_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return SelectMultipleControlValueAccessor;
        }),
        multi: true
      };

      function _buildValueString$1(id, value) {
        if (id == null) return "".concat(value);
        if (typeof value === 'string') value = "'".concat(value, "'");
        if (value && typeof value === 'object') value = 'Object';
        return "".concat(id, ": ").concat(value).slice(0, 50);
      }

      function _extractId$1(valueString) {
        return valueString.split(':')[0];
      }
      /** Mock interface for HTMLCollection */


      var HTMLCollection = function HTMLCollection() {
        _classCallCheck(this, HTMLCollection);
      };
      /**
       * @description
       * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select
       * control changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
       * `NgModel` directives.
       *
       * @see `SelectControlValueAccessor`
       *
       * @usageNotes
       *
       * ### Using a multi-select control
       *
       * The follow example shows you how to use a multi-select control with a reactive form.
       *
       * ```ts
       * const countryControl = new FormControl();
       * ```
       *
       * ```
       * <select multiple name="countries" [formControl]="countryControl">
       *   <option *ngFor="let country of countries" [ngValue]="country">
       *     {{ country.name }}
       *   </option>
       * </select>
       * ```
       *
       * ### Customizing option selection
       *
       * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
       * See the `SelectControlValueAccessor` for usage.
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var SelectMultipleControlValueAccessor = /*#__PURE__*/function () {
        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
          _classCallCheck(this, SelectMultipleControlValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          /** @internal */

          this._optionMap = new Map();
          /** @internal */

          this._idCounter = 0;
          /**
           * The registered callback function called when a change event occurs on the input element.
           * @nodoc
           */

          this.onChange = function (_) {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};

          this._compareWith = Object.is;
        }
        /**
         * @description
         * Tracks the option comparison algorithm for tracking identities when
         * checking for changes.
         */


        _createClass(SelectMultipleControlValueAccessor, [{
          key: "writeValue",

          /**
           * Sets the "value" property on one or of more of the select's options.
           * @nodoc
           */
          value: function writeValue(value) {
            var _this19 = this;

            this.value = value;
            var optionSelectedStateSetter;

            if (Array.isArray(value)) {
              // convert values to ids
              var ids = value.map(function (v) {
                return _this19._getOptionId(v);
              });

              optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
                opt._setSelected(ids.indexOf(o.toString()) > -1);
              };
            } else {
              optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
                opt._setSelected(false);
              };
            }

            this._optionMap.forEach(optionSelectedStateSetter);
          }
          /**
           * Registers a function called when the control value changes
           * and writes an array of the selected options.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            var _this20 = this;

            this.onChange = function (_) {
              var selected = [];

              if (_.selectedOptions !== undefined) {
                var options = _.selectedOptions;

                for (var i = 0; i < options.length; i++) {
                  var opt = options.item(i);

                  var val = _this20._getOptionValue(opt.value);

                  selected.push(val);
                }
              } // Degrade on IE
              else {
                  var _options = _.options;

                  for (var _i4 = 0; _i4 < _options.length; _i4++) {
                    var _opt = _options.item(_i4);

                    if (_opt.selected) {
                      var _val = _this20._getOptionValue(_opt.value);

                      selected.push(_val);
                    }
                  }
                }

              _this20.value = selected;
              fn(selected);
            };
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the select input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
          /** @internal */

        }, {
          key: "_registerOption",
          value: function _registerOption(value) {
            var id = (this._idCounter++).toString();

            this._optionMap.set(id, value);

            return id;
          }
          /** @internal */

        }, {
          key: "_getOptionId",
          value: function _getOptionId(value) {
            for (var _i5 = 0, _Array$from2 = Array.from(this._optionMap.keys()); _i5 < _Array$from2.length; _i5++) {
              var id = _Array$from2[_i5];
              if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
            }

            return null;
          }
          /** @internal */

        }, {
          key: "_getOptionValue",
          value: function _getOptionValue(valueString) {
            var id = _extractId$1(valueString);

            return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
          }
        }, {
          key: "compareWith",
          set: function set(fn) {
            if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
            }

            this._compareWith = fn;
          }
        }]);

        return SelectMultipleControlValueAccessor;
      }();

      SelectMultipleControlValueAccessor.ɵfac = function SelectMultipleControlValueAccessor_Factory(t) {
        return new (t || SelectMultipleControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      SelectMultipleControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: SelectMultipleControlValueAccessor,
        selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
        hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
              return ctx.onChange($event.target);
            })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        inputs: {
          compareWith: "compareWith"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([SELECT_MULTIPLE_VALUE_ACCESSOR])]
      });

      SelectMultipleControlValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      SelectMultipleControlValueAccessor.propDecorators = {
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectMultipleControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
            host: {
              '(change)': 'onChange($event.target)',
              '(blur)': 'onTouched()'
            },
            providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @description
       * Marks `<option>` as dynamic, so Angular can be notified when options change.
       *
       * @see `SelectMultipleControlValueAccessor`
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var ɵNgSelectMultipleOption = /*#__PURE__*/function () {
        function ɵNgSelectMultipleOption(_element, _renderer, _select) {
          _classCallCheck(this, ɵNgSelectMultipleOption);

          this._element = _element;
          this._renderer = _renderer;
          this._select = _select;

          if (this._select) {
            this.id = this._select._registerOption(this);
          }
        }
        /**
         * @description
         * Tracks the value bound to the option element. Unlike the value binding,
         * ngValue supports binding to objects.
         */


        _createClass(ɵNgSelectMultipleOption, [{
          key: "_setElementValue",

          /** @internal */
          value: function _setElementValue(value) {
            this._renderer.setProperty(this._element.nativeElement, 'value', value);
          }
          /** @internal */

        }, {
          key: "_setSelected",
          value: function _setSelected(selected) {
            this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._select) {
              this._select._optionMap["delete"](this.id);

              this._select.writeValue(this._select.value);
            }
          }
        }, {
          key: "ngValue",
          set: function set(value) {
            if (this._select == null) return;
            this._value = value;

            this._setElementValue(_buildValueString$1(this.id, value));

            this._select.writeValue(this._select.value);
          }
          /**
           * @description
           * Tracks simple string values bound to the option element.
           * For objects, use the `ngValue` input binding.
           */

        }, {
          key: "value",
          set: function set(value) {
            if (this._select) {
              this._value = value;

              this._setElementValue(_buildValueString$1(this.id, value));

              this._select.writeValue(this._select.value);
            } else {
              this._setElementValue(value);
            }
          }
        }]);

        return ɵNgSelectMultipleOption;
      }();

      ɵNgSelectMultipleOption.ɵfac = function ɵNgSelectMultipleOption_Factory(t) {
        return new (t || ɵNgSelectMultipleOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SelectMultipleControlValueAccessor, 9));
      };

      ɵNgSelectMultipleOption.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ɵNgSelectMultipleOption,
        selectors: [["option"]],
        inputs: {
          ngValue: "ngValue",
          value: "value"
        }
      });

      ɵNgSelectMultipleOption.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: SelectMultipleControlValueAccessor,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }];
      };

      ɵNgSelectMultipleOption.propDecorators = {
        ngValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngValue']
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['value']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ɵNgSelectMultipleOption, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'option'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: SelectMultipleControlValueAccessor,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }]
          }];
        }, {
          ngValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngValue']
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['value']
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


      function controlPath(name, parent) {
        return [].concat(_toConsumableArray(parent.path), [name]);
      }

      function setUpControl(control, dir) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          if (!control) _throwError(dir, 'Cannot find control with');
          if (!dir.valueAccessor) _throwError(dir, 'No value accessor for form control with');
        }

        setUpValidators(control, dir,
        /* handleOnValidatorChange */
        true);
        dir.valueAccessor.writeValue(control.value);
        setUpViewChangePipeline(control, dir);
        setUpModelChangePipeline(control, dir);
        setUpBlurPipeline(control, dir);

        if (dir.valueAccessor.setDisabledState) {
          control.registerOnDisabledChange(function (isDisabled) {
            dir.valueAccessor.setDisabledState(isDisabled);
          });
        }
      }

      function cleanUpControl(control, dir) {
        var noop = function noop() {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            _noControlError(dir);
          }
        };

        dir.valueAccessor.registerOnChange(noop);
        dir.valueAccessor.registerOnTouched(noop);
        cleanUpValidators(control, dir,
        /* handleOnValidatorChange */
        true);
        if (control) control._clearChangeFns();
      }

      function registerOnValidatorChange(validators, onChange) {
        validators.forEach(function (validator) {
          if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
        });
      }
      /**
       * Sets up sync and async directive validators on provided form control.
       * This function merges validators from the directive into the validators of the control.
       *
       * @param control Form control where directive validators should be setup.
       * @param dir Directive instance that contains validators to be setup.
       * @param handleOnValidatorChange Flag that determines whether directive validators should be setup
       *     to handle validator input change.
       */


      function setUpValidators(control, dir, handleOnValidatorChange) {
        var validators = getControlValidators(control);

        if (dir.validator !== null) {
          control.setValidators(mergeValidators(validators, dir.validator));
        } else if (typeof validators === 'function') {
          // If sync validators are represented by a single validator function, we force the
          // `Validators.compose` call to happen by executing the `setValidators` function with
          // an array that contains that function. We need this to avoid possible discrepancies in
          // validators behavior, so sync validators are always processed by the `Validators.compose`.
          // Note: we should consider moving this logic inside the `setValidators` function itself, so we
          // have consistent behavior on AbstractControl API level. The same applies to the async
          // validators logic below.
          control.setValidators([validators]);
        }

        var asyncValidators = getControlAsyncValidators(control);

        if (dir.asyncValidator !== null) {
          control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
        } else if (typeof asyncValidators === 'function') {
          control.setAsyncValidators([asyncValidators]);
        } // Re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4


        if (handleOnValidatorChange) {
          var onValidatorChange = function onValidatorChange() {
            return control.updateValueAndValidity();
          };

          registerOnValidatorChange(dir._rawValidators, onValidatorChange);
          registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
        }
      }
      /**
       * Cleans up sync and async directive validators on provided form control.
       * This function reverts the setup performed by the `setUpValidators` function, i.e.
       * removes directive-specific validators from a given control instance.
       *
       * @param control Form control from where directive validators should be removed.
       * @param dir Directive instance that contains validators to be removed.
       * @param handleOnValidatorChange Flag that determines whether directive validators should also be
       *     cleaned up to stop handling validator input change (if previously configured to do so).
       */


      function cleanUpValidators(control, dir, handleOnValidatorChange) {
        if (control !== null) {
          if (dir.validator !== null) {
            var validators = getControlValidators(control);

            if (Array.isArray(validators) && validators.length > 0) {
              // Filter out directive validator function.
              control.setValidators(validators.filter(function (validator) {
                return validator !== dir.validator;
              }));
            }
          }

          if (dir.asyncValidator !== null) {
            var asyncValidators = getControlAsyncValidators(control);

            if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
              // Filter out directive async validator function.
              control.setAsyncValidators(asyncValidators.filter(function (asyncValidator) {
                return asyncValidator !== dir.asyncValidator;
              }));
            }
          }
        }

        if (handleOnValidatorChange) {
          // Clear onValidatorChange callbacks by providing a noop function.
          var noop = function noop() {};

          registerOnValidatorChange(dir._rawValidators, noop);
          registerOnValidatorChange(dir._rawAsyncValidators, noop);
        }
      }

      function setUpViewChangePipeline(control, dir) {
        dir.valueAccessor.registerOnChange(function (newValue) {
          control._pendingValue = newValue;
          control._pendingChange = true;
          control._pendingDirty = true;
          if (control.updateOn === 'change') updateControl(control, dir);
        });
      }

      function setUpBlurPipeline(control, dir) {
        dir.valueAccessor.registerOnTouched(function () {
          control._pendingTouched = true;
          if (control.updateOn === 'blur' && control._pendingChange) updateControl(control, dir);
          if (control.updateOn !== 'submit') control.markAsTouched();
        });
      }

      function updateControl(control, dir) {
        if (control._pendingDirty) control.markAsDirty();
        control.setValue(control._pendingValue, {
          emitModelToViewChange: false
        });
        dir.viewToModelUpdate(control._pendingValue);
        control._pendingChange = false;
      }

      function setUpModelChangePipeline(control, dir) {
        control.registerOnChange(function (newValue, emitModelEvent) {
          // control -> view
          dir.valueAccessor.writeValue(newValue); // control -> ngModel

          if (emitModelEvent) dir.viewToModelUpdate(newValue);
        });
      }

      function setUpFormContainer(control, dir) {
        if (control == null && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'Cannot find control with');
        setUpValidators(control, dir,
        /* handleOnValidatorChange */
        false);
      }

      function _noControlError(dir) {
        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
      }

      function _throwError(dir, message) {
        var messageEnd;

        if (dir.path.length > 1) {
          messageEnd = "path: '".concat(dir.path.join(' -> '), "'");
        } else if (dir.path[0]) {
          messageEnd = "name: '".concat(dir.path, "'");
        } else {
          messageEnd = 'unspecified name attribute';
        }

        throw new Error("".concat(message, " ").concat(messageEnd));
      }

      function isPropertyUpdated(changes, viewModel) {
        if (!changes.hasOwnProperty('model')) return false;
        var change = changes['model'];
        if (change.isFirstChange()) return true;
        return !Object.is(viewModel, change.currentValue);
      }

      var BUILTIN_ACCESSORS = [CheckboxControlValueAccessor, RangeValueAccessor, NumberValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor];

      function isBuiltInAccessor(valueAccessor) {
        return BUILTIN_ACCESSORS.some(function (a) {
          return valueAccessor.constructor === a;
        });
      }

      function syncPendingControls(form, directives) {
        form._syncPendingControls();

        directives.forEach(function (dir) {
          var control = dir.control;

          if (control.updateOn === 'submit' && control._pendingChange) {
            dir.viewToModelUpdate(control._pendingValue);
            control._pendingChange = false;
          }
        });
      } // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented


      function selectValueAccessor(dir, valueAccessors) {
        if (!valueAccessors) return null;
        if (!Array.isArray(valueAccessors) && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'Value accessor was not provided as an array for form control with');
        var defaultAccessor = undefined;
        var builtinAccessor = undefined;
        var customAccessor = undefined;
        valueAccessors.forEach(function (v) {
          if (v.constructor === DefaultValueAccessor) {
            defaultAccessor = v;
          } else if (isBuiltInAccessor(v)) {
            if (builtinAccessor && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
          } else {
            if (customAccessor && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
          }
        });
        if (customAccessor) return customAccessor;
        if (builtinAccessor) return builtinAccessor;
        if (defaultAccessor) return defaultAccessor;

        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          _throwError(dir, 'No valid value accessor for form control with');
        }

        return null;
      }

      function removeDir(list, el) {
        var index = list.indexOf(el);
        if (index > -1) list.splice(index, 1);
      } // TODO(kara): remove after deprecation period


      function _ngModelWarning(name, type, instance, warningConfig) {
        if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || warningConfig === 'never') return;

        if ((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce || warningConfig === 'always' && !instance._ngModelWarningSent) {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            ReactiveErrors.ngModelWarning(name);
          }

          type._ngModelWarningSentOnce = true;
          instance._ngModelWarningSent = true;
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var formDirectiveProvider = {
        provide: ControlContainer,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return NgForm;
        })
      };

      var ɵ0 = function ɵ0() {
        return Promise.resolve(null);
      };

      var resolvedPromise = ɵ0();
      /**
       * @description
       * Creates a top-level `FormGroup` instance and binds it to a form
       * to track aggregate form value and validation status.
       *
       * As soon as you import the `FormsModule`, this directive becomes active by default on
       * all `<form>` tags.  You don't need to add a special selector.
       *
       * You optionally export the directive into a local template variable using `ngForm` as the key
       * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
       * `FormGroup` instance are duplicated on the directive itself, so a reference to it
       * gives you access to the aggregate value and validity status of the form, as well as
       * user interaction properties like `dirty` and `touched`.
       *
       * To register child controls with the form, use `NgModel` with a `name`
       * attribute. You may use `NgModelGroup` to create sub-groups within the form.
       *
       * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
       * triggered a form submission. The `ngSubmit` event emits the original form
       * submission event.
       *
       * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
       * To import the `FormsModule` but skip its usage in some forms,
       * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
       * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
       * unnecessary because the `<form>` tags are inert. In that case, you would
       * refrain from using the `formGroup` directive.
       *
       * @usageNotes
       *
       * ### Listening for form submission
       *
       * The following example shows how to capture the form values from the "ngSubmit" event.
       *
       * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
       *
       * ### Setting the update options
       *
       * The following example shows you how to change the "updateOn" option from its default using
       * ngFormOptions.
       *
       * ```html
       * <form [ngFormOptions]="{updateOn: 'blur'}">
       *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
       * </form>
       * ```
       *
       * ### Native DOM validation UI
       *
       * In order to prevent the native DOM form validation UI from interfering with Angular's form
       * validation, Angular automatically adds the `novalidate` attribute on any `<form>` whenever
       * `FormModule` or `ReactiveFormModule` are imported into the application.
       * If you want to explicitly enable native DOM validation UI with Angular forms, you can add the
       * `ngNativeValidate` attribute to the `<form>` element:
       *
       * ```html
       * <form ngNativeValidate>
       *   ...
       * </form>
       * ```
       *
       * @ngModule FormsModule
       * @publicApi
       */

      var NgForm = /*#__PURE__*/function (_ControlContainer) {
        _inherits(NgForm, _ControlContainer);

        var _super8 = _createSuper(NgForm);

        function NgForm(validators, asyncValidators) {
          var _this21;

          _classCallCheck(this, NgForm);

          _this21 = _super8.call(this);
          /**
           * @description
           * Returns whether the form submission has been triggered.
           */

          _this21.submitted = false;
          _this21._directives = [];
          /**
           * @description
           * Event emitter for the "ngSubmit" event
           */

          _this21.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this21.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
          return _this21;
        }
        /** @nodoc */


        _createClass(NgForm, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._setUpdateStrategy();
          }
          /**
           * @description
           * The directive instance.
           */

        }, {
          key: "addControl",

          /**
           * @description
           * Method that sets up the control directive in this group, re-calculates its value
           * and validity, and adds the instance to the internal list of directives.
           *
           * @param dir The `NgModel` directive instance.
           */
          value: function addControl(dir) {
            var _this22 = this;

            resolvedPromise.then(function () {
              var container = _this22._findContainer(dir.path);

              dir.control = container.registerControl(dir.name, dir.control);
              setUpControl(dir.control, dir);
              dir.control.updateValueAndValidity({
                emitEvent: false
              });

              _this22._directives.push(dir);
            });
          }
          /**
           * @description
           * Retrieves the `FormControl` instance from the provided `NgModel` directive.
           *
           * @param dir The `NgModel` directive instance.
           */

        }, {
          key: "getControl",
          value: function getControl(dir) {
            return this.form.get(dir.path);
          }
          /**
           * @description
           * Removes the `NgModel` instance from the internal list of directives
           *
           * @param dir The `NgModel` directive instance.
           */

        }, {
          key: "removeControl",
          value: function removeControl(dir) {
            var _this23 = this;

            resolvedPromise.then(function () {
              var container = _this23._findContainer(dir.path);

              if (container) {
                container.removeControl(dir.name);
              }

              removeDir(_this23._directives, dir);
            });
          }
          /**
           * @description
           * Adds a new `NgModelGroup` directive instance to the form.
           *
           * @param dir The `NgModelGroup` directive instance.
           */

        }, {
          key: "addFormGroup",
          value: function addFormGroup(dir) {
            var _this24 = this;

            resolvedPromise.then(function () {
              var container = _this24._findContainer(dir.path);

              var group = new FormGroup({});
              setUpFormContainer(group, dir);
              container.registerControl(dir.name, group);
              group.updateValueAndValidity({
                emitEvent: false
              });
            });
          }
          /**
           * @description
           * Removes the `NgModelGroup` directive instance from the form.
           *
           * @param dir The `NgModelGroup` directive instance.
           */

        }, {
          key: "removeFormGroup",
          value: function removeFormGroup(dir) {
            var _this25 = this;

            resolvedPromise.then(function () {
              var container = _this25._findContainer(dir.path);

              if (container) {
                container.removeControl(dir.name);
              }
            });
          }
          /**
           * @description
           * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
           *
           * @param dir The `NgModelGroup` directive instance.
           */

        }, {
          key: "getFormGroup",
          value: function getFormGroup(dir) {
            return this.form.get(dir.path);
          }
          /**
           * Sets the new value for the provided `NgControl` directive.
           *
           * @param dir The `NgControl` directive instance.
           * @param value The new value for the directive's control.
           */

        }, {
          key: "updateModel",
          value: function updateModel(dir, value) {
            var _this26 = this;

            resolvedPromise.then(function () {
              var ctrl = _this26.form.get(dir.path);

              ctrl.setValue(value);
            });
          }
          /**
           * @description
           * Sets the value for this `FormGroup`.
           *
           * @param value The new value
           */

        }, {
          key: "setValue",
          value: function setValue(value) {
            this.control.setValue(value);
          }
          /**
           * @description
           * Method called when the "submit" event is triggered on the form.
           * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
           *
           * @param $event The "submit" event object
           */

        }, {
          key: "onSubmit",
          value: function onSubmit($event) {
            this.submitted = true;
            syncPendingControls(this.form, this._directives);
            this.ngSubmit.emit($event);
            return false;
          }
          /**
           * @description
           * Method called when the "reset" event is triggered on the form.
           */

        }, {
          key: "onReset",
          value: function onReset() {
            this.resetForm();
          }
          /**
           * @description
           * Resets the form to an initial value and resets its submitted status.
           *
           * @param value The new value for the form.
           */

        }, {
          key: "resetForm",
          value: function resetForm() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            this.form.reset(value);
            this.submitted = false;
          }
        }, {
          key: "_setUpdateStrategy",
          value: function _setUpdateStrategy() {
            if (this.options && this.options.updateOn != null) {
              this.form._updateOn = this.options.updateOn;
            }
          }
          /** @internal */

        }, {
          key: "_findContainer",
          value: function _findContainer(path) {
            path.pop();
            return path.length ? this.form.get(path) : this.form;
          }
        }, {
          key: "formDirective",
          get: function get() {
            return this;
          }
          /**
           * @description
           * The internal `FormGroup` instance.
           */

        }, {
          key: "control",
          get: function get() {
            return this.form;
          }
          /**
           * @description
           * Returns an array representing the path to this group. Because this directive
           * always lives at the top level of a form, it is always an empty array.
           */

        }, {
          key: "path",
          get: function get() {
            return [];
          }
          /**
           * @description
           * Returns a map of the controls in this group.
           */

        }, {
          key: "controls",
          get: function get() {
            return this.form.controls;
          }
        }]);

        return NgForm;
      }(ControlContainer);

      NgForm.ɵfac = function NgForm_Factory(t) {
        return new (t || NgForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
      };

      NgForm.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgForm,
        selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
        hostBindings: function NgForm_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function NgForm_submit_HostBindingHandler($event) {
              return ctx.onSubmit($event);
            })("reset", function NgForm_reset_HostBindingHandler() {
              return ctx.onReset();
            });
          }
        },
        inputs: {
          options: ["ngFormOptions", "options"]
        },
        outputs: {
          ngSubmit: "ngSubmit"
        },
        exportAs: ["ngForm"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formDirectiveProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      NgForm.ctorParameters = function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      NgForm.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngFormOptions']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgForm, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]',
            providers: [formDirectiveProvider],
            host: {
              '(submit)': 'onSubmit($event)',
              '(reset)': 'onReset()'
            },
            outputs: ['ngSubmit'],
            exportAs: 'ngForm'
          }]
        }], function () {
          return [{
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngFormOptions']
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
       * @description
       * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
       *
       * @publicApi
       */


      var AbstractFormGroupDirective = /*#__PURE__*/function (_ControlContainer2) {
        _inherits(AbstractFormGroupDirective, _ControlContainer2);

        var _super9 = _createSuper(AbstractFormGroupDirective);

        function AbstractFormGroupDirective() {
          _classCallCheck(this, AbstractFormGroupDirective);

          return _super9.apply(this, arguments);
        }

        _createClass(AbstractFormGroupDirective, [{
          key: "ngOnInit",

          /** @nodoc */
          value: function ngOnInit() {
            this._checkParentType(); // Register the group with its parent group.


            this.formDirective.addFormGroup(this);
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.formDirective) {
              // Remove the group from its parent group.
              this.formDirective.removeFormGroup(this);
            }
          }
          /**
           * @description
           * The `FormGroup` bound to this directive.
           */

        }, {
          key: "_checkParentType",

          /** @internal */
          value: function _checkParentType() {}
        }, {
          key: "control",
          get: function get() {
            return this.formDirective.getFormGroup(this);
          }
          /**
           * @description
           * The path to this group from the top-level directive.
           */

        }, {
          key: "path",
          get: function get() {
            return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
          }
          /**
           * @description
           * The top-level directive for this group if present, otherwise null.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this._parent ? this._parent.formDirective : null;
          }
        }]);

        return AbstractFormGroupDirective;
      }(ControlContainer);

      AbstractFormGroupDirective.ɵfac = function AbstractFormGroupDirective_Factory(t) {
        return ɵAbstractFormGroupDirective_BaseFactory(t || AbstractFormGroupDirective);
      };

      AbstractFormGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: AbstractFormGroupDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵAbstractFormGroupDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AbstractFormGroupDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstractFormGroupDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var TemplateDrivenErrors = /*#__PURE__*/function () {
        function TemplateDrivenErrors() {
          _classCallCheck(this, TemplateDrivenErrors);
        }

        _createClass(TemplateDrivenErrors, null, [{
          key: "modelParentException",
          value: function modelParentException() {
            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      ".concat(FormErrorExamples.formControlName, "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      ").concat(FormErrorExamples.ngModelWithFormGroup));
          }
        }, {
          key: "formGroupNameException",
          value: function formGroupNameException() {
            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
          }
        }, {
          key: "missingNameException",
          value: function missingNameException() {
            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
          }
        }, {
          key: "modelGroupParentException",
          value: function modelGroupParentException() {
            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
          }
        }]);

        return TemplateDrivenErrors;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var modelGroupProvider = {
        provide: ControlContainer,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return NgModelGroup;
        })
      };
      /**
       * @description
       * Creates and binds a `FormGroup` instance to a DOM element.
       *
       * This directive can only be used as a child of `NgForm` (within `<form>` tags).
       *
       * Use this directive to validate a sub-group of your form separately from the
       * rest of your form, or if some values in your domain model make more sense
       * to consume together in a nested object.
       *
       * Provide a name for the sub-group and it will become the key
       * for the sub-group in the form's full value. If you need direct access, export the directive into
       * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
       *
       * @usageNotes
       *
       * ### Consuming controls in a grouping
       *
       * The following example shows you how to combine controls together in a sub-group
       * of the form.
       *
       * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
       *
       * @ngModule FormsModule
       * @publicApi
       */

      var NgModelGroup = /*#__PURE__*/function (_AbstractFormGroupDir) {
        _inherits(NgModelGroup, _AbstractFormGroupDir);

        var _super10 = _createSuper(NgModelGroup);

        function NgModelGroup(parent, validators, asyncValidators) {
          var _this27;

          _classCallCheck(this, NgModelGroup);

          _this27 = _super10.call(this);
          _this27._parent = parent;

          _this27._setValidators(validators);

          _this27._setAsyncValidators(asyncValidators);

          return _this27;
        }
        /** @internal */


        _createClass(NgModelGroup, [{
          key: "_checkParentType",
          value: function _checkParentType() {
            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              TemplateDrivenErrors.modelGroupParentException();
            }
          }
        }]);

        return NgModelGroup;
      }(AbstractFormGroupDirective);

      NgModelGroup.ɵfac = function NgModelGroup_Factory(t) {
        return new (t || NgModelGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
      };

      NgModelGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgModelGroup,
        selectors: [["", "ngModelGroup", ""]],
        inputs: {
          name: ["ngModelGroup", "name"]
        },
        exportAs: ["ngModelGroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([modelGroupProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      NgModelGroup.ctorParameters = function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      NgModelGroup.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModelGroup']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgModelGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ngModelGroup]',
            providers: [modelGroupProvider],
            exportAs: 'ngModelGroup'
          }]
        }], function () {
          return [{
            type: ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngModelGroup']
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


      var formControlBinding = {
        provide: NgControl,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return NgModel;
        })
      };

      var ɵ0$1 = function ɵ0$1() {
        return Promise.resolve(null);
      };
      /**
       * `ngModel` forces an additional change detection run when its inputs change:
       * E.g.:
       * ```
       * <div>{{myModel.valid}}</div>
       * <input [(ngModel)]="myValue" #myModel="ngModel">
       * ```
       * I.e. `ngModel` can export itself on the element and then be used in the template.
       * Normally, this would result in expressions before the `input` that use the exported directive
       * to have an old value as they have been
       * dirty checked before. As this is a very common case for `ngModel`, we added this second change
       * detection run.
       *
       * Notes:
       * - this is just one extra run no matter how many `ngModel`s have been changed.
       * - this is a general problem when using `exportAs` for directives!
       */


      var resolvedPromise$1 = ɵ0$1();
      /**
       * @description
       * Creates a `FormControl` instance from a domain model and binds it
       * to a form control element.
       *
       * The `FormControl` instance tracks the value, user interaction, and
       * validation status of the control and keeps the view synced with the model. If used
       * within a parent form, the directive also registers itself with the form as a child
       * control.
       *
       * This directive is used by itself or as part of a larger form. Use the
       * `ngModel` selector to activate it.
       *
       * It accepts a domain model as an optional `Input`. If you have a one-way binding
       * to `ngModel` with `[]` syntax, changing the domain model's value in the component
       * class sets the value in the view. If you have a two-way binding with `[()]` syntax
       * (also known as 'banana-in-a-box syntax'), the value in the UI always syncs back to
       * the domain model in your class.
       *
       * To inspect the properties of the associated `FormControl` (like the validity state),
       * export the directive into a local template variable using `ngModel` as the key (ex:
       * `#myVar="ngModel"`). You can then access the control using the directive's `control` property.
       * However, the most commonly used properties (like `valid` and `dirty`) also exist on the control
       * for direct access. See a full list of properties directly available in
       * `AbstractControlDirective`.
       *
       * @see `RadioControlValueAccessor`
       * @see `SelectControlValueAccessor`
       *
       * @usageNotes
       *
       * ### Using ngModel on a standalone control
       *
       * The following examples show a simple standalone control using `ngModel`:
       *
       * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
       *
       * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
       * so that the control can be registered with the parent form under that name.
       *
       * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
       * as the parent form syncs the value for you. You access its properties by exporting it into a
       * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
       * needed on form submission.
       *
       * If you do need to populate initial values into your form, using a one-way binding for
       * `ngModel` tends to be sufficient as long as you use the exported form's value rather
       * than the domain model's value on submit.
       *
       * ### Using ngModel within a form
       *
       * The following example shows controls using `ngModel` within a form:
       *
       * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
       *
       * ### Using a standalone ngModel within a group
       *
       * The following example shows you how to use a standalone ngModel control
       * within a form. This controls the display of the form, but doesn't contain form data.
       *
       * ```html
       * <form>
       *   <input name="login" ngModel placeholder="Login">
       *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
       * </form>
       * <!-- form value: {login: ''} -->
       * ```
       *
       * ### Setting the ngModel `name` attribute through options
       *
       * The following example shows you an alternate way to set the name attribute. Here,
       * an attribute identified as name is used within a custom form control component. To still be able
       * to specify the NgModel's name, you must specify it using the `ngModelOptions` input instead.
       *
       * ```html
       * <form>
       *   <my-custom-form-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
       *   </my-custom-form-control>
       * </form>
       * <!-- form value: {user: ''} -->
       * ```
       *
       * @ngModule FormsModule
       * @publicApi
       */

      var NgModel = /*#__PURE__*/function (_NgControl) {
        _inherits(NgModel, _NgControl);

        var _super11 = _createSuper(NgModel);

        function NgModel(parent, validators, asyncValidators, valueAccessors) {
          var _this28;

          _classCallCheck(this, NgModel);

          _this28 = _super11.call(this);
          _this28.control = new FormControl();
          /** @internal */

          _this28._registered = false;
          /**
           * @description
           * Event emitter for producing the `ngModelChange` event after
           * the view model updates.
           */

          _this28.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this28._parent = parent;

          _this28._setValidators(validators);

          _this28._setAsyncValidators(asyncValidators);

          _this28.valueAccessor = selectValueAccessor(_assertThisInitialized(_this28), valueAccessors);
          return _this28;
        }
        /** @nodoc */


        _createClass(NgModel, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._checkForErrors();

            if (!this._registered) this._setUpControl();

            if ('isDisabled' in changes) {
              this._updateDisabled(changes);
            }

            if (isPropertyUpdated(changes, this.viewModel)) {
              this._updateValue(this.model);

              this.viewModel = this.model;
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "viewToModelUpdate",

          /**
           * @description
           * Sets the new value for the view model and emits an `ngModelChange` event.
           *
           * @param newValue The new value emitted by `ngModelChange`.
           */
          value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
          }
        }, {
          key: "_setUpControl",
          value: function _setUpControl() {
            this._setUpdateStrategy();

            this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
            this._registered = true;
          }
        }, {
          key: "_setUpdateStrategy",
          value: function _setUpdateStrategy() {
            if (this.options && this.options.updateOn != null) {
              this.control._updateOn = this.options.updateOn;
            }
          }
        }, {
          key: "_isStandalone",
          value: function _isStandalone() {
            return !this._parent || !!(this.options && this.options.standalone);
          }
        }, {
          key: "_setUpStandalone",
          value: function _setUpStandalone() {
            setUpControl(this.control, this);
            this.control.updateValueAndValidity({
              emitEvent: false
            });
          }
        }, {
          key: "_checkForErrors",
          value: function _checkForErrors() {
            if (!this._isStandalone()) {
              this._checkParentType();
            }

            this._checkName();
          }
        }, {
          key: "_checkParentType",
          value: function _checkParentType() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
                TemplateDrivenErrors.formGroupNameException();
              } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                TemplateDrivenErrors.modelParentException();
              }
            }
          }
        }, {
          key: "_checkName",
          value: function _checkName() {
            if (this.options && this.options.name) this.name = this.options.name;

            if (!this._isStandalone() && !this.name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              TemplateDrivenErrors.missingNameException();
            }
          }
        }, {
          key: "_updateValue",
          value: function _updateValue(value) {
            var _this29 = this;

            resolvedPromise$1.then(function () {
              _this29.control.setValue(value, {
                emitViewToModelChange: false
              });
            });
          }
        }, {
          key: "_updateDisabled",
          value: function _updateDisabled(changes) {
            var _this30 = this;

            var disabledValue = changes['isDisabled'].currentValue;
            var isDisabled = disabledValue === '' || disabledValue && disabledValue !== 'false';
            resolvedPromise$1.then(function () {
              if (isDisabled && !_this30.control.disabled) {
                _this30.control.disable();
              } else if (!isDisabled && _this30.control.disabled) {
                _this30.control.enable();
              }
            });
          }
        }, {
          key: "path",
          get: function get() {
            return this._parent ? controlPath(this.name, this._parent) : [this.name];
          }
          /**
           * @description
           * The top-level directive for this control if present, otherwise null.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this._parent ? this._parent.formDirective : null;
          }
        }]);

        return NgModel;
      }(NgControl);

      NgModel.ɵfac = function NgModel_Factory(t) {
        return new (t || NgModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10));
      };

      NgModel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgModel,
        selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
        inputs: {
          name: "name",
          isDisabled: ["disabled", "isDisabled"],
          model: ["ngModel", "model"],
          options: ["ngModelOptions", "options"]
        },
        outputs: {
          update: "ngModelChange"
        },
        exportAs: ["ngModel"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formControlBinding]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      NgModel.ctorParameters = function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALUE_ACCESSOR]
          }]
        }];
      };

      NgModel.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['disabled']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModel']
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModelOptions']
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['ngModelChange']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgModel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ngModel]:not([formControlName]):not([formControl])',
            providers: [formControlBinding],
            exportAs: 'ngModel'
          }]
        }], function () {
          return [{
            type: ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALUE_ACCESSOR]
            }]
          }];
        }, {
          update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['ngModelChange']
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['disabled']
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngModel']
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngModelOptions']
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
       * @description
       *
       * Adds `novalidate` attribute to all forms by default.
       *
       * `novalidate` is used to disable browser's native form validation.
       *
       * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
       *
       * ```
       * <form ngNativeValidate></form>
       * ```
       *
       * @publicApi
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       */


      var ɵNgNoValidate = function ɵNgNoValidate() {
        _classCallCheck(this, ɵNgNoValidate);
      };

      ɵNgNoValidate.ɵfac = function ɵNgNoValidate_Factory(t) {
        return new (t || ɵNgNoValidate)();
      };

      ɵNgNoValidate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ɵNgNoValidate,
        selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
        hostAttrs: ["novalidate", ""]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ɵNgNoValidate, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
            host: {
              'novalidate': ''
            }
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
       * Token to provide to turn off the ngModel warning on formControl and formControlName.
       */


      var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgModelWithFormControlWarning');
      var formControlBinding$1 = {
        provide: NgControl,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return FormControlDirective;
        })
      };
      /**
       * @description
       * Synchronizes a standalone `FormControl` instance to a form control element.
       *
       * Note that support for using the `ngModel` input property and `ngModelChange` event with reactive
       * form directives was deprecated in Angular v6 and is scheduled for removal in
       * a future version of Angular.
       * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see `FormControl`
       * @see `AbstractControl`
       *
       * @usageNotes
       *
       * The following example shows how to register a standalone control and set its value.
       *
       * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var FormControlDirective = /*#__PURE__*/function (_NgControl2) {
        _inherits(FormControlDirective, _NgControl2);

        var _super12 = _createSuper(FormControlDirective);

        function FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
          var _this31;

          _classCallCheck(this, FormControlDirective);

          _this31 = _super12.call(this);
          _this31._ngModelWarningConfig = _ngModelWarningConfig;
          /** @deprecated as of v6 */

          _this31.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * @description
           * Instance property used to track whether an ngModel warning has been sent out for this
           * particular `FormControlDirective` instance. Used to support warning config of "always".
           *
           * @internal
           */

          _this31._ngModelWarningSent = false;

          _this31._setValidators(validators);

          _this31._setAsyncValidators(asyncValidators);

          _this31.valueAccessor = selectValueAccessor(_assertThisInitialized(_this31), valueAccessors);
          return _this31;
        }
        /**
         * @description
         * Triggers a warning in dev mode that this input should not be used with reactive forms.
         */


        _createClass(FormControlDirective, [{
          key: "ngOnChanges",

          /** @nodoc */
          value: function ngOnChanges(changes) {
            if (this._isControlChanged(changes)) {
              setUpControl(this.form, this);

              if (this.control.disabled && this.valueAccessor.setDisabledState) {
                this.valueAccessor.setDisabledState(true);
              }

              this.form.updateValueAndValidity({
                emitEvent: false
              });
            }

            if (isPropertyUpdated(changes, this.viewModel)) {
              _ngModelWarning('formControl', FormControlDirective, this, this._ngModelWarningConfig);

              this.form.setValue(this.model);
              this.viewModel = this.model;
            }
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "viewToModelUpdate",

          /**
           * @description
           * Sets the new value for the view model and emits an `ngModelChange` event.
           *
           * @param newValue The new value for the view model.
           */
          value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
          }
        }, {
          key: "_isControlChanged",
          value: function _isControlChanged(changes) {
            return changes.hasOwnProperty('form');
          }
        }, {
          key: "isDisabled",
          set: function set(isDisabled) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              ReactiveErrors.disabledAttrWarning();
            }
          }
        }, {
          key: "path",
          get: function get() {
            return [];
          }
          /**
           * @description
           * The `FormControl` bound to this directive.
           */

        }, {
          key: "control",
          get: function get() {
            return this.form;
          }
        }]);

        return FormControlDirective;
      }(NgControl);

      FormControlDirective.ɵfac = function FormControlDirective_Factory(t) {
        return new (t || FormControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
      };

      FormControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FormControlDirective,
        selectors: [["", "formControl", ""]],
        inputs: {
          isDisabled: ["disabled", "isDisabled"],
          form: ["formControl", "form"],
          model: ["ngModel", "model"]
        },
        outputs: {
          update: "ngModelChange"
        },
        exportAs: ["ngForm"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formControlBinding$1]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /**
       * @description
       * Static property used to track whether any ngModel warnings have been sent across
       * all instances of FormControlDirective. Used to support warning config of "once".
       *
       * @internal
       */

      FormControlDirective._ngModelWarningSentOnce = false;

      FormControlDirective.ctorParameters = function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALUE_ACCESSOR]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
          }]
        }];
      };

      FormControlDirective.propDecorators = {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formControl']
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['disabled']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModel']
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['ngModelChange']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormControlDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formControl]',
            providers: [formControlBinding$1],
            exportAs: 'ngForm'
          }]
        }], function () {
          return [{
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALUE_ACCESSOR]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
            }]
          }];
        }, {
          update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['ngModelChange']
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['disabled']
          }],
          form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['formControl']
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngModel']
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


      var formDirectiveProvider$1 = {
        provide: ControlContainer,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return FormGroupDirective;
        })
      };
      /**
       * @description
       *
       * Binds an existing `FormGroup` to a DOM element.
       *
       * This directive accepts an existing `FormGroup` instance. It will then use this
       * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
       * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
       * and `FormArrayName` directives.
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see `AbstractControl`
       *
       * ### Register Form Group
       *
       * The following example registers a `FormGroup` with first name and last name controls,
       * and listens for the *ngSubmit* event when the button is clicked.
       *
       * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var FormGroupDirective = /*#__PURE__*/function (_ControlContainer3) {
        _inherits(FormGroupDirective, _ControlContainer3);

        var _super13 = _createSuper(FormGroupDirective);

        function FormGroupDirective(validators, asyncValidators) {
          var _this32;

          _classCallCheck(this, FormGroupDirective);

          _this32 = _super13.call(this);
          _this32.validators = validators;
          _this32.asyncValidators = asyncValidators;
          /**
           * @description
           * Reports whether the form submission has been triggered.
           */

          _this32.submitted = false;
          /**
           * @description
           * Tracks the list of added `FormControlName` instances
           */

          _this32.directives = [];
          /**
           * @description
           * Tracks the `FormGroup` bound to this directive.
           */

          _this32.form = null;
          /**
           * @description
           * Emits an event when the form submission has been triggered.
           */

          _this32.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

          _this32._setValidators(validators);

          _this32._setAsyncValidators(asyncValidators);

          return _this32;
        }
        /** @nodoc */


        _createClass(FormGroupDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._checkFormPresent();

            if (changes.hasOwnProperty('form')) {
              this._updateValidators();

              this._updateDomValue();

              this._updateRegistrations();

              this._oldForm = this.form;
            }
          }
          /**
           * @description
           * Returns this directive's instance.
           */

        }, {
          key: "addControl",

          /**
           * @description
           * Method that sets up the control directive in this group, re-calculates its value
           * and validity, and adds the instance to the internal list of directives.
           *
           * @param dir The `FormControlName` directive instance.
           */
          value: function addControl(dir) {
            var ctrl = this.form.get(dir.path);
            setUpControl(ctrl, dir);
            ctrl.updateValueAndValidity({
              emitEvent: false
            });
            this.directives.push(dir);
            return ctrl;
          }
          /**
           * @description
           * Retrieves the `FormControl` instance from the provided `FormControlName` directive
           *
           * @param dir The `FormControlName` directive instance.
           */

        }, {
          key: "getControl",
          value: function getControl(dir) {
            return this.form.get(dir.path);
          }
          /**
           * @description
           * Removes the `FormControlName` instance from the internal list of directives
           *
           * @param dir The `FormControlName` directive instance.
           */

        }, {
          key: "removeControl",
          value: function removeControl(dir) {
            removeDir(this.directives, dir);
          }
          /**
           * Adds a new `FormGroupName` directive instance to the form.
           *
           * @param dir The `FormGroupName` directive instance.
           */

        }, {
          key: "addFormGroup",
          value: function addFormGroup(dir) {
            var ctrl = this.form.get(dir.path);
            setUpFormContainer(ctrl, dir);
            ctrl.updateValueAndValidity({
              emitEvent: false
            });
          }
          /**
           * No-op method to remove the form group.
           *
           * @param dir The `FormGroupName` directive instance.
           */

        }, {
          key: "removeFormGroup",
          value: function removeFormGroup(dir) {}
          /**
           * @description
           * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
           *
           * @param dir The `FormGroupName` directive instance.
           */

        }, {
          key: "getFormGroup",
          value: function getFormGroup(dir) {
            return this.form.get(dir.path);
          }
          /**
           * Adds a new `FormArrayName` directive instance to the form.
           *
           * @param dir The `FormArrayName` directive instance.
           */

        }, {
          key: "addFormArray",
          value: function addFormArray(dir) {
            var ctrl = this.form.get(dir.path);
            setUpFormContainer(ctrl, dir);
            ctrl.updateValueAndValidity({
              emitEvent: false
            });
          }
          /**
           * No-op method to remove the form array.
           *
           * @param dir The `FormArrayName` directive instance.
           */

        }, {
          key: "removeFormArray",
          value: function removeFormArray(dir) {}
          /**
           * @description
           * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
           *
           * @param dir The `FormArrayName` directive instance.
           */

        }, {
          key: "getFormArray",
          value: function getFormArray(dir) {
            return this.form.get(dir.path);
          }
          /**
           * Sets the new value for the provided `FormControlName` directive.
           *
           * @param dir The `FormControlName` directive instance.
           * @param value The new value for the directive's control.
           */

        }, {
          key: "updateModel",
          value: function updateModel(dir, value) {
            var ctrl = this.form.get(dir.path);
            ctrl.setValue(value);
          }
          /**
           * @description
           * Method called with the "submit" event is triggered on the form.
           * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
           *
           * @param $event The "submit" event object
           */

        }, {
          key: "onSubmit",
          value: function onSubmit($event) {
            this.submitted = true;
            syncPendingControls(this.form, this.directives);
            this.ngSubmit.emit($event);
            return false;
          }
          /**
           * @description
           * Method called when the "reset" event is triggered on the form.
           */

        }, {
          key: "onReset",
          value: function onReset() {
            this.resetForm();
          }
          /**
           * @description
           * Resets the form to an initial value and resets its submitted status.
           *
           * @param value The new value for the form.
           */

        }, {
          key: "resetForm",
          value: function resetForm() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            this.form.reset(value);
            this.submitted = false;
          }
          /** @internal */

        }, {
          key: "_updateDomValue",
          value: function _updateDomValue() {
            var _this33 = this;

            this.directives.forEach(function (dir) {
              var newCtrl = _this33.form.get(dir.path);

              if (dir.control !== newCtrl) {
                // Note: the value of the `dir.control` may not be defined, for example when it's a first
                // `FormControl` that is added to a `FormGroup` instance (via `addControl` call).
                cleanUpControl(dir.control || null, dir);
                if (newCtrl) setUpControl(newCtrl, dir);
                dir.control = newCtrl;
              }
            });

            this.form._updateTreeValidity({
              emitEvent: false
            });
          }
        }, {
          key: "_updateRegistrations",
          value: function _updateRegistrations() {
            var _this34 = this;

            this.form._registerOnCollectionChange(function () {
              return _this34._updateDomValue();
            });

            if (this._oldForm) {
              this._oldForm._registerOnCollectionChange(function () {});
            }
          }
        }, {
          key: "_updateValidators",
          value: function _updateValidators() {
            setUpValidators(this.form, this,
            /* handleOnValidatorChange */
            false);

            if (this._oldForm) {
              cleanUpValidators(this._oldForm, this,
              /* handleOnValidatorChange */
              false);
            }
          }
        }, {
          key: "_checkFormPresent",
          value: function _checkFormPresent() {
            if (!this.form && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              ReactiveErrors.missingFormException();
            }
          }
        }, {
          key: "formDirective",
          get: function get() {
            return this;
          }
          /**
           * @description
           * Returns the `FormGroup` bound to this directive.
           */

        }, {
          key: "control",
          get: function get() {
            return this.form;
          }
          /**
           * @description
           * Returns an array representing the path to this group. Because this directive
           * always lives at the top level of a form, it always an empty array.
           */

        }, {
          key: "path",
          get: function get() {
            return [];
          }
        }]);

        return FormGroupDirective;
      }(ControlContainer);

      FormGroupDirective.ɵfac = function FormGroupDirective_Factory(t) {
        return new (t || FormGroupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
      };

      FormGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FormGroupDirective,
        selectors: [["", "formGroup", ""]],
        hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
              return ctx.onSubmit($event);
            })("reset", function FormGroupDirective_reset_HostBindingHandler() {
              return ctx.onReset();
            });
          }
        },
        inputs: {
          form: ["formGroup", "form"]
        },
        outputs: {
          ngSubmit: "ngSubmit"
        },
        exportAs: ["ngForm"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formDirectiveProvider$1]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      FormGroupDirective.ctorParameters = function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      FormGroupDirective.propDecorators = {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formGroup']
        }],
        ngSubmit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormGroupDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formGroup]',
            providers: [formDirectiveProvider$1],
            host: {
              '(submit)': 'onSubmit($event)',
              '(reset)': 'onReset()'
            },
            exportAs: 'ngForm'
          }]
        }], function () {
          return [{
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['formGroup']
          }],
          ngSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
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


      var formGroupNameProvider = {
        provide: ControlContainer,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return FormGroupName;
        })
      };
      /**
       * @description
       *
       * Syncs a nested `FormGroup` to a DOM element.
       *
       * This directive can only be used with a parent `FormGroupDirective`.
       *
       * It accepts the string name of the nested `FormGroup` to link, and
       * looks for a `FormGroup` registered with that name in the parent
       * `FormGroup` instance you passed into `FormGroupDirective`.
       *
       * Use nested form groups to validate a sub-group of a
       * form separately from the rest or to group the values of certain
       * controls into their own nested object.
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       *
       * @usageNotes
       *
       * ### Access the group by name
       *
       * The following example uses the {@link AbstractControl#get get} method to access the
       * associated `FormGroup`
       *
       * ```ts
       *   this.form.get('name');
       * ```
       *
       * ### Access individual controls in the group
       *
       * The following example uses the {@link AbstractControl#get get} method to access
       * individual controls within the group using dot syntax.
       *
       * ```ts
       *   this.form.get('name.first');
       * ```
       *
       * ### Register a nested `FormGroup`.
       *
       * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
       * and provides methods to retrieve the nested `FormGroup` and individual controls.
       *
       * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var FormGroupName = /*#__PURE__*/function (_AbstractFormGroupDir2) {
        _inherits(FormGroupName, _AbstractFormGroupDir2);

        var _super14 = _createSuper(FormGroupName);

        function FormGroupName(parent, validators, asyncValidators) {
          var _this35;

          _classCallCheck(this, FormGroupName);

          _this35 = _super14.call(this);
          _this35._parent = parent;

          _this35._setValidators(validators);

          _this35._setAsyncValidators(asyncValidators);

          return _this35;
        }
        /** @internal */


        _createClass(FormGroupName, [{
          key: "_checkParentType",
          value: function _checkParentType() {
            if (_hasInvalidParent(this._parent) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              ReactiveErrors.groupParentException();
            }
          }
        }]);

        return FormGroupName;
      }(AbstractFormGroupDirective);

      FormGroupName.ɵfac = function FormGroupName_Factory(t) {
        return new (t || FormGroupName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
      };

      FormGroupName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FormGroupName,
        selectors: [["", "formGroupName", ""]],
        inputs: {
          name: ["formGroupName", "name"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formGroupNameProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      FormGroupName.ctorParameters = function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      FormGroupName.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formGroupName']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormGroupName, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formGroupName]',
            providers: [formGroupNameProvider]
          }]
        }], function () {
          return [{
            type: ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['formGroupName']
          }]
        });
      })();

      var formArrayNameProvider = {
        provide: ControlContainer,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return FormArrayName;
        })
      };
      /**
       * @description
       *
       * Syncs a nested `FormArray` to a DOM element.
       *
       * This directive is designed to be used with a parent `FormGroupDirective` (selector:
       * `[formGroup]`).
       *
       * It accepts the string name of the nested `FormArray` you want to link, and
       * will look for a `FormArray` registered with that name in the parent
       * `FormGroup` instance you passed into `FormGroupDirective`.
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see `AbstractControl`
       *
       * @usageNotes
       *
       * ### Example
       *
       * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var FormArrayName = /*#__PURE__*/function (_ControlContainer4) {
        _inherits(FormArrayName, _ControlContainer4);

        var _super15 = _createSuper(FormArrayName);

        function FormArrayName(parent, validators, asyncValidators) {
          var _this36;

          _classCallCheck(this, FormArrayName);

          _this36 = _super15.call(this);
          _this36._parent = parent;

          _this36._setValidators(validators);

          _this36._setAsyncValidators(asyncValidators);

          return _this36;
        }
        /**
         * A lifecycle method called when the directive's inputs are initialized. For internal use only.
         * @throws If the directive does not have a valid parent.
         * @nodoc
         */


        _createClass(FormArrayName, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._checkParentType();

            this.formDirective.addFormArray(this);
          }
          /**
           * A lifecycle method called before the directive's instance is destroyed. For internal use only.
           * @nodoc
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.formDirective) {
              this.formDirective.removeFormArray(this);
            }
          }
          /**
           * @description
           * The `FormArray` bound to this directive.
           */

        }, {
          key: "_checkParentType",
          value: function _checkParentType() {
            if (_hasInvalidParent(this._parent) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              ReactiveErrors.arrayParentException();
            }
          }
        }, {
          key: "control",
          get: function get() {
            return this.formDirective.getFormArray(this);
          }
          /**
           * @description
           * The top-level directive for this group if present, otherwise null.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this._parent ? this._parent.formDirective : null;
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "path",
          get: function get() {
            return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
          }
        }]);

        return FormArrayName;
      }(ControlContainer);

      FormArrayName.ɵfac = function FormArrayName_Factory(t) {
        return new (t || FormArrayName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
      };

      FormArrayName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FormArrayName,
        selectors: [["", "formArrayName", ""]],
        inputs: {
          name: ["formArrayName", "name"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formArrayNameProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      FormArrayName.ctorParameters = function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      FormArrayName.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formArrayName']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormArrayName, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formArrayName]',
            providers: [formArrayNameProvider]
          }]
        }], function () {
          return [{
            type: ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['formArrayName']
          }]
        });
      })();

      function _hasInvalidParent(parent) {
        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var controlNameBinding = {
        provide: NgControl,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return FormControlName;
        })
      };
      /**
       * @description
       * Syncs a `FormControl` in an existing `FormGroup` to a form control
       * element by name.
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see `FormControl`
       * @see `AbstractControl`
       *
       * @usageNotes
       *
       * ### Register `FormControl` within a group
       *
       * The following example shows how to register multiple form controls within a form group
       * and set their value.
       *
       * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
       *
       * To see `formControlName` examples with different form control types, see:
       *
       * * Radio buttons: `RadioControlValueAccessor`
       * * Selects: `SelectControlValueAccessor`
       *
       * ### Use with ngModel is deprecated
       *
       * Support for using the `ngModel` input property and `ngModelChange` event with reactive
       * form directives has been deprecated in Angular v6 and is scheduled for removal in
       * a future version of Angular.
       *
       * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var FormControlName = /*#__PURE__*/function (_NgControl3) {
        _inherits(FormControlName, _NgControl3);

        var _super16 = _createSuper(FormControlName);

        function FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
          var _this37;

          _classCallCheck(this, FormControlName);

          _this37 = _super16.call(this);
          _this37._ngModelWarningConfig = _ngModelWarningConfig;
          _this37._added = false;
          /** @deprecated as of v6 */

          _this37.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * @description
           * Instance property used to track whether an ngModel warning has been sent out for this
           * particular FormControlName instance. Used to support warning config of "always".
           *
           * @internal
           */

          _this37._ngModelWarningSent = false;
          _this37._parent = parent;

          _this37._setValidators(validators);

          _this37._setAsyncValidators(asyncValidators);

          _this37.valueAccessor = selectValueAccessor(_assertThisInitialized(_this37), valueAccessors);
          return _this37;
        }
        /**
         * @description
         * Triggers a warning in dev mode that this input should not be used with reactive forms.
         */


        _createClass(FormControlName, [{
          key: "ngOnChanges",

          /** @nodoc */
          value: function ngOnChanges(changes) {
            if (!this._added) this._setUpControl();

            if (isPropertyUpdated(changes, this.viewModel)) {
              _ngModelWarning('formControlName', FormControlName, this, this._ngModelWarningConfig);

              this.viewModel = this.model;
              this.formDirective.updateModel(this, this.model);
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.formDirective) {
              this.formDirective.removeControl(this);
            }
          }
          /**
           * @description
           * Sets the new value for the view model and emits an `ngModelChange` event.
           *
           * @param newValue The new value for the view model.
           */

        }, {
          key: "viewToModelUpdate",
          value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "_checkParentType",
          value: function _checkParentType() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
                ReactiveErrors.ngModelGroupException();
              } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
                ReactiveErrors.controlParentException();
              }
            }
          }
        }, {
          key: "_setUpControl",
          value: function _setUpControl() {
            this._checkParentType();

            this.control = this.formDirective.addControl(this);

            if (this.control.disabled && this.valueAccessor.setDisabledState) {
              this.valueAccessor.setDisabledState(true);
            }

            this._added = true;
          }
        }, {
          key: "isDisabled",
          set: function set(isDisabled) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              ReactiveErrors.disabledAttrWarning();
            }
          }
        }, {
          key: "path",
          get: function get() {
            return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
          }
          /**
           * @description
           * The top-level directive for this group if present, otherwise null.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this._parent ? this._parent.formDirective : null;
          }
        }]);

        return FormControlName;
      }(NgControl);

      FormControlName.ɵfac = function FormControlName_Factory(t) {
        return new (t || FormControlName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
      };

      FormControlName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FormControlName,
        selectors: [["", "formControlName", ""]],
        inputs: {
          isDisabled: ["disabled", "isDisabled"],
          name: ["formControlName", "name"],
          model: ["ngModel", "model"]
        },
        outputs: {
          update: "ngModelChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([controlNameBinding]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /**
       * @description
       * Static property used to track whether any ngModel warnings have been sent across
       * all instances of FormControlName. Used to support warning config of "once".
       *
       * @internal
       */

      FormControlName._ngModelWarningSentOnce = false;

      FormControlName.ctorParameters = function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALUE_ACCESSOR]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
          }]
        }];
      };

      FormControlName.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formControlName']
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['disabled']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModel']
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['ngModelChange']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormControlName, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formControlName]',
            providers: [controlNameBinding]
          }]
        }], function () {
          return [{
            type: ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALUE_ACCESSOR]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
            }]
          }];
        }, {
          update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['ngModelChange']
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['disabled']
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['formControlName']
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngModel']
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
       * @description
       * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var REQUIRED_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return RequiredValidator;
        }),
        multi: true
      };
      /**
       * @description
       * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
       */

      var CHECKBOX_REQUIRED_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return CheckboxRequiredValidator;
        }),
        multi: true
      };
      /**
       * @description
       * A directive that adds the `required` validator to any controls marked with the
       * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a required validator using template-driven forms
       *
       * ```
       * <input name="fullName" ngModel required>
       * ```
       *
       * @ngModule FormsModule
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var RequiredValidator = /*#__PURE__*/function () {
        function RequiredValidator() {
          _classCallCheck(this, RequiredValidator);

          this._required = false;
        }
        /**
         * @description
         * Tracks changes to the required attribute bound to this directive.
         */


        _createClass(RequiredValidator, [{
          key: "validate",

          /**
           * Method that validates whether the control is empty.
           * Returns the validation result if enabled, otherwise null.
           * @nodoc
           */
          value: function validate(control) {
            return this.required ? Validators.required(control) : null;
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = value != null && value !== false && "".concat(value) !== 'false';
            if (this._onChange) this._onChange();
          }
        }]);

        return RequiredValidator;
      }();

      RequiredValidator.ɵfac = function RequiredValidator_Factory(t) {
        return new (t || RequiredValidator)();
      };

      RequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: RequiredValidator,
        selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
        hostVars: 1,
        hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("required", ctx.required ? "" : null);
          }
        },
        inputs: {
          required: "required"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([REQUIRED_VALIDATOR])]
      });
      RequiredValidator.propDecorators = {
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequiredValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
            providers: [REQUIRED_VALIDATOR],
            host: {
              '[attr.required]': 'required ? "" : null'
            }
          }]
        }], function () {
          return [];
        }, {
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * A Directive that adds the `required` validator to checkbox controls marked with the
       * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a required checkbox validator using template-driven forms
       *
       * The following example shows how to add a checkbox required validator to an input attached to an
       * ngModel binding.
       *
       * ```
       * <input type="checkbox" name="active" ngModel required>
       * ```
       *
       * @publicApi
       * @ngModule FormsModule
       * @ngModule ReactiveFormsModule
       */


      var CheckboxRequiredValidator = /*#__PURE__*/function (_RequiredValidator) {
        _inherits(CheckboxRequiredValidator, _RequiredValidator);

        var _super17 = _createSuper(CheckboxRequiredValidator);

        function CheckboxRequiredValidator() {
          _classCallCheck(this, CheckboxRequiredValidator);

          return _super17.apply(this, arguments);
        }

        _createClass(CheckboxRequiredValidator, [{
          key: "validate",

          /**
           * Method that validates whether or not the checkbox has been checked.
           * Returns the validation result if enabled, otherwise null.
           * @nodoc
           */
          value: function validate(control) {
            return this.required ? Validators.requiredTrue(control) : null;
          }
        }]);

        return CheckboxRequiredValidator;
      }(RequiredValidator);

      CheckboxRequiredValidator.ɵfac = function CheckboxRequiredValidator_Factory(t) {
        return ɵCheckboxRequiredValidator_BaseFactory(t || CheckboxRequiredValidator);
      };

      CheckboxRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CheckboxRequiredValidator,
        selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("required", ctx.required ? "" : null);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵCheckboxRequiredValidator_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CheckboxRequiredValidator);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxRequiredValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
            providers: [CHECKBOX_REQUIRED_VALIDATOR],
            host: {
              '[attr.required]': 'required ? "" : null'
            }
          }]
        }], null, null);
      })();
      /**
       * @description
       * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var EMAIL_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return EmailValidator;
        }),
        multi: true
      };
      /**
       * A directive that adds the `email` validator to controls marked with the
       * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding an email validator
       *
       * The following example shows how to add an email validator to an input attached to an ngModel
       * binding.
       *
       * ```
       * <input type="email" name="email" ngModel email>
       * <input type="email" name="email" ngModel email="true">
       * <input type="email" name="email" ngModel [email]="true">
       * ```
       *
       * @publicApi
       * @ngModule FormsModule
       * @ngModule ReactiveFormsModule
       */

      var EmailValidator = /*#__PURE__*/function () {
        function EmailValidator() {
          _classCallCheck(this, EmailValidator);

          this._enabled = false;
        }
        /**
         * @description
         * Tracks changes to the email attribute bound to this directive.
         */


        _createClass(EmailValidator, [{
          key: "validate",

          /**
           * Method that validates whether an email address is valid.
           * Returns the validation result if enabled, otherwise null.
           * @nodoc
           */
          value: function validate(control) {
            return this._enabled ? Validators.email(control) : null;
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "email",
          set: function set(value) {
            this._enabled = value === '' || value === true || value === 'true';
            if (this._onChange) this._onChange();
          }
        }]);

        return EmailValidator;
      }();

      EmailValidator.ɵfac = function EmailValidator_Factory(t) {
        return new (t || EmailValidator)();
      };

      EmailValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: EmailValidator,
        selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
        inputs: {
          email: "email"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([EMAIL_VALIDATOR])]
      });
      EmailValidator.propDecorators = {
        email: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[email][formControlName],[email][formControl],[email][ngModel]',
            providers: [EMAIL_VALIDATOR]
          }]
        }], function () {
          return [];
        }, {
          email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @description
       * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var MIN_LENGTH_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return MinLengthValidator;
        }),
        multi: true
      };
      /**
       * A directive that adds minimum length validation to controls marked with the
       * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a minimum length validator
       *
       * The following example shows how to add a minimum length validator to an input attached to an
       * ngModel binding.
       *
       * ```html
       * <input name="firstName" ngModel minlength="4">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var MinLengthValidator = /*#__PURE__*/function () {
        function MinLengthValidator() {
          _classCallCheck(this, MinLengthValidator);

          this._validator = Validators.nullValidator;
        }
        /** @nodoc */


        _createClass(MinLengthValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('minlength' in changes) {
              this._createValidator();

              if (this._onChange) this._onChange();
            }
          }
          /**
           * Method that validates whether the value meets a minimum length requirement.
           * Returns the validation result if enabled, otherwise null.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this.minlength == null ? null : this._validator(control);
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "_createValidator",
          value: function _createValidator() {
            this._validator = Validators.minLength(typeof this.minlength === 'number' ? this.minlength : parseInt(this.minlength, 10));
          }
        }]);

        return MinLengthValidator;
      }();

      MinLengthValidator.ɵfac = function MinLengthValidator_Factory(t) {
        return new (t || MinLengthValidator)();
      };

      MinLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MinLengthValidator,
        selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("minlength", ctx.minlength ? ctx.minlength : null);
          }
        },
        inputs: {
          minlength: "minlength"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MIN_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      MinLengthValidator.propDecorators = {
        minlength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MinLengthValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
            providers: [MIN_LENGTH_VALIDATOR],
            host: {
              '[attr.minlength]': 'minlength ? minlength : null'
            }
          }]
        }], function () {
          return [];
        }, {
          minlength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @description
       * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var MAX_LENGTH_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return MaxLengthValidator;
        }),
        multi: true
      };
      /**
       * A directive that adds max length validation to controls marked with the
       * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a maximum length validator
       *
       * The following example shows how to add a maximum length validator to an input attached to an
       * ngModel binding.
       *
       * ```html
       * <input name="firstName" ngModel maxlength="25">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var MaxLengthValidator = /*#__PURE__*/function () {
        function MaxLengthValidator() {
          _classCallCheck(this, MaxLengthValidator);

          this._validator = Validators.nullValidator;
        }
        /** @nodoc */


        _createClass(MaxLengthValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('maxlength' in changes) {
              this._createValidator();

              if (this._onChange) this._onChange();
            }
          }
          /**
           * Method that validates whether the value exceeds the maximum length requirement.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this.maxlength != null ? this._validator(control) : null;
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "_createValidator",
          value: function _createValidator() {
            this._validator = Validators.maxLength(typeof this.maxlength === 'number' ? this.maxlength : parseInt(this.maxlength, 10));
          }
        }]);

        return MaxLengthValidator;
      }();

      MaxLengthValidator.ɵfac = function MaxLengthValidator_Factory(t) {
        return new (t || MaxLengthValidator)();
      };

      MaxLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MaxLengthValidator,
        selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("maxlength", ctx.maxlength ? ctx.maxlength : null);
          }
        },
        inputs: {
          maxlength: "maxlength"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAX_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      MaxLengthValidator.propDecorators = {
        maxlength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaxLengthValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
            providers: [MAX_LENGTH_VALIDATOR],
            host: {
              '[attr.maxlength]': 'maxlength ? maxlength : null'
            }
          }]
        }], function () {
          return [];
        }, {
          maxlength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @description
       * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var PATTERN_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return PatternValidator;
        }),
        multi: true
      };
      /**
       * @description
       * A directive that adds regex pattern validation to controls marked with the
       * `pattern` attribute. The regex must match the entire control value.
       * The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a pattern validator
       *
       * The following example shows how to add a pattern validator to an input attached to an
       * ngModel binding.
       *
       * ```html
       * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var PatternValidator = /*#__PURE__*/function () {
        function PatternValidator() {
          _classCallCheck(this, PatternValidator);

          this._validator = Validators.nullValidator;
        }
        /** @nodoc */


        _createClass(PatternValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('pattern' in changes) {
              this._createValidator();

              if (this._onChange) this._onChange();
            }
          }
          /**
           * Method that validates whether the value matches the the pattern requirement.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this._validator(control);
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "_createValidator",
          value: function _createValidator() {
            this._validator = Validators.pattern(this.pattern);
          }
        }]);

        return PatternValidator;
      }();

      PatternValidator.ɵfac = function PatternValidator_Factory(t) {
        return new (t || PatternValidator)();
      };

      PatternValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: PatternValidator,
        selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function PatternValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("pattern", ctx.pattern ? ctx.pattern : null);
          }
        },
        inputs: {
          pattern: "pattern"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PATTERN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      PatternValidator.propDecorators = {
        pattern: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatternValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
            providers: [PATTERN_VALIDATOR],
            host: {
              '[attr.pattern]': 'pattern ? pattern : null'
            }
          }]
        }], function () {
          return [];
        }, {
          pattern: [{
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


      var SHARED_FORM_DIRECTIVES = [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator];
      var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
      var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
      /**
       * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
       */

      var ɵInternalFormsSharedModule = function ɵInternalFormsSharedModule() {
        _classCallCheck(this, ɵInternalFormsSharedModule);
      };

      ɵInternalFormsSharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ɵInternalFormsSharedModule
      });
      ɵInternalFormsSharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ɵInternalFormsSharedModule_Factory(t) {
          return new (t || ɵInternalFormsSharedModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ɵInternalFormsSharedModule, {
          declarations: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator],
          exports: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ɵInternalFormsSharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: SHARED_FORM_DIRECTIVES,
            exports: SHARED_FORM_DIRECTIVES
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


      function isAbstractControlOptions(options) {
        return options.asyncValidators !== undefined || options.validators !== undefined || options.updateOn !== undefined;
      }
      /**
       * @description
       * Creates an `AbstractControl` from a user-specified configuration.
       *
       * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
       * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
       * forms.
       *
       * @see [Reactive Forms Guide](/guide/reactive-forms)
       *
       * @publicApi
       */


      var FormBuilder = /*#__PURE__*/function () {
        function FormBuilder() {
          _classCallCheck(this, FormBuilder);
        }

        _createClass(FormBuilder, [{
          key: "group",

          /**
           * @description
           * Construct a new `FormGroup` instance.
           *
           * @param controlsConfig A collection of child controls. The key for each child is the name
           * under which it is registered.
           *
           * @param options Configuration options object for the `FormGroup`. The object can
           * have two shapes:
           *
           * 1) `AbstractControlOptions` object (preferred), which consists of:
           * * `validators`: A synchronous validator function, or an array of validator functions
           * * `asyncValidators`: A single async validator or array of async validator functions
           * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
           * submit')
           *
           * 2) Legacy configuration object, which consists of:
           * * `validator`: A synchronous validator function, or an array of validator functions
           * * `asyncValidator`: A single async validator or array of async validator functions
           *
           */
          value: function group(controlsConfig) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var controls = this._reduceControls(controlsConfig);

            var validators = null;
            var asyncValidators = null;
            var updateOn = undefined;

            if (options != null) {
              if (isAbstractControlOptions(options)) {
                // `options` are `AbstractControlOptions`
                validators = options.validators != null ? options.validators : null;
                asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
                updateOn = options.updateOn != null ? options.updateOn : undefined;
              } else {
                // `options` are legacy form group options
                validators = options['validator'] != null ? options['validator'] : null;
                asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
              }
            }

            return new FormGroup(controls, {
              asyncValidators: asyncValidators,
              updateOn: updateOn,
              validators: validators
            });
          }
          /**
           * @description
           * Construct a new `FormControl` with the given state, validators and options.
           *
           * @param formState Initializes the control with an initial state value, or
           * with an object that contains both a value and a disabled status.
           *
           * @param validatorOrOpts A synchronous validator function, or an array of
           * such functions, or an `AbstractControlOptions` object that contains
           * validation functions and a validation trigger.
           *
           * @param asyncValidator A single async validator or array of async validator
           * functions.
           *
           * @usageNotes
           *
           * ### Initialize a control as disabled
           *
           * The following example returns a control with an initial value in a disabled state.
           *
           * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
           * </code-example>
           */

        }, {
          key: "control",
          value: function control(formState, validatorOrOpts, asyncValidator) {
            return new FormControl(formState, validatorOrOpts, asyncValidator);
          }
          /**
           * Constructs a new `FormArray` from the given array of configurations,
           * validators and options.
           *
           * @param controlsConfig An array of child controls or control configs. Each
           * child control is given an index when it is registered.
           *
           * @param validatorOrOpts A synchronous validator function, or an array of
           * such functions, or an `AbstractControlOptions` object that contains
           * validation functions and a validation trigger.
           *
           * @param asyncValidator A single async validator or array of async validator
           * functions.
           */

        }, {
          key: "array",
          value: function array(controlsConfig, validatorOrOpts, asyncValidator) {
            var _this38 = this;

            var controls = controlsConfig.map(function (c) {
              return _this38._createControl(c);
            });
            return new FormArray(controls, validatorOrOpts, asyncValidator);
          }
          /** @internal */

        }, {
          key: "_reduceControls",
          value: function _reduceControls(controlsConfig) {
            var _this39 = this;

            var controls = {};
            Object.keys(controlsConfig).forEach(function (controlName) {
              controls[controlName] = _this39._createControl(controlsConfig[controlName]);
            });
            return controls;
          }
          /** @internal */

        }, {
          key: "_createControl",
          value: function _createControl(controlConfig) {
            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup || controlConfig instanceof FormArray) {
              return controlConfig;
            } else if (Array.isArray(controlConfig)) {
              var value = controlConfig[0];
              var validator = controlConfig.length > 1 ? controlConfig[1] : null;
              var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
              return this.control(value, validator, asyncValidator);
            } else {
              return this.control(controlConfig);
            }
          }
        }]);

        return FormBuilder;
      }();

      FormBuilder.ɵfac = function FormBuilder_Factory(t) {
        return new (t || FormBuilder)();
      };

      FormBuilder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FormBuilder,
        factory: FormBuilder.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
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
       * @publicApi
       */


      var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('11.0.0');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Exports the required providers and directives for template-driven forms,
       * making them available for import by NgModules that import this module.
       *
       * @see [Forms Overview](/guide/forms-overview)
       * @see [Template-driven Forms Guide](/guide/forms)
       *
       * @publicApi
       */

      var FormsModule = function FormsModule() {
        _classCallCheck(this, FormsModule);
      };

      FormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FormsModule
      });
      FormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FormsModule_Factory(t) {
          return new (t || FormsModule)();
        },
        providers: [RadioControlRegistry],
        imports: [ɵInternalFormsSharedModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormsModule, {
          declarations: [NgModel, NgModelGroup, NgForm],
          exports: [ɵInternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: TEMPLATE_DRIVEN_DIRECTIVES,
            providers: [RadioControlRegistry],
            exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
          }]
        }], null, null);
      })();
      /**
       * Exports the required infrastructure and directives for reactive forms,
       * making them available for import by NgModules that import this module.
       *
       * @see [Forms Overview](guide/forms-overview)
       * @see [Reactive Forms Guide](guide/reactive-forms)
       *
       * @publicApi
       */


      var ReactiveFormsModule = /*#__PURE__*/function () {
        function ReactiveFormsModule() {
          _classCallCheck(this, ReactiveFormsModule);
        }

        _createClass(ReactiveFormsModule, null, [{
          key: "withConfig",

          /**
           * @description
           * Provides options for configuring the reactive forms module.
           *
           * @param opts An object of configuration options
           * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
           * binding is used with reactive form directives.
           */
          value: function withConfig(opts) {
            return {
              ngModule: ReactiveFormsModule,
              providers: [{
                provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
                useValue: opts.warnOnNgModelWithFormControl
              }]
            };
          }
        }]);

        return ReactiveFormsModule;
      }();

      ReactiveFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ReactiveFormsModule
      });
      ReactiveFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ReactiveFormsModule_Factory(t) {
          return new (t || ReactiveFormsModule)();
        },
        providers: [FormBuilder, RadioControlRegistry],
        imports: [ɵInternalFormsSharedModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReactiveFormsModule, {
          declarations: [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName],
          exports: [ɵInternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReactiveFormsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [REACTIVE_DRIVEN_DIRECTIVES],
            providers: [FormBuilder, RadioControlRegistry],
            exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
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
      // This file only reexports content of the `src` folder. Keep it that way.

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
      //# sourceMappingURL=forms.js.map

      /***/

    },

    /***/
    "bTqV":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js ***!
      \************************************************************************/

    /*! exports provided: MatAnchor, MatButton, MatButtonModule */

    /***/
    function bTqV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAnchor", function () {
        return MatAnchor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButton", function () {
        return MatButton;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButtonModule", function () {
        return MatButtonModule;
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


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Default color palette for round buttons (mat-fab and mat-mini-fab) */


      var _c0 = ["mat-button", ""];
      var _c1 = ["*"];
      var _c2 = ".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n";
      var DEFAULT_ROUND_BUTTON_COLOR = 'accent';
      /**
       * List of classes to add to MatButton instances based on host attributes to
       * style as different variants.
       */

      var BUTTON_HOST_ATTRIBUTES = ['mat-button', 'mat-flat-button', 'mat-icon-button', 'mat-raised-button', 'mat-stroked-button', 'mat-mini-fab', 'mat-fab']; // Boilerplate for applying mixins to MatButton.

      /** @docs-private */

      var MatButtonBase = function MatButtonBase(_elementRef) {
        _classCallCheck(this, MatButtonBase);

        this._elementRef = _elementRef;
      };

      var _MatButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisableRipple"])(MatButtonBase)));
      /**
       * Material design button.
       */


      var MatButton = /*#__PURE__*/function (_MatButtonMixinBase2) {
        _inherits(MatButton, _MatButtonMixinBase2);

        var _super18 = _createSuper(MatButton);

        function MatButton(elementRef, _focusMonitor, _animationMode) {
          var _this40;

          _classCallCheck(this, MatButton);

          _this40 = _super18.call(this, elementRef);
          _this40._focusMonitor = _focusMonitor;
          _this40._animationMode = _animationMode;
          /** Whether the button is round. */

          _this40.isRoundButton = _this40._hasHostAttributes('mat-fab', 'mat-mini-fab');
          /** Whether the button is icon button. */

          _this40.isIconButton = _this40._hasHostAttributes('mat-icon-button'); // For each of the variant selectors that is present in the button's host
          // attributes, add the correct corresponding class.

          var _iterator2 = _createForOfIteratorHelper(BUTTON_HOST_ATTRIBUTES),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var attr = _step2.value;

              if (_this40._hasHostAttributes(attr)) {
                _this40._getHostElement().classList.add(attr);
              }
            } // Add a class that applies to all buttons. This makes it easier to target if somebody
            // wants to target all Material buttons. We do it here rather than `host` to ensure that
            // the class is applied to derived classes.

          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          elementRef.nativeElement.classList.add('mat-button-base');

          if (_this40.isRoundButton) {
            _this40.color = DEFAULT_ROUND_BUTTON_COLOR;
          }

          return _this40;
        }

        _createClass(MatButton, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._focusMonitor.monitor(this._elementRef, true);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);
          }
          /** Focuses the button. */

        }, {
          key: "focus",
          value: function focus() {
            var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
            var options = arguments.length > 1 ? arguments[1] : undefined;

            this._focusMonitor.focusVia(this._getHostElement(), origin, options);
          }
        }, {
          key: "_getHostElement",
          value: function _getHostElement() {
            return this._elementRef.nativeElement;
          }
        }, {
          key: "_isRippleDisabled",
          value: function _isRippleDisabled() {
            return this.disableRipple || this.disabled;
          }
          /** Gets whether the button has one of the given attributes. */

        }, {
          key: "_hasHostAttributes",
          value: function _hasHostAttributes() {
            var _this41 = this;

            for (var _len = arguments.length, attributes = new Array(_len), _key = 0; _key < _len; _key++) {
              attributes[_key] = arguments[_key];
            }

            return attributes.some(function (attribute) {
              return _this41._getHostElement().hasAttribute(attribute);
            });
          }
        }]);

        return MatButton;
      }(_MatButtonMixinBase);

      MatButton.ɵfac = function MatButton_Factory(t) {
        return new (t || MatButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatButton,
        selectors: [["button", "mat-button", ""], ["button", "mat-raised-button", ""], ["button", "mat-icon-button", ""], ["button", "mat-fab", ""], ["button", "mat-mini-fab", ""], ["button", "mat-stroked-button", ""], ["button", "mat-flat-button", ""]],
        viewQuery: function MatButton_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
          }
        },
        hostAttrs: [1, "mat-focus-indicator"],
        hostVars: 5,
        hostBindings: function MatButton_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled || null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-button-disabled", ctx.disabled);
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          color: "color"
        },
        exportAs: ["matButton"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        attrs: _c0,
        ngContentSelectors: _c1,
        decls: 4,
        vars: 5,
        consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
        template: function MatButton_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]],
        styles: [_c2],
        encapsulation: 2,
        changeDetection: 0
      });

      MatButton.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatButton.propDecorators = {
        ripple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatButton, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],\n             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],\n             button[mat-flat-button]",
            exportAs: 'matButton',
            host: {
              '[attr.disabled]': 'disabled || null',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
              // Add a class for disabled button styling instead of the using attribute
              // selector or pseudo-selector.  This allows users to create focusabled
              // disabled buttons without recreating the styles.
              '[class.mat-button-disabled]': 'disabled',
              'class': 'mat-focus-indicator'
            },
            template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<span matRipple class=\"mat-button-ripple\"\n      [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n      [matRippleDisabled]=\"_isRippleDisabled()\"\n      [matRippleCentered]=\"isIconButton\"\n      [matRippleTrigger]=\"_getHostElement()\"></span>\n<span class=\"mat-button-focus-overlay\"></span>\n",
            inputs: ['disabled', 'disableRipple', 'color'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          ripple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]]
          }]
        });
      })();
      /**
       * Material design anchor button.
       */


      var MatAnchor = /*#__PURE__*/function (_MatButton) {
        _inherits(MatAnchor, _MatButton);

        var _super19 = _createSuper(MatAnchor);

        function MatAnchor(focusMonitor, elementRef, animationMode) {
          _classCallCheck(this, MatAnchor);

          return _super19.call(this, elementRef, focusMonitor, animationMode);
        }

        _createClass(MatAnchor, [{
          key: "_haltDisabledEvents",
          value: function _haltDisabledEvents(event) {
            // A disabled button shouldn't apply any actions
            if (this.disabled) {
              event.preventDefault();
              event.stopImmediatePropagation();
            }
          }
        }]);

        return MatAnchor;
      }(MatButton);

      MatAnchor.ɵfac = function MatAnchor_Factory(t) {
        return new (t || MatAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatAnchor.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatAnchor,
        selectors: [["a", "mat-button", ""], ["a", "mat-raised-button", ""], ["a", "mat-icon-button", ""], ["a", "mat-fab", ""], ["a", "mat-mini-fab", ""], ["a", "mat-stroked-button", ""], ["a", "mat-flat-button", ""]],
        hostAttrs: [1, "mat-focus-indicator"],
        hostVars: 7,
        hostBindings: function MatAnchor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatAnchor_click_HostBindingHandler($event) {
              return ctx._haltDisabledEvents($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? -1 : ctx.tabIndex || 0)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-button-disabled", ctx.disabled);
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          color: "color",
          tabIndex: "tabIndex"
        },
        exportAs: ["matButton", "matAnchor"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        attrs: _c0,
        ngContentSelectors: _c1,
        decls: 4,
        vars: 5,
        consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
        template: function MatAnchor_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]],
        styles: [_c2],
        encapsulation: 2,
        changeDetection: 0
      });

      MatAnchor.ctorParameters = function () {
        return [{
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatAnchor.propDecorators = {
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAnchor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],\n             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]",
            exportAs: 'matButton, matAnchor',
            host: {
              // Note that we ignore the user-specified tabindex when it's disabled for
              // consistency with the `mat-button` applied on native buttons where even
              // though they have an index, they're not tabbable.
              '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
              '[attr.disabled]': 'disabled || null',
              '[attr.aria-disabled]': 'disabled.toString()',
              '(click)': '_haltDisabledEvents($event)',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
              '[class.mat-button-disabled]': 'disabled',
              'class': 'mat-focus-indicator'
            },
            inputs: ['disabled', 'disableRipple', 'color'],
            template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<span matRipple class=\"mat-button-ripple\"\n      [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n      [matRippleDisabled]=\"_isRippleDisabled()\"\n      [matRippleCentered]=\"isIconButton\"\n      [matRippleTrigger]=\"_getHostElement()\"></span>\n<span class=\"mat-button-focus-overlay\"></span>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          tabIndex: [{
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


      var MatButtonModule = function MatButtonModule() {
        _classCallCheck(this, MatButtonModule);
      };

      MatButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatButtonModule
      });
      MatButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatButtonModule_Factory(t) {
          return new (t || MatButtonModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatButtonModule, {
          declarations: function declarations() {
            return [MatButton, MatAnchor];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatButtonModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            exports: [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            declarations: [MatButton, MatAnchor]
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
      //# sourceMappingURL=button.js.map

      /***/

    },

    /***/
    "kmnG":
    /*!****************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js ***!
      \****************************************************************************/

    /*! exports provided: MAT_ERROR, MAT_FORM_FIELD, MAT_FORM_FIELD_DEFAULT_OPTIONS, MAT_PREFIX, MAT_SUFFIX, MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix, _MAT_HINT, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, getMatFormFieldPlaceholderConflictError, matFormFieldAnimations */

    /***/
    function kmnG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_ERROR", function () {
        return MAT_ERROR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD", function () {
        return MAT_FORM_FIELD;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function () {
        return MAT_FORM_FIELD_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PREFIX", function () {
        return MAT_PREFIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SUFFIX", function () {
        return MAT_SUFFIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatError", function () {
        return MatError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormField", function () {
        return MatFormField;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function () {
        return MatFormFieldControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function () {
        return MatFormFieldModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHint", function () {
        return MatHint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLabel", function () {
        return MatLabel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function () {
        return MatPlaceholder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPrefix", function () {
        return MatPrefix;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSuffix", function () {
        return MatSuffix;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MAT_HINT", function () {
        return _MAT_HINT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function () {
        return getMatFormFieldDuplicatedHintError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function () {
        return getMatFormFieldMissingControlError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function () {
        return getMatFormFieldPlaceholderConflictError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function () {
        return matFormFieldAnimations;
      });
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "GU7r");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _c0 = ["underline"];
      var _c1 = ["connectionContainer"];
      var _c2 = ["inputContainer"];
      var _c3 = ["label"];

      function MatFormField_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
      }

      function MatFormField_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_label_9_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10._control.placeholder);
        }
      }

      function MatFormField_label_9_ng_content_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 3, ["*ngSwitchCase", "true"]);
        }
      }

      function MatFormField_label_9_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_label_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkObserveContent", function MatFormField_label_9_Template_label_cdkObserveContent_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r13.updateOutlineGap();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MatFormField_label_9_ng_container_2_Template, 4, 1, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MatFormField_label_9_ng_content_3_Template, 1, 0, "ng-content", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatFormField_label_9_span_4_Template, 2, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-form-field-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-accent", ctx_r4.color == "accent")("mat-warn", ctx_r4.color == "warn");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkObserveContentDisabled", ctx_r4.appearance != "outline")("id", ctx_r4._labelId)("ngSwitch", ctx_r4._hasLabel());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx_r4._control.id)("aria-owns", ctx_r4._control.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.hideRequiredMarker && ctx_r4._control.required && !ctx_r4._control.disabled);
        }
      }

      function MatFormField_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-accent", ctx_r6.color == "accent")("mat-warn", ctx_r6.color == "warn");
        }
      }

      function MatFormField_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transitionMessages", ctx_r7._subscriptAnimationState);
        }
      }

      function MatFormField_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r16._hintLabelId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r16.hintLabel);
        }
      }

      function MatFormField_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MatFormField_div_14_div_1_Template, 2, 2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transitionMessages", ctx_r8._subscriptAnimationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.hintLabel);
        }
      }

      var _c4 = ["*", [["", "matPrefix", ""]], [["mat-placeholder"]], [["mat-label"]], [["", "matSuffix", ""]], [["mat-error"]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
      var _c5 = ["*", "[matPrefix]", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
      var nextUniqueId = 0;
      /**
       * Injection token that can be used to reference instances of `MatError`. It serves as
       * alternative token to the actual `MatError` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var MAT_ERROR = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatError');
      /** Single error message to be shown underneath the form field. */

      var MatError = function MatError() {
        _classCallCheck(this, MatError);

        this.id = "mat-error-".concat(nextUniqueId++);
      };

      MatError.ɵfac = function MatError_Factory(t) {
        return new (t || MatError)();
      };

      MatError.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatError,
        selectors: [["mat-error"]],
        hostAttrs: ["role", "alert", 1, "mat-error"],
        hostVars: 1,
        hostBindings: function MatError_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id);
          }
        },
        inputs: {
          id: "id"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_ERROR,
          useExisting: MatError
        }])]
      });
      MatError.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatError, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-error',
            host: {
              'class': 'mat-error',
              'role': 'alert',
              '[attr.id]': 'id'
            },
            providers: [{
              provide: MAT_ERROR,
              useExisting: MatError
            }]
          }]
        }], function () {
          return [];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
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
       * Animations used by the MatFormField.
       * @docs-private
       */


      var matFormFieldAnimations = {
        /** Animation that transitions the form field's error and hint messages. */
        transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('transitionMessages', [// TODO(mmalerba): Use angular animations for label animation as well.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 1,
          transform: 'translateY(0%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('void => enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 0,
          transform: 'translateY(-100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** An interface which allows a control to work inside of a `MatFormField`. */

      var MatFormFieldControl = function MatFormFieldControl() {
        _classCallCheck(this, MatFormFieldControl);
      };

      MatFormFieldControl.ɵfac = function MatFormFieldControl_Factory(t) {
        return new (t || MatFormFieldControl)();
      };

      MatFormFieldControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatFormFieldControl
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormFieldControl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @docs-private */


      function getMatFormFieldPlaceholderConflictError() {
        return Error('Placeholder attribute and child element were both specified.');
      }
      /** @docs-private */


      function getMatFormFieldDuplicatedHintError(align) {
        return Error("A hint was already declared for 'align=\"".concat(align, "\"'."));
      }
      /** @docs-private */


      function getMatFormFieldMissingControlError() {
        return Error('mat-form-field must contain a MatFormFieldControl.');
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var nextUniqueId$1 = 0;
      /**
       * Injection token that can be used to reference instances of `MatHint`. It serves as
       * alternative token to the actual `MatHint` class which could cause unnecessary
       * retention of the class and its directive metadata.
       *
       * *Note*: This is not part of the public API as the MDC-based form-field will not
       * need a lightweight token for `MatHint` and we want to reduce breaking changes.
       */

      var _MAT_HINT = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatHint');
      /** Hint text to be shown underneath the form field control. */


      var MatHint = function MatHint() {
        _classCallCheck(this, MatHint);

        /** Whether to align the hint label at the start or end of the line. */
        this.align = 'start';
        /** Unique ID for the hint. Used for the aria-describedby on the form field control. */

        this.id = "mat-hint-".concat(nextUniqueId$1++);
      };

      MatHint.ɵfac = function MatHint_Factory(t) {
        return new (t || MatHint)();
      };

      MatHint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatHint,
        selectors: [["mat-hint"]],
        hostAttrs: [1, "mat-hint"],
        hostVars: 4,
        hostBindings: function MatHint_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("align", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-form-field-hint-end", ctx.align === "end");
          }
        },
        inputs: {
          align: "align",
          id: "id"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _MAT_HINT,
          useExisting: MatHint
        }])]
      });
      MatHint.propDecorators = {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatHint, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-hint',
            host: {
              'class': 'mat-hint',
              '[class.mat-form-field-hint-end]': 'align === "end"',
              '[attr.id]': 'id',
              // Remove align attribute to prevent it from interfering with layout.
              '[attr.align]': 'null'
            },
            providers: [{
              provide: _MAT_HINT,
              useExisting: MatHint
            }]
          }]
        }], function () {
          return [];
        }, {
          align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
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

      /** The floating label for a `mat-form-field`. */


      var MatLabel = function MatLabel() {
        _classCallCheck(this, MatLabel);
      };

      MatLabel.ɵfac = function MatLabel_Factory(t) {
        return new (t || MatLabel)();
      };

      MatLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatLabel,
        selectors: [["mat-label"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatLabel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-label'
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
       * The placeholder text for an `MatFormField`.
       * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
       *     placeholder.
       * @breaking-change 8.0.0
       */


      var MatPlaceholder = function MatPlaceholder() {
        _classCallCheck(this, MatPlaceholder);
      };

      MatPlaceholder.ɵfac = function MatPlaceholder_Factory(t) {
        return new (t || MatPlaceholder)();
      };

      MatPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatPlaceholder,
        selectors: [["mat-placeholder"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatPlaceholder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-placeholder'
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
       * Injection token that can be used to reference instances of `MatPrefix`. It serves as
       * alternative token to the actual `MatPrefix` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_PREFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatPrefix');
      /** Prefix to be placed in front of the form field. */

      var MatPrefix = function MatPrefix() {
        _classCallCheck(this, MatPrefix);
      };

      MatPrefix.ɵfac = function MatPrefix_Factory(t) {
        return new (t || MatPrefix)();
      };

      MatPrefix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatPrefix,
        selectors: [["", "matPrefix", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_PREFIX,
          useExisting: MatPrefix
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatPrefix, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[matPrefix]',
            providers: [{
              provide: MAT_PREFIX,
              useExisting: MatPrefix
            }]
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
       * Injection token that can be used to reference instances of `MatSuffix`. It serves as
       * alternative token to the actual `MatSuffix` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_SUFFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatSuffix');
      /** Suffix to be placed at the end of the form field. */

      var MatSuffix = function MatSuffix() {
        _classCallCheck(this, MatSuffix);
      };

      MatSuffix.ɵfac = function MatSuffix_Factory(t) {
        return new (t || MatSuffix)();
      };

      MatSuffix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatSuffix,
        selectors: [["", "matSuffix", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_SUFFIX,
          useExisting: MatSuffix
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSuffix, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[matSuffix]',
            providers: [{
              provide: MAT_SUFFIX,
              useExisting: MatSuffix
            }]
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


      var nextUniqueId$2 = 0;
      var floatingLabelScale = 0.75;
      var outlineGapPadding = 5;
      /**
       * Boilerplate for applying mixins to MatFormField.
       * @docs-private
       */

      var MatFormFieldBase = function MatFormFieldBase(_elementRef) {
        _classCallCheck(this, MatFormFieldBase);

        this._elementRef = _elementRef;
      };
      /**
       * Base class to which we're applying the form field mixins.
       * @docs-private
       */


      var _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinColor"])(MatFormFieldBase, 'primary');
      /**
       * Injection token that can be used to configure the
       * default options for all form field within an app.
       */


      var MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
      /**
       * Injection token that can be used to inject an instances of `MatFormField`. It serves
       * as alternative token to the actual `MatFormField` class which would cause unnecessary
       * retention of the `MatFormField` class and its component metadata.
       */

      var MAT_FORM_FIELD = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatFormField');
      /** Container for form controls that applies Material Design styling and behavior. */

      var MatFormField = /*#__PURE__*/function (_MatFormFieldMixinBas) {
        _inherits(MatFormField, _MatFormFieldMixinBas);

        var _super20 = _createSuper(MatFormField);

        function MatFormField(_elementRef, _changeDetectorRef,
        /**
         * @deprecated `_labelOptions` parameter no longer being used. To be removed.
         * @breaking-change 12.0.0
         */
        // Use `ElementRef` here so Angular has something to inject.
        _labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
          var _this42;

          _classCallCheck(this, MatFormField);

          _this42 = _super20.call(this, _elementRef);
          _this42._elementRef = _elementRef;
          _this42._changeDetectorRef = _changeDetectorRef;
          _this42._dir = _dir;
          _this42._defaults = _defaults;
          _this42._platform = _platform;
          _this42._ngZone = _ngZone;
          /**
           * Whether the outline gap needs to be calculated
           * immediately on the next change detection run.
           */

          _this42._outlineGapCalculationNeededImmediately = false;
          /** Whether the outline gap needs to be calculated next time the zone has stabilized. */

          _this42._outlineGapCalculationNeededOnStable = false;
          _this42._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Override for the logic that disables the label animation in certain cases. */

          _this42._showAlwaysAnimate = false;
          /** State of the mat-hint and mat-error animations. */

          _this42._subscriptAnimationState = '';
          _this42._hintLabel = ''; // Unique id for the hint label.

          _this42._hintLabelId = "mat-hint-".concat(nextUniqueId$2++); // Unique id for the label element.

          _this42._labelId = "mat-form-field-label-".concat(nextUniqueId$2++);
          _this42.floatLabel = _this42._getDefaultFloatLabelState();
          _this42._animationsEnabled = _animationMode !== 'NoopAnimations'; // Set the default through here so we invoke the setter on the first run.

          _this42.appearance = _defaults && _defaults.appearance ? _defaults.appearance : 'legacy';
          _this42._hideRequiredMarker = _defaults && _defaults.hideRequiredMarker != null ? _defaults.hideRequiredMarker : false;
          return _this42;
        }
        /** The form-field appearance style. */


        _createClass(MatFormField, [{
          key: "_shouldAlwaysFloat",

          /** Whether the floating label should always float or not. */
          value: function _shouldAlwaysFloat() {
            return this.floatLabel === 'always' && !this._showAlwaysAnimate;
          }
          /** Whether the label can float or not. */

        }, {
          key: "_canLabelFloat",
          value: function _canLabelFloat() {
            return this.floatLabel !== 'never';
          }
          /** Text for the form field hint. */

        }, {
          key: "getLabelId",

          /**
           * Gets the id of the label element. If no label is present, returns `null`.
           */
          value: function getLabelId() {
            return this._hasFloatingLabel() ? this._labelId : null;
          }
          /**
           * Gets an ElementRef for the element that a overlay attached to the form-field should be
           * positioned relative to.
           */

        }, {
          key: "getConnectedOverlayOrigin",
          value: function getConnectedOverlayOrigin() {
            return this._connectionContainerRef || this._elementRef;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this43 = this;

            this._validateControlChild();

            var control = this._control;

            if (control.controlType) {
              this._elementRef.nativeElement.classList.add("mat-form-field-type-".concat(control.controlType));
            } // Subscribe to changes in the child control state in order to update the form field UI.


            control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
              _this43._validatePlaceholders();

              _this43._syncDescribedByIds();

              _this43._changeDetectorRef.markForCheck();
            }); // Run change detection if the value changes.

            if (control.ngControl && control.ngControl.valueChanges) {
              control.ngControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(function () {
                return _this43._changeDetectorRef.markForCheck();
              });
            } // Note that we have to run outside of the `NgZone` explicitly,
            // in order to avoid throwing users into an infinite loop
            // if `zone-patch-rxjs` is included.


            this._ngZone.runOutsideAngular(function () {
              _this43._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this43._destroyed)).subscribe(function () {
                if (_this43._outlineGapCalculationNeededOnStable) {
                  _this43.updateOutlineGap();
                }
              });
            }); // Run change detection and update the outline if the suffix or prefix changes.


            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(function () {
              _this43._outlineGapCalculationNeededOnStable = true;

              _this43._changeDetectorRef.markForCheck();
            }); // Re-validate when the number of hints changes.

            this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
              _this43._processHints();

              _this43._changeDetectorRef.markForCheck();
            }); // Update the aria-described by when the number of errors changes.


            this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
              _this43._syncDescribedByIds();

              _this43._changeDetectorRef.markForCheck();
            });

            if (this._dir) {
              this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(function () {
                if (typeof requestAnimationFrame === 'function') {
                  _this43._ngZone.runOutsideAngular(function () {
                    requestAnimationFrame(function () {
                      return _this43.updateOutlineGap();
                    });
                  });
                } else {
                  _this43.updateOutlineGap();
                }
              });
            }
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            this._validateControlChild();

            if (this._outlineGapCalculationNeededImmediately) {
              this.updateOutlineGap();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // Avoid animations on load.
            this._subscriptAnimationState = 'enter';

            this._changeDetectorRef.detectChanges();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Determines whether a class from the NgControl should be forwarded to the host element. */

        }, {
          key: "_shouldForward",
          value: function _shouldForward(prop) {
            var ngControl = this._control ? this._control.ngControl : null;
            return ngControl && ngControl[prop];
          }
        }, {
          key: "_hasPlaceholder",
          value: function _hasPlaceholder() {
            return !!(this._control && this._control.placeholder || this._placeholderChild);
          }
        }, {
          key: "_hasLabel",
          value: function _hasLabel() {
            return !!(this._labelChildNonStatic || this._labelChildStatic);
          }
        }, {
          key: "_shouldLabelFloat",
          value: function _shouldLabelFloat() {
            return this._canLabelFloat() && (this._control && this._control.shouldLabelFloat || this._shouldAlwaysFloat());
          }
        }, {
          key: "_hideControlPlaceholder",
          value: function _hideControlPlaceholder() {
            // In the legacy appearance the placeholder is promoted to a label if no label is given.
            return this.appearance === 'legacy' && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat();
          }
        }, {
          key: "_hasFloatingLabel",
          value: function _hasFloatingLabel() {
            // In the legacy appearance the placeholder is promoted to a label if no label is given.
            return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
          }
          /** Determines whether to display hints or errors. */

        }, {
          key: "_getDisplayedMessages",
          value: function _getDisplayedMessages() {
            return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
          }
          /** Animates the placeholder up and locks it in position. */

        }, {
          key: "_animateAndLockLabel",
          value: function _animateAndLockLabel() {
            var _this44 = this;

            if (this._hasFloatingLabel() && this._canLabelFloat()) {
              // If animations are disabled, we shouldn't go in here,
              // because the `transitionend` will never fire.
              if (this._animationsEnabled && this._label) {
                this._showAlwaysAnimate = true;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
                  _this44._showAlwaysAnimate = false;
                });
              }

              this.floatLabel = 'always';

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
           * or child element with the `mat-placeholder` directive).
           */

        }, {
          key: "_validatePlaceholders",
          value: function _validatePlaceholders() {
            if (this._control.placeholder && this._placeholderChild && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatFormFieldPlaceholderConflictError();
            }
          }
          /** Does any extra processing that is required when handling the hints. */

        }, {
          key: "_processHints",
          value: function _processHints() {
            this._validateHints();

            this._syncDescribedByIds();
          }
          /**
           * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
           * attribute being considered as `align="start"`.
           */

        }, {
          key: "_validateHints",
          value: function _validateHints() {
            var _this45 = this;

            if (this._hintChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              var startHint;
              var endHint;

              this._hintChildren.forEach(function (hint) {
                if (hint.align === 'start') {
                  if (startHint || _this45.hintLabel) {
                    throw getMatFormFieldDuplicatedHintError('start');
                  }

                  startHint = hint;
                } else if (hint.align === 'end') {
                  if (endHint) {
                    throw getMatFormFieldDuplicatedHintError('end');
                  }

                  endHint = hint;
                }
              });
            }
          }
          /** Gets the default float label state. */

        }, {
          key: "_getDefaultFloatLabelState",
          value: function _getDefaultFloatLabelState() {
            return this._defaults && this._defaults.floatLabel || 'auto';
          }
          /**
           * Sets the list of element IDs that describe the child control. This allows the control to update
           * its `aria-describedby` attribute accordingly.
           */

        }, {
          key: "_syncDescribedByIds",
          value: function _syncDescribedByIds() {
            if (this._control) {
              var ids = []; // TODO(wagnermaciel): Remove the type check when we find the root cause of this bug.

              if (this._control.userAriaDescribedBy && typeof this._control.userAriaDescribedBy === 'string') {
                ids.push.apply(ids, _toConsumableArray(this._control.userAriaDescribedBy.split(' ')));
              }

              if (this._getDisplayedMessages() === 'hint') {
                var startHint = this._hintChildren ? this._hintChildren.find(function (hint) {
                  return hint.align === 'start';
                }) : null;
                var endHint = this._hintChildren ? this._hintChildren.find(function (hint) {
                  return hint.align === 'end';
                }) : null;

                if (startHint) {
                  ids.push(startHint.id);
                } else if (this._hintLabel) {
                  ids.push(this._hintLabelId);
                }

                if (endHint) {
                  ids.push(endHint.id);
                }
              } else if (this._errorChildren) {
                ids.push.apply(ids, _toConsumableArray(this._errorChildren.map(function (error) {
                  return error.id;
                })));
              }

              this._control.setDescribedByIds(ids);
            }
          }
          /** Throws an error if the form field's control is missing. */

        }, {
          key: "_validateControlChild",
          value: function _validateControlChild() {
            if (!this._control && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatFormFieldMissingControlError();
            }
          }
          /**
           * Updates the width and position of the gap in the outline. Only relevant for the outline
           * appearance.
           */

        }, {
          key: "updateOutlineGap",
          value: function updateOutlineGap() {
            var labelEl = this._label ? this._label.nativeElement : null;

            if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length || !labelEl.textContent.trim()) {
              return;
            }

            if (!this._platform.isBrowser) {
              // getBoundingClientRect isn't available on the server.
              return;
            } // If the element is not present in the DOM, the outline gap will need to be calculated
            // the next time it is checked and in the DOM.


            if (!this._isAttachedToDOM()) {
              this._outlineGapCalculationNeededImmediately = true;
              return;
            }

            var startWidth = 0;
            var gapWidth = 0;
            var container = this._connectionContainerRef.nativeElement;
            var startEls = container.querySelectorAll('.mat-form-field-outline-start');
            var gapEls = container.querySelectorAll('.mat-form-field-outline-gap');

            if (this._label && this._label.nativeElement.children.length) {
              var containerRect = container.getBoundingClientRect(); // If the container's width and height are zero, it means that the element is
              // invisible and we can't calculate the outline gap. Mark the element as needing
              // to be checked the next time the zone stabilizes. We can't do this immediately
              // on the next change detection, because even if the element becomes visible,
              // the `ClientRect` won't be reclaculated immediately. We reset the
              // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.

              if (containerRect.width === 0 && containerRect.height === 0) {
                this._outlineGapCalculationNeededOnStable = true;
                this._outlineGapCalculationNeededImmediately = false;
                return;
              }

              var containerStart = this._getStartEnd(containerRect);

              var labelChildren = labelEl.children;

              var labelStart = this._getStartEnd(labelChildren[0].getBoundingClientRect());

              var labelWidth = 0;

              for (var i = 0; i < labelChildren.length; i++) {
                labelWidth += labelChildren[i].offsetWidth;
              }

              startWidth = Math.abs(labelStart - containerStart) - outlineGapPadding;
              gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
            }

            for (var _i6 = 0; _i6 < startEls.length; _i6++) {
              startEls[_i6].style.width = "".concat(startWidth, "px");
            }

            for (var _i7 = 0; _i7 < gapEls.length; _i7++) {
              gapEls[_i7].style.width = "".concat(gapWidth, "px");
            }

            this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = false;
          }
          /** Gets the start end of the rect considering the current directionality. */

        }, {
          key: "_getStartEnd",
          value: function _getStartEnd(rect) {
            return this._dir && this._dir.value === 'rtl' ? rect.right : rect.left;
          }
          /** Checks whether the form field is attached to the DOM. */

        }, {
          key: "_isAttachedToDOM",
          value: function _isAttachedToDOM() {
            var element = this._elementRef.nativeElement;

            if (element.getRootNode) {
              var rootNode = element.getRootNode(); // If the element is inside the DOM the root node will be either the document
              // or the closest shadow root, otherwise it'll be the element itself.

              return rootNode && rootNode !== element;
            } // Otherwise fall back to checking if it's in the document. This doesn't account for
            // shadow DOM, however browser that support shadow DOM should support `getRootNode` as well.


            return document.documentElement.contains(element);
          }
        }, {
          key: "appearance",
          get: function get() {
            return this._appearance;
          },
          set: function set(value) {
            var oldValue = this._appearance;
            this._appearance = value || this._defaults && this._defaults.appearance || 'legacy';

            if (this._appearance === 'outline' && oldValue !== value) {
              this._outlineGapCalculationNeededOnStable = true;
            }
          }
          /** Whether the required marker should be hidden. */

        }, {
          key: "hideRequiredMarker",
          get: function get() {
            return this._hideRequiredMarker;
          },
          set: function set(value) {
            this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "hintLabel",
          get: function get() {
            return this._hintLabel;
          },
          set: function set(value) {
            this._hintLabel = value;

            this._processHints();
          }
          /**
           * Whether the label should always float, never float or float as the user types.
           *
           * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
           * way to make the floating label emulate the behavior of a standard input placeholder. However
           * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
           * appearances the `never` option has been disabled in favor of just using the placeholder.
           */

        }, {
          key: "floatLabel",
          get: function get() {
            return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
          },
          set: function set(value) {
            if (value !== this._floatLabel) {
              this._floatLabel = value || this._getDefaultFloatLabelState();

              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "_control",
          get: function get() {
            // TODO(crisbeto): we need this workaround in order to support both Ivy and ViewEngine.
            //  We should clean this up once Ivy is the default renderer.
            return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
          },
          set: function set(value) {
            this._explicitFormFieldControl = value;
          }
        }]);

        return MatFormField;
      }(_MatFormFieldMixinBase);

      MatFormField.ɵfac = function MatFormField_Factory(t) {
        return new (t || MatFormField)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_FORM_FIELD_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatFormField.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatFormField,
        selectors: [["mat-form-field"]],
        contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticContentQuery"](dirIndex, MatFormFieldControl, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatLabel, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticContentQuery"](dirIndex, MatLabel, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatPlaceholder, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_ERROR, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _MAT_HINT, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_PREFIX, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_SUFFIX, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._controlNonStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._controlStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._labelChildNonStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._labelChildStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._placeholderChild = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._hintChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
          }
        },
        viewQuery: function MatFormField_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.underlineRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._connectionContainerRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._inputContainerRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._label = _t.first);
          }
        },
        hostAttrs: [1, "mat-form-field"],
        hostVars: 44,
        hostBindings: function MatFormField_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-form-field-appearance-standard", ctx.appearance == "standard")("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-appearance-legacy", ctx.appearance == "legacy")("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-can-float", ctx._canLabelFloat())("mat-form-field-should-float", ctx._shouldLabelFloat())("mat-form-field-has-label", ctx._hasFloatingLabel())("mat-form-field-hide-placeholder", ctx._hideControlPlaceholder())("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-focused", ctx._control.focused)("mat-accent", ctx.color == "accent")("mat-warn", ctx.color == "warn")("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"))("_mat-animation-noopable", !ctx._animationsEnabled);
          }
        },
        inputs: {
          color: "color",
          floatLabel: "floatLabel",
          appearance: "appearance",
          hideRequiredMarker: "hideRequiredMarker",
          hintLabel: "hintLabel"
        },
        exportAs: ["matFormField"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_FORM_FIELD,
          useExisting: MatFormField
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c5,
        decls: 15,
        vars: 8,
        consts: [[1, "mat-form-field-wrapper"], [1, "mat-form-field-flex", 3, "click"], ["connectionContainer", ""], [4, "ngIf"], ["class", "mat-form-field-prefix", 4, "ngIf"], [1, "mat-form-field-infix"], ["inputContainer", ""], [1, "mat-form-field-label-wrapper"], ["class", "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "mat-empty", "mat-form-field-empty", "mat-accent", "mat-warn", "ngSwitch", "cdkObserveContent", 4, "ngIf"], ["class", "mat-form-field-suffix", 4, "ngIf"], ["class", "mat-form-field-underline", 4, "ngIf"], [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"], [1, "mat-form-field-outline"], [1, "mat-form-field-outline-start"], [1, "mat-form-field-outline-gap"], [1, "mat-form-field-outline-end"], [1, "mat-form-field-outline", "mat-form-field-outline-thick"], [1, "mat-form-field-prefix"], [1, "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "ngSwitch", "cdkObserveContent"], ["label", ""], ["class", "mat-placeholder-required mat-form-field-required-marker", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "mat-placeholder-required", "mat-form-field-required-marker"], [1, "mat-form-field-suffix"], [1, "mat-form-field-underline"], ["underline", ""], [1, "mat-form-field-ripple"], [1, "mat-form-field-hint-wrapper"], ["class", "mat-hint", 3, "id", 4, "ngIf"], [1, "mat-form-field-hint-spacer"], [1, "mat-hint", 3, "id"]],
        template: function MatFormField_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatFormField_Template_div_click_1_listener($event) {
              return ctx._control.onContainerClick && ctx._control.onContainerClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MatFormField_ng_container_3_Template, 9, 0, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatFormField_div_4_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MatFormField_label_9_Template, 5, 16, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MatFormField_div_10_Template, 2, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MatFormField_div_11_Template, 3, 4, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MatFormField_div_13_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MatFormField_div_14_Template, 5, 2, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.appearance == "outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._prefixChildren.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._hasFloatingLabel());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._suffixChildren.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.appearance != "outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx._getDisplayedMessages());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "error");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "hint");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["CdkObserveContent"]],
        styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"],
        encapsulation: 2,
        data: {
          animation: [matFormFieldAnimations.transitionMessages]
        },
        changeDetection: 0
      });

      MatFormField.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatFormField.propDecorators = {
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        hideRequiredMarker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        hintLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        floatLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        underlineRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['underline']
        }],
        _connectionContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['connectionContainer', {
            "static": true
          }]
        }],
        _inputContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['inputContainer']
        }],
        _label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['label']
        }],
        _controlNonStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatFormFieldControl]
        }],
        _controlStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatFormFieldControl, {
            "static": true
          }]
        }],
        _labelChildNonStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatLabel]
        }],
        _labelChildStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatLabel, {
            "static": true
          }]
        }],
        _placeholderChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatPlaceholder]
        }],
        _errorChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MAT_ERROR, {
            descendants: true
          }]
        }],
        _hintChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_MAT_HINT, {
            descendants: true
          }]
        }],
        _prefixChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MAT_PREFIX, {
            descendants: true
          }]
        }],
        _suffixChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MAT_SUFFIX, {
            descendants: true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormField, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-form-field',
            exportAs: 'matFormField',
            template: "<div class=\"mat-form-field-wrapper\">\n  <div class=\"mat-form-field-flex\" #connectionContainer\n       (click)=\"_control.onContainerClick && _control.onContainerClick($event)\">\n\n    <!-- Outline used for outline appearance. -->\n    <ng-container *ngIf=\"appearance == 'outline'\">\n      <div class=\"mat-form-field-outline\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n      <div class=\"mat-form-field-outline mat-form-field-outline-thick\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n    </ng-container>\n\n    <div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\">\n      <ng-content select=\"[matPrefix]\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-infix\" #inputContainer>\n      <ng-content></ng-content>\n\n      <span class=\"mat-form-field-label-wrapper\">\n        <!-- We add aria-owns as a workaround for an issue in JAWS & NVDA where the label isn't\n             read if it comes before the control in the DOM. -->\n        <label class=\"mat-form-field-label\"\n               (cdkObserveContent)=\"updateOutlineGap()\"\n               [cdkObserveContentDisabled]=\"appearance != 'outline'\"\n               [id]=\"_labelId\"\n               [attr.for]=\"_control.id\"\n               [attr.aria-owns]=\"_control.id\"\n               [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-accent]=\"color == 'accent'\"\n               [class.mat-warn]=\"color == 'warn'\"\n               #label\n               *ngIf=\"_hasFloatingLabel()\"\n               [ngSwitch]=\"_hasLabel()\">\n\n          <!-- @breaking-change 8.0.0 remove in favor of mat-label element an placeholder attr. -->\n          <ng-container *ngSwitchCase=\"false\">\n            <ng-content select=\"mat-placeholder\"></ng-content>\n            <span>{{_control.placeholder}}</span>\n          </ng-container>\n\n          <ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content>\n\n          <!-- @breaking-change 8.0.0 remove `mat-placeholder-required` class -->\n          <span\n            class=\"mat-placeholder-required mat-form-field-required-marker\"\n            aria-hidden=\"true\"\n            *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span>\n        </label>\n      </span>\n    </div>\n\n    <div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\">\n      <ng-content select=\"[matSuffix]\"></ng-content>\n    </div>\n  </div>\n\n  <!-- Underline used for legacy, standard, and box appearances. -->\n  <div class=\"mat-form-field-underline\" #underline\n       *ngIf=\"appearance != 'outline'\">\n    <span class=\"mat-form-field-ripple\"\n          [class.mat-accent]=\"color == 'accent'\"\n          [class.mat-warn]=\"color == 'warn'\"></span>\n  </div>\n\n  <div class=\"mat-form-field-subscript-wrapper\"\n       [ngSwitch]=\"_getDisplayedMessages()\">\n    <div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\">\n      <ng-content select=\"mat-error\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\"\n      [@transitionMessages]=\"_subscriptAnimationState\">\n      <!-- TODO(mmalerba): use an actual <mat-hint> once all selectors are switched to mat-* -->\n      <div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div>\n      <ng-content select=\"mat-hint:not([align='end'])\"></ng-content>\n      <div class=\"mat-form-field-hint-spacer\"></div>\n      <ng-content select=\"mat-hint[align='end']\"></ng-content>\n    </div>\n  </div>\n</div>\n",
            animations: [matFormFieldAnimations.transitionMessages],
            host: {
              'class': 'mat-form-field',
              '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
              '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
              '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
              '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
              '[class.mat-form-field-invalid]': '_control.errorState',
              '[class.mat-form-field-can-float]': '_canLabelFloat()',
              '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
              '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
              '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
              '[class.mat-form-field-disabled]': '_control.disabled',
              '[class.mat-form-field-autofilled]': '_control.autofilled',
              '[class.mat-focused]': '_control.focused',
              '[class.mat-accent]': 'color == "accent"',
              '[class.mat-warn]': 'color == "warn"',
              '[class.ng-untouched]': '_shouldForward("untouched")',
              '[class.ng-touched]': '_shouldForward("touched")',
              '[class.ng-pristine]': '_shouldForward("pristine")',
              '[class.ng-dirty]': '_shouldForward("dirty")',
              '[class.ng-valid]': '_shouldForward("valid")',
              '[class.ng-invalid]': '_shouldForward("invalid")',
              '[class.ng-pending]': '_shouldForward("pending")',
              '[class._mat-animation-noopable]': '!_animationsEnabled'
            },
            inputs: ['color'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            providers: [{
              provide: MAT_FORM_FIELD,
              useExisting: MatFormField
            }],
            styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          floatLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          hideRequiredMarker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          hintLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          underlineRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['underline']
          }],
          _connectionContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['connectionContainer', {
              "static": true
            }]
          }],
          _inputContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['inputContainer']
          }],
          _label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['label']
          }],
          _controlNonStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatFormFieldControl]
          }],
          _controlStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatFormFieldControl, {
              "static": true
            }]
          }],
          _labelChildNonStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatLabel]
          }],
          _labelChildStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatLabel, {
              "static": true
            }]
          }],
          _placeholderChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatPlaceholder]
          }],
          _errorChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MAT_ERROR, {
              descendants: true
            }]
          }],
          _hintChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_MAT_HINT, {
              descendants: true
            }]
          }],
          _prefixChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MAT_PREFIX, {
              descendants: true
            }]
          }],
          _suffixChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MAT_SUFFIX, {
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


      var MatFormFieldModule = function MatFormFieldModule() {
        _classCallCheck(this, MatFormFieldModule);
      };

      MatFormFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatFormFieldModule
      });
      MatFormFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function MatFormFieldModule_Factory(t) {
          return new (t || MatFormFieldModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatFormFieldModule, {
          declarations: function declarations() {
            return [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormFieldModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]],
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
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
      //# sourceMappingURL=form-field.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~layouts-akun-akun-module~layouts-default-default-module~modules-admin-admin-module~modules-k~ac209db2-es5.js.map