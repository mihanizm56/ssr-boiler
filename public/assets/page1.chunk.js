(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page1"],{

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
/* harmony import */ var react_router5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router5 */ "./node_modules/react-router5/dist/index.es.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/layouts/main-layout/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);



var MainLayout = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router5__WEBPACK_IMPORTED_MODULE_1__["ConnectedLink"], {
    routeName: "home"
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router5__WEBPACK_IMPORTED_MODULE_1__["ConnectedLink"], {
    routeName: "page1"
  }, "Page 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router5__WEBPACK_IMPORTED_MODULE_1__["ConnectedLink"], {
    routeName: "page2"
  }, "Page 2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.content
  }, children));
});

/***/ }),

/***/ "./src/pages/page1/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/page1/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_router_components_route_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/modules/router/_components/route-node */ "./src/modules/router/_components/route-node.tsx");
/* harmony import */ var _layouts_main_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts/main-layout */ "./src/layouts/main-layout/index.tsx");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page */ "./src/pages/page1/page/index.tsx");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var pageNode = 'page1';

var action = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var i18n;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i18n = _ref.i18n;
            return _context.abrupt("return", {
              title: i18n.instance.t('page1:title'),
              content: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_layouts_main_layout__WEBPACK_IMPORTED_MODULE_2__["MainLayout"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_modules_router_components_route_node__WEBPACK_IMPORTED_MODULE_1__["RouteNode"], {
                nodeName: pageNode
              }, function (_ref3) {
                var route = _ref3.route,
                    content = _ref3.content;

                if (route.name === pageNode) {
                  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_page__WEBPACK_IMPORTED_MODULE_3__["Page"], null);
                }

                return content;
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

/***/ "./src/pages/page1/page/index.scss":
/*!*****************************************!*\
  !*** ./src/pages/page1/page/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"root":"src-pages-page1-page--root-1GXk-"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/pages/page1/page/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/page1/page/index.tsx ***!
  \****************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/pages/page1/page/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);


var Page = react__WEBPACK_IMPORTED_MODULE_0__["memo"](function () {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root
  }, "Page 1");
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTEuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9tYWluLWxheW91dC9pbmRleC5zY3NzP2NjNWYiLCIvaG9tZS9taWhhbml6bTU2L0RvY3VtZW50cy9Pd24vYm9pbGVycGxhdGUtcm91dGVyNS1zc3IvYm9pbGVycGxhdGUvc3JjL2xheW91dHMvbWFpbi1sYXlvdXQvaW5kZXgudHN4IiwiL2hvbWUvbWloYW5pem01Ni9Eb2N1bWVudHMvT3duL2JvaWxlcnBsYXRlLXJvdXRlcjUtc3NyL2JvaWxlcnBsYXRlL3NyYy9wYWdlcy9wYWdlMS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3BhZ2UxL3BhZ2UvaW5kZXguc2Nzcz8wOGQ0IiwiL2hvbWUvbWloYW5pem01Ni9Eb2N1bWVudHMvT3duL2JvaWxlcnBsYXRlLXJvdXRlcjUtc3NyL2JvaWxlcnBsYXRlL3NyYy9wYWdlcy9wYWdlMS9wYWdlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicm9vdFwiOlwic3JjLWxheW91dHMtbWFpbi1sYXlvdXQtLXJvb3QtRWp5R0lcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYwODQ4NTgyNjc4N1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwiLFwiY3NzTW9kdWxlXCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWV9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29ubmVjdGVkTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcjUnO1xuaW1wb3J0IHMgZnJvbSAnLi9pbmRleC5zY3NzJztcblxuZXhwb3J0IGNvbnN0IE1haW5MYXlvdXQgPSBSZWFjdC5tZW1vKCh7IGNoaWxkcmVuIH06IFByb3BzPGFueT4pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgPG5hdj5cbiAgICAgIDxDb25uZWN0ZWRMaW5rIHJvdXRlTmFtZT1cImhvbWVcIj5Ib21lPC9Db25uZWN0ZWRMaW5rPlxuICAgICAgPGJyIC8+XG4gICAgICA8Q29ubmVjdGVkTGluayByb3V0ZU5hbWU9XCJwYWdlMVwiPlBhZ2UgMTwvQ29ubmVjdGVkTGluaz5cbiAgICAgIDxiciAvPlxuICAgICAgPENvbm5lY3RlZExpbmsgcm91dGVOYW1lPVwicGFnZTJcIj5QYWdlIDI8L0Nvbm5lY3RlZExpbms+XG4gICAgPC9uYXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGVudH0+e2NoaWxkcmVufTwvZGl2PlxuICA8L2Rpdj5cbikpO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVOb2RlIH0gZnJvbSAnQC9tb2R1bGVzL3JvdXRlci9fY29tcG9uZW50cy9yb3V0ZS1ub2RlJztcbmltcG9ydCB7IE1haW5MYXlvdXQgfSBmcm9tICdAL2xheW91dHMvbWFpbi1sYXlvdXQnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4vcGFnZSc7XG5cbmNvbnN0IHBhZ2VOb2RlID0gJ3BhZ2UxJztcblxuY29uc3QgYWN0aW9uID0gYXN5bmMgKHsgaTE4biB9KSA9PiAoe1xuICB0aXRsZTogaTE4bi5pbnN0YW5jZS50KCdwYWdlMTp0aXRsZScpLFxuICBjb250ZW50OiAoXG4gICAgPE1haW5MYXlvdXQ+XG4gICAgICA8Um91dGVOb2RlIG5vZGVOYW1lPXtwYWdlTm9kZX0+XG4gICAgICAgIHsoeyByb3V0ZSwgY29udGVudCB9KSA9PiB7XG4gICAgICAgICAgaWYgKHJvdXRlLm5hbWUgPT09IHBhZ2VOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gPFBhZ2UgLz47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgIH19XG4gICAgICA8L1JvdXRlTm9kZT5cbiAgICA8L01haW5MYXlvdXQ+XG4gICksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInJvb3RcIjpcInNyYy1wYWdlcy1wYWdlMS1wYWdlLS1yb290LTFHWGstXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDg0ODU4MjY3NTZcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIixcImNzc01vZHVsZVwiOnRydWUsXCJyZWxvYWRBbGxcIjp0cnVlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIDtcbiAgICB9XG4gICIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzIGZyb20gJy4vaW5kZXguc2Nzcyc7XG5cbmV4cG9ydCBjb25zdCBQYWdlID0gUmVhY3QubWVtbygoKSA9PiB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17cy5yb290fT5QYWdlIDE8L2Rpdj47XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLGdDQUtBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFUQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZ0JBOzs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0EsZ0NBS0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==