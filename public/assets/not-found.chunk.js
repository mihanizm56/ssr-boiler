(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["not-found"],{

/***/ "./src/_components/link/index.ts":
/*!***************************************!*\
  !*** ./src/_components/link/index.ts ***!
  \***************************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router5 */ "./node_modules/react-router5/dist/index.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return react_router5__WEBPACK_IMPORTED_MODULE_0__["ConnectedLink"]; });




/***/ }),

/***/ "./src/layouts/main-layout/index.scss":
/*!********************************************!*\
  !*** ./src/layouts/main-layout/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"root":"src-layouts-main-layout--root-EjyGI"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/layouts/main-layout/index.tsx":
/*!*******************************************!*\
  !*** ./src/layouts/main-layout/index.tsx ***!
  \*******************************************/
/*! exports provided: MainLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayout", function() { return MainLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/_components/link */ "./src/_components/link/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/layouts/main-layout/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);



var MainLayout = react__WEBPACK_IMPORTED_MODULE_0__["memo"](function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.root
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_link__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    routeName: "home"
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_link__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    routeName: "page1"
  }, "Page 1"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_link__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    routeName: "page2"
  }, "Page 2")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.content
  }, children));
});

/***/ }),

/***/ "./src/pages/not-found/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/not-found/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_router_components_route_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/modules/router/_components/route-node */ "./src/modules/router/_components/route-node.tsx");
/* harmony import */ var _layouts_main_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts/main-layout */ "./src/layouts/main-layout/index.tsx");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page */ "./src/pages/not-found/page/index.tsx");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var pageNode = 'not-found';

var action = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var i18n;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i18n = _ref.i18n;
            return _context.abrupt("return", {
              title: i18n.instance.t('not-found:title'),
              status: 404,
              content: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_layouts_main_layout__WEBPACK_IMPORTED_MODULE_2__["MainLayout"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_modules_router_components_route_node__WEBPACK_IMPORTED_MODULE_1__["RouteNode"], {
                nodeName: pageNode
              }, function () {
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_page__WEBPACK_IMPORTED_MODULE_3__["Page"], null);
              }))
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function action(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),

/***/ "./src/pages/not-found/page/index.scss":
/*!*********************************************!*\
  !*** ./src/pages/not-found/page/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"root":"src-pages-not-found-page--root-2t2BJ"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/pages/not-found/page/index.tsx":
/*!********************************************!*\
  !*** ./src/pages/not-found/page/index.tsx ***!
  \********************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/pages/not-found/page/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);


var Page = react__WEBPACK_IMPORTED_MODULE_0__["memo"](function () {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root
  }, "404 \u2013 Not Found");
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLmNodW5rLmpzIiwic291cmNlcyI6WyIvaG9tZS9taWhhbml6bTU2L0RvY3VtZW50cy9Pd24vYm9pbGVycGxhdGUtcm91dGVyNS1zc3IvYm9pbGVycGxhdGUvc3JjL19jb21wb25lbnRzL2xpbmsvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvbWFpbi1sYXlvdXQvaW5kZXguc2Nzcz9jYzVmIiwiL2hvbWUvbWloYW5pem01Ni9Eb2N1bWVudHMvT3duL2JvaWxlcnBsYXRlLXJvdXRlcjUtc3NyL2JvaWxlcnBsYXRlL3NyYy9sYXlvdXRzL21haW4tbGF5b3V0L2luZGV4LnRzeCIsIi9ob21lL21paGFuaXptNTYvRG9jdW1lbnRzL093bi9ib2lsZXJwbGF0ZS1yb3V0ZXI1LXNzci9ib2lsZXJwbGF0ZS9zcmMvcGFnZXMvbm90LWZvdW5kL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbm90LWZvdW5kL3BhZ2UvaW5kZXguc2Nzcz8xYWNjIiwiL2hvbWUvbWloYW5pem01Ni9Eb2N1bWVudHMvT3duL2JvaWxlcnBsYXRlLXJvdXRlcjUtc3NyL2JvaWxlcnBsYXRlL3NyYy9wYWdlcy9ub3QtZm91bmQvcGFnZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdGVkTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcjUnO1xuXG5leHBvcnQgeyBDb25uZWN0ZWRMaW5rIGFzIExpbmsgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJyb290XCI6XCJzcmMtbGF5b3V0cy1tYWluLWxheW91dC0tcm9vdC1FanlHSVwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjA4NDI0ODMwNTM0XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCIsXCJjc3NNb2R1bGVcIjp0cnVlLFwicmVsb2FkQWxsXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICA7XG4gICAgfVxuICAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQC9fY29tcG9uZW50cy9saW5rJztcbmltcG9ydCBzIGZyb20gJy4vaW5kZXguc2Nzcyc7XG5cbmV4cG9ydCBjb25zdCBNYWluTGF5b3V0ID0gUmVhY3QubWVtbygoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgIDxuYXY+XG4gICAgICA8TGluayByb3V0ZU5hbWU9XCJob21lXCI+SG9tZTwvTGluaz5cbiAgICAgIDxiciAvPlxuICAgICAgPExpbmsgcm91dGVOYW1lPVwicGFnZTFcIj5QYWdlIDE8L0xpbms+XG4gICAgICA8YnIgLz5cbiAgICAgIDxMaW5rIHJvdXRlTmFtZT1cInBhZ2UyXCI+UGFnZSAyPC9MaW5rPlxuICAgIDwvbmF2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRlbnR9PntjaGlsZHJlbn08L2Rpdj5cbiAgPC9kaXY+XG4pKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlTm9kZSB9IGZyb20gJ0AvbW9kdWxlcy9yb3V0ZXIvX2NvbXBvbmVudHMvcm91dGUtbm9kZSc7XG5pbXBvcnQgeyBNYWluTGF5b3V0IH0gZnJvbSAnQC9sYXlvdXRzL21haW4tbGF5b3V0JztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xuXG5jb25zdCBwYWdlTm9kZSA9ICdub3QtZm91bmQnO1xuXG5jb25zdCBhY3Rpb24gPSBhc3luYyAoeyBpMThuIH0pID0+ICh7XG4gIHRpdGxlOiBpMThuLmluc3RhbmNlLnQoJ25vdC1mb3VuZDp0aXRsZScpLFxuICBzdGF0dXM6IDQwNCxcbiAgY29udGVudDogKFxuICAgIDxNYWluTGF5b3V0PlxuICAgICAgPFJvdXRlTm9kZSBub2RlTmFtZT17cGFnZU5vZGV9PnsoKSA9PiA8UGFnZSAvPn08L1JvdXRlTm9kZT5cbiAgICA8L01haW5MYXlvdXQ+XG4gICksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInJvb3RcIjpcInNyYy1wYWdlcy1ub3QtZm91bmQtcGFnZS0tcm9vdC0ydDJCSlwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjA4NDI0ODI4MjMzXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCIsXCJjc3NNb2R1bGVcIjp0cnVlLFwicmVsb2FkQWxsXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICA7XG4gICAgfVxuICAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcyBmcm9tICcuL2luZGV4LnNjc3MnO1xuXG5leHBvcnQgY29uc3QgUGFnZSA9IFJlYWN0Lm1lbW8oKCkgPT4ge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+NDA0IOKAkyBOb3QgRm91bmQ8L2Rpdj47XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQSxnQ0FLQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBVEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVNBOzs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0EsZ0NBS0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==