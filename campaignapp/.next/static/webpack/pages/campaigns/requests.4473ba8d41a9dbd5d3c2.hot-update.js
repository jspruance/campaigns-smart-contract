"use strict";
self["webpackHotUpdate_N_E"]("pages/campaigns/requests",{

/***/ "./pages/campaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/campaigns/requests/index.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_RequestRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/RequestRow */ "./components/RequestRow.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Projects\\Ethereum_and_Solidity_CDG_Course_Udemy\\Campaigns_app\\kickstart\\pages\\campaigns\\requests\\index.js",
    _this = undefined;











var RequestIndex = function RequestIndex(props) {
  var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.Header,
      Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.Row,
      HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.HeaderCell,
      Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.Body;

  var renderRows = function renderRows() {
    return props.requests.map(function (request, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_RequestRow__WEBPACK_IMPORTED_MODULE_3__.default, {
        request: request,
        id: index,
        address: props.address,
        approversCount: props.approversCount
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 14
      }, _this);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h3", {
      children: "Requsts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
      route: "/campaigns/".concat(props.address, "/requests/new"),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
          primary: true,
          floated: "right",
          style: {
            marginBottom: 10
          },
          children: "Add request"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Header, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Row, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(HeaderCell, {
            children: "ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(HeaderCell, {
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(HeaderCell, {
            children: "Amount"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(HeaderCell, {
            children: "Recipient"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(HeaderCell, {
            children: "Approval count"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(HeaderCell, {
            children: "Approve"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(HeaderCell, {
            children: "Finalize"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Body, {
        children: renderRows()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      children: ["Found ", props.requestCount, " requests."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_c = RequestIndex;

RequestIndex.getInitialProps = /*#__PURE__*/function () {
  var _ref = (0,C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(props) {
    var address, campaign, requestCount, approversCount, requests;
    return C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            address = props.query.address;
            campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_6__.default)(address);
            _context.next = 4;
            return campaign.methods.getRequestsCount().call();

          case 4:
            requestCount = _context.sent;
            _context.next = 7;
            return campaign.methods.approversCount().call();

          case 7:
            approversCount = _context.sent;
            _context.next = 10;
            return Promise.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
              return campaign.methods.requests(index).call();
            }));

          case 10:
            requests = _context.sent;
            return _context.abrupt("return", {
              address: address,
              requests: requests,
              requestCount: requestCount,
              approversCount: approversCount
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (RequestIndex);

var _c;

$RefreshReg$(_c, "RequestIndex");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzLjQ0NzNiYThkNDFhOWRiZDVkM2MyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDOUIsTUFBUUMsTUFBUixHQUEwQ1AsMkRBQTFDO0FBQUEsTUFBZ0JRLEdBQWhCLEdBQTBDUix3REFBMUM7QUFBQSxNQUFxQlMsVUFBckIsR0FBMENULCtEQUExQztBQUFBLE1BQWlDVSxJQUFqQyxHQUEwQ1YseURBQTFDOztBQUVBLE1BQU1XLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsV0FBT0wsS0FBSyxDQUFDTSxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWLEVBQW9CO0FBQzVDLDBCQUFPLDhEQUFDLDJEQUFEO0FBQ0wsZUFBTyxFQUFFRCxPQURKO0FBRUwsVUFBRSxFQUFFQyxLQUZDO0FBSUwsZUFBTyxFQUFFVCxLQUFLLENBQUNVLE9BSlY7QUFLTCxzQkFBYyxFQUFFVixLQUFLLENBQUNXO0FBTGpCLFNBR0FGLEtBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBT0QsS0FSTSxDQUFQO0FBU0QsR0FWRDs7QUFZQSxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyx5Q0FBRDtBQUFNLFdBQUssdUJBQWdCVCxLQUFLLENBQUNVLE9BQXRCLGtCQUFYO0FBQUEsNkJBQ0U7QUFBQSwrQkFDRSw4REFBQyxxREFBRDtBQUFRLGlCQUFPLE1BQWY7QUFBZ0IsaUJBQU8sRUFBQyxPQUF4QjtBQUFnQyxlQUFLLEVBQUU7QUFBRUUsWUFBQUEsWUFBWSxFQUFFO0FBQWhCLFdBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQVNFLDhEQUFDLG9EQUFEO0FBQUEsOEJBQ0UsOERBQUMsTUFBRDtBQUFBLCtCQUNFLDhEQUFDLEdBQUQ7QUFBQSxrQ0FDRSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0UsOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRixlQU1FLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFPRSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVlFLDhEQUFDLElBQUQ7QUFBQSxrQkFFSVAsVUFBVTtBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURixlQTJCRTtBQUFBLDJCQUFZTCxLQUFLLENBQUNhLFlBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStCRCxDQTlDRDs7S0FBTWQ7O0FBZ0ROQSxZQUFZLENBQUNlLGVBQWI7QUFBQSxtV0FBK0IsaUJBQU9kLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3JCVSxZQUFBQSxPQURxQixHQUNUVixLQUFLLENBQUNlLEtBREcsQ0FDckJMLE9BRHFCO0FBRXZCTSxZQUFBQSxRQUZ1QixHQUVabkIsMkRBQVEsQ0FBQ2EsT0FBRCxDQUZJO0FBQUE7QUFBQSxtQkFHRk0sUUFBUSxDQUFDQyxPQUFULENBQWlCQyxnQkFBakIsR0FBb0NDLElBQXBDLEVBSEU7O0FBQUE7QUFHdkJOLFlBQUFBLFlBSHVCO0FBQUE7QUFBQSxtQkFJQUcsUUFBUSxDQUFDQyxPQUFULENBQWlCTixjQUFqQixHQUFrQ1EsSUFBbEMsRUFKQTs7QUFBQTtBQUl2QlIsWUFBQUEsY0FKdUI7QUFBQTtBQUFBLG1CQU1OUyxPQUFPLENBQUNDLEdBQVIsQ0FDckJDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDVixZQUFELENBQVQsQ0FBTCxDQUE4QlcsSUFBOUIsR0FBcUNqQixHQUFyQyxDQUF5QyxVQUFDa0IsT0FBRCxFQUFVaEIsS0FBVixFQUFvQjtBQUMzRCxxQkFBT08sUUFBUSxDQUFDQyxPQUFULENBQWlCWCxRQUFqQixDQUEwQkcsS0FBMUIsRUFBaUNVLElBQWpDLEVBQVA7QUFDRCxhQUZELENBRHFCLENBTk07O0FBQUE7QUFNdkJiLFlBQUFBLFFBTnVCO0FBQUEsNkNBWXRCO0FBQUVJLGNBQUFBLE9BQU8sRUFBUEEsT0FBRjtBQUFXSixjQUFBQSxRQUFRLEVBQVJBLFFBQVg7QUFBcUJPLGNBQUFBLFlBQVksRUFBWkEsWUFBckI7QUFBbUNGLGNBQUFBLGNBQWMsRUFBZEE7QUFBbkMsYUFac0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBL0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZUEsK0RBQWVaLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVxdWVzdFJvdyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1JlcXVlc3RSb3cnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFRhYmxlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnbic7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5cclxuY29uc3QgUmVxdWVzdEluZGV4ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBIZWFkZXIsIFJvdywgSGVhZGVyQ2VsbCwgQm9keSB9ID0gVGFibGU7XHJcblxyXG4gIGNvbnN0IHJlbmRlclJvd3MgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvcHMucmVxdWVzdHMubWFwKChyZXF1ZXN0LCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gPFJlcXVlc3RSb3dcclxuICAgICAgICByZXF1ZXN0PXtyZXF1ZXN0fVxyXG4gICAgICAgIGlkPXtpbmRleH1cclxuICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgIGFkZHJlc3M9e3Byb3BzLmFkZHJlc3N9XHJcbiAgICAgICAgYXBwcm92ZXJzQ291bnQ9e3Byb3BzLmFwcHJvdmVyc0NvdW50fVxyXG4gICAgICAvPjtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGgzPlJlcXVzdHM8L2gzPlxyXG4gICAgICA8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHtwcm9wcy5hZGRyZXNzfS9yZXF1ZXN0cy9uZXdgfT5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBmbG9hdGVkPVwicmlnaHRcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19PlxyXG4gICAgICAgICAgICBBZGQgcmVxdWVzdFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxUYWJsZT5cclxuICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPEhlYWRlckNlbGw+SUQ8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPkRlc2NyaXB0aW9uPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICA8SGVhZGVyQ2VsbD5BbW91bnQ8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPlJlY2lwaWVudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgPEhlYWRlckNlbGw+QXBwcm92YWwgY291bnQ8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFwcHJvdmU8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPkZpbmFsaXplPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgPEJvZHk+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlclJvd3MoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvQm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgICAgPGRpdj5Gb3VuZCB7cHJvcHMucmVxdWVzdENvdW50fSByZXF1ZXN0cy48L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXF1ZXN0SW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBhZGRyZXNzIH0gPSBwcm9wcy5xdWVyeTtcclxuICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xyXG4gIGNvbnN0IHJlcXVlc3RDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0UmVxdWVzdHNDb3VudCgpLmNhbGwoKTtcclxuICBjb25zdCBhcHByb3ZlcnNDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuYXBwcm92ZXJzQ291bnQoKS5jYWxsKCk7XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICBBcnJheShwYXJzZUludChyZXF1ZXN0Q291bnQpKS5maWxsKCkubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5yZXF1ZXN0cyhpbmRleCkuY2FsbCgpXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7IGFkZHJlc3MsIHJlcXVlc3RzLCByZXF1ZXN0Q291bnQsIGFwcHJvdmVyc0NvdW50IH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RJbmRleDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlcXVlc3RSb3ciLCJCdXR0b24iLCJUYWJsZSIsIkxpbmsiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJSZXF1ZXN0SW5kZXgiLCJwcm9wcyIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwicmVuZGVyUm93cyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiYWRkcmVzcyIsImFwcHJvdmVyc0NvdW50IiwibWFyZ2luQm90dG9tIiwicmVxdWVzdENvdW50IiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsIlByb21pc2UiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9