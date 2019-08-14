module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);





class AnnotatedLayout extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      discount: '10%',
      enabled: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleSubmit", async () => {
      var session_url = 'https://bismuth-dev.myshopify.com/admin/api/2019-07/themes/75057168493/assets.json';
      var username = '35f5151b48c7fb8fb8c9fe4185fb7c25';
      var password = '122b9134735957626720501cf4755623';
      var basicAuth = 'Basic ' + btoa(username + ':' + password);
      var body = {
        asset: {
          key: "sections/marquee3.liquid",
          value: "<div>MARQUEE SHIT 3</div>"
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default()({
        method: 'put',
        url: session_url,
        auth: {
          username: username,
          password: password
        },
        data: body,
        headers: {
          'Authorization': +basicAuth
        }
      }).then(function (response) {
        console.log('Authenticated');
        console.log(response);
      }).catch(function (error) {
        console.log('Error on Authentication');
      }); //
      // const response = await fetch('https://bismuth-dev.myshopify.com/admin/api/2019-07/themes/75057168493/assets.json', {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'PUT', 'Access-Control-Allow-Origin':  'https://30e2e004.ngrok.io', 'Access-Control-Allow-Headers': ['Content-Type', 'Authorization'] },
      //   body: JSON.stringify({ asset: {key: "templates/index.liquid", value: "test"} })
      // })
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleChange", field => {
      return value => this.setState({
        [field]: value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleToggle", () => {
      this.setState(({
        enabled
      }) => {
        return {
          enabled: !enabled
        };
      });
    });
  }

  render() {
    const {
      discount,
      enabled
    } = this.state;
    const contentStatus = enabled ? 'Disable' : 'Enable';
    const textStatus = enabled ? 'enabled' : 'disabled';
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Page"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].AnnotatedSection, {
      title: "Default discount",
      description: "Add a product to Sample App, it will automatically be discounted."
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      sectioned: true
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["FormLayout"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
      value: discount,
      onChange: this.handleChange('discount'),
      label: "Discount percentage",
      type: "discount"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      distribution: "trailing"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      primary: true,
      submit: true
    }, "Save")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].AnnotatedSection, {
      title: "Price updates",
      description: "Temporarily disable all Sample App price updates"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["SettingToggle"], {
      action: {
        content: contentStatus,
        onAction: this.handleToggle
      },
      enabled: enabled
    }, "This setting is", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextStyle"], {
      variation: "strong"
    }, textStatus), "."))));
  } //Access-Control-Allow-Origin:  http://127.0.0.1:3000
  // Access-Control-Allow-Methods: POST
  // Access-Control-Allow-Headers: Content-Type, Authorization
  // handleSubmit = async () => {
  //   const response = await fetch('https://bismuth-dev.myshopify.com/admin/api/2019-07/themes/75057168493/assets.json', {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'PUT', 'Access-Control-Allow-Origin':  'https://30e2e004.ngrok.io', 'Access-Control-Allow-Headers': ['Content-Type', 'Authorization'] },
  //     body: JSON.stringify({ asset: {key: "templates/index.liquid", value: "test"} })
  //   })
  // };


}

/* harmony default export */ __webpack_exports__["default"] = (AnnotatedLayout);

/***/ }),

/***/ 3:
/*!*****************************************!*\
  !*** multi ./pages/annotated-layout.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/userone/Documents/App-dev/marquee3/pages/annotated-layout.js */"./pages/annotated-layout.js");


/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=annotated-layout.js.map