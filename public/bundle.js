/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/components/InitIndex/IndexTmpl.pug":
/*!***************************************************!*\
  !*** ./public/components/InitIndex/IndexTmpl.pug ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cheader class=\\\"header\\\" id=\\\"header\\\"\\u003E\\u003C\\u002Fheader\\u003E\\u003Cmain class=\\\"view\\\" id=\\\"view-place\\\"\\u003E\\u003C\\u002Fmain\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack://delivery/./public/components/InitIndex/IndexTmpl.pug?");

/***/ }),

/***/ "./public/components/ThugNavbar/Navbar.pug":
/*!*************************************************!*\
  !*** ./public/components/ThugNavbar/Navbar.pug ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"navbar\\\"\\u003EHello my friend, how r u?\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack://delivery/./public/components/ThugNavbar/Navbar.pug?");

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;\n      var valB = pug_style(b[key]);\n      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n};\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '', padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    return val + '';\n  }\n};\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  var type = typeof val;\n  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + '=\\'' + val.replace(/'/g, '&#39;') + '\\'';\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n};\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse){\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n};\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html){\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34: escape = '&quot;'; break;\n      case 38: escape = '&amp;'; break;\n      case 60: escape = '&lt;'; break;\n      case 62: escape = '&gt;'; break;\n      default: continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n};\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str){\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || __webpack_require__(/*! fs */ \"?8f63\").readFileSync(filename, 'utf8')\n  } catch (ex) {\n    pug_rethrow(err, null, lineno)\n  }\n  var context = 3\n    , lines = str.split('\\n')\n    , start = Math.max(lineno - context, 0)\n    , end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines.slice(start, end).map(function(line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? '  > ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'Pug') + ':' + lineno\n    + '\\n' + context + '\\n\\n' + err.message;\n  throw err;\n};\n\n\n//# sourceURL=webpack://delivery/./node_modules/pug-runtime/index.js?");

/***/ }),

/***/ "./public/components/InitIndex/InitIndex.js":
/*!**************************************************!*\
  !*** ./public/components/InitIndex/InitIndex.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InitIndex\": () => (/* binding */ InitIndex)\n/* harmony export */ });\n/* harmony import */ var _IndexTmpl_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexTmpl.pug */ \"./public/components/InitIndex/IndexTmpl.pug\");\n/* harmony import */ var _IndexTmpl_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_IndexTmpl_pug__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass InitIndex {\n    constructor({\n        root = document.body\n    } = {}) {\n        this.root = root;\n    }\n\n    render() {\n        this.root.innerHTML = _IndexTmpl_pug__WEBPACK_IMPORTED_MODULE_0___default()({});\n    }\n\n    getViewPlace() {\n        return this.root.querySelector('main');\n    }\n\n    getNavbarPlace() {\n        return this.root.querySelector('header');\n    }\n}\n\n//# sourceURL=webpack://delivery/./public/components/InitIndex/InitIndex.js?");

/***/ }),

/***/ "./public/components/ThugNavbar/thugNavbar.js":
/*!****************************************************!*\
  !*** ./public/components/ThugNavbar/thugNavbar.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"thugNavbar\": () => (/* binding */ thugNavbar)\n/* harmony export */ });\n/* harmony import */ var _Navbar_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.pug */ \"./public/components/ThugNavbar/Navbar.pug\");\n/* harmony import */ var _Navbar_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Navbar_pug__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass thugNavbar {\n\n    constructor(parent) {\n        this.parent = parent\n    }\n\n    render() {\n        this.parent.innerHTML = _Navbar_pug__WEBPACK_IMPORTED_MODULE_0___default()({});\n    }\n}\n\n//# sourceURL=webpack://delivery/./public/components/ThugNavbar/thugNavbar.js?");

/***/ }),

/***/ "./public/main.js":
/*!************************!*\
  !*** ./public/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ThugNavbar_thugNavbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ThugNavbar/thugNavbar.js */ \"./public/components/ThugNavbar/thugNavbar.js\");\n/* harmony import */ var _modules_router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/router.js */ \"./public/modules/router.js\");\n/* harmony import */ var _components_InitIndex_InitIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/InitIndex/InitIndex */ \"./public/components/InitIndex/InitIndex.js\");\n // import {Navbar} from \"./components/Navbar/Navbar.js\";\n \n \n \n\n const app = document.getElementById(\"app\");\n const router = new _modules_router_js__WEBPACK_IMPORTED_MODULE_1__.Router(app);\nconst goFunc = (page) => router.openPage(page);\n\nconst initIndex = new _components_InitIndex_InitIndex__WEBPACK_IMPORTED_MODULE_2__.InitIndex({root: app});\ninitIndex.render();\nconst navbarView = initIndex.getNavbarPlace();\nconst view = initIndex.getViewPlace();\n\n\n\n\n\n//# sourceURL=webpack://delivery/./public/main.js?");

/***/ }),

/***/ "./public/modules/router.js":
/*!**********************************!*\
  !*** ./public/modules/router.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Router\": () => (/* binding */ Router)\n/* harmony export */ });\nconst urls = {\n    main: {\n        standardUrl: '/',\n        regularUrl: null\n    },\n    signup: {\n        standardUrl: '/signup',\n        regularUrl: null\n    },\n    signin: {\n        standardUrl: '/signin',\n        regularUrl: null\n    },\n    logout: {\n        standardUrl: 'logout',\n        regularUrl: null\n    }\n}\n\nclass Router {\n    constructor(params) {\n        this.params = params;\n        this.routes = new Map();\n        this.followLinks = this.followLinks.bind(this);\n        this.params.addEventListener('click', this.followLinks);\n        window.addEventListener('popstate', (event) => {\n            this.openPage(window.location.pathname, true);\n        })\n    }\n\n    windowHistory(page, isBack) {\n        if (!isBack) {\n            window.history.pushState({}, '', page);\n        }\n\n        window.history.replaceState({}, '', page);\n    }\n\n    addRoute(page, handler) {\n        this.routes.set(page, handler)\n    }\n\n    openPage(page, isBack = false) {\n        Object.entries(urls).forEach(([url, { standardUrl, regularUrl}]) => {\n            if (page === url && isBack && url === 'logout') {\n                this.openPage('main', isBack);\n                return;\n            }\n\n            if (page === url || (regularUrl && regularUrl.test(page))) {\n                if (page === url) {\n                    page = standardUrl\n                }\n\n                this.windowHistory(page, isBack);\n\n                if (this.routes.get(url)) {\n                    this.routes.get(url).render(page);\n                } else {\n                    this.openPage('main', isBack);\n                }\n\n            }\n        })\n    }\n\n    followLinks(event) {\n        if (event.target.closest('a') instanceof HTMLAnchorElement) {\n            if (event.target.closest('a').href === event.includes('#')) {\n                event.preventDefault();\n                return;\n            }\n\n            event.preventDefault();\n            const link = event.target.closest('a').pathname;\n            this.openPage(link);\n        }\n\n        if (event.target instanceof HTMLBaseElement) {\n            event.preventDefault();\n        }\n    }\n}\n\n//# sourceURL=webpack://delivery/./public/modules/router.js?");

/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://delivery/fs_(ignored)?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/main.js");
/******/ 	
/******/ })()
;