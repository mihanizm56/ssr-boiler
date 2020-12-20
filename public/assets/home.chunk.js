(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home"],{

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

/***/ "./src/pages/home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_router_components_route_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/modules/router/_components/route-node */ "./src/modules/router/_components/route-node.tsx");
/* harmony import */ var _layouts_main_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts/main-layout */ "./src/layouts/main-layout/index.tsx");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page */ "./src/pages/home/page/index.tsx");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var pageNode = 'home';

var action = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var i18n;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i18n = _ref.i18n;
            return _context.abrupt("return", {
              title: i18n.instance.t('home:title'),
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

/***/ "./src/pages/home/page/index.scss":
/*!****************************************!*\
  !*** ./src/pages/home/page/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"root":"src-pages-home-page--root-2NoTO"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/pages/home/page/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/home/page/index.tsx ***!
  \***************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/pages/home/page/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);


var Page = react__WEBPACK_IMPORTED_MODULE_0__["memo"](function () {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root
  }, "Home");
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL21haW4tbGF5b3V0L2luZGV4LnNjc3M/Y2M1ZiIsIi9ob21lL21paGFuaXptNTYvRG9jdW1lbnRzL093bi9ib2lsZXJwbGF0ZS1yb3V0ZXI1LXNzci9ib2lsZXJwbGF0ZS9zcmMvbGF5b3V0cy9tYWluLWxheW91dC9pbmRleC50c3giLCIvaG9tZS9taWhhbml6bTU2L0RvY3VtZW50cy9Pd24vYm9pbGVycGxhdGUtcm91dGVyNS1zc3IvYm9pbGVycGxhdGUvc3JjL3BhZ2VzL2hvbWUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9ob21lL3BhZ2UvaW5kZXguc2Nzcz9hMjIyIiwiL2hvbWUvbWloYW5pem01Ni9Eb2N1bWVudHMvT3duL2JvaWxlcnBsYXRlLXJvdXRlcjUtc3NyL2JvaWxlcnBsYXRlL3NyYy9wYWdlcy9ob21lL3BhZ2UvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJyb290XCI6XCJzcmMtbGF5b3V0cy1tYWluLWxheW91dC0tcm9vdC1FanlHSVwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjA4NDg1ODI2Nzg3XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCIsXCJjc3NNb2R1bGVcIjp0cnVlLFwicmVsb2FkQWxsXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICA7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcHMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb25uZWN0ZWRMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyNSc7XG5pbXBvcnQgcyBmcm9tICcuL2luZGV4LnNjc3MnO1xuXG5leHBvcnQgY29uc3QgTWFpbkxheW91dCA9IFJlYWN0Lm1lbW8oKHsgY2hpbGRyZW4gfTogUHJvcHM8YW55PikgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fT5cbiAgICA8bmF2PlxuICAgICAgPENvbm5lY3RlZExpbmsgcm91dGVOYW1lPVwiaG9tZVwiPkhvbWU8L0Nvbm5lY3RlZExpbms+XG4gICAgICA8YnIgLz5cbiAgICAgIDxDb25uZWN0ZWRMaW5rIHJvdXRlTmFtZT1cInBhZ2UxXCI+UGFnZSAxPC9Db25uZWN0ZWRMaW5rPlxuICAgICAgPGJyIC8+XG4gICAgICA8Q29ubmVjdGVkTGluayByb3V0ZU5hbWU9XCJwYWdlMlwiPlBhZ2UgMjwvQ29ubmVjdGVkTGluaz5cbiAgICA8L25hdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250ZW50fT57Y2hpbGRyZW59PC9kaXY+XG4gIDwvZGl2PlxuKSk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZU5vZGUgfSBmcm9tICdAL21vZHVsZXMvcm91dGVyL19jb21wb25lbnRzL3JvdXRlLW5vZGUnO1xuaW1wb3J0IHsgTWFpbkxheW91dCB9IGZyb20gJ0AvbGF5b3V0cy9tYWluLWxheW91dCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9wYWdlJztcblxuY29uc3QgcGFnZU5vZGUgPSAnaG9tZSc7XG5cbmNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IGkxOG4gfSkgPT4gKHtcbiAgdGl0bGU6IGkxOG4uaW5zdGFuY2UudCgnaG9tZTp0aXRsZScpLFxuICBjb250ZW50OiAoXG4gICAgPE1haW5MYXlvdXQ+XG4gICAgICA8Um91dGVOb2RlIG5vZGVOYW1lPXtwYWdlTm9kZX0+XG4gICAgICAgIHsoeyByb3V0ZSwgY29udGVudCB9KSA9PiB7XG4gICAgICAgICAgaWYgKHJvdXRlLm5hbWUgPT09IHBhZ2VOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gPFBhZ2UgLz47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgIH19XG4gICAgICA8L1JvdXRlTm9kZT5cbiAgICA8L01haW5MYXlvdXQ+XG4gICksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInJvb3RcIjpcInNyYy1wYWdlcy1ob21lLXBhZ2UtLXJvb3QtMk5vVE9cIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYwODQ4NTgyNjcwMlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwiLFwiY3NzTW9kdWxlXCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWV9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgO1xuICAgIH1cbiAgIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHMgZnJvbSAnLi9pbmRleC5zY3NzJztcblxuZXhwb3J0IGNvbnN0IFBhZ2UgPSBSZWFjdC5tZW1vKCgpID0+IHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PkhvbWU8L2Rpdj47XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLGdDQUtBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFUQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZ0JBOzs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0EsZ0NBS0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==