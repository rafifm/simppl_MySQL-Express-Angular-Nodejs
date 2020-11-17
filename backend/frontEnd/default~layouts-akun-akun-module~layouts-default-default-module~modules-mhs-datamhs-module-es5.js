(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layouts-akun-akun-module~layouts-default-default-module~modules-mhs-datamhs-module"], {
    /***/
    "8sFK":
    /*!**********************************************************!*\
      !*** ./node_modules/@angular/cdk/fesm2015/text-field.js ***!
      \**********************************************************/

    /*! exports provided: AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule */

    /***/
    function sFK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutofillMonitor", function () {
        return AutofillMonitor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkAutofill", function () {
        return CdkAutofill;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTextareaAutosize", function () {
        return CdkTextareaAutosize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextFieldModule", function () {
        return TextFieldModule;
      });
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Options to pass to the animationstart listener. */


      var listenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
        passive: true
      });
      /**
       * An injectable service that can be used to monitor the autofill state of an input.
       * Based on the following blog post:
       * https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
       */

      var AutofillMonitor = /*#__PURE__*/function () {
        function AutofillMonitor(_platform, _ngZone) {
          _classCallCheck(this, AutofillMonitor);

          this._platform = _platform;
          this._ngZone = _ngZone;
          this._monitoredElements = new Map();
        }

        _createClass(AutofillMonitor, [{
          key: "monitor",
          value: function monitor(elementOrRef) {
            var _this = this;

            if (!this._platform.isBrowser) {
              return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }

            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);

            var info = this._monitoredElements.get(element);

            if (info) {
              return info.subject;
            }

            var result = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            var cssClass = 'cdk-text-field-autofilled';

            var listener = function listener(event) {
              // Animation events fire on initial element render, we check for the presence of the autofill
              // CSS class to make sure this is a real change in state, not just the initial render before
              // we fire off events.
              if (event.animationName === 'cdk-text-field-autofill-start' && !element.classList.contains(cssClass)) {
                element.classList.add(cssClass);

                _this._ngZone.run(function () {
                  return result.next({
                    target: event.target,
                    isAutofilled: true
                  });
                });
              } else if (event.animationName === 'cdk-text-field-autofill-end' && element.classList.contains(cssClass)) {
                element.classList.remove(cssClass);

                _this._ngZone.run(function () {
                  return result.next({
                    target: event.target,
                    isAutofilled: false
                  });
                });
              }
            };

            this._ngZone.runOutsideAngular(function () {
              element.addEventListener('animationstart', listener, listenerOptions);
              element.classList.add('cdk-text-field-autofill-monitored');
            });

            this._monitoredElements.set(element, {
              subject: result,
              unlisten: function unlisten() {
                element.removeEventListener('animationstart', listener, listenerOptions);
              }
            });

            return result;
          }
        }, {
          key: "stopMonitoring",
          value: function stopMonitoring(elementOrRef) {
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);

            var info = this._monitoredElements.get(element);

            if (info) {
              info.unlisten();
              info.subject.complete();
              element.classList.remove('cdk-text-field-autofill-monitored');
              element.classList.remove('cdk-text-field-autofilled');

              this._monitoredElements["delete"](element);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this2 = this;

            this._monitoredElements.forEach(function (_info, element) {
              return _this2.stopMonitoring(element);
            });
          }
        }]);

        return AutofillMonitor;
      }();

      AutofillMonitor.ɵfac = function AutofillMonitor_Factory(t) {
        return new (t || AutofillMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      AutofillMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function AutofillMonitor_Factory() {
          return new AutofillMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
        },
        token: AutofillMonitor,
        providedIn: "root"
      });

      AutofillMonitor.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutofillMonitor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, null);
      })();
      /** A directive that can be used to monitor the autofill state of an input. */


      var CdkAutofill = /*#__PURE__*/function () {
        function CdkAutofill(_elementRef, _autofillMonitor) {
          _classCallCheck(this, CdkAutofill);

          this._elementRef = _elementRef;
          this._autofillMonitor = _autofillMonitor;
          /** Emits when the autofill state of the element changes. */

          this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(CdkAutofill, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this._autofillMonitor.monitor(this._elementRef).subscribe(function (event) {
              return _this3.cdkAutofill.emit(event);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._autofillMonitor.stopMonitoring(this._elementRef);
          }
        }]);

        return CdkAutofill;
      }();

      CdkAutofill.ɵfac = function CdkAutofill_Factory(t) {
        return new (t || CdkAutofill)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AutofillMonitor));
      };

      CdkAutofill.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkAutofill,
        selectors: [["", "cdkAutofill", ""]],
        outputs: {
          cdkAutofill: "cdkAutofill"
        }
      });

      CdkAutofill.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: AutofillMonitor
        }];
      };

      CdkAutofill.propDecorators = {
        cdkAutofill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkAutofill, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkAutofill]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: AutofillMonitor
          }];
        }, {
          cdkAutofill: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
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

      /** Directive to automatically resize a textarea to fit its content. */


      var CdkTextareaAutosize = /*#__PURE__*/function () {
        function CdkTextareaAutosize(_elementRef, _platform, _ngZone,
        /** @breaking-change 11.0.0 make document required */
        document) {
          _classCallCheck(this, CdkTextareaAutosize);

          this._elementRef = _elementRef;
          this._platform = _platform;
          this._ngZone = _ngZone;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this._enabled = true;
          /**
           * Value of minRows as of last resize. If the minRows has decreased, the
           * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
           * does not have the same problem because it does not affect the textarea's scrollHeight.
           */

          this._previousMinRows = -1;
          this._document = document;
          this._textareaElement = this._elementRef.nativeElement;
          this._measuringClass = _platform.FIREFOX ? 'cdk-textarea-autosize-measuring-firefox' : 'cdk-textarea-autosize-measuring';
        }
        /** Minimum amount of rows in the textarea. */


        _createClass(CdkTextareaAutosize, [{
          key: "_setMinHeight",

          /** Sets the minimum height of the textarea as determined by minRows. */
          value: function _setMinHeight() {
            var minHeight = this.minRows && this._cachedLineHeight ? "".concat(this.minRows * this._cachedLineHeight, "px") : null;

            if (minHeight) {
              this._textareaElement.style.minHeight = minHeight;
            }
          }
          /** Sets the maximum height of the textarea as determined by maxRows. */

        }, {
          key: "_setMaxHeight",
          value: function _setMaxHeight() {
            var maxHeight = this.maxRows && this._cachedLineHeight ? "".concat(this.maxRows * this._cachedLineHeight, "px") : null;

            if (maxHeight) {
              this._textareaElement.style.maxHeight = maxHeight;
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            if (this._platform.isBrowser) {
              // Remember the height which we started with in case autosizing is disabled
              this._initialHeight = this._textareaElement.style.height;
              this.resizeToFitContent();

              this._ngZone.runOutsideAngular(function () {
                var window = _this4._getWindow();

                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this4._destroyed)).subscribe(function () {
                  return _this4.resizeToFitContent(true);
                });
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
          /**
           * Cache the height of a single-row textarea if it has not already been cached.
           *
           * We need to know how large a single "row" of a textarea is in order to apply minRows and
           * maxRows. For the initial version, we will assume that the height of a single line in the
           * textarea does not ever change.
           */

        }, {
          key: "_cacheTextareaLineHeight",
          value: function _cacheTextareaLineHeight() {
            if (this._cachedLineHeight) {
              return;
            } // Use a clone element because we have to override some styles.


            var textareaClone = this._textareaElement.cloneNode(false);

            textareaClone.rows = 1; // Use `position: absolute` so that this doesn't cause a browser layout and use
            // `visibility: hidden` so that nothing is rendered. Clear any other styles that
            // would affect the height.

            textareaClone.style.position = 'absolute';
            textareaClone.style.visibility = 'hidden';
            textareaClone.style.border = 'none';
            textareaClone.style.padding = '0';
            textareaClone.style.height = '';
            textareaClone.style.minHeight = '';
            textareaClone.style.maxHeight = ''; // In Firefox it happens that textarea elements are always bigger than the specified amount
            // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
            // As a workaround that removes the extra space for the scrollbar, we can just set overflow
            // to hidden. This ensures that there is no invalid calculation of the line height.
            // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654

            textareaClone.style.overflow = 'hidden';

            this._textareaElement.parentNode.appendChild(textareaClone);

            this._cachedLineHeight = textareaClone.clientHeight;

            this._textareaElement.parentNode.removeChild(textareaClone); // Min and max heights have to be re-calculated if the cached line height changes


            this._setMinHeight();

            this._setMaxHeight();
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this._platform.isBrowser) {
              this.resizeToFitContent();
            }
          }
          /**
           * Resize the textarea to fit its content.
           * @param force Whether to force a height recalculation. By default the height will be
           *    recalculated only if the value changed since the last call.
           */

        }, {
          key: "resizeToFitContent",
          value: function resizeToFitContent() {
            var _this5 = this;

            var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            // If autosizing is disabled, just skip everything else
            if (!this._enabled) {
              return;
            }

            this._cacheTextareaLineHeight(); // If we haven't determined the line-height yet, we know we're still hidden and there's no point
            // in checking the height of the textarea.


            if (!this._cachedLineHeight) {
              return;
            }

            var textarea = this._elementRef.nativeElement;
            var value = textarea.value; // Only resize if the value or minRows have changed since these calculations can be expensive.

            if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
              return;
            }

            var placeholderText = textarea.placeholder; // Reset the textarea height to auto in order to shrink back to its default size.
            // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
            // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
            // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
            // need to be removed temporarily.

            textarea.classList.add(this._measuringClass);
            textarea.placeholder = ''; // The measuring class includes a 2px padding to workaround an issue with Chrome,
            // so we account for that extra space here by subtracting 4 (2px top + 2px bottom).

            var height = textarea.scrollHeight - 4; // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.

            textarea.style.height = "".concat(height, "px");
            textarea.classList.remove(this._measuringClass);
            textarea.placeholder = placeholderText;

            this._ngZone.runOutsideAngular(function () {
              if (typeof requestAnimationFrame !== 'undefined') {
                requestAnimationFrame(function () {
                  return _this5._scrollToCaretPosition(textarea);
                });
              } else {
                setTimeout(function () {
                  return _this5._scrollToCaretPosition(textarea);
                });
              }
            });

            this._previousValue = value;
            this._previousMinRows = this._minRows;
          }
          /**
           * Resets the textarea to its original size
           */

        }, {
          key: "reset",
          value: function reset() {
            // Do not try to change the textarea, if the initialHeight has not been determined yet
            // This might potentially remove styles when reset() is called before ngAfterViewInit
            if (this._initialHeight !== undefined) {
              this._textareaElement.style.height = this._initialHeight;
            }
          } // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
          // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
          // can move this back into `host`.
          // tslint:disable:no-host-decorator-in-concrete

        }, {
          key: "_noopInputHandler",
          value: function _noopInputHandler() {// no-op handler that ensures we're running change detection on input events.
          }
          /** Access injected document if available or fallback to global document reference */

        }, {
          key: "_getDocument",
          value: function _getDocument() {
            return this._document || document;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var doc = this._getDocument();

            return doc.defaultView || window;
          }
          /**
           * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
           * prevent it from scrolling to the caret position. We need to re-set the selection
           * in order for it to scroll to the proper position.
           */

        }, {
          key: "_scrollToCaretPosition",
          value: function _scrollToCaretPosition(textarea) {
            var selectionStart = textarea.selectionStart,
                selectionEnd = textarea.selectionEnd;

            var document = this._getDocument(); // IE will throw an "Unspecified error" if we try to set the selection range after the
            // element has been removed from the DOM. Assert that the directive hasn't been destroyed
            // between the time we requested the animation frame and when it was executed.
            // Also note that we have to assert that the textarea is focused before we set the
            // selection range. Setting the selection range on a non-focused textarea will cause
            // it to receive focus on IE and Edge.


            if (!this._destroyed.isStopped && document.activeElement === textarea) {
              textarea.setSelectionRange(selectionStart, selectionEnd);
            }
          }
        }, {
          key: "minRows",
          get: function get() {
            return this._minRows;
          },
          set: function set(value) {
            this._minRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

            this._setMinHeight();
          }
          /** Maximum amount of rows in the textarea. */

        }, {
          key: "maxRows",
          get: function get() {
            return this._maxRows;
          },
          set: function set(value) {
            this._maxRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

            this._setMaxHeight();
          }
          /** Whether autosizing is enabled or not */

        }, {
          key: "enabled",
          get: function get() {
            return this._enabled;
          },
          set: function set(value) {
            value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); // Only act if the actual value changed. This specifically helps to not run
            // resizeToFitContent too early (i.e. before ngAfterViewInit)

            if (this._enabled !== value) {
              (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
            }
          }
        }]);

        return CdkTextareaAutosize;
      }();

      CdkTextareaAutosize.ɵfac = function CdkTextareaAutosize_Factory(t) {
        return new (t || CdkTextareaAutosize)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      };

      CdkTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkTextareaAutosize,
        selectors: [["textarea", "cdkTextareaAutosize", ""]],
        hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
        hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function CdkTextareaAutosize_input_HostBindingHandler() {
              return ctx._noopInputHandler();
            });
          }
        },
        inputs: {
          minRows: ["cdkAutosizeMinRows", "minRows"],
          maxRows: ["cdkAutosizeMaxRows", "maxRows"],
          enabled: ["cdkTextareaAutosize", "enabled"]
        },
        exportAs: ["cdkTextareaAutosize"]
      });

      CdkTextareaAutosize.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      };

      CdkTextareaAutosize.propDecorators = {
        minRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAutosizeMinRows']
        }],
        maxRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAutosizeMaxRows']
        }],
        enabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTextareaAutosize']
        }],
        _noopInputHandler: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['input']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkTextareaAutosize, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'textarea[cdkTextareaAutosize]',
            exportAs: 'cdkTextareaAutosize',
            host: {
              'class': 'cdk-textarea-autosize',
              // Textarea elements that have the directive applied should have a single row by default.
              // Browsers normally show two rows by default and therefore this limits the minRows binding.
              'rows': '1'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }];
        }, {
          minRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkAutosizeMinRows']
          }],
          maxRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkAutosizeMaxRows']
          }],
          enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkTextareaAutosize']
          }],
          // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
          // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
          // can move this back into `host`.
          // tslint:disable:no-host-decorator-in-concrete
          _noopInputHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['input']
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


      var TextFieldModule = function TextFieldModule() {
        _classCallCheck(this, TextFieldModule);
      };

      TextFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: TextFieldModule
      });
      TextFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function TextFieldModule_Factory(t) {
          return new (t || TextFieldModule)();
        },
        imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TextFieldModule, {
          declarations: function declarations() {
            return [CdkAutofill, CdkTextareaAutosize];
          },
          imports: function imports() {
            return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]];
          },
          exports: function exports() {
            return [CdkAutofill, CdkTextareaAutosize];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TextFieldModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [CdkAutofill, CdkTextareaAutosize],
            imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
            exports: [CdkAutofill, CdkTextareaAutosize]
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
      //# sourceMappingURL=text-field.js.map

      /***/

    },

    /***/
    "qFsG":
    /*!***********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js ***!
      \***********************************************************************/

    /*! exports provided: MAT_INPUT_VALUE_ACCESSOR, MatInput, MatInputModule, MatTextareaAutosize, getMatInputUnsupportedTypeError */

    /***/
    function qFsG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function () {
        return MAT_INPUT_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatInput", function () {
        return MatInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatInputModule", function () {
        return MatInputModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function () {
        return MatTextareaAutosize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function () {
        return getMatInputUnsupportedTypeError;
      });
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "8sFK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Directive to automatically resize a textarea to fit its content.
       * @deprecated Use `cdkTextareaAutosize` from `@angular/cdk/text-field` instead.
       * @breaking-change 8.0.0
       */


      var MatTextareaAutosize = /*#__PURE__*/function (_angular_cdk_text_fie) {
        _inherits(MatTextareaAutosize, _angular_cdk_text_fie);

        var _super = _createSuper(MatTextareaAutosize);

        function MatTextareaAutosize() {
          _classCallCheck(this, MatTextareaAutosize);

          return _super.apply(this, arguments);
        }

        _createClass(MatTextareaAutosize, [{
          key: "matAutosizeMinRows",
          get: function get() {
            return this.minRows;
          },
          set: function set(value) {
            this.minRows = value;
          }
        }, {
          key: "matAutosizeMaxRows",
          get: function get() {
            return this.maxRows;
          },
          set: function set(value) {
            this.maxRows = value;
          }
        }, {
          key: "matAutosize",
          get: function get() {
            return this.enabled;
          },
          set: function set(value) {
            this.enabled = value;
          }
        }, {
          key: "matTextareaAutosize",
          get: function get() {
            return this.enabled;
          },
          set: function set(value) {
            this.enabled = value;
          }
        }]);

        return MatTextareaAutosize;
      }(_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["CdkTextareaAutosize"]);

      MatTextareaAutosize.ɵfac = function MatTextareaAutosize_Factory(t) {
        return ɵMatTextareaAutosize_BaseFactory(t || MatTextareaAutosize);
      };

      MatTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatTextareaAutosize,
        selectors: [["textarea", "mat-autosize", ""], ["textarea", "matTextareaAutosize", ""]],
        hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize", "mat-autosize"],
        inputs: {
          cdkAutosizeMinRows: "cdkAutosizeMinRows",
          cdkAutosizeMaxRows: "cdkAutosizeMaxRows",
          matAutosizeMinRows: "matAutosizeMinRows",
          matAutosizeMaxRows: "matAutosizeMaxRows",
          matAutosize: ["mat-autosize", "matAutosize"],
          matTextareaAutosize: "matTextareaAutosize"
        },
        exportAs: ["matTextareaAutosize"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
      });
      MatTextareaAutosize.propDecorators = {
        matAutosizeMinRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        matAutosizeMaxRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        matAutosize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['mat-autosize']
        }],
        matTextareaAutosize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };

      var ɵMatTextareaAutosize_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTextareaAutosize);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTextareaAutosize, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
            exportAs: 'matTextareaAutosize',
            inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
            host: {
              'class': 'cdk-textarea-autosize mat-autosize',
              // Textarea elements that have the directive applied should have a single row by default.
              // Browsers normally show two rows by default and therefore this limits the minRows binding.
              'rows': '1'
            }
          }]
        }], null, {
          matAutosizeMinRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          matAutosizeMaxRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          matAutosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mat-autosize']
          }],
          matTextareaAutosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
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

      /** @docs-private */


      function getMatInputUnsupportedTypeError(type) {
        return Error("Input type \"".concat(type, "\" isn't supported by matInput."));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * This token is used to inject the object whose value should be set into `MatInput`. If none is
       * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
       * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
       * value to them.
       */


      var MAT_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_INPUT_VALUE_ACCESSOR');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.

      var MAT_INPUT_INVALID_TYPES = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'];
      var nextUniqueId = 0; // Boilerplate for applying mixins to MatInput.

      /** @docs-private */

      var MatInputBase = function MatInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup,
      /** @docs-private */
      ngControl) {
        _classCallCheck(this, MatInputBase);

        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
      };

      var _MatInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinErrorState"])(MatInputBase);
      /** Directive that allows a native input to work inside a `MatFormField`. */


      var MatInput = /*#__PURE__*/function (_MatInputMixinBase2) {
        _inherits(MatInput, _MatInputMixinBase2);

        var _super2 = _createSuper(MatInput);

        function MatInput(_elementRef, _platform,
        /** @docs-private */
        ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone, // TODO: Remove this once the legacy appearance has been removed. We only need
        // to inject the form-field for determining whether the placeholder has been promoted.
        _formField) {
          var _this6;

          _classCallCheck(this, MatInput);

          _this6 = _super2.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
          _this6._elementRef = _elementRef;
          _this6._platform = _platform;
          _this6.ngControl = ngControl;
          _this6._autofillMonitor = _autofillMonitor;
          _this6._formField = _formField;
          _this6._uid = "mat-input-".concat(nextUniqueId++);
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this6.focused = false;
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this6.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this6.controlType = 'mat-input';
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this6.autofilled = false;
          _this6._disabled = false;
          _this6._required = false;
          _this6._type = 'text';
          _this6._readonly = false;
          _this6._neverEmptyInputTypes = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week'].filter(function (t) {
            return Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(t);
          });
          var element = _this6._elementRef.nativeElement;
          var nodeName = element.nodeName.toLowerCase(); // If no input value accessor was explicitly specified, use the element as the input value
          // accessor.

          _this6._inputValueAccessor = inputValueAccessor || element;
          _this6._previousNativeValue = _this6.value; // Force setter to be called in case id was not specified.

          _this6.id = _this6.id; // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
          // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
          // exists on iOS, we only bother to install the listener on iOS.

          if (_platform.IOS) {
            ngZone.runOutsideAngular(function () {
              _elementRef.nativeElement.addEventListener('keyup', function (event) {
                var el = event.target;

                if (!el.value && !el.selectionStart && !el.selectionEnd) {
                  // Note: Just setting `0, 0` doesn't fix the issue. Setting
                  // `1, 1` fixes it for the first time that you type text and
                  // then hold delete. Toggling to `1, 1` and then back to
                  // `0, 0` seems to completely fix it.
                  el.setSelectionRange(1, 1);
                  el.setSelectionRange(0, 0);
                }
              });
            });
          }

          _this6._isServer = !_this6._platform.isBrowser;
          _this6._isNativeSelect = nodeName === 'select';
          _this6._isTextarea = nodeName === 'textarea';

          if (_this6._isNativeSelect) {
            _this6.controlType = element.multiple ? 'mat-native-select-multiple' : 'mat-native-select';
          }

          return _this6;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */


        _createClass(MatInput, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this7 = this;

            if (this._platform.isBrowser) {
              this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(function (event) {
                _this7.autofilled = event.isAutofilled;

                _this7.stateChanges.next();
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.stateChanges.next();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stateChanges.complete();

            if (this._platform.isBrowser) {
              this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
            }
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.ngControl) {
              // We need to re-evaluate this on every change detection cycle, because there are some
              // error triggers that we can't subscribe to (e.g. parent form submissions). This means
              // that whatever logic is in here has to be super lean or we risk destroying the performance.
              this.updateErrorState();
            } // We need to dirty-check the native element's value, because there are some cases where
            // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
            // updating the value using `emitEvent: false`).


            this._dirtyCheckNativeValue(); // We need to dirty-check and set the placeholder attribute ourselves, because whether it's
            // present or not depends on a query which is prone to "changed after checked" errors.


            this._dirtyCheckPlaceholder();
          }
          /** Focuses the input. */

        }, {
          key: "focus",
          value: function focus(options) {
            this._elementRef.nativeElement.focus(options);
          } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.

          /** Callback for the cases where the focused state of the input changes. */
          // tslint:disable:no-host-decorator-in-concrete
          // tslint:enable:no-host-decorator-in-concrete

        }, {
          key: "_focusChanged",
          value: function _focusChanged(isFocused) {
            if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
              this.focused = isFocused;
              this.stateChanges.next();
            }
          } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete

        }, {
          key: "_onInput",
          value: function _onInput() {// This is a noop function and is used to let Angular know whenever the value changes.
            // Angular will run a new change detection each time the `input` event has been dispatched.
            // It's necessary that Angular recognizes the value change, because when floatingLabel
            // is set to false and Angular forms aren't used, the placeholder won't recognize the
            // value changes and will not disappear.
            // Listening to the input event wouldn't be necessary when the input is using the
            // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
          }
          /** Does some manual dirty checking on the native input `placeholder` attribute. */

        }, {
          key: "_dirtyCheckPlaceholder",
          value: function _dirtyCheckPlaceholder() {
            var _a, _b; // If we're hiding the native placeholder, it should also be cleared from the DOM, otherwise
            // screen readers will read it out twice: once from the label and once from the attribute.
            // TODO: can be removed once we get rid of the `legacy` style for the form field, because it's
            // the only one that supports promoting the placeholder to a label.


            var placeholder = ((_b = (_a = this._formField) === null || _a === void 0 ? void 0 : _a._hideControlPlaceholder) === null || _b === void 0 ? void 0 : _b.call(_a)) ? null : this.placeholder;

            if (placeholder !== this._previousPlaceholder) {
              var element = this._elementRef.nativeElement;
              this._previousPlaceholder = placeholder;
              placeholder ? element.setAttribute('placeholder', placeholder) : element.removeAttribute('placeholder');
            }
          }
          /** Does some manual dirty checking on the native input `value` property. */

        }, {
          key: "_dirtyCheckNativeValue",
          value: function _dirtyCheckNativeValue() {
            var newValue = this._elementRef.nativeElement.value;

            if (this._previousNativeValue !== newValue) {
              this._previousNativeValue = newValue;
              this.stateChanges.next();
            }
          }
          /** Make sure the input is a supported type. */

        }, {
          key: "_validateType",
          value: function _validateType() {
            if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatInputUnsupportedTypeError(this._type);
            }
          }
          /** Checks whether the input type is one of the types that are never empty. */

        }, {
          key: "_isNeverEmpty",
          value: function _isNeverEmpty() {
            return this._neverEmptyInputTypes.indexOf(this._type) > -1;
          }
          /** Checks whether the input is invalid based on the native validation. */

        }, {
          key: "_isBadInput",
          value: function _isBadInput() {
            // The `validity` property won't be present on platform-server.
            var validity = this._elementRef.nativeElement.validity;
            return validity && validity.badInput;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "setDescribedByIds",

          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */
          value: function setDescribedByIds(ids) {
            if (ids.length) {
              this._elementRef.nativeElement.setAttribute('aria-describedby', ids.join(' '));
            } else {
              this._elementRef.nativeElement.removeAttribute('aria-describedby');
            }
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "onContainerClick",
          value: function onContainerClick() {
            // Do not re-focus the input element if the element is already focused. Otherwise it can happen
            // that someone clicks on a time input and the cursor resets to the "hours" field while the
            // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
            if (!this.focused) {
              this.focus();
            }
          }
        }, {
          key: "disabled",
          get: function get() {
            if (this.ngControl && this.ngControl.disabled !== null) {
              return this.ngControl.disabled;
            }

            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); // Browsers may not fire the blur event if the input is disabled too quickly.
            // Reset from here to ensure that the element doesn't become stuck.

            if (this.focused) {
              this.focused = false;
              this.stateChanges.next();
            }
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(value) {
            this._id = value || this._uid;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
          /** Input type of the element. */

        }, {
          key: "type",
          get: function get() {
            return this._type;
          },
          set: function set(value) {
            this._type = value || 'text';

            this._validateType(); // When using Angular inputs, developers are no longer able to set the properties on the native
            // input element. To ensure that bindings for `type` work, we need to sync the setter
            // with the native property. Textarea elements don't support the type property or attribute.


            if (!this._isTextarea && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(this._type)) {
              this._elementRef.nativeElement.type = this._type;
            }
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "value",
          get: function get() {
            return this._inputValueAccessor.value;
          },
          set: function set(value) {
            if (value !== this.value) {
              this._inputValueAccessor.value = value;
              this.stateChanges.next();
            }
          }
          /** Whether the element is readonly. */

        }, {
          key: "readonly",
          get: function get() {
            return this._readonly;
          },
          set: function set(value) {
            this._readonly = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "empty",
          get: function get() {
            return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "shouldLabelFloat",
          get: function get() {
            if (this._isNativeSelect) {
              // For a single-selection `<select>`, the label should float when the selected option has
              // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
              // overlapping the label with the options.
              var selectElement = this._elementRef.nativeElement;
              var firstOption = selectElement.options[0]; // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
              // -1 if the `value` is set to something, that isn't in the list of options, at a later point.

              return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
            } else {
              return this.focused || !this.empty;
            }
          }
        }]);

        return MatInput;
      }(_MatInputMixinBase);

      MatInput.ɵfac = function MatInput_Factory(t) {
        return new (t || MatInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_INPUT_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD"], 8));
      };

      MatInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatInput,
        selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
        hostAttrs: [1, "mat-input-element", "mat-form-field-autofill-control"],
        hostVars: 9,
        hostBindings: function MatInput_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatInput_focus_HostBindingHandler() {
              return ctx._focusChanged(true);
            })("blur", function MatInput_blur_HostBindingHandler() {
              return ctx._focusChanged(false);
            })("input", function MatInput_input_HostBindingHandler() {
              return ctx._onInput();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("disabled", ctx.disabled)("required", ctx.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id)("data-placeholder", ctx.placeholder)("readonly", ctx.readonly && !ctx._isNativeSelect || null)("aria-invalid", ctx.errorState)("aria-required", ctx.required.toString());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-input-server", ctx._isServer);
          }
        },
        inputs: {
          id: "id",
          disabled: "disabled",
          required: "required",
          type: "type",
          value: "value",
          readonly: "readonly",
          placeholder: "placeholder",
          errorStateMatcher: "errorStateMatcher",
          userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"]
        },
        exportAs: ["matInput"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"],
          useExisting: MatInput
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      MatInput.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_INPUT_VALUE_ACCESSOR]
          }]
        }, {
          type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD"]]
          }]
        }];
      };

      MatInput.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        userAriaDescribedBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-describedby']
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _focusChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['focus', ['true']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['blur', ['false']]
        }],
        _onInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['input']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: "input[matInput], textarea[matInput], select[matNativeControl],\n      input[matNativeControl], textarea[matNativeControl]",
            exportAs: 'matInput',
            host: {
              /**
               * @breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
               */
              'class': 'mat-input-element mat-form-field-autofill-control',
              '[class.mat-input-server]': '_isServer',
              // Native input properties that are overwritten by Angular inputs need to be synced with
              // the native input element. Otherwise property bindings for those don't work.
              '[attr.id]': 'id',
              // At the time of writing, we have a lot of customer tests that look up the input based on its
              // placeholder. Since we sometimes omit the placeholder attribute from the DOM to prevent screen
              // readers from reading it twice, we have to keep it somewhere in the DOM for the lookup.
              '[attr.data-placeholder]': 'placeholder',
              '[disabled]': 'disabled',
              '[required]': 'required',
              '[attr.readonly]': 'readonly && !_isNativeSelect || null',
              '[attr.aria-invalid]': 'errorState',
              '[attr.aria-required]': 'required.toString()'
            },
            providers: [{
              provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"],
              useExisting: MatInput
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MAT_INPUT_VALUE_ACCESSOR]
            }]
          }, {
            type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD"]]
            }]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.

          /** Callback for the cases where the focused state of the input changes. */
          // tslint:disable:no-host-decorator-in-concrete
          // tslint:enable:no-host-decorator-in-concrete
          _focusChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['focus', ['true']]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['blur', ['false']]
          }],
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete
          _onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['input']
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          userAriaDescribedBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-describedby']
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


      var MatInputModule = function MatInputModule() {
        _classCallCheck(this, MatInputModule);
      };

      MatInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatInputModule
      });
      MatInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MatInputModule_Factory(t) {
          return new (t || MatInputModule)();
        },
        providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]],
        imports: [[_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
        // be used together with `MatFormField`.
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatInputModule, {
          declarations: function declarations() {
            return [MatInput, MatTextareaAutosize];
          },
          imports: function imports() {
            return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
            // be used together with `MatFormField`.
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], MatInput, MatTextareaAutosize];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInputModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [MatInput, MatTextareaAutosize],
            imports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]],
            exports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
            // be used together with `MatFormField`.
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], MatInput, MatTextareaAutosize],
            providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]]
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
      //# sourceMappingURL=input.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~layouts-akun-akun-module~layouts-default-default-module~modules-mhs-datamhs-module-es5.js.map