(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bar/bar-add/bar-add.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bar/bar-add/bar-add.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container row \">\n  <div class=\"col-sm-6\">\n      <form [formGroup]=\"FormBar\" #formDir=\"ngForm\" (ngSubmit)=\"onSubmit(formDir)\">\n\n          <div [hidden]=\"formDir.submitted\">\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"name\" class=\"col-sm-2 col-form-label\">Nom</label>\n            <div class=\"col-sm-10\">\n              <input id=\"name\" class=\"form-control \"\n                  formControlName=\"name\" required >\n\n              <div *ngIf=\"name.invalid && name.touched\" class=\"alert alert-danger name-errors\">\n                  Le nom est obligatoire\n              </div>\n            </div>\n          </div>\n            <div class=\"cross-validation\" [class.cross-validation-error]=\"(FormBar.touched || FormBar.dirty)\">\n              <div class=\"form-group row\">\n\n                <label for=\"email\" class=\"col-sm-2 col-form-label\">Email</label>\n                <div class=\"col-sm-10\">\n                  <input id=\"email\" class=\"form-control\"\n                  formControlName=\"email\"  required      >\n\n                  <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n                      class=\"alert alert-danger\">\n                      Le champ email est obligatoire\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-group row\">\n                <label for=\"password\" class=\"col-sm-2 col-form-label\">Password</label>\n                <div class=\"col-sm-10\">\n                  <input id=\"password\" type='password' class=\"form-control \"\n                      formControlName=\"password\" required >\n\n                  <div *ngIf=\"password.invalid && password.touched\" class=\"alert alert-danger password-errors\">\n                      Password est obligatoire\n                  </div>\n                </div>\n              </div>\n\n            </div>\n\n            <div class=\"form-group row\">\n              <label for=\"website\" class=\"col-sm-2 col-form-label\">Site Web</label>\n              <div class=\"col-sm-10\">\n                <input id=\"website\"  class=\"form-control \" >\n              </div>\n            </div>\n\n\n            <button type=\"submit\" class=\"btn btn-primary\"\n                   [disabled]=\"FormBar.invalid\">S'associer</button>\n            <button type=\"button\" class=\"btn btn-default\"\n                   (click)=\"formDir.resetForm({})\">Annuler</button>\n        </form>\n        <!--\n        <div class=\"submitted-message\" *ngIf=\"formDir.submitted\">\n          <p>You've submitted your hero, {{ FormBar.value.email }}!</p>\n          <button (click)=\"formDir.resetForm({})\">Add new hero</button>\n        </div>\n\n        -->\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bar/bar-list/bar-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bar/bar-list/bar-list.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spaced\" data-testid=\"filtering\">\n  <input type=\"text\" [(ngModel)]=\"filterInput\" name=\"filter-input\" (keyup)=\"onFilter()\" [placeholder]=\"\n    filterPlaceholder\" autocomplete=\"off\" class=\"form-control\"/>\n  <button type=\"button\" class=\"btn btn-success\"(click)=\"reset()\">clear</button>\n</div>\n<section *ngIf=\"bars$ | async as bars; else loading\" data-testid=\"display-bars\">\n  <fbapp-bar-thumbnail *ngFor=\"let bar of bars\" [bar]=\"bar\" (chose)=\"onSelectBar($event)\">\n  </fbapp-bar-thumbnail>\n</section>\n<ng-template #loading>\n  <fbapp-loader center></fbapp-loader>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bar/bar-thumbnail/bar-thumbnail.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bar/bar-thumbnail/bar-thumbnail.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" [class.favorite]=\"isFavorite\" (click)=\"openBarDetails()\" *ngIf=\"bar\">\n\n  <div class=\"content\">\n    <h3>{{bar.name}}</h3>\n  <span>{{bar.webSite}}</span>\n  <button class=\"snipcart-add-item btn btn-lg btn-success\"\n  type=\"button\"\n  data-item-name=\"moi\"\n  data-item-price=\"15\"\n  data-item-id=\"12365\"\n  data-item-description=\"moi moi moi\">\n    Acheter <span class=\"glyphicon glyphicon-ok\"></span>\n  </button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/root/footer/footer.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/root/footer/footer.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"container\">\n  <div class=\"row\">\n        <!-- Copyright -->\n        <div class=\"col\">\n          © 2019 Copyright\n        </div>\n        <!-- Copyright -->\n  </div>\n\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/root/home/home.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/root/home/home.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <div class=\"container row\">\n        <div class=\"col-sm-10\">\n            <h1 class=\"padded text-center\">Welcome Bar Cocktail!</h1>\n\n            <div class=\"text-center padded\">\n              <ng-container *ngIf=\"user; else login\">\n                    <h2>Welcome {{ user.firstName }}!</h2>\n              </ng-container>\n              <ng-template #login>\n                      <button type=\"button\" class=\"btn btn-default\" primary routerLink=\"/user/login\">Se connecter</button>\n              </ng-template>\n\n\n            </div>\n\n        </div>\n    </div>\n\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/root/nav/nav.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/root/nav/nav.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n    <a class=\"navbar-brand\" routerLink=\"/\">{{ pageName }}</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n          <ul class=\"nav navbar-nav mr-auto\">\n              <li class=\"nav-item active\">\n                <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n              </li>\n\n              <!--<li><span *ngIf=\"user; else login\">{{ user.firstName }}</span></li> -->\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/user/login\" secondary>Se connecter</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/user/register\" secondary>S'inscrire</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/bar/partners\" secondary>Partenaire</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/bar/ListBar\" secondary>Liste des bars</a>\n              </li>\n              <li class=\"nav-item\">\n\n                <a class=\"snipcart-checkout nav-link\" ><span class=\"fas fa-shopping-cart\"></span><span class=\"snipcart-items-count\"></span></a>\n              </li>\n\n          </ul>\n          <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Recherche\" aria-label=\"Search\">\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Recherche</button>          </form>\n\n      </div>\n\n  </nav>\n</header>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container row \">\n  <div class=\"col-sm-6\">\n      <form [formGroup]=\"FormLogin\" #formDir=\"ngForm\" (ngSubmit)=\"onSubmit(formDir)\">\n\n          <div [hidden]=\"formDir.submitted\">\n          </div>\n\n            <div class=\"cross-validation\" [class.cross-validation-error]=\"(FormLogin.touched || FormLogin.dirty)\">\n              <div class=\"form-group row\">\n\n                <label for=\"email\" class=\"col-sm-2 col-form-label\">Email</label>\n                <div class=\"col-sm-10\">\n                  <input id=\"email\" class=\"form-control\"\n                  formControlName=\"email\"  required      >\n\n                  <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n                      class=\"alert alert-danger\">\n\n                    <div *ngIf=\"email.errors.required\">\n                      Le champ email est obligatoire.\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-group row\">\n                <label for=\"password\" class=\"col-sm-2 col-form-label\">Password</label>\n                <div class=\"col-sm-10\">\n                  <input id=\"password\" type='password' class=\"form-control \"\n                      formControlName=\"password\" required >\n\n                  <div *ngIf=\"password.invalid && password.touched\" class=\"alert alert-danger password-errors\">\n                    <div *ngIf=\"password.errors.required\">\n                      Password n'est pas valable\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n\n\n            <button type=\"submit\" class=\"btn btn-primary\"\n                   [disabled]=\"FormLogin.invalid\">Se connecter</button>\n            <button type=\"button\" class=\"btn btn-default\"\n                   (click)=\"formDir.resetForm({})\">Annuler</button>\n        </form>\n        <!--\n        <div class=\"submitted-message\" *ngIf=\"formDir.submitted\">\n          <p>You've submitted your hero, {{ FormLogin.value.email }}!</p>\n          <button (click)=\"formDir.resetForm({})\">Add new hero</button>\n        </div>\n\n        -->\n\n  </div>\n  <p class=\"error\">{{ firstName$ | async }}</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/register/register.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/register/register.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container row\">\n    <div class=\"col-sm-6\">\n        <form [formGroup]=\"FormRegister\" #formDir=\"ngForm\" (ngSubmit)=\"onSubmit(formDir)\">\n\n              <div class=\"cross-validation\" [class.cross-validation-error]=\"(FormRegister.touched || FormRegister.dirty)\">\n                <div class=\"form-group row\">\n\n                  <label for=\"email\" class=\"col-sm-2 col-form-label\">Email</label>\n                  <div class=\"col-sm-10\">\n                    <input id=\"email\" class=\"form-control\"\n                    formControlName=\"email\"  required      >\n\n                    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n                        class=\"alert alert-danger\">\n\n                      <div *ngIf=\"email.errors.required\">\n                        Le champ email est obligatoire.\n                      </div>\n                      <div *ngIf=\"email.errors.minlength\">\n                        Email must be at least 4 characters long.\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n\n                  <label for=\"pseudo\" class=\"col-sm-2 col-form-label\">Pseudo</label>\n                  <div class=\"col-sm-10\">\n                    <input id=\"pseudo\" class=\"form-control\"\n                    formControlName=\"pseudo\"  required      >\n\n                    <div *ngIf=\"pseudo.invalid && (pseudo.dirty || pseudo.touched)\"\n                        class=\"alert alert-danger\">\n\n                      <div *ngIf=\"pseudo.errors.required\">\n                        Le champ pseudo est obligatoire.\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label for=\"password\" class=\"col-sm-2 col-form-label\">Password</label>\n                  <div class=\"col-sm-10\">\n                    <input id=\"password\" type=\"password\" class=\"form-control\"\n                        formControlName=\"password\" required >\n\n                    <div *ngIf=\"password.invalid && password.touched\" class=\"alert alert-danger password-errors\">\n                      <div *ngIf=\"password.errors.required\">\n                        Password n'est pas valable\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n              <div class=\"form-group row\">\n                  <div class=\"file-field\">\n                    <a class=\"btn-floating mt-0 float-left\">\n                      <i class=\"fas fa-paperclip\" aria-hidden=\"true\"></i>\n                      <input #fileSelector type=\"file\" accept=\"image/png, image/jpeg\" (change)=\"onFileChange($event)\">\n                    </a>\n                    <div class=\"file-path-wrapper\">\n                      <input class=\"file-path validate\" type=\"text\" placeholder=\"Upload your file\">\n                    </div>\n                  </div>\n                  <div #canvasContainer class=\"canvasContainer\">\n                    <canvas #canvas></canvas>\n                  </div>\n                  <div *ngIf=\"age.invalid && age.touched\" class=\"alert alert-danger\">\n                    <div *ngIf=\"age.errors.required\">Age est obligatoire.</div>\n                  </div>\n\n              </div>\n              <button type=\"submit\" class=\"btn btn-primary\"\n                     [disabled]=\"FormRegister.invalid\">Enregistrer</button>\n              <button type=\"button\" class=\"btn btn-default\"\n                     (click)=\"formDir.resetForm({})\">Annuler</button>\n          </form>\n\n            </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '', pathMatch: 'full', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./root/root.module */ "./src/app/root/root.module.ts")).then(m => m.RootModule) },
    { path: 'user', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./user/user.module */ "./src/app/user/user.module.ts")).then(m => m.UserModule) },
    { path: 'bar', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./bar/bar.module */ "./src/app/bar/bar.module.ts")).then(m => m.BarModule) },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.activatedPageName = 'fbappapp';
    }
    onRouteActivated(activatedPage) {
        this.activatedPageName = activatedPage.pageTitle;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fbapp-root',
        template: `
  <fbapp-nav [pageName]="activatedPageName"></fbapp-nav>
  <div class="app-container main">

    <router-outlet (activate)="onRouteActivated($event)" ></router-outlet>

  </div>
  <fbapp-footer></fbapp-footer>

`
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _root_root_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root/root.module */ "./src/app/root/root.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _root_root_module__WEBPACK_IMPORTED_MODULE_5__["RootModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_7__["UserModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bar/Bar.ts":
/*!****************************!*\
  !*** ./src/app/bar/Bar.ts ***!
  \****************************/
/*! exports provided: Bar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return Bar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Bar {
    constructor(id, name, paswword, menu, webSite, createDate, stock, email) {
        this.id = id;
        this.name = name;
        this.paswword = paswword;
        this.menu = menu;
        this.webSite = webSite;
        this.createDate = createDate;
        this.stock = stock;
        this.email = email;
    }
    static NEW(data) {
        return new Bar(data.id, data.name, data.password, data.menu, data.webSite, data.createDate, data.stock, data.email);
    }
    static NEW_BUNCH(data) {
        return data.map(Bar.NEW);
    }
    nameStartsWith(proposal) {
        console.log(proposal);
        const normalizedName = (this.name || '').toLowerCase();
        console.log(normalizedName);
        const normalizedTest = (proposal || '').toLowerCase();
        return normalizedName.startsWith(normalizedTest);
    }
}


/***/ }),

/***/ "./src/app/bar/bar-add/bar-add.component.scss":
/*!****************************************************!*\
  !*** ./src/app/bar/bar-add/bar-add.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci9iYXItYWRkL2Jhci1hZGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/bar/bar-add/bar-add.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bar/bar-add/bar-add.component.ts ***!
  \**************************************************/
/*! exports provided: BarAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarAddComponent", function() { return BarAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bar.service */ "./src/app/bar/bar.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let BarAddComponent = class BarAddComponent {
    constructor(barService, router, http) {
        this.barService = barService;
        this.router = router;
        this.http = http;
        this.pageTitle = 'Partenariat';
    }
    ngOnInit() {
        this.FormBar = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
            ]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
            ]),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
        }); // <-- add custom validator at the FormGroup level
        this.requesting = false;
    }
    get email() { return this.FormBar.get('email'); }
    get name() { return this.FormBar.get('name'); }
    get password() { return this.FormBar.get('password'); }
    goToHome() {
        this.router.navigateByUrl('/');
    }
    onSubmit(formDir) {
        const formRes = formDir.value;
        this.barService.add(formRes);
        this.goToHome();
    }
    ;
};
BarAddComponent.ctorParameters = () => [
    { type: _bar_service__WEBPACK_IMPORTED_MODULE_4__["BarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
BarAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fbapp-bar-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bar-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bar/bar-add/bar-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bar-add.component.scss */ "./src/app/bar/bar-add/bar-add.component.scss")).default]
    })
], BarAddComponent);

/*id?: number;
name?: string;
password?: string;
menu ?: [ string ];
email?: string;
webSite?: number;
createDate?: Date;
deleteDate?: Date;
stock?: [string];*/


/***/ }),

/***/ "./src/app/bar/bar-list/bar-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/bar/bar-list/bar-list.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 1rem;\n  grid-auto-rows: 250px;\n}\n\ninput {\n  padding: 0.5rem;\n  margin-right: 1rem;\n}\n\ninput:active, input:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFyL2Jhci1saXN0L0M6XFxVc2Vyc1xcU3RlcGhhbmVcXERvY3VtZW50c1xcRVNHSVxcSlNcXEFuZ3VsYXJcXGZvb2Jhci9zcmNcXGFwcFxcYmFyXFxiYXItbGlzdFxcYmFyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jhci9iYXItbGlzdC9iYXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw0REFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQUU7RUFDRSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9iYXIvYmFyLWxpc3QvYmFyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICBncmlkLWdhcDogMXJlbTtcclxuICBncmlkLWF1dG8tcm93czogMjUwcHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICY6YWN0aXZlLCAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiIsInNlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIGdyaWQtZ2FwOiAxcmVtO1xuICBncmlkLWF1dG8tcm93czogMjUwcHg7XG59XG5cbmlucHV0IHtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5pbnB1dDphY3RpdmUsIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/bar/bar-list/bar-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/bar/bar-list/bar-list.component.ts ***!
  \****************************************************/
/*! exports provided: BarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarListComponent", function() { return BarListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bar.service */ "./src/app/bar/bar.service.ts");
/* harmony import */ var src_app_shared_data_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/data-loader.service */ "./src/app/shared/data-loader.service.ts");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");





let BarListComponent = class BarListComponent {
    constructor(barService, barsLoaderService, userService) {
        this.barService = barService;
        this.barsLoaderService = barsLoaderService;
        this.userService = userService;
        this.pageTitle = 'Liste des bars';
        this.filterPlaceholder = 'Filtrer par nom';
    }
    ngOnInit() {
        this.initBarsLoader();
        this.listBars();
    }
    onFilter() {
        this.barsLoaderService.transform(bars => {
            return bars.filter(bar => {
                return bar.nameStartsWith(this.filterInput);
            });
        });
    }
    reset() {
        this.barsLoaderService.reset();
        this.filterInput = '';
    }
    onSelectBar(bar) {
        alert(bar.name); /*if (this.userService.currentUser) {
          this.userService.addFavoriteCharacter(character.id).subscribe(() => {
            this.favoriteCharacterId = character.id;
          });
        }*/
    }
    /* private initFavoriteCharaterId(): void {
       const { currentUser } = this.userService;
       if (currentUser) {
         this.favoriteCharacterId = currentUser.favoriteCharacter;
       }
     }
   */
    initBarsLoader() {
        const bars$ = this.listBars();
        this.barsLoaderService.init(bars$);
        this.bars$ = this.barsLoaderService.stream$;
    }
    listBars() {
        return this.barService.getList();
    }
};
BarListComponent.ctorParameters = () => [
    { type: _bar_service__WEBPACK_IMPORTED_MODULE_2__["BarService"] },
    { type: src_app_shared_data_loader_service__WEBPACK_IMPORTED_MODULE_3__["DataLoaderService"] },
    { type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
BarListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bar-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bar/bar-list/bar-list.component.html")).default,
        providers: [src_app_shared_data_loader_service__WEBPACK_IMPORTED_MODULE_3__["DataLoaderService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bar-list.component.scss */ "./src/app/bar/bar-list/bar-list.component.scss")).default]
    })
], BarListComponent);



/***/ }),

/***/ "./src/app/bar/bar-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/bar/bar-routing.module.ts ***!
  \*******************************************/
/*! exports provided: BarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarRoutingModule", function() { return BarRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bar_add_bar_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-add/bar-add.component */ "./src/app/bar/bar-add/bar-add.component.ts");
/* harmony import */ var _bar_list_bar_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bar-list/bar-list.component */ "./src/app/bar/bar-list/bar-list.component.ts");





const routes = [
    { path: 'partners', component: _bar_add_bar_add_component__WEBPACK_IMPORTED_MODULE_3__["BarAddComponent"] },
    { path: 'ListBar', component: _bar_list_bar_list_component__WEBPACK_IMPORTED_MODULE_4__["BarListComponent"] }
];
let BarRoutingModule = class BarRoutingModule {
};
BarRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BarRoutingModule);



/***/ }),

/***/ "./src/app/bar/bar-thumbnail/bar-thumbnail.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/bar/bar-thumbnail/bar-thumbnail.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci9iYXItdGh1bWJuYWlsL2Jhci10aHVtYm5haWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/bar/bar-thumbnail/bar-thumbnail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/bar/bar-thumbnail/bar-thumbnail.component.ts ***!
  \**************************************************************/
/*! exports provided: BarThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarThumbnailComponent", function() { return BarThumbnailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BarThumbnailComponent = class BarThumbnailComponent {
    constructor() {
        this.chose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    openBarDetails() {
        this.chose.emit(this.bar);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BarThumbnailComponent.prototype, "bar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BarThumbnailComponent.prototype, "isFavorite", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BarThumbnailComponent.prototype, "chose", void 0);
BarThumbnailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fbapp-bar-thumbnail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bar-thumbnail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bar/bar-thumbnail/bar-thumbnail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bar-thumbnail.component.scss */ "./src/app/bar/bar-thumbnail/bar-thumbnail.component.scss")).default]
    })
], BarThumbnailComponent);



/***/ }),

/***/ "./src/app/bar/bar.module.ts":
/*!***********************************!*\
  !*** ./src/app/bar/bar.module.ts ***!
  \***********************************/
/*! exports provided: BarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarModule", function() { return BarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bar_add_bar_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-add/bar-add.component */ "./src/app/bar/bar-add/bar-add.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _bar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bar-routing.module */ "./src/app/bar/bar-routing.module.ts");
/* harmony import */ var _bar_list_bar_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bar-list/bar-list.component */ "./src/app/bar/bar-list/bar-list.component.ts");
/* harmony import */ var _bar_thumbnail_bar_thumbnail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bar-thumbnail/bar-thumbnail.component */ "./src/app/bar/bar-thumbnail/bar-thumbnail.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");









let BarModule = class BarModule {
};
BarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bar_add_bar_add_component__WEBPACK_IMPORTED_MODULE_3__["BarAddComponent"], _bar_list_bar_list_component__WEBPACK_IMPORTED_MODULE_6__["BarListComponent"], _bar_thumbnail_bar_thumbnail_component__WEBPACK_IMPORTED_MODULE_7__["BarThumbnailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bar_routing_module__WEBPACK_IMPORTED_MODULE_5__["BarRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ]
    })
], BarModule);



/***/ }),

/***/ "./src/app/bar/bar.service.ts":
/*!************************************!*\
  !*** ./src/app/bar/bar.service.ts ***!
  \************************************/
/*! exports provided: BarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarService", function() { return BarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bar */ "./src/app/bar/Bar.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let BarService = class BarService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.uri = 'https://projet-annuel-node.herokuapp.com';
    }
    add(BarCreate) {
        console.log(BarCreate);
        return this.httpClient.post(`${this.uri}/api/bars`, BarCreate)
            .subscribe(bar => {
            console.log(bar);
        });
    }
    getList() {
        return this.httpClient.get(`${this.uri}/api/bars`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(_Bar__WEBPACK_IMPORTED_MODULE_2__["Bar"].NEW_BUNCH));
    }
};
BarService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
BarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BarService);



/***/ }),

/***/ "./src/app/root/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/root/footer/footer.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb3QvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/root/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/root/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fbapp-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/root/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/root/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/root/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/root/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");



let HomeComponent = class HomeComponent {
    constructor(userService) {
        this.userService = userService;
        this.pageTitle = 'Accueil';
    }
    get user() {
        //return JSON.parse(localStorage.getItem('user'))
        return this.userService.currentUser;
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/root/home/home.component.html")).default,
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/root/nav/nav.component.scss":
/*!*********************************************!*\
  !*** ./src/app/root/nav/nav.component.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb3QvbmF2L25hdi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/root/nav/nav.component.ts":
/*!*******************************************!*\
  !*** ./src/app/root/nav/nav.component.ts ***!
  \*******************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");



let NavComponent = class NavComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
    }
    get user() {
        return this.userService.currentUser;
    }
};
NavComponent.ctorParameters = () => [
    { type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavComponent.prototype, "pageName", void 0);
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fbapp-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/root/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.scss */ "./src/app/root/nav/nav.component.scss")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/root/root-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/root/root-routing.module.ts ***!
  \*********************************************/
/*! exports provided: RootRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootRoutingModule", function() { return RootRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/root/home/home.component.ts");




const routes = [{ path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }];
let RootRoutingModule = class RootRoutingModule {
};
RootRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RootRoutingModule);



/***/ }),

/***/ "./src/app/root/root.module.ts":
/*!*************************************!*\
  !*** ./src/app/root/root.module.ts ***!
  \*************************************/
/*! exports provided: RootModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootModule", function() { return RootModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/root/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _bar_bar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bar/bar.module */ "./src/app/bar/bar.module.ts");
/* harmony import */ var _root_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./root-routing.module */ "./src/app/root/root-routing.module.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/root/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/root/footer/footer.component.ts");









let RootModule = class RootModule {
};
RootModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _root_routing_module__WEBPACK_IMPORTED_MODULE_6__["RootRoutingModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_4__["UserModule"],
            _bar_bar_module__WEBPACK_IMPORTED_MODULE_5__["BarModule"]
        ],
        exports: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]],
    })
], RootModule);



/***/ }),

/***/ "./src/app/shared/data-loader.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/data-loader.service.ts ***!
  \***********************************************/
/*! exports provided: DataLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLoaderService", function() { return DataLoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let DataLoaderService = class DataLoaderService {
    init(source$) {
        this.loader$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.stream$ = this.loader$.asObservable();
        source$.subscribe(data => {
            this.data = data;
            this.loader$.next(data);
        });
    }
    load(data) {
        this.loader$.next(data);
    }
    transform(project) {
        const transformed = project(this.data);
        this.load(transformed);
    }
    reset() {
        this.loader$.next(this.data);
    }
};
DataLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataLoaderService);



/***/ }),

/***/ "./src/app/shared/loader/loader.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/loader/loader.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span#loader {\n  width: 5vw;\n  height: 5vw;\n  display: block;\n  border-radius: 50%;\n  border: 0.1rem solid #2c365e;\n  box-shadow: 0 -2px 3px 1px #4b8f8c;\n  -webkit-animation: fbRotate 2s linear infinite;\n          animation: fbRotate 2s linear infinite;\n  margin: 0.5rem;\n}\nspan#loader.centered {\n  margin: 0.5rem auto;\n}\n@-webkit-keyframes fbRotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes fbRotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRlci9DOlxcVXNlcnNcXFN0ZXBoYW5lXFxEb2N1bWVudHNcXEVTR0lcXEpTXFxBbmd1bGFyXFxmb29iYXIvc3JjXFxhcHBcXHNoYXJlZFxcbG9hZGVyXFxsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLGNBQUE7QUNERjtBREdFO0VBQ0UsbUJBQUE7QUNESjtBREtBO0VBQ0U7SUFDRSx1QkFBQTtFQ0ZGO0VESUE7SUFDRSx5QkFBQTtFQ0ZGO0FBQ0Y7QURKQTtFQUNFO0lBQ0UsdUJBQUE7RUNGRjtFRElBO0lBQ0UseUJBQUE7RUNGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvdmFyaWFibGVzJztcclxuXHJcbnNwYW4jbG9hZGVyIHtcclxuICB3aWR0aDogNXZ3O1xyXG4gIGhlaWdodDogNXZ3O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IC4xcmVtIHNvbGlkICRmYi1ibHVlO1xyXG4gIGJveC1zaGFkb3c6IDAgLTJweCAzcHggMXB4ICRmYi1ncmVlbjtcclxuICBhbmltYXRpb246IGZiUm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBtYXJnaW46IC41cmVtO1xyXG5cclxuICAmLmNlbnRlcmVkIHtcclxuICAgIG1hcmdpbjogLjVyZW0gYXV0bztcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmJSb3RhdGUge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbiIsInNwYW4jbG9hZGVyIHtcbiAgd2lkdGg6IDV2dztcbiAgaGVpZ2h0OiA1dnc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkICMyYzM2NWU7XG4gIGJveC1zaGFkb3c6IDAgLTJweCAzcHggMXB4ICM0YjhmOGM7XG4gIGFuaW1hdGlvbjogZmJSb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xuICBtYXJnaW46IDAuNXJlbTtcbn1cbnNwYW4jbG9hZGVyLmNlbnRlcmVkIHtcbiAgbWFyZ2luOiAwLjVyZW0gYXV0bztcbn1cblxuQGtleWZyYW1lcyBmYlJvdGF0ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/loader/loader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _use_detect_change__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../use-detect-change */ "./src/app/shared/use-detect-change.ts");



let LoaderComponent = class LoaderComponent {
    ngOnInit() {
        this.setIsCentered(this.center);
    }
    ngOnChanges(changes) {
        this.handleInputChanges(changes);
    }
    handleInputChanges(changes) {
        this.handleCenterChanged(changes);
    }
    handleCenterChanged({ center }) {
        const centerChanged = Object(_use_detect_change__WEBPACK_IMPORTED_MODULE_2__["default"])(center);
        if (centerChanged) {
            this.setIsCentered(center.currentValue);
        }
    }
    setIsCentered(center) {
        this.isCentered = ![false, undefined].includes(center);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoaderComponent.prototype, "center", void 0);
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fbapp-loader',
        template: `
  <span id="loader" [class.centered]="isCentered"></span>
`,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader.component.scss */ "./src/app/shared/loader/loader.component.scss")).default]
    })
], LoaderComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/shared/loader/loader.component.ts");






let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"]],
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/use-detect-change.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/use-detect-change.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/* harmony default export */ __webpack_exports__["default"] = ((change) => {
    if (!change) {
        return false;
    }
    if (change.isFirstChange()) {
        return false;
    }
    const { currentValue, previousValue } = change;
    return currentValue !== previousValue;
});


/***/ }),

/***/ "./src/app/user/User.ts":
/*!******************************!*\
  !*** ./src/app/user/User.ts ***!
  \******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(id, email, password, lastName, age, pseudo, firstName, favoriteDrink, favoriteBar, token) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.lastName = lastName;
        this.age = age;
        this.pseudo = pseudo;
        this.firstName = firstName;
        this.favoriteDrink = favoriteDrink;
        this.favoriteBar = favoriteBar;
        this.token = token;
    }
    static NEW(data) {
        return new User(data.id, data.email, data.password, data.lastName, data.age, data.pseudo, data.firstName, data.favoriteDrink, data.favoriteBar, data.token);
    }
    static NEW_BUNCH(data) {
        return data.map(User.NEW);
    }
}


/***/ }),

/***/ "./src/app/user/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/user/auth/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AuthService = class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.resourcePath = '/api/auth/users';
    }
    authenticate(email, password) {
        const body = { email, password };
        return this.httpClient.post('http://localhost:3000/api/auth', body);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ "./src/app/user/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








let LoginComponent = class LoginComponent {
    constructor(userService, router, http) {
        this.userService = userService;
        this.router = router;
        this.http = http;
        this.pageTitle = 'Se connecter';
    }
    ngOnInit() {
        this.FormLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
            ]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
            ]),
        }); // <-- add custom validator at the FormGroup level
    }
    get email() { return this.FormLogin.get('email'); }
    get password() { return this.FormLogin.get('password'); }
    goToHome() {
        this.router.navigateByUrl('/');
    }
    onSubmit(formDir) {
        console.log('ok');
        const { email, password } = formDir.value;
        /*this.authService.authenticate(email, password).subscribe(user=>{
          console.log(user);
        })*/
        this.firstName$ = this.userService.authenticate(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((user) => {
            localStorage.setItem("user", JSON.stringify(user));
            //localStorage.removeItem("user")
            //localStorage.getItem("user")
            console.log(user);
            this.goToHome();
            return null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(() => {
            this.resetForm(formDir);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])('Login failed');
        }));
        /*this.http.post('http://127.0.0.1:3000/api/auth', JSON.stringify(body), {
          headers: headers
        }).subscribe(data => {
          console.log(data);
        });
    
         /*this.email$ = this.userService.authenticate(email, password).subscribe(
          (users) => {
            console.log('ok2');
            this.goToHome();
            return null;
          }),
          catchError(() => {
            console.log('die');
            this.resetForm(formDir);
            return of('Login failed');
          }),
        );*/
    }
    resetForm(formDir) {
        formDir.reset();
        this.loginInput.nativeElement.focus();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('login', { static: false })
], LoginComponent.prototype, "loginInput", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fbapp-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/user/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/user/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/user/register/register.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tesseract.js */ "./node_modules/tesseract.js/src/index.js");
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_6__);







let RegisterComponent = class RegisterComponent {
    constructor(userService, router, http, changeDetectionRef) {
        this.userService = userService;
        this.router = router;
        this.http = http;
        this.changeDetectionRef = changeDetectionRef;
        this.pageTitle = 'Enregistrer';
        this.selectedLine = null;
        this.selectedWord = null;
        this.selectedSymbol = null;
        this.elementColumns = ['text', 'confidence'];
        this.language = 'fra';
    }
    ngAfterViewInit() {
        this.ctx = this.canvas.nativeElement.getContext('2d');
    }
    ngOnInit() {
        this.FormRegister = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
            ]),
            'pseudo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
            ]),
            'age': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
        }); // <-- add custom validator at the FormGroup level
    }
    get email() { return this.FormRegister.get('email'); }
    get pseudo() { return this.FormRegister.get('pseudo'); }
    get password() { return this.FormRegister.get('password'); }
    get age() { return this.FormRegister.get('age'); }
    goToHome() {
        this.router.navigateByUrl('/');
    }
    resetForm(formDir) {
        formDir.reset();
        this.registerInput.nativeElement.focus();
    }
    onSubmit(formDir) {
        const formRes = formDir.value;
        //this.doOCR(formRes.age);
        //this.userService.create(formRes);
        this.goToHome();
    }
    onUpload(event) {
        alert("ok");
    }
    onFileChange(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.selectedFile = event.target.files[0];
            this.progressStatus = '';
            this.progress = null;
            this.result = null;
            this.words = null;
            this.symbols = null;
            this.selectedLine = null;
            this.selectedWord = null;
            this.selectedSymbol = null;
            this.image = new Image();
            this.image.onload = () => this.drawImageScaled(this.image);
            this.image.src = URL.createObjectURL(this.selectedFile);
            const worker = Object(tesseract_js__WEBPACK_IMPORTED_MODULE_6__["createWorker"])({
                logger: progress => {
                    this.progressStatus = progress.status;
                    this.progress = progress.progress;
                    //this.progressBar.set(progress.progress * 100);
                    this.changeDetectionRef.markForCheck();
                }
            });
            /*
           const worker = createWorker({
             workerPath: 'tesseract-201/worker.min.js',
             corePath: 'tesseract-201/tesseract-core.wasm.js',
             logger: progress => {
               this.progressStatus = progress.status;
               this.progress = progress.progress;
               this.changeDetectionRef.markForCheck();
             }
           });
       */
            yield worker.load();
            yield worker.loadLanguage(this.language);
            yield worker.initialize(this.language);
            try {
                const result = yield worker.recognize(this.selectedFile);
                if (result) {
                    this.result = result.data;
                    console.log(result);
                }
                yield worker.terminate();
            }
            catch (e) {
                console.log(e);
                this.progressStatus = e;
                this.progress = null;
            }
            finally {
                this.progressStatus = null;
                this.progress = null;
            }
            // reset file input
            event.target.value = null;
        });
    }
    drawImageScaled(img) {
        const width = this.canvasContainer.nativeElement.clientWidth;
        const height = this.canvasContainer.nativeElement.clientHeight;
        const hRatio = width / img.width;
        const vRatio = height / img.height;
        this.ratio = Math.min(hRatio, vRatio);
        if (this.ratio > 1) {
            this.ratio = 1;
        }
        this.canvas.nativeElement.width = img.width * this.ratio;
        this.canvas.nativeElement.height = img.height * this.ratio;
        this.ctx.clearRect(0, 0, width, height);
        this.ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width * this.ratio, img.height * this.ratio);
        var imageData = this.ctx.getImageData(0, 0, img.width, img.height);
        var data = imageData.data;
        this.nuancegris(data);
        /**Function qui nuance en gris */
        this.ctx.putImageData(imageData, 0, 0);
    }
    nuancegris(data) {
        for (var i = 0; i < data.length; i += 4) {
            var moy = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = moy; // rouge
            data[i + 1] = moy; // vert
            data[i + 2] = moy; // bleu
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('register', { static: false })
], RegisterComponent.prototype, "registerInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileSelector', { static: false })
], RegisterComponent.prototype, "fileInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: false })
], RegisterComponent.prototype, "canvas", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasContainer', { static: false })
], RegisterComponent.prototype, "canvasContainer", void 0);
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fbapp-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/user/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");





const routes = [{ path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] }];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"]
        ],
        providers: [
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        ],
    })
], UserModule);



/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/auth/auth.service */ "./src/app/user/auth/auth.service.ts");
/* harmony import */ var _user_user_resource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user-resource.service */ "./src/app/user/user/user-resource.service.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User */ "./src/app/user/User.ts");







let UserService = class UserService {
    constructor(auth, resource, httpClient) {
        this.auth = auth;
        this.resource = resource;
        this.httpClient = httpClient;
        this.uri = 'https://projet-annuel-node.herokuapp.com';
    }
    get currentUser() {
        return this.authenticatedUser;
    }
    authenticate(email, password) {
        const body = { email, password };
        return this.httpClient.post(`${this.uri}/api/auth/users`, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_User__WEBPACK_IMPORTED_MODULE_6__["User"].NEW), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(user => {
            console.log(user);
            this.authenticatedUser = user;
        }));
    }
    create(userCreate) {
        console.log(userCreate);
        return this.httpClient.post(`${this.uri}/api/users`, userCreate)
            .subscribe(user => {
            console.log(user);
        });
    }
    logout() {
        this.authenticatedUser = null;
    }
};
UserService.ctorParameters = () => [
    { type: _user_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _user_user_resource_service__WEBPACK_IMPORTED_MODULE_5__["UserResourceService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], UserService);



/***/ }),

/***/ "./src/app/user/user/UserShape.ts":
/*!****************************************!*\
  !*** ./src/app/user/user/UserShape.ts ***!
  \****************************************/
/*! exports provided: UserShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserShape", function() { return UserShape; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserShape {
    constructor(data) {
        this.id = data.id;
        this.pseudo = data.pseudo;
        this.password = data.password;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.age = data.age;
        this.favoriteBar = data.favoriteBar;
        this.favoriteDrink = data.favoriteDrink;
        this.token = data.token;
    }
    static NEW(data) {
        return new UserShape(data);
    }
    static NEW_BUNCH(data) {
        return data.map(UserShape.NEW);
    }
}


/***/ }),

/***/ "./src/app/user/user/user-resource.service.ts":
/*!****************************************************!*\
  !*** ./src/app/user/user/user-resource.service.ts ***!
  \****************************************************/
/*! exports provided: UserResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResourceService", function() { return UserResourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _UserShape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserShape */ "./src/app/user/user/UserShape.ts");





let UserResourceService = class UserResourceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.resourcePath = 'https://apibarcocktail.herokuapp.com/api/users';
    }
    user(userId) {
        console.log('user');
        return this.requestUser(userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_UserShape__WEBPACK_IMPORTED_MODULE_4__["UserShape"].NEW));
    }
    updateUser(userId, data) {
        return this.patchUser(userId, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_UserShape__WEBPACK_IMPORTED_MODULE_4__["UserShape"].NEW));
    }
    requestUser(userId) {
        const URL = `${this.resourcePath}/${userId}`;
        return this.httpClient.get(URL);
    }
    patchUser(userId, data) {
        const URL = `${this.resourcePath}/${userId}`;
        return this.httpClient.patch(URL, data);
    }
};
UserResourceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserResourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], UserResourceService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Stephane\Documents\ESGI\JS\Angular\foobar\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map